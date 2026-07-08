// Single source of truth for site-wide configuration and trilingual content.
// "Look" lives in global.css; all copy lives here.
//
// ES and RO translations are DRAFT — NEEDS NATIVE REVIEW before launch.
// Romanian liturgical vocabulary especially must be verified by the parish
// before the site goes live.

export interface NavItem {
  key: string;
  href: string;
}

export const site = {
  name: 'Saint Michael and Gabriel Romanian Orthodox Church',
  tagline: 'Romanian Orthodox Parish — Palm Springs, California',
  description:
    'Romanian Orthodox parish serving the faithful across the Coachella Valley and Inland Empire. Divine Liturgy every Sunday, 10:00–11:50 a.m., in Romanian and English.',
  url: 'https://psorthodoxro.org',

  // nav keys map to content[lang].nav[key] — hrefs are anchor IDs, not translated
  nav: [
    { key: 'about',     href: '#welcome'   },
    { key: 'services',  href: '#services'  },
    { key: 'clergy',    href: '#clergy'    },
    { key: 'community', href: '#community' },
    { key: 'visit',     href: '#visit'     },
    { key: 'donate',    href: '#donate'    },
    { key: 'contact',   href: '#contact'   },
  ] satisfies NavItem[],

  contact: {
    email:          'frfloriniftode@gmail.com',
    emailGeneral:   'romanianchurchps@gmail.com',
    emailPresident: 'pres.churchps@gmail.com',
    phone:          '760-578-2052',
    address:        '590 S Vella Rd, Palm Springs, CA 92264',
  },

  // CI can pass an empty string '', which `??` would let through — `||` is
  // required so the placeholder fallback is used whenever the env var is unset.
  formspreeEndpoint:
    import.meta.env.PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/REPLACE_ME',
};

export const NOINDEX = (import.meta.env.NOINDEX || 'true').toLowerCase() !== 'false';
export const SHOW_HALLIDAY_CREDIT = true;

// ---------------------------------------------------------------------------
// Trilingual content
// ---------------------------------------------------------------------------

