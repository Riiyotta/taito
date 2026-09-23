# Local site mirror, measured via Playwright 2026-09-23, plus this repo own src/App.jsx route table

Source: Local site mirror, measured via Playwright 2026-09-23, plus this repo own src/App.jsx route table · React/Vite/Tailwind v3 clone in this repo, not the original Astro/Tailwind v4 site
Status: **measured-from-mirror** · production approved: **false**
202 routes · 20 templates · 44 unique sections

> Generated from `ia.json` by `build.mjs`. Edit the JSON, not this file.

## Shape of the site

The largest 3 templates (Blog post (English + localized), Compliance country guide (English + localized), MCP use case detail) account for 162 of 202 routes (80%). The remaining 40 routes span 17 templates.

| template | routes | share |
|---|---:|---:|
| Blog post (English + localized) | 143 | 71% |
| Compliance country guide (English + localized) | 11 | 5% |
| MCP use case detail | 8 | 4% |
| Blog index (English + localized) | 6 | 3% |
| Product feature page (agents / performance / time-off / people-directory / documents) | 5 | 2% |
| Tool calculator detail | 5 | 2% |
| Compliance calendar | 4 | 2% |
| Blog category listing | 4 | 2% |
| Persona page (founders / operators / people-leaders) | 3 | 1% |
| Legal document (privacy / terms / DPA) | 3 | 1% |
| Homepage | 1 | 0% |
| Company | 1 | 0% |
| Customers (coming soon) | 1 | 0% |
| Pricing | 1 | 0% |
| Security | 1 | 0% |
| Waitlist | 1 | 0% |
| MCP use cases index | 1 | 0% |
| Tools index | 1 | 0% |
| Compliance index | 1 | 0% |
| 404 Not Found | 1 | 0% |

## Page chrome

**202 routes carry chrome = `full`** — Homepage, Persona page (founders / operators / people-leaders), Company, Customers (coming soon), Product feature page (agents / performance / time-off / people-directory / documents), Pricing, Security, Waitlist, MCP use cases index, MCP use case detail, Tools index, Tool calculator detail, Compliance index, Compliance country guide (English + localized), Compliance calendar, Legal document (privacy / terms / DPA), Blog index (English + localized), Blog category listing, Blog post (English + localized), 404 Not Found.

## Sections by reuse

How widely a section is shared determines whether it belongs in a shared
component library or stays local to its page.

