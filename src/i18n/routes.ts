// URL structure for every page in every language, plus the main menu.
// English lives at the root, Spanish under /es/, Romanian under /ro/.
// Slugs are localized; section anchors (#liturgy, #clergy, …) are shared.

export const locales = ['en', 'es', 'ro'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const ogLocale: Record<Locale, string> = { en: 'en_US', es: 'es_US', ro: 'ro_RO' };

export type PageKey =
  | 'home'
  | 'ourParish'
  | 'worship'
  | 'whatToExpect'
  | 'prayer'
  | 'community'
  | 'gallery'
  | 'learn'
  | 'newsEvents'
  | 'visit'
  | 'donate';

interface PageDef {
  slug: Record<Locale, string>;
  /** Parent page for breadcrumbs; interior pages without one sit directly under Home. */
  parent?: PageKey;
}

export const pages: Record<PageKey, PageDef> = {
  home:         { slug: { en: '',                        es: '',                    ro: '' } },
  ourParish:    { slug: { en: 'our-parish',              es: 'nuestra-parroquia',   ro: 'parohia-noastra' } },
  worship:      { slug: { en: 'worship',                 es: 'culto',               ro: 'slujbe' } },
  whatToExpect: { slug: { en: 'worship/what-to-expect',  es: 'culto/que-esperar',   ro: 'slujbe/ce-sa-asteptati' }, parent: 'worship' },
  prayer:       { slug: { en: 'prayer',                  es: 'oracion',             ro: 'rugaciune' } },
  community:    { slug: { en: 'community',               es: 'comunidad',           ro: 'comunitate' } },
  gallery:      { slug: { en: 'community/gallery',       es: 'comunidad/galeria',   ro: 'comunitate/galerie' }, parent: 'community' },
  learn:        { slug: { en: 'learn',                   es: 'aprender',            ro: 'invatatura' } },
  newsEvents:   { slug: { en: 'news-events',             es: 'noticias-eventos',    ro: 'stiri-evenimente' } },
  visit:        { slug: { en: 'visit',                   es: 'visitenos',           ro: 'vizitati-ne' } },
  donate:       { slug: { en: 'donate',                  es: 'donar',               ro: 'donati' } },
};

export const pageKeys = Object.keys(pages) as PageKey[];

/** Route param for Astro's [...path] — undefined for the English home page. */
export function routeParam(page: PageKey, lang: Locale): string | undefined {
  const parts = [lang === defaultLocale ? '' : lang, pages[page].slug[lang]].filter(Boolean);
  return parts.length ? parts.join('/') : undefined;
}

/** Site-relative URL (with BASE_URL and trailing slash) for a page, optionally with an anchor. */
export function pageUrl(page: PageKey, lang: Locale, hash?: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const param = routeParam(page, lang);
  return `${base}/${param ? `${param}/` : ''}${hash ? `#${hash}` : ''}`;
}

/** Breadcrumb trail from Home to the given page (inclusive). */
export function trail(page: PageKey): PageKey[] {
  if (page === 'home') return ['home'];
  const chain: PageKey[] = [];
  let cur: PageKey | undefined = page;
  while (cur) {
    chain.unshift(cur);
    cur = pages[cur].parent;
  }
  return ['home', ...chain];
}

// ---------------------------------------------------------------------------
// Main menu — labels come from the dictionary (`menu.<key>`)
// ---------------------------------------------------------------------------

export interface MenuLink {
  key: string;
  page: PageKey;
  hash?: string;
}

export interface MenuItem extends MenuLink {
  children?: MenuLink[];
}

export const menu: MenuItem[] = [
  { key: 'home', page: 'home' },
  {
    key: 'ourParish', page: 'ourParish',
    children: [
      { key: 'about',     page: 'ourParish', hash: 'about' },
      { key: 'clergy',    page: 'ourParish', hash: 'clergy' },
      { key: 'history',   page: 'ourParish', hash: 'history' },
      { key: 'tradition', page: 'ourParish', hash: 'tradition' },
    ],
  },
  {
    key: 'worship', page: 'worship',
    children: [
      { key: 'liturgy',      page: 'worship', hash: 'liturgy' },
      { key: 'schedule',     page: 'worship', hash: 'schedule' },
      { key: 'sacraments',   page: 'worship', hash: 'sacraments' },
      { key: 'confession',   page: 'worship', hash: 'confession' },
      { key: 'whatToExpect', page: 'whatToExpect' },
    ],
  },
  {
    key: 'prayer', page: 'prayer',
    children: [
      { key: 'request', page: 'prayer', hash: 'request' },
      { key: 'candle',  page: 'prayer', hash: 'candle' },
      { key: 'names',   page: 'prayer', hash: 'names' },
      { key: 'healing', page: 'prayer', hash: 'healing' },
    ],
  },
  {
    key: 'community', page: 'community',
    children: [
      { key: 'parishLife', page: 'community', hash: 'parish-life' },
      { key: 'ministries', page: 'community', hash: 'ministries' },
      { key: 'youth',      page: 'community', hash: 'youth' },
      { key: 'events',     page: 'newsEvents', hash: 'calendar' },
      { key: 'gallery',    page: 'gallery' },
    ],
  },
  {
    key: 'learn', page: 'learn',
    children: [
      { key: 'beliefs',       page: 'learn', hash: 'beliefs' },
      { key: 'orthodoxFaith', page: 'learn', hash: 'orthodox-faith' },
      { key: 'sermons',       page: 'learn', hash: 'sermons' },
      { key: 'catechism',     page: 'learn', hash: 'catechism' },
    ],
  },
  {
    key: 'newsEvents', page: 'newsEvents',
    children: [
      { key: 'calendar',      page: 'newsEvents', hash: 'calendar' },
      { key: 'announcements', page: 'newsEvents', hash: 'announcements' },
      { key: 'news',          page: 'newsEvents', hash: 'news' },
    ],
  },
  { key: 'visit',  page: 'visit' },
  { key: 'donate', page: 'donate' },
];
