# CLAUDE.md — Holy Archangels Michael and Gabriel Romanian Orthodox Church

## Hard rules (never violate)

- **No git commands.** User commits manually via VS Code Source Control.
- **PowerShell syntax only.** No `&&` chaining — use `;` or sequential commands. No `??` — use `||` for env var fallbacks (CI passes empty strings that `??` lets through).
- **No hardcoded hex colors** anywhere outside `src/styles/global.css`. All color references must use Tailwind utility classes that resolve to the `@theme` tokens.
- **`noindex` is ON by default.** Do not flip it to `false` until the user says the site is ready to launch.

## Project overview

Single-page brochure site for a Romanian Orthodox parish in Palm Springs, CA. Static output deployed to GitHub Pages at `/michael_gabriel_website/`.

**Tech stack:** Astro 5 + TypeScript + Tailwind CSS v4 (CSS-first `@theme` via `@tailwindcss/vite`). No framework components — plain `.astro` files only.

## Architecture

| Concern | Location |
|---|---|
| All site copy + config | `src/data/site.ts` |
| All visual tokens (colors, fonts, radius) | `src/styles/global.css` `@theme` block |
| Section order | `src/pages/index.astro` |
| Trilingual content | `content` export in `site.ts` — `en`/`es`/`ro` keys |
| i18n switching | Client-side vanilla JS in `src/layouts/BaseLayout.astro` |
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
| `roc_logo.png` | Full circular church medallion — used as hero seal badge |
| `header_logo.png` | Wide icon crop — used in nav |
| `hero-community.jpg` | Pexels #7658827 — smiling adults outdoor picnic (Kampus Production) |
| `favicon.svg` | Orthodox 3-bar cross, gold on navy |

## REPLACE_ME items still pending parish input

- Clergy name, phone, email
- Formspree form ID (`PUBLIC_FORMSPREE_ENDPOINT`)
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
| `SITE_URL` | Canonical URL | `https://halliday2026.github.io/michael_gabriel_website/` |
| `BASE_PATH` | GitHub Pages subpath | `/michael_gabriel_website/` |
| `NOINDEX` | Robots noindex | `true` (flip to `false` at launch) |
| `PUBLIC_FORMSPREE_ENDPOINT` | Contact form endpoint | placeholder |
| `PUBLIC_GA4_ID` | Google Analytics | unset |
| `PUBLIC_CLARITY_ID` | Microsoft Clarity | unset |

## Launch checklist

- [ ] Fill all `REPLACE_ME` tokens (clergy, Formspree, schedules, donation URL)
- [ ] Native review of ES and RO translations
- [ ] Set `NOINDEX=false` in repo Actions Variables
- [ ] Set `SITE_URL` to custom domain and `BASE_PATH=/` if moving off subpath
- [ ] Add `public/CNAME` with custom domain
- [ ] `npm run check:strict` must exit clean before go-live
