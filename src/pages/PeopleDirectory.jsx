import { pages } from '../content/product.js';
import { ComparisonTable, PainPoints, ProductHero, Related, SplitSection } from '../components/product/Sections.jsx';
import { DirectoryWindow } from '../components/product/HeroFigures.jsx';
import { OrgChart, RecordCard } from '../components/product/SplitMocks.jsx';

export default function PeopleDirectory() {
  const p = pages.peopleDirectory;
  return (
    <>
      <ProductHero hero={p.hero} figure={<DirectoryWindow />} />
      <SplitSection split={p.splits[0]} mediaLeft media={<RecordCard />} />
      <SplitSection split={p.splits[1]} media={<OrgChart />} />
      <PainPoints data={p.pains} />
      <ComparisonTable data={p.comparison} />
      <Related data={p.related} />
    </>
  );
}
