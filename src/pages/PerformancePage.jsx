import { useRef } from 'react';
import { pages } from '../content/product.js';
import { PainPoints, ProdFaq, ProdTestimonial, ProductHero, Related, SplitSection } from '../components/product/Sections.jsx';
import { PerformanceReview } from '../components/product/HeroFigures.jsx';
import { InsightsWindow, ReviewCycle } from '../components/product/SplitMocks.jsx';

export default function PerformancePage() {
  const p = pages.performance;
  const cycleFig = useRef(null);
  return (
    <>
      <ProductHero hero={p.hero} figure={<PerformanceReview />} />
      <SplitSection split={p.splits[0]} mediaLeft figureRef={cycleFig} media={<ReviewCycle figureRef={cycleFig} />} />
      <SplitSection split={p.splits[1]} pad={false} media={<InsightsWindow />} />
      <ProdTestimonial data={p.testimonial} />
      <PainPoints data={p.pains} />
      <ProdFaq data={p.faq} />
      <Related data={p.related} />
    </>
  );
}
