import { useEffect, useState } from 'react';

/**
 * "On this page" list + Sources. Sticky at container ≥56rem (original: @4xl:sticky top-space-l).
 * Scrollspy: the section heading nearest the top of the viewport marks its link aria-current
 * (clone addition; the original has no active state).
 */
export default function GuideToc({ toc, sources }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const heads = toc.items.map(([, id]) => document.getElementById(id)).filter(Boolean);
    if (!heads.length) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.3;
      let cur = null;
      for (const h of heads) if (h.getBoundingClientRect().top <= line) cur = h.id;
      setActive(cur);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [toc]);

  return (
    <div className="col-span-12 flex flex-col gap-space-l self-start @4xl:sticky @4xl:top-space-l @4xl:col-span-3">
      <nav aria-labelledby="toc-heading" className="cl-toc">
        <p id="toc-heading" className="mb-space-xs text-step--1 font-medium text-primary-foreground">
          {toc.title}
        </p>
        <ul className="list-none divide-y divide-surface-tertiary border-t border-surface-tertiary text-step--2">
          {toc.items.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className="block py-space-2xs-xs text-secondary-foreground no-underline transition-colors duration-150 hover:text-primary-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <p className="mb-space-xs text-step--1 font-medium text-primary-foreground">{sources.title}</p>
        <ul className="flex flex-col gap-space-3xs text-step--2">
          {sources.items.map(([label, href]) => (
            <li key={href + label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="inline-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
