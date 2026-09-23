# Changelog

## 1.0.0 — Initial build

Built from scratch (Situation A per the design-repo-extraction skill) against
this project's own already-validated `ia.json` (202 routes, 20 templates, 44
sections), `CLONE_SPEC.md`, `specs/*.md`, `tailwind.config.js`, and
`src/index.css`.

### Build order followed
tokens → primitives → components → sections → templates → compatibility
graph → schema → example instance → semantic validator → adversarial tests →
manifest/allowlist/docs, per `BUILD-GUIDE.md`.

### Self-caught issues, fixed before shipping (not found by a later review)

While building, three real mistakes were caught by checking each new rule
against the actual data at the moment it was written, per
`MASTER-GUIDE.md` 3.18's lesson:

1. **`ONE_HERO_PER_PAGE` graph rule was written wrong from assumption.** It
   initially claimed every template has exactly one HERO section. Direct
   inspection of `templates/templates.json` showed 3 real templates
   (`template.legal`, `template.blog-post`, `template.not-found`) have zero
   hero sections. Corrected to "at most one," with the three hero-less
   templates named as a real, verified exception — not silently dropped.
2. **`NO_CONSECUTIVE_SAME_SECTION` graph rule's exception claim was wrong.**
   It initially asserted `features.split-media`'s two occurrences on
   `template.home` are never adjacent. Direct inspection showed they ARE
   listed back-to-back (positions 5-6). Corrected to document the real
   adjacency as an intentional, `repeatable:true` case (different content —
   People agents then Performance — not accidental duplication) rather than
   asserting a false non-adjacency.
3. **`LOGO_MARQUEE_MAX_PER_PAGE`'s exception claim was wrong.** It initially
   claimed `template.home` does not list `proof.logo-marquee` as a
   standalone node (asserting it's "inline inside hero.marketing" only).
   Direct inspection showed it IS a real standalone node at position 2. The
   contradictory `logoMarqueeIncluded` field was also removed from
   `sections/hero-marketing.json`'s content contract, and that section's
   `constraints.requiresSection` was corrected to describe the real
   adjacency relationship instead.

Each of these was caught by writing a small Python check against
`templates/templates.json` immediately after drafting the rule, not by a
downstream review — see the design-repo-extraction skill's own guidance to
treat every new graph/schema rule as a claim to verify at write-time.

### Adversarial suite — one real bug caught and fixed

The auto-synthesized control instance for `template.waitlist` initially
FAILED (30/31 checks passing, not 31/31) — a self-authored inconsistency:
`sections/conversion-waitlist-form.json`'s own `maxWords: 4` budget on the
field-label content contract was too tight for the section's own cited real
example content ("How did you hear about us?" = 6 words). Fixed by widening
the budget to 6 to match the real content, then re-ran the full suite to
confirm 31/31 passed with no other regression.

### Verification results (real command output, all four mandatory steps)

1. **Schema validation**: `Draft7Validator` against `example.pagespec.json`
   — 0 errors.
2. **Adversarial suite**: 31/31 checks — 21 controls (the real example + one
   auto-synthesized minimal instance per real template) all pass; 10
   adversarial mutations (missing required section, template/PageSpec
   section-set mismatch, empty reducedMotionFallback, invented motion
   pattern, maxWords overflow, duplicate one-per-page section, wrong
   declared template, invalid compliance-calendar country, missing required
   node on template.legal, reordered fixed-position section) all correctly
   rejected.
3. **Self-containment**: copied to an isolated `/tmp` directory with zero
   sibling files present; `extraction/verify_all.py` and
   `schema/tests/adversarial_test.py` both re-run clean there (citation
   validity check correctly degrades to a warning, not a failure, when no
   sibling source tree exists).
4. **Zip cleanliness**: packaged with the CLI `zip` tool;
   `unzip -l design-repo.zip | grep -ic "__MACOSX\|\.DS_Store"` → `0`.

### Drift-detection proof

`extraction/verify_all.py`'s allowlist-parity and manifest-counts checks
were each proven to actually catch injected drift in a scratch copy (a
phantom allowlist entry, a wrong manifest count), confirming they fail on
bad input and pass on the real repo — not just asserted to work.
