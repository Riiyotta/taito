# Product pages — clone spec

Measured live 2026-09-23 with Playwright/Chromium at 1440x900 and 390x844 (DPR 1) after a full scroll (lazy assets loaded), via `getComputedStyle`/`getBoundingClientRect`, the rendered DOM (`main` outerHTML), the page-scoped CSS rules and the page JS bundles (`/_astro/<page>.astro_astro_type_script_*.js`). All global tokens (colors, `step-*` type scale, `space-*` fluid spacing, container, grid, buttons, `glass-border`, card, FeatureIcon, FAQ, footer) are identical to `CLONE_SPEC.md` §1 and are not repeated here.

Reference screenshots (cookie banner hidden): `reference/<page>-1440.png`, `reference/<page>-390.png`. Assets: `specs/ASSETS_product.md`.

---

## 0. Page inventory (section order, top y / height @1440 → @390)

| page | doc H 1440 / 390 | sections |
|---|---|---|
| /agents | 6657 / 7937 | ProductHero (dash) 79/821 · Split media-left "How it works" 900/1056 · Split text-left "Integrations" (logo grid) 1956/954 · PainPoints 2910/574 · ComparisonTable "Headcount vs. the product" 3484/899 · FAQ 4382/728 · Related 5110/728 |
| /performance | 6384 / 7551 | ProductHero (review card) · Split media-left "How it works" (cycle card) 900/1003 · Split text-left "Real-time insights" (insights table) 1903/1015 · Testimonial (Faculty) 2918/720 · PainPoints 3638/550 · FAQ 4188/650 · Related 4838/728 |
| /time-off-attendance | 6153 / 7734 | ProductHero (balances) · Split media-left (leave flow) 900/958 · Split text-left (attendance table) 1858/977 · PainPoints 2836/574 · ComparisonTable 3409/1198 · Related 4607/728 |
| /people-directory | 6142 / 7981 | ProductHero (directory table) · Split media-left (record card) 900/952 · Split text-left (org chart) 1852/930 · PainPoints 2782/645 · ComparisonTable 3427/1168 · Related 4595/728 |
| /documents | 6106 / 7705 | ProductHero (rotating document wheel) · Split media-left (templates tabs card) 900/988 · Split text-left (generate→sign→file flow) 1888/930 · PainPoints 2818/550 · ComparisonTable 3368/1168 · Related 4536/752 |
| /pricing | 5858 / 6939 | PageHeader + price columns 79/755 · FeatureGrid "Our model" (6 cells) 834/987 · Logo marquee 1822/255 · ComparisonTable "Taito.ai vs. legacy HRIS" 2077/1228 · Security (badges) 3305/697 · FAQ (9) 4002/1038 |
| /security | 6185 / 7347 | PageHeader (+ "Explore trust center" CTA) 79/578 · Badges "Certifications" 657/638 · FeatureGrid "Security controls" (6) 1295/1148 · Split text-left "Agent security" (approval mock) 2442/1009 · FeatureGrid-links "Documentation" (6) 3451/1034 · FAQ (7) 4485/883 |
| /waitlist | 4990 / 5790 | Waitlist intro + form 79/756 · Testimonial (Way) 835/495 · FeatureGrid "What you get" (= home People ops) 1330/1081 · Personas (= home) 2411/1033 · FAQ (5) 3444/728 |

No FAQ on time-off / people-directory / documents. No page has a separate eyebrow above the FAQ title.

Every section = `bg #fafaf9; border-top 1px #e5e5e3; padding-block var(--space-2xl-3xl)` (117.15 / 67.32px) → `.u-container > .u-grid` (row-gap `--space-xl`). First section of pricing/security/waitlist has `border-top: 0`.

---

## 1. ProductHero (agents, performance, time-off, people-directory, documents)

