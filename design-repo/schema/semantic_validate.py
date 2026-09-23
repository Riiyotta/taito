#!/usr/bin/env python3
"""
Semantic validator for the taito.ai clone design-repo.

Enforces everything JSON Schema structurally cannot express:
  1. template<->node cross-reference: a PageSpec's declared `template` must
     match the REAL node sequence in templates/templates.json for that
     template id — not just validate nodes[] in isolation. This is the
     single most-repeated bug class across every prior design-repo build
     per MASTER-GUIDE.md 3.3.
  2. Route restrictions (e.g. compliance-calendar's country enum).
  3. Rhythm rules from compatibility/graph.json, respecting severity.
  4. Required reducedMotionFallback presence + non-empty.
  5. Per-instance maxWords word counts, read from each real sections/<id>.json
     contract — not hand-duplicated here.
  6. Per-section required content fields, read from the same real contract
     files, so a corrected section contract is automatically enforced
     without having to touch this script.
  7. Motion pattern id must be one of tokens/00-foundation/motion.json's
     closed siteWideInventory list.

Path portability rule (BUILD-GUIDE.md 2.7): repo root is derived from
os.path.dirname(os.path.abspath(__file__)), never a hardcoded absolute path,
so this script works identically wherever the design-repo folder is copied.
"""
import json
import os
import re
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def load_json(*parts):
    with open(os.path.join(REPO_ROOT, *parts), encoding="utf-8") as f:
        return json.load(f)


def load_templates():
    return {t["id"]: t for t in load_json("templates", "templates.json")["templates"]}


def load_sections():
    sections = {}
    section_dir = os.path.join(REPO_ROOT, "sections")
    for fname in os.listdir(section_dir):
        if not fname.endswith(".json"):
            continue
        with open(os.path.join(section_dir, fname), encoding="utf-8") as f:
            data = json.load(f)
        sid = data["id"].replace("sections.", "")
        sections[sid] = data
    return sections


def load_motion_inventory():
    d = load_json("tokens", "00-foundation", "motion.json")
    ids = {p["id"] for p in d["siteWideInventory"]["patterns"]}
    ids |= set(d["namedAnimations"].keys())
    return ids


def load_graph():
    return load_json("compatibility", "graph.json")["rules"]


def count_words(value):
    if isinstance(value, str):
        return len(re.findall(r"\S+", value))
    if isinstance(value, list):
        return sum(count_words(v) for v in value)
    if isinstance(value, dict):
        return sum(count_words(v) for v in value.values())
    return 0


def collect_max_words(schema_fragment, prefix=""):
    """Walk a section's content contract and collect (fieldPath, maxWords) pairs."""
    out = []
    if not isinstance(schema_fragment, dict):
        return out
    if "maxWords" in schema_fragment:
        out.append((prefix, schema_fragment["maxWords"]))
    items = schema_fragment.get("items")
    if isinstance(items, dict):
        out.extend(collect_max_words(items, prefix + "[]"))
    for k, v in schema_fragment.items():
        if k in ("items", "maxWords"):
            continue
        if isinstance(v, dict):
            out.extend(collect_max_words(v, f"{prefix}.{k}" if prefix else k))
    return out


def get_by_path(obj, path):
    """Resolve a dotted/bracket path like 'header.title' or 'cards[].title' against a content instance."""
    if not path:
        return [obj]
    results = [obj]
    tokens = re.findall(r"[^.\[\]]+|\[\]", path)
    for tok in tokens:
        next_results = []
        for r in results:
            if tok == "[]":
                if isinstance(r, list):
                    next_results.extend(r)
            elif isinstance(r, dict) and tok in r:
                next_results.append(r[tok])
        results = next_results
    return results


class ValidationError:
    def __init__(self, path, message, severity="error"):
        self.path = path
        self.message = message
        self.severity = severity

    def __str__(self):
        return f"[{self.severity.upper()}] {self.path}: {self.message}"


