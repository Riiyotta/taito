import '../styles/compliance-legal.css';
import { legalDocs } from '../content/compliance-legal.js';
import { useDocMeta } from '../components/compliance-legal/shared.jsx';
import Prose from '../components/compliance-legal/Prose.jsx';
import NotFound from './NotFound.jsx';

export default function Legal({ doc }) {
  const d = legalDocs[doc];
  useDocMeta(d?.docTitle);
  if (!d) return <NotFound />;
  return (
    <article className="py-space-2xl-3xl">
      <div className="u-container">
        <div className="u-grid">
          <Prose blocks={d.blocks} className="prose-legal col-span-12 @4xl:col-span-6 @4xl:col-start-4" />
        </div>
      </div>
    </article>
  );
}
