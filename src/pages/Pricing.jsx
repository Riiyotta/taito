import { pages } from '../content/product.js';
import {
  Badges,
  ComparisonTable,
  FeatureGrid,
  LogoMarquee,
  PageHeader,
  PriceColumns,
  ProdFaq,
} from '../components/product/Sections.jsx';
import { badgeSets } from '../components/product/mocks.js';

export default function Pricing() {
  const p = pages.pricing;
  return (
    <>
      <PageHeader hero={p.hero}>
        <PriceColumns />
      </PageHeader>
      <FeatureGrid data={p.grids[0]} />
      <LogoMarquee />
      <ComparisonTable data={p.comparison} />
      <Badges data={p.other[1]} badges={badgeSets.pricing} />
      <ProdFaq data={p.faq} />
    </>
  );
}
