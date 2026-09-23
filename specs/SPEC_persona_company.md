# Persona + Company pages — clone spec

Routes covered: /founders, /operators, /people-leaders, /company, /customers — measured live 2026-09-23 with Playwright (Chromium, DPR 1) at **1440x900** and **390x844** via `getComputedStyle`/`getBoundingClientRect`, after a full scroll. Global tokens, header, footer, button styles, FAQ and stats motion are identical to the homepage — see `CLONE_SPEC.md` §1, §2, §12, §13, §14, §17. Only what differs or is new is listed here.

Reference screenshots (cookie banner removed): `reference/{founders,operators,people-leaders,company,customers}-{1440,390}.png`. Assets: `specs/ASSETS_persona_company.md`.

---

## 0. Template analysis

The three persona pages **share one template** built from 6 reusable blocks, arranged in a different order and with different content on each page:

| block | founders | operators | people-leaders |
|---|---|---|---|
| A `PageHero` (image + prompt card) | 1 | 1 | 1 |
| B `PainColumns` (3 columns with dividers) | 2 `cracks-at-scale` | 2 `operator-plate` | 2 `week-before-and-after` |
| C `FeatureGrid` (3x2 bordered cells) | 3 `founder-features` | 3 `operator-features` | 3 `time-back` (titles are links) |
| D `Testimonial` | 4 (Way) | 5 (Huuva) | 4 (Faculty, **min-height variant**) |
| E `Stats` (same as home §12) | 5 `cost-of-old-way` | — | — |
| F `ComparisonTable` | — | 4 `operator-stack` | 5 `stack-comparison` |
| G `FAQ` (no eyebrow) | 6 | 6 | 6 |

`/company` reuses A (no prompt card), a centered "story" block, C (4-column value variant, kicker instead of icon), and a team grid. `/customers` is **only** block A with a plain grey box on the right ("Coming soon.") — there are no customer cards or case-study links on the live page.

Section tops / heights:

| page @1440 | sections (top / height) | doc H |
|---|---|---|
| founders | hero 79/820.81 · cracks 900/643.66 · features 1544/1025.72 · testimonial 2569/597.05 · stats 3166/947.48 · faq 4114/805.48 · footer 4919 | 5737 |
| operators | hero 79/820.81 · plate 900/572.75 · features 1473/955.77 · stack 2429/1197.86 · testimonial 3626/495.19 · faq 4122/805.48 · footer 4927 | 5745 |
| people-leaders | hero 79/820.81 · week 900/572.75 · time-back 1473/1025.72 · testimonial 2498/720 · stack 3218/1197.86 · faq 4416/805.48 · footer 5222 | 6040 |
| company | hero 79/820.81 · story 900/876 · mission 1776/796.31 · team 2572/1699.39 · footer 4272 | 5089 |
| customers | hero 79/820.81 · footer 900 | 1718 |

| page @390 | sections | doc H |
|---|---|---|
| founders | hero 65/869.36 · cracks 934/893.98 · features 1828/1415 · testimonial 3243/562.58 · stats 3806/876.56 · faq 4682/681.94 · footer 5364 | 6661 |
| operators | hero 65/844.42 · plate 909/853.55 · features 1763/1394.78 · stack 3158/1457.73 · testimonial 4615/401.33 · faq 5017/799.19 · footer 5816 | 7113 |
| people-leaders | hero 65/820.08 · week 885/799.34 · time-back 1684/1455.44 · testimonial 3140/720 · stack 3860/1555.11 · faq 5415/740.56 · footer 6155 | 7452 |
| company | hero 65/869.95 · story 935/817.33 · mission 1752/1090.31 · team 2843/1898.81 · footer 4741 | 6038 |
| customers | hero 65/796.33 · footer 861 | 2158 |

