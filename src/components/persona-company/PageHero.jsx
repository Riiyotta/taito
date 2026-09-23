import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { Icon, SendButton } from '../ui.jsx';
import '../../styles/persona-company.css';

const EASE = [0.23, 1, 0.32, 1];
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Prompt card overlaid on the hero photo (persona pages). Types its prompt once after the hero sequence. */
function PromptCard({ prompt, startSignal }) {
  const rootRef = useRef(null);
  const textRef = useRef(null);
  const caretRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (reducedMotion()) {
      textRef.current.textContent = prompt;
      return undefined;
    }
    textRef.current.textContent = '';
    caretRef.current.removeAttribute('data-done');
    let raf;
    const timers = [];
    const start = () => {
      animate(root, { opacity: [0, 1], y: [12, 0] }, { duration: 0.35, ease: EASE });
      timers.push(
        setTimeout(() => {
          let i = 0;
          let next = performance.now();
          const tick = (now) => {
            while (i < prompt.length && now >= next) {
              i += 1;
              textRef.current.textContent = prompt.slice(0, i);
              next += 18 + Math.random() * 10;
            }
            if (i < prompt.length) raf = requestAnimationFrame(tick);
            else timers.push(setTimeout(() => caretRef.current?.setAttribute('data-done', ''), 1200));
          };
          raf = requestAnimationFrame(tick);
        }, 200),
      );
    };
    startSignal.current = start;
    return () => {
      startSignal.current = null;
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, [prompt, startSignal]);

  return (
    <div ref={rootRef} className="pc-prompt-root absolute inset-x-space-xl-2xl bottom-space-xl-2xl @container">
      <div
        className="glass-border flex flex-col gap-space-2xs rounded-2xl bg-surface/90 p-space-2xs shadow-prompt backdrop-blur-[12px] @md:gap-space-s @md:p-space-s"
        style={{ '--glass-border-radius': '1rem' }}
      >
        <p className="min-h-[2lh] px-space-s pb-space-2xs pt-space-xs text-step-0 leading-normal text-primary-foreground @md:px-3 @md:pb-0">
          <span ref={textRef}>{prompt}</span>
          <span ref={caretRef} aria-hidden="true" className="pc-caret" />
        </p>
        <div className="flex items-center justify-between px-space-2xs pb-space-2xs">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-ink/20 text-secondary-foreground">
            <Icon name="plus" className="size-4" />
          </span>
          <SendButton />
        </div>
      </div>
    </div>
  );
}

/**
 * Page hero shared by persona, company and customers pages (spec §A).
 * media: { image, objectPosition, sr, prompt? } | null (grey placeholder box, /customers)
 */
export default function PageHero({ eyebrow, title, lede, media }) {
  const sectionRef = useRef(null);
  const promptStart = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    const titleEl = root.querySelector('[data-hero-title]');
    const words = root.querySelectorAll('.hero-word-inner');
    const fades = root.querySelectorAll('[data-hero-fade]');
    if (reducedMotion()) return undefined;
    titleEl.style.opacity = '1';
    const controls = [];
    words.forEach((w, i) =>
      controls.push(
        animate(w, { opacity: [0, 1], y: ['105%', '0%'] }, { duration: 0.45, delay: 0.12 + i * 0.05, ease: EASE }),
      ),
    );
    const L = 0.12 + Math.max(0, words.length - 1) * 0.05 + 0.45 * 0.35;
    fades.forEach((el, i) =>
      controls.push(animate(el, { opacity: [0, 1], y: [12, 0] }, { duration: 0.5, delay: L + i * 0.05, ease: EASE })),
    );
    const done = L + Math.max(0, fades.length - 1) * 0.05 + 0.5;
    const t = setTimeout(() => promptStart.current?.(), done * 1000);
    return () => {
      clearTimeout(t);
      controls.forEach((c) => c.stop?.());
    };
  }, [title]);

  const words = title.split(' ');

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="min-h-[560px] lg:flex lg:min-h-[min(calc(100dvh-theme(spacing.space-2xl)),920px)] lg:flex-col"
    >
      <div className="u-container pb-space-l pt-space-xl lg:flex lg:flex-1 lg:flex-col lg:py-0">
        <div className="u-grid @4xl:items-stretch lg:flex-1">
          <div className="flex flex-col gap-space-l border-surface-tertiary @4xl:col-span-5 @4xl:h-full @4xl:justify-end @4xl:border-r @4xl:pb-space-2xl @4xl:pr-space-xl @4xl:pt-space-3xl">
            <div className="flex flex-col gap-space-s-m">
              <p data-hero-fade className="text-step--1 leading-heading text-secondary-foreground">
                {eyebrow}
              </p>
              <h1 id="hero-heading" data-hero-title className="mt-space-s text-balance text-step-5 leading-heading text-ink">
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
                {lede}
              </p>
            </div>
            <div data-hero-fade className="flex flex-wrap items-center gap-space-s">
              <a href="/waitlist" className="btn btn-lg btn-primary">
                <span>Join waitlist</span>
              </a>
            </div>
          </div>

          {media ? (
            <div className="aspect-square @4xl:col-span-7 @4xl:aspect-auto">
              <div className="pointer-events-none relative h-full min-h-[60vw] w-full select-none overflow-hidden bg-surface-secondary lg:min-h-0">
                <picture className="absolute inset-0 size-full">
                  <source srcSet={`${media.image}.avif`} type="image/avif" />
                  <source srcSet={`${media.image}.webp`} type="image/webp" />
                  <img
                    src={`${media.image}.jpg`}
                    alt=""
                    fetchpriority="high"
                    className="size-full object-cover"
                    style={{ objectPosition: media.objectPosition }}
                  />
                </picture>
                {media.prompt && <PromptCard prompt={media.prompt} startSignal={promptStart} />}
              </div>
              {media.sr && <p className="sr-only">{media.sr}</p>}
            </div>
          ) : (
            <div className="aspect-square @4xl:col-span-7 @4xl:aspect-auto @4xl:pb-gutter">
              <div className="aspect-square w-full bg-surface-secondary @4xl:aspect-auto @4xl:h-full" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
