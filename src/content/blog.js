// UI copy for the blog pages (verbatim from the live site, per locale).
// Post metadata lives in ./blog-posts.js.

export const BLOG_LANGS = ['et', 'fi', 'nl', 'no', 'sv'];

// Category slugs in the order the filter pills show them (after "All").
export const BLOG_CATEGORIES = ['guides', 'case-studies', 'news', 'product'];

// Number of posts rendered as cards before the rest drop into the "Archive" list.
export const CARDS_PER_PAGE = 18;
// On the English index the card run is split by the product timeline after this many cards.
export const INDEX_CARDS_BEFORE_TIMELINE = 6;
export const TIMELINE_COUNT = 4;

const en = {
  htmlLang: 'en',
  dateLocale: 'en-US',
  eyebrow: 'Blog',
  title: 'Insights on people ops',
  description: 'Practical thinking on people operations, for the people doing the work.',
  docTitle: 'Blog | Taito.ai',
  all: 'All',
  categoriesNavLabel: 'Blog categories',
  rssLabel: 'Subscribe to the Taito.ai blog RSS feed',
  // plural = pill + breadcrumb label, singular = card meta label
  categories: {
    guides: { plural: 'Guides', singular: 'Guide' },
    'case-studies': { plural: 'Case studies', singular: 'Case study' },
    news: { plural: 'News', singular: 'News' },
    product: { plural: 'Product', singular: 'Product' },
  },
  timelineTitle: 'Latest product announcements',
  viewAll: 'View all',
  viewAllLabel: 'View all product announcements',
  archive: 'Archive',
  keepReading: 'Keep reading',
  faqTitle: 'Frequently asked questions',
  by: 'by',
  copyLink: 'Copy link',
  linkCopied: 'Link copied',
  copyLinkLabel: 'Copy link to this post',
};

const guideOnly = (plural, singular) => ({
  guides: { plural, singular },
  'case-studies': en.categories['case-studies'],
  news: en.categories.news,
  product: en.categories.product,
});

export const blogCopy = {
  en,
  et: {
    ...en,
    htmlLang: 'et',
    dateLocale: 'et-EE',
    eyebrow: 'Blogi',
    title: 'Tööelu argipäev, selges eesti keeles',
    description: 'Praktilised juhendid tööõigusest ja personalitööst — neile, kes seda tööd päriselt teevad.',
    docTitle: 'Blogi | Taito.ai',
    categories: guideOnly('Juhendid', 'Juhend'),
    by: '',
    copyLink: 'Kopeeri link',
    linkCopied: 'Link kopeeritud',
    copyLinkLabel: 'Kopeeri selle artikli link',
  },
  fi: {
    ...en,
    htmlLang: 'fi',
    dateLocale: 'fi-FI',
    eyebrow: 'Blogi',
    title: 'Työsuhteen arki, selkokielellä',
    description:
      'Käytännönläheisiä oppaita työlainsäädännöstä ja henkilöstöhallinnosta – niille, jotka tekevät työn.',
    docTitle: 'Blogi | Taito.ai',
    categories: guideOnly('Oppaat', 'Opas'),
    by: '',
    copyLink: 'Kopioi linkki',
    linkCopied: 'Linkki kopioitu',
    copyLinkLabel: 'Kopioi linkki tähän artikkeliin',
  },
  nl: {
    ...en,
    htmlLang: 'nl',
    dateLocale: 'nl-NL',
    eyebrow: 'Blog',
    title: 'Het werk achter het werk, in gewoon Nederlands',
    description: 'Praktische gidsen over arbeidsrecht en personeelsadministratie — voor wie het werk doet.',
    docTitle: 'Blog | Taito.ai',
    categories: guideOnly('Gidsen', 'Gids'),
    by: '',
    copyLink: 'Kopieer link',
    linkCopied: 'Link gekopieerd',
    copyLinkLabel: 'Kopieer de link naar dit artikel',
  },
  no: {
    ...en,
    htmlLang: 'nb',
    dateLocale: 'nb-NO',
    eyebrow: 'Blogg',
    title: 'Arbeidshverdagen, på ren norsk',
    description: 'Praktiske guider til arbeidsrett og personaladministrasjon — for dem som gjør jobben.',
    docTitle: 'Blogg | Taito.ai',
    categories: guideOnly('Guider', 'Guide'),
    by: '',
    copyLink: 'Kopier lenke',
    linkCopied: 'Lenke kopiert',
    copyLinkLabel: 'Kopier lenke til denne artikkelen',
  },
  sv: {
    ...en,
    htmlLang: 'sv',
    dateLocale: 'sv-SE',
    eyebrow: 'Blogg',
    title: 'Anställningens vardag, i klartext',
    description:
      'Praktiska guider om svensk arbetsrätt och personaladministration — för dig som sköter det på riktigt.',
    docTitle: 'Blogg | Taito.ai',
    categories: guideOnly('Guider', 'Guide'),
    by: '',
    copyLink: 'Kopiera länk',
    linkCopied: 'Länk kopierad',
    copyLinkLabel: 'Kopiera länk till den här artikeln',
  },
};
