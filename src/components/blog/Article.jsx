import { useEffect, useRef, useState } from 'react';
import { animate } from 'motion';
import { BlogCardGrid, BlogIcon } from './BlogCard.jsx';
import { Inline } from './ArticleBody.jsx';
import { authorOf, blogBase, copyFor, formatLongDate, isoDateTime } from './utils.js';

const EASE = [0.23, 1, 0.32, 1];

/** "Copy link" button — writes location.href, shows "Link copied" + check for 2s. */
function CopyLink({ copy }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      /* clipboard unavailable — still show feedback like the original */
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      type="button"
      onClick={onClick}
      data-copy-link
      data-copied={copied ? '' : undefined}
      aria-label={copy.copyLinkLabel}
      className="group inline-flex cursor-pointer items-center gap-1.5 text-ink transition-colors hover:text-ink-hover"
    >
      <BlogIcon name={copied ? 'check' : 'link-2'} className="h-4 w-4" />
      <span>{copied ? copy.linkCopied : copy.copyLink}</span>
    </button>
  );
}

export function ArticleHeader({ post }) {
  const copy = copyFor(post.lang);
  const author = authorOf(post);
  return (
    <header className="mb-space-l">
      <p className="mb-space-m text-step--1 font-medium text-primary-foreground">
        <a href={blogBase(post.lang)} className="transition-colors hover:text-muted-foreground">
          {copy.eyebrow}
        </a>
        <span className="mx-1">/</span>
        <span>{copy.categories[post.category]?.plural}</span>
      </p>
      <h1 className="text-step-4 leading-heading tracking-[-0.025em] text-ink">{post.title}</h1>
      <p className="mt-space-s text-step-0 text-secondary-foreground">{post.description}</p>
      <div className="mt-space-m flex items-center gap-2.5 text-step--1 text-secondary-foreground">
        <span>
          {copy.by ? `${copy.by} ` : ''}
          <a href={author.href} className="inline-link">
            {author.name}
          </a>
        </span>
        <span className="font-medium">&middot;</span>
        <time dateTime={isoDateTime(post.date)}>{formatLongDate(post.date, post.lang)}</time>
        <span className="font-medium">&middot;</span>
        <CopyLink copy={copy} />
      </div>
    </header>
  );
}

export function ArticleHero({ post }) {
  return (
    <div className="relative mb-12 aspect-video overflow-hidden rounded-xl bg-surface-secondary">
      <img
        src={post.cover}
        alt={post.coverAlt || post.title}
        width={post.coverWidth}
        height={post.coverHeight}
        fetchpriority="high"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

/** FAQ accordion item — same motion as the homepage FAQ (CLONE_SPEC §13). */
function FaqItem({ item }) {
  const detailsRef = useRef(null);
  const bodyRef = useRef(null);
  const iconRef = useRef(null);
  const busy = useRef(false);

  const onToggle = async (e) => {
    e.preventDefault();
    if (busy.current) return;
    busy.current = true;
    const details = detailsRef.current;
    const body = bodyRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!details.open) {
      details.open = true;
      if (reduce) iconRef.current.style.transform = 'rotate(45deg)';
      else {
        animate(iconRef.current, { rotate: [0, 45] }, { duration: 0.25, ease: EASE });
        await animate(body, { height: [0, body.scrollHeight], opacity: [0, 1] }, { duration: 0.25, ease: EASE });
        body.style.height = 'auto';
      }
    } else {
      if (reduce) iconRef.current.style.transform = 'rotate(0deg)';
      else {
        animate(iconRef.current, { rotate: 0 }, { duration: 0.2, ease: EASE });
        await animate(body, { height: [body.offsetHeight, 0], opacity: 0 }, { duration: 0.2, ease: EASE });
      }
      details.open = false;
      body.style.height = '';
      body.style.opacity = '';
    }
    busy.current = false;
  };

  return (
    <details ref={detailsRef} className="border-t border-surface-tertiary first:border-t-0">
      <summary
        onClick={onToggle}
        className="flex cursor-pointer list-none items-start justify-between gap-space-s py-space-s text-step-1 font-normal leading-normal text-primary-foreground"
      >
        <div>{item.q}</div>
        <span className="flex h-[1lh] shrink-0 items-center">
          <span ref={iconRef} className="inline-flex">
            <BlogIcon name="plus" shared className="size-6" />
          </span>
        </span>
      </summary>
      <div ref={bodyRef} className="overflow-hidden">
        <div className="mt-space-xs max-w-[38rem] pb-space-s text-step-0 leading-normal text-secondary-foreground">
          <Inline text={item.a} />
        </div>
      </div>
    </details>
  );
}

export function ArticleFaq({ items, lang }) {
  const copy = copyFor(lang);
  return (
    <section className="mt-space-2xl-3xl" aria-labelledby="blog-faq-heading">
      <h2 id="blog-faq-heading" className="mb-space-l text-step-3 leading-heading text-ink">
        {copy.faqTitle}
      </h2>
      <div data-faq-size="default" className="flex flex-col">
        {items.map((item, i) => (
          <FaqItem key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

/** "Keep reading" — curated related posts (from the live post), full-width card grid. */
export function KeepReading({ posts, lang }) {
  const copy = copyFor(lang);
  return (
    <section aria-labelledby="keep-reading-heading" className="border-t border-surface-tertiary bg-surface py-space-2xl-3xl">
      <div className="u-container">
        <div className="u-grid">
          <h2 id="keep-reading-heading" className="text-step-2 leading-normal text-primary-foreground">
            {copy.keepReading}
          </h2>
          <BlogCardGrid posts={posts} />
        </div>
      </div>
    </section>
  );
}
