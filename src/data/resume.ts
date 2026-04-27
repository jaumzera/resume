export const header = {
  name: 'João Massan',
  title: 'Senior Software Engineer',
  subtitle: 'Backend · Distributed Systems · Cloud-Native · AI',
  tagline: '20+ years architecting and shipping production systems at scale — from national telecom platforms to eBay\'s global marketplace.',
}

export const summary =
  "Polyglot Senior Software Engineer with 20+ years designing and operating production systems at scale. Backend and cloud-native specialist — Java, Python, Node.js, Kubernetes, AWS — currently embedded at eBay engineering high-throughput data pipelines that process billions of daily events. Proven track record of owning full technical direction on greenfield platforms, from cloud infrastructure to mobile. Hands-on with LLMs in production (MCP servers, PySpark, applied AI pipelines) and actively investing in AI as a first-class engineering discipline. Open to Senior/Staff direct-hire and contract opportunities at US-based companies — available as a foreign contractor or via LLC."

export const heroMetrics = [
  { value: '20+',          label: 'Years of Experience' },
  { value: 'Billions/Day', label: 'Events Processed at eBay' },
  { value: 'Java · Python · Node.js', label: 'Polyglot Core Stack' },
]

export const highlights = [
  { value: '20+', label: 'Years of Experience' },
  { value: '8',   label: 'Companies & Clients' },
  { value: '6',   label: 'Certifications' },
  { value: '5+',  label: 'Industries' },
]

export const aboutHighlights = [
  "Engineered high-throughput data pipelines at eBay processing billions of messages daily — driving SEO discoverability across one of the world's largest e-commerce platforms",
  "Architected a greenfield cloud-native platform from scratch on AWS EKS for one of Brazil's largest agribusiness companies — sole engineer across backend, mobile, and infrastructure",
  "Proven polyglot: deep Java expertise, strong Python and Node.js, hands-on LLM tooling in production (MCP servers, PySpark) — comfortable owning full-stack architecture decisions",
]

export const skills = {
  core:     ['Java', 'Python', 'Node.js', 'Spring Boot', 'Kubernetes', 'AWS'],
  strong:   ['Distributed Systems', 'Kafka', 'PySpark', 'PostgreSQL', 'Docker', 'CI/CD'],
  exposure: ['Flutter', 'Hadoop', 'RabbitMQ', 'MongoDB', 'IBM Watson', 'ReactJS'],
}

export interface EducationEntry {
  degree: string
  institution: string
  period: string
}

export const education: EducationEntry[] = [
  {
    degree: 'Postgraduate Diploma in Software Engineering with UML',
    institution: 'Centro Universitário Filadélfia – Unifil',
    period: 'Feb 2010 – Jul 2011',
  },
  {
    degree: 'Superior Analysis and Systems Development Course',
    institution: 'Universidade Tecnológica Federal do Paraná – UTFPR',
    period: 'Mar 2003 – Dec 2007',
  },
]

export interface CertificationEntry {
  title: string
  issuer: string
  year: number
  highlighted: boolean
}

export const certifications: CertificationEntry[] = [
  { title: 'Certified Kubernetes Application Developer (CKAD)', issuer: 'Cloud Native Foundation', year: 2022, highlighted: true },
  { title: 'Professional Scrum Master (PSM I)',                  issuer: 'Scrum.org',              year: 2018, highlighted: true },
  { title: 'Oracle Java Persistence API Developer Certified Expert', issuer: 'Oracle',             year: 2017, highlighted: false },
  { title: 'Oracle Java EE Enterprise JavaBeans Developer Certified', issuer: 'Oracle',            year: 2016, highlighted: false },
  { title: 'Oracle Certified Web Component Developer',           issuer: 'Oracle',                 year: 2014, highlighted: false },
  { title: 'Oracle Certified Java Programmer',                   issuer: 'Oracle',                 year: 2012, highlighted: false },
]

export interface ExperienceDetails {
  context: string
  responsibilities: string[]
  techStack: string[]
  highlights: string[]
}

