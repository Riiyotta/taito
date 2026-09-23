// Copy for the PRODUCT group pages (/agents, /performance, /time-off-attendance,
// /people-directory, /documents, /pricing, /security, /waitlist).
// Section copy was extracted from the live DOM (see specs/SPEC_product.md); mock-UI
// data for the illustrations lives in `mocks` below.
// Rich text segments: string | {b} | {link, href}. Titles are arrays of lines (<br>).

export const pages = {
  agents: {
    hero: {
      eyebrow: "People agents",
      title: "Onboarding, payroll, reporting. Handled before you ask.",
      lede: "Describe what you need. Taito.ai's people agents build the workflow and run it continuously on their own, or whenever on-demand from Slack, Claude, or any MCP-enabled tool."
    },
    pains: {
      id: "ai-use-cases",
      eyebrow: "Recurring tasks that disappear",
      title: [
        "Where the agent earns its keep"
      ],
      items: [
        {
          title: "Onboarding looks improvised on every new hire.",
          body: "Day-one drifts between managers — missing accounts, forgotten intros, no equipment ordered. Taito.ai runs the same checklist on every hire and only routes steps that need a human."
        },
        {
          title: "One-off data questions eat a whole afternoon.",
          body: "Pulling a headcount trend means exporting CSVs and double-checking permissions in a sheet. The Slack agent answers from live data in seconds, scoped to the asker's permissions."
        },
        {
          title: "Quarterly review prep gets rebuilt by hand.",
          body: "Stitching Linear, Fireflies, and the directory burns most of a week — then resets next cycle. MCP pulls the signal automatically and a recurring workflow runs the prep on schedule."
        }
      ]
    },
    comparison: {
      id: "ai-budget",
      eyebrow: "Where the budget actually goes",
      title: [
        "Headcount vs. the product"
      ],
      head: [
        "Status quo",
        "Taito.ai"
      ],
      rows: [
        {
          label: "Cost & ramp",
          before: "~$100k+ fully loaded, ramps over months.",
          source: "BLS ECEC Q4 2025, Glassdoor 2026",
          after: "A product seat per employee. Live in days."
        },
        {
          label: "Day-to-day work",
          before: "Spends ~half the week on time-off, attendance, paperwork.",
          source: "McLean & Company, 2024",
          after: "Product handles those by default."
        },
        {
          label: "Knowledge",
          before: "Knowledge lives in their head.",
          source: null,
          after: "Workflows are versioned, auditable, transferable."
        },
        {
          label: "Continuity",
          before: "Burns out, leaves, hands over a Notion doc.",
          source: null,
          after: "Doesn't leave."
        }
      ]
    },
    faq: {
      id: "ai-faq",
      title: [
        "Frequently asked questions"
      ],
      items: [
        {
          q: "What can agents access?",
          a: "Only what your field-level permissions allow. Agents inherit, never escalate."
        },
        {
          q: "Where's the audit log?",
          a: "Agent reads and writes are captured in the activity log alongside human ones."
        },
        {
          q: "Do you train on our data?",
          a: "No. Customer data is not used for model training."
        },
        {
          q: "Can we restrict which integrations agents can use?",
          a: "Yes, per integration, per role, per group."
        },
        {
          q: "Do we need to build the workflows?",
          a: "One-click setup: drop in any data and our agent helps configure the rest. You can edit anything afterwards."
        }
      ]
    },
    related: {
      id: "related-agents",
      eyebrow: "Built to work together",
      title: [
        "Keep exploring"
      ],
      items: [
        {
          href: "/people-directory",
          icon: "users",
          title: "People directory",
          body: "One record per person, feeding payroll, performance, documents, and your AI agents."
        },
        {
          href: "/time-off-attendance",
          icon: "plane-takeoff",
          title: "Time-off and attendance",
          body: "Slack-native requests, regional policies, and pre-payroll reports your provider can ingest."
        },
        {
          href: "/documents",
          icon: "signature",
          title: "Documents and eSignatures",
          body: "Contracts generated from templates, signed in Taito.ai, filed against the employee record."
        }
      ]
    },
    splits: [
      {
        id: "ai-surfaces",
        eyebrow: "How it works",
        title: [
          "Describe a workflow. Run it from anywhere."
        ],
        description: [
          "Slack, the web app, or any MCP client — browse ",
          {
            link: "the workflows teams run over MCP",
            href: "/mcp-use-cases"
          },
          "."
        ],
        features: [
          {
            icon: "route",
            title: "Describe your task",
            body: "Tell Taito.ai what you need in plain language — onboarding runs, recurring reports, one-off lookups. It assembles the workflow and reaches the right tools, integrations, and specialist agents when the task needs them."
          },
          {
            icon: "mouse-pointer-2",
            title: "Slack agent",
            body: "Trigger any action or pull any record straight from Slack — time-off, approvals, attendance, directory lookups, ad-hoc reports. No new tab to open."
          },
          {
            icon: "mcp",
            title: "MCP server",
            body: "Connect Taito.ai into Claude, ChatGPT, or any MCP-enabled workflow builder. The AI tools you already use can read records, trigger actions, and run workflows on your behalf."
          }
        ]
      },
      {
        id: "ai-integrations",
        eyebrow: "Integrations",
        title: [
          "Plug into the stack your work already lives in"
        ],
        features: [
          {
            icon: "database",
            title: "Data sources",
            body: "Pull from Taito.ai's people graph and any CRM, finance, or PM tool you run. Agents read the live source — no exports, no stale copies."
          },
          {
            icon: "bell",
            title: "Notifications and reports",
            body: "Subscribe to any data change — new hire, approved leave, missed check-in — and ship custom reports to Slack, email, or a dashboard on a schedule."
          },
          {
            icon: "blocks",
            title: "Platform integrations",
            body: "Push to payroll, archive to document storage, route signatures through your eSign provider. The agent doesn't stop at reading — it acts across your stack."
          }
        ]
      }
    ]
  },
  performance: {
    hero: {
      eyebrow: "Performance",
      title: "Review cycles that orchestrate themselves",
      lede: "Enable once, run forever. Automated cycles, AI-assisted analysis, and bias-flagging built on the data you already have: Slack, Linear, Salesforce, Fireflies, Gemini, anything MCP-enabled."
    },
    testimonial: {
      quote: "Rolling out Taito.ai across the organisation resulted in the smoothest performance review cycle we've run to date.",
      name: "Andy Brookes",
      role: "CTO, Faculty",
      logo: { src: "/assets/pages/product/images/faculty.webp", alt: "Faculty", className: "h-5 brightness-0" }
    },
    pains: {
      id: "performance-use-cases",
      eyebrow: "Where it pays off",
      title: [
        "From friction to fixed"
      ],
      items: [
        {
          title: "Reviews land late because someone's chasing 80 people for inputs.",
          body: "Cycle orchestration runs the chase with reminders, escalations, and calibration scheduling, and writes outcomes back to the record on time."
        },
        {
          title: "Calibration meetings without prep, and decisions made without data.",
          body: "Each calibration ships with assembled context from Slack, Linear, and Fireflies, plus AI-flagged outliers, so the meeting is for judgement."
        },
        {
          title: "Reviews skewed by recency bias, flight risk surfacing in the resignation letter.",
          body: "Bias-flagging catches missing peers and recency-skewed examples before reviews ship, and AI attributes surface flight risk weeks earlier."
        }
      ]
    },
    faq: {
      id: "performance-faq",
      title: [
        "Frequently asked questions"
      ],
      items: [
        {
          q: "Does the AI write the reviews?",
          a: "No. It assembles signal, flags gaps, and surfaces patterns. The judgement stays with managers."
        },
        {
          q: "What can the agents see?",
          a: "Only the data your permissions let them see, and only the integrations you turn on. Every access is logged."
        },
        {
          q: "Does this work without the People Operations module?",
          a: [
            "Best together. Performance writes outcomes back to the ",
            {
              link: "employee record",
              href: "/people-directory"
            },
            ", but it can run standalone."
          ]
        },
        {
          q: "How does bias-flagging work?",
          a: "Heuristics + LLM checks for missing peers, recency-skewed examples, and inconsistent rubric application. You can override anything; everything is logged."
        }
      ]
    },
    related: {
      id: "related-performance",
      eyebrow: "Built to work together",
      title: [
        "Keep exploring"
      ],
      items: [
        {
          href: "/people-directory",
          icon: "users",
          title: "People directory",
          body: "One record per person, feeding payroll, performance, documents, and your AI agents."
        },
        {
          href: "/time-off-attendance",
          icon: "plane-takeoff",
          title: "Time-off and attendance",
          body: "Slack-native requests, regional policies, and pre-payroll reports your provider can ingest."
        },
        {
          href: "/documents",
          icon: "signature",
          title: "Docs & eSign",
          body: "Contracts generated from templates, signed in Taito.ai, filed against the employee record."
        }
      ]
    },
    splits: [
      {
        id: "cycle-orchestration",
        eyebrow: "How it works",
        title: [
          "Automated from cycle kickoff to calibration"
        ],
        description: "Reviews backed by real data, not just memory.",
        features: [
          {
            icon: "workflow",
            title: "AI-assisted cycle setup and orchestration",
            body: "Design the cycle — participants, prompts, cadence — with AI. Taito.ai handles reminders, calibration, and writes outcomes to the record."
          },
          {
            icon: "pen-line",
            title: "AI-assisted reviews through Taito.ai MCP",
            body: "Reviewers draft in any AI assistant, pulling from any data source they connect. Taito.ai accepts the submission over MCP, formats it to fit the rubric, and pre-reviews it before it ships."
          },
          {
            icon: "shield-check",
            title: "Agentic feedback review",
            body: "Taito.ai checks each review for missing details, bias, and outliers, and requests changes if needed."
          }
        ]
      },
      {
        id: "performance-features",
        eyebrow: "Real-time insights",
        title: [
          "Continuous performance, not a quarterly snapshot"
        ],
        description: [
          "Reviewers can draft in Claude with the evidence pulled live — see how that works for ",
          {
            link: "engineering reviews from Linear",
            href: "/mcp-use-cases/engineering-performance-review-linear"
          },
          " and ",
          {
            link: "GTM reviews from HubSpot",
            href: "/mcp-use-cases/gtm-performance-review-hubspot"
          },
          "."
        ],
        features: [
          {
            icon: "shield-alert",
            title: "AI attributes flag what matters",
            body: "Flight risk, coaching needs, probation status, culture fit. Surfaced from the data you already have, weeks before they'd come up in a 1:1."
          },
          {
            icon: "target",
            title: "Targeted coaching when it lands",
            body: "See where teams and managers are stuck while it's still happening, not three months later in a review."
          },
          {
            icon: "sparkles",
            title: "Best practices, lifted from your own org",
            body: "When a manager's approach moves the numbers, Taito.ai shows it to the managers facing the same problem."
          }
        ]
      }
    ]
  },
  timeOff: {
    hero: {
      eyebrow: "Time-off and attendance",
      title: "Time-off and attendance, correct in every country",
      lede: "Local rules handled, balances always current, and payroll output your provider can ingest as is — so leave is correct in every country you employ, every cycle."
    },
    pains: {
      id: "time-off-use-cases",
      eyebrow: "Where it pays off",
      title: [
        "From friction to fixed"
      ],
      items: [
        {
          title: "Approving time-off in DMs, then re-keying it for payroll at month-end.",
          body: "Requests, approvals, and cancellations happen once in Slack, and the pre-payroll line is written for you the moment the dates land on the record."
        },
        {
          title: "Maintaining one policy per country in a Notion doc.",
          body: "Regional policies for EMEA, UK, Nordics, and US ship preconfigured — public holidays, accruals, statutory minimums — applied per group with only the overrides you actually need."
        },
        {
          title: "Hand-building the payroll CSV at month-end.",
          body: "An always-current pre-payroll report in your provider's preferred shape, covering time-off, attendance, comp, and the full changelog, ready to deliver without stitching."
        }
      ]
    },
    comparison: {
      id: "time-off-comparison",
      eyebrow: "Stack comparison",
      title: [
        "Today vs. with Taito.ai"
      ],
      head: [
        "Status quo",
        "Taito.ai"
      ],
      rows: [
        {
          label: "How requests happen",
          before: "DM your manager, hope they remember, then re-key the dates into a leave tool.",
          source: null,
          after: "Ask in Slack; the right approver is pinged automatically."
        },
        {
          label: "Country rules",
          before: "Different leave laws and public holidays maintained by hand in a Notion doc.",
          source: null,
          after: "Local rules for vacation, sick leave, and holidays built in."
        },
        {
          label: "Tracking balances",
          before: "Spreadsheet with carry-overs, accruals, and one-off edge cases.",
          source: null,
          after: "Balances update automatically against the policy."
        },
        {
          label: "Attendance and shifts",
          before: "Clock-in lives in a punch-card app that doesn't talk to anything else.",
          source: null,
          after: "Clock-in, clock-out, and shift hours feed the same record."
        },
        {
          label: "Sending hours to payroll",
          before: "Hand-build a CSV at month-end, fix the formatting, send.",
          source: null,
          after: "An always-current report your payroll provider can ingest as is."
        },
        {
          label: "Audit trail",
          before: "Approval threads scattered across DMs and email.",
          source: null,
          after: "Every request, approval, and edit recorded in one place."
        }
      ]
    },
    related: {
      id: "related-time-off",
      eyebrow: "Built to work together",
      title: [
        "Keep exploring"
      ],
      items: [
        {
          href: "/people-directory",
          icon: "users",
          title: "People directory",
          body: "One record per person, feeding payroll, performance, documents, and your AI agents."
        },
        {
          href: "/documents",
          icon: "signature",
          title: "Documents and eSignatures",
          body: "Contracts generated from templates, signed in Taito.ai, filed against the employee record."
        },
        {
          href: "/agents",
          icon: "mouse-pointer-2",
          title: "People agents",
          body: "A Slack agent, no-code workflows, and MCP — the recurring half of people ops, automated."
        }
      ]
    },
    splits: [
      {
        id: "request-to-payroll",
        eyebrow: "From request to payroll, automated",
        title: [
          "From Slack request to payroll line, in one flow"
        ],
        description: "No DMs lost in approval limbo. No CSV stitching at month-end. The flow your team already runs in Slack feeds the report your provider already wants.",
        features: [
          {
            icon: "check",
            body: "Requests, approvals, and cancellations happen in Slack, so leave doesn't bounce between DMs, calendars, and an HR portal nobody opens."
          },
          {
            icon: "check",
            body: "Balances and team coverage update in real time against each policy and region, so employees, managers, and planners see the same number, calculated correctly."
          },
          {
            icon: "check",
            body: "Pre-payroll output lands in the exact shape your provider expects, ready to deliver at month-end without hand-stitching CSVs."
          }
        ]
      },
      {
        id: "time-off-in-the-box",
        eyebrow: "What's in the box",
        title: [
          "Compliant in every region, ready for payroll every cycle"
        ],
        features: [
          {
            icon: "globe",
            title: "Regional policies, ready to apply",
            body: "EMEA, UK, Nordics, and US time-off and attendance rules: public holidays, statutory minimums, accrual logic, preconfigured. Apply them to a group; override only what you need to."
          },
          {
            icon: "calendar-clock",
            title: "Attendance tracking without surveillance",
            body: "Track only what you need to: working hours where required and absence reporting. Automated where compliant; manual where it should be."
          },
          {
            icon: "file-spreadsheet",
            title: "Pre-payroll reports",
            body: "Real-time output covering time-off, attendance, compensation, and the full changelog, ready to deliver to your payroll provider in their preferred shape."
          }
        ]
      }
    ]
  },
  peopleDirectory: {
    hero: {
      eyebrow: "People directory",
      title: "One source of truth for your people and agents",
      lede: "Customizable employee data, org structure, and group membership in one place, feeding payroll, performance, documents, and your AI agents from a single source of truth."
    },
    pains: {
      id: "directory-use-cases",
      eyebrow: "Where it pays off",
      title: [
        "From friction to fixed"
      ],
      items: [
        {
          title: "Employee data is one shared link away from the wrong eyes.",
          body: "Compensation, home address, performance notes, and any sensitive field you define are gated by role, by group, and by field. A manager sees their team's salaries; the next team over does not see them at all. Access is uniform where it should be and locked down where it must be — no shadow spreadsheets to keep the sensitive stuff out."
        },
        {
          title: "Every payroll cycle starts with a hunt for what changed.",
          body: "Pay raises, role moves, working-pattern shifts, and bonuses land on the record with effective dates the moment they happen. Each cycle exports a time-bounded changelog in your provider's format, so retroactive adjustments, prorations, and pay-element changes flow through without manual reconciliation or last-minute Slack threads."
        },
        {
          title: "Reorgs live in a private spreadsheet that no one can reconcile back.",
          body: "Model the new structure against live records, share it with only the people who need to see it, then enact it on an effective date. Reporting lines, group memberships, and the permissions that ride on them update together, so the day after the announcement nothing is left pointing at the old org."
        }
      ]
    },
    comparison: {
      id: "directory-comparison",
      eyebrow: "Stack comparison",
      title: [
        "Today vs. with Taito.ai"
      ],
      head: [
        "Status quo",
        "Taito.ai"
      ],
      rows: [
        {
          label: "Where headcount lives",
          before: "A spreadsheet for headcount, a separate tool for the org chart, a database for everything else.",
          source: null,
          after: "One record per person. Every other system reads from it."
        },
        {
          label: "Custom fields",
          before: "Limited to what the vendor decided to support.",
          source: null,
          after: "Add fields with real types — dates, numbers, links — yourself, without waiting for a release."
        },
        {
          label: "Org chart",
          before: "Redrawn by hand in Lucid every reorg, out of date within a week.",
          source: null,
          after: "Updates automatically when reporting lines change."
        },
        {
          label: "Sensitive fields",
          before: "Salaries visible to anyone with directory access.",
          source: null,
          after: "Hide individual fields like pay or home address by role."
        },
        {
          label: "Promotion history",
          before: "Promotions and raises live in someone's head until comp review.",
          source: null,
          after: "Every promotion, raise, and transfer recorded with the date it took effect."
        },
        {
          label: "Search",
          before: "Find people in one tool, their team in another, their manager in a third.",
          source: null,
          after: "One search across people, teams, roles, and locations — respecting who's allowed to see what."
        }
      ]
    },
    related: {
      id: "related-people-directory",
      eyebrow: "Built to work together",
      title: [
        "Keep exploring"
      ],
      items: [
        {
          href: "/time-off-attendance",
          icon: "plane-takeoff",
          title: "Time-off and attendance",
          body: "Slack-native requests, regional policies, and pre-payroll reports your provider can ingest."
        },
        {
          href: "/documents",
          icon: "signature",
          title: "Documents and eSignatures",
          body: "Contracts generated from templates, signed in Taito.ai, filed against the employee record."
        },
        {
          href: "/performance",
          icon: "chevrons-up",
          title: "Performance",
          body: "Review cycles that launch themselves and draft from data your team already produces."
        }
      ]
    },
    splits: [
      {
        id: "customizable-records",
        eyebrow: "Customizable employee records",
        title: [
          "Track what your org needs; surface only what it should"
        ],
        description: "Define the fields that matter to your team without waiting on a vendor.",
        features: [
          {
            icon: "check",
            body: "Custom fields with real types — strings, dates, enums, lookups, references — defined by you, not waiting on a vendor release."
          },
          {
            icon: "check",
            body: "Promotions, transfers, raises, and bonuses land on the record with effective dates and a full changelog, so tenure, reporting lines, and comp history are queryable at any point in time."
          },
          {
            icon: "check",
            body: "Field-level permissions per role and per group, so compensation and sensitive PII only surface where they should — and every search and lookup respects the same rules."
          }
        ]
      },
      {
        id: "built-in",
        eyebrow: "Built into the directory",
        title: [
          "Org chart, groups, search, and audit — built in"
        ],
        features: [
          {
            icon: "network",
            title: "Org chart that handles real life",
            body: "Reporting lines, dotted lines, secondary connections, and matrix structures, all from the same record. No second tool, no second source of truth."
          },
          {
            icon: "users",
            title: "Employee groups, your way",
            body: "Slice the company by team, location, jurisdiction, function. Use groups as the backbone for time-off policies, document templates, and review cycles."
          },
          {
            icon: "history",
            title: "Audit log on every change",
            body: "Every edit, every permission change, every group reassignment, captured in the activity log."
          }
        ]
      }
    ]
  },
  documents: {
    hero: {
      eyebrow: "Docs and eSign",
      title: "Contracts that file themselves",
      lede: "Generate from templates, sign in Taito, store against the employee record, with retention and audit handled. No third tool, no email-chasing."
    },
    pains: {
      id: "documents-use-cases",
      eyebrow: "Where it pays off",
      title: [
        "From friction to fixed"
      ],
      items: [
        {
          title: "Generating a contract = copy template, find-and-replace, send.",
          body: "Generated from the record in one click, with merge fields pulled from the source of truth and signing kicked off in the same flow."
        },
        {
          title: "Signed PDFs scattered across email and Drive.",
          body: "Filed against the employee record automatically the moment signing completes, with permissions inherited so the right people can see it and no one else."
        },
        {
          title: "Retention rules nobody can remember during audit.",
          body: "Retention enforced by policy per document type and jurisdiction, so old documents disappear when they should and stay when the law says they must."
        }
      ]
    },
    comparison: {
      id: "documents-comparison",
      eyebrow: "Stack comparison",
      title: [
        "Today vs. with Taito.ai"
      ],
      head: [
        "Status quo",
        "Taito.ai"
      ],
      rows: [
        {
          label: "Creating a contract",
          before: "Open Word, copy a template, find-and-replace the name, the date, the salary.",
          source: null,
          after: "Generated automatically from the employee record. One click."
        },
        {
          label: "Sending for signature",
          before: "Upload to DocuSign, set up signers, hope nothing is mistyped.",
          source: null,
          after: "Send for signature without leaving Taito."
        },
        {
          label: "Storage",
          before: "Signed PDFs in a Drive folder someone forgot to lock down.",
          source: null,
          after: "Filed automatically against the employee record."
        },
        {
          label: "Different countries",
          before: "A separate template per country and entity, maintained by hand.",
          source: null,
          after: "Templates adapt to country, role, and entity automatically."
        },
        {
          label: "Keeping or deleting old documents",
          before: "Manual cleanup, calendar reminders, anxiety at audit time.",
          source: null,
          after: "Old documents kept or deleted automatically based on local rules."
        },
        {
          label: "Who can see what",
          before: "Access resets every time someone re-uploads a file.",
          source: null,
          after: "Access follows the person's role on the record."
        }
      ]
    },
    related: {
      id: "related-documents",
      eyebrow: "Built to work together",
      title: [
        "Keep exploring"
      ],
      items: [
        {
          href: "/people-directory",
          icon: "users",
          title: "People directory",
          body: "One record per person, feeding payroll, performance, and your AI agents from a single source of truth."
        },
        {
          href: "/time-off-attendance",
          icon: "plane-takeoff",
          title: "Time-off and attendance",
          body: "Slack-native requests, regional policies, and pre-payroll reports your provider can ingest."
        },
        {
          href: "/performance",
          icon: "chevrons-up",
          title: "Performance",
          body: "Review cycles that launch themselves and draft from data your team already produces."
        }
      ]
    },
    splits: [
      {
        id: "generate-sign-file",
        eyebrow: "Generation, signing, filing",
        title: [
          "From draft to filed, with the record in sync"
        ],
        description: "Define a template once; merge employee data automatically; send for signature; file against the record when complete. Retention rules apply by document type and jurisdiction.",
        features: [
          {
            icon: "check",
            body: "Templates pull merge fields directly from the employee record, including custom ones, so contracts and comp letters generate from the source of truth."
          },
          {
            icon: "check",
            body: "eSignature captures signers, timestamps, IP, and document hash to your region's standard, with every signed copy independently verifiable years on."
          },
          {
            icon: "check",
            body: "Completed documents file themselves against the right employee record automatically, with no email-chasing or \"where did that PDF go?\" Drive hunts."
          }
        ]
      },
      {
        id: "documents-in-the-box",
        eyebrow: "What's in the box",
        title: [
          "Templates, signing, retention — hands off"
        ],
        features: [
          {
            icon: "file-text",
            title: "Templates that know your fields",
            body: "Reference any field in the employee record, including custom ones. Promotions, comp letters, contracts, generated from the source of truth."
          },
          {
            icon: "signature",
            title: "eSignature with audit",
            body: "Signers, timestamps, IP, hash, captured per region's eSignature standard. Exportable for audit."
          },
          {
            icon: "calendar-clock",
            title: "Retention, automated",
            body: "Set retention by document type and jurisdiction once. Taito.ai enforces it across jurisdictions, deleting and preserving on the schedule the law requires."
          }
        ]
      }
    ]
  },
  pricing: {
    hero: {
      eyebrow: "Pricing",
      title: "Per‑seat pricing, no hidden fees",
      lede: "Everything we build, under one price. Less than the cost of the People Ops generalist you'd otherwise hire to keep your stack running."
    },
    grids: [
      {
        id: "included",
        eyebrow: "Our model",
        title: [
          "One tier. Everything inside."
        ],
        description: "AI, activity logs, Google sign-on, field-level permissions, and regional compliance ship in the base price. No add-ons, no Enterprise tier gating.",
        items: [
          {
            icon: "users",
            title: "People directory",
            body: "Custom records and an org chart that handles dotted lines and group ownership."
          },
          {
            icon: "plane-takeoff",
            title: "Time-off and attendance",
            body: "Slack-native requests, approvals, and shift tracking that flow straight to payroll."
          },
          {
            icon: "signature",
            title: "Docs and eSign",
            body: "Generate, send, sign, file. Templates adapt to region, role, and entity."
          },
          {
            icon: "chart-no-axes-column",
            title: "Pre-payroll reporting",
            body: "Hours, leave balances, and variable pay, export-ready every cycle."
          },
          {
            icon: "mouse-pointer-2",
            title: "People agents",
            body: "Slack agent, MCP, and no-code workflows for the lifecycle work."
          },
          {
            icon: "chevrons-up",
            title: "Performance",
            body: "Cycles, calibration, and AI-drafted attributes grounded in real signals."
          }
        ],
        links: null
      }
    ],
    other: [
      {},
      {
        id: "security",
        eyebrow: "Security",
        title: [
          "Enterprise‑grade security,",
          "by default"
        ],
        description: "As an employer, you hold the most sensitive information about your team — salaries, contracts, personal IDs, and health data. Taito.ai is ISO 27001 certified and GDPR compliant from day one, with encryption, activity logs, and field-level permissions built into every layer."
      }
    ],
    comparison: {
      id: "pricing-comparison",
      eyebrow: "Stack comparison",
      title: [
        "Taito.ai vs. legacy HRIS"
      ],
      head: [
        "Status quo",
        "Taito.ai"
      ],
      rows: [
        {
          label: "Pricing",
          before: "Per-module add-ons and \"call us for a quote\" enterprise pricing.",
          source: null,
          after: "One flat price per person. Everything included."
        },
        {
          label: "AI",
          before: "AI features locked behind a higher tier.",
          source: null,
          after: "Slack assistant, automated reports, and no-code workflows included."
        },
        {
          label: "Getting started",
          before: "Three to six months of setup with a consultant.",
          source: "Sapient Insights Group, 27th Annual HR Systems Survey 2024–2025",
          after: "Set up yourself in days."
        },
        {
          label: "Security",
          before: "Audit log and single sign-on only on the enterprise tier.",
          source: null,
          after: "Activity log and Google Workspace sign-on included."
        },
        {
          label: "Sensitive data",
          before: "Everyone with directory access sees every field.",
          source: null,
          after: "Hide individual fields like salary by role, not whole pages."
        },
        {
          label: "Contract",
          before: "Annual contract, lock-in, renewal negotiations.",
          source: null,
          after: "Pay monthly or yearly. Cancel anytime."
        },
        {
          label: "Country rules",
          before: "Local leave laws and contract rules handled by workarounds.",
          source: null,
          after: "Country-specific rules for leave, contracts, and EU data residency built in."
        }
      ]
    },
    faq: {
      id: "pricing-faq",
      title: [
        "Frequently asked questions"
      ],
      items: [
        {
          q: "Is there a minimum team size?",
          a: "No minimum. Per-seat pricing scales from one to thousands. For larger teams, we'll talk volume terms during onboarding."
        },
        {
          q: "When does access open?",
          a: [
            "We're in closed alpha. ",
            {
              link: "Join the waitlist",
              href: "/waitlist"
            },
            " and we'll reach out when there's a slot."
          ]
        },
        {
          q: "Is this price an early-adopter discount?",
          a: "No. €10/seat monthly and €8/seat annual is the actual price, not a promo. We're not banking on a future hike — what you sign up for is what you pay."
        },
        {
          q: "Annual billing: when does the 20% kick in?",
          a: "At sign-up. Cancel anytime within standard refund terms."
        },
        {
          q: "How do we migrate from our current HRIS?",
          a: "AI import handles it. Point it at your existing employee data and transaction history — records, time-off balances, contracts, payroll history — and Taito.ai pulls everything in. No rebuild from scratch."
        },
        {
          q: "Where is our data stored, and who can see it?",
          a: "Hosted in the EU. ISO 27001 certified, GDPR compliant, with field-level permissions and an activity log of changes. Sensitive data stays visible only to the people who need it."
        },
        {
          q: "What happens to our data if we cancel?",
          a: "You export it. Full data export is part of the product, not a churn-prevention hostage situation."
        },
        {
          q: "How do AI features handle sensitive employee data?",
          a: "AI runs on your tenant's data only and respects the same field-level permissions as the rest of the product. No training on your data, no leaking across customers."
        },
        {
          q: "What's not in Taito today?",
          a: "Payroll execution (we hand off to your provider), full ATS, and learning management aren't in scope today. Ask us about specifics and we'll tell you straight."
        }
      ]
    }
  },
  security: {
    hero: {
      eyebrow: "Security",
      title: "Salaries, contracts, personal IDs: secured by default",
      lede: "As an employer you hold the most sensitive information about your team. Taito.ai is ISO 27001 certified and GDPR compliant, with encryption in transit and at rest and granular field-level permissions. Nothing changes in an employee record without a log entry. The certificates and the current state of every control live in the trust center."
    },
    other: [
      {
        id: "security-certifications",
        eyebrow: "Certifications",
        title: [
          "Certified and encrypted by default"
        ],
        description: [
          "The current certificates and the audit reports behind them live in the ",
          {
            link: "trust center",
            href: "https://trust.taito.ai"
          },
          "."
        ]
      }
    ],
    grids: [
      {
        id: "security-controls",
        eyebrow: "Security controls",
        title: [
          "Secure defaults,",
          "for every account"
        ],
        description: "Enterprise-level security built-in for everyone, not as a paid add-on.",
        items: [
          {
            icon: "lock",
            title: "Encryption in transit and at rest",
            body: "Every request runs over TLS, and everything we store is encrypted at rest. There's no cheaper tier where that changes."
          },
          {
            icon: "key-round",
            title: "Granular field-level permissions",
            body: "Salary, personal identifiers and health data are visible only to the roles you grant. The same rules hold in the web app, in the Slack agent, and over MCP."
          },
          {
            icon: "scroll-text",
            title: "An activity log behind every change",
            body: "Every change to an employee record is logged with who changed it, what changed, and when. That includes the changes agents make. You can export the log when an auditor asks."
          },
          {
            icon: "ban",
            title: "No model training on your data",
            body: "We don't train AI models on customer data. It's processed to answer the request in front of it and nothing else. Which sub-processors touch it, and under what terms, is listed in the trust center."
          },
          {
            icon: "timer",
            title: "Retention you set, deletion you can hold us to",
            body: "Retention runs per data category rather than one blanket rule, and on termination we delete or return customer data within 30 days under the DPA. You can export in full at any point, including on the way out."
          },
          {
            icon: "flask-conical",
            title: "Independently tested",
            body: "Our controls are audited against ISO 27001 by an external body, and the platform is penetration tested periodically by an outside party. Reports and current certificates are in the trust center."
          }
        ],
        links: null
      },
      {
        id: "security-documents",
        eyebrow: "Documentation",
        title: [
          "The paperwork your legal team will ask for"
        ],
        description: "Transparent and up-to-date security documentation available for you and other stakeholders.",
        items: [
          {
            icon: "shield-check",
            title: "Trust center",
            body: "Certificates, current controls and audit reports, kept up to date."
          },
          {
            icon: "file-lock",
            title: "Data processing agreement",
            body: "Our obligations as processor, and the terms our sub-processors are held to."
          },
          {
            icon: "file-text",
            title: "Privacy notice",
            body: "What we collect as a controller, and on what legal basis."
          },
          {
            icon: "globe",
            title: "Sub-processor list",
            body: "Who processes customer data on our behalf, and where."
          },
          {
            icon: "file-check",
            title: "Terms of service",
            body: "The contract the rest of this sits under."
          },
          {
            icon: "history",
            title: "Document archive",
            body: "Earlier versions of the terms, privacy notice and DPA, kept on the record."
          }
        ],
        links: [
          "https://trust.taito.ai",
          "/dpa",
          "/privacy",
          "https://trust.taito.ai/subprocessors",
          "/terms",
          "/legal/archives"
        ]
      }
    ],
    faq: {
      id: "security-faq",
      title: [
        "Frequently asked questions"
      ],
      items: [
        {
          q: "Where is our data hosted?",
          a: [
            "In the EU. The ",
            {
              link: "trust center",
              href: "https://trust.taito.ai"
            },
            " documents the specifics: regions, which sub-processor sits where, and what residency commitments are available. That's the version that stays current."
          ]
        },
        {
          q: "Do you train AI models on our data?",
          a: "No. Customer data is used to answer the request at hand and for nothing else, never to train our models or a vendor's."
        },
        {
          q: "Who can see salary and personal identifiers?",
          a: "Only the roles you grant. Field-level permissions follow the data into every surface that reads it, the Slack agent and MCP clients included, and every access is logged."
        },
        {
          q: "What happens if an agent gets something wrong?",
          a: "It shows up in the activity log attributed to the agent, and anyone with permission to change that record can reverse it. Anything irreversible, from pay to exits to contract terms, never runs without a person confirming it first."
        },
        {
          q: "Are you ISO 27001 certified?",
          a: [
            "Yes, and GDPR compliant. Both ship in the base price, not a higher tier. The current certificate and the controls behind it are in the ",
            {
              link: "trust center",
              href: "https://trust.taito.ai"
            },
            "."
          ]
        },
        {
          q: "Can we see a penetration test report?",
          a: [
            "The platform is penetration tested periodically by an external party. Reports are available through the ",
            {
              link: "trust center",
              href: "https://trust.taito.ai"
            },
            "."
          ]
        },
        {
          q: "Can we export or delete our data?",
          a: [
            "Full export at any time, including on cancellation. On termination we delete or return customer data within 30 days under the ",
            {
              link: "DPA",
              href: "/dpa"
            },
            "."
          ]
        }
      ]
    },
    splits: [
      {
        id: "security-autonomy",
        eyebrow: "Agent security",
        title: [
          "Safe and secure AI,",
          "with human in the loop"
        ],
        description: "Agents run workflows end-to-end. They also stop whenever human confirmation is needed.",
        features: [
          {
            icon: "check",
            title: "Runs on its own",
            body: "Reminders and chases, data hygiene and record updates, scheduling, reports and drafts, and review-cycle orchestration."
          },
          {
            icon: "shield-alert",
            title: "Always stops and asks",
            body: "Pay changes, terminations, contract terms, legal commitments: anything you can't undo waits for a person."
          },
          {
            icon: "scroll-text",
            title: "Mistakes are visible and reversible",
            body: "Full activity history and decision reasoning, always visible. Roll back changes with a single prompt, without extra manual work."
          }
        ]
      }
    ]
  },
  waitlist: {
    grids: [
      {
        id: "waitlist-intro",
        eyebrow: "Early access",
        title: [
          "Join the waitlist"
        ],
        description: "We're onboarding growing teams across EMEA, UK, Nordics, and US. Tell us who you are; we'll reach out when there's a fit.",
        items: [
          {
            icon: "globe",
            body: "Compliant across the EU, UK, Nordics, and US. Regional automation built-in, and fully customizable."
          },
          {
            icon: "mouse-pointer-2",
            body: "AI handles the routine people ops while you focus on building the team and the business."
          },
          {
            icon: "message-circle",
            body: "Slack-native time-off, approvals, and attendance — in the channel your team already lives in."
          }
        ],
        links: null
      },
      {
        id: "people-ops",
        eyebrow: "What you get",
        title: [
          "From zero to payroll,",
          "no manual steps"
        ],
        description: "Time-off requests, attendance, contracts, and payroll prep run automatically and securely.",
        items: [
          {
            icon: "users",
            title: "People directory",
            body: "Customizable employee records and an org chart that handles dotted lines, secondary connections, and group ownership."
          },
          {
            icon: "plane-takeoff",
            title: "Time off",
            body: "Slack-native requests and approvals with regional policies built in. Balances and accruals sync to payroll automatically."
          },
          {
            icon: "clock",
            title: "Attendance",
            body: "Clock-in, clock-out, and shift tracking with regional rules built in. Records flow straight to payroll. No spreadsheet in between."
          },
          {
            icon: "signature",
            title: "Documents and eSignatures",
            body: "Generate contracts from employee data, send for signing, and file automatically. Templates adapt to region, role, and entity."
          },
          {
            icon: "key-round",
            title: "Granular permissions",
            body: "Field-level access control, role-based visibility, and an activity log of changes. Sensitive data stays visible only to the people who need it."
          },
          {
            icon: "chart-no-axes-column",
            title: "Pre‑payroll reporting",
            body: "Hours, leave balances, and variable pay computed and formatted for your payroll provider. Export-ready every cycle."
          }
        ],
        links: null
      }
    ],
    testimonial: {
      quote: "Taito.ai made the whole process feel modern and effortless. The AI support meant I didn't need to learn a new workflow.",
      name: "Juho Hyytiäinen",
      role: "Co-founder & CEO, Way",
      logo: { src: "/assets/pages/product/images/way.webp", alt: "Way", className: "h-12" }
    },
    other: [
      {
        id: "personas",
        eyebrow: "Built for",
        title: [
          "Different roles. Same product."
        ]
      }
    ],
    faq: {
      id: "waitlist-faq",
      title: [
        "Frequently asked questions"
      ],
      items: [
        {
          q: "How fast do you onboard waitlist customers?",
          a: "We're letting in cohorts as capacity allows; usually within a few weeks of signup for the right fit."
        },
        {
          q: "What does access look like?",
          a: "Full product access, with hands-on onboarding from the team."
        },
        {
          q: "Who's a fit during alpha?",
          a: "Teams of ~30 to 300 with operations across EMEA, UK, Nordics, or US. Especially: running people ops without a dedicated team."
        },
        {
          q: "How much will it cost?",
          a: [
            "€10/seat/month, €8/seat/month annual. See ",
            {
              link: "pricing",
              href: "/pricing"
            },
            "."
          ]
        },
        {
          q: "Can I lose my place?",
          a: "Only if your work email bounces."
        }
      ]
    }
  }
};