| section | category | templates | routes | implementation | scope |
|---|---|---:|---:|---|---|
| `shell.navbar` | SHELL | 20 | 202 | `src/components/Navbar.jsx` | Present identically on all 202 routes. |
| `shell.footer` | SHELL | 20 | 202 | `src/components/Footer.jsx` | Present identically on all 202 routes. |
| `shell.cookie-banner` | SHELL | 20 | 202 | `src/components/CookieBanner.jsx` | Present identically on all 202 routes (client-side, not server-rendered per route). |
| `content.faq` | CONTENT | 10 | 175 | `src/components/Faq.jsx (home) + src/components/persona-company/Sections.jsx (PcFaq) + src/pages/McpIndex.jsx & McpUseCase.jsx (FaqSection) + src/components/compliance-legal/shared.jsx (FaqItem) + src/components/blog/Article.jsx (FaqItem, in-post variant)` | Present on the homepage, all 3 persona pages, 5 of 8 mcp-detail routes worth of pages (actually all 8, per HowItWorks+Faq pairing), 6 of 8 product-hero-family pages (agents/performance/pricing/security/waitlist; time-off/people-directory/documents have none), all 11 compliance-country routes, and optionally inside individual blog posts — the single most reused content block in the site. |
| `content.blog-post-body` | CONTENT | 1 | 143 | `src/pages/BlogPost.jsx, src/components/blog/Article.jsx, src/components/blog/lorem.js (buildLoremBody)` | Present on all 143 blog-post routes (111 English + 32 localized). |
| `hero.page-header` | HERO | 9 | 34 | `src/components/product/Sections.jsx (PageHeader, pricing/security) + src/components/compliance-legal/shared.jsx (PageHeader, tools/compliance/calendar)` | Present on pricing, security, tools-index, tools-detail, compliance-index, compliance-country, compliance-calendar (7 route shapes). |
| `content.related-grid` | CONTENT | 3 | 24 | `src/components/product/Sections.jsx (Related) + src/components/mcp-tools/shared.jsx (UseCaseGrid, 3-item variant) + src/pages/ComplianceCountry.jsx (inline Block/SectionTitle grid)` | Present on all 5 product-hero routes, all 8 mcp-detail routes, and all 11 compliance-country routes — 24 route occurrences. |
| `content.prose-guide` | CONTENT | 2 | 16 | `src/components/compliance-legal/Prose.jsx` | Present on all 11 compliance-country routes and all 3 legal routes (privacy/terms/dpa) — 14 route occurrences, one shared Prose renderer. |
| `features.compliance-at-a-glance` | FEATURES | 1 | 11 | `src/pages/ComplianceCountry.jsx` | Present on all 11 compliance-country route occurrences (6 English + 5 localized). |
| `navigation.guide-toc` | NAVIGATION | 1 | 11 | `src/components/compliance-legal/GuideToc.jsx` | Present on all 11 compliance-country routes. |
| `proof.testimonial` | PROOF | 4 | 10 | `src/components/Testimonial.jsx (home) + src/components/persona-company/Sections.jsx (PcTestimonial) + src/components/product/Sections.jsx (product testimonial)` | Present on the homepage, all 3 persona pages, and 2 product-hero pages (performance, waitlist) — 6 route occurrences, one shared component. |
| `content.blog-index-cards` | CONTENT | 2 | 10 | `src/components/blog/Listing.jsx, src/components/blog/BlogCard.jsx` | Present on the English /blog index and all 5 localized /:lang/blog indexes, and again (filtered to one category) on the 4 /blog/:category pages — 10 route occurrences. |
| `content.blog-archive-list` | CONTENT | 2 | 10 | `src/components/blog/Listing.jsx (ArchiveList)` | Present on the English /blog index and all 4 /blog/:category pages (5 route occurrences) — not on localized indexes, which show every post as cards with no overflow. |
| `navigation.blog-category-nav` | NAVIGATION | 2 | 10 | `src/components/blog/Listing.jsx (CategoryNav)` | Present on the English /blog index and all 4 /blog/:category pages (5 route occurrences); not on localized indexes. |
| `features.people-ops-grid` | FEATURES | 7 | 9 | `src/components/PeopleOps.jsx (home) + src/components/persona-company/Sections.jsx (FeatureSection, persona) + src/components/product/Sections.jsx (FeatureGrid, waitlist/pricing/security) + src/pages/ToolsIndex.jsx (inline FeatureColumns-based grid)` | Present on the homepage, all 3 persona pages, /waitlist, /pricing ('Our model'), /security ('Security controls' and 'Documentation', the latter as link cards), and /tools ('standard') — 9 route occurrences total. |
| `comparison.table` | COMPARISON | 3 | 9 | `src/components/persona-company/Sections.jsx (ComparisonTable) + src/components/product/Sections.jsx (ComparisonTable)` | Present on /operators, /people-leaders (2 persona pages; founders uses stats instead), and on agents/time-off-attendance/people-directory/pricing (4 product-family pages) — 6 route occurrences, one shared component. |
| `hero.mcp-split` | HERO | 2 | 9 | `src/components/mcp-tools/shared.jsx (SplitHero)` | Present on mcp-index and all 8 mcp-detail routes (9 route occurrences). |
| `features.pain-columns` | FEATURES | 2 | 8 | `src/components/persona-company/Sections.jsx (PainColumns) + src/components/product/Sections.jsx (PainPoints)` | Present on all 3 persona pages ('cracks-at-scale' / 'operator-plate' / 'week-before-and-after') and all 5 product-hero pages ('From friction to fixed') — 8 route occurrences. |
| `features.mcp-how-it-works` | FEATURES | 1 | 8 | `src/components/mcp-tools/HowItWorks.jsx` | Present on all 8 mcp-detail routes. |
| `features.split-media` | FEATURES | 3 | 7 | `src/components/PeopleAgents.jsx, src/components/Performance.jsx (home) + src/components/product/Sections.jsx, src/components/product/SplitMocks.jsx (product pages)` | Present on the homepage (2 occurrences: agents, performance) and each of the 5 product-hero pages (2 occurrences each = 10) — 12 route occurrences total. |
| `content.blog-product-timeline` | CONTENT | 1 | 6 | `src/pages/BlogIndex.jsx` | Present only on the English /blog index (1 route occurrence, out of 6 blog-index route occurrences). |
| `hero.persona` | HERO | 3 | 5 | `src/components/persona-company/PageHero.jsx` | Present on the 5 persona+company+customers routes (founders, operators, people-leaders, company, customers). |
| `hero.product` | HERO | 1 | 5 | `src/components/product/HeroFigures.jsx (mocks) + src/pages/*.jsx (shell)` | Present on the 5 product-hero routes (agents, performance, time-off-attendance, people-directory, documents). |
| `utility.calculator` | UTILITY | 1 | 5 | `src/components/mcp-tools/Calculator.jsx, src/components/mcp-tools/calcs.js` | Present on all 5 tools-detail routes. |
| `proof.math-stats` | PROOF | 2 | 4 | `src/components/MathStats.jsx (home) + src/components/persona-company/Sections.jsx (PcStats)` | Present on the homepage and /founders only (2 route occurrences). |
| `utility.compliance-calendar` | UTILITY | 1 | 4 | `src/pages/ComplianceCalendar.jsx` | Present on 4 of the 6 possible compliance-calendar routes (norway, uk, finland, sweden); netherlands and estonia calendars do not exist in the content data. |
| `trust.security-badges` | TRUST | 3 | 3 | `src/components/Security.jsx (home) + src/components/product/Sections.jsx (Badges/BadgeRow, pricing/security)` | Present on the homepage, /pricing, and /security — 3 route occurrences. |
| `content.legal-doc` | CONTENT | 1 | 3 | `src/pages/Legal.jsx` | Present on all 3 legal routes (privacy, terms, dpa). |
| `proof.logo-marquee` | PROOF | 2 | 2 | `src/components/Hero.jsx (home) + src/pages/Pricing.jsx` | Present on the homepage (inside hero.marketing) and again standalone on /pricing. |
| `proof.personas-grid` | PROOF | 2 | 2 | `src/components/Personas.jsx` | Present on the homepage and again on /waitlist (2 route occurrences). |
| `hero.marketing` | HERO | 1 | 1 | `src/components/Hero.jsx` | Present only on the homepage (1 route). |
| `hero.waitlist-intro` | HERO | 1 | 1 | `src/components/product/WaitlistIntro.jsx` | Present only on /waitlist (1 route). |
| `features.why-taito` | FEATURES | 1 | 1 | `src/components/WhyTaito.jsx` | Present only on the homepage (1 route). |
| `features.company-story` | FEATURES | 1 | 1 | `src/components/persona-company/CompanySections.jsx` | Present only on /company (1 route). |
| `features.company-mission` | FEATURES | 1 | 1 | `src/components/persona-company/CompanySections.jsx` | Present only on /company (1 route). |
| `features.team-grid` | FEATURES | 1 | 1 | `src/components/persona-company/CompanySections.jsx` | Present only on /company (1 route). |
| `features.calculator-tool-list` | FEATURES | 1 | 1 | `src/pages/ToolsIndex.jsx (LinkCardGrid)` | Present only on /tools (1 route). |
| `features.compliance-markets-grid` | FEATURES | 1 | 1 | `src/pages/ComplianceIndex.jsx` | Present only on /compliance (1 route). |
| `features.mcp-value-columns` | FEATURES | 1 | 1 | `src/pages/McpIndex.jsx (FeatureColumns)` | Present only on /mcp-use-cases (1 route). |
| `content.mcp-gallery-grid` | CONTENT | 1 | 1 | `src/pages/McpIndex.jsx (UseCaseGrid), src/components/mcp-tools/shared.jsx (UseCaseGrid)` | Present only on /mcp-use-cases (1 route). |
| `trust.integrations-grid` | TRUST | 1 | 1 | `src/components/Integrations.jsx` | Present only on the homepage (1 route). |
| `conversion.pricing-columns` | CONVERSION | 1 | 1 | `src/pages/Pricing.jsx` | Present only on /pricing (1 route). |
| `conversion.waitlist-form` | CONVERSION | 1 | 1 | `src/components/product/WaitlistIntro.jsx (WaitlistForm)` | Present only on /waitlist (1 route). |
| `content.not-found` | CONTENT | 1 | 1 | `src/pages/NotFound.jsx` | Present only on the wildcard route (1 route). |

