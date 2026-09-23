// Content for /mcp-use-cases, /mcp-use-cases/:slug, /tools, /tools/:slug.
// Extracted from the live site (see specs/SPEC_mcp_tools.md). Long article-style explainer
// paragraphs on calculator pages are lorem-ipsum placeholders of matching length/structure.
// HTML strings are rendered with dangerouslySetInnerHTML (static, first-party content).

const A = '/assets/pages/mcp-tools';

/** Brand logos used in chips, grids and "Sources" rows. */
export const logos = {
  claude: { src: `${A}/svg/claude.svg`, name: 'Claude' },
  slack: { src: `${A}/svg/slack.svg`, name: 'Slack' },
  linear: { src: `${A}/svg/linear.svg`, name: 'Linear' },
  hubspot: { src: `${A}/svg/hubspot.svg`, name: 'HubSpot' },
  notion: { src: `${A}/svg/notion.svg`, name: 'Notion' },
  fortnox: { src: `${A}/svg/fortnox.svg`, name: 'Fortnox' },
  lovable: { src: `${A}/img/lovable.webp`, name: 'Lovable' },
  xero: { src: `${A}/svg/xero.svg`, name: 'Xero' },
  deel: { src: `${A}/svg/deel.svg`, name: 'Deel' },
  chatgpt: { src: `${A}/svg/chatgpt.svg`, name: 'ChatGPT' },
  ashby: { src: `${A}/img/ashby.webp`, name: 'Ashby' },
  n8n: { src: `${A}/svg/n8n.svg`, name: 'n8n' },
  googleCalendar: { src: `${A}/svg/google-calendar.svg`, name: 'Google Calendar' },
  taito: { src: `${A}/svg/taito-mark.svg`, name: 'Taito.ai' },
  taitoHub: { src: `${A}/svg/taito-hub.svg`, name: 'Taito.ai' },
  mcp: { src: `${A}/svg/mcp-glyph.svg`, name: 'MCP' },
};

export const avatars = {
  olivia: `${A}/img/olivia-hartley.webp`,
  sophie: `${A}/img/sophie-lane.webp`,
  marcus: `${A}/img/marcus-bennett.webp`,
  james: `${A}/img/james-whitfield.webp`,
  daniel: `${A}/img/daniel-hayes.webp`,
  hannah: `${A}/img/hannah-reid.webp`,
};

export const mcpIndex = {
  hero: {
    eyebrow: 'MCP use cases',
    title: 'Real people workflows, built on Taito.ai MCP',
    lede: 'Every action inside Taito.ai — reading records, generating documents, running approvals, closing offboarding — is available over MCP. Bring your own AI, wire in the tools you already run, and the workflow reads live records instead of a stale export.',
    description:
      'A grid of tool tiles — Claude, Slack, Linear, HubSpot, Notion, Fortnox, Lovable, Xero, Deel, ChatGPT, Ashby, and n8n — arranged around a central Taito.ai hub badged with "MCP". Taito.ai is the source of truth; every tool on the grid connects to it over MCP.',
    grid: [
      ['claude', 'slack', 'linear', 'hubspot'],
      ['notion', 'fortnox', 'HUB', 'lovable', 'xero'],
      ['deel', 'chatgpt', 'ashby', 'n8n'],
    ],
  },
  gallery: { eyebrow: 'Get started', title: 'Explore use cases', id: 'mcp-gallery' },
  value: {
    id: 'mcp-value',
    eyebrow: 'Why MCP',
    title: 'One source of truth, any surface',
    description:
      'Taito.ai holds the records — <a class="inline-link" href="/performance">performance</a>, <a class="inline-link" href="/time-off-attendance">time off and attendance</a>, documents, the org graph — and MCP exposes every one of them, along with every action the <a class="inline-link" href="/agents">people agents</a> can take.',
    features: [
      { icon: 'radio', title: 'Live data, no exports.', body: 'MCP reads the current record every time — so the answer matches what the app would show you.' },
      { icon: 'shield-check', title: 'Your permissions travel with you.', body: 'Anything the AI can see, the calling user could already see. Every access is logged, every action is scoped.' },
      { icon: 'plug', title: 'Bring the tool you already use.', body: 'Claude, Slack, HubSpot, Linear, Lovable, ChatGPT — anything MCP-native. Taito.ai is the source of truth; you pick the surface.' },
    ],
  },
  faq: {
    id: 'mcp-faq',
    items: [
      { q: 'What is MCP?', a: 'Model Context Protocol — a standard for giving AI tools like Claude and ChatGPT structured access to your systems. Taito.ai runs an MCP server that exposes the full people graph and every action the app can perform, with your permissions applied.' },
      { q: 'Do I need a developer?', a: 'For the ready-made workflows on this page, no — just paste a prompt into Claude or configure the Taito.ai app. Custom apps in Lovable, or stringing several tools together, go faster with someone who’s comfortable in a workflow builder.' },
      { q: 'Which AI tools does Taito.ai MCP work with?', a: 'Any MCP-compatible client: Claude Desktop, Claude in Slack, ChatGPT MCP, Cursor, and Lovable’s MCP support. Anything that speaks MCP can connect — the clients above are the ones we test against.' },
      { q: 'What can the AI see?', a: 'Only what your user permissions allow. Field-level access, integration allowlists, and audit logs all apply — the AI inherits the caller’s permissions and can never access more than the person running it. When a workflow needs a human decision, it escalates to one.' },
    ],
  },
};

export const mcpRelated = {
  eyebrow: 'Built to work together',
  title: 'Keep exploring',
  description: 'More workflows on the Taito.ai MCP server, or browse <a class="inline-link" href="/mcp-use-cases">all MCP use cases</a>.',
};

export const toolsIndex = {
  header: {
    eyebrow: 'Tools',
    title: 'Calculators that follow the statute, not a rule of thumb',
    description:
      'Calculators for the numbers an employer gets asked to justify — accrued leave, holiday pay, feriepenger, statutory sick pay. Each one applies the rule the way the act writes it, shows the working, and links every rate and threshold to the statute or agency page it came from. Nothing to install, no sign-up, and the figures you type stay in your browser.',
  },
  list: {
    id: 'tools-list',
    eyebrow: 'Calculators',
    title: 'Pick the one your payroll question belongs to',
    items: [
      { slug: 'vuosilomalaskuri', kicker: 'Finland · Annual leave', title: 'Vuosilomalaskuri', body: 'Counts the vuosilomapäivät one employee has accrued: which qualifying rule applies — 14 days or 35 hours in a month — and whether that month earns 2 or 2.5 working days. Sourced to Finlex and työsuojelu.fi.', statute: 'Vuosilomalaki 162/2005' },
      { slug: 'semesterdagar-raknare', kicker: 'Sweden · Annual leave', title: 'Semesterdagar-räknare', body: 'Works out the paid semesterdagar earned in the intjänandeår and the semesterlön owed on them, under either sammalöneregeln or procentregeln, plus how many days may be saved. Sourced to Riksdagen and lagen.nu.', statute: 'Semesterlagen (1977:480)' },
      { slug: 'feriepengekalkulator', kicker: 'Norway · Feriepenger', title: 'Feriepengekalkulator', body: "Calculates feriepenger on a year's holiday-pay basis at the 10.2% statutory minimum or the 12% five-week tariff rate, adds the 2.3-point supplement for employees over 60, and splits the result correctly against the 6G cap. Sourced to Lovdata, Arbeidstilsynet and Altinn.", statute: 'Ferieloven § 10' },
      { slug: 'statutory-sick-pay-calculator', kicker: 'United Kingdom · Statutory sick pay', title: 'Statutory sick pay calculator', body: 'Prices a sickness absence under the reformed rules: no waiting days, no lower earnings limit, and a weekly rate that is the lower of the flat SSP rate and 80% of normal weekly earnings. Covers absences that span the reform date, with every figure cited to legislation.gov.uk.', statute: 'SSP, as amended 6 April 2026' },
      { slug: 'holiday-pay-calculator', kicker: 'United Kingdom · Holiday pay', title: 'Holiday pay calculator', body: "Turns a period of leave into money under WTR reg 16 — the 52-week reference period, the conditional 104-week look-back, which pay components count, and reg 15B's 12.07% accrual for irregular-hours and part-year workers. The gov.uk calculator returns days and hours; this one returns pounds.", statute: 'Working Time Regulations 1998' },
    ],
  },
  standard: {
    id: 'tools-standard',
    eyebrow: 'How these calculators are built',
    title: 'Why you can put these numbers in front of payroll',
    features: [
      { title: 'The rule the act writes, not an average.', body: 'Each calculator implements the statutory rule itself — qualifying months, reference periods, supplements, caps — instead of approximating it with a percentage that happens to be right most of the time.' },
      { title: 'Every threshold links to its source.', body: 'Rates, caps and cut-off dates carry a link to the statute or agency page they come from — Finlex, Riksdagen, Lovdata, legislation.gov.uk — next to the number you are reading, not in a footnote at the bottom.' },
      { title: 'Your figures stay in your browser.', body: 'The arithmetic runs client-side. The salaries and absence dates you type are never sent to us, the result is not behind an email gate, and there is nothing to sign up for.' },
    ],
  },
  coverage: {
    id: 'tools-coverage',
    eyebrow: 'Coverage',
    title: 'The Nordics and the UK, with the guides that go with them',
    description:
      'Coverage follows the markets we write compliance guides for: <a class="inline-link" href="/compliance/finland">Finland</a>, <a class="inline-link" href="/compliance/sweden">Sweden</a>, <a class="inline-link" href="/compliance/norway">Norway</a> and the <a class="inline-link" href="/compliance/uk">UK</a>. Each calculator sits alongside a country guide and a deadline calendar on its <a class="inline-link" href="/compliance">compliance hub</a>, so once you have the number you can check the deadline it has to hit. Taito.ai, the people operations system behind them, runs the same rules on live employee data.',
  },
};

