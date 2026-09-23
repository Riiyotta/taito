import { personas } from '../content/persona-company.js';
import PageHero from '../components/persona-company/PageHero.jsx';
import {
  ComparisonTable,
  FeatureSection,
  PainColumns,
  PcFaq,
  PcStats,
  PcTestimonial,
} from '../components/persona-company/Sections.jsx';

// The three persona pages share one template; each page orders the same blocks differently.
const BLOCKS = {
  pain: PainColumns,
  features: FeatureSection,
  testimonial: PcTestimonial,
  stats: PcStats,
  table: ComparisonTable,
  faq: PcFaq,
};

export default function Persona({ persona }) {
  const page = personas[persona] ?? personas.founders;
  const { hero, sections } = page;
  return (
    <>
      <PageHero
        key={persona}
        eyebrow={hero.eyebrow}
        title={hero.title}
        lede={hero.lede}
        media={{ image: hero.image, objectPosition: hero.objectPosition, sr: hero.sr, prompt: hero.prompt }}
      />
      {sections.map((s, i) => {
        const Block = BLOCKS[s.type];
        return Block ? <Block key={`${persona}-${i}`} {...s} /> : null;
      })}
    </>
  );
}
