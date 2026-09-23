import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import { CARDS_PER_PAGE, INDEX_CARDS_BEFORE_TIMELINE, TIMELINE_COUNT } from '../content/blog.js';
import { BlogCardGrid } from '../components/blog/BlogCard.jsx';
import {
  ArchiveList,
  BlogListingShell,
  BlogPageHeader,
  CategoryNav,
  ProductTimeline,
} from '../components/blog/Listing.jsx';
import { copyFor, isValidLang, postsFor } from '../components/blog/utils.js';

/**
 * /blog and /:lang/blog.
 * English: header → category pills + RSS → 6 cards → product timeline (latest 4 product
 * posts) → 12 cards → "Archive" list of every remaining non-product post.
 * Localized: header → all posts as cards (no pills, no timeline).
 */
export default function BlogIndex() {
  const { lang } = useParams();
  const valid = isValidLang(lang);
  const copy = copyFor(lang);

  useEffect(() => {
    if (valid) document.title = copy.docTitle;
  }, [valid, copy]);

  if (!valid) return <NotFound />;

  const posts = postsFor(lang);

  if (lang) {
    return (
      <BlogListingShell labelledBy="blog-heading">
        <BlogPageHeader lang={lang} id="blog-heading" />
        <BlogCardGrid posts={posts.slice(0, CARDS_PER_PAGE)} eagerCount={3} />
        {posts.length > CARDS_PER_PAGE && <ArchiveList posts={posts.slice(CARDS_PER_PAGE)} lang={lang} />}
      </BlogListingShell>
    );
  }

  const product = posts.filter((p) => p.category === 'product').slice(0, TIMELINE_COUNT);
  const rest = posts.filter((p) => p.category !== 'product');
  const first = rest.slice(0, INDEX_CARDS_BEFORE_TIMELINE);
  const second = rest.slice(INDEX_CARDS_BEFORE_TIMELINE, CARDS_PER_PAGE);
  const archive = rest.slice(CARDS_PER_PAGE);

  return (
    <BlogListingShell labelledBy="blog-heading">
      <BlogPageHeader id="blog-heading" />
      <CategoryNav active="all" showRss />
      <BlogCardGrid posts={first} eagerCount={6} />
      <ProductTimeline posts={product} />
      <BlogCardGrid posts={second} />
      {archive.length > 0 && <ArchiveList posts={archive} />}
    </BlogListingShell>
  );
}
