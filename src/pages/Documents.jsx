import { useRef } from 'react';
import { pages } from '../content/product.js';
import { ComparisonTable, PainPoints, ProductHero, Related, SplitSection } from '../components/product/Sections.jsx';
import { DocumentsWheel } from '../components/product/HeroFigures.jsx';
import { DocsFlow, TemplatesCard } from '../components/product/SplitMocks.jsx';

export default function Documents() {
  const p = pages.documents;
  const templatesFig = useRef(null);
  return (
    <>
      <ProductHero hero={p.hero} figure={<DocumentsWheel />} />
      <SplitSection
        split={p.splits[0]}
        mediaLeft
        figureRef={templatesFig}
        media={<TemplatesCard figureRef={templatesFig} />}
      />
      <SplitSection split={p.splits[1]} media={<DocsFlow />} />
      <PainPoints data={p.pains} />
      <ComparisonTable data={p.comparison} />
      <Related data={p.related} />
    </>
  );
}
