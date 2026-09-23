import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animate, stagger } from 'motion';
import { nav, site } from '../content.js';
import { Icon } from './ui.jsx';

const EASE = [0.23, 1, 0.32, 1];
const MENUS = ['product', 'solutions'];

function MegaMenuContent({ items }) {
  const half = Math.ceil(items.length / 2);
  const cols = [items.slice(0, half), items.slice(half)];
  return (
    <div className="flex gap-space-xs p-space-xs">
      {cols.map((col, ci) => (
        <div key={ci} className="flex">
          {ci > 0 && <div className="mr-space-xs w-px self-stretch bg-surface-tertiary" />}
          <ul className="flex flex-col">
            {col.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  data-nm-link
                  className="flex h-[99px] w-[330px] items-start gap-space-s rounded-md p-space-s transition-colors duration-200 ease-out hover:bg-surface-secondary focus-visible:bg-surface-secondary"
                >
                  <span className="flex size-10 flex-none items-center justify-center rounded-md bg-surface-secondary text-ink">
                    <Icon name={it.icon} className="size-4" />
                  </span>
                  <span className="flex flex-col text-step--2 leading-normal">
                    <span className="font-medium text-ink">{it.title}</span>
                    <span className="text-secondary-foreground">{it.description}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function useMegaMenu(headerRef) {
  const [menu, setMenu] = useState(null); // 'product' | 'solutions' | null
  const [ghost, setGhost] = useState(null); // previous menu snapshot during switch
  const [shown, setShown] = useState(null); // content kept mounted while closing
  const panelRef = useRef(null);
  const contentRef = useRef(null);
  const ghostRef = useRef(null);
  const prevMenu = useRef(null);
  const oldHeight = useRef(0);
  const openTimer = useRef();
  const closeTimer = useRef();

  const open = useCallback(
    (key) => {
      clearTimeout(closeTimer.current);
      clearTimeout(openTimer.current);
      if (menu === key) return;
      if (menu && panelRef.current) {
        oldHeight.current = panelRef.current.offsetHeight;
        setGhost(menu);
      }
      setMenu(key);
      setShown(key);
    },
    [menu],
  );

  const close = useCallback(() => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
    setMenu(null);
  }, []);

  const scheduleOpen = (key) => {
    clearTimeout(closeTimer.current);
    clearTimeout(openTimer.current);
    if (menu) open(key);
    else openTimer.current = setTimeout(() => open(key), 150);
  };
  const scheduleClose = () => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(close, 300);
  };
  const cancelClose = () => clearTimeout(closeTimer.current);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const prev = prevMenu.current;
    prevMenu.current = menu;
    if (menu && !prev) {
      const top = headerRef.current.getBoundingClientRect().bottom + 4;
      panel.style.top = `${top}px`;
      panel.style.display = 'block';
      panel.style.height = 'auto';
      animate(panel, { opacity: [0, 1], y: [-4, 0] }, { duration: 0.2, ease: EASE });
    } else if (menu && prev && prev !== menu) {
      const newH = contentRef.current.offsetHeight + 2; // + 1px borders
      animate(panel, { height: [oldHeight.current, newH] }, { duration: 0.25, ease: EASE }).then(() => {
        if (panelRef.current) panelRef.current.style.height = 'auto';
      });
      animate(contentRef.current, { opacity: [0, 1] }, { duration: 0.15, ease: EASE });
      if (ghostRef.current) {
        animate(ghostRef.current, { opacity: [1, 0] }, { duration: 0.12, ease: EASE }).then(() => setGhost(null));
      }
    } else if (!menu && prev) {
      animate(panel, { opacity: 0, y: -4 }, { duration: 0.15, ease: EASE }).then(() => {
        if (!prevMenu.current && panelRef.current) {
          panelRef.current.style.display = 'none';
          setShown(null);
          setGhost(null);
        }
      });
    }
  }, [menu, headerRef]);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        close();
        document.querySelector(`[data-nm-trigger="${menu}"]`)?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menu, close]);

  useEffect(() => () => {
    clearTimeout(openTimer.current);
    clearTimeout(closeTimer.current);
  }, []);

  return { menu, ghost, shown, open, close, scheduleOpen, scheduleClose, cancelClose, panelRef, contentRef, ghostRef };
}

