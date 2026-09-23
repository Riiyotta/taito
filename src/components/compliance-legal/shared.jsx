import { useEffect, useRef } from 'react';
import { animate } from 'motion';
import { Icon } from '../ui.jsx';

export const EASE = [0.23, 1, 0.32, 1];

/** Icon from this group's asset folder (lucide, currentColor mask) — falls back to the shared set */
export function CIcon({ name, className = 'size-4', shared = false }) {
  if (shared) return <Icon name={name} className={className} />;
  return (
    <span
      aria-hidden="true"
      className={`icon ${className}`}
      style={{ '--icon': `url(/assets/pages/compliance-legal/lucide-${name}.svg)` }}
    />
  );
}

/** Rich segments: string | {b} | {a, href} */
export function Segs({ segs }) {
  return segs.map((s, i) => {
    if (typeof s === 'string') return s;
    if (s.b) return <strong key={i}>{s.b}</strong>;
    if (s.a) {
      const ext = /^https?:/.test(s.href);
      return (
        <a key={i} href={s.href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {s.a}
        </a>
      );
    }
    return null;
  });
}

/** Content section shell (§1.4 rhythm). `first` drops the top border (page hero). */
export function Block({ first = false, children, className = '', gridClassName = '', ...rest }) {
  return (
    <section
      className={`bg-surface py-space-2xl-3xl ${first ? '' : 'border-t border-surface-tertiary'} ${className}`}
      {...rest}
    >
      <div className="u-container">
        <div className={`u-grid ${gridClassName}`}>{children}</div>
      </div>
    </section>
  );
}

/** Page header (`header.page-header`): eyebrow, h1 cols 1–6, content cols 7–12 */
export function PageHeader({ id, eyebrow = 'Compliance', title, children }) {
  return (
    <header className="grid grid-cols-12 gap-x-gutter gap-y-space-m">
      <p className="col-span-12 text-step--1 leading-heading text-secondary-foreground">{eyebrow}</p>
      <h1 id={id} className="col-span-12 text-balance text-step-5 leading-heading text-ink @4xl:col-span-6">
        {title}
      </h1>
      <div className="col-span-12 flex flex-col justify-center gap-space-m @4xl:col-span-6 @4xl:col-start-7">
        {children}
      </div>
    </header>
  );
}

/** Section header (eyebrow optional, title cols 1–5, description cols 1–6) */
export function SectionTitle({ id, eyebrow, title, description }) {
  return (
    <header className="grid grid-cols-12 gap-x-gutter gap-y-space-s">
      {eyebrow && <p className="col-span-12 text-step-0 leading-normal text-secondary-foreground">{eyebrow}</p>}
      <h2 id={id} className="col-span-12 text-step-3 leading-heading text-ink @4xl:col-span-5">
        {title}
      </h2>
      {description && (
        <p className="col-span-12 text-step-0 leading-normal text-secondary-foreground @4xl:col-span-6 @4xl:col-start-1">{description}</p>
      )}
    </header>
  );
}

/** Button link (§1.5) */
export function ButtonLink({ href, variant = 'primary', children, onClick, download }) {
  const v =
    variant === 'primary'
      ? 'bg-ink text-surface hover:bg-ink-hover'
      : 'border border-surface-tertiary text-primary-foreground hover:bg-surface-secondary';
  return (
    <a href={href} onClick={onClick} download={download} className={`btn btn-lg ${v}`}>
      <span>{children}</span>
    </a>
  );
}

/** FAQ accordion (same motion as home §13) */
function FaqItem({ q, a }) {
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
      } else iconRef.current.style.transform = 'rotate(45deg)';
    } else {
      if (!reduce) {
        animate(iconRef.current, { rotate: 0 }, { duration: 0.2, ease: EASE });
        await animate(body, { height: [body.offsetHeight, 0], opacity: 0 }, { duration: 0.2, ease: EASE });
      } else iconRef.current.style.transform = 'rotate(0deg)';
      details.open = false;
      body.style.height = '';
      body.style.opacity = '';
    }
    busy.current = false;
  };
  return (
    <details ref={detailsRef} className="border-t border-surface-tertiary first:border-t-0">
      <summary
        onClick={onToggle}
        className="flex cursor-pointer list-none items-start justify-between gap-space-s py-space-s text-step-1 leading-normal text-primary-foreground"
      >
        <div>{q}</div>
        <span className="flex h-[1lh] shrink-0 items-center">
          <span ref={iconRef} className="inline-flex">
            <Icon name="plus" className="size-6" />
          </span>
        </span>
      </summary>
      <div ref={bodyRef} className="overflow-hidden">
        <div className="mt-space-xs max-w-[38rem] pb-space-s text-step-0 leading-normal text-secondary-foreground">{a}</div>
      </div>
    </details>
  );
}

export function FaqSection({ title, items }) {
  return (
    <Block aria-labelledby="faq-heading">
      <SectionTitle id="faq-heading" title={title} />
      <div data-faq-size="default" className="col-span-12 flex flex-col">
        {items.map((it) => (
          <FaqItem key={it.q} {...it} />
        ))}
      </div>
    </Block>
  );
}

/** Set document title (+ optional html lang) while mounted */
export function useDocMeta(title, lang) {
  useEffect(() => {
    const prevTitle = document.title;
    const prevLang = document.documentElement.lang;
    if (title) document.title = title;
    if (lang) document.documentElement.lang = lang;
    return () => {
      document.title = prevTitle;
      document.documentElement.lang = prevLang;
    };
  }, [title, lang]);
}
