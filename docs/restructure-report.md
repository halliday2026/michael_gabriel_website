# psorthodoxro.org restructure: final report

For: Suzette (Halliday) · Saint Michael and Gabriel Romanian Orthodox Church, Palm Springs · October 2026

This report covers Phases 1–6 of the restructure brief: the new menu and pages Fr. Florin asked for, real per-language URLs, bug and translation fixes, and SEO / AEO / GEO work.

Companion documents in `docs/`:

- `google-business-profile-checklist.md`: what to enter in the Google Business Profile so it matches the site exactly
- `translation-review.md`: all 271 strings, English · Spanish · Romanian side by side, for native-speaker review
- `fr-florin-review.md`: all doctrinal and liturgical text, Romanian then English, for Fr. Florin's approval

Run `npm run review:docs` to regenerate the two review documents after any copy change.

---

## 1. What changed, phase by phase

**Commit hashes.** You made the commits yourself, and the project rules stop me running git, so I can't see the hashes. The suggested commit message for each phase is listed below. Copy the hashes from VS Code → Source Control → history if you need them here.

### Phase 1: unhide the site from search engines
*Suggested message:* `Phase 1: remove noindex, fix duplicated title, add sitemap.xml and AI-friendly robots.txt`

- Removed the `NOINDEX` switch. Every page now sends `<meta name="robots" content="index, follow, max-image-preview:large">`.
- **No `X-Robots-Tag`.** GitHub Pages can't set custom headers, and the live response has none.
- Fixed the duplicated `<title>`.
- `robots.txt` allows all crawlers and names the AI crawlers explicitly (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …).
- Replaced `@astrojs/sitemap` with our own `/sitemap.xml`. The `NOINDEX` Actions Variable is no longer used and can be deleted.

### Phase 2: real pages and URLs for each language
*Suggested message:* `Phase 2: multi-page trilingual architecture — localized URLs, pre-rendered ES/RO, new menu with dropdowns, breadcrumbs, hreflang sitemap`

- **33 pre-rendered pages:** 11 pages in each of three languages. English is at `/`, Spanish at `/es/…`, Romanian at `/ro/…`, with localized slugs such as `/es/culto/que-esperar/` and `/ro/slujbe/ce-sa-asteptati/`. All text is in the HTML.
- **Translations:** one file per language (`src/i18n/en|es|ro.ts`). The Spanish and Romanian files must have exactly the same keys as English, or the build fails.
- **Menu:** Fr. Florin's nine-item menu. Desktop has keyboard-accessible dropdowns; mobile has an accordion. It fits on one line at 1280px and 1366px in all three languages.
- **Language switch:** links to the same page in the other language. The choice is remembered only as a convenience; the site never redirects.
- **Other:** breadcrumbs, the footer with full labeled contact details, and the contact form on `/visit/`.

### Phase 3: homepage
*Suggested message:* `Phase 3: homepage — three primary action cards with gold line icons, section teasers linking to each page`

- **Fr. Florin's three large buttons:** Join Us for Liturgy · Request a Prayer · I'm New to Orthodoxy.
  - They're navy cards with gold line icons (Orthodox cross, candle, raised hand), three across on desktop and stacked on mobile.
  - They replace the old Visit / Donate / Contact buttons and the "Divine Liturgy" pill.
  - **Icon note:** there's no clean line icon for praying hands (🙏), so the Liturgy card uses the Orthodox cross. Easy to change.
- **Section teasers** below the hero lead into Our Parish, Worship, Prayer, News & Events, Community, Visit Us and Donate.

### Phase 4: new page content
*Suggested message:* `Phase 4: new page content — What to Expect FAQ, prayer/pomelnic form, Learn/Worship/Tradition text, calendar embed, news file, gallery with lightbox and optimized images`

- **What to Expect:** a welcome section and the eight-question FAQ.
- **Prayer:** one form with separate pomelnic fields for the living and the departed, and a "private to the priest" checkbox. It also covers Light a Candle and Prayer & Healing (Sfântul Maslu).
- **Worship, Learn and Tradition:** general text, including the Creed in all three languages.
- **News & Events:** a Google Calendar embed, plus Announcements and Parish News read from `src/data/news.ts`.
- **Photo Gallery:** a grid with a lightbox. Add a photo by putting the file in `src/assets/gallery/` and adding one entry to `src/data/gallery.ts`.
- **Placeholders:** clearly marked everywhere the parish needs to supply facts.

