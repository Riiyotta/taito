import { useRef } from 'react';
import { animate } from 'motion';
import { faq } from '../content.js';
import { Icon, RichText, SectionHeader, Section } from './ui.jsx';

const EASE = [0.23, 1, 0.32, 1];

function FaqItem({ item }) {
  const detailsRef = useRef(null);
  const bodyRef = useRef(null);
  const iconRef = useRef(null);
  const busy = useRef(false);

  const onToggle = async (e) => {
    e.preventDefault();
    if (busy.current) return;
    busy.current = true;
    const details = detailsRef.current;
    const body = bodyRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!details.open) {
      details.open = true;
      if (!reduce) {
        animate(iconRef.current, { rotate: [0, 45] }, { duration: 0.25, ease: EASE });
        await animate(body, { height: [0, body.scrollHeight], opacity: [0, 1] }, { duration: 0.25, ease: EASE });
        body.style.height = 'auto';
      } else {
        iconRef.current.style.transform = 'rotate(45deg)';
      }
    } else {
      if (!reduce) {
        animate(iconRef.current, { rotate: 0 }, { duration: 0.2, ease: EASE });
        await animate(body, { height: [body.offsetHeight, 0], opacity: 0 }, { duration: 0.2, ease: EASE });
      } else {
        iconRef.current.style.transform = 'rotate(0deg)';
      }
      details.open = false;
      body.style.height = '';
      body.style.opacity = '';
    }
    busy.current = false;
  };

  return (
    <details ref={detailsRef} className="border-t border-surface-tertiary first:border-t-0">
      <summary
        onClick={onToggle}
        className="flex cursor-pointer list-none items-start justify-between gap-space-s py-space-s"
      >
        <span className="text-step-1 leading-normal text-ink">{item.q}</span>
        <span className="flex h-[1lh] flex-none items-center text-step-1 leading-normal text-ink">
          <span ref={iconRef} className="inline-flex">
            <Icon name="plus" className="size-6" />
          </span>
        </span>
      </summary>
      <div ref={bodyRef} className="overflow-hidden">
        <p className="faq-description mt-space-xs max-w-[38rem] pb-space-s text-step-0 leading-normal text-secondary-foreground">
          <RichText segments={item.a} />
        </p>
      </div>
    </details>
  );
}

export default function Faq() {
  return (
    <Section labelledBy="home-faq">
      <SectionHeader id="home-faq" eyebrow={faq.eyebrow} title={faq.title} />
      <div data-faq-size className="flex flex-col">
        {faq.items.map((item) => (
          <FaqItem key={item.q} item={item} />
        ))}
      </div>
    </Section>
  );
}
