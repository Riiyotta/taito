# Asset manifest — taito.ai homepage

All files live under `public/assets/` (served at `/assets/...` by Vite). Raster images: the highest-resolution variant of every format offered in the original `srcset`/`<picture>` was downloaded (hash suffixes stripped, width appended). Inline SVGs were serialized from the live DOM (`currentColor` kept, so they inherit `color`); Astro `data-astro-cid-*` attributes stripped. No video, Lottie, or CSS `background-image: url()` assets exist on this page (verified: zero CSS url() backgrounds outside data-URI LQIP placeholders).

| Local path | Original URL | Used in (section > element) |
|---|---|---|
| `/assets/favicons/apple-touch-icon.png` | https://taito.ai/apple-touch-icon.png | <link rel=apple-touch-icon 180x180> |
| `/assets/favicons/favicon-32.png` | https://taito.ai/favicon-32.png | <link rel=icon png 32x32> |
| `/assets/favicons/favicon.ico` | https://taito.ai/favicon.ico | <link rel=icon sizes=32x32> |
| `/assets/favicons/favicon.svg` | https://taito.ai/favicon.svg | <link rel=icon type=image/svg+xml> |
| `/assets/fonts/suisse-intl-400.woff2` | https://taito.ai/_astro/fonts/b4d8017c77f6d79f.woff2 | Global @font-face "Suisse Intl" weight 400 (self-hosted, preloaded) |
| `/assets/fonts/suisse-intl-450.woff2` | https://taito.ai/_astro/fonts/b07ac0c11978bc49.woff2 | Global @font-face "Suisse Intl" weight 450 (self-hosted, preloaded) |
| `/assets/fonts/suisse-intl-500.woff2` | https://taito.ai/_astro/fonts/117f4cbd99c5010f.woff2 | Global @font-face "Suisse Intl" weight 500 (self-hosted, preloaded) |
| `/assets/images/avatars/daniel-hayes.webp` | https://taito.ai/_astro/daniel-hayes-3.Bnr2xfo1_Z2rlWFW.webp | Performance > review card round avatar (160x160 natural, 74px/80px incl 3px ring) |
| `/assets/images/avatars/hannah-reid.webp` | https://taito.ai/_astro/hannah-reid-3.Cxe-fu_4_1IVSFM.webp | Integrations > Slack agent mock message avatar (56x56) |
| `/assets/images/avatars/olivia-hartley.webp` | https://taito.ai/_astro/olivia-hartley-3.C7ll8VDt_Z1Bi6dC.webp | Why Taito > card 2 Slack mock message avatar (56x56 natural, shown 34.6px) |
| `/assets/images/hero/street-1-1280w.avif` | https://taito.ai/_astro/street-1.BdNEsreD_Z1o0PEx.avif | Hero > right media panel background photo (<picture>, object-cover, sizes "(min-width:1024px) 50vw, 100vw", fetchpriority high) — highest-res avif variant (1280w) |
| `/assets/images/hero/street-1-1280w.jpg` | https://taito.ai/_astro/street-1.BdNEsreD_ZJ0LfD.jpg | Hero > right media panel background photo (<picture>, object-cover, sizes "(min-width:1024px) 50vw, 100vw", fetchpriority high) — highest-res jpg variant (1280w) |
| `/assets/images/hero/street-1-1280w.webp` | https://taito.ai/_astro/street-1.BdNEsreD_ZT0M9j.webp | Hero > right media panel background photo (<picture>, object-cover, sizes "(min-width:1024px) 50vw, 100vw", fetchpriority high) — highest-res webp variant (1280w) |
| `/assets/images/integration-logos/docusign-2x.webp` | https://taito.ai/_astro/docusign.XdBR5Bly_Z1z78M6.webp | Integrations > Platform integrations icon grid cell (DocuSign) — highest-res webp variant (2x) |
| `/assets/images/integration-logos/teamtailor-2x.webp` | https://taito.ai/_astro/teamtailor.BVqjVoC9_Z1lf3Ol.webp | Integrations > Platform integrations icon grid cell (Teamtailor) — highest-res webp variant (2x) |
| `/assets/images/integrations/integrations-1-1024w.avif` | https://taito.ai/_astro/integrations-1.Cntfaijw_Z1KgKLU.avif | Integrations > "Slack agent" card background (4:3) — highest-res avif variant (1024w) |
| `/assets/images/integrations/integrations-1-1024w.jpg` | https://taito.ai/_astro/integrations-1.Cntfaijw_Z1ldKIc.jpg | Integrations > "Slack agent" card background (4:3) — highest-res jpg variant (1024w) |
| `/assets/images/integrations/integrations-1-1024w.webp` | https://taito.ai/_astro/integrations-1.Cntfaijw_Z1rPYg7.webp | Integrations > "Slack agent" card background (4:3) — highest-res webp variant (1024w) |
| `/assets/images/integrations/integrations-2-2-1024w.avif` | https://taito.ai/_astro/integrations-2-2.Td2FREAh_2vm4dO.avif | Integrations > "MCP interface" card background (4:3) — highest-res avif variant (1024w) |
| `/assets/images/integrations/integrations-2-2-1024w.jpg` | https://taito.ai/_astro/integrations-2-2.Td2FREAh_u6K07.jpg | Integrations > "MCP interface" card background (4:3) — highest-res jpg variant (1024w) |
| `/assets/images/integrations/integrations-2-2-1024w.webp` | https://taito.ai/_astro/integrations-2-2.Td2FREAh_Z2c3Edq.webp | Integrations > "MCP interface" card background (4:3) — highest-res webp variant (1024w) |
| `/assets/images/integrations/integrations-3-1024w.avif` | https://taito.ai/_astro/integrations-3.BnTHgWrO_ZFdEJO.avif | Integrations > "Platform integrations" card background (4:3) — highest-res avif variant (1024w) |
| `/assets/images/integrations/integrations-3-1024w.jpg` | https://taito.ai/_astro/integrations-3.BnTHgWrO_ZgaEG6.jpg | Integrations > "Platform integrations" card background (4:3) — highest-res jpg variant (1024w) |
| `/assets/images/integrations/integrations-3-1024w.webp` | https://taito.ai/_astro/integrations-3.BnTHgWrO_ZmMSe1.webp | Integrations > "Platform integrations" card background (4:3) — highest-res webp variant (1024w) |
| `/assets/images/logos/clock-and-cloud.webp` | https://taito.ai/_astro/clock-and-cloud.C_dzyjf-_Z2pGlSH.webp | Hero logo marquee (Clock&Cloud), h-4/lg:h-5, brightness(0) |
| `/assets/images/logos/faculty.webp` | https://taito.ai/_astro/faculty.4IvoQpQa_ykFXY.webp | Hero logo marquee (Faculty), rendered h-3.5/lg:h-4, CSS filter brightness(0) |
| `/assets/images/logos/huuva.webp` | https://taito.ai/_astro/huuva.BTatMjb2_Z1Jglby.webp | Hero logo marquee (Huuva), h-4/lg:h-5, brightness(0) |
| `/assets/images/logos/shook.webp` | https://taito.ai/_astro/shook.pgCwuOqh_ZgfzuA.webp | Hero logo marquee (Shook), h-4/lg:h-5, brightness(0) |
| `/assets/images/logos/strise.webp` | https://taito.ai/_astro/strise.C03aTp4Y_utFDw.webp | Hero logo marquee (Strise), h-4/lg:h-5, brightness(0) |
| `/assets/images/logos/way-marquee.webp` | https://taito.ai/_astro/way.CiCzzmSK_Z1jmNW9.webp | Hero logo marquee (Way) 153x40 natural, brightness(0) |
| `/assets/images/logos/way-testimonial.webp` | https://taito.ai/_astro/way.CiCzzmSK_2kMR7U.webp | Testimonial > company logo above quote (92x24) |
| `/assets/images/og/og-default.jpg` | https://taito.ai/og-default.jpg | og:image / twitter:image 1200x630 |
| `/assets/images/personas/founders-3-1024w.webp` | https://taito.ai/_astro/founders-3.T1Sm71BM_V6ojd.webp | Personas > "Founders and CEOs" card background (2:3) — highest-res webp variant (1024w) |
| `/assets/images/personas/operators-4-1024w.webp` | https://taito.ai/_astro/operators-4.BkubbPyq_1Mgjxy.webp | Personas > "Operators" card background (2:3) — highest-res webp variant (1024w) |
| `/assets/images/personas/people-leaders-3-1024w.webp` | https://taito.ai/_astro/people-leaders-3.BbELLvRw_ZcrtNW.webp | Personas > "People leaders" card background (2:3) — highest-res webp variant (1024w) |
| `/assets/images/sections/agents-1536w.webp` | https://taito.ai/_astro/agents.DInupX-r_Z1MLnnk.webp | People agents > section-media background (object-cover) — highest-res webp variant (1536w) |
| `/assets/images/sections/performance-1536w.webp` | https://taito.ai/_astro/performance.-jwM2D6O_ZXuIfN.webp | Performance > section-media background (object-cover) — highest-res webp variant (1536w) |
| `/assets/images/why/why-1-2-1024w.avif` | https://taito.ai/_astro/why-1-2.C41xq0mQ_ZDYgNz.avif | Why Taito > card 1 "One product for all things people" background (4:3) — highest-res avif variant (1024w) |
| `/assets/images/why/why-1-2-1024w.jpg` | https://taito.ai/_astro/why-1-2.C41xq0mQ_ZEJBqm.jpg | Why Taito > card 1 "One product for all things people" background (4:3) — highest-res jpg variant (1024w) |
| `/assets/images/why/why-1-2-1024w.webp` | https://taito.ai/_astro/why-1-2.C41xq0mQ_ZExUog.webp | Why Taito > card 1 "One product for all things people" background (4:3) — highest-res webp variant (1024w) |
| `/assets/images/why/why-2-1024w.avif` | https://taito.ai/_astro/why-2.B-M7S75m_Z1tYkoH.avif | Why Taito > card 2 "Works where your team already does" background (4:3) — highest-res avif variant (1024w) |
| `/assets/images/why/why-2-1024w.jpg` | https://taito.ai/_astro/why-2.B-M7S75m_1NqcXt.jpg | Why Taito > card 2 "Works where your team already does" background (4:3) — highest-res jpg variant (1024w) |
| `/assets/images/why/why-2-1024w.webp` | https://taito.ai/_astro/why-2.B-M7S75m_Z282QTI.webp | Why Taito > card 2 "Works where your team already does" background (4:3) — highest-res webp variant (1024w) |
| `/assets/images/why/why-3-1024w.avif` | https://taito.ai/_astro/why-3.CGWJ7blI_2hKhvp.avif | Why Taito > card 3 "Regional compliance" background (4:3) — highest-res avif variant (1024w) |
| `/assets/images/why/why-3-1024w.jpg` | https://taito.ai/_astro/why-3.CGWJ7blI_uXG4E.jpg | Why Taito > card 3 "Regional compliance" background (4:3) — highest-res jpg variant (1024w) |
| `/assets/images/why/why-3-1024w.webp` | https://taito.ai/_astro/why-3.CGWJ7blI_1DGK0o.webp | Why Taito > card 3 "Regional compliance" background (4:3) — highest-res webp variant (1024w) |
| `/assets/svg/brand/taito-mark-chat-avatar.svg` | inline <svg> in DOM | Why card 2 + Integrations Slack mock: Taito.ai bot avatar |
| `/assets/svg/brand/taito-mark-header.svg` | inline <svg> in DOM | Header logo mark 28x28 (rx 48/256), also footer? no - header only |
| `/assets/svg/brand/taito-mark-mcp-chip.svg` | inline <svg> in DOM | Integrations > MCP card "Taito.ai" chip icon 16x16 |
| `/assets/svg/brand/taito-mark-performance-item.svg` | inline <svg> in DOM | Performance > "Taito.ai requested peer feedback" item icon 32x32 |
| `/assets/svg/brand/taitoai-logo-black.svg` | https://taito.ai/brand/taitoai-logo-black.svg | Header logo right-click context menu "Copy logo as SVG" source |
| `/assets/svg/brand/taitoai-wordmark-black.svg` | https://taito.ai/brand/taitoai-wordmark-black.svg | Header logo context menu "Copy wordmark as SVG" source |
| `/assets/svg/flags/flag-de.svg` | inline <svg> in DOM | Why card 3 flag (Germany) |
| `/assets/svg/flags/flag-se.svg` | inline <svg> in DOM | Why card 3 flag (Sweden) |
| `/assets/svg/flags/flag-uk.svg` | inline <svg> in DOM | Why card 3 time-off list flag (United Kingdom) 28px round |
| `/assets/svg/icons/info-circle.svg` | inline <svg> in DOM | Math stats > source tooltip trigger icon (1em) |
| `/assets/svg/icons/lucide-arrow-down-to-line.svg` | inline <svg> in DOM | header > in .menu-item flex items-center gap-space-2xs rounded-md px-spac (lucide lucide-arrow-down-to-line size-3.) used 1x |
| `/assets/svg/icons/lucide-arrow-right.svg` | inline <svg> in DOM | hero-heading > in .inline-flex items-center gap-space-3xs leading-heading font- (lucide lucide-arrow-right size-4) used 1x |
| `/assets/svg/icons/lucide-arrow-up.svg` | inline <svg> in DOM | hero-heading > in .size-10 shrink-0 rounded-full inline-flex items-center justi (lucide lucide-arrow-up) used 1x |
| `/assets/svg/icons/lucide-award.svg` | inline <svg> in DOM | security > in .text-secondary-foreground (lucide lucide-award) used 1x |
| `/assets/svg/icons/lucide-blocks.svg` | inline <svg> in DOM | performance > in .relative flex flex-none overflow-hidden aspect-square @md:as (lucide lucide-blocks) used 1x |
| `/assets/svg/icons/lucide-building-2.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-2xs px-space-2xs py-space-3xs ro (lucide lucide-building-2) used 1x |
| `/assets/svg/icons/lucide-calendar-clock.svg` | inline <svg> in DOM | people-agents > in .relative inline-flex items-center justify-center shrink-0 ro (lucide lucide-calendar-clock) used 1x |
| `/assets/svg/icons/lucide-chart-no-axes-column.svg` | inline <svg> in DOM | people-ops > in .relative flex flex-none overflow-hidden aspect-square @md:as (lucide lucide-chart-no-axes-column) used 1x |
| `/assets/svg/icons/lucide-chevron-down.svg` | inline <svg> in DOM | header > in .mobile-group-trigger flex w-full items-center justify-betwee (lucide lucide-chevron-down mobile-chevro) used 2x |
| `/assets/svg/icons/lucide-chevron-right.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-2xs min-w-0 (lucide lucide-chevron-right size-3 shrin) used 1x |
| `/assets/svg/icons/lucide-chevrons-up-down.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-2xs min-w-0 (lucide lucide-chevrons-up-down size-3.5 ) used 1x |
| `/assets/svg/icons/lucide-chevrons-up.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-2xs px-space-2xs py-space-3xs ro (lucide lucide-chevrons-up) used 1x |
| `/assets/svg/icons/lucide-clock.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-2xs px-space-2xs py-space-3xs ro (lucide lucide-clock) used 2x |
| `/assets/svg/icons/lucide-copy.svg` | inline <svg> in DOM | header > in .menu-item flex items-center gap-space-2xs rounded-md px-spac (lucide lucide-copy size-3.5 shrink-0 tex) used 2x |
| `/assets/svg/icons/lucide-external-link.svg` | inline <svg> in DOM | header > in .menu-item flex items-center gap-space-2xs rounded-md px-spac (lucide lucide-external-link size-3.5 shr) used 1x |
| `/assets/svg/icons/lucide-file-text.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-2xs px-space-2xs py-space-3xs ro (lucide lucide-file-text) used 2x |
| `/assets/svg/icons/lucide-globe.svg` | inline <svg> in DOM | security > in .text-secondary-foreground (lucide lucide-globe) used 1x |
| `/assets/svg/icons/lucide-hash.svg` | inline <svg> in DOM | why-taito > in .flex items-center gap-space-3xs text-ink text-balance font-m (lucide lucide-hash size-3.5) used 2x |
| `/assets/svg/icons/lucide-inbox.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-2xs px-space-2xs py-space-3xs ro (lucide lucide-inbox) used 1x |
| `/assets/svg/icons/lucide-key-round.svg` | inline <svg> in DOM | why-taito > in .size-[var(--cell)] aspect-square rounded-lg bg-white glass-b (lucide lucide-key-round size-2/5) used 1x |
| `/assets/svg/icons/lucide-list-checks.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-2xs px-space-2xs py-space-3xs ro (lucide lucide-list-checks) used 2x |
| `/assets/svg/icons/lucide-lock.svg` | inline <svg> in DOM | security > in .text-secondary-foreground (lucide lucide-lock) used 1x |
| `/assets/svg/icons/lucide-message-circle.svg` | inline <svg> in DOM | people-agents > in .relative inline-flex items-center justify-center shrink-0 ro (lucide lucide-message-circle) used 1x |
| `/assets/svg/icons/lucide-messages-square.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-2xs px-space-2xs py-space-3xs ro (lucide lucide-messages-square) used 2x |
| `/assets/svg/icons/lucide-mouse-pointer-2.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-2xs px-space-2xs py-space-3xs ro (lucide lucide-mouse-pointer-2) used 2x |
| `/assets/svg/icons/lucide-move-down.svg` | inline <svg> in DOM | performance > in .flex items-center justify-center gap-space-l text-muted-fore (lucide lucide-move-down size-6) used 1x |
| `/assets/svg/icons/lucide-move-up.svg` | inline <svg> in DOM | performance > in .flex items-center justify-center gap-space-l text-muted-fore (lucide lucide-move-up size-6) used 1x |
| `/assets/svg/icons/lucide-network.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-2xs px-space-2xs py-space-3xs ro (lucide lucide-network) used 1x |
| `/assets/svg/icons/lucide-panel-left.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-s px-space-s h-10 border-b borde (lucide lucide-panel-left size-3.5) used 1x |
| `/assets/svg/icons/lucide-plane-takeoff.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-2xs px-space-2xs py-space-3xs ro (lucide lucide-plane-takeoff) used 2x |
| `/assets/svg/icons/lucide-plus.svg` | inline <svg> in DOM (lucide "plus", stroke currentColor, stroke-width 2) | Hero app sidebar "New chat" 14px + prompt "+" button 16px; Personas card-indicator 16px (rotates 90deg on hover); FAQ toggle 24px (rotates to 45deg when open) |
| `/assets/svg/icons/lucide-refresh-cw.svg` | inline <svg> in DOM | performance > in .relative flex flex-none overflow-hidden aspect-square @md:as (lucide lucide-refresh-cw) used 1x |
| `/assets/svg/icons/lucide-shield-check.svg` | inline <svg> in DOM | security > in .text-secondary-foreground (lucide lucide-shield-check) used 1x |
| `/assets/svg/icons/lucide-signature.svg` | inline <svg> in DOM | why-taito > in .size-[var(--cell)] aspect-square rounded-lg bg-white glass-b (lucide lucide-signature size-2/5) used 1x |
| `/assets/svg/icons/lucide-star.svg` | inline <svg> in DOM | people-agents > in .relative inline-flex items-center justify-center shrink-0 ro (lucide lucide-star) used 1x |
| `/assets/svg/icons/lucide-users.svg` | inline <svg> in DOM | hero-heading > in .flex items-center gap-space-2xs px-space-2xs py-space-3xs ro (lucide lucide-users) used 2x |
| `/assets/svg/icons/lucide-wallet.svg` | inline <svg> in DOM | people-agents > in .relative flex flex-none overflow-hidden aspect-square @md:as (lucide lucide-wallet) used 1x |
| `/assets/svg/icons/lucide-workflow.svg` | inline <svg> in DOM | people-agents > in .relative flex flex-none overflow-hidden aspect-square @md:as (lucide lucide-workflow) used 1x |
| `/assets/svg/logos/deel.svg` | inline <svg> in DOM | Integrations > Platform integrations glass icon cell (Deel) |
| `/assets/svg/logos/fortnox.svg` | inline <svg> in DOM | Integrations > Platform integrations glass icon cell (Fortnox) |
| `/assets/svg/logos/gemini.svg` | inline <svg> in DOM | Performance card "Sources" chip 12px |
| `/assets/svg/logos/google-sheets.svg` | inline <svg> in DOM | Performance card "Sources" chip (Google Sheets) |
| `/assets/svg/logos/google-workspace.svg` | inline <svg> in DOM | Integrations > Platform integrations glass icon cell (Google Workspace) |
| `/assets/svg/logos/greenhouse.svg` | inline <svg> in DOM | Integrations > Platform integrations glass icon cell (Greenhouse) |
| `/assets/svg/logos/gusto.svg` | inline <svg> in DOM | Integrations > Platform integrations glass icon cell (Gusto) |
| `/assets/svg/logos/linear.svg` | inline <svg> in DOM | Performance card "Sources" chip (Linear) |
| `/assets/svg/logos/microsoft-365.svg` | inline <svg> in DOM | Integrations > Platform integrations glass icon cell (Microsoft 365) |
| `/assets/svg/logos/notion.svg` | inline <svg> in DOM | Integrations > Platform integrations glass icon cell (Notion) |
| `/assets/svg/logos/okta.svg` | inline <svg> in DOM | Integrations > Platform integrations glass icon cell (Okta) |
| `/assets/svg/logos/quickbooks.svg` | inline <svg> in DOM | Integrations > Platform integrations glass icon cell (QuickBooks) |
| `/assets/svg/logos/slack-small.svg` | inline <svg> in DOM | Performance card "Sources" chip 12px (Slack) |
| `/assets/svg/logos/slack.svg` | inline <svg> in DOM | Integrations > Platform integrations glass icon cell (Slack) |
| `/assets/svg/logos/xero.svg` | inline <svg> in DOM | Integrations > Platform integrations glass icon cell (Xero) |
| `/assets/svg/logos/zero-wordmark.svg` | inline <svg> in DOM | Hero logo marquee (Zero wordmark, inline SVG, h-4/lg:h-5) |
| `/assets/svg/social/linkedin.svg` | inline <svg> in DOM | Footer bottom bar LinkedIn 16px |
| `/assets/svg/social/youtube.svg` | inline <svg> in DOM | Footer bottom bar YouTube 16px |

## Not downloaded (by design)

- LQIP placeholders: each `<picture>` wrapper has an `::after` with a 4x3px base64 PNG `background` that fades (`transition: opacity 1s`) — data URIs, see CLONE_SPEC.md; optional to replicate.
- Analytics/GTM/PostHog scripts, prefetch HTML documents.
- Unused srcset widths (smaller 480/640/768/960w variants) — regenerate at build time if needed.

Total files: {len(out)}