### Phase 5: bugs and translation fixes
*Suggested message:* `Phase 5: translation and bug fixes — ES/RO corrections, formal Romanian, configurable announcement line, per-language calendar link, round seal header logo, Zelle color token`

- **Audit:** no English left on any Spanish or Romanian page, checked across visible text, alt text, aria-labels, titles, placeholders, meta tags and form messages. Every phone number and email is a `tel:` or `mailto:` link.
- **Spanish fixes:** "Bienvenidos", and "P. Florin Iftode" for the clergy title.
- **Romanian fixes:** the formal register throughout (sunteți / explorați / vă / Vedeți / dumneavoastră), and the 24-hour clock.
- **Announcement line:** the November 8 Synaxis line is now configurable (`site.announcement`, optional date range, shown by default). It stays on one line from 1024px to 1440px.
- **Header logo:** now the full round seal. The old file was cut flat through the icon.
- **Orthodox calendar link:** depends on the language (TODO(decision) below). The map also uses `hl=es` and `hl=ro` on those pages.
- **Church name:** the English name stays "Saint Michael and Gabriel Romanian Orthodox Church", as you instructed. It's defined once per language (`const NAME`).

### Phase 6: SEO, AEO and GEO
*Suggested message:* `Phase 6: SEO/AEO — structured data graph, AEO summaries, title/description tuning, image optimization, AA contrast, 404, llms.txt, GBP checklist, review docs`

- **Titles and descriptions:** every page has a unique title of 50–60 characters and a unique description of 140–160 characters, in its own language. Each page also has a self-referencing canonical, hreflang for en, es, ro and x-default, and `og:locale` with its alternates.
- **Headings:** one H1 per page and no skipped heading levels.
- **Structured data:** a JSON-LD graph on every page, translated per language.
  - On every page: **Church** (with the alternate names, geo, areaServed, knowsLanguage, opening hours and parentOrganization), **Person** (Fr. Florin), **WebSite** and **WebPage**.
  - Interior pages: **BreadcrumbList**.
  - What to Expect: **FAQPage**.
  - Home, Worship and What to Expect: a recurring Sunday Liturgy **Event**.
- **AEO:**
  - One canonical summary sentence per language (`church.summary`) is reused word for word: the home page, Our Parish, `llms.txt` and the GBP description.
  - Every page opens with a factual summary.
  - Question-style headings: "Where is the church?" and "What time is Sunday Liturgy?".
  - `/llms.txt` is new.
- **Images:** AVIF and WebP with JPEG fallback, explicit width and height, and lazy loading below the fold. The hero photo went from 990 KB to 8–27 KB (AVIF, depending on screen size).
- **Accessibility:** WCAG AA contrast, using new `accent-deep` and `highlight-deep` tokens for small gold text and error text on cream. Carousel dots have 24px tap targets, and the skip link works.
- **404 page:** in all three languages, showing the visitor's own language first.
- **Search Console:** an optional meta-tag setting (`PUBLIC_GOOGLE_SITE_VERIFICATION`). The site is already verified by the HTML file.
- **Docs:** the GBP checklist and the two review packs.

---

## 2. noindex confirmation

- **Built output:** `grep -ri noindex dist/` finds **0 files**. Every page has `<meta name="robots" content="index, follow, max-image-preview:large">`.
- **HTTP headers:** the live response from GitHub Pages has **no `X-Robots-Tag`**. GitHub Pages doesn't let a repository set one.
- **404 page:** it has no robots meta tag at all. GitHub Pages returns a real 404 status, so it won't be indexed anyway.

---

## 3. Open items (TODOs), grouped by what we need from the parish

`npm run check` lists every marker with its file and line, and `npm run check:strict` fails until they're all resolved.

### A. Facts and content to get from the parish (TODO(content))