export interface ExperienceEntry {
  role: string
  company: string
  url?: string
  period: string
  location: string
  description: string
  bullets: string[]
  details: ExperienceDetails
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Senior Software Engineer — eBay Inc. (via Avenue Code)',
    company: 'Avenue Code',
    url: 'https://www.avenuecode.com.br',
    period: 'May 2022 – Present',
    location: 'Remote',
    description: "Embedded full-time at eBay Inc., engineering backend services and data pipelines that drive product discoverability across eBay's global marketplace at billions-of-events-per-day scale.",
    bullets: [
      "Engineer backend services and data pipelines processing billions of daily events to drive SEO discoverability across eBay's global marketplace",
      'Designed and shipped MCP server infrastructure enabling LLM-native tooling in production — among the first such deployments in eBay\'s engineering org',
      'Build high-throughput DOM processing pipelines extracting structured data from the web at eBay scale, optimizing crawlability and indexing performance for hundreds of millions of listings',
      'Collaborate with distributed NA + EMEA engineering teams on architecture decisions affecting millions of daily product impressions',
    ],
    details: {
      context:
        "Avenue Code is a software consultancy that places senior engineers at leading technology companies. This engagement is a full-time placement within eBay's engineering organization, working as an integral team member on the SEO Tools squad after a ~60-day, multi-stage interview process with code challenges, design reviews, and technical deep-dives.",
      responsibilities: [
        "Develop and maintain SEO tooling services that optimize product listing discoverability across eBay's global marketplace",
        "Design and review system architecture decisions with eBay's engineering leadership",
        "Collaborate with eBay's international teams across NA and EMEA time zones",
        'Apply rigorous testing standards including unit, integration, and E2E tests',
        'Contribute to CI/CD pipeline improvements and release processes',
      ],
      techStack: ['Java', 'Python', 'PySpark', 'Node.js', 'Spring Boot', 'Kubernetes', 'Kafka', 'NoSQL'],
      highlights: [
        'Systems ingest and process billions of messages per day across Kafka-backed, Kubernetes-native infrastructure',
        'Built MCP servers for LLM interoperability — production AI tooling at eBay scale',
        'DOM processing pipelines serve SEO optimization for hundreds of millions of product listings globally',
      ],
    },
  },
  {
    role: 'Solutions Architect & Lead Engineer',
    company: 'Farmbits',
    period: 'Jul 2018 – May 2022',
    location: 'Hybrid — Londrina, PR, Brazil',
    description:
      "Architected the entire cloud-native digital platform from scratch for one of Brazil's largest agribusiness companies. Led all engineering decisions — AWS EKS infrastructure, Java/Spring Boot microservices, Vue.js frontend, and Flutter mobile — as sole engineer on a greenfield startup.",
    bullets: [
      'Architected and built the full cloud-native platform on AWS EKS from day one — sole engineer across backend (Java/Spring Boot), web (Vue.js), and mobile (Flutter/Dart)',
      'Designed offline-first Flutter mobile app replicating SAP pricing logic entirely on-device, enabling field consultants to generate quotes in zero-connectivity rural environments',
      'Led engineering culture, technical hiring, and architectural direction for the client\'s digital innovation subsidiary',
      'Operated AWS EKS cluster, GitLab CI/CD pipelines, and all container infrastructure across production environments',
      'Shipped Flutter to production before the framework\'s own 1.0 production-readiness recommendation — serving thousands of agribusiness customers',
    ],
    details: {
      context:
        "One of Brazil's largest grain traders was launching a digital initiative entirely separate from their consolidated SAP infrastructure — fully web-based, container-native, built from scratch. I was brought in to define the entire technical direction for their digital spin-off. Every architectural decision was mine. Flutter's own documentation still cautioned against production use at the time; we shipped it anyway.",
      responsibilities: [
        'Create and maintain the AWS EKS cluster and the entire container-based service architecture from day one',
        "Build and operate Spring Boot microservices for the Farmer Portal — a web platform connecting the client with thousands of agribusiness customers",
        'Develop the field consultant mobile app in Flutter/Dart, including an offline-first architecture for agronomists working in remote areas with no connectivity',
        'Replicate SAP pricing and inventory composition logic entirely offline on the mobile device, allowing consultants to browse products and generate quotes with zero network dependency',
        'Lead a small team across all layers: Kubernetes ops, backend, VueJS frontend, and Flutter mobile',
      ],
      techStack: ['Java 8/11/14', 'Spring Boot', 'PostgreSQL', 'AWS EKS', 'Kubernetes', 'Flutter', 'Dart', 'Vue.js', 'Docker', 'GitLab CI'],
      highlights: [
        'The offline-first Flutter app allowed agronomists to generate full price quotes in the most remote regions of rural Brazil — areas with no phone signal whatsoever',
        'Replicating SAP pricing logic offline on a mobile device was a significant technical challenge; it meant the app had to function as a self-contained quoting engine',
        'Shipped Flutter to production before the framework itself recommended it',
        'Sole engineer responsible for the full stack: cloud infrastructure, backend services, web frontend, and mobile app',
      ],
    },
  },
  {
    role: 'Remote Java Analyst',
    company: 'Navita',
    url: 'http://www.navita.com.br',
    period: 'Jun 2018 – 2019',
    location: 'Remote',
    description:
      'Engineered features and performance improvements for the Connect Platform, a SaaS for corporate IT and telecom billing auditing built on Spring Boot, Angular, and PostgreSQL.',
    bullets: [
      'Delivered feature additions, bug fixes, and performance improvements for Connect Platform across Spring Boot backend and Angular frontend',
      'Contributed to AngularJS → Angular 7 frontend migration',
      'Operated in a fully remote, async-first engineering team — years before remote-first became industry standard',
    ],
    details: {
      context:
        "Navita was my first experience working with a fully remote team — and a meaningful inflection point technically. This was when Spring Boot had definitively overtaken Java EE as the market standard, and I made that shift here. It was also my first real exposure to cloud-native tooling (AWS ECS) and to JavaScript frameworks running in the browser, specifically AngularJS transitioning to Angular.",
      responsibilities: [
        "Maintain and evolve the Connect Platform's Spring Boot backend — a SaaS tool for auditing corporate IT and telecom billing",
        'Work across both the legacy AngularJS frontend and the in-progress Angular 7 migration',
        'Adapt to fully asynchronous, remote-first collaboration — distributed standup, async code review, no shared office',
        'Run this engagement concurrently with the early stages of the Farmbits project',
      ],
      techStack: ['Java', 'Spring Boot', 'AngularJS', 'Angular 7', 'PostgreSQL', 'AWS ECS'],
      highlights: [
        'First fully remote engagement — years before remote work became the industry norm',
        'Marked the definitive shift from Java EE to Spring Boot in my stack',
        'First exposure to AWS ECS and browser-based JavaScript frameworks at production scale',
      ],
    },
  },
  {
    role: 'Java Tech Lead',
    company: 'X-Brain Desenvolvimento de Sistemas',
    url: 'http://www.xbrain.com.br',
    period: 'May 2014 – 2018',
    location: 'Londrina, PR, Brazil',
    description:
      "Led architecture migration of NET/Claro's national Door-to-Door sales platform from Java EE monolith to Spring Boot microservices + ReactJS. Built VoIP predictive dialer and integrated IBM Watson NLP chatbots.",
    bullets: [
      "Led architecture migration of NET/Claro's national sales platform from Java EE monolith to Spring Boot microservices + ReactJS",
      'Designed and built a VoIP-based predictive dialer eliminating manual-dialing wait time, measurably increasing operator throughput',
      'Integrated IBM Watson NLP chatbots via Node.js — among the earliest production chatbot deployments for a commercial sales channel in Brazil',
      'Led cross-functional team through full-stack modernization: backend, ReactJS + Redux frontend, messaging (RabbitMQ), and MongoDB',
    ],
    details: {
      context:
        'I was invited back to X-Brain in 2014 with a new challenge: Claro had acquired NET, and the mission was to embed the full Claro product catalog into the sales platform we had originally built for NET. What followed was one of the most technically diverse periods of my career — beyond the catalog integration, I got to build a predictive dialer and prototype some of the earliest chatbot work done in Brazil using IBM Watson.',
      responsibilities: [
        "Integrate the Claro product catalog into the existing NET sales platform, merging two distinct commercial structures",
        'Architect and build a VoIP-based predictive dialer that automatically called customers and only connected a live agent once the customer had answered — eliminating idle wait time for operators',
        'Experiment with Natural Language Processing (NLP) and IBM Watson to build an autonomous chatbot capable of answering questions about the product catalog',
        'Lead a small team through the platform modernization from Java EE/JSF monolith to Spring Boot microservices',
        'Implement ReactJS + Redux frontend to replace legacy JSF views',
      ],
      techStack: ['Java 8', 'Java EE 6/7', 'Spring Boot', 'ReactJS', 'Redux', 'RabbitMQ', 'Oracle', 'MongoDB', 'Node.js', 'IBM Watson', 'VoIP'],
      highlights: [
        'The predictive dialer measurably increased operator efficiency by eliminating manual dialing and unanswered-call wait time',
        'One of the earliest IBM Watson chatbot integrations built for a commercial sales channel in Brazil',
        'ReactJS adoption at a time when it was still a novelty in the Brazilian market',
        "Platform remained NET/Claro's primary digital Door-to-Door acquisition channel throughout this period",
      ],
    },
  },
  {
    role: 'IT Specialist Level III',
    company: 'Infracommerce Negócios',
    url: 'http://www.infracommerce.com.br',
    period: 'Mar 2013 – Mar 2014',
    location: 'Londrina - PR / São Paulo - SP, Brazil',
    description:
      "Redesigned the pricing model and multi-tenant architecture of Infracommerce's B2C marketplace platform — the foundation that evolved into Extra.com.br, one of Brazil's first large-scale online marketplaces.",
    bullets: [
      'Redesigned the platform pricing model from per-product to per-SKU, unlocking the multi-seller marketplace architecture',
      'Evolved platform from single-tenant e-commerce to full multi-tenant marketplace, serving major Brazilian retailers',
      'Delivered third-party integrations (logistics, payment, catalog) via JAX-RS and JAX-WS',
    ],
    details: {
      context:
        "Accurate was acquired by Infracommerce, and the Carrefour e-commerce platform we had built became the foundation for something bigger: one of Brazil's first true marketplaces, which would eventually evolve into Extra.com.br. The platform had to grow from a single-retailer e-commerce site into a multi-tenant marketplace — a significant architectural shift that touched every layer of the system.",
      responsibilities: [
        'Lead the pricing model restructuring: migrated from a per-product-only pricing architecture to a hybrid model supporting both per-product and per-SKU pricing',
        'Evolve the platform from single-tenant e-commerce to a full multi-tenant marketplace architecture',
        'Participate actively in release management with the Infra team: consolidating tickets, writing deployment procedures, rollback plans, and automation scripts',
        'Join late-night timed release windows alongside the QA team, running regression tests and fixing last-minute bugs in the pre-production environment',
        'Build and maintain third-party integrations (logistics, payment, catalog) via JAX-RS and JAX-WS',
      ],
      techStack: ['Java 6', 'Oracle ADF', 'JSF', 'Facelets', 'JAX-RS', 'JAX-WS', 'Oracle Database', 'Lucene', 'Solr', 'JavaScript'],
      highlights: [
        "The platform evolved into Extra.com.br — one of Brazil's first large-scale online marketplaces",
        'The per-SKU pricing model unlocked the marketplace model itself: without it, multi-seller product variants could not be individually priced',
        'Early immersion in structured release management: rollback plans, regression suites, and late-night go-lives — formative experience in production discipline',
        'One of the few engineers in Brazil working on a platform of this scale and complexity at the time',
      ],
    },
  },
  {
    role: 'Java Expert Level III',
    company: 'Accurate Software',
    url: 'https://www.accurate.com.br',
    period: 'Mar 2012 – Mar 2013',
    location: 'Londrina - PR / São Paulo - SP, Brazil',
    description:
      "Designed and built a dynamic WYSIWYG i18n engine for Carrefour's e-commerce platform, enabling runtime language switching across Portuguese, English, and French without code deploys.",
    bullets: [
      "Designed and built a WYSIWYG dynamic i18n engine for Carrefour's e-commerce platform — runtime language switching with zero redeployment",
      'Delivered multilingual support for PT, EN, and FR; content managers could translate the storefront without engineering involvement',
    ],
    details: {
      context:
        "Accurate had just launched Carrefour's e-commerce platform in Brazil — a technically ambitious project mixing Oracle's enterprise Java EE suite (ADF) with open-source Java EE components. I joined the team at this inflection point, inheriting a large, hybrid codebase and immediately taking on one of its most complex challenges: making the entire platform dynamically multilingual.",
      responsibilities: [
        'Develop the dynamic i18n engine from scratch, enabling runtime language switching without redeployment',
        'Build a WYSIWYG editor integration so non-technical content managers could translate the platform independently',
        'Maintain and evolve the hybrid Oracle ADF + Java EE platform across its full stack',
        'Work with Lucene/Solr for search indexing across multilingual product catalogs',
      ],
      techStack: ['Java 6', 'Oracle ADF', 'JSF', 'Facelets', 'Oracle Database', 'Lucene', 'Solr', 'JAX-RS', 'JAX-WS', 'JavaScript'],
      highlights: [
        "The i18n engine supported Portuguese, English, and French simultaneously — enabling Carrefour's Brazilian platform to serve a multilingual audience",
        'Content managers could translate the entire storefront without a single line of code or a developer on call',
        'First hands-on experience with Oracle ADF at enterprise scale — a complex, opinionated stack rarely seen outside large Oracle shops',
      ],
    },
  },
  {
    role: 'Development Manager / Java Software Architect',
    company: 'BRCont & IBPT',
    url: 'https://ibpt.com.br',
    period: '2011 – 2012',
    location: 'Londrina/Curitiba, PR, Brazil',
    description:
      "Architected and led development of BRCont's SaaS platform — acquired by IBPT in under 12 months. Contributed to 'Lupa no Imposto', now embedded in every Brazilian fiscal receipt.",
    bullets: [
      'Architected BRCont SaaS from scratch; company acquired by IBPT in under 12 months of operation',
      "Contributed to 'Lupa no Imposto' — software now embedded in every Brazilian fiscal receipt displaying estimated tax percentages",
      'Led development team through post-acquisition integration and platform evolution at IBPT',
    ],
    details: {
      context:
        'After the X-Brain chapter, I carried that proven stack into a new venture: BRCont, a startup building a public SaaS for comparing corporate financial statements. The business model was ahead of its time — provide fiscal insights from balance sheets to subscribers, and pay freelance accountants to enter the data. BRCont was acquired by IBPT (Instituto Brasileiro de Planejamento Tributário) in under a year, which opened the door to a much larger stage.',
      responsibilities: [
        'Architect and build the BRCont SaaS platform from scratch, reusing and evolving the JBoss Seam stack',
        'Design the freelance accountant data-entry model and subscriber access tiers',
        'Lead the development team through the post-acquisition integration with IBPT',
        'Contribute to new IBPT tools: "Lupa no Imposto" and the Empresômetro platform',
        'Adopt RESTful integrations and more robust full application server stacks (JBoss EE)',
      ],
      techStack: ['Java', 'JBoss Seam', 'JBoss AS 5/6', 'Java EE 5', 'JSF', 'Facelets', 'PostgreSQL', 'REST'],
      highlights: [
        'BRCont acquired by IBPT in under 12 months of operation',
        '"Lupa no Imposto" — a tool born from this work — later became part of the software that displays the estimated tax percentage on every Brazilian fiscal receipt (nota fiscal)',
        'Empresômetro.com.br, an evolution of the original balance comparison platform, reached a broad audience of accountants and businesses nationwide',
        'First exposure to RESTful architecture at a time when the industry was just beginning to move beyond SOAP',
      ],
    },
  },
  {
    role: 'Analyst / Developer Java',
    company: 'X-Brain Desenvolvimento de Sistemas',
    url: 'http://www.xbrain.com.br',
    period: 'Sep 2007 – Feb 2011',
    location: 'Londrina, PR, Brazil',
    description:
      "Rewrote NET's legacy PHP sales platform in Java from scratch. The rebuilt system became NET's official national Door-to-Door sales hub — deployed across ~50 franchises, and likely one of the first real-time GPS field-sales tracking systems in Brazil.",
    bullets: [
      "Designed and built NET's national Door-to-Door sales platform in Java/JBoss Seam from scratch — replaced a legacy PHP system and rolled out across ~50 national franchises",
      "Delivered what was likely one of the first real-time GPS tracking systems for a large field sales force in Brazil, running on Nokia E71 devices",
    ],
    details: {
      context:
        "It was 2007 — Symbian ruled mobile, Android was barely a project, and the iPhone had just launched to a skeptical market. Resistive touchscreens were unpopular: greasy, scratchy, unreliable. In that environment, NET's door-to-door sales reps were closing cable TV deals on a Nokia E71 — a QWERTY smartphone. X-Brain had an early MVC prototype for this channel and invited me to take it to production. I designed a lightweight Java stack from scratch and built the platform that would become NET's official Door-to-Door sales hub nationwide.",
      responsibilities: [
        'Own the full stack end-to-end: Linux servers (running on office PCs), Java backend, database schema, migrations, SQL routines, and UI report design',
        'Design and implement a lightweight stack using JBoss Seam (DI), JSF/Facelets + RichFaces (frontend), running on Tomcat 5',
        'Manage dependencies manually — Maven was barely known; a Subversion folder called "seam4tomcat" bundled the minimal JARs to run Seam outside JBoss AS',
        'Build an Ant-based deployment pipeline with ~50 individual branch configurations — one per NET franchise — each compiling, packaging, and deploying to its Tomcat instance',
        'Explore Nokia E71 hardware capabilities (GPS, connectivity) and design features on top of them',
      ],
      techStack: ['Java', 'JBoss Seam 2', 'JSF', 'Facelets', 'RichFaces', 'Tomcat 5', 'Ant', 'Subversion', 'Linux', 'Oracle Database', 'PHP'],
      highlights: [
        "The platform became NET's official Door-to-Door channel hub, rolled out across ~50 national franchises",
        'Likely one of the first applications in Brazil — and among the earliest worldwide — to deliver real-time GPS tracking of a large field sales force',
        'The Ant-based multi-branch build pipeline was an early, handcrafted form of CI/CD, years before the tooling mainstream caught up',
        'One of the few large-scale JBoss Seam applications running in production with high concurrent user load at the time',
        'Sole engineer responsible for the entire system: infrastructure, backend, database, frontend, and deployments',
      ],
    },
  },
]

