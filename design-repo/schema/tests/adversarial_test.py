#!/usr/bin/env python3
"""
Adversarial test suite for semantic_validate.py.

For every rule the validator enforces, constructs a mutated instance that
should be REJECTED, and proves it is. Also asserts the CONTROL case: the
real example, and a minimal valid instance per real template, produce zero
errors — a validator that rejects everything is as broken as one that
rejects nothing (BUILD-GUIDE.md 2.8).

Path portability: repo root derived from __file__, never hardcoded.
"""
import copy
import json
import os
import sys

TESTS_DIR = os.path.dirname(os.path.abspath(__file__))
SCHEMA_DIR = os.path.dirname(TESTS_DIR)
REPO_ROOT = os.path.dirname(SCHEMA_DIR)
sys.path.insert(0, SCHEMA_DIR)

from semantic_validate import (  # noqa: E402
    validate_pagespec, load_templates, load_sections, load_motion_inventory, load_graph
)

PASS = "\033[32mPASS\033[0m"
FAIL = "\033[31mFAIL\033[0m"

results = []


def check(name, condition):
    results.append((name, condition))
    print(f"{PASS if condition else FAIL}  {name}")


def load_example():
    with open(os.path.join(SCHEMA_DIR, "example.pagespec.json"), encoding="utf-8") as f:
        return json.load(f)


def has_error_containing(errors, substring):
    return any(substring.lower() in str(e).lower() for e in errors)