Same geometry as home hero (CLONE_SPEC §3) minus the logo strip: `min-height 560px; lg: min(calc(100dvh − space-2xl), 920px)` → **820.81px @1440**. Left column `@4xl:col-span-5`, `pt-space-3xl pb-space-2xl pr-space-xl`, `border-right 1px #e5e5e3`, content bottom-aligned; gap `--space-l` between text block and CTA row; text block gap `--space-s-m`.
- Eyebrow: plain `<p>` (not a link), `step--1`, lh 1.2, `#524f49` — "People agents" / "Performance" / "Time-off and attendance" / "People directory" / "Docs and eSign".
- H1 `step-5`, lh 1.2, balance, margin-top `--space-s`, word-split reveal.
- Lede `step-0` `#524f49`. CTA: primary large "Join waitlist" → `/waitlist`.
- Right: `aspect-square @4xl:aspect-auto col-span-7`, inner `@container relative h-full overflow-hidden bg #f2f1f0` (no photo; no border-right). @390 people-directory / documents media use `min-h-[60vw]` instead of square (390 hero heights: agents 943, perf/time-off/people 869, documents 796).

**Motion (Hero.astro script, ease `[.23,1,.32,1]`):** title words `opacity 0→1, translateY(105%→0)` .45s, delay `.12 + i·.05`; every `[data-hero-fade]` (eyebrow, lede, CTA row) `opacity 0→1, translateY(12px→0)` .5s, delay `L + i·.05`, `L = .12 + (words−1)·.05 + .45·.35`. Reduced motion: all visible.

### 1.1 Hero figures
- **agents** `[data-agents-dash]`: centered column (`px-space-l py-space-xl-2xl`, gap `--space-m`), children `max-w-[36rem] w-full`. (a) "Agent actions" card (lg+ only), header right "clock 14px Last 12 months" `step--2 #6e6a65`; body `px-space-m py-space-s`, 12-col grid gap `space-2xs`, each bar `w-3 (12px) rounded-t-sm bg-ink`, container `h-24` (96px), heights Jun 28% · Jul 52 · Aug 34 · Sep 61 · Oct 45 · Nov 72 · Dec 38 · Jan 84 · Feb 56 · Mar 96 · Apr 67 · May 88 (min 12px), month label `step--2 #6e6a65`. (b) "Recent runs" card: header table (Agent / Duration 5.5rem / Actions 5rem / Status 7.5rem; `step--2 #6e6a65`, th padding `space-xs space-m`), body window `height: (2.25rem + 2·space-2xs)·5`, rows `height 2.25rem + 2·space-2xs` (≈55.8px), `border-top 1px`; cell: 28px icon tile (`rounded-md bg #f2f1f0`, icon 14px `#524f49`) + name `step--1` 500; duration `#524f49`; actions `#0f0e0d`; status pill "Success" (`rounded-full px-space-2xs py-space-3xs step--2`, text `oklch(.38 .1 150)` on `oklch(.92 .04 150)`). Whole viewport masked `linear-gradient(#000 60%, transparent)`. Rows (track order): Probation mid-review 5.6s 12 (users) · Weekly people report 9.3s 22 (bell) · Onboarding agent 8.4s 23 (list-checks) · Payroll reporter 3.1s 7 (file-text) · Time-off router 1.8s 4 (calendar-clock) · Performance review 15.2s 41 (star) · Offboarding agent 6.2s 14 (signature).
  Motion: cards `opacity 0→1, translateY(40→0)` .7s delay `.35 + i·.08`; bars `scaleY(0→1)` .6s delay `.5 + i·.035`; runs ticker: track sits at `translateY(−rowH)`; after IO 25% → 1400ms, then every **2200ms**: first row opacity `.6→1` .45s and track `translateY(−rowH→0)` .45s ease `[.77,0,.175,1]`, then last row moved to top and track reset to −rowH (new rows slide in from top). Pauses on hover.
- **performance** `[data-hero-figure]` (`max-w-[28rem]`, centered, `px-space-l-xl py-space-xl-2xl`): review card = avatar 80px (48 <md) with 3px surface padding at `-top-10`, header "Daniel Hayes · Q1" (padding-top `space-l-xl`), hr, footer-style row "Sources" + four 20px circles (Gemini, Slack, Linear, Google Sheets 12px logos), hr, body `step--2 lh1.5` with shimmer "Reasoning" + typewritten paragraph (bottom-fade mask). Below (after typing): "Development discussion agenda" card revealed via `grid-template-rows 0fr→1fr` .6s `pt-space-m-l`.
  Motion: figure `opacity/translateY(40→0)` .5s delay .35; sources stagger `opacity, translateY(8px)` .4s delay `.9 + i·.07`; "Reasoning" opacity .35s delay 1.25; at 1.6s type the paragraph at **12ms/char** (remaining text kept invisible to reserve layout; caret shown while typing); +300ms → agenda row opens and card `opacity 0→1, translateY(16→0)` .55s delay .1.
