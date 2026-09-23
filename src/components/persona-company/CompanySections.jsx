import { Icon, Section } from '../ui.jsx';
import { FeatureGrid, PcHeader } from './Sections.jsx';
import '../../styles/persona-company.css';

/** Company "Our story" — centered block (a div, not a section) with investor logos */
export function CompanyStory({ eyebrow, title, paragraphs, backedBy, investors }) {
  return (
    <div className="flex flex-col items-center justify-center border-t border-surface-tertiary py-space-2xl-3xl md:min-h-[clamp(600px,100vh-1.5rem,75rem)]">
      <div className="flex w-full flex-col gap-space-l px-space-m-l md:text-center">
        <header className="grid grid-cols-12 gap-x-gutter gap-y-space-s">
          <p className="col-span-12 text-step-0 leading-normal text-secondary-foreground">{eyebrow}</p>
          <h2 className="col-span-full w-full text-step-3 leading-heading text-ink">{title}</h2>
        </header>
        <p className="mx-auto max-w-prose text-step-0 leading-normal text-secondary-foreground">
          {paragraphs.map((segs, pi) => (
            <span key={pi}>
              {pi > 0 && (
                <>
                  <br />
                  <br />
                </>
              )}
              {segs.map((s, i) =>
                typeof s === 'string' ? (
                  <span key={i}>{s}</span>
                ) : (
                  <em key={i} className="font-medium not-italic text-ink">
                    {s.em}
                  </em>
                ),
              )}
            </span>
          ))}
        </p>
        <hr className="mx-auto my-space-s-m h-0 w-full max-w-prose border-0 border-t border-surface-tertiary" />
        <div className="flex flex-col gap-space-l md:items-center">
          <h3 id="investors" className="sr-only">
            Backed by
          </h3>
          <p className="text-step-0 leading-heading text-secondary-foreground">{backedBy}</p>
          <ul aria-labelledby="investors" className="flex flex-wrap items-center gap-space-l-xl md:justify-center">
            {investors.map((inv) => (
              <li key={inv.name}>
                <a href={inv.href} aria-label={inv.name}>
                  <span
                    aria-hidden="true"
                    className={`icon block w-auto text-ink ${inv.className}`}
                    style={{ '--icon': `url(${inv.src})`, aspectRatio: inv.ratio }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Mission({ eyebrow, title, description, values }) {
  return (
    <Section labelledBy="mission">
      <PcHeader id="mission" eyebrow={eyebrow} title={title} description={description} />
      <FeatureGrid items={values} columns={4} />
    </Section>
  );
}

function Avatar({ children, className = '' }) {
  return (
    <div className={`mb-space-s size-[clamp(4rem,10cqi,6rem)] rounded-full bg-surface-secondary ${className}`}>{children}</div>
  );
}

function MemberText({ name, role, bio }) {
  return (
    <>
      <div className="flex flex-col gap-space-2xs">
        <h3 className="text-step-1 leading-heading text-ink">{name}</h3>
        <p className="text-step--1 leading-heading text-secondary-foreground">{role}</p>
      </div>
      <p className="text-step--1 leading-normal text-secondary-foreground">{bio}</p>
    </>
  );
}

export function Team({ eyebrow, title, description, members, opening }) {
  return (
    <Section labelledBy="team">
      <PcHeader id="team" eyebrow={eyebrow} title={title} description={description} horizontal />
      <hr className="col-span-12 m-0 mt-space-m h-0 border-0 border-t border-surface-tertiary" />
      <ul className="pc-team col-span-12 mt-space-m grid grid-cols-subgrid gap-y-space-xl-2xl">
        {members.map((m) => (
          <li key={m.id} id={m.id} className="flex scroll-mt-20 flex-col gap-space-s">
            <Avatar className="overflow-hidden">
              <img
                src={m.image}
                alt={`${m.name}, ${m.role}`}
                loading="lazy"
                className="h-full w-full origin-top scale-110 object-cover object-top"
              />
            </Avatar>
            <MemberText {...m} />
          </li>
        ))}
        <li className="flex flex-col gap-space-s">
          <Avatar className="flex items-center justify-center text-secondary-foreground">
            <Icon name="plus" className="size-6" />
          </Avatar>
          <MemberText {...opening} />
          <a href={opening.href} className="btn btn-sm btn-outline self-start">
            <span>
              {opening.cta}
              <Icon name="arrow-right" className="size-4" />
            </span>
          </a>
        </li>
      </ul>
    </Section>
  );
}
