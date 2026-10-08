import { en, type Dict } from './en';
import { es } from './es';
import { ro } from './ro';
import type { Locale } from './routes';

export * from './routes';
export type { Dict };

export const dictionaries: Record<Locale, Dict> = { en, es, ro };

/** Language names shown in the toggle, written in their own language. */
export const languageNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  ro: 'Română',
};

export function t(lang: Locale): Dict {
  return dictionaries[lang];
}
