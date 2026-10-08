// Generates review documents from the dictionaries (no git, no network):
//   docs/translation-review.md — every string, EN | ES | RO side by side (native-speaker review)
//   docs/fr-florin-review.md   — doctrinal / liturgical copy, RO | EN (priest's review)
// Run: npm run review:docs   (Node 22.6+; uses built-in TypeScript type stripping)

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('..', import.meta.url);
const { en } = await import(new URL('src/i18n/en.ts', root));
const { es } = await import(new URL('src/i18n/es.ts', root));
const { ro } = await import(new URL('src/i18n/ro.ts', root));

const esc = (s) => String(s).replace(/\|/g, '\\|').replace(/\n/g, '<br>');

/** Flatten nested dictionary into [path, value] pairs (arrays indexed). */
function flatten(obj, prefix = '') {
  return Object.entries(obj).flatMap(([k, v]) => {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object') return flatten(v, path);
    return [[path, v]];
  });
}
const get = (obj, path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);

// ---- 1. Translation review ---------------------------------------------------
// `.id` fields are internal keys (e.g. FAQ anchors), not visible text
const rows = flatten(en).filter(([path]) => !path.endsWith('.id'));
const sections = new Map();
for (const [path, value] of rows) {
  const top = path.split('.')[0];
  if (!sections.has(top)) sections.set(top, []);
  sections.get(top).push([path, value]);
}

let t = `# Translation review — Spanish & Romanian\n\n`;
t += `For: native Spanish and Romanian speakers. Generated from \`src/i18n/{en,es,ro}.ts\` by \`npm run review:docs\` — do not edit by hand; send corrections and we update the dictionary files.\n\n`;
t += `All Spanish (ES) and Romanian (RO) text on the website is a **draft that needs native-speaker review**. Please check meaning, grammar, tone (formal register: *usted* / *dumneavoastră*), and Orthodox terminology. Rows where ES or RO is identical to English are marked ⚠︎ — usually intentional (addresses, proper names), but worth a glance.\n\n`;
t += `Total strings: ${rows.length}.\n\n`;
for (const [section, items] of sections) {
  t += `## ${section}\n\n| Key | English | Español | Română |\n|---|---|---|---|\n`;
  for (const [path, value] of items) {
    const e = get(es, path), r = get(ro, path);
    const flag = (x) => (x === value && /[a-z]{4,}/i.test(String(value)) ? ' ⚠︎' : '');
    t += `| \`${path.slice(section.length + 1) || section}\` | ${esc(value)} | ${esc(e)}${flag(e)} | ${esc(r)}${flag(r)} |\n`;
  }
  t += `\n`;
}

// ---- 2. Fr. Florin review ----------------------------------------------------
const doctrinal = [
  ['worshipPage.liturgy', 'Worship → Divine Liturgy'],
  ['worshipPage.sacraments', 'Worship → Sacraments'],
  ['worshipPage.confession', 'Worship → Confession'],
  ['whatToExpect.welcome', 'What to Expect → welcome'],
  ['whatToExpect.faq', 'What to Expect → FAQ (★ Holy Communion answer needs approval)'],
  ['prayerPage.formIntro', 'Prayer → introduction'],
  ['prayerPage.form.namesIntro', 'Prayer → pomelnic explanation'],
  ['prayerPage.candle', 'Prayer → Light a Candle'],
  ['prayerPage.healing', 'Prayer → Prayer & Healing / Sfântul Maslu'],
  ['learnPage.beliefs', 'Learn → What We Believe'],
  ['learnPage.creed', 'Learn → The Creed (check against the official texts)'],
  ['learnPage.beliefsClosing', 'Learn → What We Believe (closing)'],
  ['learnPage.orthodoxFaith', 'Learn → Orthodox Faith'],
  ['learnPage.catechism', 'Learn → Catechism'],
  ['tradition', 'Our Parish → Romanian Orthodox Tradition'],
];
const asParas = (v) =>
  Array.isArray(v)
    ? v.map((x) => (typeof x === 'object' ? `**${x.q}**\n\n${x.a.join('\n\n')}` : x)).join('\n\n')
    : String(v);

let f = `# Textul doctrinar și liturgic — pentru aprobarea Părintelui Florin\n`;
f += `# Doctrinal and liturgical text — for Fr. Florin's approval\n\n`;
f += `Generated from the website dictionaries by \`npm run review:docs\`. Every passage below is a **general draft** written for the new website; none of it is published as parish-approved until Fr. Florin confirms it. Romanian first, English below each section. Please mark corrections directly in this document or reply by email.\n\n`;
f += `Textele de mai jos sunt **ciorne generale** pentru noul site. Vă rugăm să le verificați (în special răspunsul despre Sfânta Împărtășanie) și să ne trimiteți corecturile.\n\n`;
for (const [path, label] of doctrinal) {
  f += `---\n\n## ${label}\n\n### Română\n\n${asParas(get(ro, path))}\n\n### English\n\n${asParas(get(en, path))}\n\n`;
}

const docs = fileURLToPath(new URL('docs/', root));
mkdirSync(docs, { recursive: true });
writeFileSync(new URL('docs/translation-review.md', root), t);
writeFileSync(new URL('docs/fr-florin-review.md', root), f);
console.log(`Wrote docs/translation-review.md (${rows.length} strings) and docs/fr-florin-review.md (${doctrinal.length} sections).`);
