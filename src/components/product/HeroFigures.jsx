// ProductHero figures (specs/SPEC_product.md §1.1). Each runs its own load animation.
import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { Avatar, Card, CheckBadge, EASE, EASE_IN_OUT, ItemText, MockTile, PIcon, Pill, reducedMotion } from './shared.jsx';
import { agentActions, avatars, directory, recentRuns, review, timeOffHero, wheelCards } from './mocks.js';

/** Load-time entrance for every [data-prod-reveal] in root. */
function useLoadReveal(ref, { y = 40, scale, duration = 0.7, delay = 0.35, stagger = 0.08 } = {}) {
  useEffect(() => {
    if (reducedMotion()) return undefined;
    const els = ref.current.querySelectorAll(':scope [data-prod-reveal]:not([data-manual])');
    const controls = [];
    els.forEach((el, i) => {
      const kf = { opacity: [0, 1], y: [y, 0] };
      if (scale) kf.scale = [scale, 1];
      controls.push(animate(el, kf, { duration, delay: delay + i * stagger, ease: EASE }));
    });
    return () => controls.forEach((c) => c.stop?.());
  }, [ref, y, scale, duration, delay, stagger]);
}

/* ------------------------------------------------------------------ agents */
const ROW_H = 'calc(2.25rem + 2 * var(--prod-space-2xs))';