**21 shared sections** appear in more than one template and belong in a component library.

**23 single-use sections** appear in exactly one template. Building these
as "reusable" components up front would be speculative — keep them page-local
until a second caller actually appears.

## Templates

### Homepage — `template.home`

1 route · `/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.marketing` | page-local |
| 3 | PROOF | `proof.logo-marquee` | shared ×2 |
| 4 | FEATURES | `features.why-taito` | page-local |
| 5 | FEATURES | `features.people-ops-grid` | shared ×7 |
| 6 | FEATURES | `features.split-media` | shared ×3 |
| 7 | FEATURES | `features.split-media` | shared ×3 |
| 8 | PROOF | `proof.personas-grid` | shared ×2 |
| 9 | PROOF | `proof.testimonial` | shared ×4 |
| 10 | TRUST | `trust.security-badges` | shared ×3 |
| 11 | TRUST | `trust.integrations-grid` | page-local |
| 12 | PROOF | `proof.math-stats` | shared ×2 |
| 13 | CONTENT | `content.faq` | shared ×10 |
| 14 | SHELL | `shell.footer` | shared ×20 |
| 15 | SHELL | `shell.cookie-banner` | shared ×20 |

### Persona page (founders / operators / people-leaders) — `template.persona`

3 routes · `/founders`, `/operators`, `/people-leaders` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.persona` | shared ×3 |
| 3 | FEATURES | `features.pain-columns` | shared ×2 |
| 4 | FEATURES | `features.people-ops-grid` | shared ×7 |
| 5 | PROOF | `proof.testimonial` | shared ×4 |
| 6 | PROOF | `proof.math-stats` | shared ×2 |
| 7 | COMPARISON | `comparison.table` | shared ×3 |
| 8 | CONTENT | `content.faq` | shared ×10 |
| 9 | SHELL | `shell.footer` | shared ×20 |
| 10 | SHELL | `shell.cookie-banner` | shared ×20 |

### Company — `template.company`

1 route · `/company` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.persona` | shared ×3 |
| 3 | FEATURES | `features.company-story` | page-local |
| 4 | FEATURES | `features.company-mission` | page-local |
| 5 | FEATURES | `features.team-grid` | page-local |
| 6 | SHELL | `shell.footer` | shared ×20 |
| 7 | SHELL | `shell.cookie-banner` | shared ×20 |

### Customers (coming soon) — `template.customers`

1 route · `/customers` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.persona` | shared ×3 |
| 3 | SHELL | `shell.footer` | shared ×20 |
| 4 | SHELL | `shell.cookie-banner` | shared ×20 |

### Product feature page (agents / performance / time-off / people-directory / documents) — `template.product-hero`

5 routes · `/agents`, `/performance`, `/time-off-attendance`, `/people-directory`, `/documents` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.product` | page-local |
| 3 | FEATURES | `features.split-media` | shared ×3 |
| 4 | FEATURES | `features.split-media` | shared ×3 |
| 5 | PROOF | `proof.testimonial` | shared ×4 |
| 6 | FEATURES | `features.pain-columns` | shared ×2 |
| 7 | COMPARISON | `comparison.table` | shared ×3 |
| 8 | CONTENT | `content.faq` | shared ×10 |
| 9 | CONTENT | `content.related-grid` | shared ×3 |
| 10 | SHELL | `shell.footer` | shared ×20 |
| 11 | SHELL | `shell.cookie-banner` | shared ×20 |

### Pricing — `template.pricing`