export const mcpUseCases = [
  {
    "slug": "engineering-performance-review-linear",
    "category": "Performance",
    "title": "Engineering performance reviews, grounded in Linear",
    "blurb": "Every claim in the draft points at a real issue — shipped work, PR reviews, and cycle history pulled live from Linear.",
    "tools": [
      {
        "logo": "claude",
        "label": "Claude"
      },
      {
        "logo": "linear",
        "label": "Linear"
      }
    ],
    "hero": {
      "eyebrow": "Performance",
      "title": "Engineering performance reviews, grounded in Linear",
      "lede": "Every sentence in the draft points at an issue ID. Claude reads the engineer’s shipped issues, PR reviews, and cycle work from Linear — so a report who disagrees with their review can open the evidence.",
      "description": "Taito.ai assembles Daniel Hayes' Q2 performance review, grounded in 12 issues and 4 PR reviews and pulling source signal from Taito.ai and Linear, then drafting the reasoning: Daniel shipped ahead of plan in Q2, leading the auth migration and pairing with new engineers across the platform team. Q2 cycles show consistent delivery on ENG-1204, ENG-1257, and the review-latency initiative in ENG-1281, with growth opportunity in cross-team communication… It follows up with a suggested development discussion agenda: Open with the review-latency work in ENG-1281 and the pairing it unlocked. Move to a 30/60/90 plan for cross-team communication, then agree a Q3 goal of owning the platform roadmap for one initiative."
    },
    "how": {
      "eyebrow": "How it works",
      "title": "Show the work behind the review",
      "description": "Set the cycle up once. Claude pulls each engineer’s Linear work for the period and writes every claim against an issue ID, on the Taito.ai <a class=\"inline-link\" href=\"/performance\">performance record</a>.",
      "features": [
        {
          "icon": "git-pull-request",
          "title": "Every claim has an issue ID",
          "body": "A report who disagrees with their review can open the evidence and check it themselves."
        },
        {
          "icon": "file-text",
          "title": "Managers don’t start from a blank page",
          "body": "The agent assembles the quarter’s work before anyone types a word."
        },
        {
          "icon": "target",
          "title": "Fair across the team",
          "body": "The same rubric, applied to the same evidence source, for every engineer."
        }
      ],
      "snippetTitle": "Prompt",
      "snippet": "In Taito.ai, set up the Q2 engineering performance review cycle.\n\nParticipants:\n  – Everyone in the Engineering job family\n  – Include contractors on active engagement\n\nQuestions each manager answers per direct report:\n  1. Impact — what shipped this quarter, and how did it move the roadmap\n  2. Technical judgement — quality of decisions and trade-offs\n  3. Collaboration — how they showed up for the team and cross-team\n  4. Growth — what to invest in next quarter\n\nSchedule:\n  – Opens June 15, closes June 30\n  – Calibration meetings scheduled for July 3–5\n  – Reminders at T-7, T-3, T-1 for anyone with open answers",
      "chips": [
        {
          "logo": "claude",
          "label": "Claude"
        },
        {
          "logo": "taito",
          "label": "Taito.ai MCP"
        },
        {
          "logo": "linear",
          "label": "Linear MCP"
        }
      ]
    },
    "faqId": "engineering-review-faq",
    "faq": [
      {
        "q": "Do managers have to use Claude?",
        "a": "No. The cycle runs in Taito.ai either way, and a manager can write the review by hand. Claude is how the evidence gets assembled before they start."
      },
      {
        "q": "What if the Linear history is incomplete?",
        "a": "The draft only cites what it can find, and each claim carries the issue it came from — so gaps show up as gaps instead of being filled in with generalities."
      },
      {
        "q": "Can the engineer see the evidence behind their review?",
        "a": "Yes. Sources stay attached to the review record, so a report can open the issues and PR reviews a claim is based on and challenge it if they disagree."
      }
    ],
    "relatedId": "related-engineering-review",
    "related": [
      "gtm-performance-review-hubspot",
      "ask-hr-in-slack",
      "team-availability-digest-slack"
    ]
  },
  {
    "slug": "gtm-performance-review-hubspot",
    "category": "Performance",
    "title": "GTM performance reviews, grounded in HubSpot",
    "blurb": "Quota is the easy part. Claude pulls the deals behind the number — cycle length, expansion, forecast drift — straight from HubSpot.",
    "tools": [
      {
        "logo": "claude",
        "label": "Claude"
      },
      {
        "logo": "hubspot",
        "label": "HubSpot"
      }
    ],
    "hero": {
      "eyebrow": "Performance",
      "title": "GTM performance reviews, grounded in HubSpot",
      "lede": "Anyone can pull quota attainment. Claude pulls the deals behind it — cycle length, expansion versus new logo, forecast drift — so the review is about how the number happened, not just that it did.",
      "description": "Taito.ai assembles Hannah Reid's Q2 performance review, grounded in 7 closed deals and 42 activities and pulling source signal from Taito.ai and HubSpot, then drafting the reasoning: Hannah closed 118% of quota in Q2, sourced $1.4M in new pipeline, and led the Northwind expansion alongside three logo wins. Forecast accuracy has held within 5% since April, with growth opportunity in shortening mid-market discovery… It follows up with a suggested coaching conversation agenda: Open on the Northwind expansion and what made it land. Move to the two mid-market deals that slipped a quarter and where discovery ran long, then agree a Q3 target for cycle length."
    },
    "how": {
      "eyebrow": "How it works",
      "title": "The story behind the number",
      "description": "Set the cycle up once. Claude reads the deals under the attainment number — cycle length, expansion, forecast drift — and drafts the review on the Taito.ai <a class=\"inline-link\" href=\"/performance\">performance record</a>.",
      "features": [
        {
          "icon": "trending-up",
          "title": "The number, and how it happened",
          "body": "Cycle length, expansion mix, and forecast drift sit next to attainment instead of behind it."
        },
        {
          "icon": "scale",
          "title": "Territory separated from performance",
          "body": "Same window, same metrics, every rep — benchmarked against the team median."
        },
        {
          "icon": "target",
          "title": "Coaching, not scorekeeping",
          "body": "The review time goes on the two deals that went sideways, not on assembling a spreadsheet."
        }
      ],
      "snippetTitle": "Prompt",
      "snippet": "In Taito.ai, set up the Q2 GTM performance review cycle.\n\nParticipants:\n  – Everyone in the GTM job families: AE, SDR/BDR, CSM, Sales Engineering\n  – Include GTM leadership (managers reviewed by their leaders)\n\nQuestions each manager answers per direct report:\n  1. Number delivery — quota attainment, pipeline sourced, deals closed\n  2. Deal quality — expansion vs. logo, retention, forecast accuracy\n  3. Activity and craft — outbound volume, discovery quality, demo skill\n  4. Collaboration — how they showed up for pods, marketing, and CS\n  5. Growth — what to invest in next quarter\n\nSchedule:\n  – Opens July 1, closes July 15\n  – Calibration meetings scheduled for July 17–19\n  – Reminders at T-7, T-3, T-1 for anyone with open answers",
      "chips": [
        {
          "logo": "claude",
          "label": "Claude"
        },
        {
          "logo": "taito",
          "label": "Taito.ai MCP"
        },
        {
          "logo": "hubspot",
          "label": "HubSpot MCP"
        }
      ]
    },
    "faqId": "gtm-review-faq",
    "faq": [
      {
        "q": "Which HubSpot data does it read?",
        "a": "Deals, pipeline, activity, and forecast history for the review window — the same records the manager could open themselves, pulled with their own permissions."
      },
      {
        "q": "Does this just rank people by quota?",
        "a": "Attainment is one input. The draft also covers deal quality, cycle length, expansion versus new logo, and forecast accuracy against the team median, so territory luck is easier to separate from performance."
      },
      {
        "q": "Can GTM and engineering cycles run side by side?",
        "a": "Yes. Both are review cycles in Taito.ai and only the evidence source differs — HubSpot here, Linear for engineering reviews."
      }
    ],
    "relatedId": "related-gtm-review",
    "related": [
      "engineering-performance-review-linear",
      "ask-hr-in-slack",
      "team-availability-digest-slack"
    ]
  },
  {
    "slug": "ask-hr-in-slack",
    "category": "Employee experience",
    "title": "Ask HR anything, in Slack",
    "blurb": "Time-off balances, policy answers, headcount lookups — answered from the live record in a DM, scoped to the asker.",
    "tools": [
      {
        "logo": "slack",
        "label": "Slack"
      },
      {
        "logo": "claude",
        "label": "Claude"
      }
    ],
    "hero": {
      "eyebrow": "Employee experience",
      "title": "Ask HR anything, in Slack",
      "lede": "Employees open a DM with the Taito.ai app in Slack and ask — time-off balances, policy answers, their next 1:1. Answered from live data, scoped to what that person is allowed to see, and private by default.",
      "description": "A Slack conversation with the Taito.ai app. Olivia Hartley asks how much annual leave she will have accrued by the end of October; the app replies that she is at 12 days today and accrues 2.08 days a month under her policy, putting her at 18.25 days on Oct 31 with nothing else booked. She then asks to book a week off in the first week of August and the first week of September, and the app confirms Aug 3–7 and Sep 1–4 are booked as annual leave — 9 working days, both approved — leaving an Oct 31 balance of 9.25 days."
    },
    "how": {
      "eyebrow": "How it works",
      "title": "Self-serve HR, without a portal",
      "description": "Employees DM the app as themselves, so what they can ask is what they can see — <a class=\"inline-link\" href=\"/time-off-attendance\">balances</a>, policies, org data, straight from the live record.",
      "features": [
        {
          "icon": "ticket-x",
          "title": "The People team stops being the FAQ desk",
          "body": "The obvious questions get answered without a ticket. Your team focuses on the ones that need judgement."
        },
        {
          "icon": "shield-check",
          "title": "Answers stay right",
          "body": "They come from the live record, not a screenshot in someone’s DMs or a stale Notion page."
        },
        {
          "icon": "message-square",
          "title": "Nothing new to learn",
          "body": "The interface is Slack. Employees are already there — no separate portal to remember."
        }
      ],
      "snippetTitle": "Example DMs",
      "snippet": "In Slack, open a DM with the Taito.ai app and just ask.\n\n  How many vacation days do I have left this year?\n  What's our sick-leave policy for Spain?\n  Who's out this week on my team?\n  When was my last performance review?\n\nBehind the scenes:\n  – The Taito.ai app authenticates the asker via their Slack ID\n  – Calls Taito.ai MCP with the asker's own permissions\n  – Answers with the live value + a link to the underlying record or policy",
      "chips": [
        {
          "logo": "slack",
          "label": "Slack"
        },
        {
          "logo": "taito",
          "label": "Taito.ai MCP"
        }
      ]
    },
    "faqId": "ask-hr-faq",
    "faq": [
      {
        "q": "Do employees need a Taito.ai login to ask?",
        "a": "They need an account, but they never have to open it. The Slack app matches their Slack identity to their employee record and answers with that person’s own permissions."
      },
      {
        "q": "Can anyone else see what someone asked?",
        "a": "No. The DM is a private conversation between the employee and the Taito.ai app, and it is logged against their record the same way any other access is."
      },
      {
        "q": "What happens when the app can’t answer?",
        "a": "It hands the question to the right person with the conversation so far attached, rather than guessing. Policy questions that need interpretation go to the People team, not to a generated answer."
      }
    ],
    "relatedId": "related-ask-hr",
    "related": [
      "team-availability-digest-slack",
      "onboarding-automation-ashby",
      "engineering-performance-review-linear"
    ]
  },
  {
    "slug": "team-availability-digest-slack",
    "category": "Employee experience",
    "title": "Team availability, posted to Slack every Monday",
    "blurb": "Every Monday the Taito.ai app posts approved leave, work-from-home days, and public holidays to #general, with coverage gaps flagged.",
    "tools": [
      {
        "logo": "slack",
        "label": "Slack"
      }
    ],
    "hero": {
      "eyebrow": "Employee experience",
      "title": "Team availability, posted to Slack every Monday",
      "lede": "Every Monday morning, the Taito.ai app posts the week ahead to #general: approved leave, work-from-home days, public holidays by location, and the days coverage runs thin. Everyone sees it in the channel they already check.",
      "description": "A Monday-morning post from the Taito.ai app in the #general Slack channel, headed \"This week — May 12–16\": Hannah Reid is off Wednesday and Thursday on annual leave, Daniel Hayes is off Friday for a UK public holiday, and Olivia Hartley is working from home all week. The digest flags that Wednesday and Thursday are thin with both Hannah and Daniel out, so work needing either of them should move earlier in the week or be handed off. Three people out this week, with a link to the full calendar in Taito.ai."
    },
    "how": {
      "eyebrow": "How it works",
      "title": "Who's out, before anyone asks",
      "description": "Set the channel, the time, and the leave types once. Every Monday the scheduler reads <a class=\"inline-link\" href=\"/time-off-attendance\">approved leave and attendance</a> over MCP and writes the post.",
      "features": [
        {
          "icon": "users",
          "title": "Team coordination without a meeting",
          "body": "The Monday standup starts with everyone already knowing who’s around."
        },
        {
          "icon": "plane-takeoff",
          "title": "One post instead of ten DMs",
          "body": "The week lands in the channel before anyone thinks to ask."
        },
        {
          "icon": "shield-check",
          "title": "Coverage gaps caught early",
          "body": "Three people off the same Thursday shows up on Monday, not Wednesday evening."
        }
      ],
      "snippetTitle": "Prompt",
      "snippet": "In Taito.ai, set up a weekly \"who's out this week\" Slack digest.\n\nPost to #general every Monday at 09:00.\nCover the Mon–Fri window ahead.\n\nInclude, for each person:\n  – Approved annual leave, sick leave, parental leave\n  – Approved WFH / off-site days\n  – Public holidays in their location\n\nFlag coverage gaps (3+ people off the same day) as a callout.\nGroup by day of week; call out \"no absences\" days as such.\n\nRespect field-level permissions — hide sensitive leave categories per policy.",
      "chips": [
        {
          "logo": "taito",
          "label": "Taito.ai MCP"
        },
        {
          "logo": "slack",
          "label": "Slack"
        }
      ]
    },
    "faqId": "team-availability-faq",
    "faq": [
      {
        "q": "Which channel does the digest post to?",
        "a": "Whichever one you name — #general in the example above. The channel, the time, the window it covers, and which leave types appear are all part of the setup."
      },
      {
        "q": "Does it expose sensitive leave types?",
        "a": "No. Field-level permissions apply to the post itself, so categories your policy keeps private stay out of the digest without breaking the rest of it."
      },
      {
        "q": "Can we change the cadence after setup?",
        "a": "Yes. Re-run the prompt with a different schedule, or edit the workflow in Taito.ai — the digest is a saved workflow, not a fixed feature."
      }
    ],
    "relatedId": "related-team-availability",
    "related": [
      "ask-hr-in-slack",
      "onboarding-automation-ashby",
      "engineering-performance-review-linear"
    ]
  },
  {
    "slug": "onboarding-automation-ashby",
    "category": "Employee experience",
    "title": "Automated onboarding, triggered from Ashby",
    "blurb": "Mark a candidate Hired in Ashby and the employee syncs into Taito.ai — then an agent assigns onboarding tasks, schedules the probation review, and books the first 1:1.",
    "tools": [
      {
        "logo": "ashby",
        "label": "Ashby"
      },
      {
        "logo": "googleCalendar",
        "label": "Google Calendar"
      }
    ],
    "hero": {
      "eyebrow": "Employee experience",
      "title": "Automated onboarding, triggered from Ashby",
      "lede": "Mark a candidate Hired in Ashby and the employee syncs straight into Taito.ai — then an agent takes over the first-day setup: onboarding tasks, probation review cycle, and booked 1:1 meetings.",
      "description": "A new hire, Sophie Lane, has just been marked Hired in Ashby and synced into Taito.ai as an employee. An agent has completed her onboarding setup: an 8-task Design onboarding list assigned, a probation review cycle scheduled to open on day 76, the first 1:1 with her manager booked, and the probation review meeting booked for day 90 — both on Google Calendar."
    },
    "how": {
      "eyebrow": "How it works",
      "title": "A first day that’s ready before it starts",
      "description": "Connect Ashby once. Every candidate it marks Hired syncs into Taito.ai as a new employee, which fires an <a class=\"inline-link\" href=\"/agents\">Employee created</a> trigger — running an agent that handles the tasks, review cycle, and calendar invites with no manual kickoff per hire.",
      "features": [
        {
          "icon": "zap",
          "title": "Nothing dropped on day one",
          "body": "The setup fires the moment the hire closes — not when someone remembers to start the checklist."
        },
        {
          "icon": "calendar-check",
          "title": "The manager is ready",
          "body": "First 1:1 and probation review already on the calendar, the review cycle scheduled, context waiting in Taito.ai."
        },
        {
          "icon": "git-merge",
          "title": "One source of truth",
          "body": "Candidate data flows from Ashby into the people graph — no retyping, no copy-paste errors between systems."
        }
      ],
      "snippetTitle": "Automation",
      "snippet": "Connect the Ashby integration, then set up onboarding automation for new employees.\n\nWhen an employee is created in Taito.ai (synced from Ashby's Hired stage):\n  1. Assign the onboarding task list for their department\n  2. Schedule a probation review feedback cycle, opening 2 weeks before the 90-day mark\n\nThen, via Google Calendar:\n  3. Book a 30-min first 1:1 with their manager in week one\n  4. Book the probation review meeting for day 90\n\nNotify the manager and People ops when it's done.",
      "chips": [
        {
          "logo": "claude",
          "label": "Claude"
        },
        {
          "logo": "ashby",
          "label": "Ashby MCP"
        },
        {
          "logo": "taito",
          "label": "Taito.ai MCP"
        },
        {
          "logo": "googleCalendar",
          "label": "Google Calendar"
        }
      ]
    },
    "faqId": "onboarding-faq",
    "faq": [
      {
        "q": "What triggers the automation?",
        "a": "The Employee created event in Taito.ai. When a candidate reaches Ashby’s Hired stage, the Ashby integration syncs them in as a new employee — record, employment, position, and groups — which fires the trigger and runs the onboarding agent. No manual kickoff, no CSV import, no double entry."
      },
      {
        "q": "Does the automation create the employee record?",
        "a": "No — that part is native. Connecting Ashby means every candidate marked Hired is synced into Taito.ai automatically, with their employment, position, job, location, and groups populated from the Ashby profile. The agent picks up from there to run onboarding."
      },
      {
        "q": "What if different teams need different onboarding tasks?",
        "a": "The task list is chosen from the new hire’s department and role, so a designer and an account executive get different checklists from the same trigger."
      },
      {
        "q": "Does it have to be Google Calendar?",
        "a": "The example uses Google Calendar. Any calendar with an MCP connector works the same way — the first 1:1 and the probation review are created as normal events on the manager’s calendar."
      }
    ],
    "relatedId": "related-onboarding",
    "related": [
      "ask-hr-in-slack",
      "team-availability-digest-slack",
      "engineering-performance-review-linear"
    ]
  },
  {
    "slug": "payroll-prep",
    "category": "Payroll & finance",
    "title": "Payroll variance report before you send it",
    "blurb": "Claude assembles the month’s pre-payroll ledger, diffs it against last month, and hands you a CSV with the outliers flagged.",
    "tools": [
      {
        "logo": "claude",
        "label": "Claude"
      },
      {
        "logo": "xero",
        "label": "Xero"
      },
      {
        "logo": "fortnox",
        "label": "Fortnox"
      }
    ],
    "hero": {
      "eyebrow": "Payroll & finance",
      "title": "Payroll variance report before you send it",
      "lede": "Ask Claude to assemble the pre-payroll ledger for the month from Taito.ai, diff it against last month, flag anomalies, and hand you a clean CSV to send your accounting firm.",
      "description": "A May payroll pre-check for 42 employees, diffed against April: 2 new hires, 1 leaver, 3 salary bumps, and 1 outlier flagged for review. The export, payroll-may.csv, is ready to send."
    },
    "how": {
      "eyebrow": "How it works",
      "title": "Perfect payroll, every time",
      "description": "One prompt on payroll day. Claude pulls the month’s inputs live, diffs them against last month, and hands you a CSV with the outliers flagged — the <a class=\"inline-link\" href=\"/agents\">agent</a> stops at review.",
      "features": [
        {
          "icon": "shield-alert",
          "title": "Fewer payroll surprises",
          "body": "Anomalies caught before the run, not after the complaint."
        },
        {
          "icon": "file-spreadsheet",
          "title": "A clean handoff to your accountant",
          "body": "A formatted CSV with the variances already explained, ready to email."
        },
        {
          "icon": "clock",
          "title": "You review the ledger instead of building it",
          "body": "The variance check is already done. Your job is the second look."
        }
      ],
      "snippetTitle": "Prompt",
      "snippet": "Prepare the May payroll ledger. Use Taito.ai MCP to pull:\n\n  – All active employees with their May employment state\n  – Approved time off and unpaid leave for the period\n  – Any salary changes effective in May\n  – One-off payments and reimbursements logged this month\n\nThen:\n  1. Build the pre-payroll ledger, per employee, per line item\n  2. Diff against April's payroll — call out any variance > 10%\n  3. Flag anything unusual: missing approvals, unbanked accounts, expired contracts\n  4. Export it as a clean CSV I can email to our accounting firm\n\nDo NOT run payroll. This is a pre-check for me to review before it goes out.",
      "chips": [
        {
          "logo": "claude",
          "label": "Claude"
        },
        {
          "logo": "taito",
          "label": "Taito.ai MCP"
        }
      ],
      "integrations": {
        "text": "Prefer a direct handoff? Taito.ai integrates natively with your payroll tools.",
        "logos": [
          "xero",
          "fortnox"
        ]
      }
    },
    "faqId": "payroll-prep-faq",
    "faq": [
      {
        "q": "Does this run payroll?",
        "a": "No. It assembles the ledger, checks it, and stops. Submitting to your provider stays a human action — the prompt says so explicitly, and the agent respects it."
      },
      {
        "q": "What counts as a variance?",
        "a": "You set the threshold. The example flags anything more than 10% off last month, plus missing approvals, unbanked accounts, and expired contracts."
      },
      {
        "q": "Will my accountant be able to use the export?",
        "a": "It is a plain per-employee, per-line-item CSV with the flagged rows called out, so it can go to your accounting firm as-is or be mapped into their template."
      }
    ],
    "relatedId": "related-payroll-prep",
    "related": [
      "sales-bonus-hubspot",
      "engineering-performance-review-linear",
      "gtm-performance-review-hubspot"
    ]
  },
  {
    "slug": "sales-bonus-hubspot",
    "category": "Payroll & finance",
    "title": "Quarterly sales bonuses, calculated from HubSpot",
    "blurb": "Claude reads each rep’s closed-won deals, applies the commission plan, and writes each payout to Taito.ai in time for payroll.",
    "tools": [
      {
        "logo": "claude",
        "label": "Claude"
      },
      {
        "logo": "hubspot",
        "label": "HubSpot"
      }
    ],
    "hero": {
      "eyebrow": "Payroll & finance",
      "title": "Quarterly sales bonuses, calculated from HubSpot",
      "lede": "Claude reads closed-won deals per rep from HubSpot, applies your commission plan, and — once you approve — writes each payout to Taito.ai for monthly payroll.",
      "description": "A Q2 sales commission summary. Marcus Bennett closed $412k for an $8,240 payout, Hannah Reid closed $357k for $7,140, and James Whitfield closed $298k for $5,960. The approved amounts are written to the Sales commission field in Taito.ai and routed to the July payroll run."
    },
    "how": {
      "eyebrow": "How it works",
      "title": "Commission that reconciles itself",
      "description": "One prompt at quarter close. Claude reads each rep’s closed-won deals live from HubSpot, applies the plan, and — on your approval — writes each payout to Taito.ai, where the <a class=\"inline-link\" href=\"/agents\">agent</a> stops at review.",
      "features": [
        {
          "icon": "calculator",
          "title": "Commission math you can trust",
          "body": "Pulled from live closed-won deals, the same plan applied to every rep, auditable line by line."
        },
        {
          "icon": "clipboard-check",
          "title": "No re-keying into payroll",
          "body": "Approved payouts land in the Sales commission field and flow straight into the monthly salary run."
        },
        {
          "icon": "clock",
          "title": "You review the numbers instead of building them",
          "body": "One prompt does the math. Your job is the sign-off — nothing is written back until you give it."
        }
      ],
      "snippetTitle": "Prompt",
      "snippet": "Set up Q2 sales commission from HubSpot and write it to Taito.ai.\n\nFirst, in Taito.ai:\n  – Add a \"Sales commission\" field under the Compensation section on employee profiles\n\nThen, for each rep on the Sales team:\n  – Pull closed-won deals for Apr 1 – Jun 30 from HubSpot\n  – Apply the commission plan:\n      · 2% base on all closed-won revenue\n      · 4% on the revenue between 100% and 125% of quota\n      · 6% on the revenue above 125% of quota\n\nThen:\n  1. Show me the per-rep breakdown for approval\n  2. On approval, write each payout to the \"Sales commission\" field in Taito.ai\n  3. Route it to the July payroll run so it flows into monthly salary\n\nWait for my sign-off before writing anything back.",
      "chips": [
        {
          "logo": "claude",
          "label": "Claude"
        },
        {
          "logo": "hubspot",
          "label": "HubSpot MCP"
        },
        {
          "logo": "taito",
          "label": "Taito.ai MCP"
        }
      ]
    },
    "faqId": "sales-bonus-faq",
    "faq": [
      {
        "q": "Does it pay commission automatically?",
        "a": "No. It calculates each payout and shows you the per-rep breakdown, then stops. Nothing is written to Taito.ai until you approve — the prompt says so explicitly, and the agent respects it."
      },
      {
        "q": "How does it handle accelerators?",
        "a": "You set the plan out in the prompt — a base rate plus accelerator tiers over quota. Claude applies the same tiers to every rep, so the math is consistent and reviewable line by line."
      },
      {
        "q": "How does the payout reach payroll?",
        "a": "On approval it writes each amount to the Sales commission field on the employee record in Taito.ai and tags it to the payroll run, so the number that goes out in monthly salary is the one you signed off."
      }
    ],
    "relatedId": "related-sales-bonus",
    "related": [
      "payroll-prep",
      "engineering-performance-review-linear",
      "gtm-performance-review-hubspot"
    ]
  },
  {
    "slug": "custom-people-apps-lovable",
    "category": "Custom apps & analytics",
    "title": "Ship a people dashboard in Lovable",
    "blurb": "Point Lovable at the Taito.ai MCP server and build the internal app your people team actually wants — no backend to write.",
    "tools": [
      {
        "logo": "lovable",
        "label": "Lovable"
      }
    ],
    "hero": {
      "eyebrow": "Custom apps & analytics",
      "title": "Ship a people dashboard in Lovable",
      "lede": "Want a view Taito.ai doesn’t ship out of the box — a hiring heatmap, a probation tracker? Point Lovable at the Taito.ai MCP server, describe what you want, and skip the backend entirely.",
      "description": "A probation tracker dashboard being built in Lovable and deployed to /probation, showing three active cases read live from Taito.ai over MCP: Sophie Lane, Software Engineer, on track with 42 days left; Marcus Bennett, Product Designer, needing a check-in with 11 days left; and James Whitfield, Senior AE, on track with 68 days left."
    },
    "how": {
      "eyebrow": "How it works",
      "title": "Internal apps without the backend",
      "description": "Describe the app; Lovable builds the UI against live records over MCP — no schema, no glue code, and the same permissions the <a class=\"inline-link\" href=\"/agents\">people agents</a> follow.",
      "features": [
        {
          "icon": "layout-dashboard",
          "title": "The internal app you actually wanted",
          "body": "A real app that reads live records, not a screenshot pasted into a Notion doc."
        },
        {
          "icon": "zap",
          "title": "No middleware to maintain",
          "body": "MCP is the API. Lovable is the UI. That’s the whole stack."
        },
        {
          "icon": "shield-check",
          "title": "Access control you don’t rebuild",
          "body": "Taito.ai’s permissions apply automatically, so there’s no separate role model in Lovable."
        }
      ],
      "snippetTitle": "Prompt",
      "snippet": "In Lovable:\n\nBuild me a \"Probation tracker\" dashboard for managers, with:\n  – Every employee currently on probation, grouped by manager\n  – Days remaining, current status (green / yellow / red), last check-in date\n  – A \"schedule check-in\" button that opens a calendar invite\n  – A weekly digest emailed to each manager\n\nConnect the app to the Taito.ai MCP server for all people data.\nAuth: use my Taito.ai workspace SSO — every user sees only their own reports.\n\nDeploy to /probation on our internal Lovable subdomain.",
      "chips": [
        {
          "logo": "lovable",
          "label": "Lovable"
        },
        {
          "logo": "taito",
          "label": "Taito.ai MCP"
        }
      ]
    },
    "faqId": "lovable-faq",
    "faq": [
      {
        "q": "Do I need to write any backend code?",
        "a": "No. The Taito.ai MCP server is the API, and Lovable builds the UI against it. There is no schema to model and no endpoint to host."
      },
      {
        "q": "Who can see the data inside the app?",
        "a": "Each viewer sees exactly what their Taito.ai permissions allow, because the app calls MCP as that person. You do not define a second role model in Lovable."
      },
      {
        "q": "What if I need data Taito.ai doesn’t show in its own UI?",
        "a": "If the app can do it, MCP exposes it — reads, writes, and actions all go through the same interface, so a custom view isn’t limited to what the standard screens display."
      }
    ],
    "relatedId": "related-lovable",
    "related": [
      "engineering-performance-review-linear",
      "gtm-performance-review-hubspot",
      "ask-hr-in-slack"
    ]
  }
];

