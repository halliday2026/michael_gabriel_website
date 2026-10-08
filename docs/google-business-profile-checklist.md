# Google Business Profile checklist

For: Suzette (Halliday) · Parish: Saint Michael and Gabriel Romanian Orthodox Church, Palm Springs

The Google Business Profile (GBP) can't be edited from the website code. Use this list in the GBP dashboard (business.google.com, or search the church name on Google while signed in as a profile manager). Everything below is written to match the website **character for character**. The website, its structured data (schema) and `llms.txt` all use these exact strings, so Google and AI answer engines see one consistent entity.

---

## 1. Name, address, phone (copy exactly)

| Field | Value |
|---|---|
| Business name | `Saint Michael and Gabriel Romanian Orthodox Church` |
| Address | `590 S Vella Rd, Palm Springs, CA 92264` |
| Phone | `(760) 325-5388` |

- **Name.** Use only the real-world name, with no keywords or city added; Google suspends profiles for keyword-stuffed names. The parish seal reads "Holy Archangels Michael and Gabriel Romanian Orthodox Church", and Fr. Florin's email signature reads "Sts Michael and Gabriel Orthodox Church". The website keeps "Saint Michael and Gabriel…" and lists the other two as alternate names in the schema.
  - **TODO(decision):** confirm the official name with the parish. If it changes, change the GBP name, the website (`const NAME` in `src/i18n/en.ts`) and this checklist together.
- **Address.** Check that the map pin sits on the church building. Then copy the pin's coordinates into `geo` in `src/data/site.ts`. The current coordinates are approximate: OpenStreetMap only matched the street.
- **Phone.** Use the same number as the website. Don't add a second number unless the website shows it too.

## 2. Categories

- **Primary:** `Romanian Orthodox church`. If the category picker doesn't offer it, use `Orthodox church`. Type slowly in the category box; the list varies by country and changes over time.
- **Secondary (add those that exist):**
  - `Eastern Orthodox Church`
  - `Church`
  - `Place of worship`
  - `Religious organization`

## 3. Business description

Paste this English version into GBP; it's 727 of the 750 characters allowed. GBP shows one description, so use English. The Spanish and Romanian versions below are for your reference: social media, bulletins, or a future multilingual profile.

**English (727 characters):**

> Saint Michael and Gabriel is a Romanian Orthodox parish at 590 S Vella Rd in Palm Springs, California, celebrating the Divine Liturgy every Sunday from 10:00 to 11:50 a.m. in Romanian and English. Everyone is welcome, whether Orthodox by birth, exploring the faith, or simply curious. We serve the faithful of the Coachella Valley and Inland Empire, from Palm Springs, Palm Desert and Indio to Hemet and Redlands. Beyond worship, our parish is a living center of Romanian culture, gathering for traditional feasts, colinde (Romanian Christmas carols) and agape meals. Our patronal feast is the Synaxis of the Holy Archangels on November 8. Visiting for the first time? See What to Expect on our website, or call (760) 325-5388.

**Español (675 characters, reference only; DRAFT, needs native review):**

> Los Santos Arcángeles Miguel y Gabriel es una parroquia ortodoxa rumana en 590 S Vella Rd, Palm Springs, California, que celebra la Divina Liturgia cada domingo de 10:00 a 11:50 a.m. en rumano e inglés. Todos son bienvenidos: ortodoxos de nacimiento, quienes exploran la fe o simplemente sienten curiosidad. Servimos a los fieles del Valle de Coachella y el Inland Empire. Más allá del culto, somos un centro vivo de cultura rumana, con fiestas tradicionales, colinde (villancicos rumanos) y comidas ágape. Nuestra fiesta patronal es la Sínaxis de los Santos Arcángeles, el 8 de noviembre. ¿Primera visita? Consulte Qué Esperar en nuestro sitio web o llame al (760) 325-5388.

**Română (670 characters, reference only; DRAFT, needs native review):**

> Sfinții Arhangheli Mihail și Gavriil este o parohie ortodoxă română de la 590 S Vella Rd, Palm Springs, California, unde Sfânta Liturghie se săvârșește în fiecare duminică, între orele 10:00 și 11:50, în română și engleză. Toți sunt bineveniți: ortodocși din naștere, cei care descoperă credința sau cei pur și simplu curioși. Slujim credincioșii din Valea Coachella și Inland Empire. Dincolo de slujbe, parohia este un centru viu al culturii românești, cu praznice tradiționale, colinde și mese de agapă. Hramul bisericii este Soborul Sfinților Arhangheli, pe 8 noiembrie. Veniți pentru prima dată? Citiți Ce să Așteptați pe site-ul nostru sau sunați la (760) 325-5388.

## 4. Hours and service details

- **Regular hours:** Sunday `10:00 AM – 11:50 AM`. This matches the website and the schema (`openingHoursSpecification`).
  - **Monday to Saturday:** before marking these days "Closed", confirm with the parish whether anyone is at the church on weekdays. If the building is only open for services, "Closed" is accurate.
- **More hours:** if the profile offers a "More hours" type for services, add **Divine Liturgy: Sunday 10:00–11:50 AM** there too.
- **Special hours:** before each major feast (Nativity, Theophany, Pascha, the November 8 Synaxis), add special hours if extra services are held.
  - **TODO(content):** get the feast-day service times from the parish.
- **Attributes:** set only the ones the parish confirms. **TODO(content):** confirm each with the parish.
  - Wheelchair-accessible entrance, parking and restroom.
  - Free parking lot or street parking (this also fills the "Where do I park?" answer on the website).
  - Restroom available.

## 5. Website and contact links (with UTM tracking)

