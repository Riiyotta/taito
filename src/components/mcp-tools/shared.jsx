import { logos } from '../../content/mcp-tools.js';
import '../../styles/mcp-tools.css';

const A = '/assets/pages/mcp-tools/svg';

/** Lucide icon from this group's asset folder, rendered as a currentColor mask */
export function MIcon({ name, className = 'size-4' }) {
  return <span aria-hidden="true" className={`icon ${className}`} style={{ '--icon': `url(${A}/lucide-${name}.svg)` }} />;
}

/** Brand logo image by key in `logos` */
export function Logo({ id, className = 'size-4' }) {
  const l = logos[id];
  if (!l) return null;
  return <img src={l.src} alt="" className={`${className} shrink-0 object-contain ${id === 'taito' ? 'rounded-[22%]' : ''}`} />;
}

/** Static first-party HTML from content/mcp-tools.js */
export function Html({ html, as: Tag = 'span', className = '', ...rest }) {
  return <Tag {...rest} className={`mt-rich ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

/** Icon tile (CLONE_SPEC §1.5 FeatureIcon, 39.58px / 16px icon) */
export function FeatureTile({ icon }) {
  return (
    <div className="flex size-space-l flex-none items-center justify-center rounded-md bg-surface-secondary text-ink">
      <MIcon name={icon} className="size-4" />
    </div>
  );
}

/** Section header: eyebrow, title (cols 1–5), description (cols 1–6, may contain HTML) */
export function SectionHead({ id, eyebrow, title, description, as: H = 'h2' }) {
  return (
    <header className="grid grid-cols-12 gap-x-gutter gap-y-space-s">
      {eyebrow && <p className="col-span-12 text-step-0 leading-normal text-secondary-foreground">{eyebrow}</p>}
      <H id={id} className="col-span-12 text-step-3 leading-heading text-ink @4xl:col-span-5">
        {title}
      </H>
      {description && (
        <Html
          as="p"
          html={description}
          className="col-span-12 text-step-0 leading-normal text-secondary-foreground @4xl:col-span-6 @4xl:col-start-1"
        />
      )}
    </header>
  );
}

/** Three feature columns divided by hairlines (stacked with horizontal dividers below @4xl) */
export function FeatureColumns({ items }) {
  return (
    <div className="grid grid-cols-1 divide-y divide-surface-tertiary @4xl:-mx-gutter @4xl:grid-cols-3 @4xl:divide-x @4xl:divide-y-0 [&>*:first-child]:pt-0 [&>*:last-child]:pb-0 [&>*]:py-space-m @4xl:[&>*]:px-gutter @4xl:[&>*]:py-0">
      {items.map((f) => (
        <div key={f.title} className="flex flex-row items-start gap-space-s">
          {f.icon && <FeatureTile icon={f.icon} />}
          <div className="flex min-w-0 flex-col gap-space-2xs">
            <h3 className="text-balance text-step-0 leading-tight text-ink">{f.title}</h3>
            <p className="text-step--1 leading-normal text-secondary-foreground">{f.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Round arrow indicator used on link cards (hover handled by the parent `.group`) */
export function ArrowDot() {
  return (
    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-secondary text-primary-foreground transition-colors duration-150 group-hover:bg-ink group-hover:text-surface">
      <MIcon name="arrow-up-right" className="size-4" />
    </span>
  );
}

/** Bordered card grid (compliance market-grid pattern): whole card is a link */
export function LinkCardGrid({ items, cols = '@2xl:grid-cols-2 @4xl:grid-cols-3', render }) {
  return (
    <ul className={`grid grid-cols-1 overflow-hidden border-l border-t border-surface-tertiary ${cols}`}>
      {items.map((it) => (
        <li
          key={it.href}
          className="group relative border-b border-r border-surface-tertiary bg-surface p-gutter transition-colors duration-200 hover:bg-surface-secondary"
        >
          <a
            href={it.href}
            className="absolute inset-0 z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink"
          >
            <span className="sr-only">{it.title}</span>
          </a>
          <div className="flex h-full flex-col gap-space-l">{render(it)}</div>
        </li>
      ))}
    </ul>
  );
}

/** Small tool chip (gallery cards) */
export function ToolChip({ logo, label }) {
  return (
    <span className="inline-flex items-center gap-space-3xs rounded-full border border-surface-tertiary bg-surface px-space-2xs py-[2px] text-step--2 leading-normal text-secondary-foreground">
      <Logo id={logo} className="size-3" />
      {label}
    </span>
  );
}

/** Use-case card body (index gallery + related) */
export function UseCaseCardBody({ uc }) {
  return (
    <>
      <div className="flex flex-col items-start gap-space-2xs">
        <span className="rounded-full bg-surface-secondary px-space-2xs py-[2px] text-step--2 leading-normal text-secondary-foreground transition-colors duration-200 group-hover:bg-surface">
          {uc.category}
        </span>
        <div className="flex flex-col gap-space-2xs">
          <h3 className="text-balance text-step-0 leading-tight text-ink">{uc.title}</h3>
          <p className="text-step--1 leading-normal text-secondary-foreground">{uc.blurb}</p>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between gap-space-s">
        <div className="flex flex-wrap gap-space-3xs">
          {uc.tools.map((t) => (
            <ToolChip key={t.label} {...t} />
          ))}
        </div>
        <ArrowDot />
      </div>
    </>
  );
}

export function UseCaseGrid({ items }) {
  return (
    <LinkCardGrid
      items={items.map((uc) => ({ ...uc, href: `/mcp-use-cases/${uc.slug}` }))}
      render={(uc) => <UseCaseCardBody uc={uc} />}
    />
  );
}

/**
 * Split page hero (same geometry as the home/persona hero, CLONE_SPEC §3): text cols 1–5 with a
 * right hairline, media panel cols 6–12 on surface-secondary with a centred mock. Static — no
 * load sequence (hand-off to Animation).
 */
export function SplitHero({ eyebrow, title, lede, sr, children }) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="min-h-[560px] lg:flex lg:min-h-[min(calc(100dvh-theme(spacing.space-2xl)),920px)] lg:flex-col"
    >
      <div className="u-container pb-space-l pt-space-xl lg:flex lg:flex-1 lg:flex-col lg:py-0">
        <div className="u-grid @4xl:items-stretch lg:flex-1">
          <div className="flex flex-col gap-space-l border-surface-tertiary @4xl:col-span-5 @4xl:h-full @4xl:justify-end @4xl:border-r @4xl:pb-space-2xl @4xl:pr-space-xl @4xl:pt-space-3xl">
            <div className="flex flex-col gap-space-s-m">
              <p className="text-step--1 leading-heading text-secondary-foreground">{eyebrow}</p>
              <h1 id="hero-heading" className="mt-space-s text-balance text-step-5 leading-heading text-ink">
                {title}
              </h1>
              <p className="text-step-0 leading-normal text-secondary-foreground">{lede}</p>
            </div>
            <div className="flex flex-wrap items-center gap-space-s">
              <a href="/waitlist" className="btn btn-lg btn-primary">
                <span>Join waitlist</span>
              </a>
            </div>
          </div>
          <div className="aspect-square @4xl:col-span-7 @4xl:aspect-auto">
            <div
              aria-hidden="true"
              className="mt-stage pointer-events-none relative flex h-full w-full select-none items-center justify-center overflow-hidden bg-surface-secondary"
            >
              {children}
            </div>
            {sr && <p className="sr-only">{sr}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
