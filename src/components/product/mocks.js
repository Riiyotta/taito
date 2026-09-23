// Mock-UI data for the product-page illustrations.
// src/content/product.js has no `mocks` export, so values here come from
// specs/SPEC_product.md §1.1/§2 and, where the spec is silent, from the reference
// screenshots (reference/<page>-1440.png). Items marked "inferred" are not legible
// in the screenshots and were filled in to keep the layout complete.

const IMG = '/assets/pages/product/images';
const SVG = '/assets/pages/product/svg';

export const avatars = {
  daniel: `${IMG}/daniel-hayes-3.webp`,
  hannah: `${IMG}/hannah-reid-3.webp`,
  olivia: `${IMG}/olivia-hartley-3.webp`,
  marcus: `${IMG}/marcus-bennett-1.webp`,
  sophie: `${IMG}/sophie-lane-1.webp`,
  james: `${IMG}/james-whitfield-1.webp`,
};

export const taitoMark = `${SVG}/taito-mark.svg`;

/* ---------- agents ---------- */
export const agentActions = {
  title: 'Agent actions',
  range: 'Last 12 months',
  bars: [
    ['Jun', 28], ['Jul', 52], ['Aug', 34], ['Sep', 61], ['Oct', 45], ['Nov', 72],
    ['Dec', 38], ['Jan', 84], ['Feb', 56], ['Mar', 96], ['Apr', 67], ['May', 88],
  ],
};

export const recentRuns = {
  title: 'Recent runs',
  head: ['Agent', 'Duration', 'Actions', 'Status'],
  // track order (first row sits above the window)
  rows: [
    { icon: 'users', name: 'Probation mid-review', duration: '5.6s', actions: 12 },
    { icon: 'bell', name: 'Weekly people report', duration: '9.3s', actions: 22 },
    { icon: 'list-checks', name: 'Onboarding agent', duration: '8.4s', actions: 23 },
    { icon: 'file-text', name: 'Payroll reporter', duration: '3.1s', actions: 7 },
    { icon: 'calendar-clock', name: 'Time-off router', duration: '1.8s', actions: 4 },
    { icon: 'star', name: 'Performance review', duration: '15.2s', actions: 41 },
    { icon: 'signature', name: 'Offboarding agent', duration: '6.2s', actions: 14 },
  ],
};

export const onboardingPlan = {
  prompt: 'Build an employee onboarding experience for new hires',
  title: 'Onboarding plan',
  steps: [
    { icon: 'signature', title: 'Request eSignatures', sub: 'Envelope sent to new hire and manager' },
    { icon: 'message-circle', title: 'Send welcome message', sub: 'Slack DM with day-one logistics' },
    { icon: 'list-checks', title: 'Build onboarding tasks', sub: 'Buddy paired, accounts provisioned' },
    { icon: 'calendar-clock', title: 'Schedule leadership 1:1', sub: 'Calendar invite sent for week 2' },
    { icon: 'heart-handshake', title: 'Collect first-week feedback', sub: 'Survey scheduled for day 7' },
    { icon: 'file-text', title: 'Generate contract', sub: 'Region-aware template, prefilled' },
  ],
};

// 5 / 6 / 5 logo grid. kind: 'svg' | 'img' ; lg = larger logo size
export const integrationRows = [
  [
    { name: 'Slack', src: `${SVG}/slack.svg` },
    { name: 'Google Workspace', src: `${SVG}/google-workspace.svg` },
    { name: 'Microsoft 365', src: `${SVG}/microsoft-365.svg` },
    { name: 'Notion', src: `${SVG}/notion.svg` },
    { name: 'Zapier', src: `${SVG}/zapier.svg` },
  ],
  [
    { name: 'Greenhouse', src: `${SVG}/greenhouse.svg` },
    { name: 'Teamtailor', src: `${IMG}/teamtailor.webp`, rounded: true },
    { name: 'DocuSign', src: `${IMG}/docusign.webp`, lg: true },
    { name: 'Xero', src: `${SVG}/xero.svg` },
    { name: 'Okta', src: `${SVG}/okta.svg` },
    { name: 'Make', src: `${SVG}/make.svg` },
  ],
  [
    { name: 'Gusto', src: `${SVG}/gusto.svg` },
    { name: 'Fortnox', src: `${SVG}/fortnox.svg` },
    { name: 'Deel', src: `${SVG}/deel.svg`, lg: true },
    { name: 'n8n', src: `${SVG}/n8n.svg` },
    { name: 'QuickBooks', src: `${SVG}/quickbooks.svg` },
  ],
];

