import { pages } from '../content/product.js';
import { Badges, FeatureGrid, PageHeader, ProdFaq, SplitSection } from '../components/product/Sections.jsx';
import { ApprovalMock } from '../components/product/SplitMocks.jsx';
import { badgeSets } from '../components/product/mocks.js';

export default function SecurityPage() {
  const p = pages.security;
  return (
    <>
      <PageHeader hero={p.hero} cta={{ label: 'Explore trust center', href: 'https://trust.taito.ai' }} />
      <Badges data={p.other[0]} badges={badgeSets.security} />
      <FeatureGrid data={p.grids[0]} />
      <SplitSection split={p.splits[0]} media={<ApprovalMock />} />
      <FeatureGrid data={p.grids[1]} />
      <ProdFaq data={p.faq} />
    </>
  );
}
