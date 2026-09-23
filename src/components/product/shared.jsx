// Shared primitives for the PRODUCT page group (spec: specs/SPEC_product.md).
import { useEffect } from 'react';
import { animate } from 'motion';
import { avatars } from './mocks.js';

export const EASE = [0.23, 1, 0.32, 1];
export const EASE_IN_OUT = [0.77, 0, 0.175, 1];
export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Icons saved for this group (public/assets/pages/product/icons); everything else falls
// back to the global icon folder used by ui.jsx.
const PROD_ICONS = new Set(
  'arrow-down-to-line arrow-up award baby ban bell blocks briefcase calendar-clock calendar-plus chart-no-axes-column check chevron-down chevron-right chevrons-up clock database file-check file-lock file-plus-corner file-spreadsheet file-text flask-conical globe hash heart-handshake heart history key-round list-checks lock message-circle message-square mouse-pointer-2 move-down network pen-line plane-takeoff plus pound-sterling route scroll-text search shield-alert shield-check signature sparkles star stethoscope target timer users wallet workflow'.split(
    ' ',
  ),
);

export function iconUrl(name) {
  if (name === 'mcp') return '/assets/pages/product/svg/mcp.svg';
  if (name === 'info-circle') return '/assets/pages/product/svg/info-circle.svg';
  return PROD_ICONS.has(name)
    ? `/assets/pages/product/icons/lucide-${name}.svg`
    : `/assets/svg/icons/lucide-${name}.svg`;
}

/** currentColor mask icon (same technique as ui.jsx Icon) */
export function PIcon({ name, className = 'size-4', style }) {
  return <span aria-hidden="true" className={`icon ${className}`} style={{ '--icon': `url(${iconUrl(name)})`, ...style }} />;
}

/** Feature icon tile — sm 39.58px (space-l), lg 58.56px (space-l-xl) */
export function Tile({ name, size = 'sm' }) {
  if (size === 'lg') {
    return (
      <div className="flex size-space-l-xl flex-none items-center justify-center overflow-hidden rounded-md bg-surface-secondary text-ink">
        <PIcon name={name} className="size-space-s" />
      </div>
    );
  }
  return (
    <div className="flex size-space-l flex-none items-center justify-center rounded-md bg-surface-secondary text-ink">
      <PIcon name={name} className="size-4" />
    </div>
  );
}

/** Rich text: string | array of string | {b} | {link, href} */
export function Rich({ value }) {
  if (value == null) return null;
  if (typeof value === 'string') return value;
  return value.map((s, i) => {
    if (typeof s === 'string') return <span key={i}>{s}</span>;
    if (s.b) return <span key={i} className="font-medium text-primary-foreground">{s.b}</span>;
    if (s.link)
      return (
        <a key={i} href={s.href} className="inline-link">
          {s.link}
        </a>
      );
    return null;
  });
}

export function Lines({ lines }) {
  const arr = Array.isArray(lines) ? lines : [lines];
  return arr.map((l, i) => (
    <span key={i}>
      {l}
      {i < arr.length - 1 && <br />}
    </span>
  ));
}

