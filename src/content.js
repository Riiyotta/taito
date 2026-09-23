// All page copy lives here (CLONE_SPEC.md). Swap text out in this file only.
// Rich text segments: a plain string, or { b: 'text' } (bold/500), or { link: 'text', href }.

export const site = {
  name: 'Taito.ai',
  waitlistHref: '/waitlist',
  loginHref: 'https://hris.taito.ai/auth/login',
};

export const nav = {
  product: {
    label: 'Product',
    items: [
      { href: '/people-directory', title: 'People directory', description: 'A single source of truth for every person in the company.', icon: 'users' },
      { href: '/time-off-attendance', title: 'Time‑off and attendance', description: 'Policies, balances, approvals, handled automatically.', icon: 'plane-takeoff' },
      { href: '/documents', title: 'Docs and eSign', description: 'Generate, send, and sign documents without leaving Taito.ai.', icon: 'signature' },
      { href: '/performance', title: 'Performance', description: 'Reviews and feedback loops that actually run on schedule.', icon: 'chevrons-up' },
      { href: '/agents', title: 'People agents', description: 'AI agents that handle onboarding, reminders, and policy questions.', icon: 'mouse-pointer-2' },
      // MCP glyph was not saved by recon — lucide "blocks" used as a placeholder.
      { href: '/mcp-use-cases', title: 'MCP use cases', description: 'Custom people workflows in Claude, Slack, HubSpot, Linear, and Lovable.', icon: 'blocks' },
    ],
  },
  solutions: {
    label: 'Solutions',
    items: [
      { href: '/founders', title: 'For founders', description: 'Run people ops from day one, even without a dedicated team.', icon: 'users' },
      { href: '/people-leaders', title: 'For people leads', description: 'Spend less time on admin, more time on the people.', icon: 'users' },
      { href: '/operators', title: 'For operators', description: 'Build the systems that scale the company. We run the HR backlog.', icon: 'users' },
    ],
  },
  links: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Company', href: '/company' },
  ],
  login: 'Log in',
  cta: 'Join waitlist',
};

export const hero = {
  eyebrow: { label: 'How Zero built people ops ahead of a $10M seed round', href: '/blog/zero-case-study' },
  title: 'Run people ops on autopilot',
  lede: 'Employee records, time-off and attendance, contracts, pre-payroll, and performance, automated. The people operations platform for teams building an exceptional workplace — without slowing down.',
  cta: 'Join waitlist',
  srDescription: 'Illustration of the Taito.ai app: a chat assistant with a sidebar of people operations modules.',
  app: {
    org: 'Northwind',
    orgInitial: 'N',
    groups: [
      { label: 'Assistant', items: [{ icon: 'plus', label: 'New chat', active: true }, { icon: 'messages-square', label: 'Chats' }] },
      {
        label: 'Organization',
        items: [
          { icon: 'users', label: 'People' },
          { icon: 'mouse-pointer-2', label: 'Agents' },
          { icon: 'network', label: 'Groups' },
          { icon: 'building-2', label: 'Locations' },
          { icon: 'plane-takeoff', label: 'Time off' },
          { icon: 'clock', label: 'Attendance' },
          { icon: 'file-text', label: 'Documents' },
          { icon: 'chevrons-up', label: 'Performance' },
        ],
      },
      { label: 'Personal', items: [{ icon: 'inbox', label: 'Inbox' }, { icon: 'list-checks', label: 'Tasks' }] },
    ],
    breadcrumb: ['Chats', 'New'],
    greeting: 'Hi there',
    question: 'What would you like to automate today?',
  },
  prompts: [
    'Set up my organization from the employee data in our Slack workspace',
    'Set up new hire experience with contract eSign and first week onboarding tasks',
    'Send monthly attendance, time-off and compensation reports to payroll',
    'Automate employee probation mid-point and final reviews',
    'Build a quarterly performance review flow with manager check-in and development discussion',
  ],
  logos: [
    { name: 'Faculty', src: '/assets/images/logos/faculty.webp', small: true },
    { name: 'Huuva', src: '/assets/images/logos/huuva.webp' },
    { name: 'Strise', src: '/assets/images/logos/strise.webp' },
    { name: 'Shook', src: '/assets/images/logos/shook.webp' },
    { name: 'Clock&Cloud', src: '/assets/images/logos/clock-and-cloud.webp' },
    { name: 'Way', src: '/assets/images/logos/way-marquee.webp' },
    { name: 'Zero', src: '/assets/svg/logos/zero-wordmark.svg', noFilter: true },
  ],
};

