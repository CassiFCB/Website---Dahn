import type { Lang } from './routes';

/**
 * Alle festen Texte der Website in Deutsch und Englisch.
 * Lebenslauf-Stationen und Projekte stehen als Markdown in src/content/.
 */
export const ui = {
  de: {
    meta: {
      title: 'Cassian Dahn – Marketing, Key Account & Operations',
      description:
        'Portfolio von Cassian Dahn, International Business (B.A.): Praxis im FMCG Key Account Management und in Digitalprojekten. Einstieg in Marketing, Brand Management, Einkauf oder Vertrieb.',
    },
    skipLink: 'Zum Inhalt springen',
    menu: 'Menü',
    langSwitch: 'Switch to English',
    hero: {
      eyebrow: 'International Business (B.A.)',
      lead: 'Ich verbinde Marketing- und Vertriebsdenken mit sauberer operativer Umsetzung – zahlenaffin, hands-on und international erprobt.',
      sub: 'Praxis im FMCG Key Account Management (InComm, Spanien) und in Digitalprojekten (Europa-Park). Mein Ziel: der Einstieg in Marketing, Brand Management, Einkauf oder Vertrieb.',
      availability: 'Verfügbar ab 02.01.2027 · umzugs- und reisebereit',
      ctaContact: 'Kontakt aufnehmen',
      ctaCv: 'Lebenslauf (PDF)',
      photoAlt: 'Porträtfoto von Cassian Dahn',
    },
    stats: [
      { value: '~5', label: 'FMCG Key Accounts im europäischen Handel betreut' },
      { value: '8', label: 'Mitarbeitende pro Schicht operativ geführt' },
      { value: '3', label: 'Länder in Studium & Praxis: DE, ES, NL' },
      { value: 'C2', label: 'Englisch – plus Französisch & Spanisch (A2)' },
    ],
    about: {
      title: 'Profil',
      kicker: 'Über mich',
      paragraphs: [
        'Ich habe International Business an der Karlshochschule in Karlsruhe studiert – mit Schwerpunkten in Marketing, International Management sowie Accounting & Controlling und einem Auslandssemester in den Niederlanden.',
        'In der Praxis habe ich gelernt, beides zusammenzubringen: Bei InComm in Valencia habe ich FMCG Key Accounts betreut, POS-Aktionen mit dem Handel koordiniert und deren Erfolg in Excel und HubSpot ausgewertet. Im Europa-Park begleite ich Digitalisierungsprojekte für App und Website – von der Abstimmung mit externen Entwicklern bis zur Pflege im CMS.',
        'Was mich auszeichnet: Ich arbeite gern mit Zahlen, packe operativ mit an und behalte auch in Hochlastphasen den Überblick – das habe ich als Schichtleiter mit bis zu acht Mitarbeitenden bewiesen.',
      ],
      targetTitle: 'Wonach ich suche',
      targets: ['Marketing', 'Brand Management', 'Einkauf', 'Vertrieb / Key Account'],
    },
    skills: {
      title: 'Kompetenzen',
      kicker: 'Was ich mitbringe',
      pillars: [
        {
          title: 'Marketing & Sales',
          items: [
            'Key Account Management im FMCG-Umfeld',
            'Kampagnenplanung (AIDA) und Mediaplanung',
            'POS-Aktionen und Handelsmarketing',
            'Markt- und Wettbewerbsanalysen',
            'Upselling und Kundenorientierung',
          ],
        },
        {
          title: 'Operations & Projekte',
          items: [
            'Digitalisierungsprojekte (App, Website, CMS)',
            'Schnittstelle zu Dienstleistern und Fachbereichen',
            'KPI-Reporting und datenbasierte Steuerung',
            'Absatz-, Produktions- und Preisplanung',
            'Teamführung im Schichtbetrieb',
          ],
        },
      ],
      toolsTitle: 'Tools',
      tools: [
        { group: 'Office', items: ['Excel (Kennzahlen, Budgets)', 'PowerPoint', 'Word'] },
        { group: 'CRM & CMS', items: ['HubSpot', 'Pipedrive', 'Aqua CMS', 'WordPress'] },
        { group: 'Marketing & Content', items: ['Google Analytics', 'Canva', 'CapCut', 'Final Cut'] },
        { group: 'KI', items: ['Claude Code', 'Copilot', 'Perplexity'] },
      ],
    },
    experience: { title: 'Berufserfahrung', kicker: 'Stationen' },
    projects: {
      title: 'Projekte',
      kicker: 'Case Studies',
      intro: 'Ausgewählte Projekte aus Praxis und Studium – jeweils mit Ausgangslage, Aufgabe, Vorgehen und Ergebnis.',
      more: 'Case Study lesen',
      back: 'Zurück zu allen Projekten',
      situation: 'Ausgangslage',
      task: 'Aufgabe',
      action: 'Vorgehen',
      result: 'Ergebnis',
    },
    education: { title: 'Ausbildung', kicker: 'Studium & Schule' },
    personal: {
      title: 'Persönliches',
      languagesTitle: 'Sprachen',
      languages: [
        { name: 'Deutsch', level: 'Muttersprache' },
        { name: 'Englisch', level: 'C2' },
        { name: 'Französisch', level: 'A2' },
        { name: 'Spanisch', level: 'A2' },
      ],
      engagementTitle: 'Engagement',
      engagement: [
        { role: 'Jugend-Basketballtrainer & Teamleiter', org: 'TSV Berghausen', period: '2016 – 2020' },
        { role: 'Ehrenamtlicher Aktivist', org: 'Anonymous for the Voiceless, Karlsruhe', period: 'seit 08/2026' },
      ],
      interestsTitle: 'Interessen',
      interests: 'Basketball, Fitness, pflanzliche Lebensweise, Sprachen',
      otherTitle: 'Sonstiges',
      other: ['Führerschein Klasse B', 'Verfügbar ab 02.01.2027', 'Umzugs- und Reisebereitschaft'],
    },
    contact: {
      title: 'Kontakt',
      kicker: 'Lassen Sie uns sprechen',
      intro: 'Sie suchen Verstärkung in Marketing, Vertrieb, Einkauf oder Operations? Ich freue mich über Ihre Nachricht – in der Regel antworte ich innerhalb von 24 Stunden.',
      directTitle: 'Direkt',
      emailLabel: 'E-Mail',
      linkedinLabel: 'LinkedIn',
      cvLabel: 'Lebenslauf',
      cvLink: 'PDF herunterladen',
      form: {
        name: 'Name',
        email: 'E-Mail',
        company: 'Unternehmen (optional)',
        message: 'Nachricht',
        consentBefore: 'Ich habe die ',
        consentLink: 'Datenschutzerklärung',
        consentAfter: ' gelesen und bin mit der Verarbeitung meiner Angaben zur Beantwortung meiner Anfrage einverstanden.',
        submit: 'Nachricht senden',
        sending: 'Wird gesendet …',
        success: 'Vielen Dank! Ihre Nachricht ist angekommen – ich melde mich zeitnah bei Ihnen.',
        error: 'Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt eine E-Mail.',
        notConfigured: 'Das Kontaktformular ist noch nicht freigeschaltet. Bitte schreiben Sie mir direkt eine E-Mail.',
        required: 'Pflichtfeld',
        subject: 'Neue Nachricht über cassian-dahn Portfolio',
      },
    },
    footer: {
      legal: 'Impressum',
      privacy: 'Datenschutz',
      rights: 'Alle Rechte vorbehalten.',
      top: 'Nach oben',
    },
    thanks: {
      title: 'Vielen Dank!',
      text: 'Ihre Nachricht ist angekommen. Ich melde mich so bald wie möglich bei Ihnen.',
      back: 'Zurück zur Startseite',
    },
    notFound: {
      title: 'Seite nicht gefunden',
      text: 'Die angeforderte Seite existiert nicht (mehr).',
      back: 'Zur Startseite',
    },
    video: {
      notice: 'Beim Abspielen wird eine Verbindung zu {provider} hergestellt und Daten werden übertragen.',
      button: 'Video laden',
    },
  },

  en: {
    meta: {
      title: 'Cassian Dahn – Marketing, Key Account & Operations',
      description:
        'Portfolio of Cassian Dahn, International Business (B.A.): hands-on experience in FMCG key account management and digital projects. Seeking an entry-level role in marketing, brand management, procurement or sales.',
    },
    skipLink: 'Skip to content',
    menu: 'Menu',
    langSwitch: 'Auf Deutsch wechseln',
    hero: {
      eyebrow: 'International Business (B.A.)',
      lead: 'I combine a marketing and sales mindset with reliable operational execution – numbers-driven, hands-on and proven in international teams.',
      sub: 'Experience in FMCG key account management (InComm, Spain) and digital projects (Europa-Park, Germany). My goal: an entry-level role in marketing, brand management, procurement or sales.',
      availability: 'Available from 2 Jan 2027 · open to relocation and travel',
      ctaContact: 'Get in touch',
      ctaCv: 'CV (PDF, German)',
      photoAlt: 'Portrait photo of Cassian Dahn',
    },
    stats: [
      { value: '~5', label: 'FMCG key accounts managed in European retail' },
      { value: '8', label: 'team members led per shift' },
      { value: '3', label: 'countries of study & work: DE, ES, NL' },
      { value: 'C2', label: 'English – plus French & Spanish (A2)' },
    ],
    about: {
      title: 'Profile',
      kicker: 'About me',
      paragraphs: [
        'I studied International Business at Karlshochschule International University in Karlsruhe, Germany, focusing on marketing, international management and accounting & controlling, including a semester abroad in the Netherlands.',
        'In practice, I learned to bring both sides together: at InComm in Valencia, I supported FMCG key accounts, coordinated point-of-sale campaigns with retail partners and tracked their performance in Excel and HubSpot. At Europa-Park, I support digitalisation projects for the app and website – from aligning with external developers to maintaining content in the CMS.',
        'What sets me apart: I enjoy working with numbers, I get things done operationally, and I keep a clear head under pressure – as a shift lead responsible for up to eight people.',
      ],
      targetTitle: 'What I am looking for',
      targets: ['Marketing', 'Brand Management', 'Procurement', 'Sales / Key Account'],
    },
    skills: {
      title: 'Skills',
      kicker: 'What I bring',
      pillars: [
        {
          title: 'Marketing & Sales',
          items: [
            'Key account management in FMCG',
            'Campaign planning (AIDA) and media planning',
            'Point-of-sale campaigns and trade marketing',
            'Market and competitor analysis',
            'Upselling and customer focus',
          ],
        },
        {
          title: 'Operations & Projects',
          items: [
            'Digitalisation projects (app, website, CMS)',
            'Interface to vendors and business teams',
            'KPI reporting and data-driven steering',
            'Sales, production and pricing planning',
            'Team leadership in shift operations',
          ],
        },
      ],
      toolsTitle: 'Tools',
      tools: [
        { group: 'Office', items: ['Excel (KPIs, budgets)', 'PowerPoint', 'Word'] },
        { group: 'CRM & CMS', items: ['HubSpot', 'Pipedrive', 'Aqua CMS', 'WordPress'] },
        { group: 'Marketing & content', items: ['Google Analytics', 'Canva', 'CapCut', 'Final Cut'] },
        { group: 'AI', items: ['Claude Code', 'Copilot', 'Perplexity'] },
      ],
    },
    experience: { title: 'Experience', kicker: 'Career' },
    projects: {
      title: 'Projects',
      kicker: 'Case studies',
      intro: 'Selected projects from work and university – each with situation, task, approach and result.',
      more: 'Read case study',
      back: 'Back to all projects',
      situation: 'Situation',
      task: 'Task',
      action: 'Approach',
      result: 'Result',
    },
    education: { title: 'Education', kicker: 'University & school' },
    personal: {
      title: 'Personal',
      languagesTitle: 'Languages',
      languages: [
        { name: 'German', level: 'native' },
        { name: 'English', level: 'C2' },
        { name: 'French', level: 'A2' },
        { name: 'Spanish', level: 'A2' },
      ],
      engagementTitle: 'Volunteering',
      engagement: [
        { role: 'Youth basketball coach & team lead', org: 'TSV Berghausen', period: '2016 – 2020' },
        { role: 'Volunteer activist', org: 'Anonymous for the Voiceless, Karlsruhe', period: 'since 08/2026' },
      ],
      interestsTitle: 'Interests',
      interests: 'Basketball, fitness, plant-based living, languages',
      otherTitle: 'Other',
      other: ['Driving licence (class B)', 'Available from 2 Jan 2027', 'Open to relocation and travel'],
    },
    contact: {
      title: 'Contact',
      kicker: "Let's talk",
      intro: 'Looking for support in marketing, sales, procurement or operations? I look forward to hearing from you and usually reply within 24 hours.',
      directTitle: 'Direct',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      cvLabel: 'CV',
      cvLink: 'Download PDF (German)',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company (optional)',
        message: 'Message',
        consentBefore: 'I have read the ',
        consentLink: 'privacy policy',
        consentAfter: ' and agree to my details being processed to answer my enquiry.',
        submit: 'Send message',
        sending: 'Sending …',
        success: 'Thank you! Your message has arrived – I will get back to you shortly.',
        error: 'Something went wrong. Please try again or send me an email directly.',
        notConfigured: 'The contact form is not active yet. Please send me an email directly.',
        required: 'required',
        subject: 'New message via cassian-dahn portfolio',
      },
    },
    footer: {
      legal: 'Legal notice',
      privacy: 'Privacy',
      rights: 'All rights reserved.',
      top: 'Back to top',
    },
    thanks: {
      title: 'Thank you!',
      text: 'Your message has arrived. I will get back to you as soon as possible.',
      back: 'Back to home page',
    },
    notFound: {
      title: 'Page not found',
      text: 'The page you requested does not exist.',
      back: 'Go to home page',
    },
    video: {
      notice: 'Playing this video connects to {provider} and transfers data.',
      button: 'Load video',
    },
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}