export function AgentsDash() {
  const ref = useRef(null);
  const trackRef = useRef(null);
  useLoadReveal(ref, { y: 40, duration: 0.7, delay: 0.35, stagger: 0.08 });

  // bars
  useEffect(() => {
    if (reducedMotion()) return undefined;
    const controls = [...ref.current.querySelectorAll('[data-bar]')].map((b, i) =>
      animate(b, { scaleY: [0, 1] }, { duration: 0.6, delay: 0.5 + i * 0.035, ease: EASE }),
    );
    return () => controls.forEach((c) => c.stop?.());
  }, []);

  // recent-runs ticker (DOM is re-ordered imperatively; this component never re-renders)
  useEffect(() => {
    if (reducedMotion()) return undefined;
    const track = trackRef.current;
    const hoverTarget = ref.current.closest('.prod-hero-media') ?? ref.current;
    let hovered = false;
    let busy = false;
    let disposed = false;
    let timer;

    const advance = async () => {
      if (busy) return;
      busy = true;
      const rowH = track.firstElementChild.offsetHeight;
      animate(track.firstElementChild, { opacity: [0.6, 1] }, { duration: 0.45, ease: EASE_IN_OUT });
      await animate(track, { y: [-rowH, 0] }, { duration: 0.45, ease: EASE_IN_OUT });
      if (disposed) return;
      const last = track.lastElementChild;
      last.style.opacity = '0.6';
      track.insertBefore(last, track.firstElementChild);
      track.style.transform = `translateY(${-rowH}px)`;
      busy = false;
    };
    const schedule = (ms) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!hovered) advance();
        schedule(2200);
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
          schedule(1400);
        }
      },
      { threshold: 0.25 },
    );
    io.observe(track.parentElement);
    hoverTarget.addEventListener('mouseenter', onEnter);
    hoverTarget.addEventListener('mouseleave', onLeave);
    return () => {
      disposed = true;
      clearTimeout(timer);
      io.disconnect();
      hoverTarget.removeEventListener('mouseenter', onEnter);
      hoverTarget.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const cols = 'grid grid-cols-[minmax(0,1fr)_5.5rem_5rem_7.5rem] items-center';

  return (
    <div
      ref={ref}
      data-agents-dash
      className="absolute inset-0 flex flex-col items-center justify-center gap-space-m px-space-l py-space-xl-2xl"
    >
      <div className="prod-fit flex w-full max-w-[36rem] flex-col gap-space-m" style={{ '--fit-w': '36rem' }}>
        {/* (a) Agent actions — lg+ only */}
        <Card data-prod-reveal className="hidden lg:block">
          <div className="flex items-center justify-between px-space-m py-space-s">
            <p className="text-step--1 font-medium text-ink">{agentActions.title}</p>
            <p className="flex items-center gap-space-3xs text-step--2 text-muted-foreground">
              <PIcon name="clock" className="size-3.5" />
              {agentActions.range}
            </p>
          </div>
          <hr className="border-surface-tertiary" />
          <div className="grid grid-cols-12 gap-space-2xs px-space-m py-space-s">
            {agentActions.bars.map(([m, h]) => (
              <div key={m} className="flex flex-col items-center gap-space-2xs">
                <div className="flex h-24 w-full items-end justify-center">
                  <span data-bar className="block w-3 origin-bottom rounded-t-sm bg-ink" style={{ height: `max(12px, ${h}%)` }} />
                </div>
                <span className="text-step--2 text-muted-foreground">{m}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* (b) Recent runs */}
        <Card data-prod-reveal>
          <p className="px-space-m py-space-s text-step--1 font-medium text-ink">{recentRuns.title}</p>
          <div className={`${cols} border-t border-surface-tertiary py-space-xs text-step--2 text-muted-foreground`}>
            {recentRuns.head.map((h) => (
              <span key={h} className="px-space-m">
                {h}
              </span>
            ))}
          </div>
          <div className="prod-runs-window prod-fade-60 overflow-hidden">
            <div ref={trackRef} className="prod-runs-track" style={{ transform: `translateY(calc(-1 * ${ROW_H}))` }}>
              {recentRuns.rows.map((r, i) => (
                <div
                  key={r.name}
                  className={`prod-runs-row ${cols} border-t border-surface-tertiary`}
                  style={i === 0 ? { opacity: 0.6 } : undefined}
                >
                  <span className="flex min-w-0 items-center gap-space-xs px-space-m">
                    <span className="flex size-7 flex-none items-center justify-center rounded-md bg-surface-secondary text-secondary-foreground">
                      <PIcon name={r.icon} className="size-3.5" />
                    </span>
                    <span className="truncate text-step--1 font-medium text-ink">{r.name}</span>
                  </span>
                  <span className="px-space-m text-step--1 text-secondary-foreground">{r.duration}</span>
                  <span className="px-space-m text-step--1 text-ink">{r.actions}</span>
                  <span className="px-space-m">
                    <Pill tone="g">Success</Pill>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ performance */
export function PerformanceReview() {
  const ref = useRef(null);
  const typedRef = useRef(null);
  const restRef = useRef(null);
  const bodyRef = useRef(null);
  const agendaRowRef = useRef(null);
  const agendaRef = useRef(null);
  const reduce = reducedMotion();

  useEffect(() => {
    if (reducedMotion()) return undefined;
    const root = ref.current;
    const controls = [];
    const timers = [];
    let raf;
    controls.push(animate(root.querySelector('[data-hero-figure]'), { opacity: [0, 1], y: [40, 0] }, { duration: 0.5, delay: 0.35, ease: EASE }));
    root.querySelectorAll('[data-source]').forEach((el, i) =>
      controls.push(animate(el, { opacity: [0, 1], y: [8, 0] }, { duration: 0.4, delay: 0.9 + i * 0.07, ease: EASE })),
    );
    controls.push(animate(root.querySelector('[data-reasoning]'), { opacity: [0, 1] }, { duration: 0.35, delay: 1.25, ease: EASE }));

    const text = review.body;
    typedRef.current.textContent = '';
    restRef.current.textContent = text;
    timers.push(
      setTimeout(() => {
        const start = performance.now();
        const tick = (now) => {
          const n = Math.min(text.length, Math.floor((now - start) / 12));
          typedRef.current.textContent = text.slice(0, n);
          restRef.current.textContent = text.slice(n);
          if (n < text.length) {
            raf = requestAnimationFrame(tick);
            return;
          }
          bodyRef.current.setAttribute('data-typing-done', '');
          timers.push(
            setTimeout(() => {
              agendaRowRef.current.style.gridTemplateRows = '1fr';
              controls.push(animate(agendaRef.current, { opacity: [0, 1], y: [16, 0] }, { duration: 0.55, delay: 0.1, ease: EASE }));
            }, 300),
          );
        };
        raf = requestAnimationFrame(tick);
      }, 1600),
    );
    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      controls.forEach((c) => c.stop?.());
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 flex items-center justify-center px-space-l-xl py-space-xl-2xl">
      <div className="prod-fit w-full max-w-[28rem]" style={{ '--fit-w': '28rem' }}>
        <div data-hero-figure data-prod-reveal>
          <Card className="grid overflow-visible">
            <div className="absolute left-1/2 top-[-24px] -translate-x-1/2 rounded-full bg-surface p-[3px] md:top-[-40px]">
              <img src={avatars.daniel} alt="" className="size-12 rounded-full object-cover md:size-20" />
            </div>
            <div className="px-space-m pb-space-s pt-space-l-xl text-step--1 font-medium text-ink">{review.title}</div>
            <hr className="border-surface-tertiary" />
            <div className="flex items-center gap-space-s px-space-m py-space-s">
              <span className="text-step--2 text-ink">{review.sourcesLabel}</span>
              <ul className="flex items-center gap-1">
                {review.sources.map((s) => (
                  <li key={s.name} data-source data-prod-reveal className="flex size-5 items-center justify-center rounded-full bg-surface-secondary">
                    <img src={s.src} alt={s.name} className="size-3" />
                  </li>
                ))}
              </ul>
            </div>
            <hr className="border-surface-tertiary" />
            <div
              ref={bodyRef}
              data-typing-done={reduce ? '' : undefined}
              className="prod-bottom-fade flex flex-col gap-space-2xs px-space-m py-space-s"
            >
              <p data-reasoning data-prod-reveal className="shimmer w-fit animate-shimmer text-step--2 font-medium">
                {review.label}
              </p>
              <p className="text-step--2 leading-normal text-ink">
                <span ref={typedRef}>{review.body}</span>
                <span aria-hidden="true" className="prod-caret" />
                <span ref={restRef} aria-hidden="true" className="invisible" />
              </p>
            </div>
          </Card>

          <div
            ref={agendaRowRef}
            className="grid"
            style={{
              gridTemplateRows: reduce ? '1fr' : '0fr',
              transition: 'grid-template-rows 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
          >
            <div className="-mx-3 min-h-0 overflow-hidden px-3 pb-3">
              <div className="pt-space-m-l">
                <div ref={agendaRef} data-prod-reveal data-manual>
                  <Card>
                    <p className="px-space-m py-space-s text-step--1 font-medium text-ink">{review.agendaTitle}</p>
                    <hr className="border-surface-tertiary" />
                    <p className="prod-bottom-fade px-space-m py-space-s text-step--2 leading-normal text-ink">{review.agendaBody}</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ time-off */
export function TimeOffBalances() {
  const ref = useRef(null);
  useLoadReveal(ref, { y: 20, scale: 0.98, duration: 0.55, delay: 0.3, stagger: 0.06 });
  const d = timeOffHero;
  return (
    <div ref={ref} data-time-off-figure className="absolute inset-0 flex items-center justify-center px-space-l py-space-xl-2xl">
      <div className="prod-fit flex w-full max-w-[28rem] flex-col gap-space-s" style={{ '--fit-w': '28rem' }}>
        <Card data-prod-reveal className="flex items-center gap-space-xs p-space-s">
          <span className="relative flex-none">
            <Avatar who={d.approval.avatar} className="size-9" />
            <CheckBadge />
          </span>
          <ItemText title={d.approval.name} sub={d.approval.sub} />
        </Card>
        <Card data-prod-reveal>
          <p className="border-b border-surface-tertiary px-space-s py-space-s text-step-0 leading-tight text-ink">{d.title}</p>
          <ul className="prod-item-group">
            {d.items.map((it) => (
              <li key={it.title} className="flex items-center gap-space-xs p-space-s">
                <MockTile name={it.icon} />
                <ItemText title={it.title} sub={it.sub} />
                <span className="btn btn-sm btn-ghost h-space-l w-[35.78px] !px-0">
                  <PIcon name="chevron-right" className="size-4" />
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ people directory */
function Stack({ people }) {
  return (
    <span className="flex -space-x-1.5">
      {people.map((p, i) => (
        <Avatar key={i} who={p} className="size-5 ring-2 ring-surface" textClass="text-[8px]" />
      ))}
    </span>
  );
}

export function DirectoryWindow() {
  const ref = useRef(null);
  useLoadReveal(ref, { y: 40, duration: 0.7, delay: 0.35 });
  const d = directory;
  return (
    <div ref={ref} data-directory-figure className="absolute inset-0">
      <div
        data-prod-reveal
        className="prod-window glass-border rounded-tl-2xl bg-surface shadow-xs"
        style={{ '--glass-border-radius': '1rem' }}
      >
        <div className="flex size-full flex-col overflow-hidden rounded-tl-2xl">
          <div className="p-gutter">
            <h3 className="text-step-0 font-medium leading-tight text-ink">{d.title}</h3>
            <p className="mt-space-3xs text-step--1 text-secondary-foreground">{d.sub}</p>
          </div>
          <div className="flex items-end justify-between gap-space-s border-b border-surface-tertiary px-gutter">
            <div className="flex gap-space-m">
              {d.tabs.map((t, i) => (
                <span
                  key={t}
                  className={`-mb-px pb-space-xs text-step--1 font-medium ${
                    i === 0 ? 'border-b-2 border-ink text-ink' : 'border-b-2 border-transparent text-muted-foreground'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-space-2xs pb-space-2xs">
              <span className="flex h-[calc(theme(spacing.space-2xs)*3)] w-36 items-center gap-space-3xs rounded-md border border-surface-tertiary px-space-2xs text-step--2 text-muted-foreground">
                <PIcon name="search" className="size-3" />
                {d.search}
              </span>
              <span className="flex h-[calc(theme(spacing.space-2xs)*3)] items-center gap-space-3xs whitespace-nowrap rounded-[4px] bg-ink px-space-2xs text-step--2 font-medium text-surface">
                <PIcon name="plus" className="size-3" />
                {d.cta}
              </span>
            </div>
          </div>
          <div className="prod-fade-65 min-h-0 flex-1 p-gutter">
            <table className="w-full whitespace-nowrap text-left text-step--1">
              <thead>
                <tr className="text-step--2 text-muted-foreground">
                  {d.head.map((h) => (
                    <th key={h} className="pb-space-xs pr-space-s font-normal">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.rows.map(([av, name, title, rAv, rName, gA, gB]) => (
                  <tr key={name} className="border-t border-surface-tertiary">
                    <td className="py-space-s pr-space-s">
                      <span className="flex items-center gap-space-xs font-medium text-ink">
                        <Avatar who={av} className="size-7" />
                        {name}
                      </span>
                    </td>
                    <td className="py-space-s pr-space-s text-ink">{title}</td>
                    <td className="py-space-s pr-space-s">
                      <span className="flex items-center gap-space-2xs text-ink">
                        <Avatar who={rAv} className="size-5" textClass="text-[8px]" />
                        {rName}
                      </span>
                    </td>
                    <td className="py-space-s">
                      <span className="flex items-center gap-space-2xs">
                        <Stack people={gA} />
                        <Stack people={gB} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ documents */
export function DocumentsWheel() {
  const ref = useRef(null);
  useLoadReveal(ref, { y: 0, duration: 0.7, delay: 0.2 });
  return (
    <div ref={ref} className="prod-docs-figure absolute inset-0">
      <div data-prod-reveal className="prod-docs-mask absolute inset-0">
        <div className="prod-docs-wheel">
          {wheelCards.map((c, i) => (
            <div
              key={i}
              className="prod-docs-card glass-border absolute left-1/2 top-1/2 flex flex-col rounded-xl bg-surface shadow-xs"
              style={{
                '--glass-border-radius': '0.75rem',
                marginLeft: 'calc(var(--card-w) / -2)',
                marginTop: 'calc(var(--card-h) / -2)',
                transform: `rotate(${c.angle}deg) translateY(calc(-1 * var(--${c.ring}-r))) rotate(${c.tilt}deg) scale(var(--${c.ring}-scale))`,
              }}
            >
              <p className="border-b border-surface-tertiary px-space-s py-space-2xs text-step--2 text-muted-foreground">{c.label}</p>
              <div className="mt-auto flex flex-col gap-space-3xs p-space-s">
                <p className="text-step--2 text-secondary-foreground">{c.doc}</p>
                <p className="line-clamp-2 text-step--1 font-medium leading-tight text-ink">{c.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