/* ---------- performance ---------- */
export const review = {
  title: 'Daniel Hayes · Q1',
  sourcesLabel: 'Sources',
  sources: [
    { name: 'Gemini', src: `${SVG}/gemini-sm.svg` },
    { name: 'Slack', src: `${SVG}/slack-sm.svg` },
    { name: 'Linear', src: `${SVG}/linear-sm.svg` },
    { name: 'Google Sheets', src: `${SVG}/google-sheets-sm.svg` },
  ],
  label: 'Reasoning',
  body: 'Daniel consistently shipped ahead of plan in Q1, leading the auth migration end-to-end and pairing closely with new hires across the platform team. Calibration suggests strong technical impact, with growth opportunity in cross-team…',
  agendaTitle: 'Development discussion agenda',
  agendaBody:
    'Open with Q1 highlights from auth migration delivery and platform mentorship. Move to a 30/60/90 plan for cross-team communication, then align on a Q2 stretch goal of leading a platform initiative across two teams.',
};

export const reviewCycle = {
  title: 'New review cycle',
  items: [
    { icon: 'heart', title: 'How did the values show up this quarter?', sub: 'Culture question' },
    { icon: 'target', title: 'Impact and growth this quarter', sub: 'Performance question' },
    { icon: 'message-square', title: 'Anything else to share?', sub: 'Other feedback' },
    { icon: 'mouse-pointer-2', title: 'AI review', sub: 'Pre-review feedback and request changes', toggle: true },
  ],
  cta: 'Run now',
  results: [
    { avatar: 'hannah', title: 'Feedback request sent', sub: 'Hannah Reid · 3 peers · due Aug 22' },
    { icon: 'calendar-clock', title: 'Discussion scheduled', sub: 'Olivia Hartley · Daniel Hayes · Aug 28' },
    { mark: `${SVG}/taito-mark-36.svg`, title: 'Requested feedback', sub: 'Daniel Hayes · 4 sources' },
  ],
};

// tone: g(reen) n(eutral) r(ed) a(mber). Performance column + some flight-risk
// values are cut off in the reference screenshot (inferred).
export const insights = {
  title: 'Performance insights',
  sub: 'Real-time performance and feedback insights for your organization',
  tabs: ['Quarter', 'Year', 'All time'],
  search: 'Filter team…',
  head: ['Name', 'Job title', 'Probation', 'Culture', 'Flight risk', 'Performance'],
  rows: [
    ['daniel', 'Daniel Hayes', 'Co-founder & CEO', ['Passed', 'g'], ['Exceeds', 'g'], ['Low', 'g'], ['Exceeds', 'g']],
    ['olivia', 'Olivia Hartley', 'Senior Engineer', ['Passed', 'g'], ['Fulfilling', 'n'], ['Low', 'g'], ['Exceeds', 'g']],
    ['marcus', 'Marcus Bennett', 'Engineering Manager', ['Passed', 'g'], ['Fulfilling', 'n'], ['None', 'n'], ['Fulfilling', 'n']],
    ['hannah', 'Hannah Reid', 'Customer Success Lead', ['Passed', 'g'], ['Exceeds', 'g'], ['None', 'n'], ['Exceeds', 'g']],
    ['NP', 'Noah Patel', 'Software Engineer', ['Ongoing', 'n'], ['Fulfilling', 'n'], ['High', 'r'], ['Below', 'a']],
    ['sophie', 'Sophie Lane', 'People Operations', ['Passed', 'g'], ['Fulfilling', 'n'], ['None', 'n'], ['Fulfilling', 'n']],
    ['EV', 'Elena Volkov', 'Product Designer', ['Ongoing', 'n'], ['Below', 'a'], ['None', 'n'], ['Fulfilling', 'n']],
    ['james', 'James Whitfield', 'Co-founder & COO', ['Passed', 'g'], ['Fulfilling', 'n'], ['None', 'n'], ['Fulfilling', 'n']],
  ],
};

/* ---------- time-off ---------- */
export const timeOffHero = {
  approval: { avatar: 'daniel', name: 'Daniel Hayes', sub: 'Annual leave · Aug 12 – 22 · 8 working days · Approved' },
  title: 'Time-off balances',
  items: [
    { icon: 'plane-takeoff', title: 'Annual leave', sub: '13 of 25 days remaining' },
    { icon: 'stethoscope', title: 'Sick leave', sub: '8 of 10 days remaining' },
    { icon: 'baby', title: 'Parental leave', sub: '90 days available' },
    { icon: 'clock', title: 'Flex hours', sub: '+4.5 hours banked' },
  ],
};