export const why = {
  eyebrow: 'Why Taito.ai?',
  title: ['Grow your team,', 'not your people ops overhead'],
  description: 'Between 30 and 300 headcount, the operational workload doubles before the budget does. Taito.ai handles the operational work automatically, so you can focus on building your company, not managing spreadsheets.',
  cards: [
    {
      title: 'One product for all things people',
      body: 'Employee records, time off, attendance, documents, pre-payroll, and performance run from one place, automatically. No more copying between systems manually.',
      image: 'why-1-2',
      icons: ['users', 'plane-takeoff', 'clock', 'signature', 'key-round', 'chevrons-up'],
    },
    {
      title: 'Works where your team already does',
      body: 'Access everything and take action from Slack, Claude, or any tool in your stack. Your people data is always one message away.',
      image: 'why-2',
      slack: {
        channel: 'onboarding',
        messages: [
          { who: 'Olivia Hartley', avatar: '/assets/images/avatars/olivia-hartley.webp', time: '9:14', body: [{ b: '@Taito.ai' }, ' start onboarding for Jane Doe — Engineering, starts Mar 18'] },
          { who: 'Taito.ai', bot: true, time: '9:14', body: ['Drafted UK employment contract · Provisioned Slack + Google Workspace · Scheduled day-one orientation · Looped in onboarding buddy'] },
          { who: 'Olivia Hartley', avatar: '/assets/images/avatars/olivia-hartley.webp', time: '9:15', body: ['Love this — saved me an afternoon.'] },
        ],
      },
    },
    {
      title: 'Regional compliance, no workarounds',
      body: 'Local leave rules, contract templates, and attendance policies automated from day one. No manual fixes, no annual corrections. Just correct by default.',
      image: 'why-3',
      policies: {
        title: 'Time-off policies',
        items: [
          { flag: '/assets/svg/flags/flag-uk.svg', title: 'United Kingdom', sub: '28 days annual leave incl. bank holidays' },
          { flag: '/assets/svg/flags/flag-se.svg', title: 'Sweden', sub: '25 days semester · statutory minimum' },
          { flag: '/assets/svg/flags/flag-de.svg', title: 'Germany', sub: '30 days Urlaub from start date' },
        ],
      },
    },
  ],
};

export const peopleOps = {
  eyebrow: 'People ops',
  title: ['From zero to payroll,', 'no manual steps'],
  description: 'Time-off requests, attendance, contracts, and payroll prep run automatically. Your team never has to chase it.',
  items: [
    { icon: 'users', title: 'People directory', body: 'Customizable employee records and an org chart that handles dotted lines, secondary connections, and group ownership.' },
    { icon: 'plane-takeoff', title: 'Time off', body: 'Slack-native requests and approvals with regional policies built in. Balances and accruals sync to payroll automatically.' },
    { icon: 'clock', title: 'Attendance', body: 'Clock-in, clock-out, and shift tracking with regional rules built in. Records flow straight to payroll. No spreadsheet in between.' },
    { icon: 'signature', title: 'Docs and eSign', body: 'Generate contracts from employee data, send for signing, and file automatically. Templates adapt to region, role, and entity. Minutes, not days.' },
    { icon: 'key-round', title: 'Granular permissions', body: 'Field-level access control, role-based visibility, and an activity log of changes. Sensitive data stays visible only to the people who need it.' },
    { icon: 'chart-no-axes-column', title: 'Pre‑payroll reporting', body: 'Hours, leave balances, and variable pay computed and formatted for your payroll provider. Export-ready every cycle, zero manual reconciliation.' },
  ],
};

