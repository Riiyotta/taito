import { useEffect } from 'react';
import NotFound from './NotFound.jsx';
import { BLOG_CATEGORIES, CARDS_PER_PAGE } from '../content/blog.js';
import { BlogCardGrid } from '../components/blog/BlogCard.jsx';
import { ArchiveList, BlogListingShell, BlogPageHeader, CategoryNav } from '../components/blog/Listing.jsx';
import { copyFor, postsFor } from '../components/blog/utils.js';

/**
 * /blog/guides | /blog/case-studies | /blog/news | /blog/product.
 * Same header as /blog (eyebrow becomes a link back to /blog), pills with the
 * category active (no RSS button), first 18 posts as cards, rest in "Archive".
 */
export default function BlogCategory({ category }) {
  const valid = BLOG_CATEGORIES.includes(category);
  const copy = copyFor();

  useEffect(() => {
    if (valid) document.title = `${copy.categories[category].plural} – ${copy.docTitle}`;
  }, [valid, category, copy]);

  if (!valid) return <NotFound />;

  const posts = postsFor().filter((p) => p.category === category);

  return (
    <BlogListingShell labelledBy="blog-category-heading">
      <BlogPageHeader id="blog-category-heading" eyebrowHref="/blog" />
      <CategoryNav active={category} />
      <BlogCardGrid posts={posts.slice(0, CARDS_PER_PAGE)} eagerCount={3} />
      {posts.length > CARDS_PER_PAGE && <ArchiveList posts={posts.slice(CARDS_PER_PAGE)} />}
    </BlogListingShell>
  );
}