Every content section = homepage section rhythm (`border-top 1px #e5e5e3; padding-block: --space-2xl-3xl` → 117.15 / 67.32px; `.u-container > .u-grid` row-gap `--space-xl`). Section header = homepage `SectionHeader` (eyebrow `step-0` #524f49, H2 `step-3` cols 1–5 = 545.08px @1440).

---

## A. Page hero (`section[aria-labelledby=hero-heading]`)

Same shell as the homepage hero minus the logo marquee: `min-h 560px; lg: min-h min(calc(100dvh − space-2xl), 920px); flex col` → 820.81px @1440. `.u-container pt-space-xl pb-space-l lg:py-0` > `.u-grid @4xl:items-stretch`.

**Left column** (identical to home): `@4xl: col-span-5, pt-space-3xl (118.78), pr-space-xl (59.39), pb-space-2xl (79.19), border-r 1px #e5e5e3, justify-end`; flex-col gap `--space-l` (39.59 / 32.47). Inner stack gap `--space-s-m`.
- Eyebrow: **plain `<p>` (not a link, no arrow)** `step--1` lh 1.2, `#524f49` (15.86 / 13.49px). `data-hero-fade`.
- H1 `step-5` lh 1.2 `-0.025em`, `mt-space-s`, balance, 484.7px wide @1440. Split into words (same as home).
- Lede `step-0` lh 1.5 `#524f49`.
- CTA row: primary large "Join waitlist" → `/waitlist` (148.52x49.48 @1440, 121.83x40.58 @390).

Copy:
| page | eyebrow | H1 | lede | prompt |
|---|---|---|---|---|
| founders | For founders | Scale people ops without scaling the team | People ops hires get buried in admin before they reach strategy. Buy the product that handles it, and hire for the work only a person can do. | Build a Q1 performance review agent for the engineering team |
| operators | For operators | Build for scale, not for HR backlog | COO, Chief of Staff, first ops hire — whatever the title, you're building structure for scale. Taito.ai handles HR compliance and admin so you can focus on the systems that grow the company. | Automate a monthly pre-payroll report to Gusto |
| people-leaders | For people leaders | You weren't hired to chase signed PDFs | For Chiefs of Staff, CPOs, and Heads of People who run operations across six tools and 200 Slack threads. Taito.ai gives you back the strategic half of the job. | Build an onboarding workflow for our new hires in London |
| company | About Taito.ai | We're building the people operations system you wish you'd had | A people ops product that does the work, so your team stays lean while the company grows. | — |
| customers | Customers | Companies running people ops with Taito.ai | Coming soon. | — |

**Right column** `aspect-square @4xl:aspect-auto @4xl:col-span-7 @4xl:pb-(--grid-gutter) lg:pb-0!` → @1440 x=622.6, 778.6 x 820.8 (full section height, no border). Inner media `relative h-full w-full min-h-[60vw] lg:min-h-0 overflow-hidden bg #f2f1f0 select-none pointer-events-none`; `<picture>` absolute inset-0, `img object-cover` with object-position: founders `50% 30%`, operators `40% 30%`, people-leaders `60% 30%`, company `50% 50%`. @390: 355.16 x 355.16 square below the text (grid row-gap 48.71).
- **customers**: right column keeps `@4xl:pb-(--grid-gutter)` (not overridden) → grey box `#f2f1f0` 778.6 x **782.0** @1440 (38.78px gap below); @390 square 355.16.

**Prompt card** (persona pages only) `div.prompt-input-root.@container` `absolute; inset-x: --space-xl-2xl; bottom: --space-xl-2xl` (78.37 @1440, 49.9 @390) → 621.9 x 168.6 @1440, 255.4 x 121.1 @390.
- Box: `glass-border (--glass-border-radius 1rem)`, `rounded-2xl` (16px), `bg rgba(250,250,249,.9)`, `backdrop-filter: blur(12px)`, `box-shadow: 0 0 0 1px rgba(15,14,13,.1), 0 1px 2px rgba(0,0,0,.05)`, flex-col. Container query on the root (`@md` = 28rem): padding & gap `--space-s` (19.8) at ≥28rem, else `--space-2xs` (8.12).
- Text `step-0` `#0f0e0d` lh 1.5, `min-height: 2lh`, padding `space-xs space-s space-2xs` (<28rem) / `space-xs 12px 0` (≥28rem).
- Caret: `inline-block; width .08em; height .95em; margin-left 2px; vertical-align middle; translateY(-.05em); bg currentColor; animation 1s steps(2,end) infinite blink; transition opacity .2s ease-out`; `[data-done]` → opacity 0, no animation. Hidden in reduced motion.
- Bottom row `flex justify-between px-space-2xs pb-space-2xs`: 40px circle outline (`1px rgba(15,14,13,.2)`, plus 16px `#524f49`) + 40px black circle arrow-up 16px `#fafaf9`.

**Motion** (Motion `animate`, ease `[0.23,1,0.32,1]`):
- Words: `opacity 0→1, y 105%→0` 0.45s, delay 0.12 + 0.05·i.
- `[data-hero-fade]` = eyebrow, lede, CTA row (eyebrow is a fade item here, not animated separately): `opacity 0→1, y 12→0` 0.5s, delay `L + 0.05·i`, `L = 0.12 + (words−1)·0.05 + 0.1575`.
- No figure/image animation.
- `hero:complete` fires at `L + (fades−1)·0.05 + 0.5` s. Prompt root then animates `opacity 0→1, y 12→0` 0.35s; after 200ms it types its (single) prompt at **18 + rand·10 ms per char** (rAF), no loop; 1200ms after finishing the caret gets `data-done` (fades out .2s).

---

## B. Pain columns (`cracks-at-scale` / `operator-plate` / `week-before-and-after`)

Header: eyebrow + H2 only (no description). Body grid: `grid-cols-1 @4xl:grid-cols-3`, `divide-y @4xl:divide-y-0 @4xl:divide-x divide #e5e5e3`, `@4xl:-mx-[gutter]`; children `py-space-m` (<4xl, first pt-0, last pb-0) / `@4xl: py-0 px-gutter`. @1440 the grid spans x=0..1440 (3 x 480px columns, inner text 401.5px wide), 1px vertical dividers at x=480, 960. @390: stacked, 1px horizontal dividers, padding 24.36px between.
Column: kicker `step--1` lh 1.2 `#524f49` → H3 `step-0` lh 1.25 `#0f0e0d` balance → p `step--1` lh 1.5 `#524f49` with `<strong>` = 500 `#0f0e0d`; gap `--space-2xs`.

Copy (kicker / H3 / body, **bold** = strong):
- founders — "Where it breaks" / "What falls through the cracks at scale":
  - 10+ / Your first hires deserve real infrastructure / Employee records live in shared sheets anyone can edit. Payroll is a monthly scramble of forms and reminders. Half the founder's day disappears into chasing approvals. Taito.ai **secures employee data from day one**, **automates payroll prep**, and replaces the back-and-forth with **workflows that just run**.
  - 50+ / Company knowledge lives in someone's head / Time-off requests pile up in Slack DMs. Contracts sit in personal Drives. Policies exist only as oral tradition, surfacing the moment someone asks. Taito.ai gives you **one system from headcount one**, so the **basics run themselves** before they become a problem.
  - 150+ / Compliance and reviews become side jobs / You're hiring across borders, prepping for your first audit, and calibration drags on while managers chase forms instead of talking to their people. Taito.ai ships with **regional policies preconfigured**, exports **pre-payroll reports to your provider**, and **runs performance cycles end-to-end**.
- operators — "What landed on your plate" / "The work no one else picked up": HR admin / Compliance / Reporting (see `src/content/persona-company.js`).
- people-leaders — "Where the week disappears" / "What you weren't hired to do": Approvals / Reporting / Retention.

## C. Feature grid (`founder-features` / `operator-features` / `time-back`)

Identical to homepage §5 people-ops grid: `ul` `border-t border-l #e5e5e3 overflow-hidden`, `grid-cols-1 @md:2 @4xl:3` (453.81px cols @1440), `min-width:1500px → margin-inline: -gutter`. `li` `border-r border-b`, padding `--grid-gutter` (38.78 / 17.42). Inner gap `--space-m-l`: icon tile `size-space-l-xl` (58.58 / 33.66) `bg #f2f1f0 radius 6px`, lucide icon `size-space-s` (19.8 / 16.24) → text gap `--space-2xs`: H3 `step-0` lh 1.25; p `step--1` `#524f49`. Row heights @1440: 282.23 / 306.0 depending on copy.
- founders icons: zap, messages-square, globe, wallet, workflow, chevrons-up.
- operators: workflow, shield-check, chart-no-axes-column, messages-square, wallet, users.
- people-leaders: plane-takeoff, users, signature, chevrons-up, workflow, key-round — **H3 text is a link** (`/time-off-attendance`, `/people-directory`, `/documents`, `/performance`, `/agents`, `/people-directory`) with `hover: color #33312c` (no transition).

## D. Testimonial

Same component as homepage §9 (`figure max-w 56rem, centered, gap --space-l`; logo box `h --space-xl`; quote `step-1` lh 1.375 balance with curly quotes; name `step-0` 500; role `step--1`). Logo renders at its natural size:
- founders: Way 183x48 (`way-testimonial.webp`, no filter) — "I kept HR in spreadsheets…" / Juho Hyytiäinen / Co-founder & CEO, Way.
- operators: Huuva 230x48 `brightness(0)` — "With Taito.ai, you don't have to read some manual and figure out how things work, because it's all intuitive — you can just ask the chat." / Martta Jämsén / Operations Lead, Huuva.
- people-leaders: Faculty 113x20 `brightness(0)` — "Real-time, regular feedback works best. Taito.ai customizes into workflows, capturing feedback immediately and making it easy to review during one-to-ones." / Vicki Marchington / Chief People Officer, Faculty. **Section has `min-height: clamp(600px, 100vh − 1.5rem, 45rem)`, `flex col justify-center`** → 720px at both widths.

## E. Stats (founders only, `cost-of-old-way`)

Identical to homepage §12 (same 4 rows + tooltips) except eyebrow "By the numbers", H2 "The cost of doing it the old way".

## F. Comparison table (`operator-stack` / `stack-comparison`)

Header: eyebrow "Stack comparison", H2 "Your stack today vs. Taito.ai". `div.overflow-x-auto > table.u-table w-full border-collapse text-step-0 lh 1.5`.
- Cells: `padding-block: --space-m` (29.7 / 24.36), `padding-inline: --space-xs` (14.85 / 12.18); first cell of each row `padding-left 0`, last `padding-right 0`. All `align-top`, `text-align left`.
- `thead tr` border-bottom 1px `#e5e5e3`; `th` 500 `#6e6a65` (first empty, `w-1/4` = 340.6px @1440), third header "Taito.ai" 500 `#0f0e0d`.
- `tbody tr` border-bottom 1px (none on last). Row `th` 500 `#0f0e0d`; status-quo `td` `#524f49`; Taito.ai `td` `#0f0e0d`.
- Column widths @1440: 340.6 / 586.3 / 435.5; row h 119.8 (2-line). @390: 102.4 / 132.2 / 121.8 (table 356.4 — 1px wider than container, scrolls).

## G. FAQ

Same as homepage §13 incl. motion, but **header has no eyebrow** (H2 "Frequently asked questions" only; header 46.18px tall). 6 questions per page, plain-text answers (see content file).

---

## Company page

### Story block (`main > div`, not a section)
`border-top 1px; padding-block --space-2xl-3xl; md: min-height clamp(600px, 100vh − 1.5rem, 75rem)` (876px @1440/900), flex-col center. Inner `flex-col gap --space-l; w-full; padding-inline --space-m-l (39.19 / 24.95); md:text-center`.
- Header: eyebrow "Our story"; H2 "Built from personal experience" full width (centered).
- Description `step-0` `#524f49`, `max-width: 65ch` (850.3px @1440), centered; two paragraphs separated by `<br><br>`; `<em>Taito</em>` = font-style normal, 500, `#0f0e0d`. **Long-form narrative → lorem ipsum placeholder in the clone** (matching length ≈ 60 + 45 words).
- `hr` max-w 65ch (687.4px measured), `margin-block --space-s-m`.
- "Backed by the best" `step-0` lh 1.2 `#524f49`; logos `ul flex wrap items-center md:justify-center gap --space-l-xl` (58.58 / 33.66): Accel → https://www.accel.com (h 24 / lg 28 → 87.3x28 @1440), illusian → https://illusian.org (h 20 / lg 24 → 97.2x24). No hover effect. Left-aligned below md.

### Mission (`mission`)
Header default variant: eyebrow "Mission, values + goals", H2 "Mission, values + goals", description (cols 1–6, 661.8px). Grid = block C with `@4xl:grid-cols-4` (340.36px cols); each cell: kicker "V / n" (`step--1` lh 1.2) then text block (gap `--space-m-l`), no icon. Values: Automate all manual work / Build products users love / Get the right stuff done / You are trusted. Be bold.

### Team (`team`)
Header **horizontal** (description cols 7–12 on title row): eyebrow "The team", H2 "Meet the team<br>building Taito.ai", description "A small team of founders, engineers, and people-ops practitioners who have lived inside the problem. We're hiring carefully and shipping deliberately — say hello any time."
- `hr` col-span-12, `margin-top --space-m`.
- `ul` col-span-12, `grid-template-columns: subgrid`, `row-gap --space-xl-2xl` (78.37 / 49.9), `margin-top --space-m`. `li`: `col-span-5`, even items `col-start-8` (2 per row <42rem container); `@2xl`: `col-span-3`, starting at cols 1 / 5 / 9 (3 per row, 311.5px wide @1440 at x=38.8, 505.8, 972.9).
- Column dividers: `li::before { position:absolute; top:0; bottom:0; border-left:1px solid #e5e5e3 }` at `left: −(100% + 3.5·gutter)/5` for even items (<42rem), and `left: −(100% + 4·gutter)/6` for items 3n+2 and 3n (≥42rem) → −77.77px @1440.
- Member: flex-col gap `--space-s`: avatar `size clamp(4rem, 10cqi, 6rem)` (96 / 64px) round `bg #f2f1f0`, `margin-bottom --space-s`, img `object-cover object-top scale(1.1) origin-top`; name `step-1` lh 1.2; role `step--1` lh 1.2 `#524f49` (gap `--space-2xs`); bio `step--1` lh 1.5 `#524f49`.
- 7 members + "You?" card: plus-icon circle (24px icon `#524f49`), "Opportunities", text, outline small button "careers@taito.ai" + arrow-right 16px → `mailto:careers@taito.ai` (176.7x39.58, radius 6px, `1px #e5e5e3`, hover bg `#f2f1f0`).

---

## Motion inventory (these pages)

| element | trigger | property | duration | easing | delay |
|---|---|---|---|---|---|
| Hero H1 words | load | opacity, y 105%→0 | .45s | (.23,1,.32,1) | .12 + .05i |
| Hero eyebrow / lede / CTA | load | opacity, y 12→0 | .5s | same | L + .05i |
| Prompt card | `hero:complete` | opacity, y 12→0 | .35s | same | — |
| Prompt typing | +200ms | chars | 18–28ms/char | — | once, caret fades 1.2s after |
| Caret | always | blink | 1s steps(2) | — | — |
| FAQ, stats tooltip, buttons | as homepage | | | | |
| Feature title links (people-leaders) | hover | color → #33312c | instant | — | — |

No scroll reveals, no parallax. Reduced motion: everything visible, prompt text shown statically, no caret.