| What | Where it goes |
|---|---|
| Parish history: founding, founders, milestones, the church building | `src/views/OurParishView.astro:21` |
| Parish-specific customs (how the hram is celebrated) and photos | `src/views/OurParishView.astro:27` |
| Parking details: where to park, accessible parking, entrance | `src/components/Faq.astro:28` (What to Expect FAQ) |
| Ministries: names, descriptions, contacts | `src/views/CommunityView.astro:18` |
| Children & youth programs | `src/views/CommunityView.astro:22` |
| Sermon archive / teachings | `src/views/LearnView.astro:37` |
| Catechism class schedule and how to sign up | `src/views/LearnView.astro:43` |
| Holy Unction (Sfântul Maslu) schedule | `src/views/PrayerView.astro:33` |
| Vespers and feast-day schedules (currently "To be announced", which links to the calendar) | `src/i18n/*.ts` → `liturgies`, or the Google Calendar |
| Announcements and parish news | `src/data/news.ts` (example entry included) |
| Photos: church interior / iconostasis, icons, more parish photos | `src/views/WhatToExpectView.astro:24`, `src/views/LearnView.astro:32`, `src/views/GalleryView.astro:55` + `src/data/gallery.ts` |
| Accessibility attributes and weekday hours for the GBP | `docs/google-business-profile-checklist.md` §4 |

### B. Decisions needed (TODO(decision))

| Decision | Where |
|---|---|
| Is **Light a Candle** a symbolic online candle tied to a prayer request, or tied to a Zelle donation? It's currently a prayer-request option. | `src/views/PrayerView.astro:25` |
| The **calendar style** the parish follows (New / Old) | `src/views/OurParishView.astro:28` |
| The **diocese**. The schema says "Romanian Orthodox Archdiocese of the Americas". | `src/data/site.ts:41` |
| The **Orthodox calendar link for EN/ES**. It currently points to OCA "Lives of the Saints"; Romanian keeps noutati-ortodoxe.ro. Set it to `''` to hide the button. | `src/data/site.ts:81` |
| The **official church name** ("Saint Michael and Gabriel…" vs "Holy Archangels…" vs "Sts Michael and Gabriel…"). The site keeps "Saint Michael and Gabriel…", as you instructed. | `docs/google-business-profile-checklist.md` §1 |
| **Header logo:** the full round seal (current) or the old half-dome crop | `src/components/Nav.astro` |

### C. Configuration you can set (TODO(config))

| Setting | Where |
|---|---|
| **Google Calendar ID** for News & Events: the `PUBLIC_GOOGLE_CALENDAR_ID` Actions Variable, plus making the calendar public | `src/data/site.ts:90`, `src/components/CalendarEmbed.astro:47` |
| **Prayer form inbox:** confirm Formspree form `xbdvekna` delivers to frfloriniftode@gmail.com, or create a separate prayer form and set `PUBLIC_FORMSPREE_PRAYER_ENDPOINT` | `src/data/site.ts:62` |
| **Exact map coordinates:** the current ones are approximate, since OpenStreetMap matched only the street. Copy them from the GBP pin. | `src/data/site.ts:31` |
| **`sameAs` links:** the GBP URL, plus any Facebook, YouTube or Instagram pages | `src/data/site.ts:46` |
| Search Console meta token (optional; file verification already works) | `src/data/site.ts:52` |
| The unused `NOINDEX` Actions Variable can be deleted | GitHub → Settings → Variables |

### D. For Fr. Florin's approval: REVIEW(Fr. Florin)

All of these are collected, Romanian then English, in **`docs/fr-florin-review.md`**:

1. **★ Holy Communion / anafura answer** on What to Expect. This is the most important one to approve. (`src/components/Faq.astro:4`)
2. The What to Expect page as a whole (`src/views/WhatToExpectView.astro:2`)
3. Worship: the Divine Liturgy, Sacraments and Confession text (`src/views/WorshipView.astro:19, 26, 31`)
4. Prayer: the pomelnic explanation, Light a Candle, and prayer for the sick and Sfântul Maslu (`src/views/PrayerView.astro:24, 31`)
5. Learn:
   - What We Believe, and **the Creed in EN, ES and RO**. Check these against the official texts the parish uses.
   - Orthodox Faith.
   - Catechism.
   (`src/views/LearnView.astro:18, 30, 41`)
6. Our Parish: the Romanian Orthodox Tradition overview, including the dates of St. Parascheva (Oct 14), St. Demetrius the New (Oct 27) and St. Andrew (Nov 30), and the 1885 / 1925 history (`src/views/OurParishView.astro:25`)

