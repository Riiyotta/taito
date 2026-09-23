import { performance as perf } from '../content.js';
import { FeatureList, Icon, SectionHeader } from './ui.jsx';

function ReviewCard() {
  const r = perf.review;
  return (
    <div
      className="card glass-border grid overflow-visible rounded-lg bg-surface shadow-xs"
      style={{ '--glass-border-radius': '0.5rem' }}
    >
      <img
        src={r.avatar}
        alt=""
        className="absolute left-1/2 top-[-24px] size-12 -translate-x-1/2 rounded-full object-cover ring-[3px] ring-surface md:top-[-40px] md:size-20"
      />
      <div className="px-space-m pb-space-s pt-space-l-xl text-step--1 font-medium text-ink">{r.title}</div>
      <hr className="border-surface-tertiary" />
      <div className="flex flex-col gap-space-2xs px-space-m py-space-s [mask-image:linear-gradient(#000_55%,transparent_100%)]">
        <p className="shimmer w-fit animate-shimmer text-step--2 font-medium">{r.label}</p>
        <p className="text-step--2 leading-normal text-ink">{r.body}</p>
      </div>
      <hr className="border-surface-tertiary" />
      <div className="flex items-center gap-space-s px-space-m py-space-s">
        <span className="text-step--2 text-ink">{r.sourcesLabel}</span>
        <ul className="flex items-center gap-1">
          {r.sources.map((s) => (
            <li key={s.name} className="flex size-5 items-center justify-center rounded-full bg-surface-secondary">
              <img src={s.src} alt={s.name} className="size-3" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ActivityCard() {
  return (
    <div
      className="card glass-border flex items-center gap-space-xs rounded-lg bg-surface p-space-s shadow-xs"
      style={{ '--glass-border-radius': '0.5rem' }}
    >
      <img src="/assets/svg/brand/taito-mark-performance-item.svg" alt="" className="size-8 flex-none rounded-md" />
      <div className="min-w-0 text-step--2 leading-normal">
        <p className="font-medium text-ink">{perf.activity.title}</p>
        <p className="text-secondary-foreground">{perf.activity.sub}</p>
      </div>
    </div>
  );
}

export default function Performance() {
  return (
    <section
      aria-labelledby="performance"
      className="border-t border-surface-tertiary bg-surface py-space-2xl-3xl"
    >
      <div className="u-container">
        <div className="u-grid">
          <figure className="section-media relative order-last flex aspect-square items-center justify-center overflow-hidden bg-surface-secondary @container md:order-none md:col-span-7 md:aspect-auto md:p-space-l">
            <img
              src="/assets/images/sections/performance-1536w.webp"
              alt=""
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="performance-stack relative">
              <ReviewCard />
              <div className="flex items-center justify-center gap-space-l text-muted-foreground">
                <Icon name="move-down" className="size-6" />
                <Icon name="move-up" className="size-6" />
              </div>
              <ActivityCard />
            </div>
          </figure>

          <div className="section-content flex flex-col justify-between gap-space-xl py-space-m-l md:col-span-5 md:pl-space-m-l">
            <SectionHeader
              id="performance"
              eyebrow={perf.eyebrow}
              title={perf.title}
              description={perf.description}
              split={false}
            />
            <FeatureList items={perf.features} />
          </div>
        </div>
      </div>
    </section>
  );
}