- **time-off** `[data-time-off-figure]` (`max-w-[28rem]`, gap `space-s`): approval item card (36px avatar with 14px black check badge ring-2, "Daniel Hayes" / "Annual leave · Aug 12 – 22 · 8 working days · Approved") + "Time-off balances" card (header `px-space-s`; item-group rows 40px icon tile + title/sub `step--2` + ghost chevron button): plane-takeoff Annual leave "13 of 25 days remaining" · stethoscope Sick leave "8 of 10 days remaining" · baby Parental leave "90 days available" · clock Flex hours "+4.5 hours banked". Item-group dividers inset `space-s`. Motion: children `opacity 0→1, translateY(20px) scale(.98)→none` .55s delay `.3 + i·.06`.
- **people-directory** `[data-directory-figure]`: lg "app window" card bleeding bottom-right (`top/left: space-xl-2xl; right 0; bottom 0; rounded-tl-2xl; glass-border radius 1rem`). Header (lg: `p-gutter`, h3 `step-0` 500) "People directory" / "Manage your organization's employees" (`step--1 #524f49`). Tab row (`px-gutter`, border-bottom): List (active, 2px ink underline) · Org chart · Grid (`step--1` 500 `#6e6a65`) + search input "Find in view…" (w-36, `step--2`) + black "+ New hire" button (h `space-2xs·3`, radius 4px, `step--2`). Table (`p-gutter`, `step--1`, fade mask 65%): Name (28px avatar + 500 name) · Job title · Reports to (20px avatar + name) · Groups (two overlapping 20px avatar stacks). Motion: `opacity, translateY(40→0)` .7s delay .35. <md: fixed 36rem square scaled `(100cqw − space-l-xl)/36rem` from bottom-right.
- **documents** rotating wheel: `--wheel-size: clamp(48rem,220cqi,84rem)`, wheel centered on the media's bottom-right corner, 39 cards (`--card-w clamp(9.5rem,20cqi,13rem)`, `--card-h clamp(9rem,19cqi,12rem)`, radius 12px, glass-border .75rem) on three rings (inner r .18·wheel scale .45, middle r .33 scale .7, outer r .5 scale 1), each `rotate(angle) translateY(−r) rotate(tilt) scale(s)`. Card: label `step--2 #6e6a65` top, bottom "Doc 014" `step--2 #524f49` + title `step--1` 500 line-clamp-2. Mask `radial-gradient(circle at 100% 100%, transparent 0, rgba(0,0,0,.4) 25%, #000 55%, rgba(0,0,0,.7) 85%, transparent 115%)`. Motion: CSS `@keyframes rotate 0→360deg` **140s linear infinite**; mask fades in `opacity 0→1` .7s delay .2.

## 2. Split sections (feature list + media)

Identical structure to home §6/§7: `.section-content` (col-span-5, flex-col justify-between gap `space-xl`, `py-space-m-l`, `pr` or `pl` `space-m-l`) + `.section-media` (col-span-7, `bg #f2f1f0`, `md:h-full` — stretches to the text column; <768 `aspect-square`, `order-last`). Section `min-height: clamp(600px, 100vh − 1.5rem, 45rem)`. Media is **media-left** in the first split, **text-left** in the second. Header = SectionHeader with `split={false}` (title/desc full width). Feature list: 39.58px icon tile + H3 `step-0` lh 1.25 + p `step--1`; dividers; items `py-space-m`.
Some lists use a check icon for every item and no H3 (time-off, people-directory, documents first split): icon `check`, body only.