export const techByCategory: Record<string, string[]> = {
  Backend:          ['Java', 'Java EE', 'Spring Boot', 'Python', 'Node.js', 'PHP'],
  Frontend:         ['ReactJS', 'Vue.js', 'JavaScript', 'TypeScript', 'AngularJS', 'Angular'],
  'Cloud & DevOps': ['AWS', 'Kubernetes', 'Docker', 'Linux', 'CI/CD', 'GitLab CI'],
  Mobile:           ['Flutter', 'Dart', 'Android'],
  Databases:        ['PostgreSQL', 'Oracle', 'MySQL', 'MongoDB'],
  Other:            ['Hadoop', 'RabbitMQ', 'IBM Watson', 'Solr/Lucene', 'JBoss Seam'],
}

export const technologies = [
  'Android', 'Flutter', 'Hadoop', 'Java', 'Java EE', 'JavaScript',
  'Kubernetes', 'Linux', 'MySQL', 'Oracle', 'PostgreSQL', 'Python',
  'Spring Boot', 'ReactJS', 'AWS', 'Docker', 'MongoDB', 'Node.js',
  'Vue.js', 'TypeScript',
]

export const interests = [
  'Design Patterns', 'Domain-Driven Design', 'Test-Driven Design',
  'Code design and quality', 'SOLID and DRY principles', 'Joel Test',
  'Bitcoin and Blockchain',
]

export const contact = {
  email:    'joaomassan@gmail.com',
  phone:    '+55 43 99103 6116',
  website:  'http://www.joaomassan.com.br',
  github:   'https://github.com/jaumzera',
  linkedin: 'https://www.linkedin.com/in/joaomassan/',
}
