# CLAUDE.md — Saint Michael and Gabriel Romanian Orthodox Church

## Hard rules (never violate)

- **No git commands.** User commits manually via VS Code Source Control.
- **PowerShell syntax only.** No `&&` chaining — use `;` or sequential commands. No `??` — use `||` for env var fallbacks (CI passes empty strings that `??` lets through).
- **No hardcoded hex colors** anywhere outside `src/styles/global.css`. All color references must use Tailwind utility classes that resolve to the `@theme` tokens.
- **The site is indexable.** Every page emits `<meta name="robots" content="index, follow, max-image-preview:large">` unconditionally — there is no `NOINDEX` switch any more. Do not reintroduce `noindex`.

## Project overview

Multi-page brochure site for a Romanian Orthodox parish in Palm Springs, CA, pre-rendered in English (`/`), Spanish (`/es/`) and Romanian (`/ro/`). Static output deployed to GitHub Pages; production domain is `psorthodoxro.org`.

**Tech stack:** Astro 5 + TypeScript + Tailwind CSS v4 (CSS-first `@theme` via `@tailwindcss/vite`). No framework components — plain `.astro` files only.

## Architecture

| Concern | Location |
|---|---|
| Site config (contact details, Formspree endpoints, hero announcement + date range, Orthodox calendar link per language, Google Calendar ID) | `src/data/site.ts` |
| All copy, one file per language | `src/i18n/en.ts` (defines the `Dict` type), `es.ts`, `ro.ts` |
| Church name (one constant per language) | `church.name` in each `src/i18n/*.ts` |
| Pages, localized slugs, breadcrumb parents, main menu | `src/i18n/routes.ts` |
| Route generation (all pages × all languages) | `src/pages/[...path].astro` |
| Page bodies | `src/views/*View.astro` (each takes `lang`) |
| Reusable sections | `src/components/sections/*.astro` (each takes `lang`, optional `id`) |
| All visual tokens (colors, fonts, radius) | `src/styles/global.css` `@theme` block |
| SEO meta, hreflang, OG + JSON-LD | `src/components/Seo.astro` |
| Sitemap (with hreflang alternates) | `src/pages/sitemap.xml.ts` |
| Analytics (GA4, Clarity, Plausible) | `src/components/Analytics.astro` |
| Photo gallery + Community carousel | images in `src/assets/gallery/`, entries (alt text ×3) in `src/data/gallery.ts` |
| Announcements / Parish News | `src/data/news.ts` (date + title/body ×3) |
| Contact + prayer forms | `src/components/sections/Contact.astro`, `src/components/PrayerForm.astro`, shared submit in `src/scripts/ajax-form.ts` |
| Public assets | `public/` — use `${import.meta.env.BASE_URL}filename` in templates |

### i18n pattern

- Every page is pre-rendered per language with its full text in the HTML — no client-side text swapping.
- `es.ts` / `ro.ts` are typed as `Dict`, so a missing or extra key fails `astro check` / the build.
- Build links with `pageUrl(pageKey, lang, hash?)` from `src/i18n` — never hand-write paths. Section anchors (`#liturgy`, `#clergy`, …) are shared across languages; slugs are localized.
- The EN / ES / RO toggle links to the same page in the other language. The choice is stored in `localStorage` (try/catch) as a convenience only — never auto-redirect.
- To add a page: add a key + slugs in `routes.ts`, `meta` + `pages` entries in all three dictionaries, a view in `src/views/`, and register it in `[...path].astro`.
- ES and RO translations are **DRAFT — NEEDS NATIVE REVIEW** before launch.

### Placeholders

Unknown parish-specific content uses `<PlaceholderSection>` / `<Placeholder>` (visible "[Content coming soon — to be provided by the parish]") plus an HTML `<!-- TODO(content): … -->` comment at the call site. Markers: `TODO(content)`, `TODO(decision)`, `TODO(config)`, and `REVIEW(Fr. Florin)` for doctrinal/liturgical drafts awaiting the priest's approval. `npm run check` lists them all. Never invent parish facts.

Inside `{…}` expressions use `{/* TODO… */}` comments — `<Fragment set:html="<!-- … -->">` there renders as visible text.

### Church name

Each dictionary defines `const NAME` (EN also `SHORT_NAME`) once at the top; strings reference `${NAME}`. Romanian inflected forms (e.g. "Bisericii Ortodoxe Române a…") cannot use the constant and are written out.

### Asset URL pattern

Always prefix public asset paths with `import.meta.env.BASE_URL`:
```astro
<img src={`${import.meta.env.BASE_URL}filename.jpg`} />
```

## Palette (from `src/styles/global.css`)

| Token | Hex | Source |
|---|---|---|
| `brand` | `#14213D` | Dark navy — orb in logo |
| `accent` | `#C49A2A` | Warm ochre-gold — halos & wings |
| `highlight` | `#C05C38` | Terracotta-brick — Gabriel's robe |
| `royal` | `#3D6B7A` | Byzantine slate-blue — Michael's robe |
| `ink` | `#1C1C1C` | Body text |
| `surface` | `#FAF8F4` | Page background (warm cream) |
| `muted` | `#F0ECE3` | Section tint |
| `zelle` | `#6D1ED4` | Zelle brand purple — Zelle icon only |

Fonts: **Playfair Display** (display/headings) · **Lora** (body serif)

## Pages

