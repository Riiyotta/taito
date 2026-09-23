import { useState } from 'react';
import { CALCS, HOLIDAY_EXAMPLE, RESULT_LABELS } from './calcs.js';
import { Html } from './shared.jsx';

// Checkbox definitions without a `name` in content get one from their id.
const nameOf = (f) =>
  f.name || { 'sm-sysselsattningsgrad': 'sysselsattningsgrad', 'sm-non-qualifying-absence': 'nonQualifyingAbsence' }[f.id] || f.id;

function initialValues(fields) {
  const v = {};
  fields.forEach((f) => {
    const n = nameOf(f);
    if (f.tag === 'select') v[n] = (f.options.find((o) => o.selected) || f.options[0]).value;
    else if (f.type === 'checkbox') v[n] = false;
    else v[n] = f.value ?? '';
  });
  return v;
}

/** Which conditional field groups are visible for the current values */
function groupVisible(group, v) {
  switch (group) {
    case 'hp-regular-fields':
      return v.workerType !== 'irregular-or-part-year';
    case 'hp-irregular-fields':
      return v.workerType === 'irregular-or-part-year';
    case 'sm-salary-field':
      return v.model !== 'procentregeln';
    case 'sm-forfallen-lon-field':
      return v.model === 'procentregeln';
    default:
      return true;
  }
}

function Field({ f, value, onChange, extra }) {
  const n = nameOf(f);
  const hintId = f.hint ? f.hintId || `${f.id}-hint` : undefined;
  const hint = f.hint && <Html as="p" id={hintId} html={f.hint} className="text-step--2 leading-normal text-secondary-foreground" />;

  if (f.type === 'checkbox') {
    return (
      <div className="flex flex-col gap-space-2xs">
        <label htmlFor={f.id} className="flex cursor-pointer items-center gap-space-2xs text-step--1 font-medium leading-snug text-ink">
          <input id={f.id} name={n} type="checkbox" checked={value} onChange={(e) => onChange(n, e.target.checked)} className="mt-checkbox" />
          {f.label}
        </label>
        {hint}
      </div>
    );
  }

  const common = {
    id: f.id,
    name: n,
    value,
    onChange: (e) => onChange(n, e.target.value),
    'aria-describedby': hintId,
  };
  let control;
  if (f.tag === 'select') {
    control = (
      <select {...common} className="mt-input mt-select">
        {f.options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    );
  } else if (f.tag === 'textarea') {
    control = <textarea {...common} rows={f.rows} placeholder={f.placeholder} spellCheck={false} className="mt-input resize-y" />;
  } else {
    control = <input {...common} type={f.type} min={f.min} max={f.max} step={f.step} inputMode={f.type === 'number' ? 'decimal' : undefined} className="mt-input" />;
  }
  return (
    <div className="flex flex-col gap-space-2xs">
      <label htmlFor={f.id} className="text-step--1 font-medium leading-snug text-ink">
        {f.label}
      </label>
      {control}
      {hint}
      {extra}
    </div>
  );
}

function Result({ result, labels }) {
  if (!result) return null;
  if (result.error) {
    return (
      <p role="alert" className="mt-pill-warning rounded-lg px-space-s py-space-xs text-step--1 leading-normal">
        {result.error}
      </p>
    );
  }
  return (
    <section aria-live="polite" aria-label={labels.title} className="flex flex-col rounded-lg border border-surface-tertiary bg-surface">
      <h3 className="border-b border-surface-tertiary px-space-s py-space-xs text-step--1 font-medium leading-normal text-ink">{labels.title}</h3>
      <dl className="flex flex-col divide-y divide-surface-tertiary px-space-s">
        {result.rows.map((r) => (
          <div key={r.label} className="flex flex-col gap-space-3xs py-space-xs @lg:flex-row @lg:items-baseline @lg:justify-between @lg:gap-space-s">
            <dt className="text-step--1 leading-normal text-secondary-foreground">
              {r.label}
              {r.cite && <span className="block text-step--2 text-muted-foreground">{r.cite}</span>}
            </dt>
            <dd className={`text-step--1 leading-normal text-ink @lg:text-right ${r.strong ? 'text-step-0 font-medium' : ''}`}>{r.value}</dd>
          </div>
        ))}
      </dl>
      {result.notes?.length > 0 && (
        <div className="border-t border-surface-tertiary px-space-s py-space-xs">
          <p className="text-step--2 font-medium leading-normal text-ink">{labels.notes}</p>
          <ul className="mt-space-3xs flex list-disc flex-col gap-space-3xs pl-space-s text-step--2 leading-normal text-secondary-foreground">
            {result.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

/** Calculator block body: form card (cols 1–7) + explainer aside (cols 8–12) */
export default function Calculator({ slug, calc }) {
  const [values, setValues] = useState(() => initialValues(calc.fields));
  const [result, setResult] = useState(null);
  const compute = CALCS[slug];
  const labels = RESULT_LABELS[slug];

  const onChange = (n, val) => setValues((v) => ({ ...v, [n]: val }));
  const onSubmit = (e) => {
    e.preventDefault();
    setResult(compute(values));
  };
  const loadExample = () => {
    setValues((v) => ({ ...v, ...HOLIDAY_EXAMPLE }));
    setResult(null);
  };

  return (
    <div className="grid grid-cols-12 gap-gutter">
      <form
        id={calc.formId}
        noValidate
        onSubmit={onSubmit}
        className="@container col-span-12 flex flex-col gap-space-m rounded-2xl bg-surface-secondary p-gutter @4xl:col-span-7"
      >
        {calc.fields.map((f) => {
          if (f.group && !groupVisible(f.group, values)) return null;
          const extra =
            f.id === 'hp-reference-data'
              ? calc.extraButtons.map((b) => (
                  <button key={b.id} id={b.id} type="button" onClick={loadExample} className="btn btn-sm btn-outline self-start bg-surface">
                    <span>{b.label}</span>
                  </button>
                ))
              : null;
          return <Field key={f.id} f={f} value={values[nameOf(f)]} onChange={onChange} extra={extra} />;
        })}
        <button type="submit" className="btn btn-lg btn-primary w-full justify-start">
          <span>{calc.submit}</span>
        </button>
        <Result result={result} labels={labels} />
      </form>
      <aside className="col-span-12 @4xl:col-span-5">
        <Html as="div" html={calc.aside} className="flex h-full flex-col gap-space-s rounded-2xl bg-surface-secondary p-gutter" />
      </aside>
    </div>
  );
}