export const timeOffFlow = {
  channel: 'time-off',
  messages: [
    { avatar: 'hannah', who: 'Hannah Reid', time: '10:24', body: [{ b: '@Taito.ai' }, ' book 5 days annual leave, Aug 11–15'] },
    { bot: true, who: 'Taito.ai', time: '10:24', body: ['Drafted request · 5 days · Balance after approval: 18 of 25 remaining · Awaiting manager'] },
  ],
  approval: { avatar: 'olivia', title: 'Olivia Hartley approved the request', sub: 'Manager · Engineering' },
  results: [
    { icon: 'calendar-plus', title: 'Google Calendar event', sub: 'Annual leave · Aug 11–15 · OOO invite sent' },
    { icon: 'wallet', title: 'Payroll updated', sub: '5 paid days written to August pre-payroll line' },
  ],
};

// Overtime column is cut off in the screenshot; derived as payable hours − 7.5 h × payable days (inferred).
export const attendance = {
  title: 'Time and time-off',
  sub: "Follow your organization's attendance and time-off",
  chips: ['UK attendance policy', 'Running cycle'],
  search: 'Find employee…',
  cta: 'Export',
  head: ['Employee', 'Payable days', 'Payable hours', 'Expected days', 'Expected hours', 'Overtime hours'],
  rows: [
    ['olivia', 'Olivia Hartley', '10', '75', '21', '157.5', '0'],
    ['marcus', 'Marcus Bennett', '10', '76.5', '21', '157.5', '1.5'],
    ['daniel', 'Daniel Hayes', '8', '60', '21', '157.5', '0'],
    ['hannah', 'Hannah Reid', '10', '78', '21', '157.5', '3'],
    ['james', 'James Whitfield', '9', '67.5', '21', '157.5', '0'],
    ['sophie', 'Sophie Lane', '10', '75', '21', '157.5', '0'],
    ['NP', 'Noah Patel', '9.5', '71.5', '21', '157.5', '0.25'],
  ],
};

/* ---------- people directory ---------- */
export const directory = {
  title: 'People directory',
  sub: "Manage your organization's employees",
  tabs: ['List', 'Org chart', 'Grid'],
  search: 'Find in view…',
  cta: 'New hire',
  head: ['Name', 'Job title', 'Reports to', 'Groups'],
  // [avatar, name, title, reportsToAvatar, reportsTo, [groupA stack], [groupB stack]]
  rows: [
    ['olivia', 'Olivia Hartley', 'Senior Engineer', 'marcus', 'Marcus Bennett', ['olivia', 'marcus'], ['NP']],
    ['marcus', 'Marcus Bennett', 'Engineering Manager', 'daniel', 'Daniel Hayes', ['olivia', 'marcus'], ['NP']],
    ['daniel', 'Daniel Hayes', 'Co-founder & CEO', 'james', 'James Whitfield', ['marcus', 'daniel'], ['james']],
    ['hannah', 'Hannah Reid', 'Customer Success Lead', 'james', 'James Whitfield', ['hannah', 'PS'], ['AF']],
    ['james', 'James Whitfield', 'Co-founder & COO', 'daniel', 'Daniel Hayes', ['marcus', 'daniel'], ['james']],
    ['sophie', 'Sophie Lane', 'People Operations', 'james', 'James Whitfield', ['sophie'], ['hannah']],
    ['NP', 'Noah Patel', 'Software Engineer', 'marcus', 'Marcus Bennett', ['olivia', 'marcus'], ['NP']],
    ['EV', 'Elena Volkov', 'Product Designer', 'marcus', 'Marcus Bennett', ['olivia', 'marcus'], ['NP']],
  ],
};

export const record = {
  avatar: 'olivia',
  name: 'Olivia Hartley',
  sub: 'Senior Engineer · L5 · London, UK',
  positions: [
    { title: 'Senior Engineer · L5', sub: 'Apr 1, 2025 —' },
    { title: 'Engineer II · L4', sub: 'Mar 16, 2024 — Mar 31, 2025', past: true },
  ],
  comp: { label: 'Compensation', visibility: 'Visible to you', title: '£85,000 base', sub: 'Raise effective Apr 1, 2025' },
  docs: [
    { icon: 'file-text', label: 'Employment contract (UK)' },
    { icon: 'file-check', label: 'Probation record' },
  ],
};