def run():
    templates = load_templates()
    sections = load_sections()
    motion_ids = load_motion_inventory()
    graph_rules = load_graph()

    def validate(spec):
        return validate_pagespec(spec, templates, sections, motion_ids, graph_rules)

    # ---------- CONTROL CASES ----------
    example = load_example()
    errors = validate(example)
    check("CONTROL: real example.pagespec.json produces zero errors", len(errors) == 0)

    # One minimal valid control PageSpec per real template — auto-synthesized
    # from each template's own node list (only required:true nodes, minimal content).
    for tid, t in templates.items():
        minimal_nodes = []
        for n in t["nodes"]:
            if not n.get("required", True):
                continue
            sid = n["section"]
            section = sections.get(sid, {})
            content_contract = section.get("content", {})
            minimal_content = {}
            for k, v in content_contract.items():
                if isinstance(v, dict) and "const" in v:
                    minimal_content[k] = v["const"]
                elif isinstance(v, dict) and "example" in v:
                    minimal_content[k] = v["example"]
                elif isinstance(v, dict) and v.get("type") == "array":
                    minimal_content[k] = []
                elif isinstance(v, dict) and v.get("type") == "string":
                    minimal_content[k] = "x"
                elif isinstance(v, dict) and v.get("type") == "boolean":
                    minimal_content[k] = False
            minimal_nodes.append({
                "section": sid,
                "content": minimal_content,
                "motion": {"reducedMotionFallback": "n/a for minimal control instance"}
            })
        # Use the template's own first real route when it has one (this is what
        # actually proves a real runtime route validates against this template,
        # not just a synthetic placeholder path) — falls back to a synthetic
        # path only for templates with no literal `routes` sample (patterned
        # route families like blog-post, which use routePattern instead).
        real_routes = t.get("routes") or []
        route = real_routes[0] if real_routes and not str(real_routes[0]).endswith("...") else "/synthetic-control"
        minimal_spec = {
            "pageSpecVersion": "1.0.0",
            "route": route,
            "template": tid,
            "nodes": minimal_nodes
        }
        errs = validate(minimal_spec)
        # Only count hard errors for this generic control (maxWords on empty/short
        # strings will never overflow, so any hard error here is a real cross-ref bug)
        hard = [e for e in errs if e.severity == "error"]
        check(f"CONTROL: minimal auto-synthesized instance for {tid} produces zero hard errors", len(hard) == 0)

    # ---------- ADVERSARIAL: schema-layer style mutations (checked via validator's own logic) ----------

    # 1. Missing required section for its template
    mutated = copy.deepcopy(example)
    mutated["nodes"] = [n for n in mutated["nodes"] if n["section"] != "shell.footer"]
    errs = validate(mutated)
    check("ADVERSARIAL: removing required shell.footer is rejected",
          has_error_containing(errs, "requires section 'shell.footer'"))

    # 2. Section not part of the declared template (template/PageSpec drift —
    #    the single most-repeated bug class, MASTER-GUIDE.md 3.3)
    mutated = copy.deepcopy(example)
    mutated["nodes"].append({
        "section": "utility.calculator",
        "content": {"calcId": "vuosilomalaskuri"},
        "motion": {"reducedMotionFallback": "n/a"}
    })
    errs = validate(mutated)
    check("ADVERSARIAL: adding a section not in template.home's real node list is rejected",
          has_error_containing(errs, "is not part of template"))

    # 3. Missing reducedMotionFallback
    mutated = copy.deepcopy(example)
    mutated["nodes"][1]["motion"]["reducedMotionFallback"] = ""
    errs = validate(mutated)
    check("ADVERSARIAL: empty reducedMotionFallback is rejected",
          has_error_containing(errs, "reducedMotionFallback is required"))

    # 4. Invented motion pattern id
    mutated = copy.deepcopy(example)
    mutated["nodes"][1]["motion"]["pattern"] = "invented-fake-animation"
    errs = validate(mutated)
    check("ADVERSARIAL: invented motion pattern id is rejected",
          has_error_containing(errs, "unknown motion pattern"))

    # 5. maxWords overflow on a real field
    mutated = copy.deepcopy(example)
    for n in mutated["nodes"]:
        if n["section"] == "hero.marketing":
            n["content"]["title"] = " ".join(["word"] * 50)  # hero.marketing title maxWords: 5
    errs = validate(mutated)
    check("ADVERSARIAL: maxWords overflow on hero.marketing.title is rejected",
          has_error_containing(errs, "maxWords exceeded"))

    # 6. Duplicate one-per-page section (content.faq twice)
    mutated = copy.deepcopy(example)
    faq_node = next(n for n in mutated["nodes"] if n["section"] == "content.faq")
    mutated["nodes"].append(copy.deepcopy(faq_node))
    errs = validate(mutated)
    check("ADVERSARIAL: duplicate content.faq (ONE_FAQ_PER_PAGE) is rejected",
          has_error_containing(errs, "content.faq may appear at most once"))

    # 7. Template/node-sequence mismatch: declare a template this PageSpec doesn't match
    mutated = copy.deepcopy(example)
    mutated["template"] = "template.legal"  # legal template has completely different real nodes
    errs = validate(mutated)
    check("ADVERSARIAL: declaring template.legal while keeping template.home's nodes is rejected",
          len([e for e in errs if e.severity == "error"]) > 0)

    # 8. compliance-calendar invalid country (real content gap enforcement)
    mutated = {
        "pageSpecVersion": "1.0.0",
        "route": "/compliance/netherlands/calendar",
        "template": "template.compliance-calendar",
        "nodes": [
            {"section": "shell.navbar", "content": {"logoLabel": "Taito.ai"}, "motion": {"reducedMotionFallback": "n/a"}},
            {"section": "hero.page-header", "content": {"eyebrow": "x", "title": "x", "description": "x"}, "motion": {"reducedMotionFallback": "n/a"}},
            {"section": "utility.compliance-calendar", "content": {"country": "netherlands", "events": []}, "motion": {"reducedMotionFallback": "n/a"}},
            {"section": "shell.footer", "content": {"ctaHeadline": "x", "ctaBody": "x", "ctaButtonLabel": "Join waitlist", "linkColumns": [], "copyrightLine": "x", "socialLinks": []}, "motion": {"reducedMotionFallback": "n/a"}},
            {"section": "shell.cookie-banner", "content": {"title": "We value your privacy", "body": "x", "buttonLabels": {"accept": "Accept all", "reject": "Reject all", "customize": "Customize"}, "customizeCategories": []}, "motion": {"reducedMotionFallback": "n/a"}},
        ],
    }
    errs = validate(mutated)
    check("ADVERSARIAL: compliance-calendar targeting netherlands (no real calendar data) is rejected",
          has_error_containing(errs, "no real calendar content"))

    # 9. Missing content.legal-doc's required doc on template.legal (out-of-order/missing content field —
    #    demonstrates content-field presence isn't separately schema-enforced by design (see token-policy.json),
    #    but structural node presence IS — verify legal template still requires content.legal-doc node itself
    mutated = {
        "pageSpecVersion": "1.0.0",
        "route": "/privacy",
        "template": "template.legal",
        "nodes": [
            {"section": "shell.navbar", "content": {"logoLabel": "Taito.ai"}, "motion": {"reducedMotionFallback": "n/a"}},
            {"section": "shell.footer", "content": {"ctaHeadline": "x", "ctaBody": "x", "ctaButtonLabel": "Join waitlist", "linkColumns": [], "copyrightLine": "x", "socialLinks": []}, "motion": {"reducedMotionFallback": "n/a"}},
            {"section": "shell.cookie-banner", "content": {"title": "We value your privacy", "body": "x", "buttonLabels": {"accept": "Accept all", "reject": "Reject all", "customize": "Customize"}, "customizeCategories": []}, "motion": {"reducedMotionFallback": "n/a"}},
        ],
    }
    errs = validate(mutated)
    check("ADVERSARIAL: template.legal missing its required content.legal-doc node is rejected",
          has_error_containing(errs, "requires section 'content.legal-doc'"))

    # 10. Reordered fixed-position section (shell.navbar not first)
    mutated = copy.deepcopy(example)
    mutated["nodes"] = mutated["nodes"][1:] + [mutated["nodes"][0]]
    errs = validate(mutated)
    check("ADVERSARIAL: shell.navbar not first is rejected",
          has_error_containing(errs, "shell.navbar must be the first node"))

    # ---------- Summary ----------
    passed = sum(1 for _, ok in results if ok)
    total = len(results)
    print(f"\n{passed}/{total} checks passed")
    return passed == total


if __name__ == "__main__":
    ok = run()
    sys.exit(0 if ok else 1)
