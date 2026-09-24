# Changelog

## 1.0.1 — External review fix pass

An external punch list (6 items) was applied. Every item was verified
directly against the real repo before fixing anything, per the
design-repo-extraction skill's Situation B rules; all 6 reproduced exactly
as described.

1. **BLOCKER, confirmed real**: `schema/pagespec.schema.json`'s `route`
   field required `^/.*$`, which a real, valid route (`template.not-found`'s
   `*`, matching `src/App.jsx`'s catch-all `Route path="*"`) cannot satisfy.
   Fixed to `^(?:/.*|\*)$`; confirmed `*`, `/`, and `/founders` all match,
   and a bare non-slash string (e.g. `founders`) still correctly does not.
2. **BLOCKER, confirmed real**: `sections/content-blog-post-body.json`'s
   `content.title.assetRole` was the malformed string
   `"document.long-form-prose (metadata, real)"` — not a real key in
   `tokens/llm/asset-roles.json`'s canonical registry (`document.long-form-prose`
   alone is). Fixed by moving the annotation into a separate `note` field.
   **A second, previously unreported instance of the same bug class was
   found and fixed in the same pass** (not named in the punch list, found
   by writing the closure check the punch list's item 3 asked for and
   running it against the whole repo before considering the fix done, per
   the skill's "a review's named examples are a lower bound, not the full
   scope" lesson): `primitives/avatar.json`'s `assetRole` prop used `const`
   with a pipe-separated union of three role names
   (`"photo.team-headshot | photo.customer-avatar | photo.hero-editorial"`)
   — `const` can only ever hold one literal value. Corrected to a real
   `enum` of the three role ids.
3. **BLOCKER, confirmed real**: `extraction/verify_all.py` had zero logic
   referencing `assetRole` anywhere — nothing was checking asset-role
   references against the canonical registry, which is exactly why items 2
   and the avatar.json bug above shipped undetected. Added
   `check_asset_role_closure()`, which walks every `primitives/`/`components/`/
   `sections/` file, collects every `assetRole`/`assetRoles`/asset-role-shaped
   `const` value, and fails if any doesn't resolve to a real key in
   `tokens/llm/asset-roles.json`. Proven to catch drift: a phantom role
   reference injected into a scratch copy of `sections/hero-marketing.json`
   correctly fails the check; the real repo passes clean.
4. **BLOCKER, confirmed real**: `tokens/llm/token-policy.json` claimed
   `color`, `fontSize`, and `spacing` are "enforced" by
   `semantic_validate.py` rejecting raw values in a PageSpec's content
   fields — but `semantic_validate.py` has no such logic anywhere, and this
   schema has no per-node style/token-override field at all for a raw value
   to even appear on (a fact `token-policy.json`'s own `overrides` block
   already stated correctly, contradicting its own `enforcement` block one
   section up). Corrected all three claims to `convention-only`, with the
   real reasoning spelled out inline. Only the `motion` claim was already
   true (verified: `semantic_validate.py` does check `motion.pattern`
   against the closed inventory) and was left as `enforced`, now with a
   cross-reference to the new automated check that verifies this claim
   against the validator's real source rather than trusting the prose.
5. **HIGH, confirmed real**: no checks against `token-catalog.json` or
   `token-policy.json` existed in `verify_all.py` at all. Added
   `check_token_catalog_and_policy()`: (a) confirms every category name in
   `token-policy.json`'s `enforcement` block is a real key in
   `token-catalog.json`'s `categories` block (the exact check
   `MASTER-GUIDE.md` 3.21 recommends, to prevent a policy file's category
   names drifting from the catalog's real keys); (b) for every category
   claimed `enforced`, confirms `semantic_validate.py`'s actual source
   contains logic referencing that category name — this is what caught
   item 4's false claims the moment the check was written, and would catch
   the same class of drift again if a future edit re-introduced it. Proven
   to catch drift: re-injecting the original false `color: enforced` claim
   into a scratch copy correctly fails the check; the real repo passes
   clean.
6. **HIGH, confirmed real**: every auto-synthesized control PageSpec in
   `schema/tests/adversarial_test.py` used the same hardcoded placeholder
   route (`/synthetic-control`) regardless of template, so the
   `template.not-found` control never actually exercised the real runtime
   route (`*`) — it would have kept passing even with item 1's regex bug in
   place, for the wrong reason. Fixed generally (not as a one-off special
   case): the auto-synthesis now uses the target template's own first real
   `routes[]` entry when one exists (falling back to the synthetic
   placeholder only for patterned route families like blog-post, which have
   no literal route sample). Confirmed `template.not-found`'s control now
   validates with `route: "*"` and the fixed schema pattern together,
   end-to-end.

### Re-verification after all 6 fixes

All 4 mandatory verification steps re-run in full after every fix, not just
once at the end:

1. **Schema validation**: 0 errors, including the new `route` pattern.
2. **Adversarial suite**: 31/31 — same 21 controls (now each using a real
   route where available) and 10 mutations, all still correct.
3. **Self-containment**: re-run clean in an isolated `/tmp` directory with
   zero siblings.
4. **Zip cleanliness**: regenerated fresh, last, after every fix;
   `unzip -l design-repo.zip | grep -ic "__MACOSX\|\.DS_Store"` → `0`;
   confirmed not stale (`find design-repo -type f -newer design-repo.zip`
   returns nothing).

Two new drift-detection checks (asset-role closure, token-policy validity)
were each proven against a real injected bug in a scratch copy, then
confirmed to pass clean on the real, corrected repo — not just asserted to
work.

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
