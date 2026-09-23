// Placeholder article body generator.
// Article bodies are NOT copied from the live site. Every post renders a deterministic
// lorem-ipsum body (seeded by slug) that exercises the full live article template:
// intro, TL;DR list, h2/h3 sections, bold lead-in paragraphs, numbered list, table,
// blockquote with attribution, inline image, case-study profile callout, hr + closing CTA.
//
// Block schema (also accepted as `post.body` in blog-posts.js to drop in a real body):
//   { type: 'p', text }                      text may contain **bold** and [label](href)
//   { type: 'h2' | 'h3', text, id? }
//   { type: 'ul' | 'ol', items: [text] }
//   { type: 'table', head: [text], rows: [[text]] }
//   { type: 'quote', text, cite }
//   { type: 'image', src, alt, caption? }
//   { type: 'profile', image, name, role, summary, facts: [[label, value]] }
//   { type: 'hr' }
//   { type: 'faq', items: [{ q, a }] }       rendered below the prose as the FAQ section

const WORDS = (
  'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ' +
  'magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo ' +
  'consequat duis aute irure in reprehenderit voluptate velit esse cillum fugiat nulla pariatur excepteur sint ' +
  'occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum curabitur pretium ' +
  'tincidunt lacus nulla gravida orci a odio nullam varius turpis et commodo pharetra est eros bibendum elit ' +
  'nec luctus magna felis sollicitudin mauris integer in mauris eu nibh euismod gravida duis ac tellus et risus ' +
  'vulputate vehicula donec lobortis risus a elit etiam tempor ut ullamcorper ligula eu tempor congue eros est ' +
  'euismod turpis id tincidunt sapien risus a quam maecenas fermentum consequat mi donec fermentum pellentesque ' +
  'malesuada nulla a mi duis sapien sem aliquet nec commodo eget consequat quis neque aliquam faucibus'
).split(' ');

function rng(seed) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

export function makeLorem(seed) {
  const r = rng(seed);
  const int = (a, b) => a + Math.floor(r() * (b - a + 1));
  const words = (n) => Array.from({ length: n }, () => WORDS[Math.floor(r() * WORDS.length)]).join(' ');
  const sentence = (a = 8, b = 18) => `${cap(words(int(a, b)))}.`;
  const para = (a = 3, b = 5) => Array.from({ length: int(a, b) }, () => sentence()).join(' ');
  const title = (a = 3, b = 7) => cap(words(int(a, b)));
  return { int, words, sentence, para, title };
}

/** Build the placeholder body for a post. */
export function buildLoremBody(post) {
  const L = makeLorem(`${post.lang}/${post.slug}`);
  // Short live posts (news, product notes) get shorter paragraphs so page length stays comparable.
  if ((post.readingTime || 0) <= 4) {
    const { para } = L;
    L.para = () => para(1, 2);
  }
  const blocks = [];
  const h2 = (text) => blocks.push({ type: 'h2', text, id: slugify(text) });
  const h3 = (text) => blocks.push({ type: 'h3', text, id: slugify(text) });
  const p = (text) => blocks.push({ type: 'p', text });

  // Intro
  p(`${L.para(3, 4)} [${L.words(3)}](/blog) ${L.para(1, 2)}`);
  p(L.para(2, 4));

  // TL;DR
  h2('TL;DR');
  blocks.push({ type: 'ul', items: Array.from({ length: L.int(4, 5) }, () => L.sentence(9, 16)) });

  // Section 1 — bold lead-in paragraphs
  h2(`${L.title(4, 7)}?`);
  p(L.para(2, 3));
  for (let i = 0; i < 3; i++) p(`**${L.title(2, 4)}.** ${L.para(2, 3)}`);

  if (post.profileCard) {
    blocks.push({
      type: 'profile',
      image: post.cover,
      name: cap(L.words(2)).replace(/ (\w)/, (m, c) => ` ${c.toUpperCase()}`),
      role: `${cap(L.words(2))} · ${cap(L.words(1))}`,
      summary: L.sentence(10, 14),
      facts: [
        ['People ops', L.sentence(6, 10).replace(/\.$/, '')],
        ['Headcount', `${L.int(8, 120)} employees · ${L.words(2)}`],
        ['Location', cap(L.words(1))],
        ['Stage', cap(L.words(L.int(4, 8)))],
      ],
    });
  }

  // Section 2 — h3 subsections + numbered list
  h2(L.title(4, 8));
  p(L.para(2, 3));
  h3(L.title(3, 6));
  p(L.para(2, 4));
  blocks.push({ type: 'ol', items: Array.from({ length: L.int(3, 5) }, () => `**${L.title(2, 3)}.** ${L.sentence(8, 14)}`) });
  h3(L.title(3, 6));
  p(L.para(2, 3));

  // Section 3 — table
  h2(`${L.title(4, 7)}?`);
  p(L.para(1, 2));
  blocks.push({
    type: 'table',
    head: ['Priority', cap(L.words(1)), cap(L.words(3)), cap(L.words(2))],
    rows: Array.from({ length: 4 }, (_, i) => [String(i + 1), cap(L.words(2)), L.sentence(6, 10), L.sentence(5, 8)]),
  });
  p(`**${L.title(1, 2)}:** ${L.para(1, 2)}`);

  // Section 4 — blockquote
  h2(L.title(4, 7));
  p(L.para(2, 3));
  blocks.push({ type: 'quote', text: L.sentence(12, 22), cite: `${cap(L.words(1))} ${cap(L.words(1))}, ${cap(L.words(2))}` });
  p(L.para(2, 3));

  // Section 5 — inline image
  h2(L.title(4, 7));
  p(L.para(2, 3));
  blocks.push({ type: 'image', src: post.cover, alt: post.coverAlt || post.title });
  p(L.para(2, 4));
  h3(L.title(3, 5));
  blocks.push({ type: 'ul', items: Array.from({ length: 3 }, () => `**${L.title(1, 3)}.** ${L.sentence(8, 14)}`) });

  // Closing CTA (live posts end with an hr + a waitlist paragraph)
  blocks.push({ type: 'hr' });
  p(`${L.sentence(12, 18)} [${cap(L.words(5))}.](/waitlist)`);

  if (post.faqCount) {
    blocks.push({
      type: 'faq',
      items: Array.from({ length: post.faqCount }, () => ({ q: `${L.title(5, 9)}?`, a: L.para(3, 4) })),
    });
  }
  return blocks;
}