function MobileMenu({ open, onClose }) {
  const [mounted, setMounted] = useState(open);
  const [expanded, setExpanded] = useState({});
  const overlayRef = useRef(null);

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  useLayoutEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    if (open) {
      animate(el, { opacity: [0, 1] }, { duration: 0.3, ease: EASE });
      animate(
        el.querySelectorAll('[data-mobile-li]'),
        { opacity: [0, 1], y: [8, 0] },
        { duration: 0.3, ease: EASE, delay: stagger(0.04) },
      );
    } else {
      animate(el, { opacity: 0 }, { duration: 0.2, ease: EASE }).then(() => {
        setMounted(false);
        setExpanded({});
      });
    }
  }, [open, mounted]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!mounted) return null;

  return (
    <div
      ref={overlayRef}
      id="mobile-nav-overlay"
      className="dark fixed inset-0 z-40 flex flex-col bg-surface nav:hidden"
      style={{ opacity: 0 }}
    >
      <div className="h-space-2xl flex-none" />
      <nav className="flex-1 overflow-y-auto px-gutter pt-space-l" aria-label="Mobile">
        <ul className="flex flex-col gap-space-s">
          {MENUS.map((key) => {
            const isOpen = !!expanded[key];
            return (
              <li key={key} data-mobile-li style={{ opacity: 0 }}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setExpanded((s) => ({ ...s, [key]: !s[key] }))}
                  className="flex w-full items-center justify-between text-step-2 font-medium leading-heading text-primary-foreground"
                >
                  {nav[key].label}
                  <Icon
                    name="chevron-down"
                    className={`size-5 transition-transform duration-200 ease-out ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] ease-out ${
                    isOpen ? 'grid-rows-[1fr] duration-[250ms]' : 'grid-rows-[0fr] duration-200'
                  }`}
                >
                  <div
                    className={`overflow-hidden transition-opacity duration-200 ease-out ${
                      isOpen ? 'opacity-100 delay-[90ms]' : 'opacity-0'
                    }`}
                  >
                    <ul className="flex flex-col gap-space-s pb-space-2xs pt-space-s">
                      {nav[key].items.map((it) => (
                        <li key={it.href}>
                          <a href={it.href} className="block">
                            <span className="block text-step-0 font-medium text-primary-foreground">{it.title}</span>
                            <span className="mt-space-3xs block text-step--1 text-primary-foreground/75">
                              {it.description}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
          {nav.links.map((l) => (
            <li key={l.href} data-mobile-li style={{ opacity: 0 }}>
              <a href={l.href} className="block text-step-2 font-medium leading-heading text-primary-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-none flex-col items-center gap-space-2xs px-gutter pb-space-l">
        <a href={site.waitlistHref} className="btn btn-lg btn-primary w-full" onClick={onClose}>
          <span>{nav.cta}</span>
        </a>
        <a href={site.loginHref} className="btn btn-lg text-primary-foreground">
          <span>{nav.login}</span>
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const headerRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mm = useMegaMenu(headerRef);

  // Auto-close mobile menu when crossing 1200px
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1200px)');
    const onChange = (e) => e.matches && setMobileOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const onTriggerKeyDown = (e, key) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      mm.open(key);
      requestAnimationFrame(() => mm.contentRef.current?.querySelector('[data-nm-link]')?.focus());
    }
  };

  const onPanelKeyDown = (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    const links = [...(mm.contentRef.current?.querySelectorAll('[data-nm-link]') ?? [])];
    const i = links.indexOf(document.activeElement);
    if (i < 0) return;
    e.preventDefault();
    const next = e.key === 'ArrowDown' ? (i + 1) % links.length : (i - 1 + links.length) % links.length;
    links[next].focus();
  };

  const shownItems = mm.shown ? nav[mm.shown].items : null;

  return (
    <header
      ref={headerRef}
      data-mobile-open={mobileOpen || undefined}
      className={`group/header relative z-50 h-space-2xl border-b ${
        mobileOpen ? 'border-transparent bg-transparent' : 'border-surface-tertiary bg-surface'
      }`}
      style={{
        transition:
          'background-color 200ms cubic-bezier(.23,1,.32,1), border-color 200ms cubic-bezier(.23,1,.32,1)',
      }}
    >
      <nav className="u-container relative z-50 grid h-full grid-cols-[1fr_auto_1fr] items-center" aria-label="Main">
        {/* Col 1 — logo */}
        <a
          href="/"
          className={`header-logo flex items-center gap-space-2xs justify-self-start text-step-0 font-medium leading-normal transition-colors duration-200 ease-out ${
            mobileOpen ? 'text-surface' : 'text-primary-foreground'
          }`}
        >
          <img
            src="/assets/svg/brand/taito-mark-header.svg"
            alt=""
            className={`size-7 rounded-md transition-[filter] duration-200 ${mobileOpen ? 'invert' : ''}`}
          />
          {site.name}
        </a>

        {/* Col 2 — desktop menu */}
        <ul
          className="nav-list hidden gap-1.5 nav:flex"
          data-nm-active={mm.menu ? '' : undefined}
          onMouseLeave={mm.scheduleClose}
        >
          {MENUS.map((key) => (
            <li key={key}>
              <button
                type="button"
                data-nm-trigger={key}
                data-active={mm.menu === key ? '' : undefined}
                aria-expanded={mm.menu === key}
                aria-controls="nm-viewport"
                onMouseEnter={() => mm.scheduleOpen(key)}
                onClick={() => (mm.menu === key ? mm.close() : mm.open(key))}
                onKeyDown={(e) => onTriggerKeyDown(e, key)}
                className="nav-item btn btn-sm text-primary-foreground"
              >
                <span>{nav[key].label}</span>
              </button>
            </li>
          ))}
          {nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-item btn btn-sm text-primary-foreground" onMouseEnter={mm.scheduleClose}>
                <span>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <span className="nav:hidden" />

        {/* Col 3 — CTAs / hamburger */}
        <div className="flex items-center justify-self-end">
          <div className="header-cta hidden items-center gap-space-2xs nav:flex">
            <a href={site.loginHref} className="btn btn-sm btn-ghost">
              <span>{nav.login}</span>
            </a>
            <a href={site.waitlistHref} className="btn btn-sm btn-primary">
              <span>{nav.cta}</span>
            </a>
          </div>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-overlay"
            onClick={() => setMobileOpen((o) => !o)}
            className={`hamburger-btn -mr-2 flex size-10 flex-col items-center justify-center gap-[7px] transition-transform duration-[160ms] ease-out active:scale-[0.97] nav:hidden ${
              mobileOpen ? 'text-surface' : 'text-primary-foreground'
            }`}
          >
            <span
              className={`block h-[1.5px] w-[18px] bg-current transition-[translate,rotate] duration-200 ease-out ${
                mobileOpen ? 'translate-y-[4.25px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-[18px] bg-current transition-[translate,rotate] duration-200 ease-out ${
                mobileOpen ? '-translate-y-[4.25px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mega-menu viewport (§2.1) */}
      <div
        id="nm-viewport"
        ref={mm.panelRef}
        data-nm-viewport
        onMouseEnter={mm.cancelClose}
        onMouseLeave={mm.scheduleClose}
        onKeyDown={onPanelKeyDown}
        className="fixed inset-x-0 z-50 mx-auto w-fit overflow-hidden rounded-md border border-surface-tertiary bg-surface shadow-lg"
        style={{ display: 'none' }}
      >
        <div className="relative">
          {mm.ghost && (
            <div ref={mm.ghostRef} className="pointer-events-none absolute left-0 top-0" aria-hidden="true">
              <MegaMenuContent items={nav[mm.ghost].items} />
            </div>
          )}
          <div ref={mm.contentRef}>{shownItems && <MegaMenuContent items={shownItems} />}</div>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
