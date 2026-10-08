// /llms.txt — plain-text summary for AI answer engines (https://llmstxt.org).
// Generated from the same dictionaries and config as the site, so facts match word for word.
import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { t, locales, pageKeys, pageUrl, languageNames } from '../i18n';

export const GET: APIRoute = ({ site: origin }) => {
  const en = t('en');
  const abs = (path: string) => new URL(path, origin).href;

  const pageList = (lang: (typeof locales)[number]) =>
    pageKeys
      .map((p) => `- [${t(lang).meta[p].title}](${abs(pageUrl(p, lang))}): ${t(lang).meta[p].description}`)
      .join('\n');

  const body = `# ${en.church.name}

> ${en.church.summary}

## Key facts

- Name: ${en.church.name}
- Also known as: Holy Archangels Michael and Gabriel Romanian Orthodox Church; Sts Michael and Gabriel Orthodox Church; ${t('ro').church.name}; ${t('es').church.name}
- Address: ${site.contact.address}
- Phone: ${site.contact.phone}
- Email (general and donations): ${site.contact.emailGeneral}
- Parish priest: Fr. Florin Iftode — ${site.contact.email}
- Sunday Divine Liturgy: every Sunday, 10:00–11:50 a.m., in Romanian and English
- Patronal feast: Synaxis of the Holy Archangels Michael and Gabriel, November 8
- Serving: ${site.areaServed.join(', ')} and the wider Coachella Valley and Inland Empire, California
- Website languages: English, Spanish (Español), Romanian (Română)

## New visitors

- [What to Expect](${abs(pageUrl('whatToExpect', 'en'))}): service length, language, what to wear, Holy Communion, children, and how to talk to the priest.

${locales
  .map((l) => `## Pages — ${languageNames[l]}\n\n${pageList(l)}`)
  .join('\n\n')}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
