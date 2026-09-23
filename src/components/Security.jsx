import { security } from '../content.js';
import { Icon, Lines, SectionHeader, Section } from './ui.jsx';

export default function Security() {
  return (
    <Section labelledBy="security">
      <SectionHeader
        id="security"
        eyebrow={security.eyebrow}
        title={security.title}
        description={security.description}
      />
      <div>
        <ul className="inline-grid grid-flow-col grid-rows-[auto_auto] gap-y-space-xs divide-x divide-surface-tertiary self-start">
          {security.badges.map((b) => (
            <li
              key={b.icon}
              className={`row-span-2 grid-rows-subgrid px-space-m py-space-s first:pl-0 ${
                b.hideOnMobile ? 'hidden md:grid' : 'grid'
              }`}
            >
              <Icon name={b.icon} className="size-6 text-secondary-foreground" />
              <p className="text-step--1 font-medium leading-snug text-ink">
                <Lines lines={b.lines} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