export const calculators = {
  "holiday-pay-calculator": {
    "header": {
      "eyebrow": "Tools",
      "title": "Holiday pay calculator for irregular hours and variable pay",
      "id": "holiday-pay-calculator-heading",
      "desc": "gov.uk's holiday entitlement calculator tells you how many days or hours of leave a worker has built up — and stops there. This tool takes the next step: it works out how much that leave is worth under WTR 1998 reg 16, including the 52-week reference period, the conditional 104-week look-back, the reg 16(3ZA) pay components, and reg 15B's 12.07% accrual for irregular-hours and part-year workers.",
      "reviewed": {
        "label": "Last reviewed",
        "time": "26 August 2026",
        "datetime": "2026-08-26"
      }
    },
    "calc": {
      "eyebrow": "Calculator",
      "title": "How much holiday pay is owed for this period of leave?",
      "id": "calculator",
      "desc": "Choose the worker type first — it changes which fields matter and which rate applies. Enter the reference-period pay data newest week first, then the leave being paid now.",
      "fields": [
        {
          "tag": "select",
          "id": "hp-worker-type",
          "name": "workerType",
          "label": "Worker type",
          "hint": "Reg 15B workers do not get the 4-week (reg 13(1)) / 1.6-week (reg 13A(2)(e)) split — see the explainer below.",
          "options": [
            {
              "value": "regular",
              "label": "Regular hours and pay",
              "selected": true
            },
            {
              "value": "irregular-or-part-year",
              "label": "Irregular-hours or part-year worker (reg 15B)",
              "selected": false
            }
          ]
        },
        {
          "tag": "input",
          "id": "hp-employed-weeks",
          "type": "number",
          "name": "employedWeeks",
          "label": "Complete weeks employed at the calculation date",
          "value": "52",
          "min": "1",
          "step": "1",
          "hint": "Feeds reg 16(3)(e)(i): under 52 complete weeks, the reference period is the number of weeks actually employed.",
          "hintId": "hp-employed-weeks-hint"
        },
        {
          "tag": "textarea",
          "id": "hp-reference-data",
          "name": "referenceData",
          "label": "Reference-period pay data",
          "placeholder": "550\n550,35\n0,0,0",
          "rows": "8",
          "hint": "One line per week, newest week first: <code>pay</code>, or <code>pay,hours</code>, or <code>pay,hours,enhanced</code> (the reg 16(3ZA) portion of that week's pay). Enter <strong>0</strong> for a week in which no remuneration at all was payable. A week paid SSP or holiday pay is a paid week, not a zero-pay week.",
          "hintId": "hp-reference-data-hint"
        },
        {
          "tag": "input",
          "id": "hp-weeks-taken",
          "type": "number",
          "name": "weeksTaken",
          "label": "Weeks of statutory leave already taken this leave year",
          "value": "0",
          "min": "0",
          "max": "5.6",
          "step": "0.1",
          "hint": "Drives the 4-week boundary between reg 13 and reg 13A leave.",
          "group": "hp-regular-fields",
          "groupHidden": false
        },
        {
          "tag": "input",
          "id": "hp-weeks-of-leave",
          "type": "number",
          "name": "weeksOfLeave",
          "label": "Weeks of leave being paid now",
          "min": "0",
          "step": "0.1",
          "group": "hp-regular-fields",
          "groupHidden": false
        },
        {
          "tag": "input",
          "id": "hp-hours-of-leave",
          "type": "number",
          "name": "hoursOfLeave",
          "label": "Hours of leave being taken",
          "min": "0",
          "step": "0.5",
          "group": "hp-irregular-fields",
          "groupHidden": true
        },
        {
          "tag": "input",
          "id": "hp-hours-worked",
          "type": "number",
          "name": "hoursWorked",
          "label": "Hours worked in this pay period (optional)",
          "min": "0",
          "step": "0.5",
          "hint": "Only used to show the informational reg 15B(3)(b) accrual figure — 12.07% of hours worked.",
          "group": "hp-irregular-fields",
          "groupHidden": true
        },
        {
          "tag": "input",
          "id": "hp-remuneration",
          "type": "number",
          "name": "remuneration",
          "label": "Remuneration for work done in this pay period (optional)",
          "min": "0",
          "step": "1",
          "hint": "Only used to show the reg 16A(2) rolled-up pay alternative — lawful for reg 15B leave only.",
          "group": "hp-irregular-fields",
          "groupHidden": true
        }
      ],
      "extraButtons": [
        {
          "id": "hp-load-example",
          "label": "Load a worked example"
        }
      ],
      "submit": "Calculate holiday pay",
      "formId": "hp-form",
      "aside": "<h3 class=\"text-step-1 leading-heading font-heading text-ink\">How this calculator works</h3><p class=\"text-step--1 text-secondary-foreground\">The reference period is assembled week by week, ascending from the most recent complete week: any week supplied outside the employment window is discarded, any week with no remuneration payable is skipped and counted, and the walk stops once WTR 1998 reg 16(3)(e)(ii)<span class=\"source-tooltip-wrap\"><button type=\"button\" class=\"source-tooltip-trigger\" aria-label=\"Source: …in any other case, 52…\"><svg class=\"size-[1em] relative top-[0.1em]\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" aria-hidden=\"true\"><circle cx=\"8\" cy=\"8\" r=\"6.5\"></circle><path d=\"M8 7.2V11\" stroke-linecap=\"round\"></path><circle cx=\"8\" cy=\"5.2\" r=\"0.6\" fill=\"currentColor\" stroke=\"none\"></circle></svg></button><span class=\"source-tooltip\" role=\"tooltip\">…in any other case, 52…</span></span> paid weeks are found — or once the 104-week bound in WTR 1998 reg 16(3)(f)(i)<span class=\"source-tooltip-wrap\"><button type=\"button\" class=\"source-tooltip-trigger\" aria-label=\"Source: account were not to be taken of remuneration in weeks preceding the period of 104 weeks ending…\"><svg class=\"size-[1em] relative top-[0.1em]\" viewBox=\"0 0 16 16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" aria-hidden=\"true\"><circle cx=\"8\" cy=\"8\" r=\"6.5\"></circle><path d=\"M8 7.2V11\" stroke-linecap=\"round\"></path><circle cx=\"8\" cy=\"5.2\" r=\"0.6\" fill=\"currentColor\" stroke=\"none\"></circle></svg></button><span class=\"source-tooltip\" role=\"tooltip\">account were not to be taken of remuneration in weeks preceding the period of 104 weeks ending…</span></span> is reached, if a zero-pay week made that bound apply.</p><p class=\"text-step--1 text-secondary-foreground\">Every figure in the result carries the regulation it comes from. The verbatim statutory text sits behind the source markers on this page, and every regulation is linked to legislation.gov.uk in <a class=\"inline-link\" href=\"#sources\">Sources</a>.</p><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary\"><p class=\"text-step--2 text-secondary-foreground\">The result is indicative, not legal advice. It assumes one worker classification for the whole leave year and a reg-13-first ordering convention that the WTR does not itself specify — both disclosed in the notes under every result.</p>"
    },
    "sections": [
      {
        "eyebrow": "How the rules work",
        "title": "What should you understand behind the calculator?",
        "id": "explainers",
        "desc": null,
        "body": "<div class=\"col-span-12 @4xl:col-span-9 flex flex-col\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"reference-period\" class=\"text-step-1 leading-heading font-heading text-ink\">What is the 52-week reference period, and when does the 104-week look-back apply?</h3><div class=\"flex flex-col gap-space-s text-step-0 leading-normal text-secondary-foreground [&amp;_ul]:list-disc [&amp;_ul]:pl-space-m [&amp;_li]:mt-space-3xs\"><p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit.</p><p>Esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem <strong>no remuneration at all was payable</strong> ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor.</p></div></div><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary my-space-l\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"accrual-1207\" class=\"text-step-1 leading-heading font-heading text-ink\">How does 12.07% accrual work for irregular-hours and part-year workers?</h3><div class=\"flex flex-col gap-space-s text-step-0 leading-normal text-secondary-foreground [&amp;_ul]:list-disc [&amp;_ul]:pl-space-m [&amp;_li]:mt-space-3xs\"><p>Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in.</p><p>Voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p><p>A fractional hour of 30 minutes or more rounds up to a full hour; anything less is dropped (reg 15B(5)).</p><p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p><p>Cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.</p></div></div><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary my-space-l\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"enhanced-components\" class=\"text-step-1 leading-heading font-heading text-ink\">Which payments must be included in a week's pay?</h3><div class=\"flex flex-col gap-space-s text-step-0 leading-normal text-secondary-foreground [&amp;_ul]:list-disc [&amp;_ul]:pl-space-m [&amp;_li]:mt-space-3xs\"><p>WTR reg 16(3ZA) requires three kinds of payment to be included in a week's pay for entitlement under regs 13 and 15B:</p><ul><li><strong>Task-linked commission</strong> Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non</li><li><strong>Status, seniority or professional/personal qualification payments</strong> Proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</li><li><strong>Regularly paid overtime</strong> (WTR 1998 reg 16(3ZA)(c)): “other payments, such as overtime payments, which have been regularly paid to a worker in the 52 weeks preceding the calculation date.”</li></ul><p>Reg 13A leave (the additional 1.6 weeks) is absent from that list — see the next question for what that means in practice.</p></div></div><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary my-space-l\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"four-vs-1point6\" class=\"text-step-1 leading-heading font-heading text-ink\">Why is the first 4 weeks paid differently from the remaining 1.6?</h3><div class=\"flex flex-col gap-space-s text-step-0 leading-normal text-secondary-foreground [&amp;_ul]:list-disc [&amp;_ul]:pl-space-m [&amp;_li]:mt-space-3xs\"><p>Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit.</p><p>Esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris.</p><p>Nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit.</p></div></div><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary my-space-l\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"record-keeping\" class=\"text-step-1 leading-heading font-heading text-ink\">What must you actually keep on record?</h3><div class=\"flex flex-col gap-space-s text-step-0 leading-normal text-secondary-foreground [&amp;_ul]:list-disc [&amp;_ul]:pl-space-m [&amp;_li]:mt-space-3xs\"><p>Two commonly cited retention duties do not, on their statutory text, cover holiday pay:</p><ul>\n        <li>WTR reg 9 requires two years' records, but only for the 48-hour average working-time limit, night work, and health assessments — annual leave and holiday pay are not in reg 9's list.</li>\n        <li>National Minimum Wage Regulations 2015 reg 59 requires six years' records, but only for national minimum wage compliance — holiday pay is not mentioned.</li>\n      </ul><p>Amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt.</p><p>Nothing else about record retention is stated here, because nothing else is primary-source verifiable.</p></div></div></div>"
      },
      {
        "eyebrow": "Quantity, not money",
        "title": "How many days of holiday has the worker accrued?",
        "id": "entitlement-quantity",
        "desc": "This calculator answers the money question — it does not calculate accrued entitlement in days or hours.",
        "body": "<div class=\"col-span-12 @4xl:col-span-9 flex flex-col gap-space-s\"><p class=\"text-step-0 leading-normal text-secondary-foreground\">In culpa qui officia deserunt mollit anim id est: <a class=\"inline-link\" href=\"https://www.gov.uk/calculate-your-holiday-entitlement\" rel=\"noopener\">Calculate your holiday entitlement</a>laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit.</p></div>"
      },
      {
        "eyebrow": "Sources",
        "title": "What does the calculator build on?",
        "id": "sources",
        "desc": "Every rule in this calculator comes from the wording of the Working Time Regulations 1998 (SI 1998/1833), the Employment Rights Act 1996, and the National Minimum Wage Regulations 2015, plus gov.uk's own guidance layer. Direct links to primary sources below.",
        "body": "<ul class=\"col-span-12 @4xl:col-span-8 flex flex-col gap-space-s\"><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/uksi/1998/1833\" rel=\"noopener\">Working Time Regulations 1998 (SI 1998/1833) — consolidated text, legislation.gov.uk</a><span class=\"text-step--1 text-secondary-foreground\">The whole instrument. Regulation anchors used in this calculator: 9, 13, 13A, 15B, 16, 16A.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/uksi/1998/1833/regulation/13\" rel=\"noopener\">WTR 1998 reg 13 — entitlement to annual leave</a><span class=\"text-step--1 text-secondary-foreground\">Four weeks' annual leave in each leave year.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/uksi/1998/1833/regulation/13A\" rel=\"noopener\">WTR 1998 reg 13A — additional annual leave</a><span class=\"text-step--1 text-secondary-foreground\">1.6 additional weeks, aggregate entitlement capped at 28 days.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/uksi/1998/1833/regulation/15B\" rel=\"noopener\">WTR 1998 reg 15B — leave accrued during a leave year for irregular hours and part-year workers</a><span class=\"text-step--1 text-secondary-foreground\">12.07% accrual rate, 28-day annual cap, 30-minute rounding rule.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/uksi/1998/1833/regulation/16\" rel=\"noopener\">WTR 1998 reg 16 — payment in respect of a worker's leave</a><span class=\"text-step--1 text-secondary-foreground\">A week's pay rules, the 52-week reference period, the conditional 104-week look-back, and the reg 16(3ZA) enhanced-pay components.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/uksi/1998/1833/regulation/16A\" rel=\"noopener\">WTR 1998 reg 16A — rolled-up holiday pay</a><span class=\"text-step--1 text-secondary-foreground\">12.07% uplift alternative for reg 15B leave, and the itemised pay statement disclosure duty.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/uksi/1998/1833/regulation/9\" rel=\"noopener\">WTR 1998 reg 9 — records</a><span class=\"text-step--1 text-secondary-foreground\">Two-year record duty — covers the 48-hour average limit, night work and health assessments only. Holiday pay is not in this list.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/ukpga/1996/18/section/8\" rel=\"noopener\">Employment Rights Act 1996 s.8 — itemised pay statement</a><span class=\"text-step--1 text-secondary-foreground\">Right to a written itemised pay statement at or before payment. Silent on retention.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/uksi/2015/621/regulation/59\" rel=\"noopener\">National Minimum Wage Regulations 2015 reg 59 — records</a><span class=\"text-step--1 text-secondary-foreground\">Six-year record duty — covers national minimum wage compliance only. Holiday pay is not mentioned.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.gov.uk/calculate-your-holiday-entitlement\" rel=\"noopener\">gov.uk — Calculate your holiday entitlement</a><span class=\"text-step--1 text-secondary-foreground\">Returns a quantity of leave (days/hours), never a monetary figure — the complement this calculator is built to fill.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.gov.uk/government/publications/calculating-holiday-pay-for-workers-without-fixed-hours-or-pay\" rel=\"noopener\">gov.uk — Calculating holiday pay for workers without fixed hours or pay</a><span class=\"text-step--1 text-secondary-foreground\">Guidance layer over reg 15B/16A. No record-keeping or retention language on this page.</span></li></ul>\n<div class=\"col-span-12 @4xl:col-span-8 mt-space-m flex flex-col gap-space-s\"><p class=\"text-step--1 text-secondary-foreground\"><strong class=\"font-medium text-primary-foreground\">A collective or contractual agreement can be better than the WTR.</strong>Esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p><p class=\"text-step--1 text-secondary-foreground\"><strong class=\"font-medium text-primary-foreground\">The result is indicative, not legal advice.</strong>Incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit <a class=\"inline-link\" href=\"https://www.gov.uk/calculate-your-holiday-entitlement\" rel=\"noopener\">holiday entitlement calculator</a>anim id est laborum lorem ipsum dolor sit amet <a class=\"inline-link\" href=\"/tools/feriepengekalkulator\">feriepengekalkulator</a> consectetur <a class=\"inline-link\" href=\"/tools/vuosilomalaskuri\">vuosilomalaskuri</a>adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore <a class=\"inline-link\" href=\"/compliance/uk\">UK employment compliance</a>magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor <a class=\"inline-link\" href=\"/waitlist\">join the waitlist</a> in reprehenderit in voluptate.</p></div>"
      }
    ]
  },
  "statutory-sick-pay-calculator": {
    "header": {
      "eyebrow": "Tools",
      "title": "Statutory sick pay calculator for employers",
      "id": "ssp-calculator-heading",
      "desc": "Calculate SSP owed for one employee under the rules that took effect on 6 April 2026 — no waiting days to subtract, no lower earnings limit to check, just the lower of £123.25 and 80% of normal weekly earnings, divided by qualifying days, capped at 28 times the applicable weekly rate. Every figure below traces to a statute or SI cited in full further down the page.",
      "reviewed": null
    },
    "calc": {
      "eyebrow": "Calculator",
      "title": "How much SSP must an employer pay?",
      "id": "ssp-calculator",
      "desc": "Enter the first day of sickness absence, normal weekly earnings, qualifying days a week, and qualifying days of absence. The calculator shows the weekly rate applied, the daily rate, and whether the 28-times-weekly-rate limit was reached.",
      "fields": [
        {
          "tag": "input",
          "id": "ssp-absence-start-date",
          "type": "date",
          "name": "absenceStartDate",
          "label": "First day of sickness absence",
          "hint": "Absences starting before 6 April 2026 run on transitional rules this calculator does not compute — see below.",
          "hintId": "ssp-absence-start-date-hint"
        },
        {
          "tag": "input",
          "id": "ssp-normal-weekly-earnings",
          "type": "number",
          "name": "normalWeeklyEarnings",
          "label": "Normal weekly earnings (£)",
          "min": "0",
          "step": "0.01",
          "hint": "From the relevant period in SI 1982/894 reg 19(3), anchored to normal pay days around the critical date — not simply the 8 weeks before the absence, which is ACAS's simplification of it. £0 is not an error: there is no lower earnings limit post-reform.",
          "hintId": "ssp-normal-weekly-earnings-hint"
        },
        {
          "tag": "input",
          "id": "ssp-qualifying-days-per-week",
          "type": "number",
          "name": "qualifyingDaysPerWeek",
          "label": "Qualifying days a week",
          "value": "5",
          "min": "1",
          "max": "7",
          "step": "1",
          "hint": "Agreed between employer and employee for the week beginning with Sunday (s.157(3)) — the weekly rate is divided by this number, never by 7.",
          "hintId": "ssp-qualifying-days-per-week-hint"
        },
        {
          "tag": "input",
          "id": "ssp-qualifying-days-absent",
          "type": "number",
          "name": "qualifyingDaysAbsent",
          "label": "Qualifying days of absence",
          "min": "0",
          "step": "1",
          "hint": "Counted from the first qualifying day of the absence — there are no waiting days to subtract.",
          "hintId": "ssp-qualifying-days-absent-hint"
        }
      ],
      "extraButtons": [],
      "submit": "Calculate SSP owed",
      "formId": "ssp-form",
      "aside": "<h3 class=\"text-step-1 leading-heading font-heading text-ink\">No waiting days. No lower earnings limit.</h3><p class=\"text-step--1 text-secondary-foreground\">Pre-April-2026 calculators ask you for both. Neither exists in law any more: ERA 2025 s.10 omitted SSCBA s.155(1) and re-anchored the period of entitlement to the first qualifying day; s.11(3) deleted the lower-earnings-limit bar from Schedule 11. If a calculator still asks, it is computing a repealed regime.</p><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary\"><p class=\"text-step--2 text-secondary-foreground\">Last reviewed <time datetime=\"2026-08-26\">26 August 2026</time> against the primary sources listed below.</p>"
    },
    "sections": [
      {
        "eyebrow": "Method",
        "title": "How do you calculate the SSP daily rate?",
        "id": "daily-rate",
        "desc": null,
        "body": "<div class=\"col-span-12 @4xl:col-span-9 flex flex-col gap-space-s\"><p class=\"text-step-0 leading-normal text-secondary-foreground\">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p class=\"text-step--2 text-secondary-foreground\">Sources: <a class=\"inline-link\" href=\"https://www.legislation.gov.uk/ukpga/1992/4/section/157\" rel=\"noopener\">SSCBA 1992 s.157</a> · <a class=\"inline-link\" href=\"https://www.legislation.gov.uk/ukpga/1992/4/section/155\" rel=\"noopener\">SSCBA 1992 s.155</a> · <a class=\"inline-link\" href=\"https://www.legislation.gov.uk/uksi/1982/894/regulation/19\" rel=\"noopener\">SI 1982/894 reg 19</a></p></div>"
      },
      {
        "eyebrow": "Rates 2026/27",
        "title": "What are the SSP rates for 2026/27?",
        "id": "rates-2026-27",
        "desc": null,
        "body": "<div class=\"col-span-12 @4xl:col-span-9 flex flex-col gap-space-s\"><p class=\"text-step-0 leading-normal text-secondary-foreground\">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">In culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit.</p><p class=\"text-step--2 text-secondary-foreground\">Sources: <a class=\"inline-link\" href=\"https://www.legislation.gov.uk/ukpga/1992/4/section/157\" rel=\"noopener\">SSCBA 1992 s.157</a> · <a class=\"inline-link\" href=\"https://www.legislation.gov.uk/uksi/2026/148/article/8\" rel=\"noopener\">SI 2026/148 art. 8</a> · <a class=\"inline-link\" href=\"https://www.legislation.gov.uk/ukpga/1992/4/section/155\" rel=\"noopener\">SSCBA 1992 s.155</a></p></div>"
      },
      {
        "eyebrow": "Day-one entitlement",
        "title": "Does SSP start on day one now that waiting days are gone?",
        "id": "day-one",
        "desc": null,
        "body": "<div class=\"col-span-12 @4xl:col-span-9 flex flex-col gap-space-s\"><p class=\"text-step-0 leading-normal text-secondary-foreground\">Esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">If a calculator still asks for waiting days or gates eligibility on a minimum earnings figure, it is computing a repealed regime.</p><p class=\"text-step--2 text-secondary-foreground\">Sources: <a class=\"inline-link\" href=\"https://www.legislation.gov.uk/ukpga/2025/36/section/10\" rel=\"noopener\">ERA 2025 s.10</a> · <a class=\"inline-link\" href=\"https://www.legislation.gov.uk/ukpga/2025/36/section/11\" rel=\"noopener\">ERA 2025 s.11</a> · <a class=\"inline-link\" href=\"https://www.legislation.gov.uk/uksi/2026/373/made\" rel=\"noopener\">SI 2026/373</a></p></div>"
      },
      {
        "eyebrow": "Transitional cases",
        "title": "What if the absence started before 6 April 2026?",
        "id": "pre-6-april-2026",
        "desc": null,
        "body": "<div class=\"col-span-12 @4xl:col-span-9 flex flex-col gap-space-s\"><p class=\"text-step-0 leading-normal text-secondary-foreground\">Eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">None of these three regimes is computed here. If an absence spans 6 April 2026, check the case manually against SI 2026/373 regs 3, 4 and 5, or take advice.</p><p class=\"text-step--2 text-secondary-foreground\">Sources: <a class=\"inline-link\" href=\"https://www.legislation.gov.uk/uksi/2026/373/made\" rel=\"noopener\">SI 2026/373</a> · <a class=\"inline-link\" href=\"https://www.legislation.gov.uk/uksi/2026/210/made\" rel=\"noopener\">SI 2026/210</a> · <a class=\"inline-link\" href=\"https://www.legislation.gov.uk/uksi/1982/894/regulation/19\" rel=\"noopener\">SI 1982/894 reg 19</a></p></div>"
      },
      {
        "eyebrow": "Sources",
        "title": "What does this calculator rely on?",
        "id": "ssp-sources",
        "desc": "Every rate, threshold and date in the calculator above traces to one of the sources below. Last reviewed <time datetime=\"2026-08-26\">26 August 2026</time>.",
        "body": "<ul class=\"col-span-12 @4xl:col-span-8 flex flex-col gap-space-s\"><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/ukpga/2025/36\" rel=\"noopener\">Employment Rights Act 2025 (c. 36)</a><span class=\"text-step--1 text-secondary-foreground\">The reforming Act. c. 36 — never c. 32, a different, unrelated Act.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/ukpga/2025/36/section/10\" rel=\"noopener\">ERA 2025 s.10 — removal of waiting period</a><span class=\"text-step--1 text-secondary-foreground\">Omits SSCBA 1992 s.155(1) and re-anchors the period of entitlement and qualifying days to the first qualifying day.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/ukpga/2025/36/section/11\" rel=\"noopener\">ERA 2025 s.11 — lower earnings limit and rate</a><span class=\"text-step--1 text-secondary-foreground\">s.11(3) omits the lower-earnings-limit bar from SSCBA Sch. 11 para. 2(c); s.11(2) substitutes the lower-of rate test in SSCBA s.157(1).</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/ukpga/1992/4/section/157\" rel=\"noopener\">SSCBA 1992 s.157 — rate of payment</a><span class=\"text-step--1 text-secondary-foreground\">The weekly rate (the lower of £123.25 and 80% of normal weekly earnings) and the daily apportionment by qualifying days in the week.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/ukpga/1992/4/section/155\" rel=\"noopener\">SSCBA 1992 s.155 — limitations on entitlement</a><span class=\"text-step--1 text-secondary-foreground\">The entitlement limit — 28 times the weekly rate applicable, reached on the day the aggregate first reaches or passes it.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/ukpga/1992/4/section/154\" rel=\"noopener\">SSCBA 1992 ss.151–154 — liability, incapacity, entitlement, qualifying days</a><span class=\"text-step--1 text-secondary-foreground\">Qualifying days are agreed between employer and employee; SSP is only payable on qualifying days.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/uksi/2026/148/article/8\" rel=\"noopener\">SI 2026/148 art. 8 — the source of £123.25</a><span class=\"text-step--1 text-secondary-foreground\">The Social Security Benefits Up-rating Order 2026 substitutes £123.25 for £118.75 in SSCBA s.157(1) — the general rate, not SI 2026/373.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/uksi/2026/373/made\" rel=\"noopener\">SI 2026/373 — commencement and transitional provisions</a><span class=\"text-step--1 text-secondary-foreground\">Commences ERA 2025 ss.10–13 on 6 April 2026 (reg 2) and sets the three transitional regimes for illness spanning the reform (regs 3, 4, 5).</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/uksi/2026/210/made\" rel=\"noopener\">SI 2026/210 — consequential amendments</a><span class=\"text-step--1 text-secondary-foreground\">Strips the obsolete \"fourth day\" and sub-LEL critical-date wording from the SSP (General) Regulations 1982, regs 15(2)(b) and 19(2).</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.legislation.gov.uk/uksi/1982/894/regulation/19\" rel=\"noopener\">SI 1982/894 reg 19 — normal weekly earnings</a><span class=\"text-step--1 text-secondary-foreground\">The relevant period is at least 8 weeks, anchored to the last normal pay day before the critical date, not a calendar lookback from the absence.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.gov.uk/employers-sick-pay\" rel=\"noopener\">gov.uk — Statutory Sick Pay: employer guide</a><span class=\"text-step--1 text-secondary-foreground\">Guidance layer, not statute. Confirms £123.25 or 80% of average weekly earnings, whichever is lower, for up to 28 weeks.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.acas.org.uk/checking-sick-pay/statutory-sick-pay-ssp\" rel=\"noopener\">ACAS — Statutory Sick Pay (SSP)</a><span class=\"text-step--1 text-secondary-foreground\">Guidance layer, not statute. Its \"8 weeks before the sickness absence\" phrasing simplifies reg 19(3)'s pay-day-anchored relevant period.</span></li></ul>\n<div class=\"col-span-12 @4xl:col-span-8 mt-space-m flex flex-col gap-space-s\"><p class=\"text-step--1 text-secondary-foreground\"><strong class=\"font-medium text-primary-foreground\">This calculator does not compute Northern Ireland mirror provisions.</strong> Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet.</p><p class=\"text-step--1 text-secondary-foreground\"><strong class=\"font-medium text-primary-foreground\">The result is guidance, not legal advice.</strong> Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem <a class=\"inline-link\" href=\"/compliance/uk#sick-pay\">What must an employer pay for sick leave?</a> ipsum dolor sit amet consectetur adipiscing elit sed do <a class=\"inline-link\" href=\"/compliance/uk\">UK employment compliance</a>eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <a class=\"inline-link\" href=\"/waitlist\">join the waitlist</a> commodo consequat duis aute.</p></div>"
      }
    ]
  },
  "feriepengekalkulator": {
    "header": {
      "eyebrow": "Verktøy",
      "title": "Feriepengekalkulator for arbeidsgivere",
      "id": "feriepengekalkulator-heading",
      "desc": "Beregn feriepenger for én ansatt etter ferieloven § 10 — lovens 10,2 %, den tariffavtalte 12 %-satsen ved fem ferieuker, og 2,3 prosentpoeng-tillegget for ansatte over 60 år. Kalkulatoren viser grunnsatsdelen og over 60-tillegget som to separate tall, fordi 6G-taket etter § 10 nr. 3 bare gjelder tillegget — ikke hele feriepengesummen.",
      "reviewed": null
    },
    "calc": {
      "eyebrow": "Kalkulator",
      "title": "Hvor mye skal en ansatt ha i feriepenger?",
      "id": "kalkulator",
      "desc": "Fyll inn feriepengegrunnlaget, velg om fem ukers ferie gjelder, og merk av hvis den ansatte fyller 60 år i løpet av ferieåret. Resultatet viser grunnbeløp og eventuelt over 60-tillegg hver for seg.",
      "fields": [
        {
          "tag": "input",
          "id": "fp-grunnlag",
          "type": "number",
          "name": "grunnlag",
          "label": "Feriepengegrunnlag (kr)",
          "min": "0",
          "step": "1",
          "hint": "Arbeidsvederlag utbetalt i opptjeningsåret — ekskluder tidligere utbetalte feriepenger, nettoresultatandel, fast godtgjøring uavhengig av fravær, og naturalytelser unntatt kostpenger (§ 10 nr. 1).",
          "hintId": "fp-grunnlag-hint"
        },
        {
          "tag": "select",
          "id": "fp-ferieuker",
          "name": "ferieuker",
          "label": "Antall ferieuker",
          "hint": "12 %-satsen er ikke lovbestemt — den gjelder kun når tariffavtale eller egen praksis faktisk gir fem ferieuker.",
          "options": [
            {
              "value": "lovens-minimum",
              "label": "25 virkedager — lovens minimum (10,2 %)",
              "selected": true
            },
            {
              "value": "fem-uker",
              "label": "30 virkedager — fem uker etter tariffavtale (12 %)",
              "selected": false
            }
          ]
        },
        {
          "tag": "input",
          "id": "fp-over60",
          "type": "checkbox",
          "name": "over60",
          "label": "Fyller 60 år i løpet av ferieåret"
        },
        {
          "tag": "input",
          "id": "fp-grunnbelop",
          "type": "number",
          "name": "grunnbelop",
          "label": "Grunnbeløp G (kr)",
          "value": "136549",
          "min": "1",
          "step": "1",
          "hint": "Bruk G slik det var 31. desember i opptjeningsåret (eller ved fratredelse) — ikke nødvendigvis dagens G (§ 10 nr. 3).",
          "hintId": "fp-grunnbelop-hint"
        }
      ],
      "extraButtons": [],
      "submit": "Beregn feriepenger",
      "formId": "feriepenger-form",
      "aside": "<h3 class=\"text-step-1 leading-heading font-heading text-ink\">6G-taket gjelder kun tillegget</h3><p class=\"text-step--1 text-secondary-foreground\">Den vanligste feilen i feriepengeberegning: å tro at 6G begrenser hele feriepengesummen for ansatte over 60. Ferieloven § 10 nr. 3 sier at kun tillegget på 2,3 prosentpoeng er begrenset til 6G — lovens grunnsats på 10,2 % (eller 12 % ved fem ukers avtale) beregnes av hele grunnlaget uten tak.</p><p class=\"text-step--1 text-secondary-foreground\">Kalkulatoren viser derfor grunnbeløp og tillegg som to separate linjer i stedet for én sum, slik at splitten er synlig i resultatet, ikke bare i loven.</p><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary\"><p class=\"text-step--2 text-secondary-foreground\">Tariffavtalen kan gi bedre vilkår enn loven — flere ferieuker, høyere sats. Sjekk alltid hva som faktisk gjelder for din virksomhet ved siden av kalkulatorens resultat.</p>"
    },
    "sections": [
      {
        "eyebrow": "Ofte stilte spørsmål",
        "title": "Hva bør du forstå bak kalkulatoren?",
        "id": "ofte-stilt",
        "desc": null,
        "body": "<div class=\"col-span-12 @4xl:col-span-9 flex flex-col\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"hvorfor-to-tall\" class=\"text-step-1 leading-heading font-heading text-ink\">Hvorfor er 10,2 % og 12 % begge «riktige» tall?</h3><p class=\"text-step-0 leading-normal text-secondary-foreground\">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in.</p></div><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary my-space-l\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"6g-taket\" class=\"text-step-1 leading-heading font-heading text-ink\">Hvorfor gjelder 6G-taket bare for ansatte over 60 år — og bare for tillegget?</h3><p class=\"text-step-0 leading-normal text-secondary-foreground\">Voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p></div><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary my-space-l\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"grunnbelopet\" class=\"text-step-1 leading-heading font-heading text-ink\">Hvilket grunnbeløp (G) skal jeg bruke?</h3><p class=\"text-step-0 leading-normal text-secondary-foreground\">Incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut.</p></div></div>"
      },
      {
        "eyebrow": "Kilder",
        "title": "Hva bygger kalkulatoren på?",
        "id": "kilder",
        "desc": "Alle regler i kalkulatoren kommer fra ferieloven 29.04.1988 nr. 21 sin ordlyd, samt Arbeidstilsynets og Altinns dokumentasjon av tariffavtalt praksis. Direkte lenker til primærkildene under.",
        "body": "<ul class=\"col-span-12 @4xl:col-span-8 flex flex-col gap-space-s\"><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://lovdata.no/dokument/NL/lov/1988-04-29-21\" rel=\"noopener\">Ferieloven 1988-04-29-21 (konsolidert tekst, Lovdata)</a><span class=\"text-step--1 text-secondary-foreground\">Hele loven. Paragrafankere brukt i kalkulatoren: § 5 (feriefritid og over 60 år), § 10 (feriepengegrunnlag og satser), § 11 (utbetaling og sluttoppgjør).</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://lovdata.no/dokument/NL/lov/1988-04-29-21/KAPITTEL_3#§10\" rel=\"noopener\">Ferieloven § 10 — feriepenger</a><span class=\"text-step--1 text-secondary-foreground\">10,2 % lovbestemt sats (nr. 2), 2,3 prosentpoeng tillegg for over 60 år begrenset til 6G (nr. 3).</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://lovdata.no/dokument/NL/lov/1988-04-29-21/KAPITTEL_2#§5\" rel=\"noopener\">Ferieloven § 5 — feriefritidens lengde</a><span class=\"text-step--1 text-secondary-foreground\">25 virkedager for alle ansatte, 6 ekstra virkedager for ansatte over 60 år.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.arbeidstilsynet.no/arbeidstid-og-organisering/ferie/feriepenger/\" rel=\"noopener\">Arbeidstilsynet — Feriepenger</a><span class=\"text-step--1 text-secondary-foreground\">Dokumenterer 12 % og 14,3 % som praksis ved fem ukers tariffavtalt ferie — ikke lovtekst.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://info.altinn.no/starte-og-drive/arbeidsforhold/lonn/feriepenger/\" rel=\"noopener\">Altinn — Feriepenger</a><span class=\"text-step--1 text-secondary-foreground\">Samme 12 %/14,3 %-dokumentasjon fra det offentlige veiledningstilbudet for arbeidsgivere.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.nav.no/grunnbelopet\" rel=\"noopener\">NAV — Grunnbeløpet</a><span class=\"text-step--1 text-secondary-foreground\">Gjeldende og historiske grunnbeløp (G). G per 1. mai 2026 er 136 549 kroner.</span></li></ul>\n<div class=\"col-span-12 @4xl:col-span-8 mt-space-m flex flex-col gap-space-s\"><p class=\"text-step--1 text-secondary-foreground\"><strong class=\"font-medium text-primary-foreground\">Tariffavtalen kan være bedre enn loven.</strong> Aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.</p><p class=\"text-step--1 text-secondary-foreground\"><strong class=\"font-medium text-primary-foreground\">Resultatet er veiledende, ikke juridisk rådgivning.</strong> Deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa <a class=\"inline-link\" href=\"/no/compliance/norway#annual-leave\">Norsk arbeidsrett for arbeidsgivere</a>qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor <a class=\"inline-link\" href=\"/waitlist\">meld interesse</a> incididunt ut labore et.</p></div>"
      }
    ]
  },
  "semesterdagar-raknare": {
    "header": {
      "eyebrow": "Verktyg",
      "title": "Semesterdagar-räknare",
      "id": "semesterdagar-raknare-heading",
      "desc": "Räkna ut semesterlön till anställd: hur många betalda semesterdagar en anställd tjänat in under ett intjänandeår, och semesterlönen enligt sammalöneregeln eller procentregeln. Räknaren följer semesterlagens (1977:480) formuleringar — nämnaren i 7 § är det faktiska antalet dagar under intjänandeåret, inte en fast siffra. Varje regel länkas till källförteckningen nedan.",
      "reviewed": null
    },
    "calc": {
      "eyebrow": "Räknare",
      "title": "Hur många semesterdagar har en anställd tjänat in?",
      "id": "raknare",
      "desc": "Fyll i anställningens startdatum, välj semesterår och ange eventuell obetald, ej semesterlönegrundande frånvaro. Räknaren visar betalda och obetalda semesterdagar, hur många som får sparas, och semesterlönen enligt vald modell.",
      "fields": [
        {
          "tag": "input",
          "id": "sm-start",
          "type": "date",
          "name": "start",
          "label": "Anställningens startdatum",
          "hint": "Avgör hur stor del av intjänandeåret som räknas som anställningstid.",
          "hintId": "sm-start-hint"
        },
        {
          "tag": "input",
          "id": "sm-end",
          "type": "date",
          "name": "end",
          "label": "Anställningens slutdatum (valfritt)",
          "hint": "Lämna tomt om anställningen fortfarande pågår.",
          "hintId": "sm-end-hint"
        },
        {
          "tag": "select",
          "id": "sm-year",
          "name": "year",
          "label": "Semesterår",
          "hint": "Semesteråret är 1 april–31 mars, inte kalenderåret (3 §). Intjänandeåret är den föregående tolvmånadersperioden.",
          "hintId": "sm-year-hint",
          "options": [
            {
              "value": "2025",
              "label": "2024-04-01–2025-03-31",
              "selected": false
            },
            {
              "value": "2026",
              "label": "2025-04-01–2026-03-31",
              "selected": false
            },
            {
              "value": "2027",
              "label": "2026-04-01–2027-03-31",
              "selected": true
            },
            {
              "value": "2028",
              "label": "2027-04-01–2028-03-31",
              "selected": false
            }
          ]
        },
        {
          "tag": "input",
          "id": "sm-absence",
          "type": "number",
          "name": "absence",
          "label": "Dagar med obetald, ej semesterlönegrundande frånvaro",
          "value": "0",
          "min": "0",
          "step": "1",
          "hint": "Frånvaro som inte är semesterlönegrundande minskar antalet betalda semesterdagar (7 §).",
          "hintId": "sm-absence-hint"
        },
        {
          "tag": "input",
          "id": "sm-sysselsattningsgrad",
          "type": "checkbox",
          "label": "Sysselsättningsgraden har ändrats under intjänandeåret"
        },
        {
          "tag": "input",
          "id": "sm-non-qualifying-absence",
          "type": "checkbox",
          "label": "Det har förekommit obetald frånvaro som inte är semesterlönegrundande"
        },
        {
          "tag": "select",
          "id": "sm-model",
          "name": "model",
          "label": "Beräkningsmodell",
          "options": [
            {
              "value": "sammalone",
              "label": "Sammalöneregeln — semestertillägg 0,43 % (16 a §)",
              "selected": true
            },
            {
              "value": "procentregeln",
              "label": "Procentregeln — 12 % av förfallen lön (16 b §)",
              "selected": false
            }
          ]
        },
        {
          "tag": "input",
          "id": "sm-salary",
          "type": "number",
          "name": "salary",
          "label": "Månadslön (kr)",
          "min": "0",
          "step": "1",
          "group": "sm-salary-field",
          "groupHidden": false
        },
        {
          "tag": "input",
          "id": "sm-forfallen-lon",
          "type": "number",
          "name": "forfallenLon",
          "label": "Förfallen lön under intjänandeåret (kr)",
          "min": "0",
          "step": "1",
          "group": "sm-forfallen-lon-field",
          "groupHidden": true
        }
      ],
      "extraButtons": [],
      "submit": "Räkna ut semesterdagar",
      "formId": "semester-form",
      "aside": "<h3 class=\"text-step-1 leading-heading font-heading text-ink\">Två saker som ofta blandas ihop</h3><p class=\"text-step--1 text-secondary-foreground\"><strong class=\"font-medium text-primary-foreground\">Karensavdrag är inte karensdag.</strong> Det gamla begreppet karensdag ersattes av karensavdrag redan 2019-01-01. Karensavdraget är 20 % av en genomsnittlig veckas sjuklön, inte en hel obetald dag — se guiden om <a class=\"inline-link\" href=\"/sv/compliance/sweden#sick-pay\">sjuklön dag 1–14</a>.</p><p class=\"text-step--1 text-secondary-foreground\"><strong class=\"font-medium text-primary-foreground\">Kollektivavtal ger ofta mer än 25 dagar.</strong> Semesterlagen sätter en lägstanivå. Ett tillämpligt kollektivavtal kan ge fler semesterdagar och en egen modell för semesterlön — kontrollera alltid ditt kollektivavtal innan du litar på räknarens siffra.</p><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary\"><p class=\"text-step--2 text-secondary-foreground\"><strong class=\"font-medium text-primary-foreground\">Vägledande, inte juridisk rådgivning.</strong> Räknaren modellerar inte femdagarsregeln för den som påbörjar anställningen efter den 31 augusti under semesteråret (4 §), anställning under tre månader (5 §), sjukdom under semestern och dess påverkan på semesterlönegrundande frånvaro (15 §, 17 §:s 180-dagarsgräns), sparade dagar som förts över från tidigare år, eller procentsatsen för fler än 25 avtalade semesterdagar — den siffran är inte tillräckligt källbelagd för att räknas ut här. Restriktionen till 25 dagar är medveten.</p>"
    },
    "sections": [
      {
        "eyebrow": "Vanliga frågor",
        "title": "Vad är bra att förstå bakom räknaren?",
        "id": "vanliga-fragor",
        "desc": null,
        "body": "<div class=\"col-span-12 @4xl:col-span-9 flex flex-col\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"ratt-namnare\" class=\"text-step-1 leading-heading font-heading text-ink\">Varför blir svaret fel om man delar med 365?</h3><p class=\"text-step-0 leading-normal text-secondary-foreground\">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Den här räknaren räknar alltid ut det faktiska antalet dagar i det valda intjänandeåret från kalendern, aldrig en fast siffra.</p></div><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary my-space-l\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"sammalone-vs-procent\" class=\"text-step-1 leading-heading font-heading text-ink\">Sammalöneregeln eller procentregeln — vilken gäller?</h3><p class=\"text-step-0 leading-normal text-secondary-foreground\">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Procentregeln (16 b §) ger i stället semesterlön som 12 % av den lön som förfallit till betalning under intjänandeåret. Den används normalt för den som inte har fast månadslön.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate.</p></div><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary my-space-l\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"spara-dagar\" class=\"text-step-1 leading-heading font-heading text-ink\">Hur många semesterdagar får en anställd spara?</h3><p class=\"text-step-0 leading-normal text-secondary-foreground\">Velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Räknaren visar bara hur många dagar som är sparbara för det valda semesteråret — den håller inte reda på dagar som redan sparats från tidigare år.</p></div></div>"
      },
      {
        "eyebrow": "Källor",
        "title": "Vad bygger räknarens regler på?",
        "id": "kallor",
        "desc": "Alla regler i räknaren kommer från semesterlagens (1977:480) ordalydelse. Nedan är direkta länkar till primärkällorna.",
        "body": "<ul class=\"col-span-12 @4xl:col-span-8 flex flex-col gap-space-s\"><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/semesterlag-1977480_sfs-1977-480/\" rel=\"noopener\">Semesterlag (1977:480) — konsoliderad text, Riksdagen</a><span class=\"text-step--1 text-secondary-foreground\">Hela lagen. Paragrafankare finns även på lagen.nu.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://lagen.nu/1977:480#P2\" rel=\"noopener\">Semesterlagen 2 § — lagen är tvingande till den anställdas fördel</a><span class=\"text-step--1 text-secondary-foreground\">Avtal som inskränker den anställdas rättigheter enligt lagen är ogiltiga i den delen.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://lagen.nu/1977:480#P3\" rel=\"noopener\">Semesterlagen 3 § — semesterår och intjänandeår</a><span class=\"text-step--1 text-secondary-foreground\">Semesterår 1 april–31 mars; intjänandeåret är den föregående tolvmånadersperioden.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://lagen.nu/1977:480#P4\" rel=\"noopener\">Semesterlagen 4 § — rätt till 25 semesterdagar</a><span class=\"text-step--1 text-secondary-foreground\">\"En arbetstagare har rätt till tjugofem semesterdagar varje semesterår.\" Samma stycke ger endast fem dagar om anställningen påbörjas efter den 31 augusti under semesteråret.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://lagen.nu/1977:480#P7\" rel=\"noopener\">Semesterlagen 7 § — beräkning av betalda semesterdagar</a><span class=\"text-step--1 text-secondary-foreground\">Formeln med \"antalet dagar under intjänandeåret\" och avrundning uppåt.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://lagen.nu/1977:480#P16\" rel=\"noopener\">Semesterlagen 16 § — när procentregeln är obligatorisk</a><span class=\"text-step--1 text-secondary-foreground\">Andra stycket räknar upp de fem fall där semesterlönen måste beräknas enligt 16 b §.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://lagen.nu/1977:480#P16a\" rel=\"noopener\">Semesterlagen 16 a § — semestertillägg (sammalöneregeln)</a><span class=\"text-step--1 text-secondary-foreground\">0,43 % av månadslönen per betald semesterdag för månadsavlönade.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://lagen.nu/1977:480#P16b\" rel=\"noopener\">Semesterlagen 16 b § — procentregeln</a><span class=\"text-step--1 text-secondary-foreground\">12 % av förfallen lön under intjänandeåret.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://lagen.nu/1977:480#P18\" rel=\"noopener\">Semesterlagen 18 § — rätt att spara semesterdagar</a><span class=\"text-step--1 text-secondary-foreground\">Dagar utöver 20 betalda semesterdagar får sparas. Andra stycket sätter femårsgränsen, tredje stycket förbjuder nytt sparande under ett år då sparade dagar tas ut.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://lagen.nu/1977:480#P20\" rel=\"noopener\">Semesterlagen 20 § — förläggning av sparade dagar</a><span class=\"text-step--1 text-secondary-foreground\">Andra stycket tillåter uppskov till det sjätte året vid betydande olägenhet.</span></li></ul>\n<div class=\"col-span-12 @4xl:col-span-8 mt-space-m flex flex-col gap-space-s\"><p class=\"text-step--1 text-secondary-foreground\"><strong class=\"font-medium text-primary-foreground\">Kollektivavtal kan vara bättre än lagen.</strong> Labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p><p class=\"text-step--1 text-secondary-foreground\"><strong class=\"font-medium text-primary-foreground\">Resultatet är vägledande, inte juridisk rådgivning.</strong> Pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Duis aute irure dolor in reprehenderit in voluptate velit esse <a class=\"inline-link\" href=\"/sv/compliance/sweden#annual-leave\">Semesterlagen för arbetsgivare</a>cillum dolore eu fugiat nulla pariatur excepteur sint <a class=\"inline-link\" href=\"/compliance/sweden\">Sweden employment compliance</a>occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur <a class=\"inline-link\" href=\"/waitlist\">gå med i väntelistan</a> adipiscing elit sed do eiusmod.</p></div>"
      }
    ]
  },
  "vuosilomalaskuri": {
    "header": {
      "eyebrow": "Työkalut",
      "title": "Vuosilomalaskuri",
      "id": "vuosilomalaskuri-heading",
      "desc": "Laske, montako arkipäivää vuosilomaa työntekijälle on kertynyt yhdeltä lomanmääräytymisvuodelta (1.4.–31.3.). Laskuri seuraa vuosilomalain 162/2005 sanamuotoa: täyden lomanmääräytymiskuukauden kynnys 6 §:stä ja kertymä 2 tai 2,5 arkipäivää 5 §:stä. Jokainen sääntö on linkitetty alla olevaan lähdeluetteloon.",
      "reviewed": null
    },
    "calc": {
      "eyebrow": "Laskuri",
      "title": "Montako lomapäivää työntekijälle on kertynyt?",
      "id": "laskuri",
      "desc": "Täytä työsuhteen alkamispäivä, valitse lomanmääräytymisvuosi ja laskentasääntö, ja kerro montako täyttä lomanmääräytymiskuukautta vuodelle kertyi. Laskuri kertoo tuloksen kanssa myös sen, mitä sääntöä se sovelsi.",
      "fields": [
        {
          "tag": "input",
          "id": "vl-start",
          "type": "date",
          "name": "start",
          "label": "Työsuhteen alkamispäivä",
          "hint": "Ratkaisee, onko työsuhde jatkunut 31.3. mennessä yhdenjaksoisesti vähintään vuoden (5 § 1 mom.).",
          "hintId": "vl-start-hint"
        },
        {
          "tag": "select",
          "id": "vl-year",
          "name": "year",
          "label": "Lomanmääräytymisvuosi",
          "hint": "Lomanmääräytymisvuosi on 1.4.–31.3., ei kalenterivuosi (4 § 1 kohta).",
          "hintId": "vl-year-hint",
          "options": [
            {
              "value": "2025",
              "label": "1.4.2024–31.3.2025",
              "selected": false
            },
            {
              "value": "2026",
              "label": "1.4.2025–31.3.2026",
              "selected": false
            },
            {
              "value": "2027",
              "label": "1.4.2026–31.3.2027",
              "selected": true
            },
            {
              "value": "2028",
              "label": "1.4.2027–31.3.2028",
              "selected": false
            }
          ]
        },
        {
          "tag": "select",
          "id": "vl-rule",
          "name": "rule",
          "label": "Laskentasääntö",
          "hint": "Ratkaisevaa on sopimuksen mukainen työpäivien määrä, ei koko- tai osa-aikaisuus. Sääntöjä ei sovelleta rinnakkain samaan kuukauteen (6 §).",
          "options": [
            {
              "value": "days14",
              "label": "14 päivän sääntö — vähintään 14 työssäolopäivää kuukaudessa",
              "selected": true
            },
            {
              "value": "hours35",
              "label": "35 tunnin sääntö — sopimuksen mukaan niin harvoja työpäiviä, ettei 14 päivää täyty",
              "selected": false
            },
            {
              "value": "neither",
              "label": "Alle 14 päivää ja alle 35 tuntia joka kuukausi — oikeus vapaaseen (8 § 1 mom.)",
              "selected": false
            }
          ]
        },
        {
          "tag": "input",
          "id": "vl-months",
          "type": "number",
          "name": "months",
          "label": "Täysien lomanmääräytymiskuukausien määrä",
          "value": "12",
          "min": "0",
          "max": "12",
          "step": "1",
          "hint": "0–12 kuukautta. Kuukausi on täysi, kun 6 §:n päivä- tai tuntikynnys täyttyy; työssäolon veroinen aika lasketaan mukaan (7 §).",
          "hintId": "vl-months-hint"
        }
      ],
      "extraButtons": [],
      "submit": "Laske lomapäivät",
      "formId": "vuosiloma-form",
      "aside": "<h3 class=\"text-step-1 leading-heading font-heading text-ink\">Lomaraha ei ole lakisääteinen</h3><p class=\"text-step--1 text-secondary-foreground\">Laskuri ei laske lomarahaa, koska sitä ei ole vuosilomalaissa. Sanat \"lomaraha\" ja \"lomaltapaluuraha\" eivät esiinny laissa lainkaan: lain rahamääräiset oikeudet ovat vuosilomapalkka (9–15 §), lomakorvaus (16–19 §), lisävapaapäivien korvaus (7 a §) ja säästövapaan palkka (27 §).</p><p class=\"text-step--1 text-secondary-foreground\">Lomaraha on työehtosopimuksessa — tai työsopimuksessa tai vakiintuneessa käytännössä — sovittu lisä, tyypillisesti 50 prosenttia lomapalkasta, ja usein ehdollinen esimerkiksi lomalta töihin palaamiselle. Tarkista määrä ja ehdot omasta työehtosopimuksestasi.</p><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary\"><p class=\"text-step--2 text-secondary-foreground\">Työehtosopimus voi antaa lakia paremmat ehdot: pidemmän loman, nopeamman kertymän tai lomarahan. Vuosilomalaki on puolipakottava — sopimus, jolla vähennetään lain mukaisia etuja, on mitätön (3 §), mutta paremmasta voi sopia.</p>"
    },
    "sections": [
      {
        "eyebrow": "Usein kysyttyä",
        "title": "Mitä laskurin taakse kannattaa ymmärtää?",
        "id": "usein-kysytyt",
        "desc": null,
        "body": "<div class=\"col-span-12 @4xl:col-span-9 flex flex-col\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"kumpi-saanto\" class=\"text-step-1 leading-heading font-heading text-ink\">Kumpi sääntö koskee työntekijääsi: 14 päivän sääntö vai 35 tunnin sääntö?</h3><p class=\"text-step-0 leading-normal text-secondary-foreground\">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.</p></div><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary my-space-l\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"kaksi-vai-puoli\" class=\"text-step-1 leading-heading font-heading text-ink\">Milloin lomaa kertyy 2 ja milloin 2,5 päivää kuukaudessa?</h3><p class=\"text-step-0 leading-normal text-secondary-foreground\">Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in.</p></div><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary my-space-l\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"lomapaivat-vapaaksi\" class=\"text-step-1 leading-heading font-heading text-ink\">Miten lomapäivät muuttuvat vapaaksi — kuluttaako lauantai lomapäivän?</h3><p class=\"text-step-0 leading-normal text-secondary-foreground\">Voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.</p></div><hr class=\"m-0 h-0 border-0 border-t border-surface-tertiary my-space-l\"><div class=\"flex flex-col gap-space-s\"><h3 id=\"lomaraha\" class=\"text-step-1 leading-heading font-heading text-ink\">Onko lomaraha lakisääteinen?</h3><p class=\"text-step-0 leading-normal text-secondary-foreground\">Deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur.</p></div></div>"
      },
      {
        "eyebrow": "Lähteet",
        "title": "Mihin laskurin säännöt perustuvat?",
        "id": "lahteet",
        "desc": "Kaikki laskurin säännöt ovat vuosilomalain 18.3.2005/162 sanamuodosta ja työsuojeluviranomaisen ohjeista. Alla suorat linkit alkuperäislähteisiin.",
        "body": "<ul class=\"col-span-12 @4xl:col-span-8 flex flex-col gap-space-s\"><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.finlex.fi/fi/lainsaadanto/2005/162\" rel=\"noopener\">Vuosilomalaki 162/2005 (konsolidoitu teksti, Finlex)</a><span class=\"text-step--1 text-secondary-foreground\">Koko laki. Pykäläkohtaiset ankkurit: 4 § (lomanmääräytymisvuosi ja arkipäivä), 5 § (2 / 2,5 päivää), 6 § (14 päivän ja 35 tunnin sääntö), 7 § (työssäolon veroinen aika), 8 § (vapaa), 20 § (loman ajankohta).</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.finlex.fi/fi/lainsaadanto/2005/162#chp_1__sec_4\" rel=\"noopener\">Vuosilomalaki 4 § — lomanmääräytymisvuosi, lomakausi, arkipäivä</a><span class=\"text-step--1 text-secondary-foreground\">Lomanmääräytymisvuosi 1.4.–31.3., lomakausi 2.5.–30.9., arkipäivän määritelmä.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.finlex.fi/fi/lainsaadanto/2005/162#chp_2__sec_5\" rel=\"noopener\">Vuosilomalaki 5 § — loman pituus</a><span class=\"text-step--1 text-secondary-foreground\">2,5 arkipäivää täydeltä kuukaudelta, 2 arkipäivää alle vuoden työsuhteessa, päivän osan pyöristys ylöspäin.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.finlex.fi/fi/lainsaadanto/2005/162#chp_2__sec_6\" rel=\"noopener\">Vuosilomalaki 6 § — vuosilomaan oikeuttava kuukausi</a><span class=\"text-step--1 text-secondary-foreground\">14 työssäolopäivää (1 mom.) tai 35 työtuntia (2 mom.).</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.finlex.fi/fi/lainsaadanto/2005/162#chp_2__sec_7\" rel=\"noopener\">Vuosilomalaki 7 § ja 7 a § — työssäolon veroinen aika ja lisävapaapäivät</a><span class=\"text-step--1 text-secondary-foreground\">Sairaus ja tapaturma enintään 75 työpäivää, opintovapaa 30, lomautus 30 kerrallaan; lisävapaapäivät täydentävät 24 päivään.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.finlex.fi/fi/lainsaadanto/2005/162#chp_2__sec_8\" rel=\"noopener\">Vuosilomalaki 8 § — oikeus vapaaseen</a><span class=\"text-step--1 text-secondary-foreground\">Kaksi arkipäivää vapaata kalenterikuukaudelta, kun kuukaudet jäävät alle 14 päivän ja 35 tunnin.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://www.finlex.fi/fi/lainsaadanto/2005/162#chp_5__sec_20\" rel=\"noopener\">Vuosilomalaki 20 § — loman ajankohta</a><span class=\"text-step--1 text-secondary-foreground\">24 arkipäivää kesälomana lomakaudella, loppuosa talvilomana ennen seuraavan lomakauden alkua.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://tyosuojelu.fi/tyosuhde/vuosiloma/lomapalkka-ja-korvaus\" rel=\"noopener\">Työsuojelu.fi — Lomapalkka ja -korvaus</a><span class=\"text-step--1 text-secondary-foreground\">Viranomaisen vahvistus siitä, että lomaraha perustuu työehtosopimukseen eikä vuosilomalakiin.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://tyosuojelu.fi/tyosuhde/vuosiloma/loman-ajankohta\" rel=\"noopener\">Työsuojelu.fi — Loman ajankohta</a><span class=\"text-step--1 text-secondary-foreground\">Viranomaisen kuvaus kesäloman ja talviloman sijoittamisesta.</span></li><li class=\"flex flex-col gap-space-3xs\"><a class=\"inline-link text-step-0\" href=\"https://tyosuojelu.fi/-/tyosuojeluviranomaisen-vastauksia-vuosilomaa-koskeviin-kysymyksiin\" rel=\"noopener\">Työsuojelu.fi — Työsuojeluviranomaisen vastauksia vuosilomaa koskeviin kysymyksiin</a><span class=\"text-step--1 text-secondary-foreground\">Muun muassa vahvistus siitä, ettei erillistä lauantaisääntöä ole.</span></li></ul>\n<div class=\"col-span-12 @4xl:col-span-8 mt-space-m flex flex-col gap-space-s\"><p class=\"text-step--1 text-secondary-foreground\"><strong class=\"font-medium text-primary-foreground\">Työehtosopimus voi olla lakia parempi.</strong> Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p><p class=\"text-step--1 text-secondary-foreground\"><strong class=\"font-medium text-primary-foreground\">Tulos on suuntaa antava, ei oikeudellinen neuvo.</strong> In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum lorem ipsum dolor sit amet consectetur adipiscing elit sed do.</p><p class=\"text-step-0 leading-normal text-secondary-foreground\">Eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute <a class=\"inline-link\" href=\"/fi/compliance/finland#annual-leave\">Suomen työsuhteiden compliance: opas työnantajalle</a>irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident <a class=\"inline-link\" href=\"/waitlist\">liity jonotuslistalle</a>sunt in culpa qui officia.</p></div>"
      }
    ]
  }
};
