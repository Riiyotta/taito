
# Taito.ai homepage — clone spec

Measured live on 2026-09-23 with Playwright (headless Chromium) via `getComputedStyle` / `getBoundingClientRect` at **1440x900**, **1280x800** and **390x844** (DPR 1), after scrolling the full page so lazy assets loaded. All px values below are computed values, not estimates. Where a value is fluid (`clamp()`), the formula plus the resolved px at each width is given.

Reference screenshots (cookie banner hidden): `reference/taito-home-1440-full.png`, `reference/taito-home-1280-full.png`, `reference/taito-home-390-full.png`, `reference/taito-home-390-mobile-menu-open.png`. Assets: see `ASSET_MANIFEST.md`.

---

## 0. Stack of the original and implications for the clone

- **Framework:** Astro (static, `/_astro/*` hashed bundles, Astro prefetch on viewport, `data-astro-cid-*` scoped styles).
- **CSS:** Tailwind CSS **v4.3.3** (CSS-first `@theme`, `oklch` palette, container queries `@md:`/`@2xl:`/`@4xl:`, `size-*`, `text-(--var)` syntax). The clone uses Tailwind **v3**, so: put tokens below in `tailwind.config.js` `theme.extend`, add `@tailwindcss/container-queries` (needed — layout switches are container-query driven, see §1.4), and use arbitrary values for clamp sizes.
- **Animation library:** **Motion** (motion.dev, the lightweight `animate()` from `motion`'s `animate-style` build) — imported as `animate-style.*.js` + `motion.*.js`. **No** GSAP, Framer Motion (React), Webflow IX, Lottie, or video. All other motion is plain CSS transitions/keyframes. JS motion triggers: page load, a custom `hero:complete` event, `IntersectionObserver` (threshold 0.25), hover, click. **No scroll-linked/parallax effects and no per-section scroll reveals.** In React, use `motion`'s `animate()` (or Framer Motion `animate`) with the exact easings below.
- **Easings used everywhere:** `cubic-bezier(0.23, 1, 0.32, 1)` ("ease-out-quint-ish", the default for UI), `cubic-bezier(0.77, 0, 0.175, 1)` (in-out, agent stepper), `cubic-bezier(0.16, 1, 0.3, 1)` / `cubic-bezier(0.4, 0, 1, 1)` (logo context menu), Tailwind default `cubic-bezier(0.4, 0, 0.2, 1)` for `transition-colors`.
- **prefers-reduced-motion:** every animation has a reduced-motion branch (elements shown immediately, marquee stopped, caret hidden). Replicate.
- **Theme:** light page; a `.dark` class re-maps tokens locally (footer + persona cards). No `prefers-color-scheme` page switch.

---

## 1. Global design tokens

### 1.1 Fonts

Self-hosted **Suisse Intl** (3 woff2 files, all preloaded, `font-display: swap`, `font-style: normal`):

| weight | local file | original |
|---|---|---|
| 400 | `/assets/fonts/suisse-intl-400.woff2` | `/_astro/fonts/b4d8017c77f6d79f.woff2` |
| 450 | `/assets/fonts/suisse-intl-450.woff2` | `/_astro/fonts/b07ac0c11978bc49.woff2` (declared, not observed on home page text) |
| 500 | `/assets/fonts/suisse-intl-500.woff2` | `/_astro/fonts/117f4cbd99c5010f.woff2` |

Metric-matched fallback face (declare it too, it prevents layout shift):
```css
@font-face{font-family:"Suisse Intl fallback";src:local("Arial");size-adjust:102.9608%;ascent-override:95.7646%;descent-override:30.2057%;line-gap-override:0%;}
--font-sans: "Suisse Intl", "Suisse Intl fallback", -apple-system, BlinkMacSystemFont, Inter, ui-sans-serif, system-ui, sans-serif;
```
Body: `font-size 16px; line-height 1.5 (24px); weight 400; color #0f0e0d; background #fafaf9; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale`.
Only weights 400 and 500 appear. Headings are weight **400** (`--font-weight-heading: 400`), `line-height 1.2` (`--leading-heading`).

### 1.2 Color tokens (light / `.dark` override)

| token | light | `.dark` (footer, persona cards) |
|---|---|---|
| `--color-surface` (page bg) | `#fafaf9` rgb(250,250,249) | `#0f0e0d` |
| `--color-surface-secondary` | `#f2f1f0` rgb(242,241,240) | `#1f1d1a` rgb(31,29,26) |
| `--color-surface-tertiary` (all hairlines/borders) | `#e5e5e3` rgb(229,229,227) | `#33312c` rgb(51,49,44) |
| `--color-primary-foreground` | `#0f0e0d` | `#fafaf9` |
| `--color-secondary-foreground` (body copy) | `#524f49` rgb(82,79,73) | `#cccac6` rgb(204,202,198) |
| `--color-muted-foreground` | `#6e6a65` rgb(110,106,101) | `#8f8b85` rgb(143,139,133) |
| `--color-ink` (headings, primary btn bg) | `#0f0e0d` | `#fafaf9` |
| `--color-ink-hover` (primary btn hover) | `#33312c` | `#e5e5e3` |
| white (icon tiles) | `#ffffff` | — |

Derived colors seen: `ink/10` ring = `rgba(15,14,13,0.10)`; `ink/20` border = `rgba(15,14,13,0.20)`; `surface/90` = `rgba(250,250,249,0.9)`; `surface/75` (mobile menu descriptions) = `rgba(250,250,249,0.75)`; `primary-foreground/40` (shimmer label) = `rgba(15,14,13,0.4)`; persona overlay end `rgba(29,29,29,0.9)`; glass border `rgba(255,255,255,0.25)`.

### 1.3 Type scale (fluid, Utopia-style) — `--text-step-*`

| token | clamp() | 1440 | 1280 | 390 |
|---|---|---|---|---|
| `--text-step--2` | clamp(0.6944rem, 0.6658rem + 0.1431vw, 0.8rem) | 12.71px | 12.48px | 11.21px |
| `--text-step--1` | clamp(0.8333rem, 0.7881rem + 0.226vw, 1rem) | 15.86px | 15.50px | 13.49px |
| `--text-step-0` | clamp(1rem, 0.9322rem + 0.339vw, 1.25rem) | 19.80px | 19.25px | 16.24px |
| `--text-step-1` | clamp(1.2rem, 1.1017rem + 0.4915vw, 1.5625rem) | 24.70px | 23.92px | 19.54px |
| `--text-step-2` | clamp(1.44rem, 1.3008rem + 0.6958vw, 1.9531rem) | 30.83px | 29.72px | 23.53px |
| `--text-step-3` | clamp(1.728rem, 1.5345rem + 0.9673vw, 2.4414rem) | 38.48px | 36.93px | 28.32px |
| `--text-step-4` | clamp(2.0736rem, 1.8083rem + 1.3263vw, 3.0518rem) | 48.03px | 45.91px | 34.11px |
| `--text-step-5` | clamp(2.4883rem, 2.1286rem + 1.7985vw, 3.8147rem) | 59.96px | 57.08px | 41.07px |

Letter-spacing baked into classes: `step-2 -0.01em`, `step-3 -0.015em`, `step-4 -0.02em`, `step-5 -0.025em`; others `normal`.
Line-heights used: `leading-none 1`, `leading-tight 1.25`, `leading-heading 1.2`, `leading-snug 1.375`, `leading-normal 1.5`.

**Text roles (computed @1440 / @1280 / @390):**

| role | size | line-height | weight | letter-spacing | color |
|---|---|---|---|---|---|
| H1 hero (`step-5`, heading) | 59.956 / 57.078 / 41.072px | 71.947 / 68.494 / 49.286 (1.2) | 400 | -1.4989 / -1.4270 / -1.0268px | #0f0e0d |
| Section H2 (`step-3`) | 38.481 / 36.933 / 28.325px | 46.177 / 44.320 / 33.989 (1.2) | 400 | -0.5772 / -0.5540 / -0.4249px | #0f0e0d |
| Section eyebrow (`step-0`) | 19.797 / 19.254 / 16.237 | 29.695 / 28.882 / 24.356 (1.5) | 400 | normal | #524f49 |
| Section description / hero lede (`step-0`) | same as eyebrow | 1.5 | 400 | normal | #524f49 |
| Feature card H3 large (`step-1`, why-taito) | 24.705 / 23.918 / 19.544 | 1.2 | 400 | normal | #0f0e0d |
| Feature H3 (`step-0`, leading-tight) | 19.797 / 19.254 / 16.237 | 24.746 / 24.068 / 20.297 (1.25) | 400 | normal | #0f0e0d |
| Body small (`step--1`) | 15.864 / 15.502 / 13.491 | 23.796 / 23.254 / 20.237 (1.5) | 400 | normal | #524f49 |
| UI mock text (`step--2`) | 12.713 / 12.48 / 11.21 | 1.5 | 400/500 | normal | various |
| Nav link / small button (`step--1`) | 15.864 / 15.502 / — | 1.5 | 500 | normal | #0f0e0d |
| Large button (`step-0`) | 19.797 / 19.254 / 16.237 | 1.5 | 500 | normal | #fafaf9 on #0f0e0d |
| Testimonial quote (`step-1`, snug) | 24.705 / 23.918 / 19.544 | 33.969 / 32.888 / 26.873 (1.375) | 400 | normal | #0f0e0d |
| Stat number (`step-5`, leading-none) | 59.956 / 57.078 / 41.072 | = font-size | 400 | -0.025em | #0f0e0d |
| Stat label dt (`step-0`, tight) | 19.797 / 19.254 / 16.237 | 1.25 | 400 | normal | #0f0e0d |
| FAQ question (`step-1`) | 24.705 / 23.918 / 19.544 | 37.057 (1.5) | 400 | normal | #0f0e0d |
| FAQ answer (`step-0`) | 19.797 / 19.254 / 16.237 | 1.5 | 400 | normal | #524f49, max-width 608px (38rem) |
| Footer column heading (`step--1`, heading lh) | 15.864 / 15.502 / 13.491 | 1.2 | 500 | normal | #8f8b85 |
| Footer link (`step--1`) | 15.864 / 15.502 / 13.491 | 1.5 | 400 | normal | #fafaf9 |
| Logo wordmark "Taito.ai" (`step-0`) | 19.797 / 19.254 / 16.237 | 1.5 | 500 | normal | #0f0e0d |

### 1.4 Spacing tokens, container, grid, breakpoints

Fluid spacing (all margins/paddings/gaps on the page resolve to these):

| token | clamp() | 1440 | 1280 | 390 |
|---|---|---|---|---|
| `--space-3xs` | clamp(0.25rem, 0.2331rem + 0.0847vw, 0.3125rem) | 4.95 | 4.81 | 4.06 |
| `--space-2xs` | clamp(0.5rem, 0.4661rem + 0.1695vw, 0.625rem) | 9.90 | 9.63 | 8.12 |
| `--space-xs` | clamp(0.75rem, 0.6991rem + 0.2542vw, 0.9375rem) | 14.85 | 14.44 | 12.18 |
| `--space-s` | clamp(1rem, 0.9322rem + 0.339vw, 1.25rem) | 19.80 | 19.25 | 16.24 |
| `--space-m` | clamp(1.5rem, 1.3983rem + 0.5085vw, 1.875rem) | 29.70 | 28.88 | 24.36 |
| `--space-l` | clamp(2rem, 1.8644rem + 0.678vw, 2.5rem) | 39.59 | 38.51 | 32.47 |
| `--space-xl` | clamp(3rem, 2.7966rem + 1.0169vw, 3.75rem) | 59.39 | 57.76 | 48.71 |
| `--space-2xl` | clamp(4rem, 3.7288rem + 1.3559vw, 5rem) | 79.19 | 77.02 | 64.95 |
| `--space-3xl` | clamp(6rem, 5.5932rem + 2.0339vw, 7.5rem) | 118.78 | 115.53 | 97.42 |
| `--space-s-m` | clamp(1rem, 0.7627rem + 1.1864vw, 1.875rem) | 29.29 | 27.39 | 16.83 |
| `--space-m-l` | clamp(1.5rem, 1.2288rem + 1.3559vw, 2.5rem) | 39.19 | 37.02 | 24.95 |
| `--space-l-xl` | clamp(2rem, 1.5254rem + 2.3729vw, 3.75rem) | 58.58 | 54.78 | 33.66 |
| `--space-xl-2xl` | clamp(3rem, 2.4576rem + 2.7119vw, 5rem) | 78.37 | 74.03 | 49.90 |
| `--space-2xl-3xl` | clamp(4rem, 3.0509rem + 4.7458vw, 7.5rem) | 117.15 | 109.56 | 67.32 |
| `--space-s-l` (= `--grid-gutter`) | clamp(1rem, 0.5932rem + 2.0339vw, 2.5rem) | 38.78 | 35.53 | 17.42 |
| others | `3xs-2xs` clamp(.25rem,.1483rem+.5085vw,.625rem); `2xs-xs` clamp(.5rem,.3814rem+.5932vw,.9375rem); `xs-s` clamp(.75rem,.6144rem+.678vw,1.25rem); `m-2xl` clamp(1.5rem,.5509rem+4.7458vw,5rem) | | | |

- **`.u-container`**: `max-width: 1500px; padding-inline: var(--grid-gutter); margin-inline: auto; container-type: inline-size`. Side padding = **38.78px @1440, 35.53px @1280, 17.42px @390**. Content width = 1362.47 / 1208.97 / 355.16px.
- **`.u-grid`**: `display:grid; grid-template-columns: repeat(12, minmax(0,1fr)); column-gap: var(--grid-gutter); row-gap: var(--space-xl)`, children default `grid-column: 1/-1`. Column width 78px @1440, 68.19px @1280, 13.63px @390.
- **Section rhythm:** every content `<section>` = `bg #fafaf9; border-top: 1px solid #e5e5e3; padding-block: var(--space-2xl-3xl)` → **117.15px @1440, 109.56px @1280, 67.32px @390**. Inside: `.u-container > .u-grid` with row-gap `--space-xl` (59.39 / 57.76 / 48.71) between the section header and the body.
- **Media breakpoints** (Tailwind v4 defaults): `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536, plus custom **`min-[1200px]`** (desktop nav vs hamburger) and grid max 1500px.
- **Container-query breakpoints** (on `.u-container` / `.@container` wrappers, measured on the container's inline size, not viewport): `@md` 28rem=448px, `@lg` 32rem=512px, `@2xl` 42rem=672px, `@4xl` 56rem=896px. Section header switches to split layout at `@container (width >= 56rem)`. Hero, card grids and footer columns use these — in v3 add `@tailwindcss/container-queries` and set `container-type: inline-size` on `.u-container`.

### 1.5 Shared components / effects

- **Buttons (`Button`)**: `inline-flex items-center font-medium`, radius **6px** (`rounded-md`, small) or **8px** (`rounded-lg`, large). Height small = `calc(var(--space-2xs)*4)` = 39.58px @1440 / 38.5 @1280; large = `calc(var(--space-2xs)*5)` = 49.48 / 48.13 / 40.58px. Padding-inline small `--space-xs` (14.85), large `--space-s` (19.80). Inner span `gap: --space-2xs` with `text-box: trim-both cap alphabetic`. Transition: `color .2s, background-color .2s cubic-bezier(.23,1,.32,1), transform .16s cubic-bezier(.23,1,.32,1)`; `:active { transform: scale(.97) }`.
  - Primary: bg `#0f0e0d`, text `#fafaf9` → hover bg **`#33312c`** (measured). In `.dark` (footer): bg `#fafaf9`, text `#0f0e0d` → hover bg **`#e5e5e3`**.
  - Ghost (Log in, nav triggers): transparent, text `#0f0e0d` → hover bg `#f2f1f0`, text `#33312c`.
  - Outline (cookie "Reject all"): `1px solid #e5e5e3`, hover bg `#f2f1f0`.
- **`.glass-border`** (frosted frame around mock UI cards): `position:relative; --glass-border-width: 8px`. `::before` and `::after` at `inset: -8px`, `border-radius: calc(var(--glass-border-radius, .5rem) + 8px)`, `pointer-events:none`. `::before { border: 8px solid rgba(255,255,255,0.25) }`. `::after { border: 1px solid #fff; mask-image: linear-gradient(90deg, #fff, transparent) }`. `--glass-border-radius` set per element (0.5rem, 0.75rem, 1rem, 9999px).
- **`.gradient-border`** (4:3 media tiles): `isolation:isolate`. `::before`/`::after` absolute inset 0, `padding:1px`, radius inherit, masked to a 1px ring (`mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); mask-composite: exclude`). `::before { background: linear-gradient(135deg, rgba(255,255,255,.18) 0%, transparent 50%); mix-blend-mode: screen; z-index:10 }`, `::after { background: linear-gradient(135deg, transparent 50%, rgba(0,0,0,.06) 100%); mix-blend-mode: multiply; z-index:11 }`.
- **`shadow-xs`** = `0 1px 2px 0 rgba(0,0,0,0.05)`. **`shadow-lg`** = `0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)`.
- **Mock "card"** (`.card`, used inside illustrations): `bg #fafaf9; border-radius 8px` (or `8px 0 0 0` when bleeding off the tile), `glass-border`, `shadow-xs`, `display:grid`, header row `padding: 9.9px 19.8px` (small) or `19.8px 29.7px` (default) with `border-bottom 1px #e5e5e3`, title `step--2`/`step--1` weight 500 `#0f0e0d`.
- **Icon tile (`FeatureIcon`)**: `bg #f2f1f0; border-radius 6px`, lucide icon `#0f0e0d` stroke 2. Sizes: 58.56px square (people-ops grid, icon 19.78px), 39.58px (`size-space-l`, list features, icon 16px).
- **Inline link (`.inline-link`)**: `color #0f0e0d; font-weight 500; text-decoration underline; text-decoration-color #e5e5e3; text-underline-offset 3px; transition text-decoration-color .1s linear` → hover decoration color **`#6e6a65`**.
- **LQIP**: each Astro `<picture>` wrapper has `::after { background: var(--lqip-background) center/cover; }` with a 4x3 px base64 PNG (inline `style="--lqip-background:url(data:...)"`), sitting under the image (`img` z-index 1). Optional; plain `bg #f2f1f0` placeholder is visually equivalent once loaded.
- Icons: all UI icons are **lucide** (stroke `currentColor`, `stroke-width 2`, round caps/joins, 24 viewBox). Saved under `/assets/svg/icons/`. `lucide-react` with the same names is a drop-in.

---

## 2. Header / navigation

**DOM:** `header.relative.z-50` (NOT sticky — `position: relative`; verified: after scrolling 1500px its top is -1500px, it scrolls away) > `nav.u-container` grid `grid-template-columns: 1fr auto 1fr; align-items:center`.

- Header: height `var(--space-2xl)` = **79.17px @1440, 77.02 @1280, 64.94 @390** (includes the 1px bottom border). `bg #fafaf9; border-bottom: 1px solid #e5e5e3`. Inline style `transition: background-color 200ms cubic-bezier(.23,1,.32,1), border-color 200ms cubic-bezier(.23,1,.32,1)`. When the mobile menu is open (`data-mobile-open`): bg transparent, border transparent, logo text `#fafaf9`, logo mark `filter: invert()`, toggle color `#fafaf9`, `.header-cta` hidden.
- Grid columns @1440: 452.69 / 457.08 / 452.70px; @1280: 381.20 / 446.55 / 381.22; @390: 177.58 / 0 / 177.58.
- **Col 1 — logo** `a.header-logo` (href `/`): flex, gap `--space-2xs` (9.90px), text "Taito.ai" `step-0` 500 `#0f0e0d`, transition `color .2s cubic-bezier(.23,1,.32,1)`. Mark: 28x28 inline SVG (black rounded square rx=48/256 with white asterisk/star glyph) → `/assets/svg/brand/taito-mark-header.svg`. Box @1440: x=38.77, 103.03x29.69.
  - Right-click on logo (pointer: fine only) opens a custom context menu ("Copy logo as SVG" → `/brand/taitoai-logo-black.svg`, "Copy wordmark as SVG", "Download brand kit" `/brand/taitoai-brand-kit.zip`, "Brand guidelines" `/brand`). Animation: opacity 0→1 + scale .94→1, .14s `cubic-bezier(.16,1,.3,1)`; close opacity→0, scale→.96, .1s `cubic-bezier(.4,0,1,1)`. Low priority.
- **Col 2 — desktop menu** (visible only `min-width:1200px`): `ul.flex.gap-1.5` (6px). Items, all 39.58px tall, padding-inline 14.85px, radius 6px, `step--1` 500 `#0f0e0d`:
  - "Product" (button, 87.95px wide, dropdown) · "Solutions" (button, 99.53px, dropdown) · "Pricing" `/pricing` · "Blog" `/blog` · "Company" `/company`. Measured x @1440: 491.45, 585.41, 690.94, 778.27, 847.69.
  - Hover: bg `#f2f1f0`, text `#33312c`. While any item is hovered/menu open (`[data-nm-active]`), all other items dim to `#524f49` (transition .15s) and the active one is `#0f0e0d` on `#f2f1f0`.
- **Col 3 — CTAs** (`.header-cta`, ≥1200px): flex gap 9.90px. "Log in" ghost button → `https://hris.taito.ai/auth/login` (74.8x39.58). "Join waitlist" primary button → `/waitlist` (117x39.58, x=1284.23 @1440).
- **<1200px:** hamburger `button.hamburger-btn` 40x40, `margin-right:-8px`, two 18x1.5px lines 10px apart (`bg currentColor`), color `#0f0e0d`. Open state: line1 `translate: 0 4.25px; rotate: 45deg`, line2 `translate: 0 -4.25px; rotate: -45deg`, transition `.2s cubic-bezier(.23,1,.32,1)`; `:active scale(.97)`.

### 2.1 Mega-menu dropdown (desktop)

Trigger: mouseenter on "Product"/"Solutions" opens after **150ms** (0ms if another menu is already open); click/Enter/Space also open; leaving trigger or panel closes after **300ms**; Esc closes; arrow-key navigation.
Panel `[data-nm-viewport]`: `position: fixed; left:0; right:0; margin-inline:auto; width: fit-content; top = header.bottom + 4px` (83px @1440); `bg #fafaf9; border: 1px solid #e5e5e3; border-radius: 6px; box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1); overflow:hidden; z-index:50`. Size @1440: **722 x 328** (Product), **722 x 229** (Solutions). Content: 2-column grid of items with a 1px `#e5e5e3` vertical divider between columns; each item link 330 x 99px, radius 6px, starting x=375 and x=735 (16px inner padding). Item = 40px icon tile (`#f2f1f0`, radius 6px, lucide icon) + title `step--2` 500 `#0f0e0d` + description `step--2` 400 `#524f49` (lh 1.5).
Motion: first open `opacity 0→1, translateY(-4px→0)` .2s `cubic-bezier(.23,1,.32,1)`; switching menus animates panel `height` old→new .25s and crossfades content (new `opacity 0→1` .15s, old snapshot `1→0` .12s); close `opacity→0, translateY(0→-4px)` .15s then `display:none`.

Product items (href — title — description):
- `/people-directory` — People directory — A single source of truth for every person in the company. (icon users)
- `/time-off-attendance` — Time‑off and attendance — Policies, balances, approvals, handled automatically. (plane-takeoff)
- `/documents` — Docs and eSign — Generate, send, and sign documents without leaving Taito.ai. (signature)
- `/performance` — Performance — Reviews and feedback loops that actually run on schedule. (chevrons-up)
- `/agents` — People agents — AI agents that handle onboarding, reminders, and policy questions. (mouse-pointer-2)
- `/mcp-use-cases` — MCP use cases — Custom people workflows in Claude, Slack, HubSpot, Linear, and Lovable. (MCP glyph)

Solutions items: `/founders` For founders — Run people ops from day one, even without a dedicated team. · `/people-leaders` For people leads — Spend less time on admin, more time on the people. · `/operators` For operators — Build the systems that scale the company. We run the HR backlog.
(Screenshot of open panel: not saved to reference; layout described above.)

### 2.2 Mobile menu overlay (<1200px)

`#mobile-nav-overlay`: `position: fixed; inset: 0; z-index: 40; display:flex; flex-direction:column; background: #0f0e0d` (full 390x844). A spacer equal to header height sits on top (header stays above at z-50, now transparent with white logo + X). Nav list padding `0 var(--grid-gutter)`, `padding-top: var(--space-l)`.
- Items: "Product" ▾, "Solutions" ▾ (accordion buttons), "Pricing", "Blog", "Company" — `step-2` (23.53px @390) weight 500, lh 1.2, color `#fafaf9`, rows at y=97,143,188,233,278 (≈45px pitch). Chevron-down rotates 180deg when expanded (.2s).
- Accordion content: `display:grid; grid-template-rows: 0fr → 1fr` (.2s, open .25s), inner opacity 0→1 (.2s, 90ms delay). Items: title `step-0` 500 `#fafaf9`, description `step--1` `rgba(250,250,249,.75)`, margin-top `--space-3xs`; same texts as §2.1.
- Bottom: full-width "Join waitlist" button (bg `#fafaf9`, text `#0f0e0d`, 355x40.6, y=722) and "Log in" text button below (y≈779), both centered.
- Motion: overlay `opacity 0→1` .3s; each `nav > ul > li` `opacity 0→1, translateY(8px→0)` .3s, stagger **0.04s**; close = overlay opacity→0 .2s. `body{overflow:hidden}` while open. Auto-closes if viewport crosses 1200px.

---

## 3. Hero (`section[aria-labelledby=hero-heading]`)

**Size:** `min-height: 560px`; `lg: min-height: min(calc(100dvh - var(--space-2xl)), 920px); display:flex; flex-direction:column`. Measured height incl. logo strip: **820.81 @1440** (=900−79.19), 748.13 @1280, 927.47 @390.

**DOM:**
```
section
  div.u-container (lg: flex-1 flex-col, py-0; <lg: pt-space-xl pb-space-l → 48.71/32.47 @390)
    div.u-grid (@4xl: items-stretch)
      div.left  (@4xl: col-span-5, h-full, pt-space-3xl, pb-space-2xl, pr-space-xl, border-r 1px #e5e5e3, justify-end; flex-col gap-space-l)
        div (flex-col gap-space-s-m = 29.29px)
          a eyebrow  → /blog/zero-case-study
          h1#hero-heading [data-hero-title]  (mt-space-s)
          p lede [data-hero-fade]
        div [data-hero-fade] (flex wrap gap-space-s) > a.primary-lg "Join waitlist" → /waitlist
      div.right (aspect-square; @4xl: aspect-auto col-span-7)
        div.@container.media (relative, h-full, overflow-hidden, bg #f2f1f0, border-r 1px #e5e5e3, pointer-events none, select-none)
          picture (absolute inset-0) > img street-1 (object-cover)
          div[data-app-window][data-hero-figure]  (fake app window, see below)
        p.sr-only (description)
  div.logo-strip (border-t 1px #e5e5e3, py-space-m-l)
```

**Left column @1440:** x=38.77, 545.08 wide, padding 118.78 top / 59.39 right / 79.19 bottom, border-right 1px `#e5e5e3`, content bottom-aligned (`justify-content:flex-end`), gap 39.59px.
- Eyebrow link: "How Zero built people ops ahead of a $10M seed round" + lucide arrow-right 16px; `step--1` 400, lh 1.2 (19.04px), color `#524f49`, gap 4.95px → hover color `#0f0e0d` (transition .2s `cubic-bezier(.23,1,.32,1)`). At 390 it wraps to 2 lines with the arrow at the right.
- H1: "Run people ops on autopilot" — renders as 2 lines ("Run people ops" / "on autopilot") at 1440 (484.7x143.88), 1280 (424.27x136.97) and 390 (355.16x98.56). `text-wrap: balance`. Sizes in §1.3.
- Lede (`step-0`, `#524f49`, lh 1.5, 484.7 wide @1440): "Employee records, time-off and attendance, contracts, pre-payroll, and performance, automated. The people operations platform for teams building an exceptional workplace — without slowing down."
- CTA: primary large "Join waitlist" 148.52x49.48 @1440 (144.48x48.13 @1280, 121.83x40.58 @390), radius 8px.

**Right media @1440:** x=622.61, 778.63 x 721.47. Photo `street-1` (1536x1024 source, blurred street scene) covering. **App window mock** `[data-app-window]`: absolute, `top/left = var(--space-xl-2xl)` (78.37px), `right: -1.5rem; bottom: -1.5rem` (bleeds past the panel, clipped), `bg #fafaf9`, `border-radius: 8px 0 0 0`, `glass-border` (--glass-border-radius .5rem → 16px outer), `shadow-xs`, grid `192px 1fr`. Rect @1440: 723.27 x 667.11 at (700.97, 157.53).
- Sidebar (`aside`, width `clamp(8.5rem, 26cqi, 12rem)` = 192px, bg `#f2f1f0`, border-right 1px `#e5e5e3`, radius 8px 0 0 8px): top row h 40px, border-bottom, px 19.8: 20px black circle "N" (10px 500 white) + "Northwind" (`step--2` 500) + chevrons-up-down 14px `#6e6a65`. Groups (padding 14.85 9.9, gap 14.85): group label `step--2` 500 `#6e6a65` (padding 9.9 9.9 4.95); rows 23.88px high, gap 2px, padding 4.95 9.9, radius 6px, 14px icon + label `step--2` lh 1 `#524f49`. Active row "New chat": bg `#fafaf9`, 500, `#0f0e0d`.
  - Assistant: + New chat (active), messages-square Chats
  - Organization: users People, mouse-pointer-2 Agents, network Groups, building-2 Locations, plane-takeoff Time off, clock Attendance, file-text Documents, chevrons-up Performance
  - Personal: inbox Inbox, list-checks Tasks
- Main pane: top bar h 40px, border-bottom, px 19.8, gap 19.8, `step--2` `#6e6a65`: panel-left 14px, "Chats" › (chevron-right 12px) "New" (`#0f0e0d`). Body centered column, padding 39.59, gap 29.7: "Hi there" (`step-1`, lh 1.2, `#0f0e0d`) + "What would you like to automate today?" (`step--1`, `#6e6a65`), gap 4.95.
- Prompt input (`[data-prompt-input]`, max-width 26rem = 416px, 416x151.86 @1440): `rounded-2xl` (16px), `bg rgba(250,250,249,.9)`, `backdrop-filter: blur(12px)`, `box-shadow: 0 0 0 1px rgba(15,14,13,.10), 0 1px 2px rgba(0,0,0,.05)`, padding 9.9, gap 9.9. (The glass-border pseudo-elements are disabled here.) Text area: `step--1` `#0f0e0d`, padding 14.85 19.8 9.9, fixed height `calc(2lh + space-xs + space-2xs)` = 72.3px, overflow hidden. Caret: 0.08em x 0.95em bar `currentColor`, margin-left 2px, `animation: prompt-input-caret-blink 1s steps(2,end) infinite` (`to{opacity:0}`). Bottom row (padding 0 9.9 9.9, space-between): 40px circle outline button (`1px solid rgba(15,14,13,.2)`, plus icon 16px `#524f49`) and 40px circle filled `#0f0e0d` with arrow-up 16px `#fafaf9`.

**@390 (stacked):** left column full width then media `aspect-square` 355.16x355.16. App window becomes fixed `36rem x 36rem` anchored bottom-right (`top/left:auto; right:0; bottom:0`), `transform-origin: bottom right; scale: calc((100cqw - var(--space-l-xl))/36rem)` — i.e. a scaled-down miniature (visible rect 320.5x320.5 @390). Sidebar there is 136px.

### 3.1 Logo marquee strip (inside hero section)
`div.border-t.py-space-m-l` (padding 39.19px @1440; strip height 99.34px) > `.u-container` > `.marquee.logo-strip` (height 20px).
- `.marquee { overflow:hidden; mask-image: linear-gradient(90deg, transparent, #000 20%, #000 80%, transparent) }`
- `.marquee-track { display:flex; width:max-content; animation: marquee var(--marquee-duration, 60s) linear infinite }` `@keyframes marquee { from{transform:translate(0)} to{transform:translate(-50%)} }` — **60s**, linear, infinite, no pause on hover.
- Track contains the logo group **twice** (`.marquee-group { display:flex; align-items:center; gap: var(--marquee-gap); padding-inline-end: var(--marquee-gap) }`), `--marquee-gap: var(--space-xl)` (<1024px) / `var(--space-2xl)` (≥1024px, = 79.19px @1440). One group = 1137.7px wide @1440.
- Logos in order, all with CSS `filter: brightness(0)` (renders them pure black), `width:auto`: Faculty (h 14px / lg 16px → 90x16), Huuva (h16/lg20 → 96x20), Strise (79x20), Shook (81.5x20), Clock&Cloud (91x20), Way (76.5x20), Zero (inline SVG, 69.5x20, `#0f0e0d`). At 390 heights are the smaller values (e.g. Faculty 78.75x14).

### 3.2 Hero motion (load sequence) — Motion `animate()`, ease `[0.23, 1, 0.32, 1]`
Initial CSS: title `opacity:0`; eyebrow, lede, CTA wrapper `opacity:0; translate-y 8px` (`opacity-0 translate-y-2`); app window `opacity:0`; prompt root `opacity:0; transform: translateY(12px)`.
1. Title is split by JS into words: each word wrapped `span.inline-block.overflow-hidden.align-bottom > span.inline-block` (inner starts `translateY(105%)`, `opacity 0`); spaces kept as `span.inline`. Title container set `opacity:1`.
2. Eyebrow: `opacity 0→1, translateY(12px→0)`, duration **0.5s**, delay 0.
3. Words (5): `opacity 0→1, translateY(105%→0%)`, duration **0.45s**, delay **0.12s + i×0.05s** (0.12, 0.17, 0.22, 0.27, 0.32).
4. `[data-hero-fade]` elements (lede, then CTA row): `opacity 0→1, translateY(12px→0)`, duration **0.5s**, delay `L + i×0.05` where `L = 0.12 + (words−1)×0.05 + 0.45×0.35 = 0.4775s` → 0.4775s and 0.5275s.
5. App window `[data-hero-figure]`: `opacity 0→1, translateY(40px→0)`, duration **0.7s**, delay **0.35s**.
6. At `L + 0.05 + 0.5 = 1.0275s` a `hero:complete` event fires → prompt root animates `opacity 0→1, translateY(12px→0)` **0.35s**.
7. **Prompt typewriter loop** (starts when prompt enters viewport, IO threshold 0.25, then +900ms): for each prompt: clear text, set wrap `opacity:1`, wait 200ms, type at **28ms/char** (rAF), hold `min(2400, 600 + len×18)` ms, set wrap `opacity:0` (CSS `transition: opacity .35s cubic-bezier(.23,1,.32,1)`), wait 350ms, next prompt; loops forever. Prompts in order:
   1. "Set up my organization from the employee data in our Slack workspace"
   2. "Set up new hire experience with contract eSign and first week onboarding tasks"
   3. "Send monthly attendance, time-off and compensation reports to payroll"
   4. "Automate employee probation mid-point and final reviews"
   5. "Build a quarterly performance review flow with manager check-in and development discussion"
   Caret blinks continuously (1s steps(2)).
Reduced motion: everything visible, first prompt shown statically, no caret.

---

## 4. "Why Taito.ai?" (`section[aria-labelledby=why-taito]`)
Height 969.16 @1440 / 946.73 @1280 / 1767.77 @390.

**Section header (horizontal variant)** `header.section-header.is-horizontal` — 12-col grid, `column-gap: gutter; row-gap: --space-s` (19.8). Eyebrow row full width; below (container ≥56rem): title spans cols 1–5 (545.08 wide), description spans cols **7–12** (x=739.38, 661.86 wide), both on the same row. <56rem: stacked full width.
- Eyebrow: "Why Taito.ai?"
- H2: "Grow your team,<br>not your people ops overhead"
- Description: "Between 30 and 300 headcount, the operational workload doubles before the budget does. Taito.ai handles the operational work automatically, so you can focus on building your company, not managing spreadsheets."

**Cards grid** `div.u-grid` (row-gap `--space-l-xl`): 3 `article.feature-card` (`col-span-full @2xl:col-span-6 @4xl:col-span-4`) → 3 columns 428.31px @1440 (379.31 @1280), 1 column @390. Card = flex column gap `--space-l` (39.59): media tile + text block (gap `--space-xs` 14.85). Text: H3 `step-1` weight 400 lh 1.2 `#0f0e0d` balance; p `step--1` `#524f49`.

Media tile: `aspect-ratio 4/3` (428.31x321.23 @1440), `bg #f2f1f0`, `.gradient-border`, overflow hidden, no radius (square corners), background photo via `<picture>` (object-cover).
1. **"One product for all things people"** — "Employee records, time off, attendance, documents, pre-payroll, and performance run from one place, automatically. No more copying between systems manually." Tile: photo `why-1-2`, padding `--space-l-xl`, centered 3x2 grid of icon cells: `--cell: clamp(2.25rem, 12cqi, 3.5rem)` (56px @1440), gap `clamp(1rem, 5cqi, 1.5rem)` (24px); cell = `bg #fff; border-radius 8px; glass-border (radius .5rem→16px outer); shadow-xs`, lucide icon at 40% size (22.39px) `#0f0e0d`: users, plane-takeoff, clock / signature, key-round, chevrons-up.
2. **"Works where your team already does"** — "Access everything and take action from Slack, Claude, or any tool in your stack. Your people data is always one message away." Tile: photo `why-2` + Slack-style card bleeding off bottom/right: absolute `top/left: --space-l-xl` (58.58), `right/bottom: -1.5rem`, radius `8px 0 0 0`, glass-border, shadow-xs, 393.75 wide. Header: hash icon 14px + "onboarding" (`step--2` 500). Messages (px 19.8, gap 19.8, py 19.8; avatar 34.64px radius 6px bg `#f2f1f0`; name `step--2` 500 + time `#6e6a65`; body `step--2` `#524f49`, mention `@Taito.ai` in 500 `#0f0e0d`):
   - Olivia Hartley 9:14 — "**@Taito.ai** start onboarding for Jane Doe — Engineering, starts Mar 18"
   - Taito.ai (mark SVG avatar) 9:14 — "Drafted UK employment contract · Provisioned Slack + Google Workspace · Scheduled day-one orientation · Looped in onboarding buddy"
   - Olivia Hartley 9:15 — "Love this — saved me an afternoon."
3. **"Regional compliance, no workarounds"** (2 lines @1440) — "Local leave rules, contract templates, and attendance policies automated from day one. No manual fixes, no annual corrections. Just correct by default." Tile: photo `why-3` + same bleeding card, header "Time-off policies"; item group rows (padding 19.8, gap 14.85, 1px `#e5e5e3` dividers inset 19.8px left/right via `::after`): 28px round flag SVG + title `step--2` 500 + sub `step--2` `#524f49`:
   - UK flag — United Kingdom — 28 days annual leave incl. bank holidays
   - Sweden flag — Sweden — 25 days semester · statutory minimum
   - Germany flag — Germany — 30 days Urlaub from start date

---

## 5. People ops (`section[aria-labelledby=people-ops]`)
Height 1081.09 @1440 / 1050.34 @1280 / 1484.05 @390.
Header (default variant: title cols 1–5, description cols 1–6 on its own row, 661.84 wide): eyebrow "People ops"; H2 "From zero to payroll,<br>no manual steps"; description "Time-off requests, attendance, contracts, and payroll prep run automatically. Your team never has to chase it."

**Feature grid** `ul.grid` : `border-top + border-left 1px #e5e5e3; overflow:hidden`; `grid-cols-1 @md:grid-cols-2 @4xl:grid-cols-3` → 3x2 @1440 (cols 453.81px, rows 282.23px), 3 cols @1280 (402.66), 1 col @390. Each `li`: `border-right + border-bottom 1px #e5e5e3; padding: var(--grid-gutter)` (38.78 @1440, 17.42 @390). Inner flex-col gap `--space-m-l` (39.19): icon tile 58.56px (`@md:aspect-4/3` wrapper class present, but rendered square 58.56x58.56; icon 19.78px) then text block gap `--space-2xs`: H3 `step-0` lh 1.25 weight 400; p `step--1` `#524f49`.
Items:
1. users — People directory — Customizable employee records and an org chart that handles dotted lines, secondary connections, and group ownership.
2. plane-takeoff — Time off — Slack-native requests and approvals with regional policies built in. Balances and accruals sync to payroll automatically.
3. clock — Attendance — Clock-in, clock-out, and shift tracking with regional rules built in. Records flow straight to payroll. No spreadsheet in between.
4. signature — Docs and eSign — Generate contracts from employee data, send for signing, and file automatically. Templates adapt to region, role, and entity. Minutes, not days.
5. key-round — Granular permissions — Field-level access control, role-based visibility, and an activity log of changes. Sensitive data stays visible only to the people who need it.
6. chart-no-axes-column — Pre‑payroll reporting (U+2011 non-breaking hyphen) — Hours, leave balances, and variable pay computed and formatted for your payroll provider. Export-ready every cycle, zero manual reconciliation.
No hover state on these cells.

---

## 6. People agents (`section[aria-labelledby=people-agents]`)
Height 968.58 @1440 / 954.75 @1280 / 1168.41 @390. Section also has `min-height: clamp(600px, 100vh - 1.5rem, 45rem)`.
Two-column split in `.u-grid`: **text left** `.section-content` `col-span-12 md:col-span-5` (545.08 wide), **media right** `.section-media` `md:col-span-7` (778.63 x 733.3 @1440). <768px: text first, media after (`order-last`), media `aspect-square`.

`.section-content`: flex-col, `justify-content: space-between`, gap `--space-xl`, `padding-block: --space-m-l` (39.19), and `padding-right: --space-m-l` when first child (here) / `padding-left` when last child (Performance).
- Header: eyebrow "People agents"; H2 "Set it up once. Run forever."; description "Automate employee lifecycle tasks like onboarding, probation, and payroll handoff as no-code autonomous agentic workflows."
- Feature list: flex-col with 1px `#e5e5e3` dividers between items (`divide-y`), each item `padding-block: --space-m` (29.7; first has no top, last no bottom). Item: flex-row gap `--space-s` (19.8): 39.58px icon tile (icon 16px) + text (H3 `step-0` lh 1.25; p `step--1` `#524f49`):
  1. workflow — Employee lifecycle — Onboarding, probation, and offboarding run end-to-end as no-code workflows. Every step of the employee journey, handled.
  2. wallet — Payroll handoff — Approved leave, hours, and deductions packaged for your provider every cycle. No manual reconciliation.
  3. messages-square — People assistant — Employees ask about policies, time off, and contracts — grounded in your company's handbook, not generic AI.

`.section-media` (agents figure): `bg #f2f1f0; overflow hidden; display flex; flex-direction column; justify-content center; gap --space-m; padding: --space-xl-2xl --space-2xl-3xl` (78.37 / 117.15 @1440); `max-lg: padding 0` and the inner stack becomes `width 28rem`, centered, `scale: min(1, (100cqw − 2·space-l)/28rem, (100cqw − 2·space-l)/24rem)`. Background img `agents` (object-cover, absolute inset 0).
- **Prompt pill** `.agents-chat`: `glass-border` (radius 9999px), `border-radius: 9999px; bg #fafaf9; shadow-xs; padding: 9.9 9.9 9.9 29.7; gap 19.8`; 544.34x59.78 @1440. Text "Build an employee onboarding experience for new hires" (`step--1`, truncate) + 40px black circle with arrow-up 16px.
- **"Onboarding plan" card** (`.card`, radius 8px, glass-border, shadow-xs, 544.34 x 377.95): header padding 19.8/29.7, title `step--1` 500; `hr` 1px `#e5e5e3`; **stepper viewport** `.agent-step-viewport` `overflow:hidden; height: calc(var(--step-h) * 4)` where `--step-h = 2.5rem + 2·space-s` = **79.59px @1440** (viewport 318.36px).
  - Rows `.agent-step-row` (height `--step-h`, padding-inline 29.7, gap 14.85): 39.58px media square (radius 6px, bg `#f2f1f0`, icon 16px `#0f0e0d`; `::after` 1px x `step-h − space-l` vertical connector `#e5e5e3` centered below it, except last) + title `step--2` 500 + sub `step--2` `#524f49` + right-aligned ghost button 35.78x39.58 with chevron-right 16px.
  - **Active row** `[data-active]`: media square bg `#0f0e0d`, icon `#fafaf9` (transition `background-color .55s, color .55s cubic-bezier(.77,0,.175,1)`).
  - Row opacities by position: `[1, 1, 1, 0.4, 0, 0]` (4th row faded to 0.4, rows 5–6 hidden).
  - Steps (DOM initial order, row 0 active first): file-text **Generate contract** — Region-aware template, prefilled · signature **Request eSignatures** — Envelope sent to new hire and manager · message-circle **Send welcome message** — Slack DM with day-one logistics · list-checks **Build onboarding tasks** — Buddy paired, accounts provisioned · calendar-clock **Schedule leadership 1:1** — Calendar invite sent for week 2 · star **Collect first-week feedback** — Survey scheduled for day 7.
- **Stepper motion (JS, Motion):** starts when the figure is ≥25% visible (IO), first advance after **1200ms**, then every **2800ms**: mark row index 1 active; animate every row's opacity to the value of the slot above it (`[1,1,1,.4,0,0]` shifted) over **0.55s** ease `[0.23,1,0.32,1]`; animate the track `translateY(0 → −rowHeight)` **0.55s** ease `[0.77,0,0.175,1]`; on complete move the first row to the end and reset `translateY(0)` (infinite loop). **Pauses while hovered** (mouseenter/mouseleave on the figure). Row height re-measured on resize.

---

## 7. Performance (`section[aria-labelledby=performance]`)
Height 985.06 @1440 / 970.19 @1280 / 1157.83 @390. Mirror of §6: **media left** (col-span-7, 778.61x749.78 @1440, x=38.77), **text right** (col-span-5, x=856.14, padding-left 39.19). <768px text first, media after.
- Header: eyebrow "Performance"; H2 "Continuous performance,<br>not annual surprises"; description "Performance reviews and feedback grounded in real data, not memory."
- Features (same list component as §6):
  1. refresh-cw — Automate structure and schedule — Reviews run on your cadence: at hire, after probation, mid-year. Taito.ai launches each round and chases responses.
  2. blocks — Data from any source — MCP pulls signals from tools your team already uses, so reviews reflect what happened, not what people remembered.
  3. mouse-pointer-2 — Agentic review — Agents draft reviews from feedback, flag biases, and surface edge cases for calibration.
- Media: bg img `performance` (object-cover), overlay centered flex with padding `--space-l` (0 on <768). Inner stack `max-width: 24rem` (384px), gap `--space-s`; on <768: fixed `width: 24rem` scaled `min(1.2, (100cqw − 2·space-l)/24rem)` from center.
  - **Review card** (`.card`, 384 x 322.86, radius 8px, glass-border, shadow-xs, `overflow: visible`): avatar `daniel-hayes` in an 80px circle (48px <768) with 3px `#fafaf9` ring, absolutely centered at `top: -40px` (-24px <768). Header padding-top 58.58 (space-l-xl): "Daniel Hayes · Q1" `step--1` 500. hr. Body (padding 19.8/29.7, gap 9.9, `mask-image: linear-gradient(#000 55%, transparent 100%)` fade-out): label **"Reasoning"** with the shimmer effect (below) + paragraph `step--2` `#0f0e0d`: "Daniel consistently shipped ahead of plan in Q1, leading the auth migration end-to-end and pairing closely with new hires across the platform team. Calibration suggests strong technical impact, with growth opportunity in cross-team…". hr. Footer row (padding 19.8/29.7): "Sources" `step--2` + four 20px circles `#f2f1f0` holding 12px brand SVGs: Gemini, Slack, Linear (fill #5e6ad2), Google Sheets (fill #34a853).
  - Between cards: lucide move-down and move-up 24px, `#6e6a65`, gap `--space-l`, centered.
  - **Activity card** (`.card`, 384 x 79.72): 32px Taito mark (radius 6px) + "Taito.ai requested peer feedback" (`step--2` 500) / "Asked Hannah about cross team comms" (`step--2` `#524f49`), padding 19.8, gap 14.85.
- **Shimmer text** (`.shimmer`, Tailwind shimmer plugin): text color `rgba(15,14,13,.4)` (`text-primary-foreground/40`) 500; `background-clip:text; -webkit-text-fill-color: transparent`; background = `linear-gradient(105deg, …)` (angle `90deg + 15deg`) — a highlight band of width `--_spread: calc(4ch + 80px)` using `currentColor` as base and a brighter `oklch(from currentColor l c h / alpha*.2)` peak with 17 color-mix stops, `background-size: calc(200% + gradientWidth + repeatDelayPx) 100%`, `no-repeat`; `animation: tw-shimmer linear infinite backwards`, `@keyframes tw-shimmer { 0% { background-position: 100% 0 } }`; measured **duration 1.9347s** (speed 200px/s, track 200px, repeat delay `20000/200 = 100ms`). Simple equivalent: animate a 105deg linear-gradient highlight across the text left→right every ~1.93s.

---

## 8. Personas — "Built for" (`section[aria-labelledby=personas]`)
Height 1032.77 @1440 / 983.56 @1280 / 1038.02 @390.
Header: eyebrow "Built for"; H2 "Different roles. Same product." (no description).
Grid `ul.persona-grid`: `grid-cols-1 @2xl:grid-cols-3; gap: var(--grid-gutter); grid-auto-rows: 1fr` → 3 x 428.31px @1440, 3 x 379.31 @1280, 1 col @390 (gap 17.42). Each `li` is `display: contents`.

**Card** (`.card.dark`, token remap to dark): `aspect-ratio 3/2` (<672px container) / **`2/3`** (`@2xl`) → 428.31 x 642.47 @1440, 355.16 x ~237 @390; `border-radius 12px; overflow hidden; bg #1f1d1a; transition: colors .25s cubic-bezier(.4,0,.2,1)`.
- `.card-background` absolute inset 0, z −10: img object-cover (`object-position: center 30%` / `center 45%` on operators on small; `center` @2xl). Transition `transform .25s cubic-bezier(.23,1,.32,1)`.
- `.persona-overlay`: absolute bottom, height 75%, `background: linear-gradient(transparent, rgba(29,29,29,0.9))`, z −5.
- `.card-indicator`: absolute `top/right: --space-s` (19.8), 36px circle, bg `#0f0e0d` (dark-mode `surface`), plus icon 16px `#fafaf9`.
- Content: padding `--grid-gutter` (38.78), flex aligned bottom, gap 4.95: kicker `step--1` `#cccac6`; H3 `step-0` 500 lh 1.2 `#fafaf9`; description `step--1` `#cccac6`.
- Whole card is a link (`a.card-link` absolute inset 0, z 20, radius inherit, sr-only text "Read more about …"). `transition: transform .14s cubic-bezier(.23,1,.32,1)`, `:active scale(.99)`; focus-visible outline 2px offset 2px.
- **Hover (hover:hover & pointer:fine), measured:** card bg `#1f1d1a → #33312c`; image `scale(1.04)`; indicator bg `#0f0e0d → #fafaf9`, icon color → `#0f0e0d`, indicator `scale(1.1)`, plus icon `rotate(90deg)`; all .25s `cubic-bezier(.23,1,.32,1)`.
Cards:
1. `/founders` — "Lean growth for" / **Founders and CEOs** / "Scale people ops without scaling headcount. Hire only when the work needs a human." — img `founders-3` (alt "Founder working at a laptop in a modern startup office.")
2. `/people-leaders` — "Strategic focus for" / **People leaders** / "Hours of approvals and signed PDFs handled automatically. The strategic half is yours." — img `people-leaders-3`
3. `/operators` — "Best practices for" / **Operators** / "Build the structure that scales the company. HR compliance and admin, handled." — img `operators-4`

---

## 9. Testimonial (`section[aria-label="Customer testimonial"]`)
Height 597.05 @1440 / 571.42 @1280 / 562.58 @390.
`figure` col-span-12, `max-width: 56rem` (896px), centered, `text-align:center`, flex-col gap `--space-l` (39.59).
- Logo: container height `--space-xl` (59.39), centered img `way` 92x24.
- `blockquote`: `step-1` lh 1.375 `#0f0e0d` `text-wrap: balance`, curly quotes via `::before{content:"“"}` / `::after{content:"”"}`: "I kept HR in spreadsheets because I didn't have time to onboard yet another HR system. Taito.ai made the whole process feel modern and effortless: I connected our data, confirmed the output, and invited the team. The AI support meant I didn't need to learn a new workflow. Now everyone can see who's off, request leave, and I'm finally out of the spreadsheet." (5 lines @1440, 896x169.77).
- `figcaption`: "Juho Hyytiäinen" (`step-0` 500 `#0f0e0d`) / "Co-founder & CEO, Way" (`step--1` `#0f0e0d`).

---

## 10. Security (`section[aria-labelledby=security]`)
Height 726.69 @1440 / 697.78 @1280 / 585.22 @390.
Header: eyebrow "Security"; H2 "Enterprise‑grade security,<br>by default" (U+2011); description (cols 1–6, 661.84 wide): "As an employer, you hold the most sensitive information about your team — salaries, contracts, personal IDs, and health data. Taito.ai is ISO 27001 certified and GDPR compliant from day one, with encryption, activity logs, and field-level permissions built into every layer. " + inline-link **"See how we handle your data"** → `/security` + ".".
Badges `ul`: `display:inline-grid; grid-template-rows: auto auto; grid-auto-flow: column; row-gap: --space-xs`, divided by `1px #e5e5e3` vertical lines (`divide-x`), self-start. Each `li`: subgrid 2 rows, `padding: --space-s --space-m` (19.8/29.7), first `padding-left:0`. Icon 24px `#524f49`, label `step--1` 500 lh 1.375 `#0f0e0d` with `<br>`:
- award — "ISO 27001<br>certified" · shield-check — "GDPR<br>compliant" · lock — "Field-level<br>permissions" (**hidden <768px**) · globe — "EU data<br>residency".
Widths @1440: 104.86 / 134.55 / 151.39 / 131.63 (total 522.42).

---

## 11. Integrations (`section[aria-labelledby=integrations]`)
Height 926.63 @1440 / 862.78 @1280 / 1817.92 @390.
Header: eyebrow "Integrations"; H2 "Works where your team<br>already does".
Grid: 3 feature columns (`col-span-full @2xl:col-span-6 @4xl:col-span-4`, 428.31px), each flex-col gap `--space-m-l`: 4:3 media tile (`gradient-border`, `bg #f2f1f0`, no radius) + text (H3 `step-0` lh 1.25; p `step--1` `#524f49`).
1. **Slack agent** — "A personal people partner for every employee, right in Slack. Book time off, log hours, find policies, and get answers from the same chat window your team already lives in." Tile: `integrations-1` + bleeding Slack card (same as §4 card 2), header "ask-hr":
   - Hannah Reid 14:02 — "How much parental leave do UK employees get?"
   - Taito.ai 14:02 — "52 weeks statutory leave · first 6 weeks at 90% pay, next 33 at statutory rate. Full policy in **Handbook §4.2**."
   - Hannah Reid 14:03 — "**@Taito.ai** start a parental leave plan for Daniel Hayes, due Oct 6"
2. **MCP interface** — "Connect Taito.ai to Claude web, Claude Code, or any MCP-compatible host. Every platform action is available over MCP, so it slots into your automation workflows too." Tile: `integrations-2-2` + centered prompt card (padding-inline `--space-l-xl`): `max-width 22rem`, 311.19x128.08 @1440, `bg #fafaf9; border-radius 16px; glass-border (1rem)`. Text `step--1` "Draft offer letter for Daniel Hayes, Engineering, Berlin. Send for signing." (padding 19.8 19.8 14.85). Bottom row: chip (`1px solid #e5e5e3`, radius full, padding 4.95/9.9, 16px round Taito mark + "Taito.ai" `step--2` 500) and 36px black circle arrow-up.
3. **Platform integrations** — "Sync with Google Workspace, your ATS, and payroll providers. Employee data flows between your existing tools and Taito.ai so nothing lives in a silo." Tile: `integrations-3` + 3 centered rows of glass icon cells (`--cell` 56px @1440, gap 24px, white, radius 8px, glass-border, shadow-xs; logos at 40% size, Deel/DocuSign at 50%), wrapper `mask-image: radial-gradient(ellipse at center, black 40%, transparent 95%)` so outer cells fade:
   - Row 1 (4): Slack, Google Workspace, Microsoft 365, Notion
   - Row 2 (5): Greenhouse, Teamtailor (webp, radius 4px), Xero, DocuSign (webp, contain), Okta
   - Row 3 (4): Gusto, Fortnox, Deel, QuickBooks

---

## 12. Math stats — "By the numbers" (`section[aria-labelledby=math-stats]`)
Height 947.48 @1440 / 898.72 @1280 / 876.56 @390.
Header: eyebrow "By the numbers"; H2 "The math behind the product".
`dl.flex.flex-col`: 4 rows, each `border-top: 1px solid #e5e5e3; padding-block: --space-m-l` (39.19), row height 139.3 @1440; `@4xl`: flex-row, `justify-content: space-between; align-items: flex-start; gap --space-l`; below: column, gap `--space-xs`.
- `dt` (`step-0` lh 1.25 `#0f0e0d`) + tooltip trigger (info-circle 1em SVG, `#6e6a65`, `position:relative; top:.1em`, margin-left .35em) → hover `#524f49`, shows tooltip: `position:absolute; bottom: calc(100% + .5em); left:50%; translateX(-50%); bg #e5e5e3; color #0f0e0d; font step--2; line-height 1.5; radius 6px; padding .4em .7em (5.09/8.90px); max-width 18rem; width max-content; z-index 10`; toggled by `display` (no animation).
- `dd` `step-5` leading-none, `-0.025em`, nowrap, right-aligned.

| dt | dd | tooltip (source) |
|---|---|---|
| Of hire-to-retire HR tasks are automatable today | 56% | McKinsey, "Human Resources in the Age of Automation" |
| Saved on leave management alone with automation | 16 hrs/mo | EY 2025 Cost Update Study |
| Annual cost of manual HR processes for a 100-person company | $25k+ | EY 2025 HR Benchmarking |
| Fully loaded cost of a people ops hire, year one | $100k+ | BLS ECEC Q4 2025, Glassdoor 2026 |

---

## 13. FAQ (`section[aria-labelledby=home-faq]`)
Height 854.95 @1440 / 821.53 @1280 / 751.83 @390.
Header: eyebrow "Learn more"; H2 "Frequently asked questions".
List `div[data-faq-size]` flex-col; consecutive `details` separated by `border-top: 1px solid #e5e5e3` (first has none). `summary` (list-none, cursor pointer): flex, `justify-content: space-between; align-items: flex-start; gap: --space-s; padding-block: --space-s` (19.8) → row 76.61px @1440. Question `step-1` 400 lh 1.5 `#0f0e0d`; icon wrapper `height: 1lh` centering a 24px lucide plus.
Answer `.faq-description`: `step-0` lh 1.5 `#524f49`, `margin-top: --space-xs`, `padding-bottom: --space-s`, `max-width: 38rem` (608px); inner links `.inline-link`.
**Motion (JS, Motion):** open → `details.open = true`, content `height 0 → scrollHeight` + `opacity 0 → 1` **0.25s**, icon `rotate 0 → 45deg` 0.25s; close → height/opacity → 0 **0.2s**, icon → 0deg 0.2s, then `open=false`. Ease `[0.23,1,0.32,1]`. Summary has no hover color change (measured). Multiple can be open.

Q&A (verbatim; links shown as [text](href)):
1. **What is a people operations system?** — A people operations system runs the day-to-day plumbing of an employer — employee records, time off and attendance, contracts and documents, performance reviews, and the reporting that flows out to payroll and finance. It's the layer that turns "we have a team" into a structured operation that scales. Taito.ai is an AI-native people operations system. Where legacy HRIS were built to digitize forms, Taito.ai is built to remove work: a Slack agent that handles requests, automated reports that arrive in payroll inboxes without anyone exporting a spreadsheet, and onboarding flows that run themselves once configured. One product covers the lifecycle from offer signature to performance review, with field-level permissions, activity logs, and regional compliance built in by default.
2. **How is Taito.ai different from an HRIS?** — A traditional HRIS is a digital filing cabinet — it stores employee records, generates contracts, and tracks time off, but every workflow still needs a person to push it forward. Setup takes three to six months with a consultant, and AI features sit behind enterprise tiers. Taito.ai keeps the records and adds an operating layer that runs the workflows. The Slack agent handles routine requests, automated reports arrive in payroll inboxes on schedule, and onboarding tasks fire themselves once a contract is signed. Setup takes days, not quarters, and AI is included in the base price — not an upsell. Field-level permissions, activity logs, ISO 27001 certification, and GDPR compliance ship by default, so the security and audit posture matches what a legacy enterprise HRIS would charge an upgrade tier for.
3. **Who is Taito.ai built for?** — Taito.ai is built for teams scaling from roughly 30 to 300 employees — the range where ad-hoc spreadsheets and a single Notion page stop working, but a five-person HR team and a dedicated HRIS consultant don't make sense yet. Three audiences run the product day-to-day: [founders](/founders) and small leadership teams who want people ops to run itself; [people leaders](/people-leaders) who handle hiring, reviews, and feedback without a dedicated platform engineering team behind them; and [operators](/operators) or compliance officers who need defensible records, regional time-off policies, and audit-ready logs. The product covers the whole employee lifecycle in one tier — directory, time off and attendance, documents and eSign, performance cycles, AI workflows — so a small ops function can support a team several times its size without stitching together five SaaS contracts.
4. **How does Taito.ai handle multi-region time-off policies?** — Country-specific leave rules — statutory accrual, public holidays, carry-over caps, contract types, EU data residency — are built into the product, not bolted on through a consultant. Add a UK, Swedish, or German employee and the right policy applies automatically: parental leave entitlements, public-holiday calendars, contract templates, and the local nuances that usually require a custom configuration project. Time off, attendance, and pre-payroll reporting all sit in the same product, so the ops team doesn't reconcile policies across regions every month. When payroll runs, the report exports already reflect the correct accruals per jurisdiction. The same model extends as you hire into new countries — turn on the region, the rules apply, no migration project required. For teams operating across the EU and the UK, this removes a category of recurring monthly work.
5. **Is Taito.ai ISO 27001 certified and GDPR compliant?** — Yes. Taito.ai is ISO 27001 certified and GDPR compliant from day one — both controls ship in the base price, not an enterprise upgrade tier. Data is hosted in the EU with optional data residency commitments. Encryption at rest and in transit, single sign-on through Google Workspace and SAML/OIDC, and granular field-level permissions are built into every layer. Activity logs capture every change to employee records, with role-based access controls so sensitive fields like salary and personal identifiers stay visible only to the people who need them. Standard data subject rights — access, export, deletion — are part of the product, not a separate compliance process. Customers can export their data in full at any point, including on cancellation. The full security documentation and certificates live at our [trust center](https://trust.taito.ai), with the [DPA](/dpa) and [privacy policy](/privacy) available directly.
6. **How much does Taito.ai cost?** — €10 per seat per month on monthly billing, €8 per seat per month on annual billing. One tier. Everything inside. There are no add-ons, no enterprise upgrade tier, and no quote-based pricing. AI features — the Slack agent, automated reports, no-code workflows — are included. Activity logs, Google Workspace and SAML sign-on, field-level permissions, and regional compliance for time-off, contracts, and attendance all ship in the base price. This is the actual price, not an early-adopter discount or a promotional rate that resets at renewal. There's no minimum team size, and pay-monthly customers can cancel any time. Per-seat pricing scales linearly: a 30-person team pays the same per-seat rate as a 300-person team, with volume terms available for larger deployments.

---

## 14. Footer (includes the closing CTA)
`footer.dark` — bg **`#0f0e0d`**, dark tokens. Height 817.75 @1440 / 781.86 @1280 / 1297 @390. Single `.u-container` with `padding-block: --space-2xl-3xl` (117.15 @1440).

**CTA row:** flex, `@md: row, items-center, justify-between`, gap `--space-m`, `padding-bottom: --space-l-xl` (58.58), `border-bottom: 1px solid #33312c`.
- H2 "See what autopilot looks like." (`step-3`, `#fafaf9`, -0.015em) + p "The operational half of people ops, handled. You focus on the half that needs you." (`step-0`, `#cccac6`, margin-top `--space-2xs`).
- Button "Join waitlist" → `/waitlist`: large, radius 8px, **bg `#fafaf9`, text `#0f0e0d`**, hover bg **`#e5e5e3`** (measured). 148.52x49.48 @1440; **full width** (355.16) and left-aligned text @390.

**Link columns** `nav.footer-nav`: grid `1 col → @md 2 cols → @lg 4 cols` (311.23px each @1440), gap `--space-m-l` (39.19), `padding-block: --space-l-xl`. Column heading `h2` `step--1` 500 `#8f8b85`, `margin-bottom: --space-s`. Links `step--1` `#fafaf9`, `display:inline-block; padding-block: --space-3xs` (row pitch 33.66px @1440), `transition-colors .15s cubic-bezier(.4,0,.2,1)`. **Hover:** while any footer link is hovered, **all other links dim to `#8f8b85`** (`.footer-nav:has(.footer-link:hover) .footer-link:not(:hover)`), the hovered one stays `#fafaf9`.
- Product: People directory `/people-directory` · Time-off and attendance `/time-off-attendance` · Docs and eSign `/documents` · Performance `/performance` · People agents `/agents`
- Solutions: For founders `/founders` · For people leads `/people-leaders` · For operators `/operators`
- Resources: Pricing `/pricing` · Blog `/blog` · MCP use cases `/mcp-use-cases` · Compliance `/compliance` · Tools `/tools` · Company `/company` · Brand `/brand`
- Legal: Privacy `/privacy` · Terms `/terms` · DPA `/dpa` · Cookie settings `#cookie-settings` (re-opens cookie dialog in customize mode) · Archive `/legal/archives` · Security `/security` · Trust center `https://trust.taito.ai/`

**Bottom bar:** `border-top: 1px solid #33312c; padding-top: --space-s`; flex wrap, space-between, gap `--space-s`, `step--1` lh 1.5. Left "© 2026 Taito.ai. Run people ops on autopilot." `#8f8b85`. Right: social icons 16px `#fafaf9` in 32px hit areas (padding/negative margin `--space-3xs`), gap `--space-xs`: LinkedIn `https://www.linkedin.com/company/taito-ai`, YouTube `https://www.youtube.com/@taito_ai` (same dim-others hover rule).

---

## 15. Cookie consent banner (shown on first visit)
`#cookie-consent`: `position: fixed; bottom: 0; right: 0 (inset-x-0 on mobile, sm:left-auto); max-width: 36rem (576px); padding: --space-s; z-index 50`. Dialog: `bg #fafaf9; border: 1px solid #e5e5e3; border-radius: 12px; padding: --space-m (29.7); shadow-lg`; 536x250 @1440 at (884, 631).
- Title "We value your privacy" (`step-0` 500 lh 1.2). Text (`step--1` `#524f49`, mt `--space-2xs`): "We use cookies to understand how visitors use our site and to measure our advertising. They are only set if you agree, and you can change your choice at any time via "Cookie settings" in the footer. See our [privacy policy](/privacy)."
- Buttons (mt `--space-s`, gap `--space-2xs`, small size, `step--1`): "Accept all" (primary), "Reject all" (outline `1px #e5e5e3`, hover `#f2f1f0`), "Customize" (ghost). Customize expands a fieldset (grid-rows 0fr→1fr .22s + opacity .2s delayed 80ms): checkboxes Necessary (checked, disabled) "Required for the site to work, such as remembering this cookie choice. Always on." / Analytics "Helps us understand how visitors use the site so we can improve it." / Advertising "Lets us measure how our ad campaigns perform on other platforms."; button becomes "Save".
- Motion: enter `opacity 0→1, translateY(16px→0)` .3s; exit reverse .2s; ease `[0.23,1,0.32,1]`. Stored as a cookie (180 days). For the clone this is optional; reference screenshots have it hidden.

---

## 16. Responsive summary

| | 1440 | 1280 | 390 |
|---|---|---|---|
| Doc height | 10807px | 10365px | 13500px |
| Container side padding | 38.78 | 35.53 | 17.42 |
| Header height | 79.17 | 77.02 | 64.94 |
| Nav | full menu + CTAs | full menu + CTAs (≥1200) | hamburger |
| Section padding-block | 117.15 | 109.56 | 67.32 |
| Hero | 5/7 split, left border | 5/7 split | stacked, media square below |
| Why / Integrations cards | 3 cols | 3 cols | 1 col |
| People-ops grid | 3x2 | 3x2 | 1 col (6 rows) |
| Agents / Performance | text 5 / media 7 | same | text then square media (scaled mockups) |
| Personas | 3 cols, 2:3 cards | 3 cols | 1 col, 3:2 cards |
| Security badges | 4 | 4 | 3 (field-level hidden) |
| Stats rows | label left / number right | same | stacked (label, then number) |
| Footer nav | 4 cols | 4 cols | 1 col; CTA button full width |

Section tops @1440: header 0, hero 79.17, why 899.98, people-ops 1869.14, agents 2950.23, performance 3918.81, personas 4903.88, testimonial 5936.64, security 6533.69, integrations 7260.38, stats 8187, faq 9134.48, footer 9989.44.
Section tops @390: header 0, hero 64.94, why 992.41, people-ops 2760.17, agents 4244.22, performance 5412.63, personas 6570.45, testimonial 7608.47, security 8171.05, integrations 8756.27, stats 10574.19, faq 11450.75, footer 12202.58.
Between 768–1023px (not measured live): layout follows the container-query/`md`/`lg` classes quoted above (e.g. agents/performance already split at `md`, people-ops 2 cols at `@md`, persona 3 cols at `@2xl`, section header split at `@4xl`).

---

## 17. Motion inventory (complete)

| # | element | trigger | property | duration | easing | delay / stagger | impl |
|---|---|---|---|---|---|---|---|
| 1 | Hero eyebrow link | load | opacity 0→1, y 12→0px | 0.5s | (.23,1,.32,1) | 0 | Motion |
| 2 | Hero H1 words (5) | load | opacity 0→1, y 105%→0 (masked) | 0.45s | (.23,1,.32,1) | 0.12s + 0.05s·i | Motion |
| 3 | Hero lede, CTA row | load | opacity 0→1, y 12→0px | 0.5s | (.23,1,.32,1) | 0.4775s + 0.05s·i | Motion |
| 4 | Hero app window | load | opacity 0→1, y 40→0px | 0.7s | (.23,1,.32,1) | 0.35s | Motion |
| 5 | Hero prompt box | `hero:complete` (~1.03s) | opacity 0→1, y 12→0px | 0.35s | (.23,1,.32,1) | — | Motion |
| 6 | Hero prompt typewriter | IO 25% + 900ms | text typed 28ms/char, hold min(2400,600+18·len)ms, fade .35s, 350ms gap, 200ms pre-type | loop | CSS opacity (.23,1,.32,1) | — | JS rAF |
| 7 | Prompt caret | always | opacity blink | 1s steps(2,end) ∞ | — | — | CSS |
| 8 | Logo marquee | always | translateX 0→-50% | 60s linear ∞ | linear | — | CSS |
| 9 | Agent stepper | IO 25%, then every 2.8s (first 1.2s) | track y −79.59px; row opacities shift [1,1,1,.4,0,0]; active tile bg→ink | 0.55s | track (.77,0,.175,1); opacity (.23,1,.32,1); tile CSS (.77,0,.175,1) | pause on hover | Motion + CSS |
| 10 | "Reasoning" shimmer | always | background-position sweep | 1.9347s linear ∞ | linear | — | CSS |
| 11 | Persona card hover | hover | bg, img scale 1.04, indicator scale 1.1 + icon rotate 90° + color invert | 0.25s | (.23,1,.32,1) / (.4,0,.2,1) | — | CSS |
| 12 | Buttons | hover / active | bg + color / scale .97 | .2s / .16s | (.23,1,.32,1) | — | CSS |
| 13 | Nav mega-menu | hover 150ms / leave 300ms | opacity + y −4px, height morph, crossfade | .2s / .25s / .15s / .12s | (.23,1,.32,1) | — | Motion |
| 14 | Mobile menu | click | overlay opacity; li opacity + y 8px; hamburger → X | .3s / .2s | (.23,1,.32,1) | 0.04s·i | Motion + CSS |
| 15 | FAQ accordion | click | height + opacity, icon rotate 45° | .25s open / .2s close | (.23,1,.32,1) | — | Motion |
| 16 | Inline links / eyebrow / tooltip trigger | hover | decoration color / color | .1s linear / .2s / .15s | — | — | CSS |
| 17 | Footer links | hover | siblings dim to #8f8b85 | .15s | (.4,0,.2,1) | — | CSS `:has()` |
| 18 | Cookie banner | load (no consent) | opacity + y 16px | .3s in / .2s out | (.23,1,.32,1) | — | Motion |

No scroll-triggered section reveals, no parallax, no sticky elements, no canvas/WebGL, no video.

---

## 18. Could not measure / caveats
- **Hover states on the open mega-menu items** and the 768–1023px range were not measured live; values are from the site CSS classes.
- **Hero load animation initial frame** was not captured as a screenshot (captures happen after it completes); timings come from the site's own JS (quoted verbatim above), not from frame timing.
- **Agent stepper order** in reference screenshots depends on capture time (the loop had already advanced); the DOM initial order is given in §6.
- **Suisse Intl** is a commercial typeface (Swiss Typefaces). The woff2 files were downloaded for this local study clone only; do not redeploy them publicly without a license.
- Nav hover color reading of `rgb(23,22,20)` on one "Pricing" sample was mid-transition; the resting color is `#0f0e0d`.