Media mocks (all centered with `px-space-l py-space-l`, <md fixed width scaled by `min(1, (100cqw − 2·space-l)/W1, (100cqw − 2·space-l)/W2)`):
- agents 1: prompt pill + "Onboarding plan" stepper — same as home §6 (steps start at "Request eSignatures"; 5th icon heart-handshake), padding `space-xl-2xl space-2xl-3xl`.
- agents 2: integration logo grid 5/6/5 cells, `--cell clamp(4rem,18cqi,6.5rem)`, gap `clamp(1rem,6cqi,2rem)`, logo `clamp(1.2rem,5.6cqi,2rem)` (Deel/DocuSign `clamp(1.5rem,7cqi,2.5rem)`), mask `radial-gradient(ellipse, #000 15%, transparent 75%)`. Rows: Slack, Google Workspace, Microsoft 365, Notion, Zapier · Greenhouse, Teamtailor, DocuSign, Xero, Okta, Make · Gusto, Fortnox, Deel, n8n, QuickBooks.
- performance 1 (26rem): "New review cycle" card (4 items: heart / target / message-square with check, mouse-pointer-2 "AI review" with on-toggle 36x20), footer full-width black "Run now" button; move-down arrow; result card cycling 3 panels every **2800ms** (first after 2000ms): out `opacity 1→0, y 0→−4px` .2s ease `[.25,.1,.25,1]`, in `opacity 0→1, y 4→0` .28s delay .12 — "Feedback request sent / Hannah Reid · 3 peers · due Aug 22", "Discussion scheduled / Olivia Hartley · Daniel Hayes · Aug 28", "Requested feedback / Daniel Hayes · 4 sources". Entrance on IO: children `opacity, y 16→0` .55s stagger .08. Pause on hover.
- performance 2: "Performance insights" lg app-window (bleeding card, `right:0; bottom:0`, rounded-tl-2xl), tabs Quarter/Year/All time + "Filter team…"; table Name/Job title/Probation/Culture/Flight risk/Performance with pills (green `oklch(.38 .1 150)/oklch(.92 .04 150)`, neutral `#524f49/#f2f1f0`, red `oklch(.4 .13 25)/oklch(.93 .04 25)`, amber `oklch(.4 .12 75)/oklch(.94 .05 75)`). Entrance IO: `opacity, y 40→0` .7s delay .1.
- time-off 1 (26rem): "# time-off" Slack card (Hannah Reid 10:24 "@Taito.ai book 5 days annual leave, Aug 11–15"; Taito.ai 10:24 "Drafted request · 5 days · Balance after approval: 18 of 25 remaining · Awaiting manager"), arrow, approval card (Olivia Hartley approved the request / Manager · Engineering), arrow, item-group (calendar-plus Google Calendar event / Annual leave · Aug 11–15 · OOO invite sent; wallet Payroll updated / 5 paid days written to August pre-payroll line). Entrance IO (−10% bottom margin): children `opacity, y 16→0` .5s stagger .09.
- time-off 2: "Time and time-off" lg app-window bleeding (`right/bottom −1.5rem`), toolbar chips "UK attendance policy ▾", "Running cycle ▾", search "Find employee…", black "Export" button; table Employee/Payable days/Payable hours/Expected days/Expected hours/Overtime hours. Entrance: `opacity, translateY(20) scale(.98)` .55s.
- people-directory 1 (26rem): record card — header 40px avatar + "Olivia Hartley" / "Senior Engineer · L5 · London, UK"; sections "Positions" (briefcase Senior Engineer · L5 / Apr 1, 2025 —; Engineer II · L4 / Mar 16, 2024 — Mar 31, 2025 at opacity .6, vertical connector), "Compensation" + "lock Visible to you" (pound-sterling £85,000 base / Raise effective Apr 1, 2025), "Documents" chips (file-text Employment contract (UK), file-check Probation record).
- people-directory 2 (34rem, aspect 5/4): org-chart diamond — SVG connector lines (`org-chart-lines.svg`, stroke `#6e6a65` 1.25, dashed 4 4 for secondary), four `sm` cards (w 44%) top/left/right/bottom + pills "Reports to" ×2, "Collaborates", "Coached by" at 35%/65% × 30%/70%.
- documents 1: templates card (`max-w clamp(20rem,75cqi,32rem)`), tabs Offer / Contract / Probation / Promotion with 2px ink underline sliding (`translateX(offsetLeft) scaleX(offsetWidth)` .25s `[.77,0,.175,1]`), panel height `clamp(13rem,34cqi,18rem)` crossfade (out .18s, in .22s), bottom 50% gradient to surface, footer "Daniel Hayes" + "signature eSignature". Auto-advance every **2800ms** (first 1200ms after IO), pauses on hover. Entrance `opacity, y 40→0` .7s delay .35.
- documents 2 (26rem): shimmer "Generating offer letter for Daniel Hayes" item (36px Taito mark), arrow, "eSignatures" card (Daniel Hayes Signed · Mar 14 with check badge; Olivia Hartley Awaiting signature), arrow, file-plus-corner "Filed under Daniel Hayes / Retention: 7 years · Germany".
- security (26rem): two cards — check "Chased three managers on overdue reviews / Ran on its own · logged 09:02"; shield-alert "Sync salary change to payroll for Daniel Hayes / Stopped · a person has to confirm this one" + footer row amber pill "Waiting on you" + outline "Decline" + black "Approve" (h `space-2xs·3`, radius 4px, `step--2`).

