import { Fragment } from 'react';

/** Minimal inline markup: **bold** and [label](href). */
export function Inline({ text }) {
  const out = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) out.push(<strong key={k++}>{m[1]}</strong>);
    else out.push(<a key={k++} href={m[3]}>{m[2]}</a>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.map((n, i) => <Fragment key={i}>{n}</Fragment>);
}

/** Case-study profile callout (live: `.not-prose` grid, 300px photo + facts card). */
function ProfileCallout({ block }) {
  return (
    <div className="not-prose my-10 grid items-stretch gap-6 sm:grid-cols-[300px_1fr]">
      <img
        src={block.image}
        alt={block.name}
        loading="lazy"
        decoding="async"
        className="h-full w-full rounded-xl object-cover object-top"
      />
      <div className="flex min-w-0 flex-col justify-center rounded-xl bg-surface-secondary px-6 py-6 ring-1 ring-surface-tertiary">
        <div className="text-lg font-medium leading-tight text-primary-foreground">{block.name}</div>
        <div className="mt-0.5 text-sm text-muted-foreground">{block.role}</div>
        <p className="mt-3 text-secondary-foreground">{block.summary}</p>
        <dl className="mt-5 divide-y divide-surface-tertiary text-sm">
          {block.facts.map(([dt, dd]) => (
            <div key={dt} className="py-2.5">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">{dt}</dt>
              <dd className="mt-0.5 font-medium text-secondary-foreground">{dd}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function Block({ block }) {
  switch (block.type) {
    case 'p':
      return (
        <p>
          <Inline text={block.text} />
        </p>
      );
    case 'h2':
      return <h2 id={block.id}>{block.text}</h2>;
    case 'h3':
      return <h3 id={block.id}>{block.text}</h3>;
    case 'ul':
    case 'ol': {
      const Tag = block.type;
      return (
        <Tag>
          {block.items.map((it, i) => (
            <li key={i}>
              <Inline text={it} />
            </li>
          ))}
        </Tag>
      );
    }
    case 'table':
      return (
        <div className="table-scroll" tabIndex={0}>
          <table>
            <thead>
              <tr>
                {block.head.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((c, j) => (
                    <td key={j}>
                      <Inline text={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'quote':
      return (
        <blockquote>
          <p>
            <Inline text={block.text} />
          </p>
          {block.cite && (
            <p>
              <strong>{block.cite}</strong>
            </p>
          )}
        </blockquote>
      );
    case 'image':
      return block.caption ? (
        <figure>
          <img src={block.src} alt={block.alt} loading="lazy" decoding="async" />
          <figcaption>{block.caption}</figcaption>
        </figure>
      ) : (
        <p>
          <img src={block.src} alt={block.alt} loading="lazy" decoding="async" />
        </p>
      );
    case 'profile':
      return <ProfileCallout block={block} />;
    case 'hr':
      return <hr />;
    default:
      return null;
  }
}

/** Renders body blocks inside the live `.prose.prose-lg` equivalent (`.blog-prose`). */
export default function ArticleBody({ blocks }) {
  return (
    <div className="blog-prose">
      {blocks
        .filter((b) => b.type !== 'faq')
        .map((b, i) => (
          <Block key={i} block={b} />
        ))}
    </div>
  );
}
