// Hero illustrations. Copy comes from each use case's `hero.description` (content/mcp-tools.js);
// layout read off reference/mcp-<slug>-1440.png. All are static; the review cards' typewriter
// and caret seen in the references are left for the Animation pass.
import { avatars, logos } from '../../content/mcp-tools.js';
import { Logo, MIcon } from './shared.jsx';

const TAITO_AVATAR = '/assets/svg/brand/taito-mark-chat-avatar.svg';

/* ------------------------------------------------------------------ index: tool grid around the hub */

export function LogoGrid({ grid }) {
  return (
    <div className="mt-logo-grid flex flex-col items-center gap-8">
      {grid.map((row, r) => (
        <div key={r} className="flex items-center gap-8">
          {row.map((id) =>
            id === 'HUB' ? (
              <div
                key={id}
                className="mt-logo-hub glass-border relative flex items-center justify-center rounded-xl bg-ink shadow-xs"
                style={{ '--glass-border-radius': '0.75rem' }}
              >
                <img src={logos.taitoHub.src} alt="" className="size-10 rounded-md" />
                <span className="absolute bottom-[-0.3rem] left-1/2 inline-flex -translate-x-1/2 items-center gap-space-3xs whitespace-nowrap rounded-full bg-surface px-space-2xs py-[3px] text-step--2 font-medium leading-normal text-ink shadow-xs">
                  <img src={logos.mcp.src} alt="" className="size-3" />
                  MCP
                </span>
              </div>
            ) : (
              <div
                key={id}
                className="mt-logo-tile glass-border flex items-center justify-center rounded-lg bg-white shadow-xs"
                style={{ '--glass-border-radius': '0.5rem' }}
              >
                <Logo id={id} className="size-8" />
              </div>
            ),
          )}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ building blocks */

function Card({ children, className = '' }) {
  return (
    <div className={`glass-border grid rounded-lg bg-surface shadow-xs ${className}`} style={{ '--glass-border-radius': '0.5rem' }}>
      {children}
    </div>
  );
}

function CardHead({ title, meta, children }) {
  return (
    <div className="flex items-center justify-between gap-space-s border-b border-surface-tertiary px-space-m py-space-s">
      {children || <p className="truncate text-step--1 font-medium leading-normal text-ink">{title}</p>}
      {meta && <p className="shrink-0 text-step--2 leading-normal text-secondary-foreground">{meta}</p>}
    </div>
  );
}

function CardFoot({ children }) {
  return (
    <div className="flex items-center justify-between gap-space-s border-t border-surface-tertiary px-space-m py-space-s text-step--2 leading-normal text-secondary-foreground">
      {children}
    </div>
  );
}

function Pill({ tone = 'neutral', children }) {
  const t = tone === 'positive' ? 'mt-pill-positive' : tone === 'warning' ? 'mt-pill-warning' : 'bg-surface-secondary text-secondary-foreground';
  return <span className={`inline-flex shrink-0 items-center rounded-full px-space-2xs py-[2px] text-step--2 leading-normal ${t}`}>{children}</span>;
}

function SourceDot({ id }) {
  return (
    <span className="inline-flex size-5 items-center justify-center rounded-full bg-surface-secondary">
      <Logo id={id} className="size-3" />
    </span>
  );
}

/** Rich line: array of string | {b} */
function Segs({ segs }) {
  return segs.map((s, i) => (typeof s === 'string' ? <span key={i}>{s}</span> : <span key={i} className="font-medium text-ink">{s.b}</span>));
}

/* ------------------------------------------------------------------ per-use-case mocks */

function ReviewCard({ avatar, name, grounded, sources, reasoning }) {
  return (
    <Card className="overflow-visible">
      <img
        src={avatar}
        alt=""
        className="absolute left-1/2 top-[-40px] size-20 -translate-x-1/2 rounded-full object-cover ring-[3px] ring-surface"
      />
      <div className="flex flex-col gap-space-3xs px-space-m pb-space-s pt-space-l-xl">
        <p className="text-step--1 font-medium leading-normal text-ink">{name}</p>
        <p className="text-step--2 leading-normal text-secondary-foreground">{grounded}</p>
      </div>
      <div className="flex items-center gap-space-s border-t border-surface-tertiary px-space-m py-space-s">
        <span className="text-step--2 leading-normal text-ink">Sources</span>
        <span className="flex gap-space-3xs">
          {sources.map((s) => (
            <SourceDot key={s} id={s} />
          ))}
        </span>
      </div>
      <div className="mt-fade-out flex h-[9.5rem] flex-col gap-space-2xs border-t border-surface-tertiary px-space-m py-space-s">
        <p className="text-step--2 font-medium leading-normal text-ink">Reasoning</p>
        <p className="text-step--2 leading-normal text-ink">{reasoning}</p>
      </div>
    </Card>
  );
}

function SlackDM({ channel, messages }) {
  return (
    <Card>
      <div className="flex items-center gap-space-3xs border-b border-surface-tertiary px-space-s py-space-2xs text-step--2 font-medium leading-normal text-ink">
        <MIcon name="hash" className="size-3.5" />
        {channel}
      </div>
      <ul className="flex flex-col gap-space-s p-space-s">
        {messages.map((m, i) => (
          <li key={i} className="flex gap-space-xs">
            <img
              src={m.bot ? TAITO_AVATAR : m.avatar}
              alt=""
              className="size-[calc(theme(spacing.space-s)+theme(spacing.space-xs))] flex-none rounded-md bg-surface-secondary object-cover"
            />
            <div className="min-w-0 text-step--2 leading-normal">
              <p>
                <span className="font-medium text-ink">{m.who}</span>
                <span className="ml-space-2xs text-muted-foreground">{m.time}</span>
              </p>
              <p className="text-secondary-foreground">
                <Segs segs={m.body} />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function AvailabilityDigest() {
  const rows = [
    ['Hannah Reid', 'off Wed, Thu · annual leave'],
    ['Daniel Hayes', 'off Fri · UK public holiday'],
    ['Olivia Hartley', 'WFH all week'],
  ];
  return (
    <Card>
      <div className="flex items-center justify-between gap-space-s border-b border-surface-tertiary px-space-s py-space-2xs text-step--2 leading-normal">
        <span className="font-medium text-ink">#general</span>
        <span className="text-secondary-foreground">Mon, May 12 · 9:00 AM</span>
      </div>
      <div className="flex gap-space-xs p-space-s">
        <img src={TAITO_AVATAR} alt="" className="size-[calc(theme(spacing.space-s)+theme(spacing.space-xs))] flex-none rounded-md" />
        <div className="flex min-w-0 flex-1 flex-col gap-space-s text-step--2 leading-normal">
          <div>
            <p className="font-medium text-ink">Taito.ai</p>
            <p className="font-medium text-secondary-foreground">This week — May 12–16</p>
          </div>
          <ul className="flex flex-col gap-space-3xs text-secondary-foreground">
            {rows.map(([n, t]) => (
              <li key={n}>
                <span className="font-medium text-ink">{n}</span> · {t}
              </li>
            ))}
          </ul>
          <p className="text-secondary-foreground">
            Wednesday and Thursday are thin — Hannah and Daniel are both out, so anything that needs either of them will stall. Worth
            pulling that work forward to Mon–Tue or handing it off before Wednesday.
          </p>
          <p className="border-t border-surface-tertiary pt-space-s text-secondary-foreground">
            3 people out this week · <span className="inline-link">full calendar in Taito.ai</span>
          </p>
        </div>
      </div>
    </Card>
  );
}

function OnboardingCard() {
  const steps = [
    ['Employee synced from Ashby', 'record · position · groups'],
    ['Onboarding task list assigned', '8 tasks · Design'],
    ['Probation review cycle scheduled', 'opens day 76'],
    ['First 1:1 booked with manager', 'Google Calendar'],
    ['Probation review booked', 'day 90 · Google Calendar'],
  ];
  return (
    <Card>
      <div className="flex items-center gap-space-xs border-b border-surface-tertiary px-space-m py-space-s">
        <img src={avatars.sophie} alt="" className="size-8 flex-none rounded-full object-cover" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-step--1 font-medium leading-normal text-ink">Sophie Lane · Product Designer</p>
          <p className="truncate text-step--2 leading-normal text-secondary-foreground">Starts Sep 1 · reports to Marcus Bennett</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-space-3xs rounded-full bg-surface-secondary px-space-2xs py-[3px] text-step--2 leading-normal text-secondary-foreground">
          <Logo id="ashby" className="size-3" />
          Hired
        </span>
      </div>
      <ul className="flex flex-col gap-space-xs px-space-m py-space-s">
        {steps.map(([t, m]) => (
          <li key={t} className="flex items-center gap-space-xs">
            <span className="mt-pill-positive inline-flex size-5 flex-none items-center justify-center rounded-full">
              <MIcon name="check" className="size-3" />
            </span>
            <span className="min-w-0 flex-1 truncate text-step--1 leading-normal text-ink">{t}</span>
            <span className="shrink-0 text-step--2 leading-normal text-secondary-foreground">{m}</span>
          </li>
        ))}
      </ul>
      <CardFoot>
        <span>Onboarding ready</span>
        <span className="flex gap-space-2xs">
          <Logo id="ashby" className="size-3.5" />
          <Logo id="taito" className="size-3.5" />
          <Logo id="googleCalendar" className="size-3.5" />
        </span>
      </CardFoot>
    </Card>
  );
}

function PayrollCard() {
  const rows = [
    ['New hires', '+2', 'positive'],
    ['Leavers', '−1', 'neutral'],
    ['Salary bumps', '+3', 'neutral'],
    ['Outliers flagged', '1', 'warning'],
  ];
  return (
    <Card>
      <CardHead title="May payroll — 42 employees" meta="Diff vs. April" />
      <ul className="flex flex-col gap-space-s px-space-m py-space-s">
        {rows.map(([l, v, tone]) => (
          <li key={l} className="flex items-center justify-between gap-space-s text-step--1 leading-normal text-ink">
            {l}
            <Pill tone={tone}>{v}</Pill>
          </li>
        ))}
      </ul>
      <CardFoot>
        <span>Ready to send</span>
        <span className="flex items-center gap-space-2xs text-step--1 font-medium text-ink">
          <MIcon name="file-spreadsheet" className="size-4" />
          payroll-may.csv
        </span>
      </CardFoot>
    </Card>
  );
}

function CommissionCard() {
  const rows = [
    ['Marcus Bennett', '$412k', '$8,240'],
    ['Hannah Reid', '$357k', '$7,140'],
    ['James Whitfield', '$298k', '$5,960'],
  ];
  return (
    <Card>
      <CardHead title="Q2 sales commission" meta="Closed-won → payout" />
      <ul className="flex flex-col gap-space-s px-space-m py-space-s">
        {rows.map(([n, closed, pay]) => (
          <li key={n} className="flex items-center gap-space-s text-step--1 leading-normal text-ink">
            <span className="flex-1 truncate">{n}</span>
            <span className="font-mono text-step--2 text-secondary-foreground">{closed}</span>
            <span className="font-medium">{pay}</span>
          </li>
        ))}
      </ul>
      <CardFoot>
        <span>Written to Taito.ai</span>
        <span className="flex items-center gap-space-2xs text-step--1 font-medium text-ink">
          <Logo id="taito" className="size-4" />
          Sales commission → July payroll
        </span>
      </CardFoot>
    </Card>
  );
}

function ProbationTracker() {
  const people = [
    [avatars.sophie, 'Sophie Lane', 'Software Engineer · 42 days left', 'On track', 'positive'],
    [avatars.marcus, 'Marcus Bennett', 'Product Designer · 11 days left', 'Needs check-in', 'warning'],
    [avatars.james, 'James Whitfield', 'Senior AE · 68 days left', 'On track', 'positive'],
  ];
  return (
    <div className="flex flex-col gap-space-s">
      <div className="flex items-center gap-space-2xs text-step--2 leading-normal text-secondary-foreground">
        <span className="inline-flex items-center gap-space-3xs rounded-full bg-white px-space-2xs py-[3px] font-medium text-ink shadow-xs">
          <Logo id="lovable" className="size-3.5" />
          Lovable
        </span>
        Building <span className="font-medium text-ink">/probation</span>
      </div>
      <Card>
        <CardHead title="Probation tracker" meta="3 active" />
        <ul className="px-space-s">
          {people.map(([img, n, sub, status, tone]) => (
            <li key={n} className="flex items-center gap-space-xs border-b border-surface-tertiary py-space-s last:border-b-0">
              <img src={img} alt="" className="size-9 flex-none rounded-full object-cover" />
              <div className="min-w-0 flex-1 text-step--2 leading-normal">
                <p className="font-medium text-ink">{n}</p>
                <p className="text-secondary-foreground">{sub}</p>
              </div>
              <Pill tone={tone}>{status}</Pill>
            </li>
          ))}
        </ul>
        <CardFoot>
          <span className="flex items-center gap-space-2xs">
            <Logo id="taito" className="size-3" />
            Live from Taito.ai MCP
          </span>
          <span>Just now</span>
        </CardFoot>
      </Card>
    </div>
  );
}

const MOCKS = {
  'engineering-performance-review-linear': () => (
    <ReviewCard
      avatar={avatars.daniel}
      name="Daniel Hayes · Q2"
      grounded="Grounded in 12 issues · 4 PR reviews"
      sources={['taito', 'linear']}
      reasoning="Daniel shipped ahead of plan in Q2, leading the auth migration and pairing with new engineers across the platform team. Q2 cycles show consistent delivery on ENG-1204, ENG-1257, and the review-latency initiative in ENG-1281, with growth opportunity in cross-team communication…"
    />
  ),
  'gtm-performance-review-hubspot': () => (
    <ReviewCard
      avatar={avatars.hannah}
      name="Hannah Reid · Q2"
      grounded="Grounded in 7 closed deals · 42 activities"
      sources={['taito', 'hubspot']}
      reasoning="Hannah closed 118% of quota in Q2, sourced $1.4M in new pipeline, and led the Northwind expansion alongside three logo wins. Forecast accuracy has held within 5% since April, with growth opportunity in shortening mid-market discovery…"
    />
  ),
  'ask-hr-in-slack': () => (
    <SlackDM
      channel="Taito.ai"
      messages={[
        { who: 'Olivia Hartley', time: '9:14 AM', avatar: avatars.olivia, body: ['How much annual leave will I have accrued by the end of October?'] },
        {
          who: 'Taito.ai',
          time: '9:14 AM',
          bot: true,
          body: ['You’re at ', { b: '12 days' }, ' today. Your policy accrues ', { b: '2.08 days a month' }, ', so you’ll be at ', { b: '18.25 days' }, ' on Oct 31 — nothing else is booked between now and then.'],
        },
        { who: 'Olivia Hartley', time: '9:16 AM', avatar: avatars.olivia, body: ['Book me a week off in the first week of August and the first week of September.'] },
        {
          who: 'Taito.ai',
          time: '9:16 AM',
          bot: true,
          body: ['Done. ', { b: 'Aug 3–7' }, ' and ', { b: 'Sep 1–4' }, ' are booked as annual leave — 9 working days, both approved. Your Oct 31 balance is now ', { b: '9.25 days' }, '.'],
        },
      ]}
    />
  ),
  'team-availability-digest-slack': AvailabilityDigest,
  'onboarding-automation-ashby': OnboardingCard,
  'payroll-prep': PayrollCard,
  'sales-bonus-hubspot': CommissionCard,
  'custom-people-apps-lovable': ProbationTracker,
};

export function UseCaseMock({ slug }) {
  const M = MOCKS[slug];
  if (!M) return null;
  return (
    <div className="mt-mock">
      <M />
    </div>
  );
}
