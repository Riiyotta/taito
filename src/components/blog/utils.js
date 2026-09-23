import { blogPosts, blogAuthors } from '../../content/blog-posts.js';
import { blogCopy, BLOG_LANGS } from '../../content/blog.js';

export const isValidLang = (lang) => lang === undefined || BLOG_LANGS.includes(lang);

export const langKey = (lang) => lang || 'en';

export const copyFor = (lang) => blogCopy[langKey(lang)] || blogCopy.en;

export const blogBase = (lang) => (lang && lang !== 'en' ? `/${lang}/blog` : '/blog');

export const postHref = (post) => `${blogBase(post.lang)}/${post.slug}`;

/** Posts for one language, in live listing order (date desc). */
export const postsFor = (lang) => blogPosts.filter((p) => p.lang === langKey(lang));

export const findPost = (lang, slug) =>
  blogPosts.find((p) => p.lang === langKey(lang) && p.slug === slug);

export const authorOf = (post) => blogAuthors[post.author] || { name: post.author, href: '/company' };

const parseDate = (iso) => new Date(`${iso}T00:00:00Z`);

/** Card / article date: "September 15, 2026" (en), "17. elokuuta 2026" (fi), … */
export const formatLongDate = (iso, lang) =>
  parseDate(iso).toLocaleDateString(copyFor(lang).dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

/** Archive + timeline date: "Aug 04, 2026" */
export const formatShortDate = (iso) =>
  parseDate(iso).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });

export const isoDateTime = (iso) => `${iso}T00:00:00.000Z`;