export const orgChart = {
  lines: `${SVG}/org-chart-lines.svg`,
  cards: [
    { pos: 'top', avatar: 'daniel', name: 'Daniel Hayes', role: 'Co-founder & CEO' },
    { pos: 'left', avatar: 'marcus', name: 'Marcus Bennett', role: 'Engineering Manager' },
    { pos: 'right', avatar: 'sophie', name: 'Sophie Lane', role: 'People Ops' },
    { pos: 'bottom', avatar: 'olivia', name: 'Olivia Hartley', role: 'Senior Engineer' },
  ],
  pills: [
    { label: 'Reports to', x: '35%', y: '30%' },
    { label: 'Collaborates', x: '65%', y: '30%' },
    { label: 'Reports to', x: '35%', y: '70%' },
    { label: 'Coached by', x: '65%', y: '70%' },
  ],
};

/* ---------- documents ---------- */
const LOREM_A =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.';
const LOREM_B =
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in.';

// Only the "Contract" panel heading is legible in the reference; the other three are inferred.
export const templates = {
  tabs: ['Offer', 'Contract', 'Probation', 'Promotion'],
  panels: [
    { title: 'Offer letter — Daniel Hayes', meta: 'Senior Engineer · Berlin', body: [LOREM_A, LOREM_B] },
    { title: 'Employment contract — Daniel Hayes', meta: 'Permanent · Full-time', body: [LOREM_A, LOREM_B] },
    { title: 'Probation review — Daniel Hayes', meta: '6-month review', body: [LOREM_A, LOREM_B] },
    { title: 'Promotion letter — Daniel Hayes', meta: 'Effective Apr 1', body: [LOREM_A, LOREM_B] },
  ],
  signer: 'Daniel Hayes',
  esign: 'eSignature',
};

export const docsFlow = {
  generating: { title: 'Generating offer letter for Daniel Hayes', sub: 'From employment template · Berlin · Engineering' },
  title: 'eSignatures',
  signers: [
    { avatar: 'daniel', name: 'Daniel Hayes', sub: 'Signed · Mar 14', signed: true },
    { avatar: 'olivia', name: 'Olivia Hartley', sub: 'Awaiting signature' },
  ],
  filed: { icon: 'file-plus-corner', title: 'Filed under Daniel Hayes', sub: 'Retention: 7 years · Germany' },
};

// 39 wheel cards. The ten legible in the reference are verbatim; the rest are inferred
// from the same categories.
const wheelDocs = [
  ['Offer letter', 110, 'Senior PM offer — Stockholm'],
  ['Contract', 23, 'Confidentiality addendum'],
  ['Leave', 218, 'Jury duty leave confirmation'],
  ['Letter of termination', 205, 'Constructive dismissal notice'],
  ['Compensation', 142, 'Profit-sharing acknowledgment'],
  ['Promotion', 155, 'Team lead transition letter'],
  ['Contract', 132, 'Garden leave agreement'],
  ['Performance', 97, '360 review summary Q1'],
  ['Performance', 98, 'Annual review summary'],
  ['Onboarding', 61, 'Background check authorization'],
  ['Offer letter', 14, 'Staff engineer offer — Berlin'],
  ['Contract', 31, 'Fixed-term employment contract'],
  ['Leave', 220, 'Parental leave confirmation'],
  ['Compensation', 147, 'Salary adjustment letter'],
  ['Onboarding', 64, 'Equipment acknowledgment'],
  ['Policy', 180, 'Remote work policy acknowledgment'],
  ['Promotion', 158, 'Senior engineer promotion'],
  ['Performance', 101, 'Probation review — 6 months'],
  ['Contract', 36, 'Intellectual property assignment'],
  ['Letter of termination', 207, 'Mutual separation agreement'],
  ['Offer letter', 116, 'Designer offer — London'],
  ['Leave', 223, 'Sabbatical approval'],
  ['Compensation', 150, 'Bonus award letter'],
  ['Policy', 183, 'Code of conduct acknowledgment'],
  ['Onboarding', 67, 'Right-to-work verification'],
  ['Contract', 40, 'Part-time contract amendment'],
  ['Promotion', 161, 'Manager appointment letter'],
  ['Performance', 104, 'Performance improvement plan'],
  ['Leave', 226, 'Sick leave certificate'],
  ['Offer letter', 119, 'Sales lead offer — Helsinki'],
  ['Compensation', 153, 'Equity grant notice'],
  ['Policy', 186, 'Data protection acknowledgment'],
  ['Contract', 44, 'Non-compete agreement'],
  ['Onboarding', 70, 'Tax declaration form'],
  ['Letter of termination', 210, 'Notice of resignation receipt'],
  ['Promotion', 164, 'Role change confirmation'],
  ['Leave', 229, 'Compassionate leave confirmation'],
  ['Performance', 107, 'Mid-year check-in notes'],
  ['Compensation', 156, 'Relocation allowance letter'],
];

