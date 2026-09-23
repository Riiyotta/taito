# Information architecture — taito.ai clone

`ia.json` is the only file here to hand-edit. `IA.md` and `matrix.csv` are
generated from it by `build.mjs` — never edit them directly, they'll be
overwritten on the next `node build.mjs` run. `validate.mjs` checks `ia.json`
for internal consistency (route-count sums, referential integrity between
templates and sections, category validity) before you trust it.

## Re-running after the project changes

```bash
node validate.mjs && node build.mjs
```

Edit `ia.json` first, then re-run both. `validate.mjs` exits non-zero on a
hard failure (wrong route sum, a template referencing an undefined section,
etc.) and prints informational notes for everything else (see below).

## What this documents

The React/Vite/Tailwind-v3 clone in this repo of `https://taito.ai`, built
from the real route table in `src/App.jsx` and cross-checked directly against
`src/pages/*.jsx`, `src/components/**/*.jsx`, and `src/content/*.js` — plus
the project's own pre-existing measured build specs (`CLONE_SPEC.md`,
`specs/SPEC_persona_company.md`, `specs/SPEC_product.md`) for the
home/persona/company/product route families, which already had real
Playwright-measured section-by-section detail before this IA pass. The blog,
mcp-use-cases, tools, and compliance/legal route families had no equivalent
prose spec, so their template shapes and section boundaries here come from
direct source inspection instead.

## Findings

- **202 real routes across 20 templates**, but the distribution is extremely
  top-heavy: the single `template.blog-post` shape alone accounts for 143
  routes (71% of the entire site) because every blog post — in any of the 6
  languages — renders through one component pair
  (`BlogPost.jsx`/`Article.jsx`). Add `template.compliance-country` (11) and
  `template.mcp-detail` (8), and 3 of the 20 templates cover 80% of all
  routes. The other 40 routes are spread across the remaining 17 templates,
  most of them singletons (homepage, company, customers, pricing, security,
  waitlist, the two index pages) — the actual *design* effort in this project
  is concentrated in a handful of one-off page shapes, not in the
  high-route-count template families, which are almost entirely a content-
  scaling problem once their one template is built.
- **21 of 44 sections are shared across 2+ templates**; the other 23 are
  single-use and should stay page-local (e.g. `features.company-story`,
  `hero.marketing`, `utility.calculator`) until a second real caller appears
  — don't pre-extract them into a shared library speculatively.
- **A deliberate, narrowly-scoped lorem-ipsum policy already exists in this
  codebase**: only blog post *bodies* (`content.blog-post-body`, all 143 of
  them) render deterministic lorem-ipsum text, seeded by slug
  (`src/components/blog/lorem.js`). Post metadata, all MCP use-case copy, all
  5 statutory-calculator formulas and their citations, all compliance guide
  prose, and all 3 legal documents are real, authored, statute-cited content
  — the opposite end of the fidelity spectrum from the blog bodies. Don't
  extend the lorem convention to any of those when building against this IA.
- **Two independent "prose DSLs" coexist**: the blog's object-based content
  blocks vs. the compliance/legal family's tuple-array blocks
  (`Prose.jsx`). They render visually similar long-form content but are not
  the same schema and aren't unified — worth flagging as a simplification
  candidate rather than assuming one can stand in for the other.
- **Two duplicate FAQ-accordion implementations** exist
  (`src/components/blog/Article.jsx`'s `FaqItem` and
  `src/components/compliance-legal/shared.jsx`'s `FaqItem`), same easing and
  animation, never consolidated — noted in the `content.faq` section's
  description rather than silently merged, since a design-repo/component pass
  is a more appropriate place to actually de-duplicate them than this IA.
- **Real, documented content gaps** (not clone bugs): the Netherlands and
  Estonia compliance pages have no matching `/compliance/:country/calendar`
  route (only Finland, Sweden, Norway, and the UK have calendars); the UK
  compliance page has no localized-language variant while every other country
  has exactly one. Both are called out in the relevant sections' `scope`
  text rather than "fixed" by inventing missing content.

## Route count derivation

`meta.totalRoutes: 202` was computed by hand-expanding every dynamic segment
in `src/App.jsx`'s route table against the real content arrays in
`src/content/*.js` (via direct `node --input-type=module` evaluation of those
files), not estimated. See each template's `routes`/`routePattern` field in
`ia.json` for the per-template breakdown.
