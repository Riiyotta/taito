// Blog post metadata scraped from https://taito.ai (sitemap-0.xml, 2026-09-23).
// Listing order = order on the live /blog and /:lang/blog index pages (date desc).
// Fields: slug, lang ('en' | et | fi | nl | no | sv), title, description (meta description),
// category (guides | case-studies | news | product), date (YYYY-MM-DD), author (key of blogAuthors),
// readingTime (minutes, estimated from the live word count; not displayed by the original),
// cover (local path), coverAlt, coverWidth/coverHeight, tags, related (slugs from the live
// "Keep reading" block), faqCount (# of FAQ items the live post shows), profileCard
// (case-study profile callout), translations ({ hreflang: path }).
// Optional `body`: an array of blocks (see src/components/blog/ArticleBody.jsx). When absent,
// BlogPost renders a lorem-ipsum placeholder body that exercises the full article template.

export const blogAuthors = {
  "miikka-kataja": {
    "name": "Miikka Kataja",
    "href": "/company#miikka-kataja",
    "avatar": "/assets/pages/blog/authors/miikka-kataja.webp"
  },
  "mikko-kivela": {
    "name": "Mikko Kivelä",
    "href": "/company#mikko-kivela",
    "avatar": "/assets/pages/blog/authors/mikko-kivela.webp"
  },
  "team": {
    "name": "Taito.ai Team",
    "href": "/company#team",
    "avatar": "/assets/svg/brand/taito-mark-chat-avatar.svg"
  },
  "kristo-ovaska": {
    "name": "Kristo Ovaska",
    "href": "/company#kristo-ovaska",
    "avatar": "/assets/pages/blog/authors/kristo-ovaska.webp"
  },
  "reeta-kari": {
    "name": "Reeta Kari",
    "href": "/company#reeta-kari",
    "avatar": "/assets/pages/blog/authors/reeta-kari.webp"
  }
};

