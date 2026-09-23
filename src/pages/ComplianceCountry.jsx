import { useParams } from 'react-router-dom';
import '../styles/compliance-legal.css';
import { countryPages } from '../content/compliance-legal.js';
import { Block, CIcon, FaqSection, PageHeader, SectionTitle, useDocMeta } from '../components/compliance-legal/shared.jsx';
import GuideToc from '../components/compliance-legal/GuideToc.jsx';
import Prose from '../components/compliance-legal/Prose.jsx';
import NotFound from './NotFound.jsx';

function HeroImage({ name, alt }) {
  const root = `/assets/pages/compliance-legal/${name}-hero`;
  const set = (ext) => `${root}-960w.${ext} 960w, ${root}-1600w.${ext} 1600w`;
  const sizes = '(min-width: 1500px) 1420px, 100vw';
  return (
    <div className="col-span-12 aspect-video overflow-hidden rounded-xl bg-surface-secondary">
      <picture>
        <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
        <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
        <img
          src={`${root}-1600w.jpg`}
          srcSet={set('jpg')}
          sizes={sizes}
          alt={alt}
          width="1600"
          height="900"
          fetchpriority="high"
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  );
}

export default function ComplianceCountry() {
  const { lang = 'en', country } = useParams();
  const page = countryPages[`${lang}/${country}`];
  useDocMeta(page?.docTitle, page?.lang);
  if (!page) return <NotFound />;

  return (
    <>
      <Block first aria-labelledby="guide-heading">
        <PageHeader id="guide-heading" eyebrow={page.eyebrow} title={page.title}>
          <p className="text-step-0 leading-normal text-secondary-foreground">{page.description}</p>
          {page.altLink && (
            <a href={page.altLink.href} className="inline-link w-fit text-step--1">
              {page.altLink.label}
            </a>
          )}
          {page.reviewed && <p className="text-step--2 text-muted-foreground">{page.reviewed}</p>}
        </PageHeader>
        <HeroImage name={page.image} alt={page.imageAlt} />
      </Block>

      <Block aria-labelledby="at-a-glance-heading">
        <SectionTitle id="at-a-glance-heading" title={page.glance.title} />
        <ul className="col-span-12 grid list-none grid-cols-1 gap-x-space-l gap-y-space-s @md:grid-cols-2">
          {page.glance.items.map((t, i) => (
            <li key={i} className="flex items-start gap-space-2xs text-step-0 leading-normal text-secondary-foreground">
              <CIcon name="check" className="mt-1 size-4 shrink-0 text-ink" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Block>

      <Block aria-label={page.ariaLabel}>
        <GuideToc toc={page.toc} sources={page.sources} />
        <Prose blocks={page.prose} className="prose-taito col-span-12 max-w-none @4xl:col-span-8 @4xl:col-start-5" />
      </Block>

      <FaqSection title={page.faq.title} items={page.faq.items} />

      <Block aria-labelledby="resources-heading">
        <SectionTitle id="resources-heading" title={page.resources.title} />
        <ul className="grid grid-cols-1 overflow-hidden border-l border-t border-surface-tertiary @md:grid-cols-2">
          {page.resources.items.map((r) => (
            <li key={r.href} className="group relative border-b border-r border-surface-tertiary p-gutter">
              <a
                href={r.href}
                className="absolute inset-0 z-20 rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <span className="sr-only">{r.title}</span>
              </a>
              <div className="flex h-full flex-col justify-between gap-space-m-l">
                <div className="flex size-space-l shrink-0 items-center justify-center rounded-md bg-surface-secondary text-primary-foreground">
                  <CIcon name="arrow-up-right" className="size-4" />
                </div>
                <div className="flex min-w-0 flex-col gap-space-2xs">
                  <h3 className="text-balance text-step-0 leading-tight text-ink">{r.title}</h3>
                  <p className="text-step--1 leading-normal text-secondary-foreground">{r.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Block>
    </>
  );
}