Home `/` · Our Parish · Worship (+ What to Expect) · Prayer · Community (+ Photo Gallery) · Learn · News & Events · Visit Us (map + contact form) · Donate. Slugs per language are in `src/i18n/routes.ts`. Desktop menu (≥1280px) uses disclosure dropdowns; below that, an accordion.

## Key public assets

| File | Purpose |
|---|---|
| `roc_logo.png` | Full circular church medallion — header logo, hero seal badge and JSON-LD `logo` |
| `header_logo.png` | Old half-dome nav crop (cut flat through the icon) — no longer used; header uses `roc_logo.png` |
| `church_front.jpg` | Front exterior photo — used as hero image and default `og:image` |
| `community.jpg` | Community gathering photo — used in Community section header |
| `favicon.svg` | Orthodox 3-bar cross, gold on navy |
| `googlef2ae0ced62d19fdc.html` | Google Search Console ownership verification |

## SEO & AEO

### What's implemented

- **Meta tags** — title, description, canonical URL, robots (`index, follow, max-image-preview:large`), Open Graph, Twitter Card
- **Default `og:image`** — `church_front.jpg` (renders unconditionally; no prop required)
- **JSON-LD structured data** — `Church`/`LocalBusiness` schema in `Seo.astro`, sourcing all values from `site.ts`:
  - Address, phone, email, opening hours (Sunday liturgy), clergy as `employee`
  - `logo` → `roc_logo.png`, `image` → `church_front.jpg`
- **XML sitemap** — `src/pages/sitemap.xml.ts` generates `/sitemap.xml` at build time (hand-rolled for hreflang + lastmod control)
- **`robots.txt`** — allows all crawlers, explicitly lists AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …), references `https://psorthodoxro.org/sitemap.xml`

### Structured data source fields

All JSON-LD values come from `site` in `src/data/site.ts` (name from `src/i18n/en.ts`). The `contact` object includes both a display `address` string and structured subfields (`streetAddress`, `addressLocality`, `addressRegion`, `postalCode`) used by the schema — keep these in sync if the address ever changes.

## Analytics

GA4 and Clarity load only when their ID is set. Plausible is hardcoded (no env var) since its script URL is domain-restricted by Plausible.

| Provider | How configured |
|---|---|
| Plausible | Hardcoded in `Analytics.astro` — always loads (domain-restricted by Plausible, safe on staging) |
| Google Analytics 4 | `PUBLIC_GA4_ID` Actions Variable — optional |
| Microsoft Clarity | `PUBLIC_CLARITY_ID` Actions Variable — optional |

## Contact & prayer forms

Both forms submit via `fetch` to Formspree (shared script `src/scripts/ajax-form.ts`; `_gotcha` honeypot). The prayer form sends `request_type`, `names_living`, `names_departed`, `private_to_priest`. The contact form submits via `fetch` to Formspree (AJAX mode — no page redirect). On success the form is hidden and a thank-you message shown in its place. On failure an inline error is displayed. Endpoint: `https://formspree.io/f/xbdvekna` (hardcoded fallback; can be overridden via `PUBLIC_FORMSPREE_ENDPOINT`).

## REPLACE_ME items still pending parish input

- ~~Clergy name, phone, email~~ (Fr. Florin Iftode, (760) 325-5388, frfloriniftode@gmail.com — the phone in `site.ts` is authoritative)
- ~~Formspree form ID~~ (xbdvekna — wired up)
- Calendar style (New / Old)
- Vespers, Confession, Feast Days schedules
- Donation URL

## Commands

```
npm run dev           # local dev server
npm run build         # production build → dist/
npm run preview       # preview production build
npm run check         # list placeholder tokens (exits 0)
npm run check:strict  # same, exits 1 on any hit
```

## Environment variables

All have sensible fallbacks — none required for local dev.

| Variable | Purpose | Default |
|---|---|---|
| `SITE_URL` | Canonical URL | `https://psorthodoxro.org` |
| `BASE_PATH` | URL base path | `/` |
| `PUBLIC_FORMSPREE_ENDPOINT` | Contact form endpoint | `https://formspree.io/f/xbdvekna` |
| `PUBLIC_FORMSPREE_PRAYER_ENDPOINT` | Prayer request form endpoint | falls back to the contact endpoint |
| `PUBLIC_GOOGLE_CALENDAR_ID` | Public Google Calendar on News & Events | unset (placeholder shown) |
| `PUBLIC_GA4_ID` | Google Analytics (optional) | unset |
| `PUBLIC_CLARITY_ID` | Microsoft Clarity (optional) | unset |

## Launch checklist

- [x] Clergy name, phone, email filled
- [x] Formspree contact form wired up
- [x] Custom domain DNS configured (psorthodoxro.org → GitHub Pages)
- [x] `SITE_URL` and `BASE_PATH` updated in code and Actions Variables
- [x] JSON-LD structured data implemented
- [x] Sitemap generated and referenced in robots.txt
- [x] Google Search Console verification file added
- [x] Plausible analytics integrated
- [ ] Fill remaining `REPLACE_ME` tokens (schedules, donation URL)
- [ ] Native review of ES and RO translations
- [x] Remove `noindex` (NOINDEX switch deleted; the `NOINDEX` Actions Variable is now unused and can be deleted)
- [ ] Submit `sitemap.xml` in Google Search Console after first deploy
- [ ] `npm run check:strict` must exit clean before go-live
