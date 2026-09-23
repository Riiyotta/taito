import { pages } from '../content/product.js';
import Personas from '../components/Personas.jsx';
import { FeatureGrid, ProdFaq, ProdTestimonial } from '../components/product/Sections.jsx';
import WaitlistIntro from '../components/product/WaitlistIntro.jsx';

export default function Waitlist() {
  const p = pages.waitlist;
  return (
    <>
      <WaitlistIntro data={p.grids[0]} />
      {/* live section is 495px tall: no min-height here (unlike /performance) */}
      <ProdTestimonial data={p.testimonial} tall={false} />
      <FeatureGrid data={p.grids[1]} />
      <Personas />
      <ProdFaq data={p.faq} />
    </>
  );
}
