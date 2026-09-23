import { personas } from '../content.js';
import { Icon, SectionHeader, Section } from './ui.jsx';

export default function Personas() {
  return (
    <Section labelledBy="personas">
      <SectionHeader id="personas" eyebrow={personas.eyebrow} title={personas.title} />
      <ul className="persona-grid grid auto-rows-fr grid-cols-1 gap-gutter @2xl:grid-cols-3">
        {personas.cards.map((c) => (
          <li key={c.href} className="contents">
            <article className="card dark group relative isolate flex aspect-[3/2] overflow-hidden rounded-xl bg-surface-secondary transition-colors duration-[250ms] ease-out hover:bg-surface-tertiary @2xl:aspect-[2/3]">
              <div className="card-background absolute inset-0 -z-10">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  style={{ '--pos': c.position }}
                  className="size-full object-cover [object-position:var(--pos)] transition-transform duration-[250ms] ease-out group-hover:scale-[1.04] @2xl:object-center"
                />
              </div>
              <div className="persona-overlay absolute inset-x-0 bottom-0 -z-[5] h-3/4 bg-gradient-to-b from-transparent to-persona-overlay" />
              <span className="card-indicator absolute right-space-s top-space-s flex size-9 items-center justify-center rounded-full bg-surface text-primary-foreground transition-[background-color,color,transform] duration-[250ms] ease-out group-hover:scale-110 group-hover:bg-primary-foreground group-hover:text-surface">
                <Icon name="plus" className="size-4 transition-transform duration-[250ms] ease-out group-hover:rotate-90" />
              </span>
              <div className="relative flex w-full flex-col justify-end gap-space-3xs p-gutter">
                <p className="text-step--1 text-secondary-foreground">{c.kicker}</p>
                <h3 className="text-step-0 font-medium leading-heading text-primary-foreground">{c.title}</h3>
                <p className="text-step--1 text-secondary-foreground">{c.body}</p>
              </div>
              <a
                href={c.href}
                className="card-link absolute inset-0 z-20 rounded-[inherit] transition-transform duration-[140ms] ease-out active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <span className="sr-only">Read more about {c.title}</span>
              </a>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
