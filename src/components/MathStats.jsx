import { mathStats } from '../content.js';
import { SectionHeader, Section } from './ui.jsx';

function SourceTooltip({ text }) {
  return (
    <span className="group/tip relative ml-[0.35em] inline-block">
      <button
        type="button"
        aria-label={`Source: ${text}`}
        className="relative top-[0.1em] inline-flex text-muted-foreground transition-colors duration-150 hover:text-secondary-foreground focus-visible:text-secondary-foreground"
      >
        <span
          aria-hidden="true"
          className="icon size-[1em]"
          style={{ '--icon': 'url(/assets/svg/icons/info-circle.svg)' }}
        />
      </button>
      <span
        role="tooltip"
        className="absolute bottom-[calc(100%+0.5em)] left-1/2 z-10 hidden w-max max-w-[18rem] -translate-x-1/2 rounded-md bg-surface-tertiary px-[0.7em] py-[0.4em] text-step--2 leading-normal text-primary-foreground group-hover/tip:block group-focus-within/tip:block"
      >
        {text}
      </span>
    </span>
  );
}

export default function MathStats() {
  return (
    <Section labelledBy="math-stats">
      <SectionHeader id="math-stats" eyebrow={mathStats.eyebrow} title={mathStats.title} />
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
            <dd className="whitespace-nowrap text-step-5 leading-none text-ink @4xl:text-right">{r.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
