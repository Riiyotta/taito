// Split-section media mocks (specs/SPEC_product.md §2). All are pointer-events:none;
// figure-level hover pauses the auto-advancing ones.
import { useEffect, useLayoutEffect, useRef } from 'react';
import { animate } from 'motion';
import { SendButton } from '../ui.jsx';
import {
  Avatar,
  Card,
  CheckBadge,
  EASE,
  EASE_IN_OUT,
  FlowArrow,
  ItemText,
  MockTile,
  PIcon,
  Pill,
  reducedMotion,
  useReveal,
} from './shared.jsx';
import {
  approvals,
  attendance,
  docsFlow,
  insights,
  integrationRows,
  onboardingPlan,
  orgChart,
  record,
  reviewCycle,
  taitoMark,
  templates,
  timeOffFlow,
} from './mocks.js';

/** Starts `start()` once `figure` is 25% visible; exposes hover state for pausing. */
function useAutoAdvance(figureRef, { first, every, step }) {
  useEffect(() => {
    const figure = figureRef.current;
    if (!figure || reducedMotion()) return undefined;
    let hovered = false;
    let timer;
    const schedule = (ms) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!hovered) step();
        schedule(every);
      }, ms);
    };
    const onEnter = () => {
      hovered = true;
    };
    const onLeave = () => {
      hovered = false;
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          schedule(first);
        }
      },
      { threshold: 0.25 },
    );
    io.observe(figure);
    figure.addEventListener('mouseenter', onEnter);
    figure.addEventListener('mouseleave', onLeave);
    return () => {
      clearTimeout(timer);
      io.disconnect();
      figure.removeEventListener('mouseenter', onEnter);
      figure.removeEventListener('mouseleave', onLeave);
    };
    // step is stable per mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [figureRef, first, every]);
}

const fit = (w, w2) => ({ '--fit-w': w, ...(w2 ? { '--fit-w2': w2 } : {}) });

/* ------------------------------------------------------------------ agents 1: onboarding stepper (home §6) */
const SLOT_OPACITY = [1, 1, 1, 0.4, 0, 0];

