import { BLOG_CATEGORIES } from '../../content/blog.js';
import { BlogIcon } from './BlogCard.jsx';
import { authorOf, blogBase, copyFor, formatShortDate, isoDateTime, postHref } from './utils.js';

/**
 * Page header (live: header.page-header, its own inline-size container).
 * Stacked; at container ≥56rem the title spans cols 1–6 and the description
 * sits in cols 9–12 of the same row, vertically centred.
 */
export function BlogPageHeader({ lang, id, eyebrowHref }) {
  const copy = copyFor(lang);
  const eyebrowCls = 'page-header-eyebrow text-step--1 leading-heading font-normal text-secondary-foreground @4xl:col-span-12 @4xl:row-start-1';
  return (
    <header className="page-header @container grid grid-cols-12 gap-x-gutter gap-y-space-m">
      {eyebrowHref ? (
        <a href={eyebrowHref} className={`col-span-12 inline-flex items-center gap-space-3xs hover:text-ink ${eyebrowCls}`}>
          {copy.eyebrow}
        </a>
      ) : (
        <p className={`col-span-12 ${eyebrowCls}`}>{copy.eyebrow}</p>
      )}
      <h1 id={id} className="page-header-title col-span-12 text-balance text-step-5 leading-heading text-ink @4xl:col-span-6 @4xl:row-start-2">
        {copy.title}
      </h1>
      <div className="col-span-12 flex flex-col gap-space-m @4xl:row-start-2 @4xl:self-center @4xl:[grid-column:9/-1]">
        <p className="page-header-description text-step-0 leading-normal text-secondary-foreground">{copy.description}</p>
      </div>
    </header>
  );
}

/** Category filter pills ("All" + 4 categories) + RSS icon button (index only). */
export function CategoryNav({ active, showRss = false }) {
  const copy = copyFor();
  const items = [{ key: 'all', href: '/blog', label: copy.all }].concat(
    BLOG_CATEGORIES.map((c) => ({ key: c, href: `/blog/${c}`, label: copy.categories[c].plural })),
  );
  return (
    <nav aria-label={copy.categoriesNavLabel} className="flex flex-wrap items-center gap-space-2xs">
      {items.map((it) => {
        const isActive = it.key === active;
        return (
          <a
            key={it.key}
            href={it.href}
            aria-current={isActive ? 'page' : undefined}
            className={`inline-flex items-center rounded-full px-space-xs py-space-3xs text-step--1 font-medium transition-colors duration-150 ${
              isActive ? 'bg-ink text-surface' : 'text-secondary-foreground hover:text-primary-foreground'
            }`}
          >
            {it.label}
          </a>
        );
      })}
      {showRss && (
        <a
          href="/blog/rss.xml"
          aria-label={copy.rssLabel}
          className="btn btn-ghost ml-2 size-8 rounded-full"
        >
          <span>
            <BlogIcon name="rss" />
          </span>
        </a>
      )}
    </nav>
  );
}

/**
 * "Latest product announcements" timeline between the two card runs on /blog.
 * 2 columns (items 3–4 hidden) → 4 columns at container ≥56rem. Each item hangs
 * off the ol's top border by a 28px dot (20px ring, 6px core).
 */
export function ProductTimeline({ posts }) {
  const copy = copyFor();
  return (
    <section aria-labelledby="product-announcements-heading" className="my-space-m flex flex-col gap-space-l">
      <h2 id="product-announcements-heading" className="text-step-2 leading-heading text-ink">
        {copy.timelineTitle}
      </h2>
      <ol className="mt-space-s grid grid-cols-2 gap-x-gutter border-t border-surface-tertiary @4xl:grid-cols-4">
        {posts.map((post, i) => (
          <li key={post.slug} className={`relative pt-space-xl ${i >= 2 ? 'hidden @4xl:block' : ''}`}>
            <span
              aria-hidden="true"
              className="absolute left-[0.1875rem] top-0 flex size-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface"
            >
              <span className="flex size-5 items-center justify-center rounded-full bg-surface-tertiary">
                <span className="size-1.5 rounded-full bg-muted-foreground" />
              </span>
            </span>
            <a
              href={postHref(post)}
              className="flex h-full flex-col gap-space-s rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              <div className="flex flex-col gap-space-2xs">
                <h3 className="line-clamp-2 text-step--1 font-medium leading-heading text-ink">{post.title}</h3>
                <p className="line-clamp-2 text-step--1 leading-normal text-secondary-foreground">{post.description}</p>
              </div>
              <time dateTime={isoDateTime(post.date)} className="mt-auto text-step--2 leading-normal text-muted-foreground">
                {formatShortDate(post.date)}
              </time>
            </a>
          </li>
        ))}
      </ol>
      <a
        href="/blog/product"
        aria-label={copy.viewAllLabel}
        className="btn btn-ghost btn-sm -ml-space-xs self-start"
      >
        <span>
          {copy.viewAll}
          <BlogIcon name="arrow-right" shared />
        </span>
      </a>
    </section>
  );
}

/** "Archive" list: every post past the first card run, one row each. */
export function ArchiveList({ posts, lang }) {
  const copy = copyFor(lang);
  return (
    <div className="flex flex-col gap-space-l">
      <header className="grid grid-cols-12 gap-x-gutter gap-y-space-s">
        <h2 className="section-header-title col-span-12 text-step-3 leading-heading text-ink @4xl:col-span-5">{copy.archive}</h2>
      </header>
      <ul className="flex flex-col">
        {posts.map((post) => (
          <li key={post.slug} className="border-t border-surface-tertiary last:border-b">
            <a
              href={postHref(post)}
              className="group/archive-row flex flex-col gap-space-3xs py-space-s @md:flex-row @md:items-baseline @md:justify-between @md:gap-space-m"
            >
              <span className="text-step-0 leading-snug text-ink">{post.title}</span>
              <span className="shrink-0 text-step--1 leading-normal text-muted-foreground">
                {authorOf(post).name} · <time dateTime={isoDateTime(post.date)}>{formatShortDate(post.date)}</time>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Shared shell for the listing pages: section > u-container > u-grid (no top border). */
export function BlogListingShell({ labelledBy, children }) {
  return (
    <section aria-labelledby={labelledBy} className="bg-surface py-space-2xl-3xl">
      <div className="u-container">
        <div className="u-grid">{children}</div>
      </div>
    </section>
  );
}

export { blogBase };
