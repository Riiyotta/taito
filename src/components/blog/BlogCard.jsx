import { Fragment } from 'react';
import { copyFor, formatLongDate, isoDateTime, postHref } from './utils.js';

/** Lucide icon as a currentColor mask. Blog-only icons live in /assets/pages/blog/icons. */
export function BlogIcon({ name, className = 'size-4', shared = false }) {
  const src = shared ? `/assets/svg/icons/lucide-${name}.svg` : `/assets/pages/blog/icons/lucide-${name}.svg`;
  return <span aria-hidden="true" className={`icon ${className}`} style={{ '--icon': `url(${src})` }} />;
}

/**
 * Blog card (live: article.blog-card). Whole card is clickable via an absolutely
 * positioned overlay link; hovering scales the 16:9 cover to 1.02 over 300ms `ease`.
 */
export function BlogCard({ post, eager = false }) {
  const copy = copyFor(post.lang);
  const label = copy.categories[post.category]?.singular;
  return (
    <article className="blog-card group/blog-card relative flex flex-col gap-space-s">
      <div className="relative aspect-video overflow-hidden rounded-md bg-surface-tertiary">
        <img
          src={post.cover}
          alt={post.coverAlt || post.title}
          width={post.coverWidth}
          height={post.coverHeight}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 ease-[ease] group-hover/blog-card:scale-[1.02]"
        />
      </div>
      <div className="flex flex-col gap-space-2xs">
        <h2 className="line-clamp-2 text-step-0 leading-heading text-ink">{post.title}</h2>
        <p className="line-clamp-3 text-step--1 leading-normal text-secondary-foreground">{post.description}</p>
      </div>
      <p className="blog-card-meta mt-auto text-step--2 leading-normal text-muted-foreground">
        {label} · <time dateTime={isoDateTime(post.date)}>{formatLongDate(post.date, post.lang)}</time>
      </p>
      <a
        href={postHref(post)}
        aria-label={post.title}
        className="absolute inset-0 z-10 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <span className="sr-only">{post.title}</span>
      </a>
    </article>
  );
}

/**
 * Card grid: 1 col → @md 2 cols → @xl 3 cols with 1px vertical separators
 * (`grid-template-columns: 1fr auto 1fr auto 1fr`). Separators sit after the
 * 1st and 2nd card of every row of three and are hidden below @xl.
 */
export function BlogCardGrid({ posts, eagerCount = 0 }) {
  return (
    <div className="blog-card-grid grid grid-cols-1 gap-x-gutter gap-y-space-l-xl @md:grid-cols-2 @xl:grid-cols-[1fr_auto_1fr_auto_1fr]">
      {posts.map((post, i) => (
        <Fragment key={`${post.lang}/${post.slug}`}>
          <BlogCard post={post} eager={i < eagerCount} />
          {i % 3 !== 2 && i !== posts.length - 1 && (
            <div role="presentation" className="blog-separator-vertical hidden w-px self-stretch bg-surface-tertiary @xl:block" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