export const peopleAgents = {
  eyebrow: 'People agents',
  title: ['Set it up once. Run forever.'],
  description: 'Automate employee lifecycle tasks like onboarding, probation, and payroll handoff as no-code autonomous agentic workflows.',
  features: [
    { icon: 'workflow', title: 'Employee lifecycle', body: 'Onboarding, probation, and offboarding run end-to-end as no-code workflows. Every step of the employee journey, handled.' },
    { icon: 'wallet', title: 'Payroll handoff', body: 'Approved leave, hours, and deductions packaged for your provider every cycle. No manual reconciliation.' },
    { icon: 'messages-square', title: 'People assistant', body: "Employees ask about policies, time off, and contracts — grounded in your company's handbook, not generic AI." },
  ],
  prompt: 'Build an employee onboarding experience for new hires',
  planTitle: 'Onboarding plan',
  steps: [
    { icon: 'file-text', title: 'Generate contract', sub: 'Region-aware template, prefilled' },
    { icon: 'signature', title: 'Request eSignatures', sub: 'Envelope sent to new hire and manager' },
    { icon: 'message-circle', title: 'Send welcome message', sub: 'Slack DM with day-one logistics' },
    { icon: 'list-checks', title: 'Build onboarding tasks', sub: 'Buddy paired, accounts provisioned' },
    { icon: 'calendar-clock', title: 'Schedule leadership 1:1', sub: 'Calendar invite sent for week 2' },
    { icon: 'star', title: 'Collect first-week feedback', sub: 'Survey scheduled for day 7' },
  ],
};

export const performance = {
  eyebrow: 'Performance',
  title: ['Continuous performance,', 'not annual surprises'],
  description: 'Performance reviews and feedback grounded in real data, not memory.',
  features: [
    { icon: 'refresh-cw', title: 'Automate structure and schedule', body: 'Reviews run on your cadence: at hire, after probation, mid-year. Taito.ai launches each round and chases responses.' },
    { icon: 'blocks', title: 'Data from any source', body: 'MCP pulls signals from tools your team already uses, so reviews reflect what happened, not what people remembered.' },
    { icon: 'mouse-pointer-2', title: 'Agentic review', body: 'Agents draft reviews from feedback, flag biases, and surface edge cases for calibration.' },
  ],
  review: {
    avatar: '/assets/images/avatars/daniel-hayes.webp',
    title: 'Daniel Hayes · Q1',
    label: 'Reasoning',
    body: 'Daniel consistently shipped ahead of plan in Q1, leading the auth migration end-to-end and pairing closely with new hires across the platform team. Calibration suggests strong technical impact, with growth opportunity in cross-team…',
    sourcesLabel: 'Sources',
    sources: [
      { name: 'Gemini', src: '/assets/svg/logos/gemini.svg' },
      { name: 'Slack', src: '/assets/svg/logos/slack-small.svg' },
      { name: 'Linear', src: '/assets/svg/logos/linear.svg' },
      { name: 'Google Sheets', src: '/assets/svg/logos/google-sheets.svg' },
    ],
  },
  activity: { title: 'Taito.ai requested peer feedback', sub: 'Asked Hannah about cross team comms' },
};

export const personas = {
  eyebrow: 'Built for',
  title: ['Different roles. Same product.'],
  cards: [
    { href: '/founders', kicker: 'Lean growth for', title: 'Founders and CEOs', body: 'Scale people ops without scaling headcount. Hire only when the work needs a human.', image: '/assets/images/personas/founders-3-1024w.webp', alt: 'Founder working at a laptop in a modern startup office.', position: 'center 30%' },
    { href: '/people-leaders', kicker: 'Strategic focus for', title: 'People leaders', body: 'Hours of approvals and signed PDFs handled automatically. The strategic half is yours.', image: '/assets/images/personas/people-leaders-3-1024w.webp', alt: '', position: 'center 30%' },
    { href: '/operators', kicker: 'Best practices for', title: 'Operators', body: 'Build the structure that scales the company. HR compliance and admin, handled.', image: '/assets/images/personas/operators-4-1024w.webp', alt: '', position: 'center 45%' },
  ],
};

