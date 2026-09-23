import '../styles/compliance-legal.css';
import { complianceIndex as d } from '../content/compliance-legal.js';
import { Block, CIcon, PageHeader, SectionTitle, useDocMeta } from '../components/compliance-legal/shared.jsx';

export default function ComplianceIndex() {
  useDocMeta(d.docTitle);
  return (
    <>
      <Block first aria-labelledby="compliance-heading">
        <PageHeader id="compliance-heading" eyebrow={d.eyebrow} title={d.title}>
          <p className="text-step-0 leading-normal text-secondary-foreground">{d.description}</p>
        </PageHeader>
      </Block>

      <Block aria-labelledby="compliance-markets">
        <SectionTitle id="compliance-markets" eyebrow={d.markets.eyebrow} title={d.markets.title} />
        <ul className="grid grid-cols-1 overflow-hidden border-l border-t border-surface-tertiary @md:grid-cols-2 @4xl:grid-cols-3">
          {d.markets.items.map((c) => (
            <li
              key={c.href}
              className="group relative border-b border-r border-surface-tertiary bg-surface p-gutter transition-colors duration-200 hover:bg-surface-secondary"
            >
              <a
                href={c.href}
                className="absolute inset-0 z-20 rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <span className="sr-only">{c.name}</span>
              </a>
              <div className="flex h-full flex-col gap-space-m-l">
                <div className="flex items-start justify-between gap-space-s">
                  <img src={c.flag} alt="" width="40" height="40" className="size-10 shrink-0 rounded-full" />
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-secondary text-primary-foreground transition-colors duration-150 group-hover:bg-ink group-hover:text-surface">
                    <CIcon name="arrow-up-right" className="size-4" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-col gap-space-2xs">
                  <h3 className="text-balance text-step-0 leading-tight text-ink">{c.name}</h3>
                  <p className="text-step--1 leading-normal text-secondary-foreground">{c.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Block>

      <Block aria-labelledby="compliance-guidelines">
        <SectionTitle id="compliance-guidelines" eyebrow={d.guidelines.eyebrow} title={d.guidelines.title} />
        <div className="grid grid-cols-1 divide-y divide-surface-tertiary @4xl:-mx-gutter @4xl:grid-cols-3 @4xl:divide-x @4xl:divide-y-0 [&>*:first-child]:pt-0 [&>*:last-child]:pb-0 [&>*]:py-space-m @4xl:[&>*]:px-gutter @4xl:[&>*]:py-0">
          {d.guidelines.items.map((g) => (
            <div key={g.title} className="flex flex-row items-start gap-space-s">
              <div className="flex min-w-0 flex-col gap-space-2xs">
                <h3 className="text-balance text-step-0 leading-tight text-ink">{g.title}</h3>
                <p className="text-step--1 leading-normal text-secondary-foreground">{g.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Block>
    </>
  );
}
