import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { peopleAgents } from '../content.js';
import { FeatureList, Icon, SectionHeader, SendButton } from './ui.jsx';

const EASE_OUT = [0.23, 1, 0.32, 1];
const EASE_IN_OUT = [0.77, 0, 0.175, 1];
const SLOT_OPACITY = [1, 1, 1, 0.4, 0, 0];

/**
 * §6 stepper. The track is manipulated imperatively (rows re-ordered in the DOM),
 * so this component must never re-render after mount — it holds no React state.
 */
function Stepper({ figureRef }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const figure = figureRef.current;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rowH = track.firstElementChild.offsetHeight;
    let hovered = false;
    let pending = false;
    let timer;
    let busy = false;
    let disposed = false;

    const advance = async () => {
      if (busy) return;
      busy = true;
      const rows = [...track.children];
      rows.forEach((r) => r.removeAttribute('data-active'));
      rows[1].setAttribute('data-active', '');
      rows.forEach((r, i) =>
        animate(r, { opacity: i === 0 ? 0 : SLOT_OPACITY[i - 1] }, { duration: 0.55, ease: EASE_OUT }),
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
        if (hovered) {
          pending = true;
          return;
        }
        advance();
        schedule(2800);
      }, ms);
    };

    const onEnter = () => {
      hovered = true;
    };
    const onLeave = () => {
      hovered = false;
      if (pending) {
        pending = false;
        schedule(2800);
      }
    };
    const onResize = () => {
      rowH = track.firstElementChild.offsetHeight;
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
    window.addEventListener('resize', onResize);

    return () => {
      disposed = true;
      clearTimeout(timer);
      io.disconnect();
      figure.removeEventListener('mouseenter', onEnter);
      figure.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, [figureRef]);

  return (
    <div className="agent-step-viewport">
      <ol ref={trackRef}>
        {peopleAgents.steps.map((s, i) => (
          <li
            key={s.title}
            data-active={i === 0 ? '' : undefined}
            style={{ opacity: SLOT_OPACITY[i] }}
            className="agent-step-row flex items-center gap-space-xs px-space-m"
          >
            <span className="agent-step-media relative inline-flex size-space-l shrink-0 items-center justify-center rounded-md bg-surface-secondary text-ink">
              <Icon name={s.icon} className="size-4" />
            </span>
            <span className="flex min-w-0 flex-1 flex-col text-step--2 leading-normal">
              <span className="truncate font-medium text-ink">{s.title}</span>
              <span className="truncate text-secondary-foreground">{s.sub}</span>
            </span>
            <span className="btn btn-sm btn-ghost h-space-l w-[35.78px] !px-0">
              <Icon name="chevron-right" className="size-4" />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function PeopleAgents() {
  const figureRef = useRef(null);
  return (
    <section
      aria-labelledby="people-agents"
      className="flex min-h-[clamp(600px,100vh-1.5rem,45rem)] flex-col justify-center border-t border-surface-tertiary bg-surface py-space-2xl-3xl"
    >
      <div className="u-container">
        <div className="u-grid">
          <div className="section-content flex flex-col justify-between gap-space-xl py-space-m-l md:col-span-5 md:pr-space-m-l">
            <SectionHeader
              id="people-agents"
              eyebrow={peopleAgents.eyebrow}
              title={peopleAgents.title}
              description={peopleAgents.description}
              split={false}
            />
            <FeatureList items={peopleAgents.features} />
          </div>

          <figure
            ref={figureRef}
            className="section-media relative order-last flex aspect-square flex-col items-center justify-center overflow-hidden lg:items-stretch bg-surface-secondary @container md:col-span-7 md:aspect-auto lg:px-space-2xl-3xl lg:py-space-xl-2xl"
          >
            <img
              src="/assets/images/sections/agents-1536w.webp"
              alt=""
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="agents-stack relative">
              <div
                className="agents-chat glass-border flex items-center gap-space-s rounded-full bg-surface py-space-2xs pl-space-m pr-space-2xs shadow-xs"
                style={{ '--glass-border-radius': '9999px' }}
              >
                <span className="min-w-0 flex-1 truncate text-step--1 text-ink">{peopleAgents.prompt}</span>
                <SendButton />
              </div>
              <div
                className="card glass-border grid rounded-lg bg-surface shadow-xs"
                style={{ '--glass-border-radius': '0.5rem' }}
              >
                <div className="px-space-m py-space-s text-step--1 font-medium text-ink">{peopleAgents.planTitle}</div>
                <hr className="border-surface-tertiary" />
                <Stepper figureRef={figureRef} />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
