import { useEffect, useRef, useState } from 'react';
import { logos } from '../../content/mcp-tools.js';
import { Block } from '../compliance-legal/shared.jsx';
import { FeatureTile, Html, Logo, MIcon } from './shared.jsx';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const t = useRef();
  useEffect(() => () => clearTimeout(t.current), []);
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(t.current);
      t.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — leave the label unchanged */
    }
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-space-3xs rounded-md px-space-2xs py-space-3xs text-step--1 leading-normal text-muted-foreground transition-colors duration-150 hover:text-ink"
    >
      <MIcon name={copied ? 'check' : 'copy'} className="size-4" />
      <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

function Snippet({ title, text }) {
  return (
    <figure className="flex flex-col rounded-xl border border-surface-tertiary bg-surface-secondary px-space-xs pb-space-xs shadow-xs">
      <figcaption className="flex items-center justify-between gap-space-s py-space-2xs pl-space-3xs">
        <span className="text-step--1 font-medium leading-normal text-secondary-foreground">{title}</span>
        <CopyButton text={text} />
      </figcaption>
      <pre className="overflow-x-auto rounded-lg border border-surface-tertiary bg-surface p-space-s font-mono text-step--1 leading-relaxed text-ink shadow-xs">
        <code>{text}</code>
      </pre>
    </figure>
  );
}

/** "How it works" (use-case pages): header + feature list left (cols 1–5), prompt snippet right (cols 6–12) */
export default function HowItWorks({ how, id }) {
  return (
    <Block aria-labelledby={id}>
      <div className="grid grid-cols-12 gap-x-gutter gap-y-space-xl">
        <div className="col-span-12 flex flex-col justify-between gap-space-xl @4xl:col-span-5 @4xl:py-space-m-l @4xl:pr-space-m-l">
          <header className="flex flex-col gap-space-s">
            <p className="text-step-0 leading-normal text-secondary-foreground">{how.eyebrow}</p>
            <h2 id={id} className="text-step-3 leading-heading text-ink">
              {how.title}
            </h2>
            <Html as="p" html={how.description} className="text-step-0 leading-normal text-secondary-foreground" />
          </header>
          <ul className="flex flex-col divide-y divide-surface-tertiary">
            {how.features.map((f) => (
              <li key={f.title} className="flex flex-row gap-space-s py-space-m first:pt-0 last:pb-0">
                <FeatureTile icon={f.icon} />
                <div className="flex flex-col gap-space-2xs">
                  <h3 className="text-step-0 leading-tight text-ink">{f.title}</h3>
                  <p className="text-step--1 leading-normal text-secondary-foreground">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 flex min-w-0 flex-col gap-space-m @4xl:col-span-7 @4xl:pb-space-m-l @4xl:pl-space-m-l @4xl:pt-[calc(theme(spacing.space-m-l)+theme(fontSize.step-0)*1.5+theme(spacing.space-s))]">
          <Snippet title={how.snippetTitle} text={how.snippet} />
          <ul className="flex flex-wrap gap-space-2xs">
            {how.chips.map((c) => (
              <li
                key={c.label}
                className="inline-flex h-[calc(theme(spacing.space-2xs)*4)] items-center gap-space-2xs rounded-full border border-surface-tertiary bg-surface px-space-s text-step--1 leading-normal text-secondary-foreground"
              >
                <Logo id={c.logo} className="size-4" />
                {c.label}
              </li>
            ))}
          </ul>
          {how.integrations && (
            <div className="flex flex-col gap-space-2xs">
              <p className="text-step--2 leading-normal text-secondary-foreground">{how.integrations.text}</p>
              <ul className="flex gap-space-2xs">
                {how.integrations.logos.map((l) => (
                  <li key={l} className="flex size-12 items-center justify-center rounded-lg border border-surface-tertiary bg-white shadow-xs">
                    <Logo id={l} className="size-6" />
                    <span className="sr-only">{logos[l]?.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Block>
  );
}
