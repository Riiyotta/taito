import { testimonial } from '../content.js';
import { Section } from './ui.jsx';

export default function Testimonial() {
  return (
    <Section ariaLabel="Customer testimonial">
      <figure className="mx-auto flex max-w-[56rem] flex-col gap-space-l text-center">
        <div className="flex h-space-xl items-center justify-center">
          <img src={testimonial.logo.src} alt={testimonial.logo.alt} className="h-6 w-[92px]" />
        </div>
        <blockquote className="quote text-balance text-step-1 leading-snug text-ink">{testimonial.quote}</blockquote>
        <figcaption>
          <p className="text-step-0 font-medium text-ink">{testimonial.name}</p>
          <p className="text-step--1 text-ink">{testimonial.role}</p>
        </figcaption>
      </figure>
    </Section>
  );
}
