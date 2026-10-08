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

  // CI can pass an empty string '', which `??` would let through — `||` is
  // required so the placeholder fallback is used whenever the env var is unset.
  formspreeEndpoint:
    import.meta.env.PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xbdvekna',
};

/** tel: href for a display-formatted US phone number. */
export function telHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, '')}`;
}

export const SHOW_HALLIDAY_CREDIT = true;