export const blogPosts = [
  {
    "slug": "zero-case-study",
    "lang": "en",
    "title": "How Zero's Chief of Staff built people ops ahead of a $10M seed round using Taito.ai",
    "description": "How Zero's Chief of Staff built people operations from the ground up with Taito.ai, ahead of a funding round and fast headcount growth, so his time goes to growing the business and leading people, not managing HR paperwork.",
    "category": "case-studies",
    "date": "2026-09-15",
    "author": "team",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/zero-case-study.webp",
    "coverAlt": "How Zero's Chief of Staff built people ops ahead of a $10M seed round using Taito.ai",
    "coverWidth": 1200,
    "coverHeight": 675,
    "tags": [
      "case study",
      "people ops",
      "startups",
      "Finland",
      "Slack integration",
      "time off",
      "onboarding"
    ],
    "related": [
      "huuva-case-study",
      "founders-guide-people-ops",
      "best-hris-for-startups"
    ],
    "faqCount": 4,
    "profileCard": true
  },
  {
    "slug": "huuva-case-study",
    "lang": "en",
    "title": "How Huuva's solo HR turned a hundred-click job into one prompt using Taito.ai",
    "description": "How Huuva's solo HR left an underused HiBob setup for Taito.ai — Nordic time-off calculation that finally works, and a hundred-click data job turned into a single prompt.",
    "category": "case-studies",
    "date": "2026-08-18",
    "author": "team",
    "readingTime": 6,
    "cover": "/assets/pages/blog/covers/huuva-case-study.webp",
    "coverAlt": "How Huuva's solo HR turned a hundred-click job into one prompt using Taito.ai",
    "coverWidth": 1200,
    "coverHeight": 675,
    "tags": [
      "case study",
      "HiBob alternative",
      "Nordic time-off",
      "Finland",
      "people ops",
      "Slack integration",
      "performance reviews"
    ],
    "related": [
      "finland-employee-time-off-attendance-policy",
      "founders-guide-people-ops",
      "hibob-alternatives"
    ],
    "faqCount": 4,
    "profileCard": true
  },
  {
    "slug": "annual-leave-and-holiday-pay-in-the-netherlands",
    "lang": "en",
    "title": "How many annual leave days and how much holiday pay must you pay in 2026?",
    "description": "Dutch law requires at least 20 annual leave days for full-time staff and an 8% holiday pay supplement. This guide breaks down the formula, expiry deadlines, and parental leave rules for 2026.",
    "category": "guides",
    "date": "2026-08-17",
    "author": "miikka-kataja",
    "readingTime": 18,
    "cover": "/assets/pages/blog/covers/annual-leave-and-holiday-pay-in-the-netherlands.webp",
    "coverAlt": "How many annual leave days and how much holiday pay must you pay in 2026?",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "annual leave",
      "holiday pay",
      "parental leave",
      "dutch employment law"
    ],
    "related": [
      "sick-pay-in-the-netherlands",
      "working-time-in-the-netherlands",
      "employment-contracts-in-the-netherlands"
    ],
    "faqCount": 6,
    "translations": {
      "nl": "/nl/blog/vakantiedagen-en-vakantiegeld"
    }
  },
  {
    "slug": "background-checks-and-candidate-privacy-in-finland",
    "lang": "en",
    "title": "Background checks and candidate privacy in Finland: what employers should know",
    "description": "Finnish law limits you to data that is directly necessary for the employment relationship — and consent does not widen that. What you may check, what you may not, and who pays.",
    "category": "guides",
    "date": "2026-08-17",
    "author": "mikko-kivela",
    "readingTime": 10,
    "cover": "/assets/pages/blog/covers/background-checks-and-candidate-privacy-in-finland.webp",
    "coverAlt": "Background checks and candidate privacy in Finland: what employers should know",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "employment-contracts"
    ],
    "related": [
      "worker-classification-in-finland",
      "terminating-employment-in-finland"
    ],
    "faqCount": 4,
    "translations": {
      "fi": "/fi/blog/taustatarkistukset-ja-yksityisyyden-suoja"
    }
  },
  {
    "slug": "dismissal-in-the-netherlands",
    "lang": "en",
    "title": "Dismissal in the Netherlands: the complete employer's guide",
    "description": "Nine reasonable grounds, two routes, and a transition payment of up to €102,000 in 2026 — what the Netherlands' closed dismissal law requires of you as an employer.",
    "category": "guides",
    "date": "2026-08-17",
    "author": "miikka-kataja",
    "readingTime": 19,
    "cover": "/assets/pages/blog/covers/dismissal-in-the-netherlands.webp",
    "coverAlt": "Dismissal in the Netherlands: the complete employer's guide",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "dismissal",
      "transition payment",
      "notice periods",
      "dutch employment law"
    ],
    "related": [
      "sick-pay-in-the-netherlands",
      "employment-contracts-in-the-netherlands",
      "working-time-in-the-netherlands"
    ],
    "faqCount": 5,
    "translations": {
      "nl": "/nl/blog/ontslag-werkgeversgids"
    }
  },
  {
    "slug": "employment-contracts-in-the-netherlands",
    "lang": "en",
    "title": "Employment contracts in the Netherlands: when does a fixed-term contract become permanent?",
    "description": "Three fixed-term contracts in 36 months become a permanent contract automatically (7:668a BW): what that means for probationary periods, the duty to give notice of continuation, and the €14.99 minimum wage.",
    "category": "guides",
    "date": "2026-08-17",
    "author": "miikka-kataja",
    "readingTime": 16,
    "cover": "/assets/pages/blog/covers/employment-contracts-in-the-netherlands.webp",
    "coverAlt": "Employment contracts in the Netherlands: when does a fixed-term contract become permanent?",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "employment contracts",
      "fixed-term contracts",
      "probationary period",
      "dutch employment law"
    ],
    "related": [
      "dismissal-in-the-netherlands",
      "sick-pay-in-the-netherlands",
      "working-time-in-the-netherlands"
    ],
    "faqCount": 5,
    "translations": {
      "nl": "/nl/blog/arbeidsovereenkomst-en-ketenregeling"
    }
  },
  {
    "slug": "custom-agents",
    "lang": "en",
    "title": "Introducing custom agents",
    "description": "Describe the people ops workflow you need and Taito.ai builds you an agent that runs it end to end: onboarding, engagement, pre-payroll, compliance.",
    "category": "product",
    "date": "2026-09-02",
    "author": "mikko-kivela",
    "readingTime": 3,
    "cover": "/assets/pages/blog/covers/custom-agents.webp",
    "coverAlt": "Introducing custom agents",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "product",
      "agents",
      "custom-agents",
      "people-ops-automation",
      "onboarding"
    ],
    "related": [
      "how-to-automate-employee-onboarding",
      "what-is-hr-automation",
      "early-access-people-ops"
    ]
  },
  {
    "slug": "payroll-integrations-xero-fortnox-netvisor",
    "lang": "en",
    "title": "Payroll sync for Xero, Fortnox, and Netvisor",
    "description": "Payroll data now syncs from Taito.ai to Xero, Fortnox, and Netvisor: employees, compensation, time off, and attendance, without the monthly re-entry.",
    "category": "product",
    "date": "2026-08-19",
    "author": "mikko-kivela",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/payroll-integrations-xero-fortnox-netvisor.webp",
    "coverAlt": "Payroll sync for Xero, Fortnox, and Netvisor",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "product",
      "integrations",
      "payroll",
      "xero",
      "fortnox",
      "netvisor",
      "pre-payroll"
    ],
    "related": [
      "custom-agents",
      "early-access-people-ops",
      "hris-mcp-support-2026"
    ],
    "faqCount": 3
  },
  {
    "slug": "ats-integrations-ashby-teamtailor",
    "lang": "en",
    "title": "ATS integrations: Ashby and Teamtailor",
    "description": "Mark a candidate hired in Ashby or Teamtailor and they become an employee in Taito.ai, with your onboarding agent already running before day one.",
    "category": "product",
    "date": "2026-07-29",
    "author": "mikko-kivela",
    "readingTime": 3,
    "cover": "/assets/pages/blog/covers/ats-integrations-ashby-teamtailor.webp",
    "coverAlt": "ATS integrations: Ashby and Teamtailor",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "product",
      "integrations",
      "ats",
      "ashby",
      "teamtailor",
      "onboarding",
      "agents"
    ],
    "related": [
      "how-to-automate-employee-onboarding",
      "custom-agents",
      "payroll-integrations-xero-fortnox-netvisor"
    ]
  },
  {
    "slug": "taito-ai-mcp-server",
    "lang": "en",
    "title": "Taito.ai MCP is now generally available",
    "description": "Connect Taito.ai to Claude, ChatGPT, or any MCP client and read and manage people data in plain language, scoped to exactly what you can already see.",
    "category": "product",
    "date": "2026-07-08",
    "author": "mikko-kivela",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/taito-ai-mcp-server.webp",
    "coverAlt": "Taito.ai MCP is now generally available",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "product",
      "mcp",
      "model-context-protocol",
      "integrations",
      "permissions",
      "agents"
    ],
    "related": [
      "hris-mcp-support-2026",
      "how-to-use-claude-hr-database",
      "custom-agents"
    ]
  },
  {
    "slug": "sick-pay-in-the-netherlands",
    "lang": "en",
    "title": "Sick pay in the Netherlands: how much you owe, and for how long",
    "description": "Dutch law requires 70% continued pay during sick leave for up to 104 weeks, with a minimum-wage floor in year one. Here is how the gatekeeper regime and its wage sanction work.",
    "category": "guides",
    "date": "2026-08-17",
    "author": "reeta-kari",
    "readingTime": 18,
    "cover": "/assets/pages/blog/covers/sick-pay-in-the-netherlands.webp",
    "coverAlt": "Sick pay in the Netherlands: how much you owe, and for how long",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "sick pay",
      "sick leave",
      "reintegration",
      "dutch employment law"
    ],
    "related": [
      "dismissal-in-the-netherlands",
      "employment-contracts-in-the-netherlands",
      "annual-leave-and-holiday-pay-in-the-netherlands"
    ],
    "faqCount": 6,
    "translations": {
      "nl": "/nl/blog/loondoorbetaling-bij-ziekte"
    }
  },
  {
    "slug": "working-time-in-the-netherlands",
    "lang": "en",
    "title": "The Working Hours Act in the Netherlands: shift limits, breaks and on-call contracts",
    "description": "A 12-hour cap per shift, a 55-hour four-week average, and a record-keeping duty you must retain for 52 weeks. What the Working Hours Act actually requires of employers.",
    "category": "guides",
    "date": "2026-08-17",
    "author": "reeta-kari",
    "readingTime": 20,
    "cover": "/assets/pages/blog/covers/working-time-in-the-netherlands.webp",
    "coverAlt": "The Working Hours Act in the Netherlands: shift limits, breaks and on-call contracts",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "attendance",
      "working hours",
      "rest breaks",
      "dutch employment law"
    ],
    "related": [
      "annual-leave-and-holiday-pay-in-the-netherlands",
      "employment-contracts-in-the-netherlands",
      "sick-pay-in-the-netherlands"
    ],
    "faqCount": 6,
    "translations": {
      "nl": "/nl/blog/arbeidstijdenwet-werkgeversgids"
    }
  },
  {
    "slug": "annual-leave-in-estonia",
    "lang": "en",
    "title": "How many days of annual leave are employees entitled to in Estonia?",
    "description": "Annual leave base entitlement and extended entitlements, holiday pay calculation and payment deadline, expiry, and the leave schedule deadline — employer guide with Employment Contracts Act citations.",
    "category": "guides",
    "date": "2026-08-14",
    "author": "miikka-kataja",
    "readingTime": 14,
    "cover": "/assets/pages/blog/covers/annual-leave-in-estonia.webp",
    "coverAlt": "How many days of annual leave are employees entitled to in Estonia?",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "annual leave",
      "holiday pay",
      "leave schedule",
      "Employment Contracts Act",
      "compliance"
    ],
    "related": [
      "sick-pay-in-estonia",
      "working-time-rules-in-estonia",
      "employment-contracts-in-estonia"
    ],
    "faqCount": 5,
    "translations": {
      "et": "/et/blog/pohipuhkus-tooandja-juhend"
    }
  },
  {
    "slug": "employment-contracts-in-estonia",
    "lang": "en",
    "title": "Employment contracts in Estonia: an employer's guide to terms, probation and minimum wage",
    "description": "The mandatory terms of an Estonian employment contract, the probation period, fixed-term limits, how it differs from an authorisation agreement or a contract for services, the minimum wage, and the employment register deadline — with citations to Riigi Teataja.",
    "category": "guides",
    "date": "2026-08-14",
    "author": "miikka-kataja",
    "readingTime": 19,
    "cover": "/assets/pages/blog/covers/employment-contracts-in-estonia.webp",
    "coverAlt": "Employment contracts in Estonia: an employer's guide to terms, probation and minimum wage",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "estonia",
      "employment-contracts",
      "probation-period",
      "employment-register",
      "minimum-wage"
    ],
    "related": [
      "terminating-employment-in-estonia",
      "working-time-rules-in-estonia",
      "annual-leave-in-estonia"
    ],
    "faqCount": 6,
    "translations": {
      "et": "/et/blog/tooleping-tooandja-juhend"
    }
  },
  {
    "slug": "sick-pay-in-estonia",
    "lang": "en",
    "title": "Sick pay in Estonia: how many days and how much you pay",
    "description": "Days 1–3 are unpaid, you pay 70% of average wage for days 4–8, and the state takes over from day 9. Deadlines, the care leave certificate, and the 2026 benefit cap, in one guide.",
    "category": "guides",
    "date": "2026-08-14",
    "author": "miikka-kataja",
    "readingTime": 14,
    "cover": "/assets/pages/blog/covers/sick-pay-in-estonia.webp",
    "coverAlt": "Sick pay in Estonia: how many days and how much you pay",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "sick pay",
      "sickness benefit",
      "payroll",
      "estonia"
    ],
    "related": [
      "annual-leave-in-estonia",
      "working-time-rules-in-estonia",
      "terminating-employment-in-estonia"
    ],
    "faqCount": 6,
    "translations": {
      "et": "/et/blog/haigushuvitis-tooandja-juhend"
    }
  },
  {
    "slug": "terminating-employment-in-estonia",
    "lang": "en",
    "title": "Terminating employment in Estonia: a guide for employers",
    "description": "Notice periods, redundancy compensation, collective redundancy thresholds and dispute risk — every claim linked directly to the Employment Contracts Act and the Unemployment Insurance Act.",
    "category": "guides",
    "date": "2026-08-14",
    "author": "miikka-kataja",
    "readingTime": 18,
    "cover": "/assets/pages/blog/covers/terminating-employment-in-estonia.webp",
    "coverAlt": "Terminating employment in Estonia: a guide for employers",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "estonia",
      "terminations",
      "redundancy",
      "dismissal"
    ],
    "related": [
      "employment-contracts-in-estonia",
      "annual-leave-in-estonia",
      "sick-pay-in-estonia"
    ],
    "faqCount": 5,
    "translations": {
      "et": "/et/blog/toolepingu-ulesutlemine-juhend"
    }
  },
  {
    "slug": "working-time-rules-in-estonia",
    "lang": "en",
    "title": "Working time and overtime: an employer's guide to Estonia",
    "description": "40 hours a week, 8 hours a day — and one brand-new agreement that took effect in early 2026 that most guides still don't cover. Working time, overtime, rest, and attendance record retention in one place.",
    "category": "guides",
    "date": "2026-08-14",
    "author": "miikka-kataja",
    "readingTime": 17,
    "cover": "/assets/pages/blog/covers/working-time-rules-in-estonia.webp",
    "coverAlt": "Working time and overtime: an employer's guide to Estonia",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "estonia",
      "working-time",
      "overtime"
    ],
    "related": [
      "annual-leave-in-estonia",
      "sick-pay-in-estonia",
      "employment-contracts-in-estonia"
    ],
    "faqCount": 6,
    "translations": {
      "et": "/et/blog/tooaeg-ja-uletunnitoo-juhend"
    }
  },
  {
    "slug": "the-true-cost-of-an-employee-in-finland",
    "lang": "en",
    "title": "The true cost of an employee in Finland: a guide to employer contributions",
    "description": "Statutory employer contributions add about 19.3% on top of salary, plus accident and group life insurance that only your insurer can quote. Every rate, with its source.",
    "category": "guides",
    "date": "2026-08-13",
    "author": "mikko-kivela",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/the-true-cost-of-an-employee-in-finland.webp",
    "coverAlt": "The true cost of an employee in Finland: a guide to employer contributions",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "employment-contracts"
    ],
    "related": [
      "worker-classification-in-finland",
      "terminating-employment-in-finland"
    ],
    "faqCount": 4,
    "translations": {
      "fi": "/fi/blog/tyontekijan-kokonaiskustannus"
    }
  },
  {
    "slug": "collective-agreements-in-norway",
    "lang": "en",
    "title": "Collective agreements in Norway: coverage and mandatory extension",
    "description": "Membership or your own signature binds you. But mandatory extension of a collective agreement can bind an undertaking that joined nothing. And Norway has a statutory minimum wage in exactly ten sectors, and in none of the others.",
    "category": "guides",
    "date": "2026-08-11",
    "author": "miikka-kataja",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/collective-agreements-in-norway.webp",
    "coverAlt": "Collective agreements in Norway: coverage and mandatory extension",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "norway",
      "collective-agreements",
      "tariffavtale"
    ],
    "related": [
      "working-time-rules-in-norway",
      "collective-agreements-in-sweden"
    ],
    "faqCount": 4,
    "translations": {
      "no": "/no/blog/tariffavtale-og-allmenngjoring"
    }
  },
  {
    "slug": "non-compete-agreements-in-finland",
    "lang": "en",
    "title": "Non-compete agreements in Finland: what employers should know",
    "description": "A non-compete now costs 40–60% of salary for the restriction period. Here is when you can require one, what it costs, and how to get out of it in time.",
    "category": "guides",
    "date": "2026-08-10",
    "author": "mikko-kivela",
    "readingTime": 10,
    "cover": "/assets/pages/blog/covers/non-compete-agreements-in-finland.webp",
    "coverAlt": "Non-compete agreements in Finland: what employers should know",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "employment-contracts"
    ],
    "related": [
      "terminating-employment-in-finland"
    ],
    "faqCount": 4,
    "translations": {
      "fi": "/fi/blog/kilpailukieltosopimukset-tyonantajan-opas"
    }
  },
  {
    "slug": "the-day-one-written-statement",
    "lang": "en",
    "title": "The day-one written statement: what UK employers owe every worker",
    "description": "Not the employment contract, and not limited to employees. A single document, on or before the first day, for every worker, with only four particulars allowed to follow later.",
    "category": "guides",
    "date": "2026-08-07",
    "author": "mikko-kivela",
    "readingTime": 10,
    "cover": "/assets/pages/blog/covers/the-day-one-written-statement.webp",
    "coverAlt": "The day-one written statement: what UK employers owe every worker",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "uk",
      "employment-contracts",
      "onboarding"
    ],
    "related": [
      "statutory-sick-pay-in-the-uk",
      "calculating-holiday-pay-in-the-uk"
    ],
    "faqCount": 4
  },
  {
    "slug": "sick-leave-during-annual-leave-in-sweden",
    "lang": "en",
    "title": "Sick leave during annual leave in Sweden: what employers should know",
    "description": "An employee who falls ill on holiday can swap those days back from the first sick day, provided they ask without delay. The swap changes the pay, the balance and how the rest of the leave is scheduled. Doing only the first of those quietly costs them the days.",
    "category": "guides",
    "date": "2026-08-06",
    "author": "miikka-kataja",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/sick-leave-during-annual-leave-in-sweden.webp",
    "coverAlt": "Sick leave during annual leave in Sweden: what employers should know",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "sweden",
      "annual-leave",
      "sick-pay"
    ],
    "related": [
      "annual-leave-and-holiday-pay-in-sweden",
      "sick-pay-in-sweden"
    ],
    "faqCount": 4,
    "translations": {
      "sv": "/sv/blog/sjukdom-under-semestern-arbetsgivarens-guide"
    }
  },
  {
    "slug": "working-time-rules-in-norway",
    "lang": "en",
    "title": "Working time rules in Norway: a guide for employers",
    "description": "Nine hours and forty, three sets of overtime limits depending on what you have agreed, and one absolute ceiling no agreement can lift. Plus why a fixed salary does not exempt anyone from the hours record.",
    "category": "guides",
    "date": "2026-08-04",
    "author": "miikka-kataja",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/working-time-rules-in-norway.webp",
    "coverAlt": "Working time rules in Norway: a guide for employers",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "norway",
      "working-time",
      "arbeidsmiljoloven"
    ],
    "related": [
      "collective-agreements-in-norway",
      "norway-employee-time-off-attendance-policy"
    ],
    "faqCount": 4,
    "translations": {
      "no": "/no/blog/arbeidstid-og-overtid-arbeidsgiverguide"
    }
  },
  {
    "slug": "parental-leave-in-finland",
    "lang": "en",
    "title": "Parental leave in Finland: a guide for employers",
    "description": "320 parental allowance days per child, 160 per parent, and up to 63 transferable. What you must hold open, when leave starts, and how much of it accrues annual leave.",
    "category": "guides",
    "date": "2026-08-03",
    "author": "mikko-kivela",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/parental-leave-in-finland.webp",
    "coverAlt": "Parental leave in Finland: a guide for employers",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "employment-contracts"
    ],
    "related": [
      "finland-employee-time-off-attendance-policy",
      "terminating-employment-in-finland"
    ],
    "faqCount": 4,
    "translations": {
      "fi": "/fi/blog/perhevapaat-tyonantajan-opas"
    }
  },
  {
    "slug": "the-48-hour-week-and-the-opt-out",
    "lang": "en",
    "title": "The 48-hour week: what an opt-out actually disapplies",
    "description": "A signed opt-out removes one average and nothing else. Daily rest, weekly rest, rest breaks and the night-work limit all survive it. Only a collective or workforce agreement can reach those.",
    "category": "guides",
    "date": "2026-07-31",
    "author": "mikko-kivela",
    "readingTime": 10,
    "cover": "/assets/pages/blog/covers/the-48-hour-week-and-the-opt-out.webp",
    "coverAlt": "The 48-hour week: what an opt-out actually disapplies",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "uk",
      "working-time",
      "opt-out"
    ],
    "related": [
      "calculating-holiday-pay-in-the-uk",
      "the-day-one-written-statement"
    ],
    "faqCount": 4
  },
  {
    "slug": "sick-pay-in-sweden",
    "lang": "en",
    "title": "Sick pay in Sweden: what employers pay for the first 14 days",
    "description": "Eighty percent of employment benefits for fourteen calendar days, less a sick pay deduction that is not an unpaid day and has not been one since 2019. Plus the two deadlines that decide when your employee gets paid by Försäkringskassan.",
    "category": "guides",
    "date": "2026-07-30",
    "author": "miikka-kataja",
    "readingTime": 11,
    "cover": "/assets/pages/blog/covers/sick-pay-in-sweden.webp",
    "coverAlt": "Sick pay in Sweden: what employers pay for the first 14 days",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "sweden",
      "sick-pay",
      "karensavdrag"
    ],
    "related": [
      "sick-leave-during-annual-leave-in-sweden",
      "sweden-employee-time-off-attendance-policy"
    ],
    "faqCount": 4,
    "translations": {
      "sv": "/sv/blog/sjuklon-de-forsta-14-dagarna"
    }
  },
  {
    "slug": "sick-pay-in-norway",
    "lang": "en",
    "title": "Sick pay in Norway: the employer-paid period explained",
    "description": "Sixteen calendar days, not working days, and a new absence within sixteen days of the last one continues the same period rather than starting a fresh one. Plus what the labour and welfare administration publishes about the income-report deadline, which is nothing.",
    "category": "guides",
    "date": "2026-07-27",
    "author": "miikka-kataja",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/sick-pay-in-norway.webp",
    "coverAlt": "Sick pay in Norway: the employer-paid period explained",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "norway",
      "sick-pay",
      "arbeidsgiverperioden"
    ],
    "related": [
      "annual-leave-in-norway",
      "norway-employee-time-off-attendance-policy"
    ],
    "faqCount": 4,
    "translations": {
      "no": "/no/blog/arbeidsgiverperioden-16-dager"
    }
  },
  {
    "slug": "terminating-employment-in-finland",
    "lang": "en",
    "title": "Terminating employment in Finland: a guide for employers",
    "description": "Personal and production-related grounds, the warning you must give first, statutory notice periods, and the re-employment obligation that follows a redundancy.",
    "category": "guides",
    "date": "2026-07-27",
    "author": "mikko-kivela",
    "readingTime": 13,
    "cover": "/assets/pages/blog/covers/terminating-employment-in-finland.webp",
    "coverAlt": "Terminating employment in Finland: a guide for employers",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "terminations"
    ],
    "related": [
      "finland-employee-time-off-attendance-policy"
    ],
    "faqCount": 4,
    "translations": {
      "fi": "/fi/blog/irtisanominen-tyonantajan-opas"
    }
  },
  {
    "slug": "annual-leave-and-holiday-pay-in-sweden",
    "lang": "en",
    "title": "Annual leave and holiday pay in Sweden: a guide for employers",
    "description": "Twenty-five leave days is the easy part. Which of them are paid comes out of a formula with a denominator most spreadsheets get wrong, and which holiday-pay model applies is not always the employer's choice.",
    "category": "guides",
    "date": "2026-07-23",
    "author": "miikka-kataja",
    "readingTime": 11,
    "cover": "/assets/pages/blog/covers/annual-leave-and-holiday-pay-in-sweden.webp",
    "coverAlt": "Annual leave and holiday pay in Sweden: a guide for employers",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "sweden",
      "annual-leave",
      "semesterlagen"
    ],
    "related": [
      "sweden-employee-time-off-attendance-policy",
      "sick-leave-during-annual-leave-in-sweden"
    ],
    "faqCount": 4,
    "translations": {
      "sv": "/sv/blog/semester-och-semesterlon-arbetsgivarens-guide"
    }
  },
  {
    "slug": "calculating-holiday-pay-in-the-uk",
    "lang": "en",
    "title": "Holiday pay for irregular-hours and part-year workers: a guide for employers",
    "description": "These workers are not on 5.6 weeks at all. They accrue 12.07% of hours worked per pay period under reg 15B. And 104 weeks is a conditional bound, not the reference window everyone treats it as.",
    "category": "guides",
    "date": "2026-07-21",
    "author": "mikko-kivela",
    "readingTime": 12,
    "cover": "/assets/pages/blog/covers/calculating-holiday-pay-in-the-uk.webp",
    "coverAlt": "Holiday pay for irregular-hours and part-year workers: a guide for employers",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "uk",
      "annual-leave",
      "holiday-pay"
    ],
    "related": [
      "statutory-sick-pay-in-the-uk",
      "the-day-one-written-statement"
    ],
    "faqCount": 4
  },
  {
    "slug": "worker-classification-in-finland",
    "lang": "en",
    "title": "Worker classification in Finland: a guide for employers",
    "description": "Four criteria decide whether someone is your employee, and you cannot agree your way out of them. What the test is, why light entrepreneurship is the hard case, and what a misclassification costs.",
    "category": "guides",
    "date": "2026-07-20",
    "author": "mikko-kivela",
    "readingTime": 8,
    "cover": "/assets/pages/blog/covers/worker-classification-in-finland.webp",
    "coverAlt": "Worker classification in Finland: a guide for employers",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "employment-contracts"
    ],
    "related": [
      "terminating-employment-in-finland",
      "non-compete-agreements-in-finland"
    ],
    "faqCount": 4,
    "translations": {
      "fi": "/fi/blog/tyosuhde-vai-toimeksianto"
    }
  },
  {
    "slug": "holiday-pay-in-norway",
    "lang": "en",
    "title": "Holiday pay in Norway: 10.2, 12, 12.5 or 14.3 per cent?",
    "description": "Two of those four rates are statutory and two come from agreement. And the 6G cap bites only on the over-60 supplement, never on the base rate. It is the single most expensive miscalculation in Norwegian payroll.",
    "category": "guides",
    "date": "2026-07-17",
    "author": "miikka-kataja",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/holiday-pay-in-norway.webp",
    "coverAlt": "Holiday pay in Norway: 10.2, 12, 12.5 or 14.3 per cent?",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "norway",
      "annual-leave",
      "feriepenger"
    ],
    "related": [
      "annual-leave-in-norway",
      "norway-employee-time-off-attendance-policy"
    ],
    "faqCount": 4,
    "translations": {
      "no": "/no/blog/feriepenger-satser-og-6g-regelen"
    }
  },
  {
    "slug": "sick-pay-in-finland",
    "lang": "en",
    "title": "Sick pay in Finland: what employers must pay, and for how long",
    "description": "The day of illness plus nine weekdays, at full or half pay depending on tenure. Why Saturday consumes one of them, and why your collective agreement probably makes the period longer.",
    "category": "guides",
    "date": "2026-07-16",
    "author": "mikko-kivela",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/sick-pay-in-finland.webp",
    "coverAlt": "Sick pay in Finland: what employers must pay, and for how long",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "sick-pay"
    ],
    "related": [
      "finland-employee-time-off-attendance-policy",
      "parental-leave-in-finland"
    ],
    "faqCount": 4,
    "translations": {
      "fi": "/fi/blog/sairausajan-palkka-montako-paivaa"
    }
  },
  {
    "slug": "collective-agreements-in-sweden",
    "lang": "en",
    "title": "Collective agreements in Sweden: what actually binds an employer",
    "description": "No Swedish employer is obliged to sign one, and no agreement becomes binding just because it is standard in the sector. What binds you is membership or your own signature. A single-employer accession agreement is the second of those.",
    "category": "guides",
    "date": "2026-07-13",
    "author": "miikka-kataja",
    "readingTime": 10,
    "cover": "/assets/pages/blog/covers/collective-agreements-in-sweden.webp",
    "coverAlt": "Collective agreements in Sweden: what actually binds an employer",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "sweden",
      "collective-agreements"
    ],
    "related": [
      "sweden-employee-time-off-attendance-policy",
      "generally-binding-collective-agreements-in-finland"
    ],
    "faqCount": 4,
    "translations": {
      "sv": "/sv/blog/kollektivavtal-vad-binder-arbetsgivaren"
    }
  },
  {
    "slug": "how-to-automate-employee-onboarding",
    "lang": "en",
    "title": "How to automate employee onboarding (without a 6-week IT project)",
    "description": "Automate employee onboarding without a 6-week IT project: contracts, Slack comms, account provisioning, and first-week feedback from one HRIS trigger.",
    "category": "guides",
    "date": "2026-07-13",
    "author": "miikka-kataja",
    "readingTime": 6,
    "cover": "/assets/pages/blog/covers/how-to-automate-employee-onboarding.webp",
    "coverAlt": "How to automate employee onboarding (without a 6-week IT project)",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "employee onboarding automation",
      "onboarding workflow",
      "new hire automation",
      "hris onboarding",
      "slack onboarding",
      "contract generation",
      "onboarding checklist",
      "employee experience",
      "startup onboarding",
      "people ops",
      "buddy program",
      "first week feedback"
    ],
    "related": [
      "what-is-hr-automation",
      "founders-guide-people-ops",
      "employee-records-legally-required"
    ],
    "faqCount": 5
  },
  {
    "slug": "what-is-hr-automation",
    "lang": "en",
    "title": "What is HR automation? A practical guide for startups and growing companies",
    "description": "HR automation explained: what to automate at a startup, what to keep human, and how AI people agents differ from rule-based workflows.",
    "category": "guides",
    "date": "2026-07-13",
    "author": "miikka-kataja",
    "readingTime": 6,
    "cover": "/assets/pages/blog/covers/what-is-hr-automation.webp",
    "coverAlt": "What is HR automation? A practical guide for startups and growing companies",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "hr automation",
      "people ops automation",
      "ai people agents",
      "hris",
      "leave automation",
      "onboarding automation",
      "payroll reporting",
      "compliance automation",
      "startup hr",
      "people lead",
      "workflow automation",
      "employee data"
    ],
    "related": [
      "how-to-automate-employee-onboarding",
      "should-you-build-or-buy-hr-tools-startup",
      "how-to-use-claude-hr-database"
    ],
    "faqCount": 5
  },
  {
    "slug": "statutory-sick-pay-in-the-uk",
    "lang": "en",
    "title": "Statutory sick pay in the UK: a guide for employers",
    "description": "No waiting days, no lower earnings limit, and a weekly rate that is the lower of £123.25 and 80% of normal weekly earnings. Plus the three transitional regimes for absences that straddle the reform, which no calculator should be guessing at.",
    "category": "guides",
    "date": "2026-07-09",
    "author": "mikko-kivela",
    "readingTime": 11,
    "cover": "/assets/pages/blog/covers/statutory-sick-pay-in-the-uk.webp",
    "coverAlt": "Statutory sick pay in the UK: a guide for employers",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "uk",
      "sick-pay",
      "ssp"
    ],
    "related": [
      "calculating-holiday-pay-in-the-uk",
      "the-day-one-written-statement"
    ],
    "faqCount": 4
  },
  {
    "slug": "working-time-rules-in-finland",
    "lang": "en",
    "title": "Working time rules in Finland: a guide for employers",
    "description": "Eight hours a day, 40 a week, 48 including overtime averaged over four months, and consent for overtime every single time. The rules, the records, and where the old overtime cap went.",
    "category": "guides",
    "date": "2026-07-09",
    "author": "mikko-kivela",
    "readingTime": 14,
    "cover": "/assets/pages/blog/covers/working-time-rules-in-finland.webp",
    "coverAlt": "Working time rules in Finland: a guide for employers",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "working-time"
    ],
    "related": [
      "finland-employee-time-off-attendance-policy",
      "generally-binding-collective-agreements-in-finland"
    ],
    "faqCount": 4,
    "translations": {
      "fi": "/fi/blog/tyoaika-ja-ylityo-tyonantajan-opas"
    }
  },
  {
    "slug": "annual-leave-in-norway",
    "lang": "en",
    "title": "Annual leave in Norway: a guide for employers",
    "description": "Twenty-five working days is the statutory figure, and Norway counts Saturday as a working day (virkedag). So it is four weeks and one day, not five weeks. Plus the over-60 entitlement, the main holiday period and the two separate 12-day quotas most employers merge into one.",
    "category": "guides",
    "date": "2026-07-06",
    "author": "miikka-kataja",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/annual-leave-in-norway.webp",
    "coverAlt": "Annual leave in Norway: a guide for employers",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "norway",
      "annual-leave",
      "ferieloven"
    ],
    "related": [
      "holiday-pay-in-norway",
      "norway-employee-time-off-attendance-policy"
    ],
    "faqCount": 4,
    "translations": {
      "no": "/no/blog/ferie-og-virkedager-arbeidsgiverguide"
    }
  },
  {
    "slug": "docusign-alternatives-hr-esign",
    "lang": "en",
    "title": "DocuSign alternatives for HR: which tools have eSign built in?",
    "description": "Compare DocuSign, Adobe Sign, Dropbox Sign, PandaDoc, and Juro for HR — which eSign tool actually files contracts to the employee record.",
    "category": "guides",
    "date": "2026-07-06",
    "author": "miikka-kataja",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/docusign-alternatives-hr-esign.webp",
    "coverAlt": "DocuSign alternatives for HR: which tools have eSign built in?",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "docusign alternatives",
      "hr esign",
      "eidas compliance",
      "employment contracts",
      "hris esign",
      "adobe acrobat sign",
      "dropbox sign",
      "pandadoc",
      "juro",
      "bamboohr",
      "hibob",
      "personio"
    ],
    "related": [
      "what-should-be-in-an-employment-contract",
      "employee-records-legally-required",
      "founders-guide-people-ops"
    ],
    "faqCount": 5
  },
  {
    "slug": "generally-binding-collective-agreements-in-finland",
    "lang": "en",
    "title": "Generally binding collective agreements in Finland: a guide for employers",
    "description": "A yleissitova agreement binds you even though you never signed it, and a term below its floor is void rather than merely challengeable. How to find out which one applies, and what the back-pay risk is.",
    "category": "guides",
    "date": "2026-07-06",
    "author": "mikko-kivela",
    "readingTime": 15,
    "cover": "/assets/pages/blog/covers/generally-binding-collective-agreements-in-finland.webp",
    "coverAlt": "Generally binding collective agreements in Finland: a guide for employers",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "collective-agreements"
    ],
    "related": [
      "worker-classification-in-finland",
      "the-true-cost-of-an-employee-in-finland"
    ],
    "faqCount": 4,
    "translations": {
      "fi": "/fi/blog/yleissitova-tyoehtosopimus-tyonantajan-opas"
    }
  },
  {
    "slug": "what-should-be-in-an-employment-contract",
    "lang": "en",
    "title": "What should be in an employment contract? A guide for EU and Nordic startups",
    "description": "What should be in an employment contract? EU Directive 2019/1152 requirements plus Finland, Sweden, Germany specifics for startups.",
    "category": "guides",
    "date": "2026-07-06",
    "author": "miikka-kataja",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/what-should-be-in-an-employment-contract.webp",
    "coverAlt": "What should be in an employment contract? A guide for EU and Nordic startups",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "employment contract",
      "eu employment law",
      "eu directive 2019/1152",
      "nordic startups",
      "finland employment contract",
      "sweden employment contract",
      "germany employment contract",
      "nachweisgesetz",
      "collective agreement",
      "probation period",
      "ip assignment",
      "non-compete"
    ],
    "related": [
      "docusign-alternatives-hr-esign",
      "employee-records-legally-required"
    ],
    "faqCount": 6
  },
  {
    "slug": "employment-contract-requirements-in-finland",
    "lang": "en",
    "title": "Employment contract requirements in Finland: a guide for employers",
    "description": "The contract itself has no mandatory content: the written statement of key terms does. Sixteen items on two deadlines, plus probation, fixed terms and variable hours.",
    "category": "guides",
    "date": "2026-07-02",
    "author": "mikko-kivela",
    "readingTime": 13,
    "cover": "/assets/pages/blog/covers/employment-contract-requirements-in-finland.webp",
    "coverAlt": "Employment contract requirements in Finland: a guide for employers",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "employment-contracts"
    ],
    "related": [
      "generally-binding-collective-agreements-in-finland",
      "worker-classification-in-finland"
    ],
    "faqCount": 4,
    "translations": {
      "fi": "/fi/blog/tyosopimuksen-sisalto-tyonantajan-opas"
    }
  },
  {
    "slug": "best-hr-apps-for-slack",
    "lang": "en",
    "title": "Best HR apps for Slack in 2026: leave requests, approvals, and people ops compared",
    "description": "Most HR tools with Slack integration only send notifications. This guide compares the tools that let employees actually do HR from Slack — leave requests, approvals, policy questions, and more.",
    "category": "guides",
    "date": "2026-06-29",
    "author": "miikka-kataja",
    "readingTime": 8,
    "cover": "/assets/pages/blog/covers/best-hr-apps-for-slack.webp",
    "coverAlt": "Best HR apps for Slack in 2026: leave requests, approvals, and people ops compared",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "hr apps for slack",
      "slack hr integration",
      "hr bot for slack",
      "slack-native hris",
      "leave requests slack",
      "people ops",
      "hris comparison",
      "leavebot",
      "calamari",
      "bamboohr",
      "hibob",
      "personio"
    ],
    "related": [
      "what-are-the-best-slack-apps-for-performance-reviews",
      "best-hris-for-startups",
      "should-you-build-or-buy-hr-tools-startup"
    ],
    "faqCount": 5
  },
  {
    "slug": "ai-agents-performance-reviews",
    "lang": "en",
    "title": "How to use AI agents for performance reviews",
    "description": "AI agents do more than summarize reviews — they orchestrate the full cycle. Learn how agentic performance reviews differ from AI features, what data sources agents pull from, and what managers still decide.",
    "category": "guides",
    "date": "2026-06-18",
    "author": "miikka-kataja",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/ai-agents-performance-reviews.webp",
    "coverAlt": "How to use AI agents for performance reviews",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "ai agents",
      "performance reviews",
      "agentic ai",
      "mcp",
      "performance management",
      "ai in hr",
      "ai native hr"
    ],
    "related": [
      "how-to-use-ai-in-performance-reviews",
      "how-can-ai-help-you-build-continuous-feedback-loops-in-your-organization",
      "top-performance-management-software-for-smes"
    ],
    "faqCount": 5
  },
  {
    "slug": "how-to-write-a-performance-review",
    "lang": "en",
    "title": "How do you write a good performance review?",
    "description": "Most managers write reviews from memory and wonder why they land flat. This guide covers what to include, how to gather evidence, and the five-step structure that makes reviews actually useful.",
    "category": "guides",
    "date": "2026-06-18",
    "author": "miikka-kataja",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/how-to-write-a-performance-review.webp",
    "coverAlt": "How do you write a good performance review?",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "performance reviews",
      "performance management",
      "manager feedback",
      "recency bias",
      "continuous feedback",
      "people leaders"
    ],
    "related": [
      "how-to-run-a-lightweight-performance-review-for-a-startup-free-template",
      "how-to-use-ai-in-performance-reviews",
      "how-continuous-feedback-creates-high-performance-culture"
    ],
    "faqCount": 5
  },
  {
    "slug": "hris-mcp-support-2026",
    "lang": "en",
    "title": "Which HRIS systems have MCP support in 2026? Every major tool, compared",
    "description": "Most HRIS vendors claim AI support in 2026 — but only two have a live native MCP server. Here's which tools actually let Claude access your HR data, and which rely on wrappers.",
    "category": "guides",
    "date": "2026-06-15",
    "author": "miikka-kataja",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/hris-mcp-support-2026.webp",
    "coverAlt": "Which HRIS systems have MCP support in 2026? Every major tool, compared",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "mcp",
      "hris",
      "ai in hr",
      "ai native hr",
      "hris comparison",
      "hibob",
      "bamboohr",
      "personio",
      "model context protocol"
    ],
    "related": [
      "how-to-use-claude-hr-database",
      "how-to-use-claude-for-hr",
      "best-hris-for-startups"
    ],
    "faqCount": 5
  },
  {
    "slug": "how-to-use-claude-for-hr",
    "lang": "en",
    "title": "How to use Claude for HR?",
    "description": "Claude can draft HR documents, analyse survey data, answer policy questions, and query your HRIS in plain language. Here's what actually works, what to set up, and where to be careful.",
    "category": "guides",
    "date": "2026-06-12",
    "author": "miikka-kataja",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/how-to-use-claude-for-hr.webp",
    "coverAlt": "How to use Claude for HR?",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "claude",
      "claude cowork",
      "ai in hr",
      "hris",
      "mcp",
      "ai automation",
      "ai native hr"
    ],
    "related": [
      "how-to-use-claude-hr-database",
      "how-to-use-chatgpt-for-hr",
      "ai-in-hr-use-cases-tools-2025"
    ],
    "faqCount": 5
  },
  {
    "slug": "employee-records-legally-required",
    "lang": "en",
    "title": "What employee records are employers legally required to keep?",
    "description": "EU employers must keep specific records on work time, payroll, leave, and contracts, often for 5–10 years. Here's what the law actually requires, and what most spreadsheet setups miss.",
    "category": "guides",
    "date": "2026-06-08",
    "author": "miikka-kataja",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/employee-records-legally-required.webp",
    "coverAlt": "What employee records are employers legally required to keep?",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "employee records",
      "hr compliance",
      "gdpr",
      "eu working time directive",
      "payroll records",
      "record retention",
      "dsar"
    ],
    "related": [
      "gdpr-employee-data-collect-store-delete",
      "how-to-use-claude-hr-database",
      "hr-in-google-sheets-templates"
    ],
    "faqCount": 5
  },
  {
    "slug": "gdpr-employee-data-collect-store-delete",
    "lang": "en",
    "title": "GDPR and employee data: what can employers actually collect, store, and delete?",
    "description": "GDPR applies to employee data just as it does to customer data. Here's what you can legally store, what requires extra justification, and when you're required to delete.",
    "category": "guides",
    "date": "2026-06-08",
    "author": "miikka-kataja",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/gdpr-employee-data-collect-store-delete.webp",
    "coverAlt": "GDPR and employee data: what can employers actually collect, store, and delete?",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "gdpr",
      "employee data",
      "hr compliance",
      "eu employment law",
      "data protection",
      "dsar",
      "privacy"
    ],
    "related": [
      "employee-records-legally-required",
      "how-to-use-claude-hr-database",
      "best-hris-for-startups"
    ],
    "faqCount": 5
  },
  {
    "slug": "how-to-use-claude-hr-database",
    "lang": "en",
    "title": "How to use Claude to manage your HR database in 2026",
    "description": "With an MCP-connected HRIS, you can query employee data, onboard new hires, and run payroll reports in plain language — without opening the HR system. Here's how it works and how to set it up.",
    "category": "guides",
    "date": "2026-06-08",
    "author": "miikka-kataja",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/how-to-use-claude-hr-database.webp",
    "coverAlt": "How to use Claude to manage your HR database in 2026",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "claude",
      "mcp",
      "ai in hr",
      "hris",
      "ai automation",
      "model context protocol",
      "ai native hr"
    ],
    "related": [
      "gdpr-employee-data-collect-store-delete",
      "employee-records-legally-required",
      "ai-in-hr-use-cases-tools-2025"
    ],
    "faqCount": 5
  },
  {
    "slug": "sweden-employee-time-off-attendance-policy",
    "lang": "en",
    "title": "Employee time off and attendance policy in Sweden: a guide for employers",
    "description": "Swedish employees are entitled to 25 paid vacation days plus a vacation pay supplement on top of normal salary. This guide covers the Semesterlagen, sick leave, work hour tracking, collective agreements, and the most common employer mistakes in Sweden.",
    "category": "guides",
    "date": "2026-05-29",
    "author": "miikka-kataja",
    "readingTime": 16,
    "cover": "/assets/pages/blog/covers/sweden-employee-time-off-attendance-policy.webp",
    "coverAlt": "Employee time off and attendance policy in Sweden: a guide for employers",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "sweden employment law",
      "annual leave sweden",
      "employee time off sweden",
      "semesterlagen",
      "semestertillägg",
      "hr compliance sweden",
      "sick leave sweden",
      "working time sweden",
      "startup hr sweden"
    ],
    "related": [
      "annual-leave-and-holiday-pay-in-sweden",
      "sick-pay-in-sweden",
      "collective-agreements-in-sweden"
    ],
    "faqCount": 6,
    "translations": {
      "sv": "/sv/blog/semester-och-franvaro-uppfoljning"
    }
  },
  {
    "slug": "founders-guide-people-ops",
    "lang": "en",
    "title": "The startup founder's guide to people ops: what to put in place at each stage of growth",
    "description": "How people operations evolves at each stage of startup growth, from 1–15 to 75–150 people. What to build, automate, and hire for so the basics stay invisible and your team stays focused on product and customers.",
    "category": "guides",
    "date": "2026-05-27",
    "author": "miikka-kataja",
    "readingTime": 12,
    "cover": "/assets/pages/blog/covers/founders-guide-people-ops.webp",
    "coverAlt": "The startup founder's guide to people ops: what to put in place at each stage of growth",
    "coverWidth": 1200,
    "coverHeight": 640,
    "tags": [
      "people-ops",
      "startup",
      "founders",
      "hris",
      "scaling",
      "startup HR",
      "HR for startups",
      "people operations for startups",
      "startup people operations"
    ],
    "related": [
      "should-you-build-or-buy-hr-tools-startup",
      "best-hris-for-startups",
      "performance-management-startup-growth-guide"
    ],
    "faqCount": 5
  },
  {
    "slug": "finland-employee-time-off-attendance-policy",
    "lang": "en",
    "title": "Employee time off and attendance policy in Finland: a guide for employers",
    "description": "Finland's annual leave law requires employers to track leave by tenure tier, apply the Saturday rule, and enforce a mandatory summer holiday window. This guide covers statutory entitlements, sick leave, work hour tracking, and the most common employer mistakes.",
    "category": "guides",
    "date": "2026-05-26",
    "author": "miikka-kataja",
    "readingTime": 17,
    "cover": "/assets/pages/blog/covers/finland-employee-time-off-attendance-policy.webp",
    "coverAlt": "Employee time off and attendance policy in Finland: a guide for employers",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "finland employment law",
      "annual leave finland",
      "employee time off finland",
      "vuosilomalaki",
      "lauantaisääntö",
      "hr compliance finland",
      "sick leave finland",
      "working time finland",
      "startup hr finland"
    ],
    "related": [
      "sweden-employee-time-off-attendance-policy",
      "norway-employee-time-off-attendance-policy",
      "denmark-employee-time-off-attendance-policy"
    ],
    "faqCount": 6,
    "translations": {
      "fi": "/fi/blog/vuosilomien-seuranta-tyonantajalle"
    }
  },
  {
    "slug": "early-access-people-ops",
    "lang": "en",
    "title": "Early-access: Taito.ai people operations system",
    "description": "A full people operations system for growing teams: people directory, time off, attendance, documents, performance, and AI workflows. Set up in under 30 minutes, runs from Slack and MCP.",
    "category": "news",
    "date": "2026-05-18",
    "author": "team",
    "readingTime": 3,
    "cover": "/assets/pages/blog/covers/early-access-people-ops.webp",
    "coverAlt": "Early-access: Taito.ai people operations system",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "early-access",
      "launch",
      "people-ops",
      "product"
    ]
  },
  {
    "slug": "denmark-employee-time-off-attendance-policy",
    "lang": "en",
    "title": "Employee time off and attendance policy in Denmark: a guide for employers",
    "description": "Denmark's 2020 holiday reform changed how annual leave is earned and taken. Employees now accrue and use leave simultaneously, and most employers provide 30 days in practice through feriefridage. This guide covers the Ferieloven, sick leave, the 2024 work hour tracking rules, and the most common employer mistakes.",
    "category": "guides",
    "date": "2026-05-13",
    "author": "miikka-kataja",
    "readingTime": 10,
    "cover": "/assets/pages/blog/covers/denmark-employee-time-off-attendance-policy.webp",
    "coverAlt": "Employee time off and attendance policy in Denmark: a guide for employers",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "denmark employment law",
      "annual leave denmark",
      "employee time off denmark",
      "ferieloven",
      "feriefridage",
      "hr compliance denmark",
      "sick leave denmark",
      "working time denmark",
      "startup hr denmark"
    ],
    "related": [
      "finland-employee-time-off-attendance-policy",
      "sweden-employee-time-off-attendance-policy",
      "norway-employee-time-off-attendance-policy"
    ],
    "faqCount": 6
  },
  {
    "slug": "norway-employee-time-off-attendance-policy",
    "lang": "en",
    "title": "Employee time off and attendance policy in Norway: a guide for employers",
    "description": "Norwegian employees accrue holiday pay throughout the year at a percentage of earnings, paid as a lump sum in June, not as salary during vacation. This guide covers the Ferieloven, sick leave, work hour tracking, the 60+ age rule, and the most common employer mistakes in Norway.",
    "category": "guides",
    "date": "2026-05-06",
    "author": "miikka-kataja",
    "readingTime": 16,
    "cover": "/assets/pages/blog/covers/norway-employee-time-off-attendance-policy.webp",
    "coverAlt": "Employee time off and attendance policy in Norway: a guide for employers",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "norway employment law",
      "annual leave norway",
      "employee time off norway",
      "ferieloven",
      "feriepenger",
      "hr compliance norway",
      "sick leave norway",
      "working time norway",
      "startup hr norway"
    ],
    "related": [
      "holiday-pay-in-norway",
      "annual-leave-in-norway",
      "sick-pay-in-norway"
    ],
    "faqCount": 6,
    "translations": {
      "no": "/no/blog/ferie-og-fravaer-oppfolging"
    }
  },
  {
    "slug": "hibob-alternatives",
    "lang": "en",
    "title": "What are the top 10 HiBob alternatives in 2026?",
    "description": "HiBob's performance module is widely flagged as its weakest point. This guide compares the 10 best alternatives for growing teams on pricing, self-serve setup, EU compliance, and AI features.",
    "category": "guides",
    "date": "2026-04-30",
    "author": "miikka-kataja",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/hibob-alternatives.webp",
    "coverAlt": "What are the top 10 HiBob alternatives in 2026?",
    "coverWidth": 1536,
    "coverHeight": 864,
    "tags": [
      "hris",
      "comparison",
      "hibob",
      "alternatives"
    ]
  },
  {
    "slug": "personio-alternatives",
    "lang": "en",
    "title": "What are the top 10 Personio alternatives in 2026?",
    "description": "Looking to move on from Personio? Compare the 10 best HRIS alternatives for growing teams on pricing, self-serve setup, AI features, performance management, and geographic fit.",
    "category": "guides",
    "date": "2026-04-24",
    "author": "miikka-kataja",
    "readingTime": 16,
    "cover": "/assets/pages/blog/covers/personio-alternatives.webp",
    "coverAlt": "What are the top 10 Personio alternatives in 2026?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "hris",
      "comparison",
      "personio",
      "alternatives"
    ]
  },
  {
    "slug": "bamboohr-alternatives",
    "lang": "en",
    "title": "What are the top 10 BambooHR alternatives in 2026?",
    "description": "Companies outgrow BambooHR on reporting, performance, and pricing. Here are the 10 best alternatives for growing teams, compared on features, pricing, and AI capabilities.",
    "category": "guides",
    "date": "2026-04-21",
    "author": "miikka-kataja",
    "readingTime": 16,
    "cover": "/assets/pages/blog/covers/bamboohr-alternatives.webp",
    "coverAlt": "What are the top 10 BambooHR alternatives in 2026?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "hris",
      "comparison",
      "bamboohr",
      "alternatives"
    ]
  },
  {
    "slug": "hr-in-google-sheets-templates",
    "lang": "en",
    "title": "How to manage HR in Google Sheets: free templates for employee data, time off, and onboarding",
    "description": "A practical guide to setting up a working HR system in Google Sheets for teams under 30-40 people, with three free templates for employee records, leave tracking, and onboarding.",
    "category": "guides",
    "date": "2026-04-17",
    "author": "miikka-kataja",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/hr-in-google-sheets-templates.webp",
    "coverAlt": "How to manage HR in Google Sheets: free templates for employee data, time off, and onboarding",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "hr-tools",
      "templates",
      "google-sheets",
      "startup"
    ]
  },
  {
    "slug": "best-hris-for-startups",
    "lang": "en",
    "title": "Best HRIS for startups in 2026: Top 7 tools for 10–75 person teams",
    "description": "At the 10-75 person stage, most startups manage HR through spreadsheets. This guide reviews seven HRIS platforms on setup speed, Slack integration, performance management, and transparent pricing.",
    "category": "guides",
    "date": "2026-04-10",
    "author": "miikka-kataja",
    "readingTime": 6,
    "cover": "/assets/pages/blog/covers/best-hris-for-startups.webp",
    "coverAlt": "Best HRIS for startups in 2026: Top 7 tools for 10–75 person teams",
    "coverWidth": 1920,
    "coverHeight": 1088,
    "tags": [
      "hris",
      "startup",
      "comparison",
      "tools"
    ]
  },
  {
    "slug": "should-you-build-or-buy-hr-tools-startup",
    "lang": "en",
    "title": "Should you build or buy HR tools for your startup?",
    "description": "AI-native founders often default to building HR tools, but the real cost is maintenance, not development. A practical cost comparison for startups with 10-75 employees.",
    "category": "guides",
    "date": "2026-04-06",
    "author": "miikka-kataja",
    "readingTime": 6,
    "cover": "/assets/pages/blog/covers/should-you-build-or-buy-hr-tools-startup.webp",
    "coverAlt": "Should you build or buy HR tools for your startup?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "startup",
      "hr-tools",
      "build-vs-buy"
    ]
  },
  {
    "slug": "what-are-the-top-9-ai-tools-for-hr-teams-in-2026",
    "lang": "en",
    "title": "What are the top 9 AI tools for HR teams in 2026?",
    "description": "A comprehensive guide evaluating nine modern HR tools designed for European AI and SaaS companies with 50–250 employees, focusing on talent acquisition, performance management, and employee engagement.",
    "category": "guides",
    "date": "2026-03-20",
    "author": "miikka-kataja",
    "readingTime": 2,
    "cover": "/assets/pages/blog/covers/what-are-the-top-9-ai-tools-for-hr-teams-in-2026.webp",
    "coverAlt": "What are the top 9 AI tools for HR teams in 2026?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "ai",
      "hr-tools",
      "comparison",
      "startup"
    ]
  },
  {
    "slug": "how-juro-and-faculty-rebuild-performance-in-the-age-of-ai",
    "lang": "en",
    "title": "Your performance cycle is taking 26 weeks a year. Here's what two people leaders did instead.",
    "description": "Faculty's performance process consumed 26 weeks a year. Juro burned theirs down and rebuilt. Here's what both learned about AI, manager coaching, and continuous feedback.",
    "category": "case-studies",
    "date": "2026-03-13",
    "author": "miikka-kataja",
    "readingTime": 8,
    "cover": "/assets/pages/blog/covers/how-juro-and-faculty-rebuild-performance-in-the-age-of-ai.webp",
    "coverAlt": "Your performance cycle is taking 26 weeks a year. Here's what two people leaders did instead.",
    "coverWidth": 1200,
    "coverHeight": 627,
    "tags": [
      "performance",
      "case-study",
      "ai",
      "continuous-feedback"
    ]
  },
  {
    "slug": "how-lovable-and-tandem-health-run-performance-at-ai-company-speed",
    "lang": "en",
    "title": "You can't run quarterly planning cycles at AI company speed. Here's what Lovable and Tandem do instead.",
    "description": "Lovable uses quarterly signal reviews and micro retros. Tandem runs six-week cycles. How two AI-native teams rebuilt performance management to match their operating speed.",
    "category": "case-studies",
    "date": "2026-03-06",
    "author": "miikka-kataja",
    "readingTime": 8,
    "cover": "/assets/pages/blog/covers/how-lovable-and-tandem-health-run-performance-at-ai-company-speed.webp",
    "coverAlt": "You can't run quarterly planning cycles at AI company speed. Here's what Lovable and Tandem do instead.",
    "coverWidth": 1200,
    "coverHeight": 627,
    "tags": [
      "performance",
      "case-study",
      "ai",
      "lovable",
      "tandem-health"
    ]
  },
  {
    "slug": "how-iso-27001-can-actually-make-your-performance-reviews-better-not-just-more-compliance",
    "lang": "en",
    "title": "How ISO 27001 can actually make your performance reviews better (not just more compliance)",
    "description": "ISO 27001 compliance and performance management share the same infrastructure needs. This guide shows People Leaders how to build one system that serves both.",
    "category": "guides",
    "date": "2026-02-23",
    "author": "miikka-kataja",
    "readingTime": 8,
    "cover": "/assets/pages/blog/covers/how-iso-27001-can-actually-make-your-performance-reviews-better-not-just-more-compliance.webp",
    "coverAlt": "How ISO 27001 can actually make your performance reviews better (not just more compliance)",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "iso-27001",
      "compliance",
      "performance",
      "guide"
    ]
  },
  {
    "slug": "how-can-i-use-ai-to-improve-employee-performance-and-engagement",
    "lang": "en",
    "title": "How can I use AI to improve employee performance and engagement?",
    "description": "AI can meaningfully improve employee performance, but only if it's used to enable managers to do better work. Start with manager enablement as your design principle.",
    "category": "guides",
    "date": "2026-02-19",
    "author": "miikka-kataja",
    "readingTime": 8,
    "cover": "/assets/pages/blog/covers/how-can-i-use-ai-to-improve-employee-performance-and-engagement.webp",
    "coverAlt": "How can I use AI to improve employee performance and engagement?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "ai",
      "performance",
      "engagement",
      "manager-enablement"
    ]
  },
  {
    "slug": "how-to-run-a-lightweight-performance-review-for-a-startup-free-template",
    "lang": "en",
    "title": "How to run a lightweight performance review for a startup (+Free Template)",
    "description": "A practical guide to implementing performance reviews in startups that emphasize regular feedback and clear expectations over complex scoring systems.",
    "category": "guides",
    "date": "2026-02-13",
    "author": "mikko-kivela",
    "readingTime": 1,
    "cover": "/assets/pages/blog/covers/how-to-run-a-lightweight-performance-review-for-a-startup-free-template.webp",
    "coverAlt": "How to run a lightweight performance review for a startup (+Free Template)",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "performance",
      "startup",
      "templates",
      "guide"
    ]
  },
  {
    "slug": "how-to-create-a-job-leveling-framework-for-an-sme-free-template",
    "lang": "en",
    "title": "How to create a job leveling framework for a small & medium sized company (+Free Template)",
    "description": "Once organizations expand beyond 50 employees, job leveling becomes essential infrastructure. This guide addresses building scalable leveling systems with five seniority levels, parallel career tracks, and performance-based evaluation.",
    "category": "guides",
    "date": "2026-02-11",
    "author": "mikko-kivela",
    "readingTime": 1,
    "cover": "/assets/pages/blog/covers/how-to-create-a-job-leveling-framework-for-an-sme-free-template.webp",
    "coverAlt": "How to create a job leveling framework for a small & medium sized company (+Free Template)",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "leveling",
      "framework",
      "templates",
      "sme"
    ]
  },
  {
    "slug": "how-to-run-a-lightweight-probation-review-for-a-startup-free-template",
    "lang": "en",
    "title": "How to run a lightweight probation review for a startup (+ free template)",
    "description": "Learn how to run probation reviews that are fair, clear, and human. Includes free templates and real startup examples.",
    "category": "guides",
    "date": "2026-02-10",
    "author": "miikka-kataja",
    "readingTime": 5,
    "cover": "/assets/pages/blog/covers/how-to-run-a-lightweight-probation-review-for-a-startup-free-template.webp",
    "coverAlt": "How to run a lightweight probation review for a startup (+ free template)",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "probation",
      "startup",
      "templates",
      "onboarding"
    ]
  },
  {
    "slug": "how-to-create-a-job-leveling-framework-for-a-startup-free-template",
    "lang": "en",
    "title": "How to create a job leveling framework for a startup (+Free Template)",
    "description": "Practical steps for startups to build clear job leveling frameworks without adding unnecessary HR complexity. Includes a free downloadable template.",
    "category": "guides",
    "date": "2026-02-06",
    "author": "mikko-kivela",
    "readingTime": 1,
    "cover": "/assets/pages/blog/covers/how-to-create-a-job-leveling-framework-for-a-startup-free-template.webp",
    "coverAlt": "How to create a job leveling framework for a startup (+Free Template)",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "leveling",
      "framework",
      "templates",
      "startup"
    ]
  },
  {
    "slug": "how-lovable-and-ura-scale-performance-in-the-ai-era",
    "lang": "en",
    "title": "How Lovable and ŌURA scale performance in the AI era",
    "description": "A Slush 2025 side event discussion featuring engineering and marketing leaders from Lovable and ŌURA on how teams achieve high performance in AI-native environments.",
    "category": "case-studies",
    "date": "2026-01-27",
    "author": "miikka-kataja",
    "readingTime": 2,
    "cover": "/assets/pages/blog/covers/how-lovable-and-ura-scale-performance-in-the-ai-era.webp",
    "coverAlt": "How Lovable and ŌURA scale performance in the AI era",
    "coverWidth": 4800,
    "coverHeight": 2508,
    "tags": [
      "performance",
      "case-study",
      "ai",
      "lovable",
      "oura"
    ]
  },
  {
    "slug": "how-does-the-eu-pay-transparency-directive-affect-performance-management-and-performance-reviews",
    "lang": "en",
    "title": "How does the EU Pay Transparency Directive affect performance management and performance reviews?",
    "description": "The EU Pay Transparency Directive regulates pay transparency, not performance reviews. This article explains when performance becomes legally relevant and how to design systems safely.",
    "category": "guides",
    "date": "2026-01-23",
    "author": "miikka-kataja",
    "readingTime": 5,
    "cover": "/assets/pages/blog/covers/how-does-the-eu-pay-transparency-directive-affect-performance-management-and-performance-reviews.webp",
    "coverAlt": "How does the EU Pay Transparency Directive affect performance management and performance reviews?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "eu-regulation",
      "pay-transparency",
      "compliance",
      "performance"
    ]
  },
  {
    "slug": "top-performance-management-software-for-smes",
    "lang": "en",
    "title": "What are the top performance management software for small and mid-sized companies 2026?",
    "description": "A clear, structured comparison of the best performance management software for SMBs in 2026, covering pricing, features, and best-fit use cases.",
    "category": "guides",
    "date": "2026-01-21",
    "author": "miikka-kataja",
    "readingTime": 8,
    "cover": "/assets/pages/blog/covers/top-performance-management-software-for-smes.webp",
    "coverAlt": "What are the top performance management software for small and mid-sized companies 2026?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "performance management software",
      "SMB tools",
      "HR technology",
      "continuous feedback",
      "AI performance management"
    ]
  },
  {
    "slug": "top-10-best-tools-for-continuous-employee-feedback",
    "lang": "en",
    "title": "What are the top 10 best tools for continuous employee feedback 2026?",
    "description": "Compare the top 10 tools for continuous employee feedback in 2026. Features, pricing, pros, cons, and best-fit teams.",
    "category": "guides",
    "date": "2026-01-15",
    "author": "miikka-kataja",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/top-10-best-tools-for-continuous-employee-feedback.webp",
    "coverAlt": "What are the top 10 best tools for continuous employee feedback 2026?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "continuous employee feedback",
      "employee feedback tools",
      "performance enablement software",
      "AI feedback tools",
      "performance management alternatives",
      "Slack feedback tools"
    ]
  },
  {
    "slug": "what-are-the-best-slack-apps-for-performance-reviews",
    "lang": "en",
    "title": "What are the best Slack apps for performance reviews?",
    "description": "A practical comparison of the best Slack apps for performance reviews, from Slack-native tools to Slack-integrated platforms, with their pros and cons.",
    "category": "guides",
    "date": "2026-01-14",
    "author": "miikka-kataja",
    "readingTime": 6,
    "cover": "/assets/pages/blog/covers/what-are-the-best-slack-apps-for-performance-reviews.webp",
    "coverAlt": "What are the best Slack apps for performance reviews?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "Slack performance reviews",
      "performance management",
      "continuous feedback",
      "AI reviews",
      "employee engagement"
    ]
  },
  {
    "slug": "best-performance-management-solutions-20-100-employees",
    "lang": "en",
    "title": "Best Performance Management Tools for 20-100 Employees",
    "description": "A comprehensive comparison of the best performance management solutions for mid-sized organizations, covering features, pricing, and implementation timelines for tools like Lattice, Culture Amp, and Taito.ai.",
    "category": "guides",
    "date": "2026-01-01",
    "author": "team",
    "readingTime": 3,
    "cover": "/assets/pages/blog/covers/best-performance-management-solutions-20-100-employees.webp",
    "coverAlt": "Best Performance Management Tools for 20-100 Employees",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "performance management",
      "HR tools",
      "software comparison",
      "mid-sized companies",
      "employee engagement"
    ]
  },
  {
    "slug": "how-does-ai-improve-job-leveling",
    "lang": "en",
    "title": "How does AI improve job leveling?",
    "description": "Job leveling defines role expectations, skills, and progression. Learn how AI makes job leveling faster, fairer, and easier to maintain.",
    "category": "guides",
    "date": "2025-12-30",
    "author": "mikko-kivela",
    "readingTime": 6,
    "cover": "/assets/pages/blog/covers/how-does-ai-improve-job-leveling.webp",
    "coverAlt": "How does AI improve job leveling?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "job leveling",
      "AI job leveling",
      "job architecture",
      "career frameworks",
      "role levels",
      "skills-based leveling",
      "performance expectations",
      "career progression",
      "people operations",
      "HR analytics"
    ]
  },
  {
    "slug": "what-are-the-top-8-ai-native-skills-needed-in-any-organisation",
    "lang": "en",
    "title": "What are the top 8 AI native skills needed in any organisation?",
    "description": "Research-backed guide to the 8 AI-native skills that drive performance, human-AI collaboration, and wellbeing in AI-native organizations.",
    "category": "guides",
    "date": "2025-12-19",
    "author": "miikka-kataja",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/what-are-the-top-8-ai-native-skills-needed-in-any-organisation.webp",
    "coverAlt": "What are the top 8 AI native skills needed in any organisation?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "AI-native skills",
      "AI literacy",
      "human-AI collaboration",
      "problem formulation",
      "trust calibration",
      "critical evaluation of AI",
      "ethical AI use",
      "systems thinking",
      "socio-emotional skills",
      "AI leadership skills",
      "future of work AI",
      "AI skills for organizations"
    ]
  },
  {
    "slug": "what-are-the-top-14-hibob-talent-module-competitors-and-alternatives",
    "lang": "en",
    "title": "What are the top 15 HiBob talent module competitors and alternatives in 2026?",
    "description": "Compare the top HiBob Talent Module competitors in 2026. Reviews, goals, feedback, 1:1s, AI features, pricing, and best use cases.",
    "category": "guides",
    "date": "2025-12-09",
    "author": "miikka-kataja",
    "readingTime": 10,
    "cover": "/assets/pages/blog/covers/what-are-the-top-14-hibob-talent-module-competitors-and-alternatives.webp",
    "coverAlt": "What are the top 15 HiBob talent module competitors and alternatives in 2026?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "HiBob alternatives",
      "performance management",
      "talent management",
      "HR software",
      "OKR software"
    ]
  },
  {
    "slug": "how-to-build-a-high-performance-feedback-culture",
    "lang": "en",
    "title": "How to build a high-performance feedback culture",
    "description": "A practical guide to building a high-performance feedback culture with clear habits, simple rituals, and systems that make feedback continuous and safe.",
    "category": "guides",
    "date": "2025-12-03",
    "author": "kristo-ovaska",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/how-to-build-a-high-performance-feedback-culture.webp",
    "coverAlt": "How to build a high-performance feedback culture",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "feedback culture",
      "continuous feedback",
      "high performance teams",
      "performance enablement"
    ]
  },
  {
    "slug": "skills-competencies-framework-how-to-build",
    "lang": "en",
    "title": "What is a skills & competencies framework and how to build one for my team?",
    "description": "Learn what a skills framework is, why it matters, how to build one, and how AI keeps it accurate and actionable across your organisation.",
    "category": "guides",
    "date": "2025-12-02",
    "author": "mikko-kivela",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/skills-competencies-framework-how-to-build.webp",
    "coverAlt": "What is a skills & competencies framework and how to build one for my team?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "skills framework",
      "competencies",
      "leveling framework",
      "career development",
      "HR"
    ]
  },
  {
    "slug": "how-to-use-ai-in-performance-reviews",
    "lang": "en",
    "title": "How to use AI in performance reviews?",
    "description": "Learn how AI improves performance reviews by reducing bias, improving consistency, and helping managers focus on better development conversations.",
    "category": "guides",
    "date": "2025-11-26",
    "author": "mikko-kivela",
    "readingTime": 5,
    "cover": "/assets/pages/blog/covers/how-to-use-ai-in-performance-reviews.webp",
    "coverAlt": "How to use AI in performance reviews?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "AI",
      "performance reviews",
      "HR technology",
      "bias reduction",
      "performance management"
    ]
  },
  {
    "slug": "how-to-structure-effective-1-on-1-meetings",
    "lang": "en",
    "title": "How to structure effective 1-on-1 meetings",
    "description": "Learn how to structure effective 1:1 meetings with expectations, feedback, and coaching—and how AI improves preparation and follow-through.",
    "category": "guides",
    "date": "2025-11-25",
    "author": "kristo-ovaska",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/how-to-structure-effective-1-on-1-meetings.webp",
    "coverAlt": "How to structure effective 1-on-1 meetings",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "1:1 meetings",
      "one-on-one meetings",
      "manager coaching",
      "performance enablement",
      "continuous feedback"
    ]
  },
  {
    "slug": "how-continuous-feedback-creates-high-performance-culture",
    "lang": "en",
    "title": "How does continuous feedback help create a high-performance culture?",
    "description": "An in-depth guide explaining how continuous feedback shapes high-performance cultures, supported by research, practical steps, and AI-powered workflows.",
    "category": "guides",
    "date": "2025-11-19",
    "author": "kristo-ovaska",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/how-continuous-feedback-creates-high-performance-culture.webp",
    "coverAlt": "How does continuous feedback help create a high-performance culture?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "continuous feedback",
      "high performance culture",
      "performance enablement",
      "employee engagement",
      "performance development",
      "manager feedback",
      "organizational performance",
      "feedback loops",
      "real-time feedback"
    ]
  },
  {
    "slug": "introducing-performance-intelligence",
    "lang": "en",
    "title": "Introducing Performance Intelligence",
    "description": "Taito.ai's AI agent for better goals, feedback, and coaching—built into daily work to drive performance.",
    "category": "case-studies",
    "date": "2025-11-17",
    "author": "mikko-kivela",
    "readingTime": 2,
    "cover": "/assets/pages/blog/covers/introducing-performance-intelligence.webp",
    "coverAlt": "Introducing Performance Intelligence",
    "coverWidth": 1200,
    "coverHeight": 627,
    "tags": [
      "Performance Intelligence",
      "AI-native performance management",
      "Continuous performance enablement",
      "Slack performance workflows",
      "1:1 coaching AI",
      "Feedback automation",
      "Performance Coach",
      "Continuous Performance Management"
    ]
  },
  {
    "slug": "how-can-ai-help-you-build-continuous-feedback-loops-in-your-organization",
    "lang": "en",
    "title": "How can AI help you build continuous feedback loops in your organization?",
    "description": "AI is transforming how teams give and receive feedback. This article explains how continuous feedback fuels high-performance cultures, how AI makes it more effective and fair, and what systems you need in place to make it sustainable.",
    "category": "guides",
    "date": "2025-11-11",
    "author": "kristo-ovaska",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/how-can-ai-help-you-build-continuous-feedback-loops-in-your-organization.webp",
    "coverAlt": "How can AI help you build continuous feedback loops in your organization?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "continuous feedback",
      "AI feedback tools",
      "performance enablement",
      "real-time feedback",
      "employee engagement",
      "AI in performance management",
      "high-performance culture"
    ]
  },
  {
    "slug": "what-to-have-before-leveling-framework",
    "lang": "en",
    "title": "What should I have in place for a leveling framework to be effective?",
    "description": "Before introducing a leveling framework, your company needs the right foundations in place — clear role expectations, capable managers, transparent pay structures, and consistent feedback rhythms.",
    "category": "guides",
    "date": "2025-11-11",
    "author": "kristo-ovaska",
    "readingTime": 5,
    "cover": "/assets/pages/blog/covers/what-to-have-before-leveling-framework.webp",
    "coverAlt": "What should I have in place for a leveling framework to be effective?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "leveling framework",
      "performance enablement",
      "role expectations",
      "manager capability",
      "feedback systems",
      "performance management",
      "startup HR",
      "organizational clarity"
    ]
  },
  {
    "slug": "when-to-create-leveling-framework-ai-native-company",
    "lang": "en",
    "title": "When should I create a leveling framework in a fast-growing AI-native company?",
    "description": "AI-native startups outgrow flat structures quickly. This article explains when and why to introduce a leveling framework — the signals that you're ready, how to structure it, and how AI keeps it adaptive, fair, and aligned with company growth.",
    "category": "guides",
    "date": "2025-11-11",
    "author": "miikka-kataja",
    "readingTime": 6,
    "cover": "/assets/pages/blog/covers/when-to-create-leveling-framework-ai-native-company.webp",
    "coverAlt": "When should I create a leveling framework in a fast-growing AI-native company?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "leveling framework",
      "AI-native companies",
      "performance enablement",
      "organizational structure",
      "role expectations",
      "startup scaling",
      "performance management",
      "AI in HR"
    ]
  },
  {
    "slug": "growth-discussions-performance-enablement-employee-growth",
    "lang": "en",
    "title": "What Are Growth Discussions and How They Drive Employee Performance",
    "description": "Growth discussions are structured conversations between managers and employees focused on long-term career development, connecting personal aspirations with organizational goals to build skills and drive engagement.",
    "category": "guides",
    "date": "2025-11-07",
    "author": "team",
    "readingTime": 2,
    "cover": "/assets/pages/blog/covers/growth-discussions-performance-enablement-employee-growth.webp",
    "coverAlt": "What Are Growth Discussions and How They Drive Employee Performance",
    "coverWidth": 4800,
    "coverHeight": 2508,
    "tags": [
      "growth discussions",
      "performance enablement",
      "employee development",
      "career growth",
      "manager coaching"
    ]
  },
  {
    "slug": "how-to-build-role-and-leveling-framework",
    "lang": "en",
    "title": "How to build a role and leveling framework for a growing company",
    "description": "A practical guide to designing clear roles, levels, and growth paths in your team",
    "category": "guides",
    "date": "2025-10-30",
    "author": "miikka-kataja",
    "readingTime": 6,
    "cover": "/assets/pages/blog/covers/how-to-build-role-and-leveling-framework.webp",
    "coverAlt": "How to build a role and leveling framework for a growing company",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "Role framework",
      "Job leveling",
      "Performance management",
      "Team growth",
      "HR framework",
      "Career progression"
    ]
  },
  {
    "slug": "cultureamp-competitors-and-alternatives",
    "lang": "en",
    "title": "What are the top 16 CultureAmp competitors and alternatives in 2026?",
    "description": "Explore the top CultureAmp competitors and alternatives for 2026. Compare 16 leading employee engagement and performance tools — including AI-powered platforms like Taito.ai — built for modern, data-driven teams.",
    "category": "guides",
    "date": "2025-10-17",
    "author": "miikka-kataja",
    "readingTime": 11,
    "cover": "/assets/pages/blog/covers/cultureamp-competitors-and-alternatives.webp",
    "coverAlt": "What are the top 16 CultureAmp competitors and alternatives in 2026?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "Employee Engagement Software",
      "Performance Management",
      "AI Performance Management",
      "CultureAmp Alternatives",
      "HR Tools Comparison"
    ]
  },
  {
    "slug": "setting-expectations",
    "lang": "en",
    "title": "Setting Expectations with Employees: Guide and Examples",
    "description": "Performance expectations translate organizational values, goals, and role requirements into observable behaviors, skills, and measurable impact, forming the foundation for feedback, evaluations, and employee growth.",
    "category": "guides",
    "date": "2025-10-17",
    "author": "team",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/setting-expectations.webp",
    "coverAlt": "Setting Expectations with Employees: Guide and Examples",
    "coverWidth": 4800,
    "coverHeight": 2508,
    "tags": [
      "performance expectations",
      "goal setting",
      "performance management",
      "talent development",
      "performance enablement"
    ]
  },
  {
    "slug": "how-to-use-chatgpt-for-hr",
    "lang": "en",
    "title": "How to Use ChatGPT for HR",
    "description": "Learn how to use ChatGPT for HR to automate hiring, onboarding, and feedback processes. Discover real HR prompts, use cases, and best practices to save time, reduce admin, and improve employee experience in 2025.",
    "category": "guides",
    "date": "2025-10-10",
    "author": "miikka-kataja",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/how-to-use-chatgpt-for-hr.webp",
    "coverAlt": "How to Use ChatGPT for HR",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "HR automation",
      "ChatGPT prompts for HR",
      "AI in human resources",
      "AI onboarding tools",
      "HR performance enablement"
    ]
  },
  {
    "slug": "lattice-competitors-and-alternatives",
    "lang": "en",
    "title": "What are the top 17 Lattice competitors and alternatives in 2026?",
    "description": "Discover the best alternatives to Lattice performance management in 2026. Compare 17 top performance management tools, including AI-driven platforms like Taito.ai, built for modern teams seeking automation, continuous feedback, and growth.",
    "category": "guides",
    "date": "2025-10-07",
    "author": "miikka-kataja",
    "readingTime": 11,
    "cover": "/assets/pages/blog/covers/lattice-competitors-and-alternatives.webp",
    "coverAlt": "What are the top 17 Lattice competitors and alternatives in 2026?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "Performance Management",
      "HR Software",
      "AI Tools",
      "Employee Enablement",
      "OKR Management",
      "Continuous Feedback"
    ]
  },
  {
    "slug": "ai-in-hr-use-cases-tools-2025",
    "lang": "en",
    "title": "How can AI be used in HR and people functions?",
    "description": "Discover how AI is transforming HR in 2025. This guide explains AI use cases across performance management, HRIS, learning, and recruiting—plus examples of top tools and LLM prompts HR teams can use today.",
    "category": "guides",
    "date": "2025-10-06",
    "author": "miikka-kataja",
    "readingTime": 10,
    "cover": "/assets/pages/blog/covers/ai-in-hr-use-cases-tools-2025.webp",
    "coverAlt": "How can AI be used in HR and people functions?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "HR AI",
      "AI in HR",
      "Performance enablement",
      "HRIS",
      "Learning and development",
      "Recruiting automation",
      "LLM prompts for HR"
    ]
  },
  {
    "slug": "performance-management-startup-growth-guide",
    "lang": "en",
    "title": "How should performance management evolve as a startup grows",
    "description": "Discover how performance management evolves from pre-seed to Series C. This practical guide for founders and people leaders explains best practices for performance management in growing companies.",
    "category": "guides",
    "date": "2025-10-01",
    "author": "kristo-ovaska",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/performance-management-startup-growth-guide.webp",
    "coverAlt": "How should performance management evolve as a startup grows",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "Performance Management",
      "Startup Growth",
      "HR Strategy",
      "People Enablement"
    ]
  },
  {
    "slug": "increase-employee-performance-goals-feedback-1-1-meetings",
    "lang": "en",
    "title": "How to Increase Employee Performance with Goals, Feedback, and 1-1 Meetings",
    "description": "Learn how to connect goals, feedback, and 1-1 meetings into a continuous loop of clarity, insight, and coaching to drive measurable employee performance improvement.",
    "category": "guides",
    "date": "2025-09-25",
    "author": "team",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/increase-employee-performance-goals-feedback-1-1-meetings.webp",
    "coverAlt": "How to Increase Employee Performance with Goals, Feedback, and 1-1 Meetings",
    "coverWidth": 4800,
    "coverHeight": 2508,
    "tags": [
      "performance management",
      "goals",
      "feedback",
      "1-1 meetings",
      "employee engagement",
      "coaching"
    ]
  },
  {
    "slug": "performance-review-calibration",
    "lang": "en",
    "title": "Performance Review Calibration: Ensuring Fair and Consistent Evaluations",
    "description": "Learn how performance calibration synchronizes assessment results across managers and teams to guarantee impartiality, uniformity, and actionable insights in your review process.",
    "category": "guides",
    "date": "2025-09-08",
    "author": "team",
    "readingTime": 2,
    "cover": "/assets/pages/blog/covers/performance-review-calibration.webp",
    "coverAlt": "Performance Review Calibration: Ensuring Fair and Consistent Evaluations",
    "coverWidth": 4800,
    "coverHeight": 2508,
    "tags": [
      "performance reviews",
      "calibration",
      "bias reduction",
      "fairness",
      "HR best practices"
    ]
  },
  {
    "slug": "employee-performance-evaluations",
    "lang": "en",
    "title": "Employee Performance Evaluations: A Complete Guide",
    "description": "A comprehensive guide to making performance reviews fair, continuous, and growth-oriented, covering evaluation cadences, bias reduction, and best practices for effective assessments.",
    "category": "guides",
    "date": "2025-09-01",
    "author": "team",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/employee-performance-evaluations.webp",
    "coverAlt": "Employee Performance Evaluations: A Complete Guide",
    "coverWidth": 4800,
    "coverHeight": 2508,
    "tags": [
      "performance reviews",
      "employee evaluations",
      "HR best practices",
      "feedback",
      "talent management"
    ]
  },
  {
    "slug": "leapsome-competitors-and-alternatives",
    "lang": "en",
    "title": "What are the top 14 Leapsome competitors and alternatives in 2026?",
    "description": "Compare the best Leapsome competitors and alternatives for 2026. Discover 14 best alternatives to Leapsome for performance management.",
    "category": "guides",
    "date": "2025-08-19",
    "author": "miikka-kataja",
    "readingTime": 8,
    "cover": "/assets/pages/blog/covers/leapsome-competitors-and-alternatives.webp",
    "coverAlt": "What are the top 14 Leapsome competitors and alternatives in 2026?",
    "coverWidth": 1920,
    "coverHeight": 1080,
    "tags": [
      "Leapsome competitors",
      "Leapsome alternatives",
      "People enablement platforms",
      "Performance management software",
      "AI performance management",
      "Performance enablement",
      "Continuous feedback tools",
      "Employee coaching software",
      "OKR software alternatives",
      "HR automation tools"
    ]
  },
  {
    "slug": "employee-coaching-1-1-meetings-performance-enablement",
    "lang": "en",
    "title": "What Are 1-1 Meetings? A Practical Guide to Employee Coaching and Performance Enablement",
    "description": "One-on-one meetings are recurring, structured conversations between managers and direct reports designed to support development, build trust, and keep performance on track through coaching rather than status updates.",
    "category": "guides",
    "date": "2025-06-11",
    "author": "team",
    "readingTime": 3,
    "cover": "/assets/pages/blog/covers/employee-coaching-1-1-meetings-performance-enablement.webp",
    "coverAlt": "What Are 1-1 Meetings? A Practical Guide to Employee Coaching and Performance Enablement",
    "coverWidth": 4800,
    "coverHeight": 2508,
    "tags": [
      "1-1 meetings",
      "employee coaching",
      "performance enablement",
      "manager development",
      "feedback"
    ]
  },
  {
    "slug": "faculty-performance-management-ai",
    "lang": "en",
    "title": "Bringing performance management to the age of AI at Faculty: Inside Faculty AI's org-wide adoption of Taito.ai",
    "description": "How Faculty AI automated their end-to-end performance cycle across 309 employees, achieving 50% increase in platform utilization and generating 185-300 weekly feedback points.",
    "category": "case-studies",
    "date": "2025-01-20",
    "author": "team",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/faculty-performance-management-ai.webp",
    "coverAlt": "Bringing performance management to the age of AI at Faculty: Inside Faculty AI's org-wide adoption of Taito.ai",
    "coverWidth": 1200,
    "coverHeight": 627,
    "tags": [
      "performance management",
      "AI",
      "continuous feedback",
      "automation",
      "enterprise",
      "HRIS integration",
      "coaching",
      "1:1 meetings"
    ],
    "related": [
      "faculty-performance-enablement",
      "zepz-continuous-feedback",
      "din-psykolog-feedback-culture-continuous-feedback-ai"
    ]
  },
  {
    "slug": "continuous-feedback",
    "lang": "en",
    "title": "What is Continuous Feedback and How Can It Drive Employee Performance?",
    "description": "Continuous feedback is an ongoing, structured approach to giving and receiving insights that drive personal and team performance, embedding development into daily workflows rather than waiting for annual reviews.",
    "category": "guides",
    "date": "2025-01-15",
    "author": "team",
    "readingTime": 3,
    "cover": "/assets/pages/blog/covers/continuous-feedback.webp",
    "coverAlt": "What is Continuous Feedback and How Can It Drive Employee Performance?",
    "coverWidth": 4800,
    "coverHeight": 2508,
    "tags": [
      "continuous feedback",
      "performance management",
      "employee engagement",
      "feedback culture",
      "performance enablement"
    ]
  },
  {
    "slug": "from-performance-management-to-performance-enablement",
    "lang": "en",
    "title": "What is Performance Enablement & Performance Management?",
    "description": "A comprehensive guide contrasting modern performance enablement with traditional performance management systems, explaining why continuous feedback and employee-driven development outperform annual reviews.",
    "category": "guides",
    "date": "2025-01-15",
    "author": "team",
    "readingTime": 2,
    "cover": "/assets/pages/blog/covers/from-performance-management-to-performance-enablement.webp",
    "coverAlt": "What is Performance Enablement & Performance Management?",
    "coverWidth": 1080,
    "coverHeight": 766,
    "tags": [
      "Performance Management",
      "Performance Enablement",
      "HR Strategy",
      "Employee Development"
    ]
  },
  {
    "slug": "synthflow-performance-management-ai-case-study",
    "lang": "en",
    "title": "Building a performance management process from scratch at Synthflow",
    "description": "How Synthflow introduced 1:1s, continuous feedback, and quarterly reviews through Taito's Slack-native performance management software.",
    "category": "case-studies",
    "date": "2025-01-15",
    "author": "team",
    "readingTime": 2,
    "cover": "/assets/pages/blog/covers/synthflow-performance-management-ai-case-study.webp",
    "coverAlt": "Building a performance management process from scratch at Synthflow",
    "coverWidth": 6000,
    "coverHeight": 4000,
    "tags": [
      "performance management",
      "continuous feedback",
      "1:1s",
      "quarterly reviews",
      "Slack integration",
      "AI startup",
      "scaling"
    ]
  },
  {
    "slug": "din-psykolog-feedback-culture-continuous-feedback-ai",
    "lang": "en",
    "title": "Din Psykolog: Building a positive feedback culture from scratch with Taito.ai",
    "description": "How Din Psykolog trialed and implemented Taito.ai to foster continuous feedback and boost team morale across their distributed mental health services organization.",
    "category": "case-studies",
    "date": "2025-01-10",
    "author": "team",
    "readingTime": 2,
    "cover": "/assets/pages/blog/covers/din-psykolog-feedback-culture-continuous-feedback-ai.webp",
    "coverAlt": "Din Psykolog: Building a positive feedback culture from scratch with Taito.ai",
    "coverWidth": 1200,
    "coverHeight": 627,
    "tags": [
      "feedback culture",
      "continuous feedback",
      "mental health",
      "remote teams",
      "positive reinforcement",
      "startup growth",
      "team morale"
    ]
  },
  {
    "slug": "funding-round",
    "lang": "en",
    "title": "We've Raised $2.7M to Reinvent Performance Management",
    "description": "Taito.ai announces a $2.7M seed funding round led by Accel to expand its AI-powered performance enablement platform and help organizations shift from annual reviews to continuous employee development.",
    "category": "news",
    "date": "2024-12-01",
    "author": "team",
    "readingTime": 1,
    "cover": "/assets/pages/blog/covers/funding-round.webp",
    "coverAlt": "We've Raised $2.7M to Reinvent Performance Management",
    "coverWidth": 3840,
    "coverHeight": 3040,
    "tags": [
      "funding",
      "seed-round",
      "accel",
      "company-news",
      "performance-management"
    ]
  },
  {
    "slug": "faculty-performance-enablement",
    "lang": "en",
    "title": "How Faculty Drives Performance Enablement with Continuous Feedback",
    "description": "Learn how Faculty, a leading AI company with 400 employees, replaced rigid annual review cycles with flexible, year-round performance management using Taito.ai's continuous feedback platform.",
    "category": "case-studies",
    "date": "2024-11-01",
    "author": "team",
    "readingTime": 4,
    "cover": "/assets/pages/blog/covers/faculty-performance-enablement.webp",
    "coverAlt": "How Faculty Drives Performance Enablement with Continuous Feedback",
    "coverWidth": 1200,
    "coverHeight": 627,
    "tags": [
      "case-study",
      "continuous-feedback",
      "artificial-intelligence",
      "performance-enablement",
      "employee-development"
    ],
    "related": [
      "faculty-performance-management-ai",
      "zepz-continuous-feedback",
      "din-psykolog-feedback-culture-continuous-feedback-ai"
    ]
  },
  {
    "slug": "zepz-continuous-feedback",
    "lang": "en",
    "title": "How Continuous Feedback is Helping to Drive Growth at Zepz with Taito.ai",
    "description": "Discover how Zepz, a global fintech company with 800+ employees, transformed their performance management by replacing static annual reviews with continuous AI-powered feedback through Taito.ai.",
    "category": "case-studies",
    "date": "2024-10-15",
    "author": "team",
    "readingTime": 1,
    "cover": "/assets/pages/blog/covers/zepz-continuous-feedback.webp",
    "coverAlt": "How Continuous Feedback is Helping to Drive Growth at Zepz with Taito.ai",
    "coverWidth": 1200,
    "coverHeight": 627,
    "tags": [
      "case-study",
      "continuous-feedback",
      "fintech",
      "remote-work",
      "performance-management"
    ]
  },
  {
    "slug": "haigushuvitis-tooandja-juhend",
    "lang": "et",
    "title": "Haigushüvitis Eestis: mitu päeva ja kui palju tööandja maksab",
    "description": "Päevad 1.–3. on tasustamata, 4.–8. maksad sina 70% keskmisest töötasust, alates 9. päevast maksab Tervisekassa. Tähtajad, hooldusleht ja 2026. aasta hüvitiste lagi ühes juhendis.",
    "category": "guides",
    "date": "2026-08-14",
    "author": "miikka-kataja",
    "readingTime": 11,
    "cover": "/assets/pages/blog/covers/et-haigushuvitis-tooandja-juhend.webp",
    "coverAlt": "Haigushüvitis Eestis: mitu päeva ja kui palju tööandja maksab",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "haigushüvitis",
      "töövõimetusleht",
      "palgaarvestus",
      "eesti"
    ],
    "related": [
      "pohipuhkus-tooandja-juhend",
      "tooaeg-ja-uletunnitoo-juhend",
      "toolepingu-ulesutlemine-juhend"
    ],
    "faqCount": 6,
    "translations": {
      "en": "/blog/sick-pay-in-estonia"
    }
  },
  {
    "slug": "pohipuhkus-tooandja-juhend",
    "lang": "et",
    "title": "Mitu päeva põhipuhkust töötajal Eestis seaduse järgi on?",
    "description": "Põhipuhkuse baasmäär ja pikendatud õigused, puhkusetasu arvestus ja maksetähtaeg, aegumine ning puhkuste ajakava tähtaeg — tööandja juhend koos TLS-i viidetega.",
    "category": "guides",
    "date": "2026-08-14",
    "author": "miikka-kataja",
    "readingTime": 11,
    "cover": "/assets/pages/blog/covers/et-pohipuhkus-tooandja-juhend.webp",
    "coverAlt": "Mitu päeva põhipuhkust töötajal Eestis seaduse järgi on?",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "põhipuhkus",
      "puhkusetasu",
      "puhkuste ajakava",
      "töölepingu seadus",
      "compliance"
    ],
    "related": [
      "haigushuvitis-tooandja-juhend",
      "tooaeg-ja-uletunnitoo-juhend",
      "tooleping-tooandja-juhend"
    ],
    "faqCount": 5,
    "translations": {
      "en": "/blog/annual-leave-in-estonia"
    }
  },
  {
    "slug": "tooaeg-ja-uletunnitoo-juhend",
    "lang": "et",
    "title": "Tööaeg ja ületunnitöö: tööandja juhend",
    "description": "40 tundi nädalas, 8 tundi päevas — ja üks 2026. aasta alguses jõustunud uus kokkuleppevorm, mida enamik juhendeid veel ei kata. Tööaeg, ületunnitöö, puhkeaeg ja tööajaarvestuse säilitamine ühes kohas.",
    "category": "guides",
    "date": "2026-08-14",
    "author": "miikka-kataja",
    "readingTime": 14,
    "cover": "/assets/pages/blog/covers/et-tooaeg-ja-uletunnitoo-juhend.webp",
    "coverAlt": "Tööaeg ja ületunnitöö: tööandja juhend",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "estonia",
      "working-time",
      "tls"
    ],
    "related": [
      "pohipuhkus-tooandja-juhend",
      "haigushuvitis-tooandja-juhend",
      "tooleping-tooandja-juhend"
    ],
    "faqCount": 6,
    "translations": {
      "en": "/blog/working-time-rules-in-estonia"
    }
  },
  {
    "slug": "tooleping-tooandja-juhend",
    "lang": "et",
    "title": "Tööleping Eestis: tööandja juhend tingimustele, katseajale ja töötasule",
    "description": "Töölepingu kohustuslikud tingimused, katseaeg, tähtajaline leping, käsundus- ja töövõtulepingu erinevus, töötasu alammäär ning töötamise registri tähtaeg — koos viidetega Riigi Teataja allikatele.",
    "category": "guides",
    "date": "2026-08-14",
    "author": "miikka-kataja",
    "readingTime": 14,
    "cover": "/assets/pages/blog/covers/et-tooleping-tooandja-juhend.webp",
    "coverAlt": "Tööleping Eestis: tööandja juhend tingimustele, katseajale ja töötasule",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "eesti",
      "tööleping",
      "katseaeg",
      "töötamise register",
      "töötasu alammäär"
    ],
    "related": [
      "toolepingu-ulesutlemine-juhend",
      "tooaeg-ja-uletunnitoo-juhend",
      "pohipuhkus-tooandja-juhend"
    ],
    "faqCount": 6,
    "translations": {
      "en": "/blog/employment-contracts-in-estonia"
    }
  },
  {
    "slug": "toolepingu-ulesutlemine-juhend",
    "lang": "et",
    "title": "Töölepingu ülesütlemine ja koondamine: tööandja juhend",
    "description": "Etteteatamistähtajad, koondamishüvitis, kollektiivse koondamise lävendid ja vaidlustamise riskid — kõik viited otse Töölepingu seaduse ja Töötuskindlustuse seaduse teksti juurde.",
    "category": "guides",
    "date": "2026-08-14",
    "author": "miikka-kataja",
    "readingTime": 14,
    "cover": "/assets/pages/blog/covers/et-toolepingu-ulesutlemine-juhend.webp",
    "coverAlt": "Töölepingu ülesütlemine ja koondamine: tööandja juhend",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "eesti",
      "terminations",
      "koondamine",
      "ülesütlemine"
    ],
    "related": [
      "tooleping-tooandja-juhend",
      "pohipuhkus-tooandja-juhend",
      "haigushuvitis-tooandja-juhend"
    ],
    "faqCount": 5,
    "translations": {
      "en": "/blog/terminating-employment-in-estonia"
    }
  },
  {
    "slug": "taustatarkistukset-ja-yksityisyyden-suoja",
    "lang": "fi",
    "title": "Taustatarkistukset ja yksityisyyden suoja työelämässä: työnantajan opas",
    "description": "Työnantaja saa käsitellä vain välittömästi työsuhteen kannalta tarpeellisia tietoja — eikä suostumus laajenna sitä. Mitä saa selvittää, mitä ei, ja kuka maksaa.",
    "category": "guides",
    "date": "2026-08-17",
    "author": "mikko-kivela",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/fi-taustatarkistukset-ja-yksityisyyden-suoja.webp",
    "coverAlt": "Taustatarkistukset ja yksityisyyden suoja työelämässä: työnantajan opas",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "employment-contracts"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/background-checks-and-candidate-privacy-in-finland"
    }
  },
  {
    "slug": "tyontekijan-kokonaiskustannus",
    "lang": "fi",
    "title": "Työntekijän kokonaiskustannus Suomessa: opas työnantajan sivukuluihin",
    "description": "Lakisääteiset sivukulut ovat noin 19,3 % palkan päälle, ja lisäksi tapaturma- ja ryhmähenkivakuutus, joiden hinnan kertoo vain vakuutusyhtiö. Kaikki prosentit lähteineen.",
    "category": "guides",
    "date": "2026-08-13",
    "author": "mikko-kivela",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/fi-tyontekijan-kokonaiskustannus.webp",
    "coverAlt": "Työntekijän kokonaiskustannus Suomessa: opas työnantajan sivukuluihin",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "employment-contracts"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/the-true-cost-of-an-employee-in-finland"
    }
  },
  {
    "slug": "kilpailukieltosopimukset-tyonantajan-opas",
    "lang": "fi",
    "title": "Kilpailukieltosopimukset Suomessa: työnantajan opas",
    "description": "Kilpailukielto maksaa 40–60 % palkasta rajoitusajalta. Milloin sen voi tehdä, mitä se maksaa ja miten siitä pääsee irti ajoissa.",
    "category": "guides",
    "date": "2026-08-10",
    "author": "mikko-kivela",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/fi-kilpailukieltosopimukset-tyonantajan-opas.webp",
    "coverAlt": "Kilpailukieltosopimukset Suomessa: työnantajan opas",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "employment-contracts"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/non-compete-agreements-in-finland"
    }
  },
  {
    "slug": "perhevapaat-tyonantajan-opas",
    "lang": "fi",
    "title": "Perhevapaat Suomessa: työnantajan opas",
    "description": "320 vanhempainrahapäivää lasta kohti, 160 per vanhempi ja enintään 63 siirrettävissä. Milloin vapaa alkaa, mitä on pidettävä auki ja paljonko vuosilomaa kertyy.",
    "category": "guides",
    "date": "2026-08-03",
    "author": "mikko-kivela",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/fi-perhevapaat-tyonantajan-opas.webp",
    "coverAlt": "Perhevapaat Suomessa: työnantajan opas",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "employment-contracts"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/parental-leave-in-finland"
    }
  },
  {
    "slug": "irtisanominen-tyonantajan-opas",
    "lang": "fi",
    "title": "Irtisanominen ja työsuhteen päättäminen: työnantajan opas",
    "description": "Henkilöön liittyvät ja tuotannolliset perusteet, varoitus, irtisanomisajat ja takaisinottovelvollisuus — sekä menettely, joka ratkaisee riidan.",
    "category": "guides",
    "date": "2026-07-27",
    "author": "mikko-kivela",
    "readingTime": 10,
    "cover": "/assets/pages/blog/covers/fi-irtisanominen-tyonantajan-opas.webp",
    "coverAlt": "Irtisanominen ja työsuhteen päättäminen: työnantajan opas",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "terminations"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/terminating-employment-in-finland"
    }
  },
  {
    "slug": "tyosuhde-vai-toimeksianto",
    "lang": "fi",
    "title": "Työsuhde vai toimeksianto: työnantajan opas rajanvetoon",
    "description": "Neljä tunnusmerkkiä ratkaisee, onko kyseessä työsuhde — eikä siitä voi sopia toisin. Mikä testi on, miksi kevytyrittäjyys on vaikea tapaus ja mitä virhe maksaa.",
    "category": "guides",
    "date": "2026-07-20",
    "author": "mikko-kivela",
    "readingTime": 6,
    "cover": "/assets/pages/blog/covers/fi-tyosuhde-vai-toimeksianto.webp",
    "coverAlt": "Työsuhde vai toimeksianto: työnantajan opas rajanvetoon",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "employment-contracts"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/worker-classification-in-finland"
    }
  },
  {
    "slug": "sairausajan-palkka-montako-paivaa",
    "lang": "fi",
    "title": "Sairausajan palkka Suomessa: kuinka monelta päivältä työnantaja maksaa",
    "description": "Sairastumispäivä ja yhdeksän seuraavaa arkipäivää, täydellä tai puolella palkalla työsuhteen keston mukaan. Miksi lauantai kuluttaa yhden niistä ja miksi TES yleensä pidentää jaksoa.",
    "category": "guides",
    "date": "2026-07-16",
    "author": "mikko-kivela",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/fi-sairausajan-palkka-montako-paivaa.webp",
    "coverAlt": "Sairausajan palkka Suomessa: kuinka monelta päivältä työnantaja maksaa",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "sick-pay"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/sick-pay-in-finland"
    }
  },
  {
    "slug": "tyoaika-ja-ylityo-tyonantajan-opas",
    "lang": "fi",
    "title": "Työaika ja ylityö: työnantajan opas",
    "description": "Kahdeksan tuntia päivässä, 40 viikossa, enintään 48 tuntia ylitöineen neljän kuukauden keskiarvona — ja suostumus ylityöhön joka kerta erikseen. Säännöt, kirjanpito ja mihin vanha ylityökatto katosi.",
    "category": "guides",
    "date": "2026-07-09",
    "author": "mikko-kivela",
    "readingTime": 11,
    "cover": "/assets/pages/blog/covers/fi-tyoaika-ja-ylityo-tyonantajan-opas.webp",
    "coverAlt": "Työaika ja ylityö: työnantajan opas",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "working-time"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/working-time-rules-in-finland"
    }
  },
  {
    "slug": "yleissitova-tyoehtosopimus-tyonantajan-opas",
    "lang": "fi",
    "title": "Yleissitova työehtosopimus: työnantajan opas",
    "description": "Yleissitova TES sitoo vaikka et ole allekirjoittanut sitä, ja sen alle jäävä ehto on mitätön eikä vain riitautettavissa. Näin selvität mikä sopimus koskee sinua ja mikä on takautuva riski.",
    "category": "guides",
    "date": "2026-07-06",
    "author": "mikko-kivela",
    "readingTime": 11,
    "cover": "/assets/pages/blog/covers/fi-yleissitova-tyoehtosopimus-tyonantajan-opas.webp",
    "coverAlt": "Yleissitova työehtosopimus: työnantajan opas",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "collective-agreements"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/generally-binding-collective-agreements-in-finland"
    }
  },
  {
    "slug": "tyosopimuksen-sisalto-tyonantajan-opas",
    "lang": "fi",
    "title": "Työsopimuksen sisältö ja selvitys työnteon ehdoista: työnantajan opas",
    "description": "Työsopimuksella itsellään ei ole pakollista sisältöä — selvityksellä työnteon keskeisistä ehdoista on. Kuusitoista kohtaa kahdella määräajalla, sekä koeaika, määräaikaisuus ja vaihteleva työaika.",
    "category": "guides",
    "date": "2026-07-02",
    "author": "mikko-kivela",
    "readingTime": 10,
    "cover": "/assets/pages/blog/covers/fi-tyosopimuksen-sisalto-tyonantajan-opas.webp",
    "coverAlt": "Työsopimuksen sisältö ja selvitys työnteon ehdoista: työnantajan opas",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "finland",
      "employment-contracts"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/employment-contract-requirements-in-finland"
    }
  },
  {
    "slug": "vuosilomien-seuranta-tyonantajalle",
    "lang": "fi",
    "title": "Vuosilomien ja poissaolojen seuranta Suomessa: työnantajan opas",
    "description": "Lomanmääräytymisvuosi, 14 päivän ja 35 tunnin säännöt, lauantaisääntö ja pakollinen kesälomakausi — käytännössä, esimerkkien kanssa.",
    "category": "guides",
    "date": "2026-05-26",
    "author": "miikka-kataja",
    "readingTime": 13,
    "cover": "/assets/pages/blog/covers/fi-vuosilomien-seuranta-tyonantajalle.webp",
    "coverAlt": "Vuosilomien ja poissaolojen seuranta Suomessa: työnantajan opas",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "vuosilomalaki",
      "lauantaisääntö",
      "sairausajan palkka",
      "työaikakirjanpito",
      "compliance"
    ],
    "faqCount": 6,
    "translations": {
      "en": "/blog/finland-employee-time-off-attendance-policy"
    }
  },
  {
    "slug": "arbeidsovereenkomst-en-ketenregeling",
    "lang": "nl",
    "title": "Arbeidsovereenkomst en ketenregeling: wanneer wordt een tijdelijk contract vast?",
    "description": "Drie tijdelijke contracten in 36 maanden worden automatisch een vast contract (7:668a BW): wat dat betekent voor proeftijd, aanzegplicht en het minimumloon van €14,99.",
    "category": "guides",
    "date": "2026-08-17",
    "author": "miikka-kataja",
    "readingTime": 15,
    "cover": "/assets/pages/blog/covers/nl-arbeidsovereenkomst-en-ketenregeling.webp",
    "coverAlt": "Arbeidsovereenkomst en ketenregeling: wanneer wordt een tijdelijk contract vast?",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "arbeidsovereenkomst",
      "ketenregeling",
      "proeftijd",
      "arbeidsrecht"
    ],
    "related": [
      "ontslag-werkgeversgids",
      "loondoorbetaling-bij-ziekte",
      "arbeidstijdenwet-werkgeversgids"
    ],
    "faqCount": 5,
    "translations": {
      "en": "/blog/employment-contracts-in-the-netherlands"
    }
  },
  {
    "slug": "arbeidstijdenwet-werkgeversgids",
    "lang": "nl",
    "title": "Arbeidstijdenwet: de werkgeversgids voor arbeidstijden, pauzes en oproepcontracten",
    "description": "Maximaal 12 uur per dienst, gemiddeld 55 uur per week over 4 weken, en een registratieplicht die u 52 weken moet bewaren. Wat de Arbeidstijdenwet echt van u vraagt.",
    "category": "guides",
    "date": "2026-08-17",
    "author": "reeta-kari",
    "readingTime": 17,
    "cover": "/assets/pages/blog/covers/nl-arbeidstijdenwet-werkgeversgids.webp",
    "coverAlt": "Arbeidstijdenwet: de werkgeversgids voor arbeidstijden, pauzes en oproepcontracten",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "arbeidstijden",
      "arbeidstijdenwet",
      "pauzes",
      "oproepcontract"
    ],
    "related": [
      "vakantiedagen-en-vakantiegeld",
      "arbeidsovereenkomst-en-ketenregeling",
      "loondoorbetaling-bij-ziekte"
    ],
    "faqCount": 6,
    "translations": {
      "en": "/blog/working-time-in-the-netherlands"
    }
  },
  {
    "slug": "loondoorbetaling-bij-ziekte",
    "lang": "nl",
    "title": "Loondoorbetaling bij ziekte: hoeveel betaalt u, en voor hoelang?",
    "description": "Bij ziekte betaalt u 70% van het loon door, tot 104 weken, met een minimumloonvloer in jaar 1. Zo werkt de poortwachtertoets, inclusief loonsanctie.",
    "category": "guides",
    "date": "2026-08-17",
    "author": "reeta-kari",
    "readingTime": 15,
    "cover": "/assets/pages/blog/covers/nl-loondoorbetaling-bij-ziekte.webp",
    "coverAlt": "Loondoorbetaling bij ziekte: hoeveel betaalt u, en voor hoelang?",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "loondoorbetaling",
      "ziekteverzuim",
      "poortwachter",
      "re-integratie"
    ],
    "related": [
      "ontslag-werkgeversgids",
      "arbeidsovereenkomst-en-ketenregeling",
      "vakantiedagen-en-vakantiegeld"
    ],
    "faqCount": 6,
    "translations": {
      "en": "/blog/sick-pay-in-the-netherlands"
    }
  },
  {
    "slug": "ontslag-werkgeversgids",
    "lang": "nl",
    "title": "Ontslag in Nederland: de complete werkgeversgids",
    "description": "Negen ontslaggronden, twee routes, en een transitievergoeding tot €102.000 in 2026: wat het gesloten Nederlandse ontslagrecht van u als werkgever vraagt.",
    "category": "guides",
    "date": "2026-08-17",
    "author": "miikka-kataja",
    "readingTime": 18,
    "cover": "/assets/pages/blog/covers/nl-ontslag-werkgeversgids.webp",
    "coverAlt": "Ontslag in Nederland: de complete werkgeversgids",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "ontslag",
      "transitievergoeding",
      "opzegtermijn",
      "vaststellingsovereenkomst"
    ],
    "related": [
      "loondoorbetaling-bij-ziekte",
      "arbeidsovereenkomst-en-ketenregeling",
      "arbeidstijdenwet-werkgeversgids"
    ],
    "faqCount": 5,
    "translations": {
      "en": "/blog/dismissal-in-the-netherlands"
    }
  },
  {
    "slug": "vakantiedagen-en-vakantiegeld",
    "lang": "nl",
    "title": "Hoeveel vakantiedagen en vakantiegeld moet u uitbetalen in 2026?",
    "description": "Minimaal 20 vakantiedagen fulltime en 8% vakantiebijslag zijn wettelijk verplicht. Deze gids legt de formule, vervaltermijnen en WAZO-verlof helder uit.",
    "category": "guides",
    "date": "2026-08-17",
    "author": "miikka-kataja",
    "readingTime": 17,
    "cover": "/assets/pages/blog/covers/nl-vakantiedagen-en-vakantiegeld.webp",
    "coverAlt": "Hoeveel vakantiedagen en vakantiegeld moet u uitbetalen in 2026?",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "vakantiedagen",
      "vakantiegeld",
      "verlof",
      "ouderschapsverlof"
    ],
    "related": [
      "loondoorbetaling-bij-ziekte",
      "arbeidstijdenwet-werkgeversgids",
      "arbeidsovereenkomst-en-ketenregeling"
    ],
    "faqCount": 6,
    "translations": {
      "en": "/blog/annual-leave-and-holiday-pay-in-the-netherlands"
    }
  },
  {
    "slug": "tariffavtale-og-allmenngjoring",
    "lang": "no",
    "title": "Tariffavtale og allmenngjøring: hva binder virksomheten?",
    "description": "Medlemskap eller din egen underskrift binder deg — men allmenngjøring kan binde en virksomhet som ikke har meldt seg inn i noe. Og Norge har lovfestet minstelønn i nøyaktig ti bransjer, og i ingen andre.",
    "category": "guides",
    "date": "2026-08-11",
    "author": "miikka-kataja",
    "readingTime": 8,
    "cover": "/assets/pages/blog/covers/no-tariffavtale-og-allmenngjoring.webp",
    "coverAlt": "Tariffavtale og allmenngjøring: hva binder virksomheten?",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "norway",
      "collective-agreements",
      "tariffavtale"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/collective-agreements-in-norway"
    }
  },
  {
    "slug": "arbeidstid-og-overtid-arbeidsgiverguide",
    "lang": "no",
    "title": "Arbeidstid og overtid: arbeidsgiverens guide",
    "description": "Ni timer og førti, tre sett overtidsgrenser avhengig av hva dere har avtalt, og ett absolutt tak ingen avtale kan heve. Pluss hvorfor fast lønn ikke fritar noen fra arbeidstidsoversikten.",
    "category": "guides",
    "date": "2026-08-04",
    "author": "miikka-kataja",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/no-arbeidstid-og-overtid-arbeidsgiverguide.webp",
    "coverAlt": "Arbeidstid og overtid: arbeidsgiverens guide",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "norway",
      "working-time",
      "arbeidsmiljoloven"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/working-time-rules-in-norway"
    }
  },
  {
    "slug": "arbeidsgiverperioden-16-dager",
    "lang": "no",
    "title": "Sykepenger og arbeidsgiverperioden: arbeidsgiverens guide",
    "description": "Seksten kalenderdager, ikke arbeidsdager — og et nytt fravær innen seksten dager etter det forrige fortsetter samme periode i stedet for å starte en ny. Pluss hva NAV faktisk publiserer om fristen for inntektsmelding, som er ingenting.",
    "category": "guides",
    "date": "2026-07-27",
    "author": "miikka-kataja",
    "readingTime": 8,
    "cover": "/assets/pages/blog/covers/no-arbeidsgiverperioden-16-dager.webp",
    "coverAlt": "Sykepenger og arbeidsgiverperioden: arbeidsgiverens guide",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "norway",
      "sick-pay",
      "arbeidsgiverperioden"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/sick-pay-in-norway"
    }
  },
  {
    "slug": "feriepenger-satser-og-6g-regelen",
    "lang": "no",
    "title": "Feriepenger: 10,2, 12, 12,5 eller 14,3 prosent?",
    "description": "To av de fire satsene står i loven og to gjør det ikke. Og 6G-taket rammer bare 60-årstillegget, aldri grunnsatsen — den enkeltstående dyreste feilberegningen i norsk lønn.",
    "category": "guides",
    "date": "2026-07-17",
    "author": "miikka-kataja",
    "readingTime": 7,
    "cover": "/assets/pages/blog/covers/no-feriepenger-satser-og-6g-regelen.webp",
    "coverAlt": "Feriepenger: 10,2, 12, 12,5 eller 14,3 prosent?",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "norway",
      "annual-leave",
      "feriepenger"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/holiday-pay-in-norway"
    }
  },
  {
    "slug": "ferie-og-virkedager-arbeidsgiverguide",
    "lang": "no",
    "title": "Ferie og virkedager: arbeidsgiverens guide",
    "description": "Tjuefem virkedager er lovens tall, og en virkedag omfatter lørdag — så det er fire uker og én dag, ikke fem uker. Pluss 60-årsretten, hovedferieperioden og de to separate kvotene på 12 dager de fleste slår sammen til én.",
    "category": "guides",
    "date": "2026-07-06",
    "author": "miikka-kataja",
    "readingTime": 8,
    "cover": "/assets/pages/blog/covers/no-ferie-og-virkedager-arbeidsgiverguide.webp",
    "coverAlt": "Ferie og virkedager: arbeidsgiverens guide",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "norway",
      "annual-leave",
      "ferieloven"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/annual-leave-in-norway"
    }
  },
  {
    "slug": "ferie-og-fravaer-oppfolging",
    "lang": "no",
    "title": "Ferie og fravær i Norge: arbeidsgiverens guide til oppfølging",
    "description": "Norske arbeidstakere opptjener feriepenger gjennom året som en prosent av lønnen, utbetalt som et engangsbeløp i juni — ikke som lønn i ferien. Guiden går gjennom ferieloven, sykefraværet, arbeidstidsregistreringen, 60-årsregelen og de vanligste arbeidsgiverfeilene.",
    "category": "guides",
    "date": "2026-05-06",
    "author": "miikka-kataja",
    "readingTime": 13,
    "cover": "/assets/pages/blog/covers/no-ferie-og-fravaer-oppfolging.webp",
    "coverAlt": "Ferie og fravær i Norge: arbeidsgiverens guide til oppfølging",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "ferieloven",
      "feriepenger",
      "sykepenger",
      "arbeidstid",
      "compliance"
    ],
    "related": [
      "feriepenger-satser-og-6g-regelen",
      "ferie-og-virkedager-arbeidsgiverguide",
      "arbeidsgiverperioden-16-dager"
    ],
    "faqCount": 6,
    "translations": {
      "en": "/blog/norway-employee-time-off-attendance-policy"
    }
  },
  {
    "slug": "sjukdom-under-semestern-arbetsgivarens-guide",
    "lang": "sv",
    "title": "Sjukdom under semestern: arbetsgivarens guide",
    "description": "En anställd som blir sjuk på semestern får byta tillbaka dagarna från första sjukdagen, om begäran kommer utan dröjsmål. Bytet ändrar lönen, saldot och hur den återstående ledigheten förläggs — och att bara göra det första kostar tyst medarbetaren dagarna.",
    "category": "guides",
    "date": "2026-08-06",
    "author": "miikka-kataja",
    "readingTime": 8,
    "cover": "/assets/pages/blog/covers/sv-sjukdom-under-semestern-arbetsgivarens-guide.webp",
    "coverAlt": "Sjukdom under semestern: arbetsgivarens guide",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "sweden",
      "annual-leave",
      "sick-pay"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/sick-leave-during-annual-leave-in-sweden"
    }
  },
  {
    "slug": "sjuklon-de-forsta-14-dagarna",
    "lang": "sv",
    "title": "Sjuklön: vad arbetsgivaren betalar de första 14 dagarna",
    "description": "Åttio procent av anställningsförmånerna i fjorton kalenderdagar, minus ett karensavdrag som inte är en obetald dag och inte varit det sedan 2019. Plus de två datum som avgör när din medarbetare får pengar från Försäkringskassan.",
    "category": "guides",
    "date": "2026-07-30",
    "author": "miikka-kataja",
    "readingTime": 10,
    "cover": "/assets/pages/blog/covers/sv-sjuklon-de-forsta-14-dagarna.webp",
    "coverAlt": "Sjuklön: vad arbetsgivaren betalar de första 14 dagarna",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "sweden",
      "sick-pay",
      "karensavdrag"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/sick-pay-in-sweden"
    }
  },
  {
    "slug": "semester-och-semesterlon-arbetsgivarens-guide",
    "lang": "sv",
    "title": "Semester och semesterlön: arbetsgivarens guide",
    "description": "Tjugofem semesterdagar är den enkla delen. Hur många av dem som är betalda kommer ur en formel vars nämnare de flesta kalkylark får fel, och vilken semesterlönemodell som gäller är inte alltid arbetsgivarens val.",
    "category": "guides",
    "date": "2026-07-23",
    "author": "miikka-kataja",
    "readingTime": 10,
    "cover": "/assets/pages/blog/covers/sv-semester-och-semesterlon-arbetsgivarens-guide.webp",
    "coverAlt": "Semester och semesterlön: arbetsgivarens guide",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "sweden",
      "annual-leave",
      "semesterlagen"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/annual-leave-and-holiday-pay-in-sweden"
    }
  },
  {
    "slug": "kollektivavtal-vad-binder-arbetsgivaren",
    "lang": "sv",
    "title": "Kollektivavtal i Sverige: vad binder egentligen arbetsgivaren?",
    "description": "Ingen svensk arbetsgivare är skyldig att teckna kollektivavtal, och inget avtal blir bindande bara för att det är branschstandard. Det som binder är medlemskap eller din egen underskrift — och ett hängavtal är det andra.",
    "category": "guides",
    "date": "2026-07-13",
    "author": "miikka-kataja",
    "readingTime": 9,
    "cover": "/assets/pages/blog/covers/sv-kollektivavtal-vad-binder-arbetsgivaren.webp",
    "coverAlt": "Kollektivavtal i Sverige: vad binder egentligen arbetsgivaren?",
    "coverWidth": 1792,
    "coverHeight": 1008,
    "tags": [
      "compliance",
      "sweden",
      "collective-agreements"
    ],
    "faqCount": 4,
    "translations": {
      "en": "/blog/collective-agreements-in-sweden"
    }
  },
  {
    "slug": "semester-och-franvaro-uppfoljning",
    "lang": "sv",
    "title": "Semester och frånvaro i Sverige: arbetsgivarens guide till uppföljning",
    "description": "Svenska anställda har rätt till 25 semesterdagar plus semestertillägg ovanpå den vanliga lönen. Guiden går igenom semesterlagen, sjukfrånvaron, arbetstidsregistreringen, kollektivavtalen och de vanligaste arbetsgivarfelen.",
    "category": "guides",
    "date": "2026-05-29",
    "author": "miikka-kataja",
    "readingTime": 14,
    "cover": "/assets/pages/blog/covers/sv-semester-och-franvaro-uppfoljning.webp",
    "coverAlt": "Semester och frånvaro i Sverige: arbetsgivarens guide till uppföljning",
    "coverWidth": 1536,
    "coverHeight": 1024,
    "tags": [
      "semesterlagen",
      "semestertillägg",
      "sjuklön",
      "arbetstid",
      "compliance"
    ],
    "related": [
      "semester-och-semesterlon-arbetsgivarens-guide",
      "sjuklon-de-forsta-14-dagarna",
      "kollektivavtal-vad-binder-arbetsgivaren"
    ],
    "faqCount": 6,
    "translations": {
      "en": "/blog/sweden-employee-time-off-attendance-policy"
    }
  }
];