export const testimonial = {
  logo: { src: '/assets/images/logos/way-testimonial.webp', alt: 'Way' },
  quote: "I kept HR in spreadsheets because I didn't have time to onboard yet another HR system. Taito.ai made the whole process feel modern and effortless: I connected our data, confirmed the output, and invited the team. The AI support meant I didn't need to learn a new workflow. Now everyone can see who's off, request leave, and I'm finally out of the spreadsheet.",
  name: 'Juho Hyytiäinen',
  role: 'Co-founder & CEO, Way',
};

export const security = {
  eyebrow: 'Security',
  title: ['Enterprise‑grade security,', 'by default'],
  description: [
    'As an employer, you hold the most sensitive information about your team — salaries, contracts, personal IDs, and health data. Taito.ai is ISO 27001 certified and GDPR compliant from day one, with encryption, activity logs, and field-level permissions built into every layer. ',
    { link: 'See how we handle your data', href: '/security' },
    '.',
  ],
  badges: [
    { icon: 'award', lines: ['ISO 27001', 'certified'] },
    { icon: 'shield-check', lines: ['GDPR', 'compliant'] },
    { icon: 'lock', lines: ['Field-level', 'permissions'], hideOnMobile: true },
    { icon: 'globe', lines: ['EU data', 'residency'] },
  ],
};

export const integrations = {
  eyebrow: 'Integrations',
  title: ['Works where your team', 'already does'],
  cards: [
    {
      title: 'Slack agent',
      body: 'A personal people partner for every employee, right in Slack. Book time off, log hours, find policies, and get answers from the same chat window your team already lives in.',
      image: 'integrations-1',
      slack: {
        channel: 'ask-hr',
        messages: [
          { who: 'Hannah Reid', avatar: '/assets/images/avatars/hannah-reid.webp', time: '14:02', body: ['How much parental leave do UK employees get?'] },
          { who: 'Taito.ai', bot: true, time: '14:02', body: ['52 weeks statutory leave · first 6 weeks at 90% pay, next 33 at statutory rate. Full policy in ', { b: 'Handbook §4.2' }, '.'] },
          { who: 'Hannah Reid', avatar: '/assets/images/avatars/hannah-reid.webp', time: '14:03', body: [{ b: '@Taito.ai' }, ' start a parental leave plan for Daniel Hayes, due Oct 6'] },
        ],
      },
    },
    {
      title: 'MCP interface',
      body: 'Connect Taito.ai to Claude web, Claude Code, or any MCP-compatible host. Every platform action is available over MCP, so it slots into your automation workflows too.',
      image: 'integrations-2-2',
      prompt: 'Draft offer letter for Daniel Hayes, Engineering, Berlin. Send for signing.',
      chip: 'Taito.ai',
    },
    {
      title: 'Platform integrations',
      body: 'Sync with Google Workspace, your ATS, and payroll providers. Employee data flows between your existing tools and Taito.ai so nothing lives in a silo.',
      image: 'integrations-3',
      rows: [
        [
          { name: 'Slack', src: '/assets/svg/logos/slack.svg' },
          { name: 'Google Workspace', src: '/assets/svg/logos/google-workspace.svg' },
          { name: 'Microsoft 365', src: '/assets/svg/logos/microsoft-365.svg' },
          { name: 'Notion', src: '/assets/svg/logos/notion.svg' },
        ],
        [
          { name: 'Greenhouse', src: '/assets/svg/logos/greenhouse.svg' },
          { name: 'Teamtailor', src: '/assets/images/integration-logos/teamtailor-2x.webp', rounded: true },
          { name: 'Xero', src: '/assets/svg/logos/xero.svg' },
          { name: 'DocuSign', src: '/assets/images/integration-logos/docusign-2x.webp', large: true },
          { name: 'Okta', src: '/assets/svg/logos/okta.svg' },
        ],
        [
          { name: 'Gusto', src: '/assets/svg/logos/gusto.svg' },
          { name: 'Fortnox', src: '/assets/svg/logos/fortnox.svg' },
          { name: 'Deel', src: '/assets/svg/logos/deel.svg', large: true },
          { name: 'QuickBooks', src: '/assets/svg/logos/quickbooks.svg' },
        ],
      ],
    },
  ],
};

