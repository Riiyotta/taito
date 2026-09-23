// Copy for /founders, /operators, /people-leaders, /company, /customers (extracted from the live DOM).
// Rich text segments: string | { b } (strong).

export const personas = {
  "founders": {
    "hero": {
      "eyebrow": "For founders",
      "title": "Scale people ops without scaling the team",
      "lede": "People ops hires get buried in admin before they reach strategy. Buy the product that handles it, and hire for the work only a person can do.",
      "prompt": "Build a Q1 performance review agent for the engineering team",
      "sr": "A founder mid-presentation in a sunlit auditorium, the audience falling into soft bokeh in the lower half of the frame. A prompt card overlays the lower portion: \"Build a Q1 performance review agent for the engineering team.\"",
      "objectPosition": "50% 30%",
      "image": "/assets/pages/persona-company/heroes/founders-hero-3-1024w"
    },
    "sections": [
      {
        "id": "cracks-at-scale",
        "eyebrow": "Where it breaks",
        "title": "What falls through the cracks at scale",
        "type": "pain",
        "items": [
          {
            "kicker": "10+",
            "title": "Your first hires deserve real infrastructure",
            "body": [
              "Employee records live in shared sheets anyone can edit. Payroll is a monthly scramble of forms and reminders. Half the founder's day disappears into chasing approvals. Taito.ai ",
              {
                "b": "secures employee data from day one"
              },
              ", ",
              {
                "b": "automates payroll prep"
              },
              ", and replaces the back-and-forth with ",
              {
                "b": "workflows that just run"
              },
              "."
            ]
          },
          {
            "kicker": "50+",
            "title": "Company knowledge lives in someone's head",
            "body": [
              "Time-off requests pile up in Slack DMs. Contracts sit in personal Drives. Policies exist only as oral tradition, surfacing the moment someone asks. Taito.ai gives you ",
              {
                "b": "one system from headcount one"
              },
              ", so the ",
              {
                "b": "basics run themselves"
              },
              " before they become a problem."
            ]
          },
          {
            "kicker": "150+",
            "title": "Compliance and reviews become side jobs",
            "body": [
              "You're hiring across borders, prepping for your first audit, and calibration drags on while managers chase forms instead of talking to their people. Taito.ai ships with ",
              {
                "b": "regional policies preconfigured"
              },
              ", exports ",
              {
                "b": "pre-payroll reports to your provider"
              },
              ", and ",
              {
                "b": "runs performance cycles end-to-end"
              },
              "."
            ]
          }
        ]
      },
      {
        "id": "founder-features",
        "eyebrow": "What moves the needle",
        "title": "The features that move the needle for founders",
        "type": "features",
        "items": [
          {
            "icon": "zap",
            "title": "Automation-first",
            "body": "Time-off, contracts, payroll prep, and audit pulls run themselves. You buy the outcome, not another tool for someone to operate."
          },
          {
            "icon": "messages-square",
            "title": "Slack-native",
            "body": "Employees book leave, sign documents, and ask policy questions without leaving Slack. No new login, no adoption project, no rollout email."
          },
          {
            "icon": "globe",
            "title": "Regional compliance in the box",
            "body": "Statutory leave, working-time rules, and contract templates ship preconfigured for every region you hire in. No policy lawyer on retainer."
          },
          {
            "icon": "wallet",
            "title": "Pre-payroll reports",
            "body": "Hours, leave balances, and variable pay computed and formatted to your provider's spec. Export every cycle, zero manual reconciliation."
          },
          {
            "icon": "workflow",
            "title": "AI workflows",
            "body": "Onboarding, probation, recurring reports, and offboarding defined once and run forever. Every step of the employee journey, handled in the background."
          },
          {
            "icon": "chevrons-up",
            "title": "Performance built in",
            "body": "Reviews launch on cadence, calibration drafts itself from real signal, and flight risk surfaces in 1:1s — not in exit interviews."
          }
        ]
      },
      {
        "type": "testimonial",
        "logo": {
          "alt": "Way",
          "w": 183,
          "h": 48,
          "filter": false,
          "src": "/assets/pages/persona-company/logos/way-testimonial.webp"
        },
        "quote": "I kept HR in spreadsheets because I didn't have time to onboard yet another HR system. Taito.ai made the whole process feel modern and effortless: I connected our data, confirmed the output, and invited the team. The AI support meant I didn't need to learn a new workflow. Now everyone can see who's off, request leave, and I'm finally out of the spreadsheet.",
        "name": "Juho Hyytiäinen",
        "role": "Co-founder & CEO, Way",
        "tall": false
      },
      {
        "id": "cost-of-old-way",
        "eyebrow": "By the numbers",
        "title": "The cost of doing it the old way",
        "type": "stats"
      },
      {
        "id": "faq-founders",
        "title": "Frequently asked questions",
        "type": "faq",
        "items": [
          {
            "q": "We're tiny. Isn't a spreadsheet fine?",
            "a": "Spreadsheets work until you need an audit trail, regional leave rules, or someone has to find a contract that lives in a personal Drive. Setup at 8 people takes about an hour — less than the maintenance you'd spend on the spreadsheet this quarter."
          },
          {
            "q": "Why not just hire a People Ops generalist instead?",
            "a": "Hire for the work only a person can do — comp philosophy, manager coaching, hard conversations. Don't hire someone to chase approvals, prep payroll, and answer policy questions. That's product work, and product is cheaper."
          },
          {
            "q": "We use Gusto, Deel, or Rippling for payroll. Isn't that enough?",
            "a": "Payroll providers run payroll. Taito.ai handles everything that has to be ready before payroll runs — hours, balances, deductions, signed contracts — and exports in your provider's format. No duplicate system, no manual reconciliation."
          },
          {
            "q": "We hire across multiple countries. Can you handle that?",
            "a": "Statutory leave, working-time rules, and contract templates ship preconfigured for EMEA, UK, Nordics, and US. Each region's rules apply automatically, so a new hire in Helsinki gets a Finnish contract and Finnish leave entitlements without manual configuration."
          },
          {
            "q": "How long does setup take?",
            "a": "A founder workspace is usable in under an hour. Importing your existing data and inviting the team is most of the work — there's no implementation project, no consultant on retainer, no kick-off deck."
          },
          {
            "q": "Isn't this just an HRIS?",
            "a": "An HRIS is a filing cabinet with permissions. Taito.ai is the product that does the work the HRIS expects you to coordinate manually — approvals, document generation, payroll prep, recurring reports. We replace the HRIS and the spreadsheets that sit around it."
          }
        ]
      }
    ]
  },
  "operators": {
    "hero": {
      "eyebrow": "For operators",
      "title": "Build for scale, not for HR backlog",
      "lede": "COO, Chief of Staff, first ops hire — whatever the title, you're building structure for scale. Taito.ai handles HR compliance and admin so you can focus on the systems that grow the company.",
      "prompt": "Automate a monthly pre-payroll report to Gusto",
      "sr": "An operations lead mid-conversation across a wooden desk with a colleague, reviewing a printed report. A prompt card overlays the lower portion: \"Automate a monthly pre-payroll report to Gusto.\"",
      "objectPosition": "40% 30%",
      "image": "/assets/pages/persona-company/heroes/operators-hero-3-1024w"
    },
    "sections": [
      {
        "id": "operator-plate",
        "eyebrow": "What landed on your plate",
        "title": "The work no one else picked up",
        "type": "pain",
        "items": [
          {
            "kicker": "HR admin",
            "title": "The work that lands on you by default",
            "body": [
              "Time-off approvals, contract requests, onboarding checklists, and policy questions all route to the operator's inbox because no one else owns them. Taito.ai ",
              {
                "b": "runs the day-to-day automatically"
              },
              ", so the operator's calendar belongs to the operator again."
            ]
          },
          {
            "kicker": "Compliance",
            "title": "New country, new ruleset",
            "body": [
              "Every new market adds statutory leave, working-time rules, and contract templates nobody on the team has seen before. Taito.ai ships with ",
              {
                "b": "regional policies and contracts preconfigured"
              },
              " for EMEA, UK, Nordics, and US — and an ",
              {
                "b": "activity log of every change"
              },
              "."
            ]
          },
          {
            "kicker": "Reporting",
            "title": "Headcount slides on a Sunday",
            "body": [
              "Board prep, investor diligence, and finance reviews all need the same numbers pulled from three different exports. Taito.ai gives you ",
              {
                "b": "one queryable source"
              },
              ", with ",
              {
                "b": "scheduled reports that land in Slack or your inbox"
              },
              " on cadence."
            ]
          }
        ]
      },
      {
        "id": "operator-features",
        "eyebrow": "What runs itself",
        "title": "The operator's toolkit, built in",
        "type": "features",
        "items": [
          {
            "icon": "workflow",
            "title": "HR on autopilot",
            "body": "Time-off, contracts, onboarding, offboarding, and recurring reports run themselves. The recurring half of your week, off your plate for good."
          },
          {
            "icon": "shield-check",
            "title": "Compliance shipped, not built",
            "body": "Regional policies, field-level permissions, and an activity log preconfigured. No DIY posture, no Notion doc to maintain."
          },
          {
            "icon": "chart-no-axes-column",
            "title": "One source, every report",
            "body": "Headcount, comp, leave, and attrition queryable in one place. Board-ready slides and investor diligence stop being a weekend project."
          },
          {
            "icon": "messages-square",
            "title": "Slack-native employees",
            "body": "Your team books leave, signs documents, and asks policy questions where they already live. No new login, no rollout project to run."
          },
          {
            "icon": "wallet",
            "title": "Pre-payroll prep",
            "body": "Hours, balances, and variable pay computed and formatted to your payroll provider's spec. Export every cycle, zero manual reconciliation."
          },
          {
            "icon": "users",
            "title": "Built for handoff",
            "body": "Records, workflows, and history transfer cleanly when your first dedicated People hire lands. Hand them a working system, not a cleanup project."
          }
        ]
      },
      {
        "id": "operator-stack",
        "eyebrow": "Stack comparison",
        "title": "Your stack today vs. Taito.ai",
        "type": "table",
        "head": [
          "",
          "Status quo",
          "Taito.ai"
        ],
        "rows": [
          [
            "Tools you administer",
            "HRIS, leave tracker, eSign app, performance tool, comp doc, plus the spreadsheets between them.",
            "One product covers all of it. One admin seat, one bill."
          ],
          [
            "Reporting for the board",
            "Pulled from three exports, formatted in Sheets the night before.",
            "Scheduled reports run themselves and land in Slack or your inbox."
          ],
          [
            "New country, new rules",
            "Read up, draft a policy, hope it holds at audit.",
            "Regional policies and contracts ship preconfigured."
          ],
          [
            "Onboarding playbook",
            "A Notion doc you maintain by hand and copy for every hire.",
            "Workflow defined once, runs on every hire automatically."
          ],
          [
            "Compliance posture",
            "Built ad-hoc when an audit shows up on the calendar.",
            "Audit log, field permissions, and DPA ready on day one."
          ],
          [
            "Handoff to your first People hire",
            "Translate a year of bespoke spreadsheets and undocumented workflows.",
            "Clean state in a system the next hire already knows how to run."
          ]
        ]
      },
      {
        "type": "testimonial",
        "logo": {
          "alt": "Huuva",
          "w": 230,
          "h": 48,
          "filter": true,
          "src": "/assets/pages/persona-company/logos/huuva-testimonial.webp"
        },
        "quote": "With Taito.ai, you don't have to read some manual and figure out how things work, because it's all intuitive — you can just ask the chat.",
        "name": "Martta Jämsén",
        "role": "Operations Lead, Huuva",
        "tall": false
      },
      {
        "id": "faq-operators",
        "title": "Frequently asked questions",
        "type": "faq",
        "items": [
          {
            "q": "We don't have a People team — should the COO really own HR?",
            "a": "Operators run the company; they shouldn't be running time-off approvals or chasing signed contracts. Buy the product that does the operational work, and keep the operator focused on the work only an operator can do — vendor management, financial ops, board prep, GTM enablement."
          },
          {
            "q": "We already use Rippling, Deel, Gusto, or BambooHR. Aren't we covered?",
            "a": "Those products run payroll or store records. They expect you to coordinate everything around them — approvals, document generation, policy maintenance, recurring reports. Taito.ai is the layer that does the coordination, and exports to your existing payroll provider in their spec."
          },
          {
            "q": "We're planning to hire a Head of People in six months. Why install this now?",
            "a": "Your first People hire will spend month one untangling spreadsheets and undocumented workflows if you wait. Install Taito.ai now and hand them a working system on day one — not a cleanup project."
          },
          {
            "q": "What does this actually replace?",
            "a": "Your HRIS, leave and attendance tracker, eSign tool, performance app, and the spreadsheets that sit between them. It integrates with payroll, ATS, and Google Workspace rather than replacing those."
          },
          {
            "q": "How fast is setup if I'm the only one running it?",
            "a": "A workspace is usable in under an hour. Most operators do the full rollout in an afternoon — there is no implementation project, no consultant on retainer, no kick-off deck."
          },
          {
            "q": "How do you handle audit and board reporting?",
            "a": "Every record is queryable, scheduled reports run on cadence, and changes are captured in an activity log. Investor diligence, headcount slides, and statutory reporting stop being one-off pulls and start being a calendar entry."
          }
        ]
      }
    ]
  },
  "people-leaders": {
    "hero": {
      "eyebrow": "For people leaders",
      "title": "You weren't hired to chase signed PDFs",
      "lede": "For Chiefs of Staff, CPOs, and Heads of People who run operations across six tools and 200 Slack threads. Taito.ai gives you back the strategic half of the job.",
      "prompt": "Build an onboarding workflow for our new hires in London",
      "sr": "A people leader standing at a sunlit meeting room table mid-gesture, a colleague's shoulder in soft foreground bokeh, the table surface filling the lower half of the frame. A prompt card overlays the lower portion: \"Build an onboarding workflow for our new hires in London.\"",
      "objectPosition": "60% 30%",
      "image": "/assets/pages/persona-company/heroes/people-leaders-hero-1-1024w"
    },
    "sections": [
      {
        "id": "week-before-and-after",
        "eyebrow": "Where the week disappears",
        "title": "What you weren't hired to do",
        "type": "pain",
        "items": [
          {
            "kicker": "Approvals",
            "title": "Approvals and paperwork eat the morning",
            "body": [
              "Time-off requests pile up in Slack DMs, comp letters live in five tools, and the contract you need is in someone's Drive. Taito.ai runs ",
              {
                "b": "Slack-native approvals"
              },
              ", ",
              {
                "b": "generates documents from templates"
              },
              ", and ",
              {
                "b": "files everything against the employee record"
              },
              "."
            ]
          },
          {
            "kicker": "Reporting",
            "title": "Policies and reports rebuilt every quarter",
            "body": [
              "Country policies live in a Notion doc you maintain by hand, and quarterly reporting steals a week pulling from three exports. Taito.ai ships with ",
              {
                "b": "regional policies in the box"
              },
              " and ",
              {
                "b": "scheduled AI workflows that run the report"
              },
              " so you review instead of rebuild."
            ]
          },
          {
            "kicker": "Retention",
            "title": "Flight risk shows up in exit interviews",
            "body": [
              "By the time the 1:1 is on the calendar, they've already signed somewhere else. Taito.ai ",
              {
                "b": "flags flight risk on signal"
              },
              " — engagement drops, missed 1:1s, performance shifts — so it surfaces in time to act, not on the resignation."
            ]
          }
        ]
      },
      {
        "id": "time-back",
        "eyebrow": "Where the time goes back",
        "title": "The features people leaders live in",
        "type": "features",
        "items": [
          {
            "icon": "plane-takeoff",
            "title": "Time-off and attendance",
            "href": "/time-off-attendance",
            "body": "Slack-native requests and approvals with regional policies built in. Balances, accruals, and hours sync to payroll automatically — no spreadsheet in between."
          },
          {
            "icon": "users",
            "title": "People directory",
            "href": "/people-directory",
            "body": "Customizable employee records and an org chart that handles dotted lines, secondary reporting, and group ownership. Your source of truth, shaped to your org."
          },
          {
            "icon": "signature",
            "title": "Documents and eSignatures",
            "href": "/documents",
            "body": "Generate contracts from employee data, send for signing, and file against the record. Templates adapt to region, role, and entity — minutes, not days."
          },
          {
            "icon": "chevrons-up",
            "title": "Performance",
            "href": "/performance",
            "body": "Review cycles run on your cadence, calibration arrives with the prep already done, and flight risk surfaces in 1:1s rather than exit interviews."
          },
          {
            "icon": "workflow",
            "title": "People agents",
            "href": "/agents",
            "body": "Onboarding, recurring reports, and offboarding defined once and run forever. The recurring half of your week, off your plate for good."
          },
          {
            "icon": "key-round",
            "title": "Granular permissions",
            "href": "/people-directory",
            "body": "Field-level access, role-based visibility, and an activity log of changes. Sensitive data stays visible only to the people who need it."
          }
        ]
      },
      {
        "type": "testimonial",
        "logo": {
          "alt": "Faculty",
          "w": 113,
          "h": 20,
          "filter": true,
          "src": "/assets/pages/persona-company/logos/faculty-testimonial.webp"
        },
        "quote": "Real-time, regular feedback works best. Taito.ai customizes into workflows, capturing feedback immediately and making it easy to review during one-to-ones.",
        "name": "Vicki Marchington",
        "role": "Chief People Officer, Faculty",
        "tall": true
      },
      {
        "id": "stack-comparison",
        "eyebrow": "Stack comparison",
        "title": "Your stack today vs. Taito.ai",
        "type": "table",
        "head": [
          "",
          "Status quo",
          "Taito.ai"
        ],
        "rows": [
          [
            "Tools you pay for",
            "Employee database, payroll exporter, eSignature, performance app, plus spreadsheets in between.",
            "One product covers all of it. One bill."
          ],
          [
            "Where employee data lives",
            "Headcount in one tool, compensation in another, signed contracts in a third.",
            "Every record lives in one place. Every other system reads from it."
          ],
          [
            "Quarterly reporting",
            "Pulled by hand from three exports, every quarter.",
            "Scheduled reports run themselves and land in Slack or your inbox."
          ],
          [
            "Country rules",
            "Local leave laws and contract rules maintained in a Notion doc.",
            "Country-specific rules ship preconfigured."
          ],
          [
            "Sensitive data",
            "Permissions set up separately in each tool.",
            "Hide individual fields like salary by role, in one place across the product."
          ],
          [
            "Onboarding new hires",
            "Checklists in Notion, accounts created one by one.",
            "Onboarding flow runs from the moment the offer is signed."
          ]
        ]
      },
      {
        "id": "faq-people-leaders",
        "title": "Frequently asked questions",
        "type": "faq",
        "items": [
          {
            "q": "We just bought an HRIS. Why would we switch?",
            "a": "Most HRIS products are filing cabinets with permissions — you still coordinate the work yourself. Taito.ai does the operational work the HRIS expects you to run: approvals, document generation, pre-payroll prep, recurring reports. If you're spending your week chasing rather than deciding, switching pays back quickly."
          },
          {
            "q": "What about migration? We have years of records.",
            "a": "Bulk import via CSV or directly from your current system. Records, org chart, leave balances, and signed documents come over cleanly. The cutover is measured in days, not quarters — and you keep the source system as read-only reference for as long as you need."
          },
          {
            "q": "Does this replace my whole stack?",
            "a": "It replaces your HRIS, leave and attendance tool, eSignature product, performance app, and the spreadsheets that sit between them. It integrates with payroll, ATS, and Google Workspace rather than replacing them. One product, not none."
          },
          {
            "q": "Will my team actually adopt a Slack-first model?",
            "a": "Your team already lives in Slack. Booking leave or asking a policy question without opening a new tab is the path of least resistance — adoption is the easy part, not the risk. The web app is there when employees want it; nobody is forced into Slack."
          },
          {
            "q": "Can it handle complex performance cycles — multi-rater, calibration, comp tie-in?",
            "a": "Multi-rater, peer, manager, and self reviews are first-class. Calibration tools surface outliers and suggest moves. Comp letters generate from the cycle output, signed in the same flow. No separate performance app, no separate comp tool."
          },
          {
            "q": "Can I build custom reports?",
            "a": "Yes. The data model is queryable, and the AI workflow layer builds and schedules recurring reports — headcount by department, leave by region, contract status, anything you can describe. Reports land in Slack, your inbox, or your warehouse."
          }
        ]
      }
    ]
  }
};

