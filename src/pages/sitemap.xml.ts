// Hand-rolled sitemap: every page in every language, each with hreflang
// alternates (en / es / ro + x-default → English) and a lastmod date.
import type { APIRoute } from 'astro';
import { locales, defaultLocale, pageKeys, pageUrl, type PageKey } from '../i18n';

export const GET: APIRoute = ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const abs = (page: PageKey, lang: (typeof locales)[number]) => new URL(pageUrl(page, lang), site).href;

  const urls = pageKeys.flatMap((page) => {
    const alternates = [
      ...locales.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(page, l)}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(page, defaultLocale)}"/>`,
    ].join('\n');

    return locales.map(
      (lang) => `  <url>\n    <loc>${abs(page, lang)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`
    );
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
