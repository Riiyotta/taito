import { why } from '../content.js';
import { Icon, Picture, SectionHeader, Section, SlackCard } from './ui.jsx';

function IconGridTile() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-space-l-xl">
      <div className="grid grid-cols-[repeat(3,var(--cell))] gap-[clamp(1rem,5cqi,1.5rem)] [--cell:clamp(2.25rem,12cqi,3.5rem)]">
        {why.cards[0].icons.map((name) => (
          <div
            key={name}
            className="glass-border flex aspect-square size-[var(--cell)] items-center justify-center rounded-lg bg-white text-ink shadow-xs"
            style={{ '--glass-border-radius': '0.5rem' }}
          >
            <Icon name={name} className="size-2/5" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PoliciesCard({ title, items }) {
  return (
    <div
      className="glass-border absolute bottom-[-1.5rem] left-space-l-xl right-[-1.5rem] top-space-l-xl grid content-start rounded-tl-lg bg-surface shadow-xs"
      style={{ '--glass-border-radius': '0.5rem' }}
    >
      <div className="border-b border-surface-tertiary px-space-s py-space-2xs text-step--2 font-medium text-ink">
        {title}
      </div>
      <ul>
        {items.map((it, i) => (
          <li
            key={it.title}
            className={`relative flex items-center gap-space-xs p-space-s ${
              i < items.length - 1
                ? "after:absolute after:bottom-0 after:left-space-s after:right-space-s after:h-px after:bg-surface-tertiary after:content-['']"
                : ''
            }`}
          >
            <img src={it.flag} alt="" className="size-7 flex-none rounded-full" />
            <div className="text-step--2 leading-normal">
              <p className="font-medium text-ink">{it.title}</p>
              <p className="text-secondary-foreground">{it.sub}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WhyTaito() {
  const [c1, c2, c3] = why.cards;
  const tiles = [
    <IconGridTile key="1" />,
    <SlackCard key="2" {...c2.slack} />,
    <PoliciesCard key="3" {...c3.policies} />,
  ];
  return (
    <Section labelledBy="why-taito">
      <SectionHeader id="why-taito" eyebrow={why.eyebrow} title={why.title} description={why.description} horizontal />
      <div className="u-grid !gap-y-space-l-xl">
        {[c1, c2, c3].map((card, i) => (
          <article key={card.title} className="feature-card flex flex-col gap-space-l @2xl:col-span-6 @4xl:col-span-4">
            <div className="gradient-border relative aspect-[4/3] overflow-hidden bg-surface-secondary @container">
              <Picture dir="why" base={card.image} />
              {tiles[i]}
            </div>
            <div className="flex flex-col gap-space-xs">
              <h3 className="text-balance text-step-1 leading-heading text-ink">{card.title}</h3>
              <p className="text-step--1 leading-normal text-secondary-foreground">{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
