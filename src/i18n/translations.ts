import type { Language } from '../types';

export interface Translation {
  nav: {
    services: string;
    process: string;
    projects: string;
    faq: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary: string;
    proofValue: string;
    proofLabel: string;
    meta: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Record<string, { title: string; description: string }>;
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: Record<string, { title: string; description: string }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    visitLabel: string;
    items: Record<string, { title: string; description: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Record<string, { question: string; answer: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSent: string;
    detailsTitle: string;
    availability: string;
    details: Record<string, string>;
  };
  cookies: {
    text: string;
    accept: string;
    decline: string;
  };
  footer: {
    blurb: string;
    quickLinks: string;
    contactTitle: string;
    rights: string;
  };
}

export const translations: Record<Language, Translation> = {
  mk: {
    nav: {
      services: 'Услуги',
      process: 'Процес',
      projects: 'Проекти',
      faq: 'Прашања',
      contact: 'Контакт',
    },
    hero: {
      eyebrow: 'IT студио од Скопје',
      headlineLine1: 'Софтвер што трае долго',
      headlineLine2: 'по лансирањето.',
      subtext:
        'DevShop е мал тим инженери и дизајнери кој гради веб и мобилни производи за компании кои сакаат работите да бидат направени како што треба.',
      ctaPrimary: 'Разгледај услуги',
      ctaSecondary: 'Контакт',
      proofValue: '40+',
      proofLabel: 'завршени проекти',
      meta: 'Скопје, Македонија — работиме со клиенти ширум светот.',
    },
    services: {
      eyebrow: 'Што работиме',
      title: 'Услуги',
      subtitle: 'Од идеја до производ во продукција.',
      items: {
        web: {
          title: 'Веб развој',
          description:
            'Брзи, одржливи веб апликации изградени со модерни алатки — од маркетинг страници до сложени платформи.',
        },
        mobile: {
          title: 'Мобилни апликации',
          description:
            'Нативно и cross-platform мобилно искуство за iOS и Android, поврзано со вашиот бекенд.',
        },
        design: {
          title: 'UI/UX дизајн',
          description:
            'Интерфејси кои се лесни за употреба и убави за гледање, засновани на реални кориснички потреби.',
        },
        support: {
          title: 'Одржување и поддршка',
          description:
            'Следиме, поправаме и подобруваме постоечки системи за да работат сигурно секој ден.',
        },
        consulting: {
          title: 'IT консалтинг',
          description:
            'Помагаме при избор на технологија, архитектура и процеси за тимови кои растат.',
        },
      },
    },
    process: {
      eyebrow: 'Како работиме',
      title: 'Нашиот процес',
      subtitle: 'Јасни чекори, редовна комуникација и предвидливи резултати.',
      steps: {
        discover: {
          title: 'Откривање',
          description:
            'Разговараме за целите, корисниците и бизнис контекстот пред да напишеме и ред код.',
        },
        design: {
          title: 'Дизајн и план',
          description:
            'Градиме визуелен и технички план — wireframes, архитектура и временска рамка на која можете да се потпрете.',
        },
        build: {
          title: 'Развој',
          description:
            'Итеративен развој со редовни демоа, чист код и тестирање на секој чекор.',
        },
        launch: {
          title: 'Лансирање и поддршка',
          description:
            'Го лансираме производот и остануваме тука за следење, одржување и надградби.',
        },
      },
    },
    projects: {
      eyebrow: 'Портфолио',
      title: 'Проекти',
      subtitle: 'Избрани работи од последните години.',
      visitLabel: 'Посети сајт',
      items: {
        najdikniga: {
          title: 'Најди Книга',
          description:
            'Читателите тешко следат каде одреден наслов е достапен и по која цена, особено кога пребаруваат помеѓу повеќе книжарници и библиотеки одделно. Најди Книга го решава тоа со единствена платформа поврзана со PostgreSQL база на податоци, каде корисниците пребаруваат, филтрираат по жанр и автор, и споредуваат достапност и цени на илјадници наслови на едно место.',
        },
        trendly: {
          title: 'Trendly',
          description:
            'Тимовите тешко следат кои трендови навистина добиваат на важност во нивната ниша, бидејќи податоците се разфрлани на повеќе платформи. Trendly ги собира и обработува податоците во PostgreSQL база, а потоа ги прикажува преку прегледна контролна табла со графици во реално време, автоматско рангирање и известувања кога некој тренд нагло расте.',
        },
      },
    },
    faq: {
      eyebrow: 'Прашања',
      title: 'Често поставувани прашања',
      subtitle: 'Одговори на нештата што најчесто нѐ прашуваат нови клиенти.',
      items: {
        pricing: {
          question: 'Колку чини изработка на веб или мобилна апликација?',
          answer:
            'Цената зависи од обемот, сложеноста и функционалностите на проектот. По првичен разговор за целите и барањата, подготвуваме бесплатна, детална проценка пред да започнеме со работа.',
        },
        timeline: {
          question: 'Колку време трае типичен проект?',
          answer:
            'Помал маркетинг сајт обично трае 2-4 недели. Посложени платформи или мобилни апликации со повеќе функционалности трае помеѓу 2 и 4 месеци, во зависност од опсегот.',
        },
        support: {
          question: 'Дали давате поддршка по лансирањето?',
          answer:
            'Да. Нудиме пакети за одржување и поддршка по лансирањето — следиме, поправаме грешки и правиме подобрувања за да работи сѐ сигурно и по завршување на проектот.',
        },
        process: {
          question: 'Како изгледа процесот на работа со DevShop?',
          answer:
            'Минуваме низ четири чекори: откривање, дизајн и план, развој и лансирање со поддршка. Повеќе детали има во секцијата „Нашиот процес“ погоре.',
        },
        remote: {
          question: 'Дали работите со клиенти надвор од Македонија?',
          answer:
            'Да, работиме со клиенти од целиот регион и пошироко. Комуникацијата и целиот процес се одвиваат целосно далечински, со редовни повици и извештаи.',
        },
      },
    },
    contact: {
      eyebrow: 'Да разговараме',
      title: 'Контакт',
      subtitle: 'Имаш проект на ум? Пиши ни.',
      formName: 'Име',
      formEmail: 'Е-маил',
      formMessage: 'Порака',
      formSubmit: 'Испрати порака',
      formSent: 'Пораката е испратена. Ќе одговориме наскоро.',
      detailsTitle: 'Контакт податоци',
      availability: 'Одговараме на секое барање во рок од еден работен ден.',
      details: {
        address: 'Ул. Македонија 15, Скопје, Македонија',
        phone: '+389 2 123 4567',
        email: 'hello@devshop.mk',
      },
    },
    cookies: {
      text: 'Овој сајт користи колачиња за подобро корисничко искуство.',
      accept: 'Прифати',
      decline: 'Одбиј',
    },
    footer: {
      blurb:
        'Мал тим инженери и дизајнери од Скопје кој гради дигитални производи со долг век на траење.',
      quickLinks: 'Брзи врски',
      contactTitle: 'Контакт',
      rights: 'Сите права задржани.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      projects: 'Projects',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'IT studio from Skopje',
      headlineLine1: 'Software that keeps working',
      headlineLine2: 'long after launch.',
      subtext:
        'DevShop is a small team of engineers and designers building web and mobile products for companies who want things done right.',
      ctaPrimary: 'See our services',
      ctaSecondary: 'Contact us',
      proofValue: '40+',
      proofLabel: 'projects delivered',
      meta: 'Skopje, Macedonia — working with clients worldwide.',
    },
    services: {
      eyebrow: 'What we do',
      title: 'Services',
      subtitle: 'From idea to a product in production.',
      items: {
        web: {
          title: 'Web development',
          description:
            'Fast, maintainable web applications built with modern tools — from marketing sites to complex platforms.',
        },
        mobile: {
          title: 'Mobile apps',
          description:
            'Native and cross-platform mobile experiences for iOS and Android, connected to your backend.',
        },
        design: {
          title: 'UI/UX design',
          description:
            'Interfaces that are easy to use and good to look at, grounded in real user needs.',
        },
        support: {
          title: 'Maintenance & support',
          description:
            'We monitor, fix and improve existing systems so they run reliably, every day.',
        },
        consulting: {
          title: 'IT consulting',
          description:
            'We help with technology choices, architecture and process for growing teams.',
        },
      },
    },
    process: {
      eyebrow: 'How we work',
      title: 'Our process',
      subtitle: 'Clear steps, regular communication and predictable outcomes.',
      steps: {
        discover: {
          title: 'Discover',
          description:
            'We dig into your goals, users and business context before writing a single line of code.',
        },
        design: {
          title: 'Design & plan',
          description:
            'We map out a visual and technical plan — wireframes, architecture and a timeline you can rely on.',
        },
        build: {
          title: 'Build',
          description:
            'Iterative development with regular demos, clean code and testing along the way.',
        },
        launch: {
          title: 'Launch & support',
          description:
            'We ship the product and stick around for monitoring, maintenance and upgrades.',
        },
      },
    },
    projects: {
      eyebrow: 'Portfolio',
      title: 'Projects',
      subtitle: 'Selected work from recent years.',
      visitLabel: 'Visit site',
      items: {
        najdikniga: {
          title: 'Najdi Kniga',
          description:
            'Readers struggle to track down where a specific title is available and at what price, especially when checking multiple bookstores and libraries separately. Najdi Kniga solves this with a single platform backed by a PostgreSQL database, where users search, filter by genre and author, and compare availability and pricing across thousands of titles in one place.',
        },
        trendly: {
          title: 'Trendly',
          description:
            'Teams struggle to tell which trends are actually gaining traction in their niche, since the data is scattered across multiple platforms. Trendly collects and processes that data in a PostgreSQL database, then surfaces it through a clear dashboard with real-time charts, automatic ranking, and alerts when a trend suddenly picks up.',
        },
      },
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      subtitle: 'Answers to what new clients ask us most often.',
      items: {
        pricing: {
          question: 'How much does a web or mobile app cost?',
          answer:
            'Pricing depends on the scope, complexity and features of the project. After an initial conversation about your goals and requirements, we put together a free, detailed estimate before any work begins.',
        },
        timeline: {
          question: 'How long does a typical project take?',
          answer:
            'A smaller marketing site usually takes 2-4 weeks. More complex platforms or feature-rich mobile apps take between 2 and 4 months, depending on scope.',
        },
        support: {
          question: 'Do you offer support after launch?',
          answer:
            'Yes. We offer maintenance and support packages after launch — we monitor, fix bugs and ship improvements so everything keeps running reliably once the project is live.',
        },
        process: {
          question: 'What does working with DevShop look like?',
          answer:
            'We go through four steps: discovery, design & planning, build, and launch with support. See the "Our process" section above for more detail.',
        },
        remote: {
          question: 'Do you work with clients outside Macedonia?',
          answer:
            'Yes, we work with clients across the region and beyond. The whole process runs fully remote, with regular calls and progress updates.',
        },
      },
    },
    contact: {
      eyebrow: 'Let’s talk',
      title: 'Contact',
      subtitle: 'Have a project in mind? Send us a note.',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      formSubmit: 'Send message',
      formSent: 'Message sent. We’ll get back to you soon.',
      detailsTitle: 'Contact details',
      availability: 'We reply to every request within one business day.',
      details: {
        address: '15 Makedonija St, Skopje, Macedonia',
        phone: '+389 2 123 4567',
        email: 'hello@devshop.mk',
      },
    },
    cookies: {
      text: 'This site uses cookies to improve your experience.',
      accept: 'Accept',
      decline: 'Decline',
    },
    footer: {
      blurb:
        'A small team of engineers and designers from Skopje building digital products built to last.',
      quickLinks: 'Quick links',
      contactTitle: 'Contact',
      rights: 'All rights reserved.',
    },
  },
};
