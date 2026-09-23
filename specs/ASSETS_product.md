# Asset manifest — product pages

All files live under `public/assets/pages/product/` (served at `/assets/pages/product/...`). Raster images: highest-resolution `srcset` variant downloaded (hash suffix stripped). Inline SVGs serialized from the live DOM with Playwright (attribute case preserved, `currentColor` kept, Astro attributes and classes stripped). Lucide icons saved as `icons/lucide-<name>.svg` (rendered in the clone as currentColor masks). Assets already present in `public/assets/` (ASSET_MANIFEST.md) were re-used where identical; duplicates here are the per-page variants.

| Local path | Original URL / source | Used in |
|---|---|---|
| `/assets/pages/product/images/teamtailor.webp` | https://taito.ai/_astro/teamtailor.BVqjVoC9_1cVAxO.webp | agents img alt="" class="w-[var(--icon)] h-[var(--icon)] rounded-[4px] object-cover" |
| `/assets/pages/product/images/docusign.webp` | https://taito.ai/_astro/docusign.XdBR5Bly_28juuG.webp | agents img alt="" class="w-[var(--icon-lg)] h-[var(--icon-lg)] object-contain" |
| `/assets/pages/product/images/daniel-hayes-3.webp` | https://taito.ai/_astro/daniel-hayes-3.Bnr2xfo1_ZTuYvr.webp | performance img alt="" class="size-full rounded-full object-cover" |
| `/assets/pages/product/images/hannah-reid-3.webp` | https://taito.ai/_astro/hannah-reid-3.Cxe-fu_4_Z1mOv7g.webp | performance img alt="" class="size-9 rounded-full object-cover" |
| `/assets/pages/product/images/olivia-hartley-3.webp` | https://taito.ai/_astro/olivia-hartley-3.C7ll8VDt_ZUrLxK.webp | performance img alt="" class="size-7 rounded-full object-cover shrink-0" |
| `/assets/pages/product/images/marcus-bennett-1.webp` | https://taito.ai/_astro/marcus-bennett-1.CX_TG5gD_1Rhzki.webp | performance img alt="" class="size-7 rounded-full object-cover shrink-0" |
| `/assets/pages/product/images/sophie-lane-1.webp` | https://taito.ai/_astro/sophie-lane-1.CtGGl8Fb_Z288MFy.webp | performance img alt="" class="size-7 rounded-full object-cover shrink-0" |
| `/assets/pages/product/images/james-whitfield-1.webp` | https://taito.ai/_astro/james-whitfield-1.CacS_SSy_Jp65X.webp | performance img alt="" class="size-7 rounded-full object-cover shrink-0" |
| `/assets/pages/product/images/faculty.webp` | https://taito.ai/_astro/faculty.4IvoQpQa_C5nGO.webp | performance img alt="Faculty" class="brightness-0" |
| `/assets/pages/product/images/huuva.webp` | https://taito.ai/_astro/huuva.BTatMjb2_Z1Jglby.webp | pricing img alt="Huuva" class="w-auto brightness-0 h-4 lg:h-5" |
| `/assets/pages/product/images/strise.webp` | https://taito.ai/_astro/strise.C03aTp4Y_utFDw.webp | pricing img alt="Strise" class="w-auto brightness-0 h-4 lg:h-5" |
| `/assets/pages/product/images/shook.webp` | https://taito.ai/_astro/shook.pgCwuOqh_ZgfzuA.webp | pricing img alt="Shook" class="w-auto brightness-0 h-4 lg:h-5" |
| `/assets/pages/product/images/clock-and-cloud.webp` | https://taito.ai/_astro/clock-and-cloud.C_dzyjf-_Z2pGlSH.webp | pricing img alt="Clock&Cloud" class="w-auto brightness-0 h-4 lg:h-5" |
| `/assets/pages/product/images/way.webp` | https://taito.ai/_astro/way.CiCzzmSK_Z1jmNW9.webp | pricing img alt="Way" class="w-auto brightness-0 h-4 lg:h-5" |
| `/assets/pages/product/images/founders-3.webp` | https://taito.ai/_astro/founders-3.T1Sm71BM_GMD7X.webp | waitlist img alt="" class="[object-position:center_30%] @2xl:[object-position:center]" |
| `/assets/pages/product/images/people-leaders-3.webp` | https://taito.ai/_astro/people-leaders-3.BbELLvRw_Z2fSdJu.webp | waitlist img alt="" class="[object-position:center_30%] @2xl:[object-position:center]" |
| `/assets/pages/product/images/operators-4.webp` | https://taito.ai/_astro/operators-4.BkubbPyq_Zo40l8.webp | waitlist img alt="" class="[object-position:center_45%] @2xl:[object-position:center]" |
| `/assets/pages/product/svg/deel.svg` | inline <svg> in DOM | agents > integrations grid (icon-lg) |
| `/assets/pages/product/svg/fortnox.svg` | inline <svg> in DOM | agents > integrations grid |
| `/assets/pages/product/svg/gemini-sm.svg` | inline <svg> in DOM | performance hero > review card sources (12px) |
| `/assets/pages/product/svg/google-sheets-sm.svg` | inline <svg> in DOM | performance hero > review card sources (12px) |
| `/assets/pages/product/svg/google-workspace.svg` | inline <svg> in DOM | agents > integrations grid |
| `/assets/pages/product/svg/greenhouse.svg` | inline <svg> in DOM | agents > integrations grid |
| `/assets/pages/product/svg/gusto.svg` | inline <svg> in DOM | agents > integrations grid |
| `/assets/pages/product/svg/info-circle.svg` | inline <svg> in DOM | comparison table source tooltip trigger |
| `/assets/pages/product/svg/linear-sm.svg` | inline <svg> in DOM | performance hero > review card sources (12px) |
| `/assets/pages/product/svg/make.svg` | inline <svg> in DOM | agents > integrations grid |
| `/assets/pages/product/svg/mcp.svg` | inline <svg> in DOM | agents > "MCP server" feature icon (Model Context Protocol glyph) |
| `/assets/pages/product/svg/microsoft-365.svg` | inline <svg> in DOM | agents > integrations grid |
| `/assets/pages/product/svg/n8n.svg` | inline <svg> in DOM | agents > integrations grid |
| `/assets/pages/product/svg/notion.svg` | inline <svg> in DOM | agents > integrations grid |
| `/assets/pages/product/svg/okta.svg` | inline <svg> in DOM | agents > integrations grid |
| `/assets/pages/product/svg/org-chart-lines.svg` | inline <svg> in DOM | people-directory > org chart connector lines (viewBox 500x400) |
| `/assets/pages/product/svg/quickbooks.svg` | inline <svg> in DOM | agents > integrations grid |
| `/assets/pages/product/svg/slack-sm.svg` | inline <svg> in DOM | performance hero > review card sources (12px) |
| `/assets/pages/product/svg/slack.svg` | inline <svg> in DOM | agents > integrations logo grid (Slack) |
| `/assets/pages/product/svg/taito-mark-36.svg` | inline <svg> in DOM | performance cycle card > "Requested feedback" panel icon |
| `/assets/pages/product/svg/taito-mark.svg` | inline <svg> in DOM | time-off Slack mock bot avatar; documents "Generating offer letter" icon |
| `/assets/pages/product/svg/xero.svg` | inline <svg> in DOM | agents > integrations grid |
| `/assets/pages/product/svg/zapier.svg` | inline <svg> in DOM | agents > integrations grid |
| `/assets/pages/product/svg/zero-wordmark.svg` | inline <svg> in DOM | pricing > customer logo marquee (Zero) |
| `/assets/pages/product/icons/lucide-arrow-down-to-line.svg` | inline lucide <svg> in DOM | UI icon (arrow-down-to-line) |
| `/assets/pages/product/icons/lucide-arrow-up.svg` | inline lucide <svg> in DOM | UI icon (arrow-up) |
| `/assets/pages/product/icons/lucide-award.svg` | inline lucide <svg> in DOM | UI icon (award) |
| `/assets/pages/product/icons/lucide-baby.svg` | inline lucide <svg> in DOM | UI icon (baby) |
| `/assets/pages/product/icons/lucide-ban.svg` | inline lucide <svg> in DOM | UI icon (ban) |
| `/assets/pages/product/icons/lucide-bell.svg` | inline lucide <svg> in DOM | UI icon (bell) |
| `/assets/pages/product/icons/lucide-blocks.svg` | inline lucide <svg> in DOM | UI icon (blocks) |
| `/assets/pages/product/icons/lucide-briefcase.svg` | inline lucide <svg> in DOM | UI icon (briefcase) |
| `/assets/pages/product/icons/lucide-calendar-clock.svg` | inline lucide <svg> in DOM | UI icon (calendar-clock) |
| `/assets/pages/product/icons/lucide-calendar-plus.svg` | inline lucide <svg> in DOM | UI icon (calendar-plus) |
| `/assets/pages/product/icons/lucide-chart-no-axes-column.svg` | inline lucide <svg> in DOM | UI icon (chart-no-axes-column) |
| `/assets/pages/product/icons/lucide-check.svg` | inline lucide <svg> in DOM | UI icon (check) |
| `/assets/pages/product/icons/lucide-chevron-down.svg` | inline lucide <svg> in DOM | UI icon (chevron-down) |
| `/assets/pages/product/icons/lucide-chevron-right.svg` | inline lucide <svg> in DOM | UI icon (chevron-right) |
| `/assets/pages/product/icons/lucide-chevrons-up.svg` | inline lucide <svg> in DOM | UI icon (chevrons-up) |
| `/assets/pages/product/icons/lucide-clock.svg` | inline lucide <svg> in DOM | UI icon (clock) |
| `/assets/pages/product/icons/lucide-database.svg` | inline lucide <svg> in DOM | UI icon (database) |
| `/assets/pages/product/icons/lucide-file-check.svg` | inline lucide <svg> in DOM | UI icon (file-check) |
| `/assets/pages/product/icons/lucide-file-lock.svg` | inline lucide <svg> in DOM | UI icon (file-lock) |
| `/assets/pages/product/icons/lucide-file-plus-corner.svg` | inline lucide <svg> in DOM | UI icon (file-plus-corner) |
| `/assets/pages/product/icons/lucide-file-spreadsheet.svg` | inline lucide <svg> in DOM | UI icon (file-spreadsheet) |
| `/assets/pages/product/icons/lucide-file-text.svg` | inline lucide <svg> in DOM | UI icon (file-text) |
| `/assets/pages/product/icons/lucide-flask-conical.svg` | inline lucide <svg> in DOM | UI icon (flask-conical) |
| `/assets/pages/product/icons/lucide-globe.svg` | inline lucide <svg> in DOM | UI icon (globe) |
| `/assets/pages/product/icons/lucide-hash.svg` | inline lucide <svg> in DOM | UI icon (hash) |
| `/assets/pages/product/icons/lucide-heart-handshake.svg` | inline lucide <svg> in DOM | UI icon (heart-handshake) |
| `/assets/pages/product/icons/lucide-heart.svg` | inline lucide <svg> in DOM | UI icon (heart) |
| `/assets/pages/product/icons/lucide-history.svg` | inline lucide <svg> in DOM | UI icon (history) |
| `/assets/pages/product/icons/lucide-key-round.svg` | inline lucide <svg> in DOM | UI icon (key-round) |
| `/assets/pages/product/icons/lucide-list-checks.svg` | inline lucide <svg> in DOM | UI icon (list-checks) |
| `/assets/pages/product/icons/lucide-lock.svg` | inline lucide <svg> in DOM | UI icon (lock) |
| `/assets/pages/product/icons/lucide-message-circle.svg` | inline lucide <svg> in DOM | UI icon (message-circle) |
| `/assets/pages/product/icons/lucide-message-square.svg` | inline lucide <svg> in DOM | UI icon (message-square) |
| `/assets/pages/product/icons/lucide-mouse-pointer-2.svg` | inline lucide <svg> in DOM | UI icon (mouse-pointer-2) |
| `/assets/pages/product/icons/lucide-move-down.svg` | inline lucide <svg> in DOM | UI icon (move-down) |
| `/assets/pages/product/icons/lucide-network.svg` | inline lucide <svg> in DOM | UI icon (network) |
| `/assets/pages/product/icons/lucide-pen-line.svg` | inline lucide <svg> in DOM | UI icon (pen-line) |
| `/assets/pages/product/icons/lucide-plane-takeoff.svg` | inline lucide <svg> in DOM | UI icon (plane-takeoff) |
| `/assets/pages/product/icons/lucide-plus.svg` | inline lucide <svg> in DOM | UI icon (plus) |
| `/assets/pages/product/icons/lucide-pound-sterling.svg` | inline lucide <svg> in DOM | UI icon (pound-sterling) |
| `/assets/pages/product/icons/lucide-route.svg` | inline lucide <svg> in DOM | UI icon (route) |
| `/assets/pages/product/icons/lucide-scroll-text.svg` | inline lucide <svg> in DOM | UI icon (scroll-text) |
| `/assets/pages/product/icons/lucide-search.svg` | inline lucide <svg> in DOM | UI icon (search) |
| `/assets/pages/product/icons/lucide-shield-alert.svg` | inline lucide <svg> in DOM | UI icon (shield-alert) |
| `/assets/pages/product/icons/lucide-shield-check.svg` | inline lucide <svg> in DOM | UI icon (shield-check) |
| `/assets/pages/product/icons/lucide-signature.svg` | inline lucide <svg> in DOM | UI icon (signature) |
| `/assets/pages/product/icons/lucide-sparkles.svg` | inline lucide <svg> in DOM | UI icon (sparkles) |
| `/assets/pages/product/icons/lucide-star.svg` | inline lucide <svg> in DOM | UI icon (star) |
| `/assets/pages/product/icons/lucide-stethoscope.svg` | inline lucide <svg> in DOM | UI icon (stethoscope) |
| `/assets/pages/product/icons/lucide-target.svg` | inline lucide <svg> in DOM | UI icon (target) |
| `/assets/pages/product/icons/lucide-timer.svg` | inline lucide <svg> in DOM | UI icon (timer) |
| `/assets/pages/product/icons/lucide-users.svg` | inline lucide <svg> in DOM | UI icon (users) |
| `/assets/pages/product/icons/lucide-wallet.svg` | inline lucide <svg> in DOM | UI icon (wallet) |
| `/assets/pages/product/icons/lucide-workflow.svg` | inline lucide <svg> in DOM | UI icon (workflow) |