export const mathStats = {
  eyebrow: 'By the numbers',
  title: ['The math behind the product'],
  rows: [
    { label: 'Of hire-to-retire HR tasks are automatable today', value: '56%', source: 'McKinsey, “Human Resources in the Age of Automation”' },
    { label: 'Saved on leave management alone with automation', value: '16 hrs/mo', source: 'EY 2025 Cost Update Study' },
    { label: 'Annual cost of manual HR processes for a 100-person company', value: '$25k+', source: 'EY 2025 HR Benchmarking' },
    { label: 'Fully loaded cost of a people ops hire, year one', value: '$100k+', source: 'BLS ECEC Q4 2025, Glassdoor 2026' },
  ],
};

export const faq = {
  eyebrow: 'Learn more',
  title: ['Frequently asked questions'],
  items: [
    {
      q: 'What is a people operations system?',
      a: [
        'A people operations system runs the day-to-day plumbing of an employer — employee records, time off and attendance, contracts and documents, performance reviews, and the reporting that flows out to payroll and finance. It’s the layer that turns “we have a team” into a structured operation that scales. Taito.ai is an AI-native people operations system. Where legacy HRIS were built to digitize forms, Taito.ai is built to remove work: a Slack agent that handles requests, automated reports that arrive in payroll inboxes without anyone exporting a spreadsheet, and onboarding flows that run themselves once configured. One product covers the lifecycle from offer signature to performance review, with field-level permissions, activity logs, and regional compliance built in by default.',
      ],
    },
    {
      q: 'How is Taito.ai different from an HRIS?',
      a: [
        'A traditional HRIS is a digital filing cabinet — it stores employee records, generates contracts, and tracks time off, but every workflow still needs a person to push it forward. Setup takes three to six months with a consultant, and AI features sit behind enterprise tiers. Taito.ai keeps the records and adds an operating layer that runs the workflows. The Slack agent handles routine requests, automated reports arrive in payroll inboxes on schedule, and onboarding tasks fire themselves once a contract is signed. Setup takes days, not quarters, and AI is included in the base price — not an upsell. Field-level permissions, activity logs, ISO 27001 certification, and GDPR compliance ship by default, so the security and audit posture matches what a legacy enterprise HRIS would charge an upgrade tier for.',
      ],
    },
    {
      q: 'Who is Taito.ai built for?',
      a: [
        'Taito.ai is built for teams scaling from roughly 30 to 300 employees — the range where ad-hoc spreadsheets and a single Notion page stop working, but a five-person HR team and a dedicated HRIS consultant don’t make sense yet. Three audiences run the product day-to-day: ',
        { link: 'founders', href: '/founders' },
        ' and small leadership teams who want people ops to run itself; ',
        { link: 'people leaders', href: '/people-leaders' },
        ' who handle hiring, reviews, and feedback without a dedicated platform engineering team behind them; and ',
        { link: 'operators', href: '/operators' },
        ' or compliance officers who need defensible records, regional time-off policies, and audit-ready logs. The product covers the whole employee lifecycle in one tier — directory, time off and attendance, documents and eSign, performance cycles, AI workflows — so a small ops function can support a team several times its size without stitching together five SaaS contracts.',
      ],
    },
    {
      q: 'How does Taito.ai handle multi-region time-off policies?',
      a: [
        'Country-specific leave rules — statutory accrual, public holidays, carry-over caps, contract types, EU data residency — are built into the product, not bolted on through a consultant. Add a UK, Swedish, or German employee and the right policy applies automatically: parental leave entitlements, public-holiday calendars, contract templates, and the local nuances that usually require a custom configuration project. Time off, attendance, and pre-payroll reporting all sit in the same product, so the ops team doesn’t reconcile policies across regions every month. When payroll runs, the report exports already reflect the correct accruals per jurisdiction. The same model extends as you hire into new countries — turn on the region, the rules apply, no migration project required. For teams operating across the EU and the UK, this removes a category of recurring monthly work.',
      ],
    },
    {
      q: 'Is Taito.ai ISO 27001 certified and GDPR compliant?',
      a: [
        'Yes. Taito.ai is ISO 27001 certified and GDPR compliant from day one — both controls ship in the base price, not an enterprise upgrade tier. Data is hosted in the EU with optional data residency commitments. Encryption at rest and in transit, single sign-on through Google Workspace and SAML/OIDC, and granular field-level permissions are built into every layer. Activity logs capture every change to employee records, with role-based access controls so sensitive fields like salary and personal identifiers stay visible only to the people who need them. Standard data subject rights — access, export, deletion — are part of the product, not a separate compliance process. Customers can export their data in full at any point, including on cancellation. The full security documentation and certificates live at our ',
        { link: 'trust center', href: 'https://trust.taito.ai' },
        ', with the ',
        { link: 'DPA', href: '/dpa' },
        ' and ',
        { link: 'privacy policy', href: '/privacy' },
        ' available directly.',
      ],
    },
    {
      q: 'How much does Taito.ai cost?',
      a: [
        '€10 per seat per month on monthly billing, €8 per seat per month on annual billing. One tier. Everything inside. There are no add-ons, no enterprise upgrade tier, and no quote-based pricing. AI features — the Slack agent, automated reports, no-code workflows — are included. Activity logs, Google Workspace and SAML sign-on, field-level permissions, and regional compliance for time-off, contracts, and attendance all ship in the base price. This is the actual price, not an early-adopter discount or a promotional rate that resets at renewal. There’s no minimum team size, and pay-monthly customers can cancel any time. Per-seat pricing scales linearly: a 30-person team pays the same per-seat rate as a 300-person team, with volume terms available for larger deployments.',
      ],
    },
  ],
};