---

## 4. Spanish and Romanian copy for native-speaker review

All Spanish and Romanian text on the site is a draft. The full list, **271 strings** side by side with the English, is in **`docs/translation-review.md`**.

Priorities for the reviewers, since these were written new in this project:

- **Menu and page labels:** for example "Culto", "Slujbe", "Învățătură", "Trimiteți un Pomelnic", "Rugăciune și Sfântul Maslu", "Activități Parohiale".
- **Page titles and meta descriptions:** these are what Google shows in search results.
- **The canonical summary sentence** (`church.summary`). It's reused word for word in several places, so any correction must be made once in the dictionary.
- **The three homepage buttons and their subtitles.** These came from the brief, but check them anyway.
- **What to Expect:** the welcome text and all eight FAQ answers.
- **Prayer:** the form labels, the request types and the pomelnic explanation.
- **Learn:** the Creed, beliefs, Orthodox Faith and Catechism text, and the Tradition text.
- **The 404 page, the footer labels and the form messages** (sending, thank-you, error).
- **The Spanish and Romanian GBP descriptions** (reference only) in the GBP checklist.
- **Reworded in Phase 5:** Spanish "¡le damos la bienvenida!" and "le recibiremos con alegría"; Romanian "casa dumneavoastră spirituală din Valea Coachella".
- **Inflected church names:** Romanian inflected forms such as "Bisericii Ortodoxe Române a…" are written out by hand because the name constant can't decline them. Check them if the name ever changes.

---

## 5. Lighthouse scores (mobile)

| Page | Performance | Accessibility | Best Practices | SEO | LCP | Page weight |
|---|---|---|---|---|---|---|
| **Before**: live home page (psorthodoxro.org, Phases 1–5 already deployed) | 63 | 94 | 100 | 100 | 12.0 s | 1,823 KB |
| **After**: Home (EN) | **100** | **100** | **100** | **100** | 1.4 s | 171 KB |
| After: Home (RO) | 100 | 100 | 100 | 100 | 1.5 s | 225 KB |
| After: Visit Us (ES, with map) | 100 | 100 | 100 | 100 | 1.4 s | 690 KB |
| After: Photo Gallery (EN) | 96 | 100 | 100 | 100 | 2.8 s | 529 KB |
| After: What to Expect (ES) | 100 | 100 | 100 | 100 | 1.5 s | 127 KB |

Notes:

- **What "before" means:** it's the live site when Phase 6 started, which already included Phases 1–5. The original single-page site wasn't measured. It had the same image weight and also `noindex`.
- **Where "after" was measured:** on the production build served locally (`astro preview`). GitHub Pages adds compression, which helps, but caches files for only 10 minutes, which Lighthouse notes. **After deploying, re-check at pagespeed.web.dev.**
- **What made the difference:**
  - Optimized AVIF and WebP images: the hero went from 990 KB to 8–27 KB, and the header seal from 110 KB to 2–6 KB.
  - Non-blocking Google Fonts.
  - AA contrast fixes and bigger carousel tap targets.

---

## 6. Structured-data validation

