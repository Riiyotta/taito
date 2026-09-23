import { pages } from '../content/product.js';
import { ComparisonTable, PainPoints, ProductHero, Related, SplitSection } from '../components/product/Sections.jsx';
import { TimeOffBalances } from '../components/product/HeroFigures.jsx';
import { AttendanceWindow, TimeOffFlow } from '../components/product/SplitMocks.jsx';

export default function TimeOff() {
  const p = pages.timeOff;
  return (
    <>
      <ProductHero hero={p.hero} figure={<TimeOffBalances />} />
      <SplitSection split={p.splits[0]} mediaLeft media={<TimeOffFlow />} />
      <SplitSection split={p.splits[1]} pad={false} media={<AttendanceWindow />} />
      <PainPoints data={p.pains} />
      <ComparisonTable data={p.comparison} />
      <Related data={p.related} />
    </>
  );
}
