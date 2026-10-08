// English copy — the source of truth for the dictionary shape.
// es.ts and ro.ts are typed against `Dict`, so a missing or extra key fails the build.

// The church's name in this language — defined once; strings below reference it.
const NAME = 'Saint Michael and Gabriel Romanian Orthodox Church';
const SHORT_NAME = 'Saint Michael and Gabriel';

export const en = {
  church: {
    // The one place the church's English name is defined.
    name:    NAME,
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
    headerLogoAlt: `${NAME} — home page`,
    sealAlt:
      'Parish seal: icon of the Holy Archangels Michael and Gabriel, ringed by the words “Holy Archangels Michael and Gabriel Romanian Orthodox Church P.S.”',
    churchFrontAlt: `Front exterior of ${NAME} in Palm Springs`,
    communityAlt:   'Parishioners gathered together at a parish event',
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
      title:       `${NAME}`,
      description: 'Romanian Orthodox parish serving the faithful across the Coachella Valley and Inland Empire. Divine Liturgy every Sunday, 10:00–11:50 a.m., in Romanian and English.',
    },
    ourParish: {
      title:       'Our Parish | Romanian Orthodox Church, Palm Springs',
      description: `Learn about ${NAME} in Palm Springs, California: our parish, our clergy, our history and our Romanian Orthodox tradition.`,
    },
    worship: {
      title:       'Worship & Divine Liturgy Schedule | Palm Springs',
      description: `Divine Liturgy every Sunday, 10:00–11:50 a.m., in Romanian and English at ${NAME}, 590 S Vella Rd, Palm Springs.`,
    },
    whatToExpect: {
      title:       'What to Expect at an Orthodox Liturgy | Palm Springs',
      description: `New to Orthodoxy? A friendly guide to visiting ${NAME} in Palm Springs for the Sunday Divine Liturgy.`,
    },
    prayer: {
      title:       'Request a Prayer | Romanian Orthodox Church Palm Springs',
      description: `Ask the parish of ${SHORT_NAME} in Palm Springs to pray for you and your loved ones, living and departed, and learn about prayer for healing.`,
    },
    community: {
      title:       'Parish Community & Culture | Coachella Valley',
      description: `Parish life at ${NAME}: Romanian feasts, colinde, agape meals and friendship across the Coachella Valley.`,
    },
    gallery: {
      title:       'Photo Gallery | Romanian Orthodox Church Palm Springs',
      description: `Photos of ${NAME} in Palm Springs: our church building, the Divine Liturgy and parish life in the Coachella Valley.`,
    },
    learn: {
      title:       'Learn About the Orthodox Faith | Palm Springs Parish',
      description: `An introduction to the Orthodox Christian faith and the Romanian Orthodox tradition from ${NAME}, Palm Springs.`,
    },
    newsEvents: {
      title:       'News & Events | Romanian Orthodox Church Palm Springs',
      description: `Parish calendar, announcements and news from ${NAME}, serving the Coachella Valley and Inland Empire.`,
    },
    visit: {
      title:       'Visit Us | 590 S Vella Rd, Palm Springs, CA',
      description: `Visit ${NAME} at 590 S Vella Rd, Palm Springs, CA 92264. Divine Liturgy Sundays 10:00–11:50 a.m. Map and contact form.`,
    },
    donate: {
      title:       'Donate | Support Our Palm Springs Orthodox Parish',
      description: `Support ${NAME} in Palm Springs. Your gift sustains worship and ministry across the Coachella Valley. Give via Zelle.`,
    },
  },

  // Page-level H1 + opening summary for interior pages
  pages: {
    ourParish: {
      heading: 'Our Parish',
      intro:   `${SHORT_NAME} is a Romanian Orthodox parish in Palm Springs, California, serving the faithful of the Coachella Valley and Inland Empire.`,
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
      intro:   `The parish calendar, announcements and news from ${NAME}.`,
    },
    visit: {
      heading: 'Visit Us',
      intro:   `${NAME} is at 590 S Vella Rd, Palm Springs, CA 92264. The Divine Liturgy is celebrated every Sunday, 10:00–11:50 a.m.`,
    },
    donate: {
      heading: 'Donate',
      intro:   'Your gifts sustain the worship and ministry of our parish.',
    },
  },

  // ---------------------------------------------------------------------------
  // Long-form page content (Phase 4).
  // REVIEW(Fr. Florin): doctrinal / liturgical text in worshipPage, whatToExpect,
  // prayerPage, learnPage and tradition is a general draft for the priest's approval.
  // ---------------------------------------------------------------------------

  worshipPage: {
    liturgy: [
      'The Divine Liturgy is the central act of worship of the Orthodox Church. In it the Church gives thanks to God, hears the Gospel, and receives the Body and Blood of Christ in Holy Communion. On most Sundays the Liturgy of St. John Chrysostom is celebrated.',
      'At our parish, the Divine Liturgy is celebrated every Sunday from 10:00 to 11:50 a.m. in Romanian and English.',
    ],
    sacraments: [
      'The sacraments — called “the Holy Mysteries” in the Orthodox Church (in Romanian, Sfintele Taine) — are the means by which God’s grace is given to the faithful. The Orthodox Church traditionally counts seven: Baptism, Chrismation, Holy Communion, Confession, Holy Unction, Marriage and Holy Orders.',
      'For baptisms, weddings and memorial services (parastase), please contact Fr. Florin directly.',
    ],
    confession: [
      'Confession (Spovedania) is the sacrament of repentance, in which we confess our sins before God in the presence of the priest and receive His forgiveness. Orthodox Christians go to confession regularly, and especially in preparation for Holy Communion.',
      'Confession is available upon request. Please speak with Fr. Florin after the Liturgy or contact him to arrange a time.',
    ],
    tbaCalendar: 'see the parish calendar',
  },

  whatToExpect: {
    welcome: [
      'If you have never attended an Orthodox service before, welcome! You do not need to know anything in advance to join us. Come as you are, stay as long as you like, and feel free simply to watch and pray.',
      `The Divine Liturgy is the main service of the Orthodox Church. At ${NAME} it is celebrated every Sunday from 10:00 to 11:50 a.m., in Romanian and English, at 590 S Vella Rd in Palm Springs. Below are answers to the questions visitors ask most often.`,
    ],
    faqHeading: 'Frequently Asked Questions',
    faq: [
      {
        id: 'duration',
        q: 'How long is the Divine Liturgy?',
        a: ['The Sunday Divine Liturgy lasts a little under two hours, from about 10:00 to 11:50 a.m. If you need to arrive late or leave early, you are welcome to come and go quietly.'],
      },
      {
        id: 'language',
        q: 'What language is the service in?',
        a: ['The service is celebrated in Romanian and English. Much of the Liturgy is sung, and the prayers follow the same order every week, so it quickly becomes familiar.'],
      },
      {
        id: 'dress',
        q: 'What should I wear?',
        a: ['Modest, respectful clothing — the kind you might wear to any special occasion — is appropriate. Many men wear long trousers, and many women wear skirts or dresses; some women cover their heads, as is traditional in Romanian parishes. Above all, come as you are: you will be welcome.'],
      },
      {
        id: 'arrival',
        q: 'When should I arrive, and where do I park?',
        a: [
          'Try to arrive a few minutes before 10:00 a.m. so you can settle in before the Liturgy begins. As you enter, you may see people lighting candles and venerating the icons; you are welcome to do the same or simply observe.',
          'The church is at 590 S Vella Rd, Palm Springs, CA 92264.',
        ],
      },
      {
        id: 'communion',
        q: 'Can I receive Holy Communion if I’m not Orthodox?',
        a: [
          'In the Orthodox Church, Holy Communion is received by Orthodox Christians who have prepared through prayer, fasting and confession. Because Communion expresses the unity of faith shared by the members of the Church, we kindly ask visitors who are not Orthodox not to receive it. This is not a judgment of anyone — we are truly glad you are with us.',
          'At the end of the Liturgy, everyone — Orthodox or not — is invited to come forward to venerate the cross and receive a piece of the blessed bread, called anafura (antidoron). We would be glad for you to join us.',
        ],
      },
      {
        id: 'children',
        q: 'Are children welcome?',
        a: ['Yes! Children are a joyful part of parish life and are welcome at every service. Orthodox children receive Holy Communion from infancy. If your little one needs a break, feel free to step out and return whenever you are ready.'],
      },
      {
        id: 'standing',
        q: 'Do I have to stand the whole time?',
        a: ['In the Orthodox tradition the faithful stand for much of the service, as a sign of reverence and attention. No one is expected to stand beyond their ability: please sit whenever you need to.'],
      },
      {
        id: 'priest',
        q: 'How do I talk to the priest or become Orthodox?',
        a: [
          'Fr. Florin is always glad to meet visitors. You can greet him after the Liturgy or contact him directly by phone or email.',
          'Those who wish to become Orthodox begin with a period of learning and prayer, called the catechumenate, guided by the priest.',
        ],
      },
    ],
    callPriest: 'Call Fr. Florin',
    emailPriest: 'Email Fr. Florin',
    catechismLink: 'About catechism',
  },

  prayerPage: {
    formIntro: 'Fr. Florin and the parish pray for the living and for the departed. Use this form to ask for prayers or to submit names for prayer. Your request goes directly to the parish priest.',
    form: {
      name:          'Your name',
      email:         'Email',
      phone:         'Phone (optional)',
      type:          'Type of request',
      typePrompt:    'Please choose…',
      namesLegend:   'Names for prayer (pomelnic)',
      namesIntro:    'In the Romanian Orthodox tradition, the names of those we pray for are written on a pomelnic, with the living and the departed listed separately, and the priest commemorates them during the Divine Liturgy. Please write first names (baptismal names if you know them), one per line.',
      living:        'Names of the living',
      departed:      'Names of the departed',
      message:       'Your message (optional)',
      private:       'Please keep this request private to the priest',
      submit:        'Send Prayer Request',
      sending:       'Sending…',
      thanksHeading: 'Thank you',
      thanksBody:    'Your prayer request has been received. Fr. Florin and the parish will remember you and your loved ones in prayer.',
      error:         'Something went wrong — please try again, or email Fr. Florin directly.',
    },
    types: {
      health:       'Health and healing',
      help:         'Help in a difficulty',
      thanksgiving: 'Thanksgiving',
      departed:     'Memorial for the departed',
      candle:       'Light a candle',
      other:        'Other',
    },
    candle: [
      'Lighting a candle is one of the oldest Christian customs. The small flame is a sign of our prayer rising to God, of the light of Christ, and of our love for those we remember. In Romanian churches, candles for the living and for the departed are traditionally placed in separate stands.',
    ],
    candleFormNote: 'To ask the parish to light a candle on your behalf, choose “Light a candle” as the type of request in the prayer form above.',
    healing: [
      'The Church prays for the sick at every Divine Liturgy. Holy Unction (in Romanian, Sfântul Maslu) is the sacrament of healing, in which the priest anoints the sick with blessed oil and asks God for the healing of soul and body and the forgiveness of sins. It may be celebrated for one person or for the whole community, especially during Great Lent.',
      'To ask for prayers for someone who is ill, or to arrange Holy Unction or a visit from the priest, use the prayer form above or contact Fr. Florin directly.',
    ],
  },

  learnPage: {
    beliefs: [
      'Orthodox Christians believe in one God in three Persons — the Father, the Son and the Holy Spirit — and in Jesus Christ, the Son of God, who became man, was crucified, rose from the dead and ascended into heaven for our salvation.',
      'The faith of the Orthodox Church is summed up in the Nicene–Constantinopolitan Creed, which is said or sung at every Divine Liturgy.',
    ],
    creedHeading: 'The Creed',
    creed: [
      'I believe in one God, the Father Almighty, Maker of heaven and earth, and of all things visible and invisible.',
      'And in one Lord Jesus Christ, the Son of God, the Only-begotten, begotten of the Father before all ages; Light of Light, true God of true God, begotten, not made, of one essence with the Father, by whom all things were made;',
      'who for us men and for our salvation came down from heaven, and was incarnate of the Holy Spirit and the Virgin Mary, and became man;',
      'and was crucified also for us under Pontius Pilate, and suffered, and was buried;',
      'and rose again on the third day, according to the Scriptures;',
      'and ascended into heaven, and sits at the right hand of the Father;',
      'and He shall come again with glory to judge the living and the dead, whose kingdom shall have no end.',
      'And in the Holy Spirit, the Lord, the Giver of Life, who proceeds from the Father, who with the Father and the Son together is worshipped and glorified, who spoke by the prophets.',
      'In one Holy, Catholic and Apostolic Church.',
      'I confess one baptism for the remission of sins.',
      'I look for the resurrection of the dead,',
      'and the life of the age to come. Amen.',
    ],
    beliefsClosing: 'Orthodox Christians receive this faith through Holy Scripture and Holy Tradition, worship God in the sacraments, honor the Virgin Mary as the Theotokos (Mother of God), and ask the prayers of the saints, whose icons fill our churches.',
    orthodoxFaith: [
      'The Orthodox Church traces its life without interruption to Christ and the Apostles. For its first thousand years, Christianity in East and West shared one faith, defined by the seven Ecumenical Councils, and the Orthodox Church continues to hold that faith today.',
      'Orthodoxy is a family of self-governing local Churches — among them the Churches of Constantinople, Alexandria, Antioch, Jerusalem, Russia, Serbia, Romania, Bulgaria and Greece — united in faith, sacraments and worship rather than by a single central administration.',
      'Worship stands at the heart of Orthodox life. Through the Divine Liturgy, prayer, fasting and the yearly cycle of feasts, Orthodox Christians seek to grow in communion with God — what the Church Fathers call theosis.',
    ],
    catechism: [
      'Catechism is the Church’s instruction in the faith. Adults who wish to become Orthodox — and anyone who wants to understand the faith more deeply — are welcome to learn with Fr. Florin.',
      'Entry into the Orthodox Church usually comes through Baptism and Chrismation, or through Chrismation for some who are already baptized, after a period of preparation called the catechumenate.',
    ],
  },

  tradition: [
    'The Romanian Orthodox Church is one of the self-governing (autocephalous) Churches of the Orthodox family. Christianity in the lands of present-day Romania is traditionally traced to the preaching of St. Andrew the Apostle, honored as the protector of Romania. The Church’s autocephaly was recognized in 1885, and it became a Patriarchate in 1925.',
    'Romanian Orthodox worship follows the Byzantine rite. Fixed feasts such as the Nativity of Christ are kept according to the Revised Julian calendar, while Pascha (Easter) is calculated by the traditional Orthodox Paschalion.',
    'Beloved Romanian traditions include colinde (carols) at the Nativity; red eggs and the greeting “Hristos a înviat!” (“Christ is risen!”) at Pascha; the pomelnic of names for prayer; coliva offered in memory of the departed at the parastas; and the feasts of beloved saints such as St. Parascheva (October 14), St. Demetrius the New (October 27) and St. Andrew (November 30).',
    'For our parish, the Synaxis of the Holy Archangels Michael and Gabriel on November 8 is the patronal feast (hram).',
  ],

  newsPage: {
    calendarIntro:   'Upcoming services, feast days and parish events.',
    calendarTitle:   'Parish calendar',
    noAnnouncements: 'There are no announcements at this time.',
    noNews:          'There is no parish news yet.',
  },

  galleryUi: {
    open:  'View larger',
    close: 'Close',
  },

  hero: {
    patronFeast:  'Synaxis of the Holy Archangels — November 8',
    welcome:      'Welcome to your spiritual home in the Coachella Valley.',
  },

  home: {
    cards: {
      liturgy:  { title: 'Join Us for Liturgy',     subtitle: 'Every Sunday • 10:00 AM' },
      prayer:   { title: 'Request a Prayer',        subtitle: 'We will pray for you and your loved ones' },
      newcomer: { title: 'I’m New to Orthodoxy',    subtitle: 'Learn what to expect when you visit' },
    },
    more: {
      ourParish:    'More about our parish',
      clergy:       'Meet our clergy',
      worship:      'Worship & sacraments',
      whatToExpect: 'What to expect on your first visit',
      community:    'Explore parish life',
      gallery:      'View the photo gallery',
      visit:        'Directions & contact form',
      donate:       'More ways to support the parish',
    },
  },

  welcome: {
    heading: 'Welcome to Our Parish',
    body1:
      `${NAME} warmly welcomes all who seek worship, fellowship, and a spiritual home. Whether you are Orthodox by birth, exploring the faith, or simply curious, our doors are open to you.`,
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
