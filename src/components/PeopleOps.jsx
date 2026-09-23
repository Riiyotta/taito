import { peopleOps } from '../content.js';
import { FeatureIcon, SectionHeader, Section } from './ui.jsx';

export default function PeopleOps() {
  return (
    <Section labelledBy="people-ops">
      <SectionHeader
        id="people-ops"
        eyebrow={peopleOps.eyebrow}
        title={peopleOps.title}
        description={peopleOps.description}
      />
      <ul className="grid grid-cols-1 overflow-hidden border-l border-t border-surface-tertiary @md:grid-cols-2 @4xl:grid-cols-3">
        {peopleOps.items.map((it) => (
          <li key={it.title} className="border-b border-r border-surface-tertiary p-gutter">
            <div className="flex flex-col gap-space-m-l">
              <FeatureIcon name={it.icon} size="lg" />
              <div className="flex flex-col gap-space-2xs">
                <h3 className="text-step-0 leading-tight text-ink">{it.title}</h3>
                <p className="text-step--1 leading-normal text-secondary-foreground">{it.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