1 route · `/pricing` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.page-header` | shared ×9 |
| 3 | CONVERSION | `conversion.pricing-columns` | page-local |
| 4 | FEATURES | `features.people-ops-grid` | shared ×7 |
| 5 | PROOF | `proof.logo-marquee` | shared ×2 |
| 6 | COMPARISON | `comparison.table` | shared ×3 |
| 7 | TRUST | `trust.security-badges` | shared ×3 |
| 8 | CONTENT | `content.faq` | shared ×10 |
| 9 | SHELL | `shell.footer` | shared ×20 |
| 10 | SHELL | `shell.cookie-banner` | shared ×20 |

### Security — `template.security`

1 route · `/security` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.page-header` | shared ×9 |
| 3 | TRUST | `trust.security-badges` | shared ×3 |
| 4 | FEATURES | `features.people-ops-grid` | shared ×7 |
| 5 | FEATURES | `features.split-media` | shared ×3 |
| 6 | FEATURES | `features.people-ops-grid` | shared ×7 |
| 7 | CONTENT | `content.faq` | shared ×10 |
| 8 | SHELL | `shell.footer` | shared ×20 |
| 9 | SHELL | `shell.cookie-banner` | shared ×20 |

### Waitlist — `template.waitlist`

1 route · `/waitlist` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.waitlist-intro` | page-local |
| 3 | CONVERSION | `conversion.waitlist-form` | page-local |
| 4 | PROOF | `proof.testimonial` | shared ×4 |
| 5 | FEATURES | `features.people-ops-grid` | shared ×7 |
| 6 | PROOF | `proof.personas-grid` | shared ×2 |
| 7 | CONTENT | `content.faq` | shared ×10 |
| 8 | SHELL | `shell.footer` | shared ×20 |
| 9 | SHELL | `shell.cookie-banner` | shared ×20 |

### MCP use cases index — `template.mcp-index`

1 route · `/mcp-use-cases` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.mcp-split` | shared ×2 |
| 3 | CONTENT | `content.mcp-gallery-grid` | page-local |
| 4 | FEATURES | `features.mcp-value-columns` | page-local |
| 5 | CONTENT | `content.faq` | shared ×10 |
| 6 | SHELL | `shell.footer` | shared ×20 |
| 7 | SHELL | `shell.cookie-banner` | shared ×20 |

### MCP use case detail — `template.mcp-detail`

8 routes · `/mcp-use-cases/engineering-performance-review-linear`, `/mcp-use-cases/gtm-performance-review-hubspot`, `/mcp-use-cases/ask-hr-in-slack`, `/mcp-use-cases/team-availability-digest-slack`, `/mcp-use-cases/onboarding-automation-ashby`, `/mcp-use-cases/payroll-prep`, `/mcp-use-cases/sales-bonus-hubspot`, `/mcp-use-cases/custom-people-apps-lovable` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.mcp-split` | shared ×2 |
| 3 | FEATURES | `features.mcp-how-it-works` | page-local |
| 4 | CONTENT | `content.faq` | shared ×10 |
| 5 | CONTENT | `content.related-grid` | shared ×3 |
| 6 | SHELL | `shell.footer` | shared ×20 |
| 7 | SHELL | `shell.cookie-banner` | shared ×20 |

### Tools index — `template.tools-index`

1 route · `/tools` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.page-header` | shared ×9 |
| 3 | FEATURES | `features.calculator-tool-list` | page-local |
| 4 | FEATURES | `features.people-ops-grid` | shared ×7 |
| 5 | SHELL | `shell.footer` | shared ×20 |
| 6 | SHELL | `shell.cookie-banner` | shared ×20 |

### Tool calculator detail — `template.tool-calculator`

5 routes · `/tools/holiday-pay-calculator`, `/tools/statutory-sick-pay-calculator`, `/tools/feriepengekalkulator`, `/tools/semesterdagar-raknare`, `/tools/vuosilomalaskuri` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.page-header` | shared ×9 |
| 3 | UTILITY | `utility.calculator` | page-local |
| 4 | CONTENT | `content.prose-guide` | shared ×2 |
| 5 | SHELL | `shell.footer` | shared ×20 |
| 6 | SHELL | `shell.cookie-banner` | shared ×20 |

### Compliance index — `template.compliance-index`

1 route · `/compliance` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.page-header` | shared ×9 |
| 3 | FEATURES | `features.compliance-markets-grid` | page-local |
| 4 | FEATURES | `features.people-ops-grid` | shared ×7 |
| 5 | SHELL | `shell.footer` | shared ×20 |
| 6 | SHELL | `shell.cookie-banner` | shared ×20 |

### Compliance country guide (English + localized) — `template.compliance-country`

11 routes · `/compliance/finland`, `/compliance/sweden`, `/compliance/norway`, `/compliance/estonia`, `/compliance/uk`, `/compliance/netherlands`, `/fi/compliance/finland`, `/sv/compliance/sweden`, `/no/compliance/norway`, `/et/compliance/estonia`, `/nl/compliance/netherlands` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.page-header` | shared ×9 |
| 3 | FEATURES | `features.compliance-at-a-glance` | page-local |
| 4 | NAVIGATION | `navigation.guide-toc` | page-local |
| 5 | CONTENT | `content.prose-guide` | shared ×2 |
| 6 | CONTENT | `content.faq` | shared ×10 |
| 7 | CONTENT | `content.related-grid` | shared ×3 |
| 8 | SHELL | `shell.footer` | shared ×20 |
| 9 | SHELL | `shell.cookie-banner` | shared ×20 |

### Compliance calendar — `template.compliance-calendar`

4 routes · `/compliance/norway/calendar`, `/compliance/uk/calendar`, `/compliance/finland/calendar`, `/compliance/sweden/calendar` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.page-header` | shared ×9 |
| 3 | UTILITY | `utility.compliance-calendar` | page-local |
| 4 | SHELL | `shell.footer` | shared ×20 |
| 5 | SHELL | `shell.cookie-banner` | shared ×20 |

