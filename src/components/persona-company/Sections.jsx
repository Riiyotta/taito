import { useRef } from 'react';
import { animate } from 'motion';
import { mathStats } from '../../content.js';
import { zapIcon } from '../../content/persona-company.js';
import { Icon, Lines, Section } from '../ui.jsx';

const EASE = [0.23, 1, 0.32, 1];

/** Lucide icon; `zap` isn't in the shared icon set so it points at this group's asset folder. */
export function PcIcon({ name, className }) {
  return <Icon name={name} className={className} style={name === 'zap' ? { '--icon': `url(${zapIcon})` } : undefined} />;
}

/** SectionHeader variant with optional eyebrow (FAQ has none) — same classes as the shared one. */
export function PcHeader({ id, eyebrow, title, description, horizontal = false }) {
  const lines = Array.isArray(title) ? title : [title];
  return (
    <header className="grid grid-cols-12 gap-x-gutter gap-y-space-s">
      {eyebrow && <p className="col-span-12 text-step-0 leading-normal text-secondary-foreground">{eyebrow}</p>}
      <h2 id={id} className="col-span-12 text-balance text-step-3 leading-heading text-ink @4xl:col-span-5">
        <Lines lines={lines} />
      </h2>
      {description && (
        <p
          className={`col-span-12 text-step-0 leading-normal text-secondary-foreground ${
            horizontal ? '@4xl:col-span-6 @4xl:col-start-7 @4xl:row-start-2' : '@4xl:col-span-6 @4xl:col-start-1'
          }`}
        >
          {description}
        </p>
      )}
    </header>
  );
}

function Strong({ segments }) {
  return segments.map((s, i) =>
    typeof s === 'string' ? (
      <span key={i}>{s}</span>
    ) : (
      <strong key={i} className="font-medium text-ink">
        {s.b}
      </strong>
    ),
  );
}

