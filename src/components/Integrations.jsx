import { integrations } from '../content.js';
import { Picture, SectionHeader, Section, SendButton, SlackCard } from './ui.jsx';

function McpTile({ prompt, chip }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-space-l-xl">
      <div
        className="glass-border w-full max-w-[22rem] rounded-2xl bg-surface"
        style={{ '--glass-border-radius': '1rem' }}
      >
        <p className="px-space-s pb-space-xs pt-space-s text-step--1 leading-normal text-ink">{prompt}</p>
        <div className="flex items-center justify-between px-space-s pb-space-s">
          <span className="inline-flex items-center gap-space-3xs rounded-full border border-surface-tertiary px-space-2xs py-space-3xs text-step--2 font-medium text-ink">
            <img src="/assets/svg/brand/taito-mark-mcp-chip.svg" alt="" className="size-4 rounded-full" />
            {chip}
          </span>
          <SendButton className="size-9" />
        </div>
      </div>
    </div>
  );
}

function LogosTile({ rows }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_95%)]">
      <div className="flex flex-col items-center gap-[clamp(1rem,5cqi,1.5rem)] [--cell:clamp(2.25rem,12cqi,3.5rem)]">
        {rows.map((row, ri) => (
          <div key={ri} className="flex gap-[clamp(1rem,5cqi,1.5rem)]">
            {row.map((l) => (
              <div
                key={l.name}
                className="glass-border flex size-[var(--cell)] flex-none items-center justify-center rounded-lg bg-white shadow-xs"
                style={{ '--glass-border-radius': '0.5rem' }}
              >
                <img
                  src={l.src}
                  alt={l.name}
                  className={`${l.large ? 'size-1/2 object-contain' : 'size-2/5'} ${l.rounded ? 'rounded' : ''}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Integrations() {
  const [c1, c2, c3] = integrations.cards;
  const tiles = [
    <SlackCard key="1" {...c1.slack} />,
    <McpTile key="2" prompt={c2.prompt} chip={c2.chip} />,
    <LogosTile key="3" rows={c3.rows} />,
  ];
  return (
    <Section labelledBy="integrations">
      <SectionHeader id="integrations" eyebrow={integrations.eyebrow} title={integrations.title} />
      <div className="u-grid !gap-y-space-l-xl">
        {[c1, c2, c3].map((card, i) => (
          <article key={card.title} className="flex flex-col gap-space-m-l @2xl:col-span-6 @4xl:col-span-4">
            <div className="gradient-border relative aspect-square overflow-hidden @2xl:aspect-[4/3] bg-surface-secondary @container">
              <Picture dir="integrations" base={card.image} />
              {tiles[i]}
            </div>
            <div className="flex flex-col gap-space-2xs">
              <h3 className="text-step-0 leading-tight text-ink">{card.title}</h3>
              <p className="text-step--1 leading-normal text-secondary-foreground">{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
