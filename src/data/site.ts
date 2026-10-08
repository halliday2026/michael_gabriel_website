// Site-wide configuration. "Look" lives in global.css; all copy lives in
// src/i18n/{en,es,ro}.ts (one file per language).

import { en } from '../i18n/en';

export const site = {
  // English name, defined once in src/i18n/en.ts — used by schema and alt fallbacks.
  name: en.church.name,
  url:  'https://psorthodoxro.org',

  contact: {
    email:          'frfloriniftode@gmail.com',
    emailGeneral:   'romanianchurchps@gmail.com',
    emailPresident: 'pres.churchps@gmail.com',
    phone:          '(760) 325-5388',
    address:        '590 S Vella Rd, Palm Springs, CA 92264',
    streetAddress:  '590 S Vella Rd',
    addressLocality:'Palm Springs',
    addressRegion:  'CA',
    postalCode:     '92264',
  },

  // Phone in international format for structured data (same number as contact.phone)
  phoneIntl: '+1-760-325-5388',

  priest: {
    givenName:  'Florin',
    familyName: 'Iftode',
  },

  // TODO(config): approximate — OpenStreetMap matched Vella Road, not the house
  // number. Replace with the exact pin from the Google Business Profile / Google Maps.
  geo: { latitude: 33.8104, longitude: -116.4974 },

  // Cities named in the Welcome paragraph (schema areaServed)
  areaServed: [
    'Palm Springs', 'Palm Desert', 'Rancho Mirage', 'Cathedral City', 'Indio', 'La Quinta',
    'Desert Hot Springs', 'Hemet', 'Rancho Cucamonga', 'Redlands', 'Banning', 'Beaumont',
  ],

  // TODO(decision): confirm the diocese the parish belongs to.
  parentOrganization: {
    name: 'Romanian Orthodox Archdiocese of the Americas',
  },

  // TODO(config): add the Google Business Profile URL and any Facebook / YouTube /
  // Instagram pages once confirmed — they become schema `sameAs`.
  sameAs: [] as string[],

  // Google Search Console HTML-tag verification. The site is already verified with
  // public/googlef2ae0ced62d19fdc.html; this meta tag is optional.
  // TODO(config): paste the content="…" token if you switch to meta-tag verification.
  googleSiteVerification: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || '',

  // CI can pass an empty string '', which `??` would let through — `||` is
  // required so the placeholder fallback is used whenever the env var is unset.
  formspreeEndpoint:
    import.meta.env.PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xbdvekna',

  // Prayer requests (Prayer page). Formspree delivers to the address configured
  // for the form in the Formspree dashboard — not something the code can set.
  // TODO(config): confirm form xbdvekna delivers to frfloriniftode@gmail.com, or
  // create a dedicated prayer form and set PUBLIC_FORMSPREE_PRAYER_ENDPOINT.
  prayerFormEndpoint:
    import.meta.env.PUBLIC_FORMSPREE_PRAYER_ENDPOINT ||
    import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ||
    'https://formspree.io/f/xbdvekna',

  // Announcement line above the church name on the home page. Its text is
  // `hero.announcement` in each dictionary (default: the patronal feast, Nov 8).
  // Shown by default. To show it only during a date range, set start and/or end
  // (YYYY-MM-DD, inclusive, Pacific time); leave both empty to always show it.
  announcement: {
    enabled: true,
    start: '',
    end: '',
  },

  // "View Orthodox Calendar" link in the Welcome section, per language.
  // RO keeps the Romanian daily calendar; EN/ES point to an English-language one.
  // TODO(decision): confirm the EN/ES calendar (OCA "Lives of the Saints" follows the
  // same Revised Julian calendar as the Romanian Church) or set to '' to hide the button.
  orthodoxCalendarUrl: {
    en: 'https://www.oca.org/saints/lives',
    es: 'https://www.oca.org/saints/lives',
    ro: 'https://www.noutati-ortodoxe.ro/calendar-ortodox/',
  } as Record<'en' | 'es' | 'ro', string>,

  // Google Calendar shown on News & Events. Empty → a visible placeholder is shown.
  // TODO(config): set to the parish's public Google Calendar ID
  // (Google Calendar → Settings → the calendar → "Integrate calendar" → Calendar ID),
  // and make the calendar public ("Make available to public").
  googleCalendarId: import.meta.env.PUBLIC_GOOGLE_CALENDAR_ID || '',
};

/** tel: href for a display-formatted US phone number. */
export function telHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, '')}`;
}

export const SHOW_HALLIDAY_CREDIT = true;
