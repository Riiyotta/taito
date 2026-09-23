// Waitlist intro + form (specs/SPEC_product.md §9). The form never submits over the network.
import { useState } from 'react';
import { ProdHeader, PIcon, Tile } from './shared.jsx';
import { BadgeRow } from './Sections.jsx';
import { badgeSets, waitlistForm as f } from './mocks.js';

const FIELD =
  'w-full rounded-lg border border-surface-tertiary bg-surface px-space-xs py-space-2xs text-step--1 leading-normal text-ink placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-ink';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FieldError({ id, children }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-space-2xs text-step--2 font-medium text-ink">
      {children}
    </p>
  );
}

function WaitlistForm() {
  const [values, setValues] = useState({ email: '', source: '', message: '' });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!EMAIL_RE.test(values.email.trim())) next.email = f.errors.email;
    if (!values.source) next.source = f.errors.source;
    if (!values.message.trim()) next.message = f.errors.message;
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  };

  if (done) {
    return (
      <p role="status" className="text-step-0 font-medium leading-normal text-ink">
        {f.success}
      </p>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-space-m">
      <div>
        <label htmlFor="wl-email" className="mb-space-2xs block text-step--1 font-medium leading-heading text-ink">
          {f.email}
        </label>
        <input
          id="wl-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={set('email')}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? 'wl-email-error' : undefined}
          className={FIELD}
        />
        <FieldError id="wl-email-error">{errors.email}</FieldError>
      </div>

      <div>
        <label htmlFor="wl-source" className="mb-space-2xs block text-step--1 font-medium leading-heading text-ink">
          {f.source}
        </label>
        <div className="relative">
          <select
            id="wl-source"
            name="source"
            value={values.source}
            onChange={set('source')}
            aria-invalid={errors.source ? true : undefined}
            aria-describedby={errors.source ? 'wl-source-error' : undefined}
            className={`prod-select appearance-none pr-space-xl ${FIELD}`}
          >
            <option value="">{f.sourcePlaceholder}</option>
            {f.sources.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <PIcon
            name="chevron-down"
            className="pointer-events-none absolute right-space-xs top-1/2 size-4 -translate-y-1/2 text-secondary-foreground"
          />
        </div>
        <FieldError id="wl-source-error">{errors.source}</FieldError>
      </div>

      <div>
        <label htmlFor="wl-message" className="mb-space-2xs block text-step--1 font-medium leading-heading text-ink">
          {f.message}
        </label>
        <textarea
          id="wl-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={set('message')}
          placeholder={f.messagePlaceholder}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? 'wl-message-error' : undefined}
          className={FIELD}
        />
        <FieldError id="wl-message-error">{errors.message}</FieldError>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-space-s">
        <p className="text-step--1 leading-normal text-secondary-foreground">
          You can also email us at{' '}
          <a href={`mailto:${f.contact}`} className="font-medium text-ink">
            {f.contact}
          </a>
          .
        </p>
        <button type="submit" className="btn btn-sm btn-primary">
          <span>{f.submit}</span>
        </button>
      </div>
    </form>
  );
}

export default function WaitlistIntro({ data }) {
  return (
    <section aria-labelledby={data.id} className="bg-surface py-space-2xl-3xl">
      <div className="u-container">
        <div className="u-grid">
          <div className="section-content flex flex-col justify-between gap-space-xl p-0 md:col-span-5">
            <ProdHeader
              id={data.id}
              eyebrow={data.eyebrow}
              eyebrowClass="text-step--1"
              title={data.title}
              description={data.description}
              split={false}
            />
            <ul className="hidden flex-col divide-y divide-surface-tertiary md:flex">
              {data.items.map((it) => (
                <li key={it.icon} className="flex flex-row items-center gap-space-s py-space-m first:pt-0 last:pb-0">
                  <Tile name={it.icon} />
                  <p className="text-step--1 leading-normal text-secondary-foreground">{it.body}</p>
                </li>
              ))}
            </ul>
            <BadgeRow badges={badgeSets.waitlist} className="md:hidden" />
          </div>
          <div className="border-t border-surface-tertiary pt-space-xl md:col-span-6 md:col-start-7 md:border md:p-space-m-l">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
