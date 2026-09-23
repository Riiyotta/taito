import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import ArticleBody from '../components/blog/ArticleBody.jsx';
import { ArticleFaq, ArticleHeader, ArticleHero, KeepReading } from '../components/blog/Article.jsx';
import { buildLoremBody } from '../components/blog/lorem.js';
import { findPost, isValidLang } from '../components/blog/utils.js';
import '../styles/blog.css';

/**
 * /blog/:slug and /:lang/blog/:slug.
 * Centered 48rem column: breadcrumb, H1, description, author · date · copy link,
 * 16:9 cover, prose body, optional FAQ; then a full-width "Keep reading" band.
 * The live template has no TOC/sidebar and no sticky elements.
 * Body: `post.body` if present, otherwise a deterministic lorem-ipsum placeholder.
 */
export default function BlogPost() {
  const { lang, slug } = useParams();
  const post = isValidLang(lang) ? findPost(lang, slug) : undefined;

  const blocks = useMemo(() => (post ? post.body || buildLoremBody(post) : []), [post]);
  const faq = blocks.find((b) => b.type === 'faq');
  const related = useMemo(
    () => (post?.related || []).map((s) => findPost(post.lang, s)).filter(Boolean),
    [post],
  );

  useEffect(() => {
    if (post) document.title = post.title;
  }, [post]);

  if (!post) return <NotFound />;

  return (
    <>
      <article className="py-16 sm:py-24" lang={post.lang === 'no' ? 'nb' : post.lang}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ArticleHeader post={post} />
          <ArticleHero post={post} />
          <ArticleBody blocks={blocks} />
          {faq && <ArticleFaq items={faq.items} lang={post.lang} />}
        </div>
      </article>
      {related.length > 0 && <KeepReading posts={related} lang={post.lang} />}
    </>
  );
}