### Legal document (privacy / terms / DPA) — `template.legal`

3 routes · `/privacy`, `/terms`, `/dpa` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | CONTENT | `content.legal-doc` | page-local |
| 3 | SHELL | `shell.footer` | shared ×20 |
| 4 | SHELL | `shell.cookie-banner` | shared ×20 |

### Blog index (English + localized) — `template.blog-index`

6 routes · `/blog`, `/et/blog`, `/fi/blog`, `/nl/blog`, `/no/blog`, `/sv/blog` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.page-header` | shared ×9 |
| 3 | NAVIGATION | `navigation.blog-category-nav` | shared ×2 |
| 4 | CONTENT | `content.blog-index-cards` | shared ×2 |
| 5 | CONTENT | `content.blog-product-timeline` | page-local |
| 6 | CONTENT | `content.blog-index-cards` | shared ×2 |
| 7 | CONTENT | `content.blog-archive-list` | shared ×2 |
| 8 | SHELL | `shell.footer` | shared ×20 |
| 9 | SHELL | `shell.cookie-banner` | shared ×20 |

### Blog category listing — `template.blog-category`

4 routes · `/blog/guides`, `/blog/case-studies`, `/blog/news`, `/blog/product` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | HERO | `hero.page-header` | shared ×9 |
| 3 | NAVIGATION | `navigation.blog-category-nav` | shared ×2 |
| 4 | CONTENT | `content.blog-index-cards` | shared ×2 |
| 5 | CONTENT | `content.blog-archive-list` | shared ×2 |
| 6 | SHELL | `shell.footer` | shared ×20 |
| 7 | SHELL | `shell.cookie-banner` | shared ×20 |

### Blog post (English + localized) — `template.blog-post`

143 routes · `/blog/{slug} or /{lang}/blog/{slug}` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | CONTENT | `content.blog-post-body` | page-local |
| 3 | CONTENT | `content.faq` | shared ×10 |
| 4 | SHELL | `shell.footer` | shared ×20 |
| 5 | SHELL | `shell.cookie-banner` | shared ×20 |

### 404 Not Found — `template.not-found`

1 route · `*` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar` | shared ×20 |
| 2 | CONTENT | `content.not-found` | page-local |
| 3 | SHELL | `shell.footer` | shared ×20 |
| 4 | SHELL | `shell.cookie-banner` | shared ×20 |

## Section reference

### SHELL

_Chrome present on every route: header/nav, footer, cookie banner._

**`shell.navbar`** — Fixed-position-looking (actually `position:relative`, scrolls away) header: logo + mega-menu desktop nav (Product/Solutions dropdowns, Pricing/Blog/Company links) + Log in/Join waitlist CTAs; collapses to a full-screen hamburger overlay below 1200px.

· Present identically on all 202 routes. · appears on 202 routes · implemented by `src/components/Navbar.jsx`

**`shell.footer`** — Dark footer: closing CTA row (H2 'See what autopilot looks like.' + Join-waitlist button — fixed copy, load-bearing for conversion), 4-column link nav (Product/Solutions/Resources/Legal), bottom bar with copyright + social icons.

· Present identically on all 202 routes. · appears on 202 routes · implemented by `src/components/Footer.jsx`

**`shell.cookie-banner`** — Bottom-right cookie consent dialog with Accept all / Reject all / Customize (expands a checkbox fieldset), shown once per visit and stored for 180 days.

· Present identically on all 202 routes (client-side, not server-rendered per route). · appears on 202 routes · implemented by `src/components/CookieBanner.jsx`

### HERO

_Page-opening block: eyebrow, H1, lede, primary CTA, and a right-hand media/mock illustration._

**`hero.marketing`** — Homepage-only hero: eyebrow LINK (case-study teaser), H1 'Run people ops on autopilot', lede, primary CTA, right-hand photo + fake AI-chat app-window mock, plus a logo marquee strip beneath it.

· Present only on the homepage (1 route). · appears on 1 routes · implemented by `src/components/Hero.jsx`

