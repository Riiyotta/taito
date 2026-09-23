import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animate } from 'motion';
import { cookies } from '../content.js';
import { RichText } from './ui.jsx';

const EASE = [0.23, 1, 0.32, 1];
const COOKIE = 'cookie-consent';

const readConsent = () => {
  const m = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=([^;]*)`));
  return m ? JSON.parse(decodeURIComponent(m[1])) : null;
};
const writeConsent = (value) => {
  const maxAge = 180 * 24 * 60 * 60; // 180 days
  document.cookie = `${COOKIE}=${encodeURIComponent(JSON.stringify(value))}; max-age=${maxAge}; path=/; SameSite=Lax`;
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, advertising: false });
  const ref = useRef(null);

  useEffect(() => {
    const existing = readConsent();
    if (existing) setPrefs({ analytics: !!existing.analytics, advertising: !!existing.advertising });
    else setVisible(true);
    const onOpen = () => {
      setCustomize(true);
      setVisible(true);
    };
    window.addEventListener('cookie-settings:open', onOpen);
    return () => window.removeEventListener('cookie-settings:open', onOpen);
  }, []);

  useLayoutEffect(() => {
    if (visible && ref.current) {
      animate(ref.current, { opacity: [0, 1], y: [16, 0] }, { duration: 0.3, ease: EASE });
    }
  }, [visible]);

  const dismiss = async (value) => {
    writeConsent({ necessary: true, ...value });
    if (ref.current) await animate(ref.current, { opacity: 0, y: 16 }, { duration: 0.2, ease: EASE });
    setVisible(false);
    setCustomize(false);
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-consent"
      ref={ref}
      className="fixed inset-x-0 bottom-0 z-50 max-w-[36rem] p-space-s sm:left-auto"
      style={{ opacity: 0 }}
    >
      <div
        role="dialog"
        aria-labelledby="cookie-title"
        className="rounded-xl border border-surface-tertiary bg-surface p-space-m shadow-lg"
      >
        <h2 id="cookie-title" className="text-step-0 font-medium leading-heading text-ink">
          {cookies.title}
        </h2>
        <p className="mt-space-2xs text-step--1 leading-normal text-secondary-foreground">
          <RichText segments={cookies.body} />
        </p>

        <div
          className={`grid transition-[grid-template-rows] duration-[220ms] ease-out ${
            customize ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div
            className={`overflow-hidden transition-opacity duration-200 ease-out ${
              customize ? 'opacity-100 delay-[80ms]' : 'opacity-0'
            }`}
          >
            <fieldset className="mt-space-s flex flex-col gap-space-xs">
              <legend className="sr-only">Cookie preferences</legend>
              {cookies.options.map((o) => (
                <label key={o.id} className="flex items-start gap-space-2xs text-step--1 leading-normal">
                  <input
                    type="checkbox"
                    className="mt-[0.3em] accent-ink"
                    checked={o.locked ? true : prefs[o.id]}
                    disabled={o.locked}
                    onChange={(e) => setPrefs((p) => ({ ...p, [o.id]: e.target.checked }))}
                  />
                  <span>
                    <span className="block font-medium text-ink">{o.label}</span>
                    <span className="block text-secondary-foreground">{o.description}</span>
                  </span>
                </label>
              ))}
            </fieldset>
          </div>
        </div>

        <div className="mt-space-s flex flex-wrap gap-space-2xs">
          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={() => dismiss({ analytics: true, advertising: true })}
          >
            <span>{cookies.acceptAll}</span>
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline"
            onClick={() => dismiss({ analytics: false, advertising: false })}
          >
            <span>{cookies.rejectAll}</span>
          </button>
          <button
            type="button"
            className="btn btn-sm btn-ghost"
            onClick={() => (customize ? dismiss(prefs) : setCustomize(true))}
          >
            <span>{customize ? cookies.save : cookies.customize}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
