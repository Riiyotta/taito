#!/usr/bin/env python3
"""
Self-containment + schema + structural + maxWords + drift-proofed checks,
all in one, per BUILD-GUIDE.md 2.7.

Checks:
  1. Draft-07 schema validation of schema/example.pagespec.json — 0 errors.
  2. Allowlist parity: every id in tokens/llm/component-allowlist.json has a
     matching real contract file, and every real primitive/component/section
     file has an allowlist entry. No phantom entries, no orphans.
  3. Citation-range validity: every `measuredFrom` citation of the form
     "path:line[-line]" resolves against the real file it names, and the
     range doesn't exceed that file's real length. Only checked against
     sibling source files that are actually present (degrades gracefully
     with a warning, never a failure, when this design-repo is copied
     standalone with no sibling source tree — see extraction/measured-values.json).
  4. Manifest counts recomputed from the actual files, compared against
     registry.manifest.json's own `counts` block.

Path portability: repo root derived from __file__, never hardcoded.
"""
import json
import os
import re
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FAILURES = []
WARNINGS = []


def load_json(*parts):
    with open(os.path.join(REPO_ROOT, *parts), encoding="utf-8") as f:
        return json.load(f)


def fail(msg):
    FAILURES.append(msg)
    print(f"[FAIL] {msg}")


def warn(msg):
    WARNINGS.append(msg)
    print(f"[WARN] {msg}")


def ok(msg):
    print(f"[OK]   {msg}")


# ---------- 1. Schema validation ----------
def check_schema_validation():
    try:
        from jsonschema import Draft7Validator
    except ImportError:
        fail("jsonschema package not installed — cannot run schema validation")
        return
    schema = load_json("schema", "pagespec.schema.json")
    Draft7Validator.check_schema(schema)
    instance = load_json("schema", "example.pagespec.json")
    v = Draft7Validator(schema)
    errors = list(v.iter_errors(instance))
    if errors:
        for e in errors:
            fail(f"schema validation: {list(e.path)}: {e.message}")
    else:
        ok("Draft-07 schema validation of example.pagespec.json: 0 errors")


# ---------- 2. Allowlist parity ----------
def real_contract_ids():
    ids = set()
    for dirname in ("primitives", "components", "sections"):
        d = os.path.join(REPO_ROOT, dirname)
        for fname in os.listdir(d):
            if not fname.endswith(".json"):
                continue
            with open(os.path.join(d, fname), encoding="utf-8") as f:
                data = json.load(f)
            ids.add(data["id"])
    return ids


def check_allowlist_parity():
    allowlist = load_json("tokens", "llm", "component-allowlist.json")
    allowlist_ids = {e["id"] for e in allowlist["entries"]}
    real_ids = real_contract_ids()

    phantom = allowlist_ids - real_ids
    orphan = real_ids - allowlist_ids

    if phantom:
        fail(f"allowlist parity: {len(phantom)} phantom entries with no matching contract file: {sorted(phantom)}")
    if orphan:
        fail(f"allowlist parity: {len(orphan)} real contract files with no allowlist entry: {sorted(orphan)}")
    if not phantom and not orphan:
        ok(f"allowlist parity: {len(allowlist_ids)} entries, {len(real_ids)} real contracts, exact match")


# ---------- 3. Citation-range validity ----------
CITATION_RE = re.compile(r"([A-Za-z0-9_./\\-]+\.(?:md|js|json|py)):(\d+)(?:-(\d+))?")


def collect_citations(obj, found):
    if isinstance(obj, str):
        for m in CITATION_RE.finditer(obj):
            found.append((m.group(1), int(m.group(2)), int(m.group(3)) if m.group(3) else int(m.group(2))))
    elif isinstance(obj, dict):
        for v in obj.values():
            collect_citations(v, found)
    elif isinstance(obj, list):
        for v in obj:
            collect_citations(v, found)