- **Schema.org validator** (validator.schema.org, Google's): all **33 pages, 0 errors, 0 warnings**. Detected types: WebPage, with the Church, Person, WebSite and BreadcrumbList linked to it, plus FAQPage on What to Expect and Event on Home, Worship and What to Expect.
- **Google Rich Results eligibility** (checked against Google's documentation; Google's Rich Results Test has no API, so run it yourself after deploy at search.google.com/test/rich-results):
  - **BreadcrumbList:** all required properties present (position, name, item). Eligible.
  - **Event:** the required name, startDate and location (with address) are present, plus the recommended description, endDate, eventStatus, attendance mode, image, organizer, performer and offers. `startDate` is the next Sunday after each build, and `eventSchedule` describes the weekly repetition. Google may show only the next occurrence. Rebuild at least weekly to keep it current; any deploy does this.
  - **FAQPage:** valid markup. Since 2023 Google shows FAQ rich results only for well-known government and health sites, so expect no FAQ snippet in Google search. The markup still helps Bing and AI answer engines.
  - **Logo / Organization:** the logo (267×266 PNG) meets the 112px minimum.

---

## 7. Form tests

| Test | Result |
|---|---|
| Contact form, success path (network call faked, nothing sent) | ✅ The form is replaced by the thank-you message. All fields reach Formspree's endpoint: name, email, message, language, `_subject: Website contact form`, and the `_gotcha` spam trap. |
| Prayer form, success path (network call faked) | ✅ The thank-you message shows. Fields sent: name, email, phone, `request_type` (in English, e.g. "Light a candle"), `names_living`, `names_departed`, message, `private_to_priest`, `_subject: Prayer request (website)`. |
| Error path (network failure simulated, RO page) | ✅ The error message is hidden by default and only appears after a real failure, in the page's language. The button resets. |
| **Real end-to-end submission** | ⏳ **Not done.** A real submission emails the parish's Formspree inbox, and I didn't send one without your OK. To test: submit each form once on the live site with "TEST — please ignore", then confirm the emails arrive and which address receives them. That answers the prayer-inbox TODO(config). |

---

## 8. Deploying

1. Commit Phase 6 to `main`. The GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages automatically.
2. **Actions Variables** (Settings → Secrets and variables → Actions → Variables):
   - Delete `NOINDEX`; it's no longer used.
   - Set `PUBLIC_GOOGLE_CALENDAR_ID` when the calendar is ready.
   - Optional: `PUBLIC_FORMSPREE_PRAYER_ENDPOINT` and `PUBLIC_GOOGLE_SITE_VERIFICATION`.
3. After the deploy finishes, spot-check:
   - `/`, `/es/`, `/ro/`
   - `/worship/what-to-expect/`
   - `/prayer/`
   - `/sitemap.xml`, `/robots.txt`, `/llms.txt`
   - a made-up URL, which should show the trilingual 404
4. **Rebuild weekly.** Either re-run the workflow (Actions → Deploy → Run workflow) or deploy any change, so the Event's "next Sunday" date and the sitemap dates stay current. If you want, I can add a weekly scheduled build to the workflow.

### Search Console, after launch

1. **Verify the domain.** It's already verified by `public/googlef2ae0ced62d19fdc.html`. Consider also adding a **Domain property** with DNS verification so the `www` and `http` variants are covered.
2. **Submit the sitemap:** Sitemaps → `https://psorthodoxro.org/sitemap.xml`. It lists all 33 pages with their hreflang alternates. Remove the old `sitemap-index.xml` if it was ever submitted.
3. **Request indexing** with URL Inspection for the three home pages: `https://psorthodoxro.org/`, `https://psorthodoxro.org/es/` and `https://psorthodoxro.org/ro/`. Do the same for `/worship/what-to-expect/`.
4. **Monitor:**
   - Indexing → Pages, weekly for the first month. All 33 pages should move to "Indexed".
   - Enhancements, for Breadcrumbs and Events.
   - Performance → Search results, filtered by country and query language.
5. Run the **Rich Results Test** on `/worship/` and `/worship/what-to-expect/`.

### Google Business Profile, after launch

Follow `docs/google-business-profile-checklist.md`:

1. Set the name, address and phone exactly as listed.
2. Choose the category (Romanian Orthodox church, or Orthodox church).
3. Paste the 727-character English description.
4. Set Sunday hours of 10:00–11:50 AM.
5. Add the website and contact links with UTM parameters.
6. Upload the photos listed.
7. Start the Google Posts plan.
8. Then copy the GBP URL and exact pin coordinates into `src/data/site.ts` (`sameAs`, `geo`) and redeploy.

---

## 9. Other notes

- **Unused files** still in `public/`: `header_logo.png` (the old half-dome crop) and `hero-community.jpg` (not referenced anywhere). They're harmless; delete them whenever you like.
- **`astro check`** reports 3 type errors, all in `astro.config.mjs` and all there before this project. Two need Node type definitions (`@types/node`, a dev dependency I haven't added), and one is a Vite version mismatch between Tailwind and Astro. The build isn't affected.
- **Design changes made for accessibility:** small gold text on cream (the announcement line, small labels, Get Directions, news dates) is now a deeper bronze (`#806010`) to pass WCAG AA. Gold on navy is unchanged.
