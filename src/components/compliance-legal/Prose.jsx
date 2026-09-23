import { Segs } from './shared.jsx';

/** Renders generated prose blocks: [tag, ...] (see src/content/compliance-legal.js) */
export default function Prose({ blocks, className }) {
  return (
    <div className={className}>
      {blocks.map((b, i) => {
        const [tag] = b;
        if (tag === 'h1' || tag === 'h2' || tag === 'h3' || tag === 'h4') {
          const H = tag;
          return (
            <H key={i} id={b[2] || undefined}>
              {b[1]}
            </H>
          );
        }
        if (tag === 'p')
          return (
            <p key={i}>
              <Segs segs={b[1]} />
            </p>
          );
        if (tag === 'ul' || tag === 'ol') {
          const L = tag;
          return (
            <L key={i}>
              {b[1].map((it, j) => (
                <li key={j}>
                  <Segs segs={it} />
                </li>
              ))}
            </L>
          );
        }
        if (tag === 'hr') return <hr key={i} />;
        if (tag === 'table')
          return (
            <div key={i} className="table-scroll">
              <table>
                <thead>
                  <tr>
                    {b[1].map((h, j) => (
                      <th key={j}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b[2].map((row, r) => (
                    <tr key={r}>
                      {row.map((c, j) => (
                        <td key={j}>
                          <Segs segs={c} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        return null;
      })}
    </div>
  );
}