// ring sizes: inner 9, middle 13, outer 17 = 39 (distribution inferred)
const RINGS = [
  { ring: 'inner', n: 9 },
  { ring: 'middle', n: 13 },
  { ring: 'outer', n: 17 },
];
export const wheelCards = (() => {
  const out = [];
  let k = 0;
  RINGS.forEach(({ ring, n }, r) => {
    for (let i = 0; i < n; i += 1) {
      const [label, num, title] = wheelDocs[k];
      out.push({
        ring,
        angle: (360 / n) * i + r * 11,
        tilt: ((k * 7) % 11) - 5,
        label,
        doc: `Doc ${String(num).padStart(3, '0')}`,
        title,
      });
      k += 1;
    }
  });
  return out;
})();

/* ---------- security ---------- */
export const approvals = {
  done: { icon: 'check', title: 'Chased three managers on overdue reviews', sub: 'Ran on its own · logged 09:02' },
  pending: {
    icon: 'shield-alert',
    title: 'Sync salary change to payroll for Daniel Hayes',
    sub: 'Stopped · a person has to confirm this one',
    status: 'Waiting on you',
    decline: 'Decline',
    approve: 'Approve',
  },
};

/* ---------- pricing / security / waitlist ---------- */
export const prices = [
  { term: 'Annual', badge: 'Save 20%', price: '€8 / seat / month', note: 'billed annually', primary: true },
  { term: 'Monthly', price: '€10 / seat / month', note: 'billed monthly' },
];

export const customerLogos = [
  { name: 'Huuva', src: `${IMG}/huuva.webp` },
  { name: 'Strise', src: `${IMG}/strise.webp` },
  { name: 'Shook', src: `${IMG}/shook.webp` },
  { name: 'Clock&Cloud', src: `${IMG}/clock-and-cloud.webp` },
  { name: 'Way', src: `${IMG}/way.webp` },
  { name: 'Zero', src: `${SVG}/zero-wordmark.svg`, noFilter: true },
  { name: 'Faculty', src: `${IMG}/faculty.webp` },
];

export const badgeSets = {
  pricing: [
    { icon: 'award', lines: ['ISO 27001', 'certified'] },
    { icon: 'shield-check', lines: ['GDPR', 'compliant'] },
    { icon: 'lock', lines: ['Field-level', 'permissions'], hideOnMobile: true },
    { icon: 'globe', lines: ['EU/US data', 'residency'] },
  ],
  security: [
    { icon: 'award', lines: ['ISO 27001', 'certified'] },
    { icon: 'shield-check', lines: ['GDPR', 'compliant'] },
    { icon: 'lock', lines: ['Field-level', 'permissions'], hideOnMobile: true },
    { icon: 'key-round', lines: ['Encrypted in transit', 'and at rest'] },
  ],
  waitlist: [
    { icon: 'globe', lines: ['EU + US', 'compliance'] },
    { icon: 'mouse-pointer-2', lines: ['AI-automated', 'people ops'] },
    { icon: 'message-circle', lines: ['Slack-native', 'workflows'] },
  ],
};

export const waitlistForm = {
  email: 'Work email',
  source: 'Where did you hear about us?',
  sourcePlaceholder: 'Select one',
  sources: [
    'LinkedIn',
    'Reddit',
    'Instagram',
    'Google search',
    'AI search',
    'Another website',
    'Email / message',
    'At an event',
    'From a friend / colleague',
    'Other',
  ],
  message: "Tell us about your requirements and when you'd like to start",
  messagePlaceholder: "I am interested in using Taito.ai to... and we'd like to start in...",
  contact: 'contact@taito.ai',
  submit: 'Send message',
  success: "You're in. We'll email when there's a slot, usually within a few weeks.",
  errors: {
    email: 'Enter a valid work email.',
    source: 'Select where you heard about us.',
    message: 'Tell us a little about your requirements.',
  },
};
