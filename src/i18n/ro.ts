// Romanian copy. DRAFT — NEEDS NATIVE REVIEW before launch.
// Liturgical terms (Sfânta Liturghie, Vecernia, Spovedania, Taine, Pomelnic,
// Sfântul Maslu, parastas, colinde) must be verified by the parish.
import type { Dict } from './en';

// The church's name in this language — defined once; strings below reference it.
const NAME = 'Biserica Ortodoxă Română a Sfinților Arhangheli Mihail și Gavriil';

export const ro: Dict = {
  church: {
    name:    NAME,
    tagline: 'Parohie Ortodoxă Română — Palm Springs, California',
  },

  ui: {
    skipToContent: 'Salt la conținut',
    mainNav:       'Principal',
    language:      'Limba',
    openMenu:      'Deschideți meniul',
    showSubmenu:   'Afișați submeniul',
    breadcrumb:    'Cale de navigare',
    comingSoon:    '[Conținut în curând — va fi furnizat de parohie]',
    photoComingSoon: '[Fotografie în curând — va fi furnizată de parohie]',
    learnMore:     'Aflați mai multe',
  },

  images: {
    headerLogoAlt: `${NAME} — pagina principală`,
    sealAlt:
      'Sigiliul parohiei: icoana Sfinților Arhangheli Mihail și Gavriil, înconjurată de inscripția în engleză „Holy Archangels Michael and Gabriel Romanian Orthodox Church P.S.”',
    churchFrontAlt: 'Fațada Bisericii Ortodoxe Române a Sfinților Arhangheli Mihail și Gavriil din Palm Springs',
    communityAlt:   'Credincioși ai parohiei adunați la un eveniment parohial',
  },

  menu: {
    home:       'Acasă',
    ourParish:  'Parohia Noastră',
    worship:    'Slujbe',
    prayer:     'Rugăciune',
    community:  'Comunitate',
    learn:      'Învățătură',
    newsEvents: 'Știri și Evenimente',
    visit:      'Vizitați-ne',
    donate:     'Donați',

    about:     'Despre Noi',
    clergy:    'Clerul Nostru',
    history:   'Istoria Noastră',
    tradition: 'Tradiția Ortodoxă Română',

    liturgy:      'Sfânta Liturghie',
    schedule:     'Slujbe și Program',
    sacraments:   'Sfintele Taine',
    confession:   'Spovedania',
    whatToExpect: 'Ce să Așteptați',

    request: 'Cereți o Rugăciune',
    candle:  'Aprindeți o Lumânare',
    names:   'Trimiteți un Pomelnic',
    healing: 'Rugăciune și Sfântul Maslu',

    parishLife: 'Viața Parohiei',
    ministries: 'Activități Parohiale',
    youth:      'Copii și Tineret',
    events:     'Evenimente',
    gallery:    'Galerie Foto',

    beliefs:       'Ce Credem',
    orthodoxFaith: 'Credința Ortodoxă',
    sermons:       'Predici și Învățături',
    catechism:     'Catehism',

    calendar:      'Calendarul Parohiei',
    announcements: 'Anunțuri',
    news:          'Știri din Parohie',
  },

  meta: {
    home: {
      title:       'Biserica Ortodoxă Română din Palm Springs, California',
      description: 'Parohie ortodoxă română pentru credincioșii din Valea Coachella și Inland Empire. Sfânta Liturghie în fiecare duminică, 10:00–11:50, în română și engleză.',
    },
    ourParish: {
      title:       'Parohia Noastră | Biserica Ortodoxă Română Palm Springs',
      description: `Aflați despre ${NAME} din Palm Springs: parohia, clerul, istoria și tradiția noastră.`,
    },
    worship: {
      title:       'Slujbe și Programul Sfintei Liturghii | Palm Springs',
      description: 'Sfânta Liturghie în fiecare duminică, 10:00–11:50, în română și engleză, la Biserica Sfinții Arhangheli, 590 S Vella Rd, Palm Springs, California.',
    },
    whatToExpect: {
      title:       'Ce să Așteptați la Sfânta Liturghie | Palm Springs',
      description: 'Sunteți nou în Ortodoxie? Un ghid prietenos pentru vizita la Sfânta Liturghie de duminică la Biserica Ortodoxă Română din Palm Springs, California.',
    },
    prayer: {
      title:       'Cereți o Rugăciune | Biserica Ortodoxă Palm Springs',
      description: 'Cereți parohiei Sfinții Arhangheli Mihail și Gavriil din Palm Springs să se roage pentru dumneavoastră și cei dragi, vii și adormiți. Trimiteți pomelnicul.',
    },
    community: {
      title:       'Comunitate și Cultură Românească | Valea Coachella',
      description: 'Viața parohiei Sfinții Arhangheli din Palm Springs: praznice românești, colinde, mese de agapă și prietenie în Valea Coachella și Inland Empire.',
    },
    gallery: {
      title:       'Galerie Foto | Biserica Ortodoxă Română Palm Springs',
      description: 'Fotografii de la Biserica Ortodoxă Română a Sfinților Arhangheli din Palm Springs: biserica, Sfânta Liturghie și viața parohiei din Valea Coachella.',
    },
    learn: {
      title:       'Învățătura Credinței Ortodoxe | Parohia Palm Springs',
      description: 'O introducere în credința creștin-ortodoxă și în tradiția ortodoxă română, de la Biserica Ortodoxă Română a Sfinților Arhangheli din Palm Springs.',
    },
    newsEvents: {
      title:       'Știri și Evenimente | Biserica Ortodoxă Palm Springs',
      description: 'Calendarul parohiei, anunțuri și știri de la Biserica Ortodoxă Română a Sfinților Arhangheli, care slujește Valea Coachella și Inland Empire.',
    },
    visit: {
      title:       'Vizitați-ne | 590 S Vella Rd, Palm Springs, CA',
      description: 'Vizitați Biserica Ortodoxă Română a Sfinților Arhangheli la 590 S Vella Rd, Palm Springs, CA 92264. Sfânta Liturghie duminica, 10:00–11:50. Hartă și contact.',
    },
    donate: {
      title:       'Donați | Sprijiniți Parohia Ortodoxă din Palm Springs',
      description: 'Sprijiniți Biserica Ortodoxă Română a Sfinților Arhangheli din Palm Springs. Darul dumneavoastră susține slujbele și misiunea parohiei în Valea Coachella.',
    },
  },

  pages: {
    ourParish: {
      heading: 'Parohia Noastră',
      intro:   'Sfinții Arhangheli Mihail și Gavriil este o parohie ortodoxă română din Palm Springs, California, care slujește credincioșii din Valea Coachella și Inland Empire.',
    },
    worship: {
      heading: 'Slujbe',
      intro:   'Sfânta Liturghie se săvârșește în fiecare duminică, între orele 10:00 și 11:50, în română și engleză, la 590 S Vella Rd, Palm Springs.',
    },
    whatToExpect: {
      heading: 'Ce să Așteptați',
      intro:   'Un ghid primitor pentru cei care vin pentru prima dată la Sfânta Liturghie ortodoxă.',
    },
    prayer: {
      heading: 'Rugăciune',
      intro:   'Parohia se roagă pentru cei vii și pentru cei adormiți. Ne puteți cere să ne rugăm pentru dumneavoastră și pentru cei dragi.',
    },
    community: {
      heading: 'Comunitate',
      intro:   'Familia noastră parohială se adună de-a lungul anului la slujbe, la praznice românești, la colinde și la agapă, în Valea Coachella și Inland Empire.',
    },
    gallery: {
      heading: 'Galerie Foto',
      intro:   'Fotografii cu biserica noastră și cu viața parohiei.',
    },
    learn: {
      heading: 'Învățătură',
      intro:   'O introducere în credința creștin-ortodoxă și în tradiția ortodoxă română.',
    },
    newsEvents: {
      heading: 'Știri și Evenimente',
      intro:   'Calendarul parohiei, anunțurile și știrile Bisericii Ortodoxe Române a Sfinților Arhangheli Mihail și Gavriil.',
    },
    visit: {
      heading: 'Vizitați-ne',
      intro:   `${NAME} se află la 590 S Vella Rd, Palm Springs, CA 92264. Sfânta Liturghie se săvârșește în fiecare duminică, 10:00–11:50.`,
    },
    donate: {
      heading: 'Donați',
      intro:   'Darurile dumneavoastră susțin slujbele și lucrarea parohiei noastre.',
    },
  },

  // ---------------------------------------------------------------------------
  // Conținutul paginilor (Faza 4). DRAFT — NEEDS NATIVE REVIEW.
  // REVIEW(Fr. Florin): text doctrinar / liturgic pentru aprobarea preotului.
  // ---------------------------------------------------------------------------

  worshipPage: {
    liturgy: [
      'Sfânta Liturghie este slujba centrală a Bisericii Ortodoxe. În cadrul ei, Biserica aduce mulțumire lui Dumnezeu, ascultă Sfânta Evanghelie și primește Trupul și Sângele lui Hristos în Sfânta Împărtășanie. În majoritatea duminicilor se săvârșește Liturghia Sfântului Ioan Gură de Aur.',
      'În parohia noastră, Sfânta Liturghie se săvârșește în fiecare duminică, între orele 10:00 și 11:50, în română și engleză.',
    ],
    sacraments: [
      'Sfintele Taine sunt lucrările sfinte prin care se împărtășește credincioșilor harul lui Dumnezeu. Biserica Ortodoxă numără în mod tradițional șapte Sfinte Taine: Botezul, Mirungerea, Sfânta Împărtășanie (Euharistia), Spovedania, Sfântul Maslu, Cununia și Hirotonia.',
      'Pentru botezuri, cununii și parastase, vă rugăm să luați legătura direct cu Părintele Florin.',
    ],
    confession: [
      'Spovedania este Taina pocăinței, prin care ne mărturisim păcatele înaintea lui Dumnezeu, în fața preotului duhovnic, și primim iertarea Lui. Creștinii ortodocși se spovedesc în mod regulat, mai ales ca pregătire pentru Sfânta Împărtășanie.',
      'Spovedania se face la cerere. Vă rugăm să vorbiți cu Părintele Florin după Sfânta Liturghie sau să îl contactați pentru a stabili o întâlnire.',
    ],
    tbaCalendar: 'consultați calendarul parohiei',
  },

  whatToExpect: {
    welcome: [
      'Dacă nu ați participat niciodată la o slujbă ortodoxă, bine ați venit! Nu trebuie să știți nimic dinainte pentru a fi alături de noi. Veniți așa cum sunteți, rămâneți cât doriți și simțiți-vă liberi doar să priviți și să vă rugați.',
      `Sfânta Liturghie este slujba principală a Bisericii Ortodoxe. La ${NAME}, ea se săvârșește în fiecare duminică, între orele 10:00 și 11:50, în română și engleză, la 590 S Vella Rd, Palm Springs. Mai jos găsiți răspunsuri la întrebările pe care vizitatorii ni le pun cel mai des.`,
    ],
    faqHeading: 'Întrebări Frecvente',
    faq: [
      {
        id: 'duration',
        q: 'Cât durează Sfânta Liturghie?',
        a: ['Sfânta Liturghie de duminică durează puțin sub două ore, aproximativ între orele 10:00 și 11:50. Dacă trebuie să veniți mai târziu sau să plecați mai devreme, puteți intra și ieși în liniște.'],
      },
      {
        id: 'language',
        q: 'În ce limbă se săvârșește slujba?',
        a: ['Slujba se săvârșește în română și engleză. O mare parte a Liturghiei este cântată, iar rugăciunile urmează aceeași rânduială în fiecare săptămână, așa că vă vor deveni repede familiare.'],
      },
      {
        id: 'dress',
        q: 'Cum ar trebui să mă îmbrac?',
        a: ['Se potrivește o ținută decentă și respectuoasă, precum cea pe care ați purta-o la orice ocazie deosebită. Mulți bărbați poartă pantaloni lungi, iar multe femei poartă fustă sau rochie; unele femei își acoperă capul, după tradiția parohiilor românești. Mai presus de toate, veniți așa cum sunteți: veți fi bineveniți.'],
      },
      {
        id: 'arrival',
        q: 'Când ar trebui să ajung și unde pot parca?',
        a: [
          'Încercați să ajungeți cu câteva minute înainte de ora 10:00, ca să vă puteți așeza înainte de începerea Liturghiei. La intrare veți vedea credincioși aprinzând lumânări și sărutând icoanele; puteți face la fel sau doar să priviți.',
          'Biserica se află la 590 S Vella Rd, Palm Springs, CA 92264.',
        ],
      },
      {
        id: 'communion',
        q: 'Pot primi Sfânta Împărtășanie dacă nu sunt ortodox?',
        a: [
          'În Biserica Ortodoxă, Sfânta Împărtășanie este primită de creștinii ortodocși care s-au pregătit prin rugăciune, post și spovedanie. Deoarece Împărtășania exprimă unitatea de credință a membrilor Bisericii, îi rugăm cu blândețe pe vizitatorii care nu sunt ortodocși să nu se împărtășească. Aceasta nu este o judecată asupra nimănui — ne bucurăm sincer că sunteți alături de noi.',
          'La sfârșitul Liturghiei, toți cei prezenți — ortodocși sau nu — sunt invitați să vină să sărute Sfânta Cruce și să primească anafură (pâine binecuvântată). Ne-am bucura să vă alăturați nouă.',
        ],
      },
      {
        id: 'children',
        q: 'Sunt copiii bineveniți?',
        a: ['Da! Copiii sunt o parte plină de bucurie a vieții parohiei și sunt bineveniți la toate slujbele. Copiii ortodocși se împărtășesc încă de la vârsta pruncilor. Dacă cel mic are nevoie de o pauză, puteți ieși și reveni oricând doriți.'],
      },
      {
        id: 'standing',
        q: 'Trebuie să stau în picioare tot timpul?',
        a: ['În tradiția ortodoxă, credincioșii stau în picioare o mare parte a slujbei, ca semn de evlavie și atenție. Nimeni nu se așteaptă să stați în picioare peste puterile dumneavoastră: vă rugăm să vă așezați ori de câte ori aveți nevoie.'],
      },
      {
        id: 'priest',
        q: 'Cum pot vorbi cu preotul sau cum pot deveni ortodox?',
        a: [
          'Părintele Florin se bucură întotdeauna să cunoască vizitatori noi. Îl puteți saluta după Sfânta Liturghie sau îl puteți contacta direct, telefonic sau prin e-mail.',
          'Cei care doresc să devină ortodocși încep cu o perioadă de învățătură și rugăciune, numită catehumenat, sub îndrumarea preotului.',
        ],
      },
    ],
    callPriest: 'Sunați-l pe Părintele Florin',
    emailPriest: 'Scrieți-i Părintelui Florin',
    catechismLink: 'Despre cateheză',
  },

  prayerPage: {
    formIntro: 'Părintele Florin și parohia se roagă pentru cei vii și pentru cei adormiți. Folosiți acest formular pentru a cere rugăciuni sau pentru a trimite un pomelnic. Cererea dumneavoastră ajunge direct la preotul parohiei.',
    form: {
      name:          'Numele dumneavoastră',
      email:         'E-mail',
      phone:         'Telefon (opțional)',
      type:          'Tipul cererii',
      typePrompt:    'Vă rugăm să alegeți…',
      namesLegend:   'Pomelnic',
      namesIntro:    'În tradiția ortodoxă română, numele celor pentru care ne rugăm se scriu pe un pomelnic, separat pentru cei vii și pentru cei adormiți, iar preotul îi pomenește la Sfânta Liturghie. Vă rugăm să scrieți prenumele (numele de botez, dacă îl cunoașteți), câte unul pe rând.',
      living:        'Pomelnicul celor vii',
      departed:      'Pomelnicul celor adormiți',
      message:       'Mesajul dumneavoastră (opțional)',
      private:       'Vă rog ca această cerere să rămână confidențială, doar pentru preot',
      submit:        'Trimiteți Cererea de Rugăciune',
      sending:       'Se trimite…',
      thanksHeading: 'Vă mulțumim',
      thanksBody:    'Cererea dumneavoastră de rugăciune a fost primită. Părintele Florin și parohia vă vor pomeni pe dumneavoastră și pe cei dragi în rugăciune.',
      error:         'A apărut o eroare — vă rugăm să încercați din nou sau să îi scrieți direct Părintelui Florin.',
    },
    types: {
      health:       'Sănătate și vindecare',
      help:         'Ajutor într-o încercare',
      thanksgiving: 'Mulțumire',
      departed:     'Pomenirea celor adormiți',
      candle:       'Aprinderea unei lumânări',
      other:        'Altele',
    },
    candle: [
      'Aprinderea lumânării este unul dintre cele mai vechi obiceiuri creștine. Flacăra ei este semnul rugăciunii care se înalță la Dumnezeu, al luminii lui Hristos și al iubirii noastre pentru cei pe care îi pomenim. În bisericile românești, lumânările pentru cei vii și pentru cei adormiți se așază în mod tradițional în sfeșnice separate.',
    ],
    candleFormNote: 'Pentru a ruga parohia să aprindă o lumânare în numele dumneavoastră, alegeți „Aprinderea unei lumânări” ca tip de cerere în formularul de rugăciune de mai sus.',
    healing: [
      'Biserica se roagă pentru cei bolnavi la fiecare Sfântă Liturghie. Sfântul Maslu este Taina vindecării, în care preotul îi unge pe cei bolnavi cu untdelemn sfințit și cere de la Dumnezeu tămăduirea sufletului și a trupului și iertarea păcatelor. Poate fi săvârșit pentru o singură persoană sau pentru întreaga comunitate, mai ales în Postul Mare.',
      'Pentru a cere rugăciuni pentru cineva bolnav, sau pentru a stabili săvârșirea Sfântului Maslu ori o vizită a preotului, folosiți formularul de rugăciune de mai sus sau contactați-l direct pe Părintele Florin.',
    ],
  },

  learnPage: {
    beliefs: [
      'Creștinii ortodocși cred într-Unul Dumnezeu în trei Persoane — Tatăl, Fiul și Sfântul Duh — și în Iisus Hristos, Fiul lui Dumnezeu, Care S-a făcut om, a fost răstignit, a înviat din morți și S-a înălțat la ceruri pentru mântuirea noastră.',
      'Credința Bisericii Ortodoxe este rezumată în Simbolul de credință niceo-constantinopolitan, care se rostește sau se cântă la fiecare Sfântă Liturghie.',
    ],
    creedHeading: 'Simbolul Credinței (Crezul)',
    creed: [
      'Cred într-Unul Dumnezeu, Tatăl Atotțiitorul, Făcătorul cerului și al pământului, al tuturor celor văzute și al celor nevăzute.',
      'Și într-Unul Domn Iisus Hristos, Fiul lui Dumnezeu, Unul-Născut, Care din Tatăl S-a născut mai înainte de toți vecii. Lumină din Lumină, Dumnezeu adevărat din Dumnezeu adevărat, născut, iar nu făcut; Cel de o ființă cu Tatăl, prin Care toate s-au făcut.',
      'Care pentru noi, oamenii, și pentru a noastră mântuire S-a pogorât din ceruri și S-a întrupat de la Duhul Sfânt și din Fecioara Maria și S-a făcut om.',
      'Și S-a răstignit pentru noi în zilele lui Ponțiu Pilat și a pătimit și S-a îngropat.',
      'Și a înviat a treia zi, după Scripturi.',
      'Și S-a suit la ceruri și șade de-a dreapta Tatălui.',
      'Și iarăși va să vină cu slavă să judece viii și morții, a Cărui împărăție nu va avea sfârșit.',
      'Și întru Duhul Sfânt, Domnul de viață Făcătorul, Care din Tatăl purcede, Cel ce împreună cu Tatăl și cu Fiul este închinat și slăvit, Care a grăit prin prooroci.',
      'Întru Una, Sfântă, Sobornicească și Apostolească Biserică.',
      'Mărturisesc un botez spre iertarea păcatelor.',
      'Aștept învierea morților.',
      'Și viața veacului ce va să fie. Amin.',
    ],
    beliefsClosing: 'Creștinii ortodocși primesc această credință prin Sfânta Scriptură și Sfânta Tradiție, Îl slăvesc pe Dumnezeu în Sfintele Taine, o cinstesc pe Fecioara Maria ca Născătoare de Dumnezeu și cer rugăciunile sfinților, ale căror icoane împodobesc bisericile noastre.',
    orthodoxFaith: [
      'Biserica Ortodoxă își trage viața, fără întrerupere, de la Hristos și de la Sfinții Apostoli. În primul mileniu, creștinismul din Răsărit și din Apus a împărtășit aceeași credință, definită de cele șapte Sinoade Ecumenice, iar Biserica Ortodoxă păstrează această credință și astăzi.',
      'Ortodoxia este o familie de Biserici locale autocefale — între care Bisericile Constantinopolului, Alexandriei, Antiohiei, Ierusalimului, Rusiei, Serbiei, României, Bulgariei și Greciei — unite în credință, în Sfintele Taine și în cult, nu printr-o administrație centrală unică.',
      'Cultul se află în inima vieții ortodoxe. Prin Sfânta Liturghie, rugăciune, post și ciclul anual al sărbătorilor, creștinii ortodocși se străduiesc să crească în comuniune cu Dumnezeu — ceea ce Sfinții Părinți numesc îndumnezeire (theosis).',
    ],
    catechism: [
      'Cateheza este învățătura de credință a Bisericii. Adulții care doresc să devină ortodocși — și oricine dorește să cunoască mai bine credința — sunt bineveniți să învețe alături de Părintele Florin.',
      'Intrarea în Biserica Ortodoxă se face de obicei prin Botez și Mirungere, sau prin Mirungere pentru unii dintre cei deja botezați, după o perioadă de pregătire numită catehumenat.',
    ],
  },

  tradition: [
    'Biserica Ortodoxă Română este una dintre Bisericile autocefale ale familiei ortodoxe. Potrivit tradiției, creștinismul pe teritoriul României de astăzi a fost propovăduit de Sfântul Apostol Andrei, cinstit ca ocrotitor al României. Autocefalia Bisericii a fost recunoscută în 1885, iar în 1925 a devenit Patriarhie.',
    'Cultul ortodox român urmează ritul bizantin. Sărbătorile cu dată fixă, precum Nașterea Domnului, se țin după calendarul iulian îndreptat, iar data Sfintelor Paști se stabilește după pascalia ortodoxă tradițională.',
    'Între tradițiile românești îndrăgite se numără colindele de Crăciun; ouăle roșii și salutul „Hristos a înviat!” de Paști; pomelnicul cu numele celor pentru care ne rugăm; coliva adusă la parastas în pomenirea celor adormiți; și sărbătorile unor sfinți mult iubiți, precum Sfânta Cuvioasă Parascheva (14 octombrie), Sfântul Cuvios Dimitrie cel Nou (27 octombrie) și Sfântul Apostol Andrei (30 noiembrie).',
    'Pentru parohia noastră, Soborul Sfinților Arhangheli Mihail și Gavriil, pe 8 noiembrie, este hramul bisericii.',
  ],

  newsPage: {
    calendarIntro:   'Slujbele, sărbătorile și evenimentele parohiale care urmează.',
    calendarTitle:   'Calendarul parohiei',
    noAnnouncements: 'Momentan nu există anunțuri.',
    noNews:          'Încă nu există știri din parohie.',
  },

  galleryUi: {
    open:  'Vedeți mai mare',
    close: 'Închideți',
  },

  hero: {
    announcement: 'Soborul Sfinților Arhangheli Mihail și Gavriil — 8 noiembrie',
    welcome:      'Bine ați venit la casa dumneavoastră spirituală din Valea Coachella.',
  },

  home: {
    cards: {
      liturgy:  { title: 'Veniți la Sfânta Liturghie', subtitle: 'În fiecare duminică • ora 10:00' },
      prayer:   { title: 'Cereți o Rugăciune',         subtitle: 'Ne rugăm pentru dumneavoastră și cei dragi' },
      newcomer: { title: 'Sunt Nou în Ortodoxie',      subtitle: 'Aflați ce vă așteaptă la prima vizită' },
    },
    more: {
      ourParish:    'Mai multe despre parohia noastră',
      clergy:       'Cunoașteți clerul nostru',
      worship:      'Slujbe și Sfintele Taine',
      whatToExpect: 'Ce să așteptați la prima vizită',
      community:    'Descoperiți viața parohiei',
      gallery:      'Vedeți galeria foto',
      visit:        'Indicații și formular de contact',
      donate:       'Alte moduri de a sprijini parohia',
    },
  },

  welcome: {
    heading: 'Bine ați venit la Parohia noastră',
    body1:
      `${NAME} îi primește cu căldură pe toți cei care caută rugăciune, comunitate și un cămin spiritual. Fie că sunteți ortodox prin botez, că explorați credința sau sunteți pur și simplu curios, ușile noastre vă sunt deschise.`,
    body2:
      'Slujim comunitatea ortodoxă română din toată Valea Coachella și Inland Empire — Palm Springs, Palm Desert, Rancho Mirage, Cathedral City, Indio, La Quinta, Desert Hot Springs, Hemet, Rancho Cucamonga, Redlands, Banning, Beaumont și împrejurimile.',
    body3:
      'Pentru mulți dintre credincioșii noștri, această parohie este mai mult decât un lăcaș de rugăciune — este un cămin cultural, un loc în care limba română, tradițiile și valorile sunt păstrate vii departe de țară.',
    calendarNote: 'Vedeți Calendarul Ortodox',
  },

  liturgies: {
    heading:     'Sfintele Slujbe',
    colService:  'Slujbă',
    colSchedule: 'Program',
    colLanguage: 'Limbă',
    note:        'Pentru botezuri, cununii și parastase, vă rugăm să contactați direct preotul parohiei.',
    sunday:     { name: 'Sfânta Liturghie',             schedule: 'Duminica, 10:00–11:50', language: 'Română și engleză' },
    vespers:    { name: 'Vecernia',                     schedule: 'De anunțat',                 language: 'Română și engleză' },
    confession: { name: 'Spovedania',                   schedule: 'La cerere',                  language: 'Română și engleză' },
    feastDays:  { name: 'Sărbători și Slujbe Speciale', schedule: 'De anunțat',                 language: 'Română și engleză' },
  },

  clergy: {
    heading:    'Clerul nostru',
    subhead:    'Preotul Parohiei',
    name:       'Pr. Florin Iftode',
    phoneLabel: 'Telefon',
    emailLabel: 'E-mail',
    note:       'Credincioșii ortodocși sunt întotdeauna bineveniți să ia legătura direct cu Părintele pentru îndrumare duhovnicească, nevoi sacramentale sau întrebări parohiale.',
  },

  community: {
    heading: 'Comunitate și Cultură',
    body:
      'Dincolo de slujbele religioase, parohia Sfinților Arhangheli este un centru viu al culturii românești din sudul Californiei. Familia noastră parohială se adună de-a lungul anului pentru a sărbători praznicele tradiționale, a cânta colinde, a împărți masa agapei și a lega prietenii durabile.',
    carouselLabel: 'Fotografii din parohie',
    prevImage:     'Imaginea anterioară',
    nextImage:     'Imaginea următoare',
    goToImage:     'Mergeți la imaginea',
  },

  visit: {
    heading:      'Vizitați-ne',
    addressLabel: 'Adresă',
    directions:   'Cum Ajungeți',
    mapHeading:   'Hartă și Indicații',
    mapTitle:     'Harta pentru 590 S Vella Rd, Palm Springs, CA 92264',
  },

  donate: {
    heading: 'Sprijiniți Parohia noastră',
    body:
      'Darul dvs. generos susține slujbele, programele culturale și misiunea parohiei în toată Valea Coachella și Inland Empire. Fiecare contribuție, mare sau mică, face diferența.',
    zelleLabel:  'Plătiți prin Zelle',
    zelleCopied: 'Copiat!',
    zelleHint:   'Deschideți aplicația băncii dvs., alegeți Zelle și lipiți adresa pentru a trimite darul.',
  },

  contact: {
    heading:            'Luați Legătura',
    body:               'Ne-ar face plăcere să auzim de la dvs. Trimiteți-ne un mesaj și un reprezentant al parohiei vă va contacta.',
    nameLabel:          'Nume',
    emailLabel:         'E-mail',
    messageLabel:       'Mesaj',
    namePlaceholder:    'Numele dvs.',
    emailPlaceholder:   'Adresa dvs. de email',
    messagePlaceholder: 'Mesajul dvs.',
    submit:             'Trimiteți Mesajul',
    sending:            'Se trimite…',
    thanksHeading:      'Vă mulțumim!',
    thanksBody:         'Mesajul dumneavoastră a fost primit. Părintele Florin vă va contacta în curând.',
    error:              'A apărut o eroare — vă rugăm să încercați din nou sau să ne scrieți direct pe e-mail.',
  },

  footer: {
    contactHeading: 'Contact',
    phoneLabel:     'Telefon',
    addressLabel:   'Adresă',
    emailGeneral:   'General și Donații',
    emailPresident: 'Președintele Parohiei',
    emailPriest:    'Preotul Paroh',
    rights:         'Toate drepturile rezervate.',
    websiteBy:      'Site realizat de',
  },
};