export const footer = {
  ctaTitle: 'See what autopilot looks like.',
  ctaBody: 'The operational half of people ops, handled. You focus on the half that needs you.',
  cta: 'Join waitlist',
  columns: [
    {
      heading: 'Product',
      links: [
        { label: 'People directory', href: '/people-directory' },
        { label: 'Time-off and attendance', href: '/time-off-attendance' },
        { label: 'Docs and eSign', href: '/documents' },
        { label: 'Performance', href: '/performance' },
        { label: 'People agents', href: '/agents' },
      ],
    },
    {
      heading: 'Solutions',
      links: [
        { label: 'For founders', href: '/founders' },
        { label: 'For people leads', href: '/people-leaders' },
        { label: 'For operators', href: '/operators' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Pricing', href: '/pricing' },
        { label: 'Blog', href: '/blog' },
        { label: 'MCP use cases', href: '/mcp-use-cases' },
        { label: 'Compliance', href: '/compliance' },
        { label: 'Tools', href: '/tools' },
        { label: 'Company', href: '/company' },
        { label: 'Brand', href: '/brand' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'DPA', href: '/dpa' },
        { label: 'Cookie settings', href: '#cookie-settings', cookieSettings: true },
        { label: 'Archive', href: '/legal/archives' },
        { label: 'Security', href: '/security' },
        { label: 'Trust center', href: 'https://trust.taito.ai/' },
      ],
    },
  ],
  copyright: '© 2026 Taito.ai. Run people ops on autopilot.',
  social: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/taito-ai', icon: '/assets/svg/social/linkedin.svg' },
    { name: 'YouTube', href: 'https://www.youtube.com/@taito_ai', icon: '/assets/svg/social/youtube.svg' },
  ],
};

export const cookies = {
  title: 'We value your privacy',
  body: [
    'We use cookies to understand how visitors use our site and to measure our advertising. They are only set if you agree, and you can change your choice at any time via “Cookie settings” in the footer. See our ',
    { link: 'privacy policy', href: '/privacy' },
    '.',
  ],
  acceptAll: 'Accept all',
  rejectAll: 'Reject all',
  customize: 'Customize',
  save: 'Save',
  options: [
    { id: 'necessary', label: 'Necessary', description: 'Required for the site to work, such as remembering this cookie choice. Always on.', locked: true },
    { id: 'analytics', label: 'Analytics', description: 'Helps us understand how visitors use the site so we can improve it.' },
    { id: 'advertising', label: 'Advertising', description: 'Lets us measure how our ad campaigns perform on other platforms.' },
  ],
};
