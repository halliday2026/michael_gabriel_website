// Photo gallery — used by the Photo Gallery page (grid + lightbox) and the
// Community carousel.
//
// To add a photo:
//   1. Drop the image file (jpg / png / webp) into src/assets/gallery/.
//   2. Add an entry below with its file name and alt text in all three languages.
//      Describe what the photo shows (no "image of…"). Order here = order on the page.
//   3. Set `carousel: true` to also show it in the Community carousel.
// The build creates optimized AVIF/WebP versions automatically.
//
// ES and RO alt text: DRAFT — NEEDS NATIVE REVIEW.

import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n/routes';

export interface GalleryEntry {
  file: string;
  alt: Record<Locale, string>;
  carousel?: boolean;
  /** CSS object-position for cropped views (carousel / grid thumbnails). */
  position?: string;
}

export const gallery: GalleryEntry[] = [
  {
    file: 'front.jpg',
    carousel: true,
    alt: {
      en: 'The church’s front entrance',
      es: 'Entrada principal de la iglesia',
      ro: 'Intrarea principală a bisericii',
    },
  },
  {
    file: 'kids.jpg',
    carousel: true,
    alt: {
      en: 'Children of the parish at church',
      es: 'Niños de la parroquia en la iglesia',
      ro: 'Copiii parohiei la biserică',
    },
  },
  {
    file: 'night.jpg',
    carousel: true,
    alt: {
      en: 'The parish gathered for an evening celebration',
      es: 'La parroquia reunida en una celebración nocturna',
      ro: 'Parohia adunată la o sărbătoare de seară',
    },
  },
  {
    file: 'picnic.jpg',
    carousel: true,
    alt: {
      en: 'Parish picnic outdoors',
      es: 'Picnic parroquial al aire libre',
      ro: 'Picnic parohial în aer liber',
    },
  },
  {
    file: 'service.jpg',
    carousel: true,
    alt: {
      en: 'The Divine Liturgy being celebrated',
      es: 'Celebración de la Divina Liturgia',
      ro: 'Săvârșirea Sfintei Liturghii',
    },
  },
  {
    file: 'side.jpg',
    carousel: true,
    position: 'center 80%',
    alt: {
      en: 'Side view of the church building',
      es: 'Vista lateral del edificio de la iglesia',
      ro: 'Vedere laterală a clădirii bisericii',
    },
  },
];

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true });

/** Resolve a gallery entry's file name to its imported image (fails the build if missing). */
export function galleryImage(file: string): ImageMetadata {
  const mod = files[`../assets/gallery/${file}`];
  if (!mod) throw new Error(`Gallery image not found: src/assets/gallery/${file}`);
  return mod.default;
}