## 3. PainPoints ("From friction to fixed")
SectionHeader (eyebrow + title). Grid `grid-cols-1 @4xl:grid-cols-3`, `@4xl:-mx-gutter`, children `@4xl:px-gutter` with `divide-x` 1px (`divide-y` + `py-space-m` stacked). Item: "P / 1" `step--1` lh 1.2 `#524f49`, H3 `step-0` lh 1.25 balance, p `step--1 #524f49`, gap `space-2xs`. Column width 480px @1440 (incl. gutters).

## 4. ComparisonTable (`.u-table`)
`w-full text-step-0 leading-normal border-collapse`; cells `padding: var(--space-m) var(--space-xs)` (29.7/14.85), first cell no left pad, last no right pad. thead row `border-bottom 1px`, th `font-medium`, col 1 `w-1/4` empty, "Status quo" `#6e6a65`, "Taito.ai" `#0f0e0d`. Body rows `border-bottom 1px` (not last): row header 500 `#0f0e0d`; status-quo `#524f49`; Taito `#0f0e0d`; all `align-top`. Optional source tooltip (info-circle, same as home stats tooltip). Wrapper `overflow-x:auto` (at 390 it squeezes: 100/132/… px columns, no scroll).

## 5. Related ("Built to work together / Keep exploring")
`ul.grid border-t border-l overflow-hidden grid-cols-1 @md:grid-cols-2 @4xl:grid-cols-3`; li `border-r border-b p-gutter relative group`, whole cell is a link (`a.card-link absolute inset-0 z-20`, active scale .99). Inside: 58.56px icon tile (`size-space-l-xl`, icon `space-s`), gap `space-m-l`, H3 `step-0` + p `step--1`, then "Read more ›" pseudo-button (`h space-2xs·4`, `px space-xs`, radius 6px, `step--1` 500, bg `#f2f1f0`) → **on cell hover bg `#0f0e0d` text `#fafaf9`**, `transition-colors .15s`.

## 6. FeatureGrid (pricing "Our model", security controls/documentation, waitlist "What you get")
Same as home People-ops grid (CLONE_SPEC §5): 3x2, borders, `p-gutter`, 58.56 icon tile, H3 `step-0`. Security "Documentation" cells are links (card-link overlay) without the Read-more button; header descriptions span cols 1–6.

## 7. PageHeader (pricing, security)
`header.page-header` 12-col, `row-gap space-m`: eyebrow `step--1` row 1 (y=196 @1440); H1 `step-5` lh 1.2 balance, **cols 1–6** (x=39, 662 wide, y=245); content (desc `step-0 #524f49`) **cols 7–12, align-self center** (x=739) (container ≥56rem; stacked below). Security CTA "Explore trust center" primary large → `https://trust.taito.ai` is a separate `.page-header-actions` grid child on row 3, cols 1–6 (x=39, y=491, 222x49).
- **Pricing columns** below an `hr` (y=448; section y=508): two 6-col columns (x=39 and x=739, 662 wide, 209 tall); the first column carries a 1px `#e5e5e3` right border (at x≈701, divide-x on not-last child); each column flex-col gap `space-m`: dt `step--1` 500 `#6e6a65` ("Annual" + pill "Save 20%" `border 1px #0f0e0d`, rounded-full, `step--2`), dd `step-3` 500 lh 1.2 ("€8 / seat / month" / "€10 / seat / month"), p `step-0 #524f49` ("billed annually"/"billed monthly"), CTA large "Join waitlist" (primary / outline `border #e5e5e3`, hover bg `#f2f1f0`). No billing toggle exists on the live page.

