import { useParams } from 'react-router-dom';
import { calculators } from '../content/mcp-tools.js';
import { Block, PageHeader, useDocMeta } from '../components/compliance-legal/shared.jsx';
import { Html, SectionHead } from '../components/mcp-tools/shared.jsx';
import Calculator from '../components/mcp-tools/Calculator.jsx';
import { RESULT_LABELS } from '../components/mcp-tools/calcs.js';
import NotFound from './NotFound.jsx';

export default function ToolCalculator() {
  const { slug } = useParams();
  const c = Object.hasOwn(calculators, slug) ? calculators[slug] : null;
  useDocMeta(c ? `${c.header.title} — Taito.ai` : null, c ? RESULT_LABELS[slug].lang : undefined);
  if (!c) return <NotFound />;
  const { header, calc, sections } = c;

  return (
    <>
      <Block first aria-labelledby={header.id}>
        <PageHeader
          id={header.id}
          eyebrow={header.eyebrow}
          // long Nordic compounds ("Feriepengekalkulator") exceed 355px at 390; break instead of overflowing
          title={<span className="hyphens-auto break-words">{header.title}</span>}
        >
          <p className="text-step-0 leading-normal text-secondary-foreground">{header.desc}</p>
          {header.reviewed && (
            <p className="text-step--1 leading-normal text-secondary-foreground">
              {header.reviewed.label} <time dateTime={header.reviewed.datetime}>{header.reviewed.time}</time>
            </p>
          )}
        </PageHeader>
      </Block>

      <Block id={calc.id} aria-labelledby={`${calc.id}-heading`}>
        <SectionHead id={`${calc.id}-heading`} eyebrow={calc.eyebrow} title={calc.title} description={calc.desc} />
        <Calculator key={slug} slug={slug} calc={calc} />
      </Block>

      {sections.map((s) => (
        <Block key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`}>
          <SectionHead id={`${s.id}-heading`} eyebrow={s.eyebrow} title={s.title} description={s.desc} />
          {/* body HTML carries its own col-span classes, so it sits directly in the section grid */}
          <Html as="div" html={s.body} className="contents" />
        </Block>
      ))}
    </>
  );
}