/** Mock card with glass border */
export function Card({ className = '', radius = '0.5rem', children, ...rest }) {
  return (
    <div
      className={`glass-border rounded-lg bg-surface shadow-xs ${className}`}
      style={{ '--glass-border-radius': radius }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Avatar: key into mocks.avatars, or initials ("NP", "EV", …) */
const INITIAL_TONES = {
  EV: 'bg-[oklch(0.92_0.04_285)] text-[oklch(0.4_0.1_285)]', // lavender (from screenshot, value inferred)
  AF: 'bg-[oklch(0.92_0.04_170)] text-[oklch(0.38_0.08_170)]', // mint (from screenshot, value inferred)
};
export function Avatar({ who, className = 'size-7', textClass = 'text-[10px]' }) {
  if (avatars[who]) {
    return <img src={avatars[who]} alt="" className={`flex-none rounded-full object-cover ${className}`} />;
  }
  return (
    <span
      className={`inline-flex flex-none items-center justify-center rounded-full font-medium ${textClass} ${
        INITIAL_TONES[who] ?? 'bg-surface-secondary text-secondary-foreground'
      } ${className}`}
    >
      {who}
    </span>
  );
}

/** 14px black check badge with ring-2 over an avatar */
export function CheckBadge() {
  return (
    <span className="absolute -bottom-0.5 -right-0.5 flex size-3.5 items-center justify-center rounded-full bg-ink text-surface ring-2 ring-surface">
      <PIcon name="check" className="size-2.5" />
    </span>
  );
}

/** Status pill (spec colors) */
const PILL = {
  g: 'text-[oklch(0.38_0.1_150)] bg-[oklch(0.92_0.04_150)]',
  n: 'text-secondary-foreground bg-surface-secondary',
  r: 'text-[oklch(0.4_0.13_25)] bg-[oklch(0.93_0.04_25)]',
  a: 'text-[oklch(0.4_0.12_75)] bg-[oklch(0.94_0.05_75)]',
};
export function Pill({ tone = 'g', children }) {
  return (
    <span className={`inline-flex w-fit items-center whitespace-nowrap rounded-full px-space-2xs py-space-3xs text-step--2 leading-none ${PILL[tone]}`}>
      {children}
    </span>
  );
}

/** Down arrow between stacked mock cards */
export function FlowArrow() {
  return (
    <div className="flex justify-center text-muted-foreground">
      <PIcon name="move-down" className="size-6" />
    </div>
  );
}

/** Two-line text block used inside mock items (step--2) */
export function ItemText({ title, sub, className = '' }) {
  return (
    <div className={`min-w-0 flex-1 text-step--2 leading-normal ${className}`}>
      <p className="font-medium text-ink">{title}</p>
      <p className="text-secondary-foreground">{sub}</p>
    </div>
  );
}

/** 40px mock icon tile */
export function MockTile({ name, className = '' }) {
  return (
    <span className={`flex size-10 flex-none items-center justify-center rounded-md bg-surface-secondary text-ink ${className}`}>
      <PIcon name={name} className="size-4" />
    </span>
  );
}

/**
 * Entrance reveal for split-section mocks: every [data-prod-reveal] inside `ref`
 * fades/translates in once the element crosses the viewport (−10% bottom margin).
 * Reduced motion: CSS (product.css) already shows everything.
 */
export function useReveal(ref, { y = 16, scale, duration = 0.55, stagger = 0.08, delay = 0 } = {}) {
  useEffect(() => {
    const root = ref.current;
    if (!root || reducedMotion()) return undefined;
    const els = root.querySelectorAll('[data-prod-reveal]');
    const controls = [];
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        els.forEach((el, i) => {
          const kf = { opacity: [0, 1], y: [y, 0] };
          if (scale) kf.scale = [scale, 1];
          controls.push(animate(el, kf, { duration, delay: delay + i * stagger, ease: EASE }));
        });
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(root);
    return () => {
      io.disconnect();
      controls.forEach((c) => c.stop?.());
    };
  }, [ref, y, scale, duration, stagger, delay]);
}

/** Section header; eyebrow optional (FAQ has none). */
export function ProdHeader({ id, eyebrow, title, description, split = true, eyebrowClass = 'text-step-0' }) {
  return (
    <header className="grid grid-cols-12 gap-x-gutter gap-y-space-s">
      {eyebrow && <p className={`col-span-12 leading-normal text-secondary-foreground ${eyebrowClass}`}>{eyebrow}</p>}
      <h2 id={id} className={`col-span-12 text-balance text-step-3 leading-heading text-ink ${split ? '@4xl:col-span-5' : ''}`}>
        <Lines lines={title} />
      </h2>
      {description && (
        <p
          className={`col-span-12 text-step-0 leading-normal text-secondary-foreground ${
            split ? '@4xl:col-span-6 @4xl:col-start-1' : ''
          }`}
        >
          <Rich value={description} />
        </p>
      )}
    </header>
  );
}