export function OnboardingStepper({ figureRef }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const figure = figureRef.current;
    if (reducedMotion()) return undefined;
    let hovered = false;
    let timer;
    let busy = false;
    let disposed = false;

    const advance = async () => {
      if (busy) return;
      busy = true;
      const rowH = track.firstElementChild.offsetHeight;
      const rows = [...track.children];
      rows.forEach((r) => r.removeAttribute('data-active'));
      rows[1].setAttribute('data-active', '');
      rows.forEach((r, i) =>
        animate(r, { opacity: i === 0 ? 0 : SLOT_OPACITY[i - 1] }, { duration: 0.55, ease: EASE }),
      );
      await animate(track, { y: [0, -rowH] }, { duration: 0.55, ease: EASE_IN_OUT });
      if (disposed) return;
      track.appendChild(rows[0]);
      track.style.transform = 'translateY(0px)';
      busy = false;
    };
    const schedule = (ms) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!hovered) advance();
        schedule(2800);
      }, ms);
    };
    const onEnter = () => {
      hovered = true;
    };
    const onLeave = () => {
      hovered = false;
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          schedule(1200);
        }
      },
      { threshold: 0.25 },
    );
    io.observe(figure);
    figure.addEventListener('mouseenter', onEnter);
    figure.addEventListener('mouseleave', onLeave);
    return () => {
      disposed = true;
      clearTimeout(timer);
      io.disconnect();
      figure.removeEventListener('mouseenter', onEnter);
      figure.removeEventListener('mouseleave', onLeave);
    };
  }, [figureRef]);

  return (
    <div className="agents-stack pointer-events-none relative select-none max-lg:!mx-0">
      <div
        className="glass-border flex items-center gap-space-s rounded-full bg-surface py-space-2xs pl-space-m pr-space-2xs shadow-xs"
        style={{ '--glass-border-radius': '9999px' }}
      >
        <span className="min-w-0 flex-1 truncate text-step--1 text-ink">{onboardingPlan.prompt}</span>
        <SendButton />
      </div>
      <Card className="grid">
        <div className="px-space-m py-space-s text-step--1 font-medium text-ink">{onboardingPlan.title}</div>
        <hr className="border-surface-tertiary" />
        <div className="agent-step-viewport">
          <ol ref={trackRef}>
            {onboardingPlan.steps.map((s, i) => (
              <li
                key={s.title}
                data-active={i === 0 ? '' : undefined}
                style={{ opacity: SLOT_OPACITY[i] }}
                className="agent-step-row flex items-center gap-space-xs px-space-m"
              >
                <span className="agent-step-media relative inline-flex size-space-l shrink-0 items-center justify-center rounded-md bg-surface-secondary text-ink">
                  <PIcon name={s.icon} className="size-4" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col text-step--2 leading-normal">
                  <span className="truncate font-medium text-ink">{s.title}</span>
                  <span className="truncate text-secondary-foreground">{s.sub}</span>
                </span>
                <span className="btn btn-sm btn-ghost h-space-l w-[35.78px] !px-0">
                  <PIcon name="chevron-right" className="size-4" />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ agents 2: integration logo grid */
export function IntegrationGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex select-none flex-col items-center justify-center"
      style={{
        '--cell': 'clamp(4rem, 18cqi, 6.5rem)',
        '--gap': 'clamp(1rem, 6cqi, 2rem)',
        gap: 'var(--gap)',
        WebkitMaskImage: 'radial-gradient(ellipse, #000 15%, transparent 75%)',
        maskImage: 'radial-gradient(ellipse, #000 15%, transparent 75%)',
      }}
    >
      {integrationRows.map((row, r) => (
        <div key={r} className="flex flex-none" style={{ gap: 'var(--gap)' }}>
          {row.map((l) => (
            <div
              key={l.name}
              className="glass-border flex flex-none items-center justify-center rounded-xl bg-surface shadow-xs"
              style={{ '--glass-border-radius': '0.75rem', width: 'var(--cell)', height: 'var(--cell)' }}
            >
              <img
                src={l.src}
                alt={l.name}
                className={`${l.rounded ? 'rounded-[4px] object-cover' : 'object-contain'}`}
                style={{
                  width: l.lg ? 'clamp(1.5rem, 7cqi, 2.5rem)' : 'clamp(1.2rem, 5.6cqi, 2rem)',
                  height: l.lg ? 'clamp(1.5rem, 7cqi, 2.5rem)' : 'clamp(1.2rem, 5.6cqi, 2rem)',
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ performance 1: review cycle */
export function ReviewCycle({ figureRef }) {
  const ref = useRef(null);
  const panelsRef = useRef(null);
  const current = useRef(0);
  useReveal(ref, { y: 16, duration: 0.55, stagger: 0.08 });

  useAutoAdvance(figureRef, {
    first: 2000,
    every: 2800,
    step: () => {
      const panels = panelsRef.current.children;
      const out = panels[current.current];
      current.current = (current.current + 1) % panels.length;
      const inn = panels[current.current];
      animate(out, { opacity: [1, 0], y: [0, -4] }, { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] });
      animate(inn, { opacity: [0, 1], y: [4, 0] }, { duration: 0.28, delay: 0.12, ease: EASE });
    },
  });

  const c = reviewCycle;
  return (
    <div ref={ref} className="prod-fit pointer-events-none flex w-full max-w-[26rem] select-none flex-col gap-space-s" style={fit('26rem')}>
      <Card data-prod-reveal>
        <p className="px-space-s py-space-s text-step--1 font-medium text-ink">{c.title}</p>
        <ul className="prod-item-group border-t border-surface-tertiary">
          {c.items.map((it) => (
            <li key={it.title} className="flex items-center gap-space-xs p-space-s">
              <MockTile name={it.icon} />
              <ItemText title={it.title} sub={it.sub} />
              {it.toggle ? (
                <span className="relative inline-flex h-5 w-9 flex-none rounded-full bg-ink">
                  <span className="absolute right-0.5 top-0.5 size-4 rounded-full bg-surface" />
                </span>
              ) : (
                <PIcon name="check" className="size-4 text-muted-foreground" />
              )}
            </li>
          ))}
        </ul>
        <div className="border-t border-surface-tertiary p-space-s">
          <span className="flex h-10 w-full items-center justify-center rounded-md bg-ink text-step--1 font-medium text-surface">{c.cta}</span>
        </div>
      </Card>
      <div data-prod-reveal>
        <FlowArrow />
      </div>
      <Card data-prod-reveal className="p-space-s">
        <div ref={panelsRef} className="grid">
          {c.results.map((r, i) => (
            <div key={r.title} className="flex items-center gap-space-xs [grid-area:1/1]" style={{ opacity: i === 0 ? 1 : 0 }}>
              {r.avatar && <Avatar who={r.avatar} className="size-10" />}
              {r.icon && <MockTile name={r.icon} />}
              {r.mark && <img src={r.mark} alt="" className="size-10 flex-none rounded-md" />}
              <ItemText title={r.title} sub={r.sub} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ app-window table helpers */
function WindowHeader({ title, sub }) {
  return (
    <div className="p-gutter">
      <h3 className="text-step-0 font-medium leading-tight text-ink">{title}</h3>
      <p className="mt-space-3xs text-step--1 text-secondary-foreground">{sub}</p>
    </div>
  );
}

function SearchBox({ label, className = 'w-36' }) {
  return (
    <span
      className={`flex h-[calc(theme(spacing.space-2xs)*3)] flex-none items-center gap-space-3xs whitespace-nowrap rounded-md border border-surface-tertiary px-space-2xs text-step--2 text-muted-foreground ${className}`}
    >
      <PIcon name="search" className="size-3" />
      {label}
    </span>
  );
}

function AppWindow({ offset = '0px', children, innerRef }) {
  return (
    <div
      ref={innerRef}
      data-prod-reveal
      className="prod-window glass-border pointer-events-none select-none rounded-tl-2xl bg-surface shadow-xs"
      style={{ '--glass-border-radius': '1rem', '--win-offset': offset }}
    >
      <div className="flex size-full flex-col overflow-hidden rounded-tl-2xl">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ performance 2: insights window */
export function InsightsWindow() {
  const ref = useRef(null);
  useReveal(ref, { y: 40, duration: 0.7, delay: 0.1 });
  const d = insights;
  return (
    <div ref={ref} className="absolute inset-0">
      <AppWindow>
        <WindowHeader title={d.title} sub={d.sub} />
        <div className="flex items-end justify-between gap-space-s border-b border-surface-tertiary px-gutter">
          <div className="flex gap-space-m">
            {d.tabs.map((t, i) => (
              <span
                key={t}
                className={`-mb-px border-b-2 pb-space-xs text-step--1 font-medium ${
                  i === 0 ? 'border-ink text-ink' : 'border-transparent text-muted-foreground'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="pb-space-2xs">
            <SearchBox label={d.search} />
          </div>
        </div>
        <div className="prod-fade-65 min-h-0 flex-1 p-gutter">
          <table className="w-full whitespace-nowrap text-left text-step--1">
            <thead>
              <tr className="text-step--2 text-muted-foreground">
                {d.head.map((h) => (
                  <th key={h} className="pb-space-xs pr-space-m font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.rows.map(([av, name, title, ...pills]) => (
                <tr key={name} className="border-t border-surface-tertiary">
                  <td className="py-space-s pr-space-m">
                    <span className="flex items-center gap-space-xs font-medium text-ink">
                      <Avatar who={av} className="size-7" />
                      {name}
                    </span>
                  </td>
                  <td className="py-space-s pr-space-m text-ink">{title}</td>
                  {pills.map(([label, tone], i) => (
                    <td key={i} className="py-space-s pr-space-m">
                      <Pill tone={tone}>{label}</Pill>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AppWindow>
    </div>
  );
}

/* ------------------------------------------------------------------ time-off 1: Slack → approval → payroll */
export function TimeOffFlow() {
  const ref = useRef(null);
  useReveal(ref, { y: 16, duration: 0.5, stagger: 0.09 });
  const d = timeOffFlow;
  return (
    <div ref={ref} className="prod-fit pointer-events-none flex w-full max-w-[26rem] select-none flex-col gap-space-s" style={fit('26rem')}>
      <Card data-prod-reveal>
        <div className="flex items-center gap-space-3xs border-b border-surface-tertiary px-space-s py-space-2xs text-step--2 font-medium text-ink">
          <PIcon name="hash" className="size-3.5" />
          {d.channel}
        </div>
        <ul className="flex flex-col gap-space-s p-space-s">
          {d.messages.map((m, i) => (
            <li key={i} className="flex gap-space-xs">
              {m.bot ? (
                <img src={taitoMark} alt="" className="size-9 flex-none rounded-md" />
              ) : (
                <Avatar who={m.avatar} className="size-9 !rounded-md" />
              )}
              <div className="min-w-0 text-step--2 leading-normal">
                <p>
                  <span className="font-medium text-ink">{m.who}</span>
                  <span className="ml-space-2xs text-muted-foreground">{m.time}</span>
                </p>
                <p className="text-secondary-foreground">
                  {m.body.map((s, j) =>
                    typeof s === 'string' ? (
                      <span key={j}>{s}</span>
                    ) : (
                      <span key={j} className="font-medium text-ink">
                        {s.b}
                      </span>
                    ),
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Card>
      <div data-prod-reveal>
        <FlowArrow />
      </div>
      <Card data-prod-reveal className="flex items-center gap-space-xs p-space-s">
        <span className="relative flex-none">
          <Avatar who={d.approval.avatar} className="size-9" />
          <CheckBadge />
        </span>
        <ItemText title={d.approval.title} sub={d.approval.sub} />
      </Card>
      <div data-prod-reveal>
        <FlowArrow />
      </div>
      <Card data-prod-reveal>
        <ul className="prod-item-group">
          {d.results.map((r) => (
            <li key={r.title} className="flex items-center gap-space-xs p-space-s">
              <MockTile name={r.icon} />
              <ItemText title={r.title} sub={r.sub} />
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ time-off 2: attendance window */
export function AttendanceWindow() {
  const ref = useRef(null);
  useReveal(ref, { y: 20, scale: 0.98, duration: 0.55 });
  const d = attendance;
  return (
    <div ref={ref} className="absolute inset-0">
      <AppWindow offset="-1.5rem">
        <WindowHeader title={d.title} sub={d.sub} />
        <div className="flex items-center justify-between gap-space-s border-b border-surface-tertiary px-gutter pb-space-2xs">
          <div className="flex gap-space-2xs">
            {d.chips.map((c, i) => (
              <span
                key={c}
                className={`flex h-[calc(theme(spacing.space-2xs)*3)] items-center gap-space-3xs whitespace-nowrap rounded-md border border-surface-tertiary px-space-2xs text-step--2 ${
                  i === 0 ? 'text-ink' : 'text-secondary-foreground'
                }`}
              >
                {c}
                <PIcon name="chevron-down" className="size-3" />
              </span>
            ))}
          </div>
          <div className="flex items-center gap-space-2xs">
            <SearchBox label={d.search} />
            <span className="flex h-[calc(theme(spacing.space-2xs)*3)] items-center gap-space-3xs whitespace-nowrap rounded-[4px] bg-ink px-space-2xs text-step--2 font-medium text-surface">
              <PIcon name="arrow-down-to-line" className="size-3" />
              {d.cta}
            </span>
          </div>
        </div>
        <div className="prod-fade-65 min-h-0 flex-1 p-gutter">
          <table className="w-full whitespace-nowrap text-left text-step--1">
            <thead>
              <tr className="text-step--2 text-muted-foreground">
                {d.head.map((h) => (
                  <th key={h} className="pb-space-xs pr-space-m font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.rows.map(([av, name, ...nums]) => (
                <tr key={name} className="border-t border-surface-tertiary">
                  <td className="py-space-s pr-space-m">
                    <span className="flex items-center gap-space-xs font-medium text-ink">
                      <Avatar who={av} className="size-7" />
                      {name}
                    </span>
                  </td>
                  {nums.map((n, i) => (
                    <td key={i} className="py-space-s pr-space-m tabular-nums text-ink">
                      {n}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AppWindow>
    </div>
  );
}

/* ------------------------------------------------------------------ people directory 1: record card */
function SectionLabel({ children, aside }) {
  return (
    <div className="flex items-center justify-between text-step--2">
      <p className="font-medium text-secondary-foreground">{children}</p>
      {aside}
    </div>
  );
}

export function RecordCard() {
  const ref = useRef(null);
  useReveal(ref, { y: 16, duration: 0.55 });
  const d = record;
  return (
    <div ref={ref} className="prod-fit pointer-events-none w-full max-w-[26rem] select-none" style={fit('26rem')}>
      <Card data-prod-reveal>
        <div className="flex items-center gap-space-s p-space-m">
          <Avatar who={d.avatar} className="size-10" />
          <div className="min-w-0">
            <p className="text-step-0 font-medium leading-tight text-ink">{d.name}</p>
            <p className="text-step--1 leading-normal text-secondary-foreground">{d.sub}</p>
          </div>
        </div>
        <div className="flex flex-col gap-space-s border-t border-surface-tertiary p-space-m">
          <SectionLabel>Positions</SectionLabel>
          <ul className="prod-steps flex flex-col gap-space-s" style={{ '--step-connector-h': 'var(--prod-space-s)' }}>
            {d.positions.map((p) => (
              <li key={p.title} className={`flex items-center gap-space-s ${p.past ? 'opacity-60' : ''}`}>
                <span className="prod-step-media relative">
                  <MockTile name="briefcase" />
                </span>
                <ItemText title={p.title} sub={p.sub} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-space-s border-t border-surface-tertiary p-space-m">
          <SectionLabel
            aside={
              <span className="flex items-center gap-space-3xs text-muted-foreground">
                <PIcon name="lock" className="size-3" />
                {d.comp.visibility}
              </span>
            }
          >
            {d.comp.label}
          </SectionLabel>
          <div className="flex items-center gap-space-s">
            <MockTile name="pound-sterling" />
            <ItemText title={d.comp.title} sub={d.comp.sub} />
          </div>
        </div>
        <div className="flex flex-col gap-space-xs border-t border-surface-tertiary p-space-m">
          <SectionLabel>Documents</SectionLabel>
          <div className="flex flex-wrap gap-space-2xs">
            {d.docs.map((doc) => (
              <span
                key={doc.label}
                className="inline-flex items-center gap-space-3xs rounded-full border border-surface-tertiary px-space-2xs py-space-3xs text-step--2 text-ink"
              >
                <PIcon name={doc.icon} className="size-3" />
                {doc.label}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ people directory 2: org chart */
const ORG_POS = {
  top: { left: '50%', top: '9.375%' },
  left: { left: '22%', top: '50%' },
  right: { left: '78%', top: '50%' },
  bottom: { left: '50%', top: '90.625%' },
};

export function OrgChart() {
  const ref = useRef(null);
  useReveal(ref, { y: 16, duration: 0.55 });
  return (
    <div
      ref={ref}
      className="prod-fit pointer-events-none relative aspect-[5/4] w-full max-w-[34rem] select-none"
      style={fit('34rem')}
    >
      <span
        aria-hidden="true"
        className="icon absolute inset-0 size-full text-muted-foreground"
        style={{ '--icon': `url(${orgChart.lines})` }}
      />
      {orgChart.cards.map((c) => (
        <div key={c.pos} className="absolute w-[44%] -translate-x-1/2 -translate-y-1/2" style={ORG_POS[c.pos]}>
          <Card data-prod-reveal className="flex items-center gap-space-xs px-space-m py-space-s">
            <Avatar who={c.avatar} className="size-7" />
            <ItemText title={c.name} sub={c.role} />
          </Card>
        </div>
      ))}
      {orgChart.pills.map((p, i) => (
        <span key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: p.x, top: p.y }}>
          <span
            data-prod-reveal
            className="block whitespace-nowrap rounded-full border border-surface-tertiary bg-surface px-space-xs py-space-3xs text-step--2 text-ink"
          >
            {p.label}
          </span>
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ documents 1: templates tabs */
export function TemplatesCard({ figureRef }) {
  const ref = useRef(null);
  const tabsRef = useRef(null);
  const underlineRef = useRef(null);
  const panelsRef = useRef(null);
  const current = useRef(0);
  useReveal(ref, { y: 40, duration: 0.7, delay: 0.35 });

  const place = (i, instant) => {
    const tab = tabsRef.current.children[i];
    const kf = { x: tab.offsetLeft, scaleX: tab.offsetWidth };
    if (instant || reducedMotion()) {
      underlineRef.current.style.transform = `translateX(${kf.x}px) scaleX(${kf.scaleX})`;
      return;
    }
    animate(underlineRef.current, kf, { duration: 0.25, ease: EASE_IN_OUT });
  };

  useLayoutEffect(() => {
    place(0, true);
    const onResize = () => place(current.current, true);
    window.addEventListener('resize', onResize);
    // fonts can shift tab widths after first paint
    document.fonts?.ready.then(() => tabsRef.current && place(current.current, true));
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useAutoAdvance(figureRef, {
    first: 1200,
    every: 2800,
    step: () => {
      const tabs = tabsRef.current.children;
      const panels = panelsRef.current.children;
      const prev = current.current;
      const next = (prev + 1) % panels.length;
      current.current = next;
      tabs[prev].setAttribute('data-active', 'false');
      tabs[next].setAttribute('data-active', 'true');
      place(next);
      animate(panels[prev], { opacity: 0 }, { duration: 0.18, ease: EASE });
      animate(panels[next], { opacity: [0, 1] }, { duration: 0.22, ease: EASE });
    },
  });

  const d = templates;
  return (
    <div ref={ref} className="pointer-events-none w-full select-none" style={{ maxWidth: 'clamp(20rem, 75cqi, 32rem)' }}>
      <Card data-prod-reveal radius="0.75rem" className="!rounded-xl">
        <div className="relative border-b border-surface-tertiary px-space-m">
          <div ref={tabsRef} className="flex gap-space-s">
            {d.tabs.map((t, i) => (
              <span key={t} data-active={i === 0 ? 'true' : 'false'} className="prod-tab py-space-s text-step--1">
                {t}
              </span>
            ))}
          </div>
          <span
            ref={underlineRef}
            aria-hidden="true"
            className="prod-underline absolute bottom-0 left-0 h-[2px] w-px origin-left bg-ink"
          />
        </div>
        <div className="relative overflow-hidden" style={{ height: 'clamp(13rem, 34cqi, 18rem)' }}>
          <div ref={panelsRef} className="grid h-full">
            {d.panels.map((p, i) => (
              <div key={p.title} className="px-space-m pt-space-m [grid-area:1/1]" style={{ opacity: i === 0 ? 1 : 0 }}>
                <p className="text-step-0 font-medium leading-tight text-ink">{p.title}</p>
                <p className="mt-space-2xs text-step--2 text-secondary-foreground">{p.meta}</p>
                <div className="mt-space-s flex flex-col gap-space-xs text-step--1 leading-normal text-secondary-foreground">
                  {p.body.map((b, j) => (
                    <p key={j}>{b}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-surface/0 to-surface" />
        </div>
        <div className="flex items-center justify-between border-t border-surface-tertiary px-space-m py-space-s">
          <span className="text-step--1 font-medium text-ink">{d.signer}</span>
          <span className="flex items-center gap-space-2xs text-step--2 text-secondary-foreground">
            <PIcon name="signature" className="size-3.5" />
            {d.esign}
          </span>
        </div>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ documents 2: generate → sign → file */
export function DocsFlow() {
  const ref = useRef(null);
  useReveal(ref, { y: 16, duration: 0.55, stagger: 0.08 });
  const d = docsFlow;
  return (
    <div ref={ref} className="prod-fit pointer-events-none flex w-full max-w-[26rem] select-none flex-col gap-space-s" style={fit('26rem')}>
      <Card data-prod-reveal className="flex items-center gap-space-xs p-space-s">
        <img src={taitoMark} alt="" className="size-9 flex-none rounded-md" />
        <div className="min-w-0 flex-1 text-step--2 leading-normal">
          <p className="shimmer w-fit animate-shimmer font-medium">{d.generating.title}</p>
          <p className="text-secondary-foreground">{d.generating.sub}</p>
        </div>
      </Card>
      <div data-prod-reveal>
        <FlowArrow />
      </div>
      <Card data-prod-reveal>
        <p className="border-b border-surface-tertiary px-space-m py-space-s text-step-0 leading-tight text-ink">{d.title}</p>
        <ul className="prod-item-group">
          {d.signers.map((s) => (
            <li key={s.name} className="flex items-center gap-space-xs p-space-s">
              <span className="relative flex-none">
                <Avatar who={s.avatar} className="size-9" />
                {s.signed && <CheckBadge />}
              </span>
              <ItemText title={s.name} sub={s.sub} />
            </li>
          ))}
        </ul>
      </Card>
      <div data-prod-reveal>
        <FlowArrow />
      </div>
      <Card data-prod-reveal className="flex items-center gap-space-xs p-space-s">
        <MockTile name={d.filed.icon} />
        <ItemText title={d.filed.title} sub={d.filed.sub} />
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ security: human-in-the-loop */
const SMALL_BTN =
  'inline-flex h-[calc(theme(spacing.space-2xs)*3)] items-center rounded-[4px] px-space-2xs text-step--2 font-medium';

export function ApprovalMock() {
  const ref = useRef(null);
  useReveal(ref, { y: 16, duration: 0.55, stagger: 0.08 });
  const { done, pending } = approvals;
  return (
    <div ref={ref} className="prod-fit pointer-events-none flex w-full max-w-[26rem] select-none flex-col gap-space-s" style={fit('26rem')}>
      <Card data-prod-reveal className="flex items-center gap-space-xs p-space-s">
        <MockTile name={done.icon} />
        <ItemText title={done.title} sub={done.sub} />
      </Card>
      <Card data-prod-reveal>
        <div className="flex items-center gap-space-xs p-space-s">
          <MockTile name={pending.icon} />
          <ItemText title={pending.title} sub={pending.sub} />
        </div>
        <div className="flex items-center justify-between gap-space-s border-t border-surface-tertiary px-space-s py-space-s">
          <Pill tone="a">{pending.status}</Pill>
          <div className="flex items-center gap-space-2xs">
            <span className={`${SMALL_BTN} border border-surface-tertiary text-ink`}>{pending.decline}</span>
            <span className={`${SMALL_BTN} bg-ink text-surface`}>{pending.approve}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