**`hero.persona`** — Shared hero shell for founders/operators/people-leaders/company/customers: eyebrow (plain text, not a link, except customers keeps hero.marketing's eyebrow style off), H1, lede, primary CTA left; right-hand photo with an absolutely-positioned typed-prompt card overlay (omitted on company and customers).

· Present on the 5 persona+company+customers routes (founders, operators, people-leaders, company, customers). · appears on 5 routes · implemented by `src/components/persona-company/PageHero.jsx`

**`hero.product`** — Shared hero shell for the 5 product feature pages: eyebrow (plain text), H1, lede, primary CTA left; right-hand media panel holds a page-specific animated mock (bar chart + runs ticker for agents, review card for performance, balances card for time-off, app-window table for people-directory, rotating document wheel for documents) instead of a photo.

· Present on the 5 product-hero routes (agents, performance, time-off-attendance, people-directory, documents). · appears on 5 routes · implemented by `src/components/product/HeroFigures.jsx (mocks) + src/pages/*.jsx (shell)`

**`hero.page-header`** — Non-split page header (no right-hand media): eyebrow + H1 (cols 1-6) + description (cols 7-12), used for pages whose 'hero' is really a title band above tabular/listing content. Pricing adds a two-column price comparison beneath it; security adds an 'Explore trust center' CTA row.

· Present on pricing, security, tools-index, tools-detail, compliance-index, compliance-country, compliance-calendar (7 route shapes). · appears on 34 routes · implemented by `src/components/product/Sections.jsx (PageHeader, pricing/security) + src/components/compliance-legal/shared.jsx (PageHeader, tools/compliance/calendar)`

**`hero.mcp-split`** — Split hero shell reused for the MCP-use-cases family: same left-text/right-media geometry as hero.product, but the right media is a use-case-specific illustration (a logo grid on the index, a per-slug mock on detail pages) via a `children` render slot rather than a fixed set of mocks.

· Present on mcp-index and all 8 mcp-detail routes (9 route occurrences). · appears on 9 routes · implemented by `src/components/mcp-tools/shared.jsx (SplitHero)`

**`hero.waitlist-intro`** — Split hero unique to /waitlist: left SectionHeader + 3-item feature list (or 3 badges on mobile), right a bordered signup form card (name/email/company/team-size/referral-source fields, submit, inline success/error states).

· Present only on /waitlist (1 route). · appears on 1 routes · implemented by `src/components/product/WaitlistIntro.jsx`

### PROOF

_Social proof: logos, testimonials, stats, investor/customer marks._

**`proof.logo-marquee`** — Infinite-scroll (60s linear) horizontal strip of 7 customer wordmarks, all rendered pure black via CSS filter, doubled in the DOM for seamless looping.

· Present on the homepage (inside hero.marketing) and again standalone on /pricing. · appears on 2 routes · implemented by `src/components/Hero.jsx (home) + src/pages/Pricing.jsx`

**`proof.testimonial`** — Centered single-quote block: customer logo, blockquote with curly-quote pseudo-elements, name + title figcaption. Content (logo, quote, name, role) varies per route.

· Present on the homepage, all 3 persona pages, and 2 product-hero pages (performance, waitlist) — 6 route occurrences, one shared component. · appears on 10 routes · implemented by `src/components/Testimonial.jsx (home) + src/components/persona-company/Sections.jsx (PcTestimonial) + src/components/product/Sections.jsx (product testimonial)`

**`proof.personas-grid`** — 3-card dark-mode grid ('Built for') linking to the founders/operators/people-leaders persona pages: full-bleed photo, gradient overlay, kicker/H3/description, hover zoom + indicator icon flip.

· Present on the homepage and again on /waitlist (2 route occurrences). · appears on 2 routes · implemented by `src/components/Personas.jsx`

**`proof.math-stats`** — 4-row definition-list of big statistic + label + sourced tooltip ('By the numbers' on home, 'The cost of doing it the old way' on /founders).

· Present on the homepage and /founders only (2 route occurrences). · appears on 4 routes · implemented by `src/components/MathStats.jsx (home) + src/components/persona-company/Sections.jsx (PcStats)`

### FEATURES

_Product/value explanation blocks: feature grids, split media+text sections, pain-point columns._

**`features.why-taito`** — Homepage-only 3-card feature grid ('One product for all things people' / 'Works where your team already does' / 'Regional compliance, no workarounds'), each card a 4:3 photo tile with an overlaid mock (icon grid, Slack card, or flag list) plus H3+body text below.

· Present only on the homepage (1 route). · appears on 1 routes · implemented by `src/components/WhyTaito.jsx`

**`features.people-ops-grid`** — Bordered 3x2 (or 3x1) icon+H3+body feature grid: no card chrome, just a hairline grid of cells. Two separate implementations share this shape: the homepage/persona-pages component, and product/Sections.jsx's FeatureGrid used by waitlist, pricing, and security.

· Present on the homepage, all 3 persona pages, /waitlist, /pricing ('Our model'), /security ('Security controls' and 'Documentation', the latter as link cards), and /tools ('standard') — 9 route occurrences total. · appears on 9 routes · implemented by `src/components/PeopleOps.jsx (home) + src/components/persona-company/Sections.jsx (FeatureSection, persona) + src/components/product/Sections.jsx (FeatureGrid, waitlist/pricing/security) + src/pages/ToolsIndex.jsx (inline FeatureColumns-based grid)`

**`features.split-media`** — Two-column split section: a feature list (icon+H3+body items, optionally divider-separated) on one side and a large media panel with a page-specific animated mock on the other; media alternates left/right between the first and second occurrence on a page. Used for the homepage's People agents/Performance sections and every product-hero page's two 'How it works'/'Integrations' splits.

· Present on the homepage (2 occurrences: agents, performance) and each of the 5 product-hero pages (2 occurrences each = 10) — 12 route occurrences total. · appears on 7 routes · implemented by `src/components/PeopleAgents.jsx, src/components/Performance.jsx (home) + src/components/product/Sections.jsx, src/components/product/SplitMocks.jsx (product pages)`

**`features.pain-columns`** — 3-column (stacked on mobile) list of kicker+H3+body items separated by hairline dividers, framing the problem before the product's answer. Reused as PainPoints on product-hero pages.

· Present on all 3 persona pages ('cracks-at-scale' / 'operator-plate' / 'week-before-and-after') and all 5 product-hero pages ('From friction to fixed') — 8 route occurrences. · appears on 8 routes · implemented by `src/components/persona-company/Sections.jsx (PainColumns) + src/components/product/Sections.jsx (PainPoints)`

**`features.company-story`** — Centered narrative block unique to /company: eyebrow+H2, two-paragraph founder-story copy (lorem-ipsum placeholder matching real length per this repo's study-clone convention), an hr, and 'Backed by the best' investor logos (Accel, illusian).

· Present only on /company (1 route). · appears on 1 routes · implemented by `src/components/persona-company/CompanySections.jsx`

**`features.company-mission`** — 4-column value-grid variant of features.people-ops-grid: kicker 'V / n' instead of an icon, no card chrome, unique to /company's Mission/values/goals section.

· Present only on /company (1 route). · appears on 1 routes · implemented by `src/components/persona-company/CompanySections.jsx`

**`features.team-grid`** — Subgrid team roster unique to /company: circular avatar + name + role + bio per member (7 real people), plus a trailing 'You?' careers card.

· Present only on /company (1 route). · appears on 1 routes · implemented by `src/components/persona-company/CompanySections.jsx`

**`features.calculator-tool-list`** — 5-item link-card list on /tools linking to each statutory calculator, each card showing a kicker (jurisdiction/topic), title, body description, and the governing statute citation.

· Present only on /tools (1 route). · appears on 1 routes · implemented by `src/pages/ToolsIndex.jsx (LinkCardGrid)`

**`features.compliance-markets-grid`** — Bordered grid of 6 country cards (flag + name + description + arrow) linking into /compliance/:country, on the compliance index.

· Present only on /compliance (1 route). · appears on 1 routes · implemented by `src/pages/ComplianceIndex.jsx`

**`features.compliance-at-a-glance`** — Checklist-style summary block on each country page giving the headline numbers (leave days, sick-pay rules, etc.) before the full prose guide.

· Present on all 11 compliance-country route occurrences (6 English + 5 localized). · appears on 11 routes · implemented by `src/pages/ComplianceCountry.jsx`

**`features.mcp-value-columns`** — 3-column feature-list block explaining the value proposition of MCP-based automation, on the mcp-use-cases index.

· Present only on /mcp-use-cases (1 route). · appears on 1 routes · implemented by `src/pages/McpIndex.jsx (FeatureColumns)`

**`features.mcp-how-it-works`** — Split block on each MCP use-case detail page: a feature list on the left, and a prompt-snippet mock with a copy button and integration-brand chips on the right.

· Present on all 8 mcp-detail routes. · appears on 8 routes · implemented by `src/components/mcp-tools/HowItWorks.jsx`

### COMPARISON

_Structured before/after or us-vs-them tables._

**`comparison.table`** — 'Status quo' vs 'Taito.ai' (or equivalent headers) comparison table with sourced-tooltip cells, shared across every page that runs this contrast.

· Present on /operators, /people-leaders (2 persona pages; founders uses stats instead), and on agents/time-off-attendance/people-directory/pricing (4 product-family pages) — 6 route occurrences, one shared component. · appears on 9 routes · implemented by `src/components/persona-company/Sections.jsx (ComparisonTable) + src/components/product/Sections.jsx (ComparisonTable)`

### CONVERSION

_Pricing, waitlist form, CTA bands aimed at a signup/contact action._

**`conversion.pricing-columns`** — Two-column price card pair (annual/monthly) with a 'Save 20%' pill, big price, billing-cadence note, and a Join-waitlist CTA per column, sitting directly under /pricing's PageHeader.

· Present only on /pricing (1 route). · appears on 1 routes · implemented by `src/pages/Pricing.jsx`

**`conversion.waitlist-form`** — Bordered signup form (email, how-did-you-hear select, message) with client-only regex/required validation and a static success/error message swap — no network submission. Right-hand column of the same section as hero.waitlist-intro.

· Present only on /waitlist (1 route). · appears on 1 routes · implemented by `src/components/product/WaitlistIntro.jsx (WaitlistForm)`

### TRUST

_Security/compliance badges, certifications, trust-center links._

**`trust.security-badges`** — Row of 2-line icon+label certification badges (ISO 27001, GDPR, field-level permissions, EU data residency / encryption / EU-US residency depending on page), divided by hairlines.

· Present on the homepage, /pricing, and /security — 3 route occurrences. · appears on 3 routes · implemented by `src/components/Security.jsx (home) + src/components/product/Sections.jsx (Badges/BadgeRow, pricing/security)`

**`trust.integrations-grid`** — 3-column feature grid demonstrating platform reach: Slack agent mock, MCP prompt-card mock, and a masked icon grid of real third-party integration logos (Slack, Google Workspace, Microsoft 365, Notion, Greenhouse, Xero, DocuSign, Okta, Gusto, Fortnox, Deel, QuickBooks, etc.).

· Present only on the homepage (1 route). · appears on 1 routes · implemented by `src/components/Integrations.jsx`

### CONTENT

_Long-form or listing content: blog posts/index, compliance guides, legal docs, tool descriptions._

**`content.mcp-gallery-grid`** — Full gallery grid of all 8 MCP use-case cards on the index page, reusing the same UseCaseGrid component as content.related-grid's 3-item variant on detail pages but at full population.

· Present only on /mcp-use-cases (1 route). · appears on 1 routes · implemented by `src/pages/McpIndex.jsx (UseCaseGrid), src/components/mcp-tools/shared.jsx (UseCaseGrid)`

**`content.faq`** — Accordion FAQ list: click toggles height+opacity+icon-rotate (0.25s/0.2s, ease [.23,1,.32,1]); multiple entries can be open at once. Question count and presence of an eyebrow vary per route.

· Present on the homepage, all 3 persona pages, 5 of 8 mcp-detail routes worth of pages (actually all 8, per HowItWorks+Faq pairing), 6 of 8 product-hero-family pages (agents/performance/pricing/security/waitlist; time-off/people-directory/documents have none), all 11 compliance-country routes, and optionally inside individual blog posts — the single most reused content block in the site. · appears on 175 routes · implemented by `src/components/Faq.jsx (home) + src/components/persona-company/Sections.jsx (PcFaq) + src/pages/McpIndex.jsx & McpUseCase.jsx (FaqSection) + src/components/compliance-legal/shared.jsx (FaqItem) + src/components/blog/Article.jsx (FaqItem, in-post variant)`

**`content.related-grid`** — Bordered 3-up (or fewer) grid of link cards pointing to sibling content: 'Built to work together / Keep exploring' on product pages, related-use-case grid (3 items) on mcp-detail, resources grid on compliance-country. Three separate implementations share this shape, not one component.

· Present on all 5 product-hero routes, all 8 mcp-detail routes, and all 11 compliance-country routes — 24 route occurrences. · appears on 24 routes · implemented by `src/components/product/Sections.jsx (Related) + src/components/mcp-tools/shared.jsx (UseCaseGrid, 3-item variant) + src/pages/ComplianceCountry.jsx (inline Block/SectionTitle grid)`

**`content.prose-guide`** — Long-form prose body rendered from a compact tuple-array block schema (`['h2', ...]`, `['p', segs]`, `['table', ...]`, etc.) with a real, statute-cited employment-compliance guide as content. Distinct from content.blog-body's object-based block schema — the two are not shared/unified in this codebase.

· Present on all 11 compliance-country routes and all 3 legal routes (privacy/terms/dpa) — 14 route occurrences, one shared Prose renderer. · appears on 16 routes · implemented by `src/components/compliance-legal/Prose.jsx`

**`content.blog-index-cards`** — Grid of post-preview cards (cover image, category pill, title, description, author/date) with pagination-by-batch (18 per page equivalent via CARDS_PER_PAGE) rather than numbered pages.

· Present on the English /blog index and all 5 localized /:lang/blog indexes, and again (filtered to one category) on the 4 /blog/:category pages — 10 route occurrences. · appears on 10 routes · implemented by `src/components/blog/Listing.jsx, src/components/blog/BlogCard.jsx`

**`content.blog-product-timeline`** — Horizontal timeline of the 4 most recent 'product' category posts, inserted after the first batch of cards on the English blog index only (not on category pages or localized indexes, which have too few posts to warrant it).

· Present only on the English /blog index (1 route occurrence, out of 6 blog-index route occurrences). · appears on 6 routes · implemented by `src/pages/BlogIndex.jsx`

**`content.blog-archive-list`** — Plain row-list (no card chrome) of any posts left over after the card grid + timeline budget is spent, so every post remains reachable without true pagination.

· Present on the English /blog index and all 4 /blog/:category pages (5 route occurrences) — not on localized indexes, which show every post as cards with no overflow. · appears on 10 routes · implemented by `src/components/blog/Listing.jsx (ArchiveList)`

**`content.blog-post-body`** — Article body: breadcrumb+H1+description+author/date/copy-link header, 16:9 cover image, prose body, optional in-post FAQ, 'Keep reading' band. Real metadata (title/description/category/date/author/tags) per post, but every post's body text is a deterministic lorem-ipsum generation (seeded by slug) per this repo's explicit study-clone convention, not scraped real copy.

· Present on all 143 blog-post routes (111 English + 32 localized). · appears on 143 routes · implemented by `src/pages/BlogPost.jsx, src/components/blog/Article.jsx, src/components/blog/lorem.js (buildLoremBody)`

**`content.legal-doc`** — Single narrow centered prose column (no header/hero/CTA) rendering one of privacy/terms/dpa via the same tuple-array Prose schema as compliance guides.

· Present on all 3 legal routes (privacy, terms, dpa). · appears on 3 routes · implemented by `src/pages/Legal.jsx`

**`content.not-found`** — Fallback 404 page shown for any unmatched path.

· Present only on the wildcard route (1 route). · appears on 1 routes · implemented by `src/pages/NotFound.jsx`

### UTILITY

_Functional, non-marketing UI: statutory calculators, calendars, FAQ accordions._

**`utility.calculator`** — Genuine, statute-accurate employment-law calculator: a single generic component renders any of the 5 calculators from a data-driven field/aside schema and dispatches to a pure calc function (holidayPay/ssp/feriepenger/semesterdagar/vuosiloma), each citing the specific statute section behind every computed row. Not a decorative mock — real formulas including UK WTR reference-period logic, Norway's 6G cap, Sweden's sammalöneregeln/procentregeln split, and Finland's 2.0-vs-2.5-day accrual test.

· Present on all 5 tools-detail routes. · appears on 5 routes · implemented by `src/components/mcp-tools/Calculator.jsx, src/components/mcp-tools/calcs.js`

**`utility.compliance-calendar`** — Month-grouped list of statutory deadline events (date chip, title, tag pills, description, citation + external primary-source link), with a client-generated .ics download button and month-jump navigation. Only 4 of the 6 compliance countries have a calendar (Estonia and Netherlands do not — a real content gap, not a routing bug).

· Present on 4 of the 6 possible compliance-calendar routes (norway, uk, finland, sweden); netherlands and estonia calendars do not exist in the content data. · appears on 4 routes · implemented by `src/pages/ComplianceCalendar.jsx`

### NAVIGATION

_In-page wayfinding: table of contents, category pills, related-content grids, pagination._

**`navigation.guide-toc`** — Sticky in-page table of contents (desktop cols 1-3) alongside the compliance guide's prose body (cols 5-12).

· Present on all 11 compliance-country routes. · appears on 11 routes · implemented by `src/components/compliance-legal/GuideToc.jsx`

**`navigation.blog-category-nav`** — Pill-style category filter row (guides/case-studies/news/product) plus an RSS link on the main index; active-pill state only, no RSS, on category pages.

· Present on the English /blog index and all 4 /blog/:category pages (5 route occurrences); not on localized indexes. · appears on 10 routes · implemented by `src/components/blog/Listing.jsx (CategoryNav)`