## 8. Badges (security certifications, pricing security, waitlist mobile)
Same as home §10 badges; security page 4th badge key-round "Encrypted in transit<br>and at rest"; pricing 4th globe "EU/US data<br>residency"; Field-level hidden <768.

## 9. Waitlist intro
Split: left `.section-content` col-span-5 (`p-0`): SectionHeader eyebrow "Early access" (`step--1`!), H2 "Join the waitlist" (`step-3`), description; feature list (md+) of three icon rows without titles (globe, mouse-pointer-2, message-circle); <md replaced by 3 badges ("EU + US / compliance", "AI-automated / people ops", "Slack-native / workflows"). Right: form card `md:col-start-7 md:col-span-6`, `md:border 1px #e5e5e3`, `md:p-space-m-l` (39.19), radius 0 (square), fields gap `space-m`:
- label `step--1` 500 lh 1.2; inputs `rounded-lg (8px) border #e5e5e3 bg surface px-space-xs py-space-2xs step--1`, focus ring 2px ink, textarea rows 4, select with chevron-down (placeholder option "Select one" shown `#6e6a65`).
- Options: LinkedIn, Reddit, Instagram, Google search, AI search, Another website, Email / message, At an event, From a friend / colleague, Other.
- Row: "You can also email us at contact@taito.ai." + small primary "Send message".
- Error line `step--2` 500 ink under a field; success replaces the form: "You're in. We'll email when there's a slot, usually within a few weeks." (`step-0` 500).

## 10. Testimonials
Same component as home §9 but section `min-height clamp(600px,100vh−1.5rem,45rem)`, centered: performance — Faculty logo (brightness 0, h 20), "Rolling out Taito.ai across the organisation resulted in the smoothest performance review cycle we've run to date." — Andy Brookes, CTO, Faculty. waitlist — Way logo (183x48 natural, shown 48px tall), "Taito.ai made the whole process feel modern and effortless. The AI support meant I didn't need to learn a new workflow." — Juho Hyytiäinen, Co-founder & CEO, Way.

## 11. Motion inventory (product pages)
| element | trigger | property | duration | easing | delay |
|---|---|---|---|---|---|
| Hero words / fades | load | as home §3.2 | .45 / .5 | out | .12+.05i / L+.05i |
| Hero figures | load | opacity + y 40 (or y 20 scale .98 stagger) | .7 / .55 | out | .35 / .3+.06i |
| Agents bars | load | scaleY 0→1 | .6 | out | .5+.035i |
| Agents runs ticker | IO .25 +1.4s, every 2.2s | track y −rowH→0, row opacity .6→1 | .45 | in-out `(.77,0,.175,1)` | hover pause |
| Agents stepper | as home §6 | | .55 | | |
| Perf typewriter | load 1.6s | 12ms/char | | | |
| Perf agenda reveal | after typing +.3s | grid-rows 0fr→1fr / opacity y16 | .6 / .55 | out | |
| Perf cycle panels | IO, 2s then 2.8s | crossfade y ±4 | .2 / .28 | (.25,.1,.25,1) / out | .12 |
| Split-media entrances | IO (−10% bottom) | opacity + y 16/20/40 | .5–.7 | out | stagger .08–.09 |
| Documents wheel | always | rotate 360deg | 140s linear ∞ | | |
| Documents tabs | IO +1.2s, every 2.8s | underline translate/scale, panel crossfade | .25 / .18 / .22 | in-out / out | hover pause |
| Shimmer labels | always | as home §7 | 1.93s | linear | |
| FAQ | click | as home §13 | .25/.2 | out | |
| Related cell hover | hover | Read-more bg → ink | .15 | ease | |
All have reduced-motion fallbacks (everything static/visible, wheel stopped).

## 12. Caveats
- Documents template letter bodies and similar document-style paragraphs are replaced by lorem ipsum of matching length (study-clone rule); headings/labels are verbatim.
- Waitlist field validation messages are not visible on the live page without submitting; clone uses short messages in the same style ("Enter a valid work email.", etc.). The clone never submits (no network).
- Hover states on mock UI (all `pointer-events:none`) do not exist.