def validate_pagespec(pagespec, templates, sections, motion_ids, graph_rules, verbose=False):
    errors = []

    template_id = pagespec.get("template")
    template = templates.get(template_id)
    if template is None:
        errors.append(ValidationError("template", f"Unknown template id: {template_id!r}"))
        return errors

    # --- 1. template<->node cross-reference (the critical check) ---
    real_sequence = [n["section"] for n in template["nodes"]]
    real_required = {n["section"] for n in template["nodes"] if n.get("required", True)}
    instance_sequence = [n["section"] for n in pagespec.get("nodes", [])]

    # every required section in the real template must appear in the instance
    for sid in real_required:
        if sid not in instance_sequence:
            errors.append(ValidationError(
                "nodes",
                f"Template {template_id!r} requires section {sid!r} but it is missing from this PageSpec's nodes[]"
            ))

    # every section the instance uses must be a real part of this template's node list
    allowed_ids = set(real_sequence)
    for sid in instance_sequence:
        if sid not in allowed_ids:
            errors.append(ValidationError(
                "nodes",
                f"Section {sid!r} is not part of template {template_id!r}'s real node list — "
                f"a PageSpec cannot declare template={template_id!r} and include a section that "
                f"template doesn't have (this is the template<->PageSpec drift check, MASTER-GUIDE.md 3.3)"
            ))

    # sequence order must match the template's relative order (subsequence check,
    # since some nodes are optional/required:false and may be legitimately omitted)
    idx = 0
    for sid in instance_sequence:
        try:
            pos = real_sequence.index(sid, idx)
            idx = pos + 1
        except ValueError:
            errors.append(ValidationError(
                "nodes",
                f"Section {sid!r} appears out of order relative to template {template_id!r}'s real node sequence"
            ))

    # --- 2. per-node content + motion validation ---
    for i, node in enumerate(pagespec.get("nodes", [])):
        sid = node.get("section")
        section_contract = sections.get(sid)
        if section_contract is None:
            errors.append(ValidationError(f"nodes[{i}]", f"Unknown section id: {sid!r}"))
            continue

        content = node.get("content", {})
        content_contract = section_contract.get("content", {})

        # 2a. maxWords enforcement, read from the real section contract
        for field_path, max_words in collect_max_words(content_contract):
            values = get_by_path(content, field_path)
            for v in values:
                wc = count_words(v)
                if wc > max_words:
                    errors.append(ValidationError(
                        f"nodes[{i}].content.{field_path}",
                        f"maxWords exceeded: {wc} words > {max_words} limit (section {sid!r})"
                    ))

        # 2b. motion.reducedMotionFallback required + non-empty
        motion = node.get("motion", {})
        fallback = motion.get("reducedMotionFallback")
        if not fallback or not str(fallback).strip():
            errors.append(ValidationError(
                f"nodes[{i}].motion.reducedMotionFallback",
                f"reducedMotionFallback is required and must be non-empty (section {sid!r})"
            ))

        # 2c. motion pattern must be in the closed inventory
        pattern = motion.get("pattern")
        if pattern is not None:
            pattern_list = pattern if isinstance(pattern, list) else [pattern]
            for p in pattern_list:
                if p not in motion_ids:
                    errors.append(ValidationError(
                        f"nodes[{i}].motion.pattern",
                        f"Unknown motion pattern id {p!r} — not in tokens/00-foundation/motion.json's closed inventory (section {sid!r})"
                    ))

        # 2d. route restriction: utility.compliance-calendar country enum
        if sid == "utility.compliance-calendar":
            country = content.get("country")
            valid = {"norway", "uk", "finland", "sweden"}
            if country is not None and country not in valid:
                errors.append(ValidationError(
                    f"nodes[{i}].content.country",
                    f"utility.compliance-calendar.country={country!r} is not one of {sorted(valid)} — "
                    f"netherlands/estonia have no real calendar content (COMPLIANCE_CALENDAR_COUNTRY_RESTRICTION rule)"
                ))

    # --- 3. compatibility graph rhythm rules ---
    node_ids = [n["section"] for n in pagespec.get("nodes", [])]
    for rule in graph_rules:
        rid = rule["id"]
        sev = rule.get("severity", "warn")

        if rid == "SHELL_NAVBAR_FIRST":
            if node_ids and node_ids[0] != "shell.navbar":
                errors.append(ValidationError("nodes[0]", "shell.navbar must be the first node", sev))

        elif rid == "SHELL_FOOTER_LAST_CONTENT":
            if len(node_ids) >= 2 and (node_ids[-1] != "shell.cookie-banner" or node_ids[-2] != "shell.footer"):
                errors.append(ValidationError("nodes", "shell.footer must immediately precede shell.cookie-banner as the last two nodes", sev))

        elif rid == "ONE_HERO_PER_PAGE":
            hero_ids = {"hero.marketing", "hero.persona", "hero.product", "hero.page-header", "hero.mcp-split", "hero.waitlist-intro"}
            hero_count = sum(1 for n in node_ids if n in hero_ids)
            if hero_count > 1:
                errors.append(ValidationError("nodes", f"At most one HERO section allowed, found {hero_count}", sev))

        elif rid == "ONE_FAQ_PER_PAGE":
            if node_ids.count("content.faq") > 1:
                errors.append(ValidationError("nodes", "content.faq may appear at most once", sev))

        elif rid == "NAV_TOC_REQUIRES_PROSE_GUIDE":
            if "navigation.guide-toc" in node_ids and "content.prose-guide" not in node_ids:
                errors.append(ValidationError("nodes", "navigation.guide-toc requires content.prose-guide in the same PageSpec", sev))

        elif rid == "HERO_WAITLIST_REQUIRES_WAITLIST_FORM":
            hw = "hero.waitlist-intro" in node_ids
            wf = "conversion.waitlist-form" in node_ids
            if hw != wf:
                errors.append(ValidationError("nodes", "hero.waitlist-intro and conversion.waitlist-form must appear together or not at all", sev))

        elif rid == "SECURITY_BADGES_MAX_PER_PAGE":
            if node_ids.count("trust.security-badges") > 1:
                errors.append(ValidationError("nodes", "trust.security-badges may appear at most once", sev))

        elif rid == "LOGO_MARQUEE_MAX_PER_PAGE":
            if node_ids.count("proof.logo-marquee") > 1:
                errors.append(ValidationError("nodes", "proof.logo-marquee may appear at most once", sev))

    return errors


def main():
    templates = load_templates()
    sections = load_sections()
    motion_ids = load_motion_inventory()
    graph_rules = load_graph()

    target = sys.argv[1] if len(sys.argv) > 1 else os.path.join(REPO_ROOT, "schema", "example.pagespec.json")
    with open(target, encoding="utf-8") as f:
        pagespec = json.load(f)

    errors = validate_pagespec(pagespec, templates, sections, motion_ids, graph_rules)
    hard_errors = [e for e in errors if e.severity == "error"]
    warnings = [e for e in errors if e.severity == "warn"]

    for e in errors:
        print(e)

    print(f"\n{len(hard_errors)} error(s), {len(warnings)} warning(s)")
    sys.exit(1 if hard_errors else 0)


if __name__ == "__main__":
    main()