| GBP field | URL |
|---|---|
| Website | `https://psorthodoxro.org/?utm_source=google&utm_medium=organic&utm_campaign=gbp` |
| Appointment / contact link | `https://psorthodoxro.org/visit/?utm_source=google&utm_medium=organic&utm_campaign=gbp#contact` |

The UTM parameters let Plausible and Google Analytics count visits that come from the profile. Every page has a canonical tag, so these tracked URLs won't create duplicate pages in Google's index.

## 6. Photos to upload

Upload real, recent photos. Google favors profiles with many owner-uploaded photos.

| # | Photo | Notes |
|---|---|---|
| 1 | **Logo** | `public/roc_logo.png`, the round parish seal (square, at least 250×250) |
| 2 | **Cover image** | The church front. The source is `src/assets/images/church_front.jpg` (16:9 crops well from it) |
| 3 | **Exterior** | 3–5 views: front, side (`src/assets/gallery/side.jpg`), entrance, sign, parking area |
| 4 | **Interior** | Nave, icons, candle stands. **TODO(content):** from Fr. Florin |
| 5 | **Iconostasis** | A clear, well-lit photo. **TODO(content):** from Fr. Florin |
| 6 | **Divine Liturgy** | `src/assets/gallery/service.jpg`, plus more with permission from those pictured |
| 7 | **Community events** | Picnic, colinde, agape meal, children (`picnic.jpg`, `night.jpg`, `kids.jpg`). Get parents' permission for photos of children |
| 8 | **Patronal feast** | Synaxis, November 8, after this year's feast |

Add new photos every month or two. Photos of events (with permission) work well.

## 7. Google Posts plan

Posts appear on the profile and in search. Aim for 1–2 a month. Use "Event" posts for feasts, with a date, a short text and a photo, and link each one to the website page that fits it.

| When | Post | Link to |
|---|---|---|
| Early October | Hram coming up: Synaxis of the Holy Archangels, **November 8** (Event post) | `/worship/` |
| November 8 | Feast-day greeting and photos | `/community/gallery/` |
| Late November | St. Andrew, protector of Romania (Nov 30) and Romania's National Day (Dec 1) | `/our-parish/#tradition` |
| Early December | **Colinde**: carol evenings and caroling dates (Event post) | `/news-events/#calendar` |
| Mid-December | **Nativity of Christ** (Dec 25) service times (Event post) | `/worship/#schedule` |
| Early January | **Theophany / Boboteaza** (Jan 6), blessing of the waters | `/worship/` |
| Start of Great Lent (date varies) | Lent schedule, Holy Unction (Sfântul Maslu) | `/prayer/#healing` |
| Holy Week (date varies) | Palm Sunday (Florii), Holy Week and **Pascha** service times (Event post) | `/worship/#schedule` |
| Pascha | "Hristos a înviat! Christ is risen!" greeting and photos | `/community/gallery/` |
| Any time | "New to Orthodoxy?" invitation | `/worship/what-to-expect/` |

**TODO(content):** the parish should supply each year's dates and times. Pascha and Lent move every year; the parish calendar on `/news-events/` should hold the same dates as the posts.

## 8. Q&A seed questions

Google has been phasing out the public Q&A section on Maps. If your profile still shows "Questions & answers", post these from the owner account and answer them right away. The answers come from the What to Expect page; keep them word for word. If Q&A isn't available, use them as Google Posts or in your social media.

1. **How long is the Divine Liturgy?** The Sunday Divine Liturgy lasts a little under two hours, from about 10:00 to 11:50 a.m.
2. **What language is the service in?** The service is celebrated in Romanian and English.
3. **What should I wear?** Modest, respectful clothing, the kind you might wear to any special occasion. Above all, come as you are: you will be welcome.
4. **Where do I park?** **TODO(content):** parking details from the parish.
5. **Can I receive Holy Communion if I'm not Orthodox?** Holy Communion is received by Orthodox Christians who have prepared through prayer, fasting and confession. At the end of the Liturgy, everyone, Orthodox or not, is invited to receive the blessed bread (anafura). **REVIEW(Fr. Florin):** get his approval before posting.
6. **Are children welcome?** Yes! Children are welcome at every service.
7. **How do I talk to the priest or become Orthodox?** Greet Fr. Florin after the Liturgy or call (760) 325-5388. See our website: https://psorthodoxro.org/worship/what-to-expect/

## 9. Reviews: getting them and answering them

- **Ask.** In the GBP dashboard choose "Ask for reviews" to get a short review link. Share it in the bulletin, by email and after feasts. Ask everyone; never pick only happy reviewers ("review gating").
- **Never** offer anything in exchange for reviews, write reviews for the parish, or have staff review it. Google removes these and can penalize the profile.
- **Answer every review** within a few days, in the reviewer's language (English, Spanish or Romanian). Keep it short, warm and personal ("Thank you, Maria, we were glad to pray with you on Sunday").
- **Negative reviews:** reply calmly and briefly, and offer to talk privately ("Please call Fr. Florin at (760) 325-5388"). Never discuss confession, pastoral matters or anyone's personal details in public.
- **Responsibility:** decide who in the parish gets review notifications and answers them.

## 10. After the profile is confirmed: connect it to the website

- [ ] Copy the profile's public URL. In Google Maps, choose "Share", then "Copy link", or use the `https://maps.google.com/?cid=…` link from the dashboard.
- [ ] Add it to `sameAs` in `src/data/site.ts`, with any official Facebook, YouTube or Instagram pages. **TODO(config)**.
- [ ] Copy the exact map-pin coordinates into `geo` in `src/data/site.ts`. **TODO(config)**.
- [ ] Rebuild and deploy. The website's Church schema will then point to the profile, so Google can connect the two.
- [ ] Once a year, check that name, address, phone, hours and the summary sentence still match the website exactly.