export const content = {
  en: {
    nav: {
      about:     'About',
      services:  'Services',
      clergy:    'Clergy',
      community: 'Community',
      visit:     'Visit Us',
      donate:    'Donate',
      contact:   'Contact',
    },

    hero: {
      headline:     'Saint Michael and Gabriel Romanian Orthodox Church',
      patronFeast:  'Synaxis of the Holy Archangels — November 8',
      welcome:      'Welcome to your spiritual home in the Coachella Valley.',
      liturgyBadge: 'Divine Liturgy: Every Sunday, 10:00–11:50 a.m.',
      cta1:         'Visit Us',
      cta2:         'Donate',
      cta3:         'Contact',
      imageAlt:     'Icon of the Holy Archangels Michael and Gabriel',
    },

    welcome: {
      heading:      'Welcome to Our Parish',
      body1:
        'Saint Michael and Gabriel Romanian Orthodox Church warmly welcomes all who seek worship, fellowship, and a spiritual home. Whether you are Orthodox by birth, exploring the faith, or simply curious, our doors are open to you.',
      body2:
        'We serve the Romanian Orthodox faithful across the Coachella Valley and Inland Empire — Palm Springs, Palm Desert, Rancho Mirage, Cathedral City, Indio, La Quinta, Desert Hot Springs, Hemet, Rancho Cucamonga, Redlands, Banning, Beaumont, and surrounding communities.',
      body3:
        'For many of our faithful, this parish is more than a place of worship — it is a cultural home, where the Romanian language, traditions, and way of life are kept alive far from home.',
      calendarNote: 'Calendar followed (New / Old): REPLACE_ME',
    },

    liturgies: {
      heading:    'Divine Services',
      colService: 'Service',
      colSchedule:'Schedule',
      colLanguage:'Language',
      note:       'For baptisms, weddings, and memorial services (parastase), please contact the parish priest directly.',
      sunday:     { name: 'Divine Liturgy',                       schedule: 'Sundays, 10:00–11:50 a.m.', language: 'Romanian & English' },
      vespers:    { name: 'Vespers',                              schedule: 'REPLACE_ME',                language: 'REPLACE_ME'          },
      confession: { name: 'Confession',                           schedule: 'REPLACE_ME',                language: 'REPLACE_ME'          },
      feastDays:  { name: 'Feast Days & Special Services',        schedule: 'REPLACE_ME',                language: 'REPLACE_ME'          },
    },

    clergy: {
      heading: 'Our Clergy',
      subhead: 'Parish Priest',
      name:    'Rev. Fr. Florin Iftode',
      phone:   '760-578-2052',
      email:   'frfloriniftode@gmail.com',
      note:    'Orthodox faithful are always welcome to contact Father directly for spiritual guidance, sacramental needs, or parish inquiries.',
    },

    community: {
      heading: 'Community & Culture',
      body:
        'Beyond worship, Holy Archangels is a living center of Romanian culture in Southern California. Our parish family gathers throughout the year to celebrate traditional feasts, sing colinde (Romanian Christmas carols), share agape meals, and build lasting friendships across the Coachella Valley and Inland Empire.',
      photo0: 'Caroling (Colinde) — Christmas Season',
      photo1: 'Feast-Day Agape Meal',
      photo2: 'Parish Choir',
      photo3: 'Community Picnic',
    },

    visit: {
      heading:         'Visit Us',
      addressLabel:    'Address',
      mapPlaceholder:  'Map coming soon — address will appear here',
    },

    donate: {
      heading: 'Support Our Parish',
      body:
        'Your generous gift sustains our worship, cultural programs, and ministry to the faithful across the Coachella Valley and Inland Empire. Every contribution, large or small, makes a difference.',
      cta:         'Donate to the Parish',
      zelleLabel:  'Pay via Zelle',
      zelleCopied: 'Copied!',
      zelleHint:   'Open your banking app, choose Zelle, and paste to send your gift.',
    },

    contact: {
      heading:            'Get in Touch',
      body:               'We would love to hear from you. Send us a message and a member of our parish will be in touch.',
      namePlaceholder:    'Your name',
      emailPlaceholder:   'Your email address',
      messagePlaceholder: 'Your message',
      submit:             'Send Message',
    },

    footer: {
      tagline: 'Romanian Orthodox Parish — Palm Springs, California',
      rights:  'All rights reserved.',
    },
  },

  // DRAFT — NEEDS NATIVE REVIEW before launch
  es: {
    nav: {
      about:     'Acerca de',
      services:  'Servicios',
      clergy:    'Clero',
      community: 'Comunidad',
      visit:     'Visítenos',
      donate:    'Donar',
      contact:   'Contacto',
    },

    hero: {
      headline:     'Iglesia Ortodoxa Rumana de los Santos Arcángeles Miguel y Gabriel',
      patronFeast:  'Sínaxis de los Santos Arcángeles — 8 de noviembre',
      welcome:      'Bienvenido a su hogar espiritual en el Valle de Coachella.',
      liturgyBadge: 'Divina Liturgia: Domingos, 10:00–11:50 a.m.',
      cta1:         'Visítenos',
      cta2:         'Donar',
      cta3:         'Contacto',
      imageAlt:     'Ícono de los Santos Arcángeles Miguel y Gabriel',
    },

    welcome: {
      heading:      'Bienvenido a Nuestra Parroquia',
      body1:
        'La Iglesia Ortodoxa Rumana de los Santos Arcángeles Miguel y Gabriel da la bienvenida a todos los que buscan adoración, comunidad y un hogar espiritual. Ya sea que sea ortodoxo de nacimiento, esté explorando la fe o simplemente tenga curiosidad, nuestras puertas están abiertas para usted.',
      body2:
        'Servimos a la comunidad ortodoxa rumana en todo el Valle de Coachella y el Inland Empire — Palm Springs, Palm Desert, Rancho Mirage, Cathedral City, Indio, La Quinta, Desert Hot Springs, Hemet, Rancho Cucamonga, Redlands, Banning, Beaumont y las comunidades circundantes.',
      body3:
        'Para muchos de nuestros fieles, esta parroquia es más que un lugar de culto — es un hogar cultural, donde el idioma rumano, las tradiciones y la forma de vida se mantienen vivos lejos del hogar.',
      calendarNote: 'Calendario seguido (Nuevo / Antiguo): REPLACE_ME',
    },

    liturgies: {
      heading:    'Servicios Divinos',
      colService: 'Servicio',
      colSchedule:'Horario',
      colLanguage:'Idioma',
      note:       'Para bautizos, bodas y servicios conmemorativos (parastase), comuníquese directamente con el sacerdote parroquial.',
      sunday:     { name: 'Divina Liturgia',                        schedule: 'Domingos, 10:00–11:50 a.m.',  language: 'Rumano e inglés' },
      vespers:    { name: 'Vísperas',                               schedule: 'REPLACE_ME',                  language: 'REPLACE_ME'      },
      confession: { name: 'Confesión',                              schedule: 'REPLACE_ME',                  language: 'REPLACE_ME'      },
      feastDays:  { name: 'Días de Fiesta y Servicios Especiales',  schedule: 'REPLACE_ME',                  language: 'REPLACE_ME'      },
    },

    clergy: {
      heading: 'Nuestro Clero',
      subhead: 'Sacerdote Parroquial',
      name:    'Rev. Fr. Florin Iftode',
      phone:   '760-578-2052',
      email:   'frfloriniftode@gmail.com',
      note:    'Los fieles ortodoxos siempre son bienvenidos a contactar directamente al Padre para orientación espiritual, necesidades sacramentales o consultas parroquiales.',
    },

    community: {
      heading: 'Comunidad y Cultura',
      body:
        'Más allá del culto, los Santos Arcángeles es un centro vivo de cultura rumana en el sur de California. Nuestra familia parroquial se reúne durante todo el año para celebrar fiestas tradicionales, cantar colinde (villancicos navideños rumanos), compartir comidas ágape y construir amistades duraderas.',
      photo0: 'Villancicos (Colinde) — Temporada Navideña',
      photo1: 'Comida Ágape del Día de Fiesta',
      photo2: 'Coro Parroquial',
      photo3: 'Picnic Comunitario',
    },

    visit: {
      heading:         'Visítenos',
      addressLabel:    'Dirección',
      mapPlaceholder:  'Mapa próximamente — la dirección aparecerá aquí',
    },

    donate: {
      heading: 'Apoye Nuestra Parroquia',
      body:
        'Su generoso donativo sostiene nuestro culto, programas culturales y ministerio a los fieles en todo el Valle de Coachella y el Inland Empire. Cada contribución, grande o pequeña, hace la diferencia.',
      cta:         'Donar a la Parroquia',
      zelleLabel:  'Pagar con Zelle',
      zelleCopied: '¡Copiado!',
      zelleHint:   'Abra su aplicación bancaria, seleccione Zelle y pegue el correo para enviar su donativo.',
    },

    contact: {
      heading:            'Póngase en Contacto',
      body:               'Nos encantaría saber de usted. Envíenos un mensaje y un representante de nuestra parroquia se pondrá en contacto con usted.',
      namePlaceholder:    'Su nombre',
      emailPlaceholder:   'Su correo electrónico',
      messagePlaceholder: 'Su mensaje',
      submit:             'Enviar Mensaje',
    },

    footer: {
      tagline: 'Parroquia Ortodoxa Rumana — Palm Springs, California',
      rights:  'Todos los derechos reservados.',
    },
  },

  // DRAFT — NEEDS NATIVE REVIEW before launch.
  // Liturgical terms (Sfânta Liturghie, Vecernia, Spovedania, parastas, colinde)
  // must be verified by the parish before going live.
  ro: {
    nav: {
      about:     'Despre noi',
      services:  'Slujbe',
      clergy:    'Cler',
      community: 'Comunitate',
      visit:     'Vizitați-ne',
      donate:    'Donați',
      contact:   'Contact',
    },

    hero: {
      headline:     'Biserica Ortodoxă Română a Sfinților Arhangheli Mihail și Gavriil',
      patronFeast:  'Soborul Sfinților Arhangheli Mihail și Gavriil — 8 noiembrie',
      welcome:      'Bine ați venit la casa voastră spirituală în Valea Coachella.',
      liturgyBadge: 'Sfânta Liturghie: În fiecare duminică, 10:00–11:50 a.m.',
      cta1:         'Vizitați-ne',
      cta2:         'Donați',
      cta3:         'Contact',
      imageAlt:     'Icoana Sfinților Arhangheli Mihail și Gavriil',
    },

    welcome: {
      heading:      'Bine ați venit la Parohia noastră',
      body1:
        'Biserica Ortodoxă Română a Sfinților Arhangheli Mihail și Gavriil îi primește cu căldură pe toți cei care caută rugăciune, comunitate și un cămin spiritual. Fie că ești ortodox prin botez, că explorezi credința sau ești pur și simplu curios, ușile noastre îți sunt deschise.',
      body2:
        'Slujim comunitatea ortodoxă română din toată Valea Coachella și Inland Empire — Palm Springs, Palm Desert, Rancho Mirage, Cathedral City, Indio, La Quinta, Desert Hot Springs, Hemet, Rancho Cucamonga, Redlands, Banning, Beaumont și împrejurimile.',
      body3:
        'Pentru mulți dintre credincioșii noștri, această parohie este mai mult decât un lăcaș de rugăciune — este un cămin cultural, un loc în care limba română, tradițiile și valorile sunt păstrate vii departe de țară.',
      calendarNote: 'Calendar folosit (Nou / Vechi): REPLACE_ME',
    },

    liturgies: {
      heading:    'Sfintele Slujbe',
      colService: 'Slujbă',
      colSchedule:'Program',
      colLanguage:'Limbă',
      note:       'Pentru botezuri, cununii și parastase, vă rugăm să contactați direct preotul parohiei.',
      sunday:     { name: 'Sfânta Liturghie',                    schedule: 'Duminica, 10:00–11:50 a.m.', language: 'Română și engleză' },
      vespers:    { name: 'Vecernia',                             schedule: 'REPLACE_ME',                 language: 'REPLACE_ME'        },
      confession: { name: 'Spovedania',                           schedule: 'REPLACE_ME',                 language: 'REPLACE_ME'        },
      feastDays:  { name: 'Sărbători și Slujbe Speciale',         schedule: 'REPLACE_ME',                 language: 'REPLACE_ME'        },
    },

    clergy: {
      heading: 'Clerul nostru',
      subhead: 'Preotul Parohiei',
      name:    'Pr. Florin Iftode',
      phone:   '760-578-2052',
      email:   'frfloriniftode@gmail.com',
      note:    'Credincioșii ortodocși sunt întotdeauna bineveniți să ia legătura direct cu Părintele pentru îndrumare duhovnicească, nevoi sacramentale sau întrebări parohiale.',
    },

    community: {
      heading: 'Comunitate și Cultură',
      body:
        'Dincolo de slujbele religioase, parohia Sfinților Arhangheli este un centru viu al culturii românești din sudul Californiei. Familia noastră parohială se adună de-a lungul anului pentru a sărbători praznicele tradiționale, a cânta colinde, a împărți masa agapei și a lega prietenii durabile.',
      photo0: 'Colinde — Sărbătoarea Crăciunului',
      photo1: 'Masa Agapei de Praznic',
      photo2: 'Corul Parohial',
      photo3: 'Picnic Comunitar',
    },

    visit: {
      heading:         'Vizitați-ne',
      addressLabel:    'Adresă',
      mapPlaceholder:  'Hartă în curând — adresa va apărea aici',
    },

    donate: {
      heading: 'Sprijiniți Parohia noastră',
      body:
        'Darul dvs. generos susține slujbele, programele culturale și misiunea parohiei în toată Valea Coachella și Inland Empire. Fiecare contribuție, mare sau mică, face diferența.',
      cta:         'Donați Parohiei',
      zelleLabel:  'Plătiți prin Zelle',
      zelleCopied: 'Copiat!',
      zelleHint:   'Deschideți aplicația băncii dvs., alegeți Zelle și lipiți adresa pentru a trimite darul.',
    },

    contact: {
      heading:            'Luați Legătura',
      body:               'Ne-ar face plăcere să auzim de la dvs. Trimiteți-ne un mesaj și un reprezentant al parohiei vă va contacta.',
      namePlaceholder:    'Numele dvs.',
      emailPlaceholder:   'Adresa dvs. de email',
      messagePlaceholder: 'Mesajul dvs.',
      submit:             'Trimiteți Mesajul',
    },

    footer: {
      tagline: 'Parohie Ortodoxă Română — Palm Springs, California',
      rights:  'Toate drepturile rezervate.',
    },
  },
} as const;

export type Locale = keyof typeof content;
