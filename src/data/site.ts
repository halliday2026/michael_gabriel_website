// Single source of truth for site-wide content and configuration.
// Per-client work is largely "fill this file in" — replace every
// REPLACE_ME token. Run `npm run check:strict` to confirm none remain.

export interface NavLink {
  label: string;
  href: string;
}

export interface ProgramImpactItem {
  icon: string;
  heading: string;
  blurb: string;
}

export interface Testimonial {
  quote: string;
  attribution: string;
  org: string;
}

export const site = {
  name: 'REPLACE_ME — organization name',
  tagline: 'REPLACE_ME — short tagline shown in the hero',
  description:
    'REPLACE_ME — one or two sentence meta description used for SEO and social previews.',
  url: 'https://REPLACE_ME.example.org',

  nav: [
    { label: 'Mission', href: '#mission' },
    { label: 'Programs', href: '#programs' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Get Involved', href: '#get-involved' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavLink[],

  contact: {
    email: 'REPLACE_ME@example.org',
    phone: 'REPLACE_ME — (555) 555-5555',
    address: 'REPLACE_ME — 123 Main St, Anytown, ST 00000',
  },

  // CI can pass an empty string '', which `??` would let through — `||` is
  // required so the placeholder fallback is used whenever the env var is unset.
  formspreeEndpoint:
    import.meta.env.PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/REPLACE_ME',

  hero: {
    headline: 'REPLACE_ME — hero headline',
    subhead: 'REPLACE_ME — supporting sentence beneath the headline',
    ctaLabel: 'REPLACE_ME — primary CTA label',
    ctaHref: '#get-involved',
    imageAlt: 'REPLACE_ME — describe the hero image for screen readers',
  },

  mission: {
    heading: 'REPLACE_ME — mission heading',
    body: 'REPLACE_ME — one or two paragraphs describing the mission. LOREM ipsum dolor sit amet placeholder copy goes here until the client supplies real content.',
  },

  programsImpact: {
    heading: 'REPLACE_ME — programs & impact heading',
    items: [
      {
        icon: '🌱',
        heading: 'REPLACE_ME — program one',
        blurb: 'REPLACE_ME — one sentence describing this program or impact area.',
      },
      {
        icon: '🤝',
        heading: 'REPLACE_ME — program two',
        blurb: 'REPLACE_ME — one sentence describing this program or impact area.',
      },
      {
        icon: '📈',
        heading: 'REPLACE_ME — program three',
        blurb: 'REPLACE_ME — one sentence describing this program or impact area.',
      },
    ] satisfies ProgramImpactItem[],
  },

  testimonials: {
    heading: 'REPLACE_ME — testimonials heading',
    items: [
      {
        quote: 'REPLACE_ME — a short quote about the organization.',
        attribution: 'REPLACE_ME — name',
        org: 'REPLACE_ME — affiliation',
      },
      {
        quote: 'REPLACE_ME — a short quote about the organization.',
        attribution: 'REPLACE_ME — name',
        org: 'REPLACE_ME — affiliation',
      },
    ] satisfies Testimonial[],
  },

  getInvolved: {
    heading: 'REPLACE_ME — get involved heading',
    body: 'REPLACE_ME — sentence inviting the visitor to donate or volunteer.',
    donateLabel: 'REPLACE_ME — Donate',
    donateHref: '#',
    volunteerLabel: 'REPLACE_ME — Volunteer',
    volunteerHref: '#',
  },

  contactSection: {
    heading: 'REPLACE_ME — contact heading',
    body: 'REPLACE_ME — sentence inviting the visitor to get in touch.',
  },
};

// Defaults to ON so that staging deployments never get indexed by search
// engines. CI can pass NOINDEX='' which `??` would not catch — `||` does.
export const NOINDEX = (process.env.NOINDEX || 'true').toLowerCase() !== 'false';

// Footer "Site by Halliday" credit. Set to false for white-label client work.
export const SHOW_HALLIDAY_CREDIT = true;
