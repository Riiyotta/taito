# taito.ai clone — design-repo

A curated, versioned, machine-validated design system for the taito.ai clone
project (React 18 + Vite 5 + Tailwind v3), built for an AI generator to
compose new on-brand pages without inventing colors, copy, or structure. This
package documents a **real company's real content** — see the Compliance
section below before generating or publishing anything from it.

## What's in here (real counts, recomputed by `extraction/verify_all.py`)

- **6 primitives** (`primitives/`) — button, link, icon, badge, avatar, input
- **7 components** (`components/`) — card-base, feature-icon-tile,
  feature-list-item, stat-block, quote-block, faq-item, section-header
- **44 sections** (`sections/`) — one real, evidence-cited content contract
  per distinct section type actually observed on the live site
- **20 templates** (`templates/templates.json`) — one per distinct real page
  shape, covering all **202 real routes** on the site
- A closed **compatibility graph** (`compatibility/graph.json`) with 12
  rhythm/structural rules, each verified against the real template data
  before being written (see CHANGELOG.md for two rules that were caught and
  corrected mid-build after failing that check)
- A draft-07 JSON Schema (`schema/pagespec.schema.json`), one real passing
  example instance (`schema/example.pagespec.json`), a semantic validator
  (`schema/semantic_validate.py`), and an adversarial test suite
  (`schema/tests/adversarial_test.py`) — **31/31 checks pass**, including one
  auto-synthesized control instance per real template

## Source of truth

Every token, section contract, and template cites real evidence:

- `tailwind.config.js` and `src/index.css` in the sibling source project are
  real, running code — the token source of truth, not just documentation.
- `CLONE_SPEC.md`, `specs/SPEC_persona_company.md`, and
  `specs/SPEC_product.md` are Playwright-measured specs (real hex colors,
  real `clamp()` formulas, real motion timings) for the home/persona/
  company/product route families.
- `ia.json` (this project's own validated information architecture — see
  `IA.md`/`README-IA.md` in the sibling project) is the primary source for
  every template's node sequence and every section's id/description/scope.
- The blog, mcp-use-cases, tools, and compliance/legal route families had no
  prose spec doc before this build — their section/template shapes here come
  from direct inspection of `src/pages/*.jsx`, `src/components/**/*.jsx`, and
  `src/content/*.js`, cited by file and line where possible.

Full citation trail: `extraction/measured-values.json` (degrades gracefully
— warns, never fails — if this design-repo is copied standalone without its
sibling source project present).

## Compliance — this is a real company's real content

This project clones **taito.ai**, a real HR/people-ops SaaS company. It
contains:

- **Named real employees** with real photos in the team grid (7 people,
  `sections/features-team-grid.json`).
- **Named real customers** with real testimonial quotes (`sections/proof-testimonial.json`).
- **Real third-party trademarks** — customer logos, investor logos, and
  integration-partner logos (Slack, Notion, Okta, Gusto, Fortnox, Deel, Xero,
  QuickBooks, and many more).
- **A commercial typeface** (Suisse Intl) downloaded for local study only —
  see `tokens/00-foundation/typography.json`'s `licensingNote`.
- **Real regulatory content**: statute-cited employment-law compliance
  guides and 5 genuinely functional, statute-accurate calculators (UK
  Working Time Regs, UK Statutory Sick Pay, Norway feriepenger, Sweden
  semesterdagar, Finland vuosiloma).

**Every asset field in every section contract is wired to a closed
`assetRole` enum in `tokens/llm/asset-roles.json`, and every role carries an
explicit AI-generation policy (`may-generate-new` / `must-reuse-exact` /
`must-not-fabricate`) plus an explicit licensing note.** Read that file
before generating or publishing anything derived from this design-repo. In
particular: never fabricate a photo of a real, named person; never redraw or
approximate a real company's logo; never invent a new statute citation.

## Verification

Run, from this folder:

```bash
python3 schema/tests/adversarial_test.py   # 31/31 checks: every mutation rejected, every control passes
python3 extraction/verify_all.py            # schema + allowlist parity + citation validity + manifest counts + path leaks + self-containment
```

Both scripts derive their own root from `__file__` — they work identically
wherever this folder is copied, including with zero sibling files present
(self-containment test).

## Known, real content gaps documented (not silently "fixed")

- Netherlands and Estonia have compliance guide pages but **no** compliance
  calendar (`utility.compliance-calendar` is restricted to
  norway/uk/finland/sweden — enforced by both the section contract and the
  compatibility graph's `COMPLIANCE_CALENDAR_COUNTRY_RESTRICTION` rule).
- The UK compliance page has no localized-language variant; every other
  country has exactly one.
- Blog post **bodies** (all 143) are deterministic lorem-ipsum, per an
  existing, intentional convention already in the source codebase — post
  **metadata** and every other content family (MCP use-cases, calculator
  formulas/citations, compliance guides, legal docs) are real, authored
  content. See `document.long-form-prose` vs. `document.regulatory-prose` in
  `tokens/llm/asset-roles.json`.

## Version fields

`allowlistVersion` in `registry.manifest.json` is machine-checked —
`extraction/verify_all.py` fails if it drifts from
`tokens/llm/component-allowlist.json`'s own version field.
`repositoryVersion` and `pageSpecVersion` are documentation-only,
hand-maintained markers with nothing automatically enforcing them — see
`registry.manifest.json`'s `versionFieldNote`.
