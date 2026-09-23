// Shared primitives used across sections (spec §1.5).

/** Lucide icon rendered as a currentColor mask of /assets/svg/icons/lucide-<name>.svg */
export function Icon({ name, className = 'size-4', style }) {
  return (
    <span
      aria-hidden="true"
      className={`icon ${className}`}
      style={{ '--icon': `url(/assets/svg/icons/lucide-${name}.svg)`, ...style }}
    />
  );
}

/** Rich text segments from content.js: string | {b} | {link, href} */
export function RichText({ segments }) {
  return segments.map((s, i) => {
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

/** Lines joined by <br> (headings with a forced break) */
export function Lines({ lines }) {
  return lines.map((l, i) => (
    <span key={i}>
      {l}
      {i < lines.length - 1 && <br />}
    </span>
  ));
}

/** <picture> with avif/webp/jpg 1024w variants, object-cover */
export function Picture({ base, dir, className = '', alt = '' }) {
  const root = `/assets/images/${dir}/${base}-1024w`;
  return (
    <picture className={`absolute inset-0 ${className}`}>
      <source srcSet={`${root}.avif`} type="image/avif" />
      <source srcSet={`${root}.webp`} type="image/webp" />
      <img src={`${root}.jpg`} alt={alt} loading="lazy" decoding="async" className="size-full object-cover" />
    </picture>
  );
}

/** Icon tile (FeatureIcon) — bg surface-secondary, radius 6px */
export function FeatureIcon({ name, size = 'sm' }) {
  if (size === 'lg') {
    return (
      <div className="flex size-space-l-xl flex-none items-center justify-center overflow-hidden rounded-md bg-surface-secondary text-ink">
        <Icon name={name} className="size-space-s" />
      </div>
    );
  }
  return (
    <div className="flex size-space-l flex-none items-center justify-center rounded-md bg-surface-secondary text-ink">
      <Icon name={name} className="size-4" />
    </div>
  );
}

/**
 * Section header (§4/§5). Default: title cols 1–5, description cols 1–6 on its own row.
 * Horizontal: description cols 7–12 on the title's row.
 */
export function SectionHeader({ id, eyebrow, title, description, horizontal = false, split = true }) {
  return (
    <header className="grid grid-cols-12 gap-x-gutter gap-y-space-s">
      <p className="col-span-12 text-step-0 leading-normal text-secondary-foreground">{eyebrow}</p>
      <h2
        id={id}
        className={`col-span-12 text-balance text-step-3 leading-heading text-ink ${split ? '@4xl:col-span-5' : ''}`}
      >
        <Lines lines={title} />
      </h2>
      {description && (
        <p
          className={`col-span-12 text-step-0 leading-normal text-secondary-foreground ${
            horizontal
              ? '@4xl:col-span-6 @4xl:col-start-7 @4xl:row-start-2'
              : split
                ? '@4xl:col-span-6 @4xl:col-start-1'
                : ''
          }`}
        >
          {Array.isArray(description) ? <RichText segments={description} /> : description}
        </p>
      )}
    </header>
  );
}

/** Standard content section shell (§1.4 section rhythm) */
export function Section({ labelledBy, ariaLabel, children, className = '', gridClassName = '' }) {
  return (
    <section
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}
      className={`border-t border-surface-tertiary bg-surface py-space-2xl-3xl ${className}`}
    >
      <div className="u-container">
        <div className={`u-grid ${gridClassName}`}>{children}</div>
      </div>
    </section>
  );
}

/** Vertical feature list with dividers (§6/§7) */
export function FeatureList({ items }) {
  return (
    <ul className="flex flex-col divide-y divide-surface-tertiary">
      {items.map((f) => (
        <li key={f.title} className="flex flex-row gap-space-s py-space-m first:pt-0 last:pb-0">
          <FeatureIcon name={f.icon} />
          <div className="flex flex-col gap-space-2xs">
            <h3 className="text-step-0 leading-tight text-ink">{f.title}</h3>
            <p className="text-step--1 leading-normal text-secondary-foreground">{f.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Mock Slack card bleeding off the tile (§4 card 2, §11 card 1) */
export function SlackCard({ channel, messages }) {
  return (
    <div
      className="glass-border absolute bottom-[-1.5rem] left-space-l-xl right-[-1.5rem] top-space-l-xl grid content-start rounded-tl-lg bg-surface shadow-xs"
      style={{ '--glass-border-radius': '0.5rem' }}
    >
      <div className="flex items-center gap-space-3xs border-b border-surface-tertiary px-space-s py-space-2xs text-step--2 font-medium text-ink">
        <Icon name="hash" className="size-3.5" />
        {channel}
      </div>
      <ul className="flex flex-col gap-space-s p-space-s">
        {messages.map((m, i) => (
          <li key={i} className="flex gap-space-xs">
            {m.bot ? (
              <img src="/assets/svg/brand/taito-mark-chat-avatar.svg" alt="" className="size-[calc(theme(spacing.space-s)+theme(spacing.space-xs))] flex-none rounded-md" />
            ) : (
              <img src={m.avatar} alt="" className="size-[calc(theme(spacing.space-s)+theme(spacing.space-xs))] flex-none rounded-md bg-surface-secondary object-cover" />
            )}
            <div className="min-w-0 text-step--2 leading-normal">
              <p>
                <span className="font-medium text-ink">{m.who}</span>
                <span className="ml-space-2xs text-muted-foreground">{m.time}</span>
              </p>
              <p className="text-secondary-foreground">
                <RichText segments={m.body} />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Round black send button with arrow-up */
export function SendButton({ className = 'size-10' }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-full bg-ink text-surface ${className}`}>
      <Icon name="arrow-up" className="size-4" />
    </span>
  );
}
