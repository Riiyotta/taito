import { toolsIndex as d } from '../content/mcp-tools.js';
import { Block, PageHeader, useDocMeta } from '../components/compliance-legal/shared.jsx';
import { ArrowDot, FeatureColumns, LinkCardGrid, SectionHead } from '../components/mcp-tools/shared.jsx';

export default function ToolsIndex() {
  useDocMeta('Tools — Taito.ai');
  return (
    <>
      <Block first aria-labelledby="tools-heading">
        <PageHeader id="tools-heading" eyebrow={d.header.eyebrow} title={d.header.title}>
          <p className="text-step-0 leading-normal text-secondary-foreground">{d.header.description}</p>
        </PageHeader>
      </Block>

      <Block id={d.list.id} aria-labelledby={`${d.list.id}-heading`}>
        <SectionHead id={`${d.list.id}-heading`} eyebrow={d.list.eyebrow} title={d.list.title} />
        <LinkCardGrid
          cols="@2xl:grid-cols-2"
          items={d.list.items.map((t) => ({ ...t, href: `/tools/${t.slug}` }))}
          render={(t) => (
            <>
              <div className="flex flex-col gap-space-xs">
                <p className="text-step--1 leading-normal text-secondary-foreground">{t.kicker}</p>
                <div className="flex flex-col gap-space-2xs">
                  <h3 className="text-balance text-step-0 leading-tight text-ink">{t.title}</h3>
                  <p className="text-step--1 leading-normal text-secondary-foreground">{t.body}</p>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between gap-space-s">
                <p className="text-step--1 leading-normal text-muted-foreground">{t.statute}</p>
                <ArrowDot />
              </div>
            </>
          )}
        />
      </Block>

      <Block id={d.standard.id} aria-labelledby={`${d.standard.id}-heading`}>
        <SectionHead id={`${d.standard.id}-heading`} eyebrow={d.standard.eyebrow} title={d.standard.title} />
        <FeatureColumns items={d.standard.features} />
      </Block>

      <Block id={d.coverage.id} aria-labelledby={`${d.coverage.id}-heading`}>
        <SectionHead
          id={`${d.coverage.id}-heading`}
          eyebrow={d.coverage.eyebrow}
          title={d.coverage.title}
          description={d.coverage.description}
        />
      </Block>
    </>
  );
}