const A = '/assets/pages/persona-company';

export const company = {
  hero: {
    eyebrow: 'About Taito.ai',
    title: "We're building the people operations system you wish you'd had",
    lede: 'A people ops product that does the work, so your team stays lean while the company grows.',
    image: `${A}/heroes/company-hero-5-1536w`,
    objectPosition: '50% 50%',
    sr: 'A top-down editorial photograph of a busy urban scramble crossing with diagonal white crosswalks and dozens of pedestrians captured mid-stride with motion blur — a visual metaphor for the flow of people through a growing organization.',
  },
  story: {
    eyebrow: 'Our story',
    title: 'Built from personal experience',
    // Long-form company narrative → lorem ipsum placeholder of matching length/structure.
    paragraphs: [
      [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit — sed do eiusmod, tempor incididunt, and others — ut labore et dolore magna aliqua every time. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi, ut aliquip ex ea commodo, and the irure dolor eventually reprehenderit in voluptate before velit esse cillum.',
      ],
      [
        'Excepteur sint occaecat cupidatat non proident. ',
        { em: 'Lorem' },
        ' means "ipsum" in Latin — a nod to what sunt in culpa is actually for: qui officia deserunt mollit anim that compounds skill over time, instead of one that id est laborum in process.',
      ],
    ],
    backedBy: 'Backed by the best',
    investors: [
      { name: 'Accel', href: 'https://www.accel.com', src: `${A}/svg/accel.svg`, ratio: 1288 / 413, className: 'h-6 lg:h-7' },
      { name: 'illusian', href: 'https://illusian.org', src: `${A}/svg/illusian.svg`, ratio: 162 / 40, className: 'h-5 lg:h-6' },
    ],
  },
  mission: {
    eyebrow: 'Mission, values + goals',
    title: 'Mission, values + goals',
    description:
      'At Taito.ai, we believe in the power of continuous growth, both for people and for organizations. Our mission is to enable teams and individuals to drive real progress with minimal friction, making people ops effortless for companies of all sizes, to unlock their full potential and thrive.',
    values: [
      { kicker: 'V / 1', title: 'Automate all manual work', body: 'We aim to automate all manual work, both for our customers and within our own team.' },
      { kicker: 'V / 2', title: 'Build products users love', body: 'We put users first—building products that deliver daily value, are intuitive, and genuinely enjoyable to use.' },
      { kicker: 'V / 3', title: 'Get the right stuff done', body: 'We focus on execution, prioritisation, and getting things done, rather than over-planning or over-analyzing.' },
      { kicker: 'V / 4', title: 'You are trusted. Be bold.', body: 'We trust our team to make the right calls and work to remove any bottlenecks that slow down fast execution and decision-making.' },
    ],
  },
  team: {
    eyebrow: 'The team',
    title: ['Meet the team', 'building Taito.ai'],
    description:
      "A small team of founders, engineers, and people-ops practitioners who have lived inside the problem. We're hiring carefully and shipping deliberately — say hello any time.",
    members: [
      { id: 'kristo-ovaska', name: 'Kristo Ovaska', role: 'Founder, CEO', bio: 'Founder and ex-CEO of Smartly.io; led it to $100M+ revenue and $5B in ad spend.' },
      { id: 'mikko-kivela', name: 'Mikko Kivelä', role: 'Founder, CPO', bio: 'Early Smartly.io employee; scaled tech, design, and automation as the company emerged as a global online marketing leader.' },
      { id: 'juho-eraste', name: 'Juho Eräste', role: 'Founder, CTO', bio: 'Early Smartly.io employee and first Swarmia hire; led teams, culture, and products.' },
      { id: 'reeta-kari', name: 'Reeta Kari', role: 'Customers', bio: 'Built and scaled customer success function from early stage to a multinational team, driving long-term customer value; ex-HiBob.' },
      { id: 'antti-pitkanen', name: 'Antti Pitkänen', role: 'Senior Software Engineer', bio: 'Experienced senior engineer with stints at Smartly.io, Flowdock, and Elevate Labs.' },
      { id: 'miikka-kataja', name: 'Miikka Kataja', role: 'Go-To-Market', bio: 'Helped 15 B2B startups build GTM & sales as an independent consultant; Ex-Slush.' },
      { id: 'niko-kosonen', name: 'Niko Kosonen', role: 'Senior Software Engineer', bio: '15+ years of software development experience, both domestically and internationally, across real-time collaboration, eCommerce, and logistics.' },
    ].map((m) => ({ ...m, image: `${A}/team/${m.id}-360w.webp` })),
    opening: {
      name: 'You?',
      role: 'Opportunities',
      bio: "We're hiring deliberately. If building the recurring half of people ops sounds like the thing you'd want to work on, get in touch.",
      cta: 'careers@taito.ai',
      href: 'mailto:careers@taito.ai',
    },
  },
};

export const customers = {
  hero: {
    eyebrow: 'Customers',
    title: 'Companies running people ops with Taito.ai',
    lede: 'Coming soon.',
  },
};

export const zapIcon = `${A}/svg/lucide-zap.svg`;
