// Announcements and Parish News for the News & Events page.
//
// To add an item, copy the example below into the right list (newest first is
// not required — items are sorted by date automatically). Every item needs a
// title and body in all three languages. Body paragraphs are separated by a
// blank line ("\n\n"). Dates are YYYY-MM-DD.
//
//   {
//     date: '2026-11-08',
//     title: {
//       en: 'Feast of the Holy Archangels',
//       es: 'Fiesta de los Santos Arcángeles',
//       ro: 'Hramul Sfinților Arhangheli',
//     },
//     body: {
//       en: 'English text…',
//       es: 'Texto en español…',
//       ro: 'Text în română…',
//     },
//   },
//
// TODO(content): announcements and parish news — from the parish.

import type { Locale } from '../i18n/routes';

export interface NewsItem {
  date: string;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
}

export const announcements: NewsItem[] = [];

export const parishNews: NewsItem[] = [];

export function sortByDateDesc(items: NewsItem[]): NewsItem[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date));
}
