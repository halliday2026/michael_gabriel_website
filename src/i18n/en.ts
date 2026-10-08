// English copy — the source of truth for the dictionary shape.
// es.ts and ro.ts are typed against `Dict`, so a missing or extra key fails the build.

export const en = {
  church: {
    // The one place the church's English name is defined.
    name:    'Saint Michael and Gabriel Romanian Orthodox Church',
    tagline: 'Romanian Orthodox Parish — Palm Springs, California',
  },

  ui: {
    skipToContent: 'Skip to content',
    mainNav:       'Main',
    language:      'Language',
    openMenu:      'Open menu',
    showSubmenu:   'Show submenu',
    breadcrumb:    'Breadcrumb',
    comingSoon:    '[Content coming soon — to be provided by the parish]',
    photoComingSoon: '[Photo coming soon — to be provided by the parish]',
    learnMore:     'Learn more',
  },

  images: {
    headerLogoAlt: 'Saint Michael and Gabriel Romanian Orthodox Church — home page',
    sealAlt:
      'Parish seal: icon of the Holy Archangels Michael and Gabriel, ringed by the words “Holy Archangels Michael and Gabriel Romanian Orthodox Church P.S.”',
    churchFrontAlt: 'Front exterior of Saint Michael and Gabriel Romanian Orthodox Church in Palm Springs',
    communityAlt:   'Parishioners gathered together at a parish event',
    carousel: {
      front:   'The church’s front entrance',
      kids:    'Children of the parish at church',
      night:   'The parish gathered for an evening celebration',
      picnic:  'Parish picnic outdoors',
      service: 'The Divine Liturgy being celebrated',
      side:    'Side view of the church building',
    },
  },

  menu: {
    home:       'Home',
    ourParish:  'Our Parish',
    worship:    'Worship',
    prayer:     'Prayer',
    community:  'Community',
    learn:      'Learn',
    newsEvents: 'News & Events',
    visit:      'Visit Us',
    donate:     'Donate',

    about:     'About Us',
    clergy:    'Our Clergy',
    history:   'Our History',
    tradition: 'Romanian Orthodox Tradition',

    liturgy:      'Divine Liturgy',
    schedule:     'Services & Schedule',
    sacraments:   'Sacraments',
    confession:   'Confession',
    whatToExpect: 'What to Expect',

    request: 'Request a Prayer',
    candle:  'Light a Candle',
    names:   'Submit Names for Prayer',
    healing: 'Prayer & Healing',

    parishLife: 'Parish Life',
    ministries: 'Ministries',
    youth:      'Children & Youth',
    events:     'Events',
    gallery:    'Photo Gallery',

    beliefs:       'What We Believe',
    orthodoxFaith: 'Orthodox Faith',
    sermons:       'Sermons & Teachings',
    catechism:     'Catechism',

    calendar:      'Parish Calendar',
    announcements: 'Announcements',
    news:          'Parish News',
  },

  // <title> and meta description per page
  meta: {
    home: {
      title:       'Saint Michael and Gabriel Romanian Orthodox Church',
      description: 'Romanian Orthodox parish serving the faithful across the Coachella Valley and Inland Empire. Divine Liturgy every Sunday, 10:00–11:50 a.m., in Romanian and English.',
    },
    ourParish: {
      title:       'Our Parish | Romanian Orthodox Church, Palm Springs',
      description: 'Learn about Saint Michael and Gabriel Romanian Orthodox Church in Palm Springs, California: our parish, our clergy, our history and our Romanian Orthodox tradition.',
    },
    worship: {
      title:       'Worship & Divine Liturgy Schedule | Palm Springs',
      description: 'Divine Liturgy every Sunday, 10:00–11:50 a.m., in Romanian and English at Saint Michael and Gabriel Romanian Orthodox Church, 590 S Vella Rd, Palm Springs.',
    },
    whatToExpect: {
      title:       'What to Expect at an Orthodox Liturgy | Palm Springs',
      description: 'New to Orthodoxy? A friendly guide to visiting Saint Michael and Gabriel Romanian Orthodox Church in Palm Springs for the Sunday Divine Liturgy.',
    },
    prayer: {
      title:       'Request a Prayer | Romanian Orthodox Church Palm Springs',
      description: 'Ask the parish of Saint Michael and Gabriel in Palm Springs to pray for you and your loved ones, living and departed, and learn about prayer for healing.',
    },
    community: {
      title:       'Parish Community & Culture | Coachella Valley',
      description: 'Parish life at Saint Michael and Gabriel Romanian Orthodox Church: Romanian feasts, colinde, agape meals and friendship across the Coachella Valley.',
    },
    gallery: {
      title:       'Photo Gallery | Romanian Orthodox Church Palm Springs',
      description: 'Photos of Saint Michael and Gabriel Romanian Orthodox Church in Palm Springs: our church building, the Divine Liturgy and parish life in the Coachella Valley.',
    },
    learn: {
      title:       'Learn About the Orthodox Faith | Palm Springs Parish',
      description: 'An introduction to the Orthodox Christian faith and the Romanian Orthodox tradition from Saint Michael and Gabriel Romanian Orthodox Church, Palm Springs.',
    },
    newsEvents: {
      title:       'News & Events | Romanian Orthodox Church Palm Springs',
      description: 'Parish calendar, announcements and news from Saint Michael and Gabriel Romanian Orthodox Church, serving the Coachella Valley and Inland Empire.',
    },
    visit: {
      title:       'Visit Us | 590 S Vella Rd, Palm Springs, CA',
      description: 'Visit Saint Michael and Gabriel Romanian Orthodox Church at 590 S Vella Rd, Palm Springs, CA 92264. Divine Liturgy Sundays 10:00–11:50 a.m. Map and contact form.',
    },
    donate: {
      title:       'Donate | Support Our Palm Springs Orthodox Parish',
      description: 'Support Saint Michael and Gabriel Romanian Orthodox Church in Palm Springs. Your gift sustains worship and ministry across the Coachella Valley. Give via Zelle.',
    },
  },

  // Page-level H1 + opening summary for interior pages
  pages: {
    ourParish: {
      heading: 'Our Parish',
      intro:   'Saint Michael and Gabriel is a Romanian Orthodox parish in Palm Springs, California, serving the faithful of the Coachella Valley and Inland Empire.',
    },
    worship: {
      heading: 'Worship',
      intro:   'The Divine Liturgy is celebrated every Sunday from 10:00 to 11:50 a.m., in Romanian and English, at 590 S Vella Rd in Palm Springs.',
    },
    whatToExpect: {
      heading: 'What to Expect',
      intro:   'A welcoming guide for anyone visiting an Orthodox Divine Liturgy for the first time.',
    },
    prayer: {
      heading: 'Prayer',
      intro:   'The parish prays for the living and the departed. You may ask us to pray for you and for those you love.',
    },
    community: {
      heading: 'Community',
      intro:   'Our parish family gathers throughout the year for worship, Romanian feasts, colinde and fellowship across the Coachella Valley and Inland Empire.',
    },
    gallery: {
      heading: 'Photo Gallery',
      intro:   'Photos of our church and parish life.',
    },
    learn: {
      heading: 'Learn',
      intro:   'An introduction to the Orthodox Christian faith and to the Romanian Orthodox tradition.',
    },
    newsEvents: {
      heading: 'News & Events',
      intro:   'The parish calendar, announcements and news from Saint Michael and Gabriel Romanian Orthodox Church.',
    },
    visit: {
      heading: 'Visit Us',
      intro:   'Saint Michael and Gabriel Romanian Orthodox Church is at 590 S Vella Rd, Palm Springs, CA 92264. The Divine Liturgy is celebrated every Sunday, 10:00–11:50 a.m.',
    },
    donate: {
      heading: 'Donate',
      intro:   'Your gifts sustain the worship and ministry of our parish.',
    },
  },

  hero: {
    patronFeast:  'Synaxis of the Holy Archangels — November 8',
    welcome:      'Welcome to your spiritual home in the Coachella Valley.',
    liturgyBadge: 'Divine Liturgy: Every Sunday, 10:00–11:50 a.m.',
  },

  welcome: {
    heading: 'Welcome to Our Parish',
    body1:
      'Saint Michael and Gabriel Romanian Orthodox Church warmly welcomes all who seek worship, fellowship, and a spiritual home. Whether you are Orthodox by birth, exploring the faith, or simply curious, our doors are open to you.',
    body2:
      'We serve the Romanian Orthodox faithful across the Coachella Valley and Inland Empire — Palm Springs, Palm Desert, Rancho Mirage, Cathedral City, Indio, La Quinta, Desert Hot Springs, Hemet, Rancho Cucamonga, Redlands, Banning, Beaumont, and surrounding communities.',
    body3:
      'For many of our faithful, this parish is more than a place of worship — it is a cultural home, where the Romanian language, traditions, and way of life are kept alive far from home.',
    calendarNote: 'View Orthodox Calendar',
  },

  liturgies: {
    heading:     'Divine Services',
    colService:  'Service',
    colSchedule: 'Schedule',
    colLanguage: 'Language',
    note:        'For baptisms, weddings, and memorial services (parastase), please contact the parish priest directly.',
    sunday:     { name: 'Divine Liturgy',                schedule: 'Sundays, 10:00–11:50 a.m.', language: 'Romanian & English' },
    vespers:    { name: 'Vespers',                       schedule: 'To be announced',           language: 'Romanian & English' },
    confession: { name: 'Confession',                    schedule: 'Upon request',              language: 'Romanian & English' },
    feastDays:  { name: 'Feast Days & Special Services', schedule: 'To be announced',           language: 'Romanian & English' },
  },

  clergy: {
    heading:    'Our Clergy',
    subhead:    'Parish Priest',
    name:       'Rev. Fr. Florin Iftode',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    note:       'Orthodox faithful are always welcome to contact Father directly for spiritual guidance, sacramental needs, or parish inquiries.',
  },

  community: {
    heading: 'Community & Culture',
    body:
      'Beyond worship, Holy Archangels is a living center of Romanian culture in Southern California. Our parish family gathers throughout the year to celebrate traditional feasts, sing colinde (Romanian Christmas carols), share agape meals, and build lasting friendships across the Coachella Valley and Inland Empire.',
    carouselLabel: 'Parish photos',
    prevImage:     'Previous image',
    nextImage:     'Next image',
    goToImage:     'Go to image',
  },

  visit: {
    heading:      'Visit Us',
    addressLabel: 'Address',
    directions:   'Get Directions',
    mapHeading:   'Map & Directions',
    mapTitle:     'Map of 590 S Vella Rd, Palm Springs, CA 92264',
  },

  donate: {
    heading: 'Support Our Parish',
    body:
      'Your generous gift sustains our worship, cultural programs, and ministry to the faithful across the Coachella Valley and Inland Empire. Every contribution, large or small, makes a difference.',
    zelleLabel:  'Pay via Zelle',
    zelleCopied: 'Copied!',
    zelleHint:   'Open your banking app, choose Zelle, and paste to send your gift.',
  },

  contact: {
    heading:            'Get in Touch',
    body:               'We would love to hear from you. Send us a message and a member of our parish will be in touch.',
    nameLabel:          'Name',
    emailLabel:         'Email',
    messageLabel:       'Message',
    namePlaceholder:    'Your name',
    emailPlaceholder:   'Your email address',
    messagePlaceholder: 'Your message',
    submit:             'Send Message',
    sending:            'Sending…',
    thanksHeading:      'Thank you!',
    thanksBody:         'Your message has been received. Fr. Florin will be in touch with you soon.',
    error:              'Something went wrong — please try again or email us directly.',
  },

  footer: {
    contactHeading: 'Contact',
    phoneLabel:     'Phone',
    addressLabel:   'Address',
    emailGeneral:   'General & Donations',
    emailPresident: 'Parish President',
    emailPriest:    'Parish Priest',
    rights:         'All rights reserved.',
    websiteBy:      'Website by',
  },
};

export type Dict = typeof en;
