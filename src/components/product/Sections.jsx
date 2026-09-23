// Section components for the PRODUCT page group (specs/SPEC_product.md §1–§10).
import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import '../../styles/product.css';
import { Section } from '../ui.jsx';
import { EASE, Lines, PIcon, ProdHeader, Rich, Tile, reducedMotion } from './shared.jsx';
import { customerLogos, prices } from './mocks.js';

const SECTION = 'border-t border-surface-tertiary bg-surface py-space-2xl-3xl';

/* ------------------------------------------------------------------ §1 */
/**
 * ProductHero — home hero geometry minus the logo strip. `figure` is rendered inside the
 * grey @container media box; figures run their own load animation.
 */
export function ProductHero({ hero, figure, mediaClass = 'aspect-square' }) {
  const ref = useRef(null);

  useEffect(() => {
    if (reducedMotion()) return undefined;
    const root = ref.current;
    const title = root.querySelector('[data-prod-title]');
    const words = root.querySelectorAll('.prod-word-inner');
    const fades = root.querySelectorAll('[data-prod-fade]');
    title.style.opacity = '1';
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
    return () => controls.forEach((c) => c.stop?.());
  }, [hero.title]);

  const words = hero.title.split(' ');

  return (
    <section
      ref={ref}
      aria-labelledby="hero-heading"
      className="prod-hero min-h-[560px] lg:flex lg:min-h-[min(calc(100dvh-theme(spacing.space-2xl)),920px)] lg:flex-col"
    >
      <div className="u-container pb-space-l pt-space-xl lg:flex lg:flex-1 lg:flex-col lg:py-0">
        <div className="u-grid @4xl:items-stretch lg:flex-1">
          <div className="flex flex-col justify-end gap-space-l border-surface-tertiary @4xl:col-span-5 @4xl:h-full @4xl:border-r @4xl:pb-space-2xl @4xl:pr-space-xl @4xl:pt-space-3xl">
            <div className="flex flex-col gap-space-s-m">
              <p data-prod-fade className="text-step--1 leading-heading text-secondary-foreground">
                {hero.eyebrow}
              </p>
              <h1 id="hero-heading" data-prod-title className="mt-space-s text-balance text-step-5 leading-heading text-ink">
                {words.map((w, i) => (
                  <span key={i}>
                    <span className="inline-block overflow-hidden align-bottom">
                      <span className="prod-word-inner inline-block">{w}</span>
                    </span>
                    {i < words.length - 1 && ' '}
                  </span>
                ))}
              </h1>
              <p data-prod-fade className="text-step-0 leading-normal text-secondary-foreground">
                {hero.lede}
              </p>
            </div>
            <div data-prod-fade className="flex flex-wrap items-center gap-space-s">
              <a href="/waitlist" className="btn btn-lg btn-primary">
                <span>Join waitlist</span>
              </a>
            </div>
          </div>

          <div className={`prod-hero-media ${mediaClass} @4xl:col-span-7 @4xl:aspect-auto`}>
            <div className="pointer-events-none relative h-full select-none overflow-hidden bg-surface-secondary @container">
              {figure}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ §2 */
function ProdFeatureList({ items }) {
  return (
    <ul className="flex flex-col divide-y divide-surface-tertiary">
      {items.map((f, i) => (
        <li key={i} className="flex flex-row gap-space-s py-space-m first:pt-0 last:pb-0">
          <Tile name={f.icon} />
          <div className={`flex flex-col gap-space-2xs ${f.title ? '' : 'justify-center'}`}>
            {f.title && <h3 className="text-step-0 leading-tight text-ink">{f.title}</h3>}
            <p className="text-step--1 leading-normal text-secondary-foreground">{f.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/**
 * Split section (text col-span-5 + media col-span-7). `mediaLeft` puts the media first at
 * md+. `media` is rendered inside the figure; `figureRef` lets mocks observe the figure.
 * `pad` = centered mock (px/py space-l); otherwise media content positions itself (windows).
 */
export function SplitSection({ split, mediaLeft = false, media, figureRef, pad = true, figureClass = '' }) {
  const content = (
    <div
      className={`section-content flex flex-col justify-between gap-space-xl py-space-m-l md:col-span-5 ${
        mediaLeft ? 'md:pl-space-m-l' : 'md:pr-space-m-l'
      }`}
    >
      <ProdHeader id={split.id} eyebrow={split.eyebrow} title={split.title} description={split.description} split={false} />
      <ProdFeatureList items={split.features} />
    </div>
  );
  const fig = (
    <figure
      ref={figureRef}
      className={`section-media relative order-last flex aspect-square items-center justify-center overflow-hidden bg-surface-secondary @container md:col-span-7 md:aspect-auto md:h-full ${
        mediaLeft ? 'md:order-none' : ''
      } ${pad ? 'px-space-l py-space-l' : ''} ${figureClass}`}
    >
      {media}
    </figure>
  );
  return (
    <section
      aria-labelledby={split.id}
      className={`flex min-h-[clamp(600px,100vh-1.5rem,45rem)] flex-col justify-center ${SECTION}`}
    >
      <div className="u-container">
        <div className="u-grid">
          {mediaLeft ? fig : content}
          {mediaLeft ? content : fig}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ §3 */
export function PainPoints({ data }) {
  return (
    <Section labelledBy={data.id}>
      <ProdHeader id={data.id} eyebrow={data.eyebrow} title={data.title} />
      <ul className="grid grid-cols-1 divide-y divide-surface-tertiary @4xl:-mx-gutter @4xl:grid-cols-3 @4xl:divide-x @4xl:divide-y-0">
        {data.items.map((it, i) => (
          <li key={i} className="flex flex-col gap-space-2xs py-space-m first:pt-0 last:pb-0 @4xl:px-gutter @4xl:py-0">
            <p className="text-step--1 leading-heading text-secondary-foreground">P / {i + 1}</p>
            <h3 className="text-balance text-step-0 leading-tight text-ink">{it.title}</h3>
            <p className="text-step--1 leading-normal text-secondary-foreground">{it.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ------------------------------------------------------------------ §4 */
function SourceTooltip({ text }) {
  return (
    <span className="group/tip relative ml-[0.35em] inline-block">
      <button
        type="button"
        aria-label={`Source: ${text}`}
        className="relative top-[0.1em] inline-flex text-muted-foreground transition-colors duration-150 hover:text-secondary-foreground focus-visible:text-secondary-foreground"
      >
        <PIcon name="info-circle" className="size-[1em]" />
      </button>
      <span
        role="tooltip"
        className="absolute bottom-[calc(100%+0.5em)] left-1/2 z-10 hidden w-max max-w-[18rem] -translate-x-1/2 rounded-md bg-surface-tertiary px-[0.7em] py-[0.4em] text-step--2 leading-normal text-primary-foreground group-focus-within/tip:block group-hover/tip:block"
      >
        {text}
      </span>
    </span>
  );
}

export function ComparisonTable({ data }) {
  return (
    <Section labelledBy={data.id}>
      <ProdHeader id={data.id} eyebrow={data.eyebrow} title={data.title} />
      <div className="overflow-x-auto">
        <table className="prod-table u-table w-full border-collapse text-step-0 leading-normal">
          <thead>
            <tr className="border-b border-surface-tertiary">
              <th className="w-1/4" aria-hidden="true" />
              <th scope="col" className="text-left align-top font-medium text-muted-foreground">
                {data.head[0]}
              </th>
              <th scope="col" className="text-left align-top font-medium text-ink">
                {data.head[1]}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((r) => (
              <tr key={r.label} className="border-b border-surface-tertiary last:border-b-0">
                <th scope="row" className="text-left align-top font-medium text-ink">
                  {r.label}
                </th>
                <td className="align-top text-secondary-foreground">
                  {r.before}
                  {r.source && <SourceTooltip text={r.source} />}
                </td>
                <td className="align-top text-ink">{r.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ §5 */
export function Related({ data }) {
  return (
    <Section labelledBy={data.id}>
      <ProdHeader id={data.id} eyebrow={data.eyebrow} title={data.title} />
      <ul className="grid grid-cols-1 overflow-hidden border-l border-t border-surface-tertiary @md:grid-cols-2 @4xl:grid-cols-3">
        {data.items.map((it) => (
          <li key={it.href} className="group relative border-b border-r border-surface-tertiary p-gutter">
            <div className="flex h-full flex-col gap-space-m-l">
              <Tile name={it.icon} size="lg" />
              <div className="flex flex-col gap-space-2xs">
                <h3 className="text-step-0 leading-tight text-ink">{it.title}</h3>
                <p className="text-step--1 leading-normal text-secondary-foreground">{it.body}</p>
              </div>
              <span
                aria-hidden="true"
                className="inline-flex h-[calc(theme(spacing.space-2xs)*4)] w-fit items-center gap-space-3xs rounded-md bg-surface-secondary px-space-xs text-step--1 font-medium text-primary-foreground transition-colors duration-150 group-hover:bg-ink group-hover:text-surface"
              >
                Read more
                <PIcon name="chevron-right" className="size-4" />
              </span>
            </div>
            <a
              href={it.href}
              className="prod-card-link card-link absolute inset-0 z-20 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2"
            >
              <span className="sr-only">Read more about {it.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ------------------------------------------------------------------ §6 */
export function FeatureGrid({ data, first = false }) {
  return (
    <Section labelledBy={data.id} className={first ? '!border-t-0' : ''}>
      <ProdHeader id={data.id} eyebrow={data.eyebrow} title={data.title} description={data.description} />
      <ul className="grid grid-cols-1 overflow-hidden border-l border-t border-surface-tertiary @md:grid-cols-2 @4xl:grid-cols-3">
        {data.items.map((it, i) => {
          const href = data.links?.[i];
          const external = href?.startsWith('http');
          return (
            <li key={it.title} className="relative border-b border-r border-surface-tertiary p-gutter">
              <div className="flex flex-col gap-space-m-l">
                <Tile name={it.icon} size="lg" />
                <div className="flex flex-col gap-space-2xs">
                  <h3 className="text-step-0 leading-tight text-ink">{it.title}</h3>
                  <p className="text-step--1 leading-normal text-secondary-foreground">{it.body}</p>
                </div>
              </div>
              {href && (
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="prod-card-link card-link absolute inset-0 z-20 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2"
                >
                  <span className="sr-only">{it.title}</span>
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

/* ------------------------------------------------------------------ §7 */
export function PageHeader({ hero, cta, children }) {
  return (
    <section aria-labelledby="page-heading" className="bg-surface py-space-2xl-3xl">
      <div className="u-container">
        <div className="u-grid">
          <header className="page-header grid grid-cols-12 gap-x-gutter gap-y-space-m">
            <p className="col-span-12 text-step--1 leading-heading text-secondary-foreground">{hero.eyebrow}</p>
            <h1
              id="page-heading"
              className="col-span-12 text-balance text-step-5 leading-heading text-ink @4xl:col-span-6 @4xl:row-start-2"
            >
              {hero.title}
            </h1>
            {hero.lede && (
              <div className="col-span-12 @4xl:col-span-6 @4xl:col-start-7 @4xl:row-start-2 @4xl:self-center">
                <p className="text-step-0 leading-normal text-secondary-foreground">{hero.lede}</p>
              </div>
            )}
            {cta && (
              <div className="page-header-actions col-span-12 flex flex-wrap gap-space-s @4xl:col-span-6 @4xl:row-start-3">
                <a href={cta.href} className="btn btn-lg btn-primary">
                  <span>{cta.label}</span>
                </a>
              </div>
            )}
          </header>
          {children}
        </div>
      </div>
    </section>
  );
}

export function PriceColumns() {
  return (
    <>
      <hr className="border-surface-tertiary" />
      <dl className="grid grid-cols-1 gap-x-gutter gap-y-space-xl @4xl:grid-cols-2">
        {prices.map((p, i) => (
          <div
            key={p.term}
            className={`flex flex-col items-start gap-space-s ${
              i === 0 ? 'border-b border-surface-tertiary pb-space-xl @4xl:border-b-0 @4xl:border-r @4xl:pb-0' : ''
            }`}
          >
            <dt className="flex items-center gap-space-2xs text-step--1 font-medium text-muted-foreground">
              {p.term}
              {p.badge && (
                <span className="rounded-full border border-ink px-space-2xs py-[2px] text-step--2 text-ink">{p.badge}</span>
              )}
            </dt>
            <dd className="text-step-3 font-medium leading-heading text-ink">{p.price}</dd>
            <p className="text-step-0 leading-normal text-secondary-foreground">{p.note}</p>
            <a href="/waitlist" className={`btn btn-lg ${p.primary ? 'btn-primary' : 'btn-outline'}`}>
              <span>Join waitlist</span>
            </a>
          </div>
        ))}
      </dl>
    </>
  );
}

/* ------------------------------------------------------------------ §8 */
export function BadgeRow({ badges, className = '' }) {
  return (
    <div className={className}>
      <ul className="inline-grid grid-flow-col grid-rows-[auto_auto] gap-y-space-xs divide-x divide-surface-tertiary self-start">
        {badges.map((b) => (
          <li
            key={b.icon}
            className={`row-span-2 grid-rows-subgrid px-space-m py-space-s first:pl-0 ${b.hideOnMobile ? 'hidden md:grid' : 'grid'}`}
          >
            <PIcon name={b.icon} className="size-6 text-secondary-foreground" />
            <p className="text-step--1 font-medium leading-snug text-ink">
              <Lines lines={b.lines} />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Badges({ data, badges }) {
  return (
    <Section labelledBy={data.id}>
      <ProdHeader id={data.id} eyebrow={data.eyebrow} title={data.title} description={data.description} />
      <BadgeRow badges={badges} />
    </Section>
  );
}

/* ------------------------------------------------------------------ §10 */
export function ProdTestimonial({ data, tall = true }) {
  return (
    <section
      aria-label="Customer testimonial"
      className={`flex flex-col justify-center ${tall ? 'min-h-[clamp(600px,100vh-1.5rem,45rem)]' : ''} ${SECTION}`}
    >
      <div className="u-container">
        <figure className="mx-auto flex max-w-[56rem] flex-col gap-space-l text-center">
          <div className="flex h-space-xl items-center justify-center">
            <img src={data.logo.src} alt={data.logo.alt} className={`w-auto ${data.logo.className}`} />
          </div>
          <blockquote className="quote text-balance text-step-1 leading-snug text-ink">{data.quote}</blockquote>
          <figcaption>
            <p className="text-step-0 font-medium text-ink">{data.name}</p>
            <p className="text-step--1 text-ink">{data.role}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ pricing logo marquee */
export function LogoMarquee() {
  const group = (hidden) => (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {customerLogos.map((l) => (
        <img key={l.name} src={l.src} alt={hidden ? '' : l.name} className={`h-4 w-auto max-w-none lg:h-5 ${l.noFilter ? '' : 'brightness-0'}`} />
      ))}
    </div>
  );
  return (
    <section aria-label="Customers" className={SECTION}>
      <div className="u-container">
        <div className="marquee flex h-5 items-center">
          <div className="flex w-max animate-marquee">
            {group(false)}
            {group(true)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ FAQ (home §13 behaviour) */
function FaqItem({ item }) {
  const detailsRef = useRef(null);
  const bodyRef = useRef(null);
  const iconRef = useRef(null);
  const busy = useRef(false);

  const onToggle = async (e) => {
    e.preventDefault();
    if (busy.current) return;
    busy.current = true;
    const details = detailsRef.current;
    const body = bodyRef.current;
    const reduce = reducedMotion();
    if (!details.open) {
      details.open = true;
      if (!reduce) {
        animate(iconRef.current, { rotate: [0, 45] }, { duration: 0.25, ease: EASE });
        await animate(body, { height: [0, body.scrollHeight], opacity: [0, 1] }, { duration: 0.25, ease: EASE });
        body.style.height = 'auto';
      } else {
        iconRef.current.style.transform = 'rotate(45deg)';
      }
    } else {
      if (!reduce) {
        animate(iconRef.current, { rotate: 0 }, { duration: 0.2, ease: EASE });
        await animate(body, { height: [body.offsetHeight, 0], opacity: 0 }, { duration: 0.2, ease: EASE });
      } else {
        iconRef.current.style.transform = 'rotate(0deg)';
      }
      details.open = false;
      body.style.height = '';
      body.style.opacity = '';
    }
    busy.current = false;
  };

  return (
    <details ref={detailsRef} className="border-t border-surface-tertiary first:border-t-0">
      <summary onClick={onToggle} className="flex cursor-pointer list-none items-start justify-between gap-space-s py-space-s">
        <span className="text-step-1 leading-normal text-ink">{item.q}</span>
        <span className="flex h-[1lh] flex-none items-center text-step-1 leading-normal text-ink">
          <span ref={iconRef} className="inline-flex">
            <PIcon name="plus" className="size-6" />
          </span>
        </span>
      </summary>
      <div ref={bodyRef} className="overflow-hidden">
        <p className="faq-description mt-space-xs max-w-[38rem] pb-space-s text-step-0 leading-normal text-secondary-foreground">
          <Rich value={item.a} />
        </p>
      </div>
    </details>
  );
}

export function ProdFaq({ data }) {
  return (
    <Section labelledBy={data.id}>
      <ProdHeader id={data.id} title={data.title} />
      <div className="flex flex-col">
        {data.items.map((item) => (
          <FaqItem key={item.q} item={item} />
        ))}
      </div>
    </Section>
  );
}