def check_citation_validity():
    citations = []
    for dirname in ("tokens", "primitives", "components", "sections", "templates", "compatibility", "extraction"):
        d = os.path.join(REPO_ROOT, dirname)
        if not os.path.isdir(d):
            continue
        for root, _, files in os.walk(d):
            for fname in files:
                if not fname.endswith(".json"):
                    continue
                with open(os.path.join(root, fname), encoding="utf-8") as f:
                    try:
                        data = json.load(f)
                    except json.JSONDecodeError:
                        continue
                collect_citations(data, citations)

    checked = 0
    out_of_range = 0
    no_sibling = 0
    for path, start, end in citations:
        # citations are relative to REPO_ROOT's parent (the sibling source project)
        real_path = os.path.normpath(os.path.join(REPO_ROOT, path)) if path.startswith("..") else \
            os.path.normpath(os.path.join(REPO_ROOT, "..", path))
        if not os.path.isfile(real_path):
            no_sibling += 1
            continue
        with open(real_path, encoding="utf-8", errors="ignore") as f:
            line_count = sum(1 for _ in f)
        checked += 1
        if end > line_count:
            out_of_range += 1
            fail(f"citation out of range: {path}:{start}-{end} (file has only {line_count} lines)")

    if no_sibling > 0:
        warn(f"citation validity: {no_sibling} citations reference sibling source files not present in this environment (expected when design-repo/ is copied standalone) — skipped, not failed")
    if checked > 0 and out_of_range == 0:
        ok(f"citation validity: {checked} citations resolved against real sibling files, 0 out of range")
    elif checked == 0:
        ok("citation validity: no sibling source files present to check against (standalone copy) — degraded gracefully")


# ---------- 4. Manifest counts recomputed ----------
def check_manifest_counts():
    manifest = load_json("registry.manifest.json")
    templates = load_json("templates", "templates.json")["templates"]
    real_counts = {
        "primitives": len(os.listdir(os.path.join(REPO_ROOT, "primitives"))),
        "components": len(os.listdir(os.path.join(REPO_ROOT, "components"))),
        "sections": len(os.listdir(os.path.join(REPO_ROOT, "sections"))),
        "templates": len(templates),
        "routes": sum(t["routeCount"] for t in templates),
    }
    claimed = manifest.get("counts", {})
    mismatches = []
    for k, v in real_counts.items():
        if claimed.get(k) != v:
            mismatches.append((k, claimed.get(k), v))
    if mismatches:
        for k, claimed_v, real_v in mismatches:
            fail(f"manifest counts.{k} claims {claimed_v} but real count is {real_v}")
    else:
        ok(f"manifest counts recomputed and match: {real_counts}")


# ---------- 5. Absolute path leak check ----------
ABS_PATH_PATTERN = "/" + "Users/"  # split to avoid this very file matching its own literal


def check_no_absolute_paths():
    self_path = os.path.abspath(__file__)
    leaks = []
    for root, _, files in os.walk(REPO_ROOT):
        for fname in files:
            if not fname.endswith((".json", ".py", ".md")):
                continue
            fpath = os.path.join(root, fname)
            if os.path.abspath(fpath) == self_path:
                continue  # this script's own source necessarily contains the search pattern as a string literal
            with open(fpath, encoding="utf-8", errors="ignore") as f:
                content = f.read()
            if ABS_PATH_PATTERN in content:
                leaks.append(os.path.relpath(fpath, REPO_ROOT))
    if leaks:
        fail(f"absolute path leak ({ABS_PATH_PATTERN}) found in: {leaks}")
    else:
        ok(f"no absolute {ABS_PATH_PATTERN} paths found anywhere in design-repo/ (excluding this checker's own source)")


# ---------- 6. Entry points self-containment ----------
def check_entry_points_self_contained():
    manifest = load_json("registry.manifest.json")
    entry_points = manifest.get("entryPoints", [])
    bad = [e for e in entry_points if e.startswith("..") or e.startswith("/")]
    if bad:
        fail(f"registry.manifest.json entryPoints contains external/absolute paths: {bad}")
    else:
        missing = [e for e in entry_points if not os.path.isfile(os.path.join(REPO_ROOT, e))]
        if missing:
            fail(f"registry.manifest.json entryPoints references files that don't exist: {missing}")
        else:
            ok(f"registry.manifest.json entryPoints: {len(entry_points)} entries, all inside design-repo/, all exist")


def check_adversarial_suite():
    import subprocess
    result = subprocess.run(
        [sys.executable, os.path.join(REPO_ROOT, "schema", "tests", "adversarial_test.py")],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        fail(f"adversarial test suite failed (exit {result.returncode}):\n{result.stdout}\n{result.stderr}")
    else:
        last_line = [l for l in result.stdout.strip().split("\n") if l.strip()][-1]
        ok(f"adversarial test suite: {last_line}")


def main():
    print(f"Repo root: {REPO_ROOT}\n")
    check_schema_validation()
    check_allowlist_parity()
    check_citation_validity()
    check_manifest_counts()
    check_no_absolute_paths()
    check_entry_points_self_contained()
    check_adversarial_suite()

    print(f"\n{len(FAILURES)} failure(s), {len(WARNINGS)} warning(s)")
    sys.exit(1 if FAILURES else 0)


if __name__ == "__main__":
    main()
