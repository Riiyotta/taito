import { useParams } from 'react-router-dom';
import '../styles/compliance-legal.css';
import { calendars } from '../content/compliance-legal.js';
import { Block, ButtonLink, CIcon, PageHeader, SectionTitle, useDocMeta } from '../components/compliance-legal/shared.jsx';
import NotFound from './NotFound.jsx';

const SHORT = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sept: 9, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

/** Build the .ics client-side from the listed events (the original serves a static file). */
function downloadIcs(cal, filename) {
  const esc = (s) => String(s).replace(/[\\;,]/g, (m) => `\\${m}`).replace(/\n/g, '\\n');
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Taito.ai clone//Compliance calendar//EN', 'CALSCALE:GREGORIAN'];
  let n = 0;
  for (const m of cal.calendar.months) {
    const year = (m.label.match(/\d{4}/) || ['2026'])[0];
    for (const e of m.events) {
      const [d, mon] = e.date.split(' ');
      const date = `${year}${String(SHORT[mon] || 1).padStart(2, '0')}${String(d).padStart(2, '0')}`;
      lines.push(
        'BEGIN:VEVENT',
        `UID:${filename}-${(n += 1)}@taito.local`,
        `DTSTART;VALUE=DATE:${date}`,
        `SUMMARY:${esc(e.title)}`,
        `DESCRIPTION:${esc(`${e.citation || ''} ${e.source || ''}`.trim())}`,
        'END:VEVENT',
      );
    }
  }
  lines.push('END:VCALENDAR');
  const url = URL.createObjectURL(new Blob([lines.join('\r\n')], { type: 'text/calendar' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function EventItem({ e }) {
  return (
    <div className="cl-item relative flex flex-row items-start gap-space-s py-space-m" data-size="default">
      <div className="inline-flex min-w-space-l shrink-0 flex-col items-center justify-center rounded-md bg-surface-secondary px-space-2xs py-space-3xs text-primary-foreground">
        <span className="whitespace-nowrap text-step--2 font-medium leading-none text-ink">{e.date}</span>
      </div>
      <div className="flex min-w-0 flex-col gap-space-2xs">
        <div className="flex flex-wrap items-center gap-space-2xs">
          <h3 className="text-balance text-step-0 leading-normal text-ink">{e.title}</h3>
          {e.tags.map(([t, kind]) => (
            <span
              key={t}
              className={`inline-flex items-center whitespace-nowrap rounded-full px-space-2xs py-space-3xs text-step--2 leading-none text-secondary-foreground ${
                kind === 'outline' ? 'border border-surface-tertiary' : 'bg-surface-secondary'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <p className="max-w-[60ch] text-step--1 leading-normal text-secondary-foreground">{e.description}</p>
        {e.citation && (
          <p className="text-step--2 text-muted-foreground">
            {e.citation} —{' '}
            <a href={e.source} target="_blank" rel="noopener noreferrer" className="inline-link inline-flex items-center gap-space-3xs">
              primary source
              <CIcon shared name="external-link" className="size-3" />
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default function ComplianceCalendar() {
  const { country } = useParams();
  const cal = calendars[country];
  useDocMeta(cal?.docTitle);
  if (!cal) return <NotFound />;
  const [ics, back] = cal.actions;
  const icsName = ics[1].split('/').pop();
  // Month nav: month names, or full "Month YYYY" labels when the calendar spans two years (UK tax year)
  const years = new Set(cal.calendar.months.map((m) => m.label.split(' ').pop()));
  const navItems = cal.calendar.months.map((m) => [years.size > 1 ? m.label : m.label.split(' ')[0], m.id]);

  return (
    <>
      <Block first aria-labelledby="calendar-page-heading">
        <PageHeader id="calendar-page-heading" eyebrow={cal.eyebrow} title={cal.title}>
          <p className="text-step-0 leading-normal text-secondary-foreground">{cal.description}</p>
          <div className="mt-space-2xs flex flex-wrap items-center gap-space-s">
            <ButtonLink
              href={ics[1]}
              download={icsName}
              onClick={(ev) => {
                ev.preventDefault();
                downloadIcs(cal, icsName);
              }}
            >
              <CIcon name="download" className="size-4" />
              {ics[0]}
            </ButtonLink>
            <ButtonLink href={back[1]} variant="outline">
              {back[0]}
            </ButtonLink>
          </div>
          <div className="mt-space-s flex flex-col gap-space-3xs rounded-lg border border-surface-tertiary bg-surface-secondary p-space-s">
            <p className="text-step--2 font-medium text-ink">{cal.note.title}</p>
            <p className="text-step--2 text-secondary-foreground" dangerouslySetInnerHTML={{ __html: cal.note.html }} />
          </div>
        </PageHeader>
      </Block>

      <Block aria-labelledby="calendar-heading">
        <SectionTitle
          id="calendar-heading"
          eyebrow={cal.calendar.eyebrow}
          title={cal.calendar.title}
          description={cal.calendar.description}
        />
        <nav aria-label="Jump to month" className="col-span-12 -mt-space-xs mb-space-xs">
          <ul className="flex flex-wrap gap-space-m text-step--2">
            {navItems.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} className="inline-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-span-12 flex flex-col gap-space-l-xl">
          {cal.calendar.months.map((m) => (
            <div key={m.id} className="flex flex-col gap-space-xs">
              <h3 id={m.id} className="flex scroll-mt-space-l items-center gap-space-2xs text-step-1 leading-normal text-ink">
                <CIcon name="calendar-days" className="size-5 text-secondary-foreground" />
                {m.label}
              </h3>
              <div className="flex flex-col">
                {m.events.map((e, i) => (
                  <EventItem key={i} e={e} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block aria-labelledby="related-tools">
        <SectionTitle id="related-tools" eyebrow={cal.related.eyebrow} title={cal.related.title} />
        <div className="col-span-12 flex flex-col gap-space-s @4xl:col-span-8">
          {cal.related.paragraphs.map((p, i) => (
            <p key={i} className="text-step-0 leading-normal text-secondary-foreground">
              {p}
            </p>
          ))}
          <div className="mt-space-xs flex flex-wrap gap-space-s">
            {cal.related.links.map(([label, href]) => (
              <ButtonLink key={href} href={href} variant="outline">
                {label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </Block>
    </>
  );
}