/** §B — three columns separated by dividers, bleeding to the gutter edges on wide containers */
export function PainColumns({ id, eyebrow, title, items }) {
  return (
    <Section labelledBy={id}>
      <PcHeader id={id} eyebrow={eyebrow} title={title} />
      <div className="grid grid-cols-1 divide-y divide-surface-tertiary [&>*:first-child]:pt-0 [&>*:last-child]:pb-0 [&>*]:py-space-m @4xl:-mx-gutter @4xl:grid-cols-3 @4xl:divide-x @4xl:divide-y-0 @4xl:[&>*]:px-gutter @4xl:[&>*]:py-0">
        {items.map((it) => (
          <div key={it.title} className="flex flex-col gap-space-m-l">
            <div className="flex min-w-0 flex-col gap-space-2xs">
              <p className="text-step--1 leading-heading text-secondary-foreground">{it.kicker}</p>
              <h3 className="text-balance text-step-0 leading-tight text-ink">{it.title}</h3>
              <p className="text-step--1 leading-normal text-secondary-foreground">
                <Strong segments={it.body} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/** §C — bordered feature cells (3 cols) or company values (4 cols, kicker instead of icon) */
export function FeatureGrid({ items, columns = 3 }) {
  return (
    <ul
      className={`grid grid-cols-1 overflow-hidden border-l border-t border-surface-tertiary @md:grid-cols-2 min-[1500px]:-mx-gutter ${
        columns === 4 ? '@4xl:grid-cols-4' : '@4xl:grid-cols-3'
      }`}
    >
      {items.map((it) => (
        <li key={it.title} className="relative border-b border-r border-surface-tertiary p-gutter">
          <div className="flex flex-col gap-space-m-l">
            {it.icon && (
              <div className="flex size-space-l-xl flex-none items-center justify-center overflow-hidden rounded-md bg-surface-secondary text-primary-foreground">
                <PcIcon name={it.icon} className="size-space-s" />
              </div>
            )}
            {it.kicker && <p className="text-step--1 leading-heading text-secondary-foreground">{it.kicker}</p>}
            <div className="flex min-w-0 flex-col gap-space-2xs">
              <h3 className="text-balance text-step-0 leading-tight text-ink">
                {it.href ? (
                  <a href={it.href} className="hover:text-ink-hover">
                    {it.title}
                  </a>
                ) : (
                  it.title
                )}
              </h3>
              <p className="text-step--1 leading-normal text-secondary-foreground">{it.body}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function FeatureSection({ id, eyebrow, title, items }) {
  return (
    <Section labelledBy={id}>
      <PcHeader id={id} eyebrow={eyebrow} title={title} />
      <FeatureGrid items={items} />
    </Section>
  );
}

/** §D — testimonial (same as homepage §9, logo at natural size; `tall` = min-height variant) */
export function PcTestimonial({ logo, quote, name, role, tall }) {
  return (
    <Section
      ariaLabel="Customer testimonial"
      className={tall ? 'flex min-h-[clamp(600px,100vh-1.5rem,45rem)] flex-col justify-center [&>div]:w-full' : ''}
    >
      <figure className="col-span-12 mx-auto flex max-w-[56rem] flex-col gap-space-l text-center">
        <div className="mx-auto flex h-space-xl items-center justify-center">
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={logo.h}
            className={`mx-auto w-auto ${logo.filter ? 'brightness-0' : ''}`}
          />
        </div>
        <blockquote className="quote text-balance text-step-1 leading-snug text-primary-foreground">{quote}</blockquote>
        <figcaption>
          <span className="text-step-0 font-medium">{name}</span>
          <div className="text-step--1">{role}</div>
        </figcaption>
      </figure>
    </Section>
  );
}

function SourceTooltip({ text }) {
  return (
    <span className="group/tip relative ml-[0.35em] inline-block">
      <button
        type="button"
        aria-label={`Source: ${text}`}
        className="relative top-[0.1em] inline-flex text-muted-foreground transition-colors duration-150 hover:text-secondary-foreground focus-visible:text-secondary-foreground"
      >
        <span aria-hidden="true" className="icon size-[1em]" style={{ '--icon': 'url(/assets/svg/icons/info-circle.svg)' }} />
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

/** §E — stats (homepage §12 rows, page-specific heading) */
export function PcStats({ id, eyebrow, title }) {
  return (
    <Section labelledBy={id}>
      <PcHeader id={id} eyebrow={eyebrow} title={title} />
      <dl className="flex flex-col">
        {mathStats.rows.map((r) => (
          <div
            key={r.value}
            className="flex flex-col gap-space-xs border-t border-surface-tertiary py-space-m-l @4xl:flex-row @4xl:items-start @4xl:justify-between @4xl:gap-space-l"
          >
            <dt className="text-step-0 leading-tight text-ink">
              {r.label}
              <SourceTooltip text={r.source} />
            </dt>
            <dd className="whitespace-nowrap text-step-5 leading-none text-ink">{r.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

/** §F — status quo vs Taito.ai table */
export function ComparisonTable({ id, eyebrow, title, head, rows }) {
  return (
    <Section labelledBy={id}>
      <PcHeader id={id} eyebrow={eyebrow} title={title} />
      <div className="overflow-x-auto">
        <table className="pc-table w-full border-collapse text-step-0 leading-normal">
          <thead>
            <tr className="border-b border-surface-tertiary">
              {head.map((h, i) => (
                <th
                  key={i}
                  className={`text-left font-medium ${i === 2 ? 'text-ink' : 'text-muted-foreground'} ${i === 0 ? 'w-1/4' : ''}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-b border-surface-tertiary last:border-b-0">
                <th className="text-left align-top font-medium text-ink">{r[0]}</th>
                <td className="align-top text-secondary-foreground">{r[1]}</td>
                <td className="align-top text-primary-foreground">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

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
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
      <summary onClick={onToggle} className="flex cursor-pointer list-none items-start justify-between gap-space-s py-space-s text-step-1 text-primary-foreground">
        <div>{item.q}</div>
        <span className="flex h-[1lh] shrink-0 items-center">
          <span ref={iconRef} className="inline-flex">
            <Icon name="plus" className="size-6" />
          </span>
        </span>
      </summary>
      <div ref={bodyRef} className="overflow-hidden">
        <div className="faq-description mt-space-xs max-w-[38rem] pb-space-s text-step-0 leading-normal text-secondary-foreground">
          {item.a}
        </div>
      </div>
    </details>
  );
}

/** §G — FAQ (homepage §13 behaviour, header without eyebrow) */
export function PcFaq({ id, title, items }) {
  return (
    <Section labelledBy={id}>
      <PcHeader id={id} title={title} />
      <div className="flex flex-col">
        {items.map((item) => (
          <FaqItem key={item.q} item={item} />
        ))}
      </div>
    </Section>
  );
}
