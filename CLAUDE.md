# CLAUDE.md — Saint Michael and Gabriel Romanian Orthodox Church

## Hard rules (never violate)

- **No git commands.** User commits manually via VS Code Source Control.
- **PowerShell syntax only.** No `&&` chaining — use `;` or sequential commands. No `??` — use `||` for env var fallbacks (CI passes empty strings that `??` lets through).
- **No hardcoded hex colors** anywhere outside `src/styles/global.css`. All color references must use Tailwind utility classes that resolve to the `@theme` tokens.
- **`noindex` is ON by default.** Do not flip it to `false` until the user says the site is ready to launch.

## Project overview

Single-page brochure site for a Romanian Orthodox parish in Palm Springs, CA. Static output deployed to GitHub Pages; production domain is `psorthodoxro.org`.

**Tech stack:** Astro 5 + TypeScript + Tailwind CSS v4 (CSS-first `@theme` via `@tailwindcss/vite`). No framework components — plain `.astro` files only.

## Architecture

| Concern | Location |
|---|---|
| All site copy + config | `src/data/site.ts` |
| All visual tokens (colors, fonts, radius) | `src/styles/global.css` `@theme` block |
| Section order | `src/pages/index.astro` |
| Trilingual content | `content` export in `site.ts` — `en`/`es`/`ro` keys |
| i18n switching | Client-side vanilla JS in `src/layouts/BaseLayout.astro` |
| SEO meta + JSON-LD | `src/components/Seo.astro` |
| Analytics (GA4, Clarity, Plausible) | `src/components/Analytics.astro` |
| Public assets | `public/` — use `${import.meta.env.BASE_URL}filename` in templates |

### i18n pattern

- Content JSON is embedded via `<script type="application/json" id="i18n-data">` in BaseLayout.
- Elements that need translation carry `data-i18n="section.key"` (for `textContent`) or `data-i18n-placeholder="section.key"` (for `placeholder` attr).
- Language toggle buttons carry `data-lang="en|es|ro"`.
- The inline IIFE script in BaseLayout wires it all together and persists the locale in `localStorage`.
- ES and RO translations are **DRAFT — NEEDS NATIVE REVIEW** before launch.

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

Fonts: **Playfair Display** (display/headings) · **Lora** (body serif)

## Sections (in page order)

`Hero` → `Welcome` (#welcome) → `DivineLiturgies` (#services) → `Clergy` (#clergy) → `Community` (#community) → `VisitUs` (#visit) → `Donate` (#donate) → `Contact` (#contact)

## Key public assets

| File | Purpose |
|---|---|
| `roc_logo.png` | Full circular church medallion — used as hero seal badge and JSON-LD `logo` |
| `header_logo.png` | Wide icon crop — used in nav |
| `church_front.jpg` | Front exterior photo — used as hero image and default `og:image` |
| `community.jpg` | Community gathering photo — used in Community section header |
| `carousel/` | Six photos (front, kids, night, picnic, service, side) — Community image carousel |
| `favicon.svg` | Orthodox 3-bar cross, gold on navy |
| `googlef2ae0ced62d19fdc.html` | Google Search Console ownership verification |

## SEO & AEO

### What's implemented

- **Meta tags** — title, description, canonical URL, robots (env-driven), Open Graph, Twitter Card
- **Default `og:image`** — `church_front.jpg` (renders unconditionally; no prop required)
- **JSON-LD structured data** — `Church`/`LocalBusiness` schema in `Seo.astro`, sourcing all values from `site.ts`:
  - Address, phone, email, opening hours (Sunday liturgy), clergy as `employee`
  - `logo` → `roc_logo.png`, `image` → `church_front.jpg`
- **XML sitemap** — `@astrojs/sitemap` generates `/sitemap-index.xml` at build time
- **`robots.txt`** — references `https://psorthodoxro.org/sitemap-index.xml`

### Structured data source fields

All JSON-LD values come from `site` in `src/data/site.ts`. The `contact` object includes both a display `address` string and structured subfields (`streetAddress`, `addressLocality`, `addressRegion`, `postalCode`) used by the schema — keep these in sync if the address ever changes.

## Analytics

All analytics are suppressed when `NOINDEX=true` (staging). Plausible is hardcoded (no env var) since its script URL is domain-restricted by Plausible.

| Provider | How configured |
|---|---|
| Plausible | Hardcoded in `Analytics.astro` — active whenever `NOINDEX=false` |
| Google Analytics 4 | `PUBLIC_GA4_ID` Actions Variable — optional |
| Microsoft Clarity | `PUBLIC_CLARITY_ID` Actions Variable — optional |

## Contact form

Submits via `fetch` to Formspree (AJAX mode — no page redirect). On success the form is hidden and a thank-you message shown in its place. On failure an inline error is displayed. Endpoint: `https://formspree.io/f/xbdvekna` (hardcoded fallback; can be overridden via `PUBLIC_FORMSPREE_ENDPOINT`).

## REPLACE_ME items still pending parish input

- ~~Clergy name, phone, email~~ (Fr. Florin Iftode, 760-578-2052, frfloriniftode@gmail.com)
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
| `NOINDEX` | Robots noindex + analytics gate | `true` (flip to `false` at launch) |
| `PUBLIC_FORMSPREE_ENDPOINT` | Contact form endpoint | `https://formspree.io/f/xbdvekna` |
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
- [ ] Set `NOINDEX=false` in repo Actions Variables
- [ ] Submit sitemap in Google Search Console after first deploy
- [ ] `npm run check:strict` must exit clean before go-live
