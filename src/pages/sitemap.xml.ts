// Hand-rolled sitemap so we control hreflang alternates and lastmod per page.
// Phase 2+ will generate the URL list from the shared route table.
import type { APIRoute } from 'astro';

const paths = ['/'];

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = paths
    .map((p) => {
      const loc = new URL(`${base}${p}`.replace(/\/{2,}/g, '/'), site).href;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
