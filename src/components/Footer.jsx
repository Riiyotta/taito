import { footer, site } from '../content.js';

export default function Footer() {
  const openCookieSettings = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('cookie-settings:open'));
  };

  return (
    <footer className="dark bg-surface text-primary-foreground">
      <div className="u-container py-space-2xl-3xl">
        {/* CTA row */}
        <div className="flex flex-col gap-space-m border-b border-surface-tertiary pb-space-l-xl @md:flex-row @md:items-center @md:justify-between">
          <div>
            <h2 className="text-step-3 leading-heading text-primary-foreground">{footer.ctaTitle}</h2>
            <p className="mt-space-2xs text-step-0 leading-normal text-secondary-foreground">{footer.ctaBody}</p>
          </div>
          <a href={site.waitlistHref} className="btn btn-lg btn-primary w-full !justify-start @md:w-auto @md:!justify-center">
            <span>{footer.cta}</span>
          </a>
        </div>

        {/* Link columns */}
        <nav
          aria-label="Footer"
          className="footer-nav footer-dim grid grid-cols-1 gap-space-m-l py-space-l-xl @md:grid-cols-2 @lg:grid-cols-4"
        >
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h2 className="mb-space-s text-step--1 font-medium leading-heading text-muted-foreground">{col.heading}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={l.cookieSettings ? openCookieSettings : undefined}
                      className="footer-link inline-block py-space-3xs text-step--1 leading-normal text-primary-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-space-s border-t border-surface-tertiary pt-space-s text-step--1 leading-normal">
          <p className="text-muted-foreground">{footer.copyright}</p>
          <ul className="footer-dim flex items-center gap-space-xs">
            {footer.social.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  aria-label={s.name}
                  className="footer-link -m-space-3xs flex p-space-3xs text-primary-foreground"
                >
                  <span aria-hidden="true" className="icon size-4" style={{ '--icon': `url(${s.icon})` }} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
