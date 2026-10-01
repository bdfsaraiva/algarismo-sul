import type { Dict } from './pt';

/** English copy. Same conventions as pt.ts: *text* → emphasis, \n → line break. */
export const en: Dict = {
  lang: 'en',
  htmlLang: 'en',
  ogLocale: 'en_GB',
  meta: {
    title: 'Algarismo Sul — Accounting, Tax and Business Advisory in Almada',
    description:
      'Accounting, tax, payroll and business advisory for companies and individuals in Almada and the south bank of the Tagus. Certified accountants, close and personal service.',
  },
  a11y: {
    skip: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main navigation',
    menu: 'Menu',
    switchLang: 'Mudar para português',
    whatsapp: 'Contact us on WhatsApp',
    home: 'Algarismo Sul — home page',
    placeholder: 'Placeholder content',
  },
  nav: {
    servicos: 'Services',
    sobre: 'About',
    equipa: 'Team',
    calendario: 'Tax calendar',
    testemunhos: 'Testimonials',
    faq: 'FAQ',
    contactos: 'Contact',
  },
  cta: {
    meeting: 'Book a meeting',
    services: 'Our services',
    call: 'Call',
    whatsapp: 'WhatsApp',
    email: 'Send an email',
  },
  hero: {
    eyebrow: 'Accounting in Almada',
    title: 'Experienced,\n*specialised*\nprofessionals.',
    lede:
      'We are a solid firm specialised in supporting business management, focused on our clients’ business and on the sustainability of their future. We invest in personal service and continuous innovation to deliver excellence.',
    stats: [
      { value: '240', label: 'Active clients', note: 'SMEs and individuals' },
      { value: '€0', label: 'First meeting', note: 'No commitment' },
    ],
    meta: ['Certified accountants (OCC)', 'GDPR compliant', 'Reply within 1 business day'],
  },
  ticker: [
    'Accounting and Tax',
    'Payroll and HR',
    'Business Advisory',
    'Start-up Support',
    'Digital Solutions',
    'IRS · IRC · VAT',
  ],
  services: {
    eyebrow: 'What we do',
    title: 'Integrated\n*services*',
    intro:
      'Reliable management information, at the right time. We handle accounting, tax, cash management, HR and advisory with rigour, whatever the size or sector of your business.',
    items: [
      {
        title: 'Accounting and Tax',
        desc: 'Rigorous bookkeeping, year-end closing and clear management reports. Tax planning designed around your reality: you pay what is due and nothing more.',
        points: ['Financial and cost accounting (SNC)', 'VAT, corporate and personal income tax, Stamp Duty', 'Form 22, IES and annual closing'],
        keywords: 'SNC · VAT · IRC · IRS',
      },
      {
        title: 'Payroll and HR',
        desc: 'Payroll, contracts and Social Security obligations, with hands-on employment support so every employee is treated with the care they deserve.',
        points: ['Payroll and payslips', 'Social Security and Tax Authority returns', 'Contracts and employment law support'],
        keywords: 'Payroll · SS · DMR',
      },
      {
        title: 'Business Advisory',
        desc: 'Tax, technology, people and strategy as business catalysts. We help you make decisions, not just record them.',
        points: ['Profitability and cash-flow analysis', 'Budgeting and management control', 'Restructuring and corporate reorganisation'],
        keywords: 'Strategy · Cash flow',
      },
      {
        title: 'Start-up Support',
        desc: 'From registering your activity to choosing the right tax regime. We are with you from your company’s first tax number to its first annual accounts.',
        points: ['Company formation and registration', 'Simplified regime or organised accounting', 'Applications for grants and incentives'],
        keywords: 'Getting started',
      },
      {
        title: 'Digital Solutions',
        desc: 'A simple, intuitive and secure service that lets you run your business entirely *online*: certified e-invoicing, digital archive and live management indicators.',
        points: ['Certified electronic invoicing', 'Digital document archive', 'Real-time management indicators'],
        keywords: '100% digital',
      },
    ],
  },
  about: {
    eyebrow: 'Who we are',
    title: 'More than a *decade*\nserving businesses.',
    lead:
      'At Algarismo Sul we offer a complete range of accounting services for companies, entrepreneurs and individuals in the Almada area. We guarantee rigorous records and on-time closing of accounts, so you can focus on what matters: growing your business.',
    body:
      'Beyond financial and cost accounting, we provide tax advice aimed at optimising your tax position. Professionals certified by the Portuguese Order of Certified Accountants, up to date with Portuguese and European law, help you pay only what is fair, with no surprises at year end.',
    differentiators: [
      { strong: 'Certified accountants', text: 'registered with the Ordem dos Contabilistas Certificados.' },
      { strong: 'Close, personal service', text: 'in Almada, in person or by video call.' },
      { strong: 'Secure document platform', text: 'fully GDPR compliant.' },
      { strong: 'Reply within one business day', text: 'for every urgent question.' },
      { strong: 'No lock-in contracts.', text: 'We want you to stay because you choose to.' },
    ],
  },
  team: {
    eyebrow: 'Our team',
    title: 'Meet the people\nwho *look after* your business.',
    intro:
      'More than technicians, we treat your business as if it were our own. A small, close-knit and highly specialised team.',
    members: [
      {
        name: 'First Last',
        role: 'Managing partner',
        bio: 'Certified accountant (OCC) with over two decades of experience with SMEs and independent professionals. Leads the team convinced that technical rigour and a personal approach go together.',
        photo: '',
        placeholder: true,
      },
      {
        name: 'First Last',
        role: 'Tax lead',
        bio: 'Specialist in corporate tax. Supports clients with tax planning and corporate restructuring, from sole traders to family groups.',
        photo: '',
        placeholder: true,
      },
      {
        name: 'First Last',
        role: 'Payroll and HR',
        bio: 'Responsible for payroll and people management. Handles payslips, contracts and social obligations knowing that every employee is a person, not a number.',
        photo: '',
        placeholder: true,
      },
    ],
  },
  calendar: {
    eyebrow: 'Tax calendar',
    title: 'The dates\nyou *cannot* miss.',
    intro:
      'Upcoming Portuguese tax and social security deadlines, calculated for today: business days, national holidays and the special August rules included.',
    disclaimer:
      'General deadlines set by the Portuguese Tax Authority (AT) and Social Security. Extensions granted by order and specific regimes may change these dates. Always confirm your case with us.',
    officialLink: 'Official AT tax calendar',
    next: 'Next deadline',
    opens: 'Opens',
    loadMore: 'Load more dates',
    loading: 'Loading…',
    done: 'No more dates in this window',
    noscript: 'Enable JavaScript to see upcoming deadlines, or check the official AT tax calendar.',
    horizon: 'Next three months',
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What our clients\n*say about us*.',
    intro: 'More than numbers, these are stories of people who handed over the paperwork to focus on what they do best.',
    items: [
      {
        quote:
          'Algarismo Sul was essential when I started my business. They helped me set up the company and choose the right tax regime, which meant real tax savings.',
        name: 'Client name',
        role: 'Owner · Retail',
        placeholder: true,
      },
      {
        quote:
          'I used to do my books at weekends. Now everything is up to date and I have my time back. It is a different quality of life, and a different quality of business.',
        name: 'Client name',
        role: 'Manager · Technology',
        placeholder: true,
      },
      {
        quote:
          'Their tax advice helped me understand my obligations and made a real difference to the company’s cash flow. I recommend them without hesitation.',
        name: 'Client name',
        role: 'Finance director · Industry',
        placeholder: true,
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'What people\n*ask us* before starting.',
    intro: 'Here are the most common questions. If yours is not here, call or message us: we reply the same day.',
    items: [
      {
        q: 'Which accounting services do you offer in Almada?',
        a: 'Financial and cost accounting, tax advice, payroll, support for starting a business and integrated management solutions. Our aim is to optimise your finances and keep you fully compliant with Portuguese tax obligations.',
      },
      {
        q: 'Is it easy to switch accountants?',
        a: 'Yes, especially for you. The code of ethics of the Order of Certified Accountants sets out how the handover works, and we deal directly with your previous accountant.',
      },
      {
        q: 'Do I need to come to the office to deliver invoices and documents?',
        a: 'No. You can scan your documents and upload them to our shared *cloud* folder or, if you prefer, we can arrange a monthly pick-up. The whole process can be 100% digital.',
      },
      {
        q: 'How does onboarding work?',
        a: 'We start with a first meeting, in person or by video call, to understand your situation. We then send a tailored proposal and, once approved, we get to work. No small print and no lock-in.',
      },
      {
        q: 'How much do your services cost?',
        a: 'Pricing depends on complexity and transaction volume. We always provide a transparent quote after reviewing your business, with no hidden costs.',
      },
      {
        q: 'How do you keep my company’s data secure?',
        a: 'We use up-to-date document management platforms with encryption in transit, access control and regular backups, in full compliance with the GDPR.',
      },
      {
        q: 'How can I optimise my business’s tax position?',
        a: 'Every case is different. We review your company structure, current tax regime and expected growth, then present concrete scenarios: VAT framework, personal versus corporate income tax, deductible costs and applicable tax incentives.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk about\nyour *business*.',
    intro: 'We are happy to talk in person, by phone or by video call.',
    address: 'Address',
    phone: 'Phone / WhatsApp',
    email: 'Email',
    openMap: 'Open in Google Maps',
  },
  map: {
    title: 'Map showing the office location',
    consent: 'The map is provided by Google. When it loads, Google may collect data and set cookies.',
    load: 'Show map',
  },
  finalCta: {
    title: 'Book your\n*first meeting*.',
    text: 'No commitment and no small print. Just a conversation to see where we can add value to your financial and tax management.',
  },
  footer: {
    tagline: 'Accounting, tax and business advisory. Experienced, specialised professionals at your service.',
    company: 'Company',
    services: 'Services',
    contacts: 'Contact',
    servicesLinks: ['Accounting', 'Tax', 'Payroll and HR', 'Advisory'],
    privacy: 'Privacy policy',
    complaints: 'Complaints Book',
    rights: 'Almada, Portugal',
  },
  cookie: {
    text: 'This site uses no tracking cookies. The Google map only loads if you ask for it.',
    more: 'Read our privacy policy',
    ok: 'Got it',
  },
  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved.',
    back: 'Back to the home page',
  },
};
