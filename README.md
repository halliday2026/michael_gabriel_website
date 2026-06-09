<!-- STARTER NOTES — delete this section before any client handoff -->
## Starter notes (Halliday internal)

This repo is a **template repository**. New client sites are created with
GitHub's **"Use this template"** button — never by cloning and rewriting
history. Once a new repo exists from the template, follow the per-client
workflow below.

### The hard rules

These rules are load-bearing — breaking them has caused real incidents in the
past. Anyone working in a repo descended from this template should know them:

1. **`||`, never `??`, for environment-variable fallbacks.** CI can pass env
   vars as an empty string `''`. `??` only falls back on `null`/`undefined`,
   so `''` slips through and breaks the build (this has burned us before).
   `||` correctly treats `''` as falsy.
2. **`noindex` defaults to ON.** Every page emits
   `<meta name="robots" content="noindex, nofollow">` unless the `NOINDEX`
   env var is explicitly set to `false`. This protects staging from being
   indexed. Only flip it during the production launch (see the checklist
   below) — never "to test something" on staging.
3. **No `&&` chaining in scripts or docs on this stack.** Development happens
   on Windows/PowerShell, where `&&` is not a universal separator. Keep
   `package.json` scripts to single commands and prefer cross-platform Node
   scripts (like `scripts/check-placeholders.mjs`) over shell scripts.
4. **The "look" lives in one file, the copy lives in one file.** Resist the
   urge to hardcode colors or copy anywhere else — it defeats the purpose of
   the template. See the per-client workflow below.

<!-- END STARTER NOTES -->

---

# Halliday Astro + Tailwind Starter

A production-ready static-site starter built with **Astro** + **TypeScript**
and **Tailwind CSS v4** (CSS-first `@theme` configuration via
`@tailwindcss/vite`), deployed to **GitHub Pages** through GitHub Actions.

A new client site = swap design tokens, fill in content, assemble sections.

## What this is

- The entire visual identity ("the look") lives in [`src/styles/global.css`](src/styles/global.css)
  inside the `@theme` block — colors, fonts, and radius. Nothing else in the
  codebase should hardcode a hex color.
- All copy and site configuration lives in [`src/data/site.ts`](src/data/site.ts)
  — organization name, nav, contact info, and the content for every section.
- Section components in [`src/components/sections/`](src/components/sections/)
  are self-contained, read from `site.ts`, and are composed in
  [`src/pages/index.astro`](src/pages/index.astro).

## Per-client workflow

1. Create the new repo from this template ("Use this template" on GitHub).
2. Edit the `@theme` block in `src/styles/global.css` with the client's
   brand colors, fonts, and radius.
3. Fill in `src/data/site.ts` — replace every `REPLACE_ME` token with real
   content (org name, nav links, contact info, hero copy, programs, testimonials,
   get-involved CTAs, contact section copy).
4. Drop client assets (logo, favicon, hero image, etc.) into `public/`.
5. Delete any section components the client doesn't need from
   `src/pages/index.astro` (and remove the matching import + the component
   file itself once you're sure it's unused).
6. Run `npm run dev` and preview locally.

## Per-client housekeeping checklist

- [ ] Set `BASE_PATH` to `/<new-repo-name>/` — either as a repo Actions
      Variable (see `.github/workflows/deploy.yml`) or by updating the
      fallback in `astro.config.mjs`.
- [ ] Run `npm run check:strict` — it exits non-zero if any `REPLACE_ME`,
      `TODO`, `LOREM`, `{{`, or `PLACEHOLDER` token remains in `src/`, or if
      the default Halliday house palette is still in `global.css`.
- [ ] Optionally delete the section component files you removed from
      `index.astro` so the repo only contains what the client uses.

## Staging → production flip checklist

When the client site is ready to go live on its real domain:

- [ ] Set `NOINDEX=false` (as a repo Actions Variable, or in your `.env`
      for a local production build) so pages stop emitting the
      `noindex, nofollow` robots meta tag.
- [ ] Set `SITE_URL` to the custom domain and `BASE_PATH=/`.
- [ ] Add a `public/CNAME` file containing the custom domain.
- [ ] Configure the custom domain in the repo's GitHub Pages settings.
- [ ] Run `npm run check:strict` one more time before launch — it's your
      last automated guard against leftover placeholder content.

## Supabase swap (contact form)

The default contact form in [`src/components/sections/Contact.astro`](src/components/sections/Contact.astro)
posts directly to Formspree (`PUBLIC_FORMSPREE_ENDPOINT` in `.env`/`site.ts`).
To repoint it at Supabase instead (useful when the client wants submissions to
land in a managed program/database alongside other data):

1. Remove the `action`/`method` attributes from the `<form>` and handle
   `submit` client-side, or create an Astro endpoint at
   `src/pages/api/contact.ts`.
2. Use the Supabase JS client to `supabase.from('messages').insert({ name, email, message })`
   with your project's URL and anon/publishable key (read them from env with
   `||` fallbacks, per the hard rules above).
3. Replace the Formspree redirect with an inline success/error state in the
   form component.

A comment in `Contact.astro` documents this swap inline as well.

## Commands

| Command               | Action                                              |
| --------------------- | --------------------------------------------------- |
| `npm run dev`         | Start the local dev server                          |
| `npm run build`       | Build the production site to `dist/`                |
| `npm run preview`     | Preview the production build locally                |
| `npm run check`       | List placeholder tokens in `src/` (warn mode, exits 0) |
| `npm run check:strict`| Same scan, but exits 1 if anything is found          |

## Environment variables

See [`.env.example`](.env.example) for the full list with descriptions —
`SITE_URL`, `BASE_PATH`, `NOINDEX`, `PUBLIC_FORMSPREE_ENDPOINT`,
`PUBLIC_GA4_ID`, `PUBLIC_CLARITY_ID`. None are required for local development;
sensible staging fallbacks are baked into `astro.config.mjs` and `site.ts`.
