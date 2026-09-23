import { useRef } from 'react';
import { pages } from '../content/product.js';
import { ComparisonTable, PainPoints, ProdFaq, ProductHero, Related, SplitSection } from '../components/product/Sections.jsx';
import { AgentsDash } from '../components/product/HeroFigures.jsx';
import { IntegrationGrid, OnboardingStepper } from '../components/product/SplitMocks.jsx';

export default function Agents() {
  const p = pages.agents;
  const stepperFig = useRef(null);
  return (
    <>
      <ProductHero hero={p.hero} figure={<AgentsDash />} />
      <SplitSection
        split={p.splits[0]}
        mediaLeft
        figureRef={stepperFig}
        pad={false}
        figureClass="flex-col lg:items-stretch lg:px-space-2xl-3xl lg:py-space-xl-2xl"
        media={<OnboardingStepper figureRef={stepperFig} />}
      />
      <SplitSection split={p.splits[1]} pad={false} media={<IntegrationGrid />} />
      <PainPoints data={p.pains} />
      <ComparisonTable data={p.comparison} />
      <ProdFaq data={p.faq} />
      <Related data={p.related} />
    </>
  );
}
