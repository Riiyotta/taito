import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { hero, site } from '../content.js';
import { Icon, SendButton } from './ui.jsx';

const EASE = [0.23, 1, 0.32, 1];
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wait = (ms, signal) =>
  new Promise((resolve) => {
    const t = setTimeout(resolve, ms);
    signal.addEventListener('abort', () => clearTimeout(t));
  });

function AppWindow() {
  const { app } = hero;
  return (
    <div
      data-app-window
      data-hero-figure
      className="hero-app-window glass-border absolute grid grid-cols-[clamp(8.5rem,26cqi,12rem)_1fr] rounded-tl-lg bg-surface shadow-xs"
      style={{ '--glass-border-radius': '0.5rem' }}
    >
      {/* Sidebar */}
      <aside className="flex min-w-0 flex-col rounded-l-lg border-r border-surface-tertiary bg-surface-secondary">
        <div className="flex h-10 flex-none items-center gap-space-2xs border-b border-surface-tertiary px-space-s">
          <span className="flex size-5 flex-none items-center justify-center rounded-full bg-ink text-[10px] font-medium text-surface">
            {app.orgInitial}
          </span>
          <span className="min-w-0 truncate text-step--2 font-medium text-ink">{app.org}</span>
          <Icon name="chevrons-up-down" className="size-3.5 text-muted-foreground" />
        </div>
        <div className="flex flex-col gap-space-xs px-space-2xs py-space-xs">
          {app.groups.map((g) => (
            <div key={g.label} className="flex flex-col gap-[2px]">
              <p className="px-space-2xs pb-space-3xs pt-space-2xs text-step--2 font-medium text-muted-foreground">
                {g.label}
              </p>
              {g.items.map((it) => (
                <div
                  key={it.label}
                  className={`flex h-[23.88px] items-center gap-space-2xs rounded-md px-space-2xs py-space-3xs text-step--2 leading-none ${
                    it.active ? 'bg-surface font-medium text-ink' : 'text-secondary-foreground'
                  }`}
                >
                  <Icon name={it.icon} className="size-3.5" />
                  <span className="truncate">{it.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </aside>

      {/* Main pane */}
      <div className="flex min-w-0 flex-col">
        <div className="flex h-10 flex-none items-center gap-space-s border-b border-surface-tertiary px-space-s text-step--2 text-muted-foreground">
          <Icon name="panel-left" className="size-3.5" />
          <div className="flex min-w-0 items-center gap-space-2xs">
            <span>{app.breadcrumb[0]}</span>
            <Icon name="chevron-right" className="size-3" />
            <span className="text-ink">{app.breadcrumb[1]}</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-space-m p-space-l">
          <div className="flex flex-col items-center gap-space-3xs text-center">
            <p className="text-step-1 leading-heading text-ink">{app.greeting}</p>
            <p className="text-step--1 text-muted-foreground">{app.question}</p>
          </div>
          <PromptInput />
        </div>
      </div>
    </div>
  );
}

function PromptInput() {
  const rootRef = useRef(null);
  const wrapRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const ctrl = new AbortController();
    const { signal } = ctrl;

    if (reducedMotion()) {
      textRef.current.textContent = hero.prompts[0];
      return () => ctrl.abort();
    }

    // Step 6: prompt root reveal on hero:complete
    const onComplete = () =>
      animate(root, { opacity: [0, 1], y: [12, 0] }, { duration: 0.35, ease: EASE });
    window.addEventListener('hero:complete', onComplete, { signal });

    // Step 7: typewriter loop — starts when prompt is 25% visible, +900ms
    const typeText = (text) =>
      new Promise((resolve) => {
        const start = performance.now();
        let raf;
        const tick = (now) => {
          if (signal.aborted) return resolve();
          const n = Math.min(text.length, Math.floor((now - start) / 28));
          textRef.current.textContent = text.slice(0, n);
          if (n < text.length) raf = requestAnimationFrame(tick);
          else resolve();
        };
        raf = requestAnimationFrame(tick);
        signal.addEventListener('abort', () => cancelAnimationFrame(raf));
      });

    const loop = async () => {
      await wait(900, signal);
      let i = 0;
      while (!signal.aborted) {
        const text = hero.prompts[i % hero.prompts.length];
        textRef.current.textContent = '';
        wrapRef.current.style.opacity = '1';
        await wait(200, signal);
        if (signal.aborted) return;
        await typeText(text);
        await wait(Math.min(2400, 600 + text.length * 18), signal);
        if (signal.aborted) return;
        wrapRef.current.style.opacity = '0';
        await wait(350, signal);
        i += 1;
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          loop();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(root);

    return () => {
      ctrl.abort();
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      data-prompt-root
      data-prompt-input
      className="flex w-full max-w-[26rem] flex-col gap-space-2xs rounded-2xl bg-surface/90 p-space-2xs shadow-prompt backdrop-blur-[12px]"
    >
      <div className="h-[calc(2lh+theme(spacing.space-xs)+theme(spacing.space-2xs))] overflow-hidden px-space-s pb-space-2xs pt-space-xs text-step--1 leading-normal text-ink">
        <span ref={wrapRef} data-prompt-wrap>
          <span ref={textRef} />
          <span
            aria-hidden="true"
            className="prompt-caret ml-[2px] inline-block h-[0.95em] w-[0.08em] animate-caret bg-current align-middle"
          />
        </span>
      </div>
      <div className="flex items-center justify-between px-space-2xs pb-space-2xs">
        <span className="inline-flex size-10 items-center justify-center rounded-full border border-ink/20 text-secondary-foreground">
          <Icon name="plus" className="size-4" />
        </span>
        <SendButton />
      </div>
    </div>
  );
}

function LogoMarquee() {
  const group = (hidden) => (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {hero.logos.map((l) => (
        <img
          key={l.name}
          src={l.src}
          alt={hidden ? '' : l.name}
          className={`w-auto max-w-none ${l.noFilter ? '' : 'brightness-0'} ${l.small ? 'h-3.5 lg:h-4' : 'h-4 lg:h-5'}`}
        />
      ))}
    </div>
  );
  return (
    <div className="border-t border-surface-tertiary py-space-m-l">
      <div className="u-container">
        <div className="marquee logo-strip flex h-5 items-center">
          <div className="flex w-max animate-marquee">
            {group(false)}
            {group(true)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);

  // §3.2 load sequence
  useEffect(() => {
    if (reducedMotion()) return;
    const root = sectionRef.current;
    const title = root.querySelector('[data-hero-title]');
    const words = root.querySelectorAll('.hero-word-inner');
    const eyebrow = root.querySelector('[data-hero-eyebrow]');
    const fades = root.querySelectorAll('[data-hero-fade]');
    const figure = root.querySelector('[data-hero-figure]');

    title.style.opacity = '1';
    const controls = [];
    controls.push(animate(eyebrow, { opacity: [0, 1], y: [12, 0] }, { duration: 0.5, delay: 0, ease: EASE }));
    words.forEach((w, i) =>
      controls.push(
        animate(w, { opacity: [0, 1], y: ['105%', '0%'] }, { duration: 0.45, delay: 0.12 + i * 0.05, ease: EASE }),
      ),
    );
    const L = 0.12 + (words.length - 1) * 0.05 + 0.45 * 0.35;
    fades.forEach((el, i) =>
      controls.push(animate(el, { opacity: [0, 1], y: [12, 0] }, { duration: 0.5, delay: L + i * 0.05, ease: EASE })),
    );
    controls.push(animate(figure, { opacity: [0, 1], y: [40, 0] }, { duration: 0.7, delay: 0.35, ease: EASE }));
    const t = setTimeout(() => window.dispatchEvent(new Event('hero:complete')), (L + 0.05 + 0.5) * 1000);
    return () => {
      clearTimeout(t);
      controls.forEach((c) => c.stop?.());
    };
  }, []);

  const words = hero.title.split(' ');

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="flex min-h-[560px] flex-col lg:min-h-[min(calc(100dvh-theme(spacing.space-2xl)),920px)]"
    >
      <div className="u-container pb-space-l pt-space-xl lg:flex lg:flex-1 lg:flex-col lg:py-0">
        <div className="u-grid @4xl:items-stretch lg:flex-1">
          {/* Left */}
          <div className="flex flex-col justify-end gap-space-l @4xl:col-span-5 @4xl:h-full @4xl:border-r @4xl:border-surface-tertiary @4xl:pb-space-2xl @4xl:pr-space-xl @4xl:pt-space-3xl">
            <div className="flex flex-col gap-space-s-m">
              <a
                data-hero-eyebrow
                href={hero.eyebrow.href}
                className="inline-flex items-center justify-between gap-space-3xs text-step--1 leading-heading text-secondary-foreground transition-colors duration-200 ease-out hover:text-primary-foreground @4xl:justify-start"
              >
                <span>{hero.eyebrow.label}</span>
                <Icon name="arrow-right" className="size-4" />
              </a>
              <h1
                id="hero-heading"
                data-hero-title
                className="mt-space-s text-balance text-step-5 leading-heading text-ink"
              >
                {words.map((w, i) => (
                  <span key={i}>
                    <span className="inline-block overflow-hidden align-bottom">
                      <span className="hero-word-inner inline-block">{w}</span>
                    </span>
                    {i < words.length - 1 && <span className="inline"> </span>}
                  </span>
                ))}
              </h1>
              <p data-hero-fade className="text-step-0 leading-normal text-secondary-foreground">
                {hero.lede}
              </p>
            </div>
            <div data-hero-fade className="flex flex-wrap gap-space-s">
              <a href={site.waitlistHref} className="btn btn-lg btn-primary">
                <span>{hero.cta}</span>
              </a>
            </div>
          </div>

          {/* Right media */}
          <div className="aspect-square @4xl:col-span-7 @4xl:aspect-auto">
            <div className="relative h-full select-none overflow-hidden border-r border-surface-tertiary bg-surface-secondary @container pointer-events-none">
              <picture className="absolute inset-0">
                <source srcSet="/assets/images/hero/street-1-1280w.avif" type="image/avif" />
                <source srcSet="/assets/images/hero/street-1-1280w.webp" type="image/webp" />
                <img
                  src="/assets/images/hero/street-1-1280w.jpg"
                  alt=""
                  fetchPriority="high"
                  className="size-full object-cover"
                />
              </picture>
              <AppWindow />
            </div>
            <p className="sr-only">{hero.srDescription}</p>
          </div>
        </div>
      </div>
      <LogoMarquee />
    </section>
  );
}
