/**
 * Zentrale Profildaten: alles, was an mehreren Stellen der Website auftaucht.
 * Texte, die je Sprache unterschiedlich sind, stehen in src/i18n/ui.ts
 * bzw. in den Markdown-Dateien unter src/content/.
 */
export const profile = {
  name: 'Cassian Dahn',
  email: 'mail@cassiandahn.com',
  linkedin: 'https://www.linkedin.com/in/cassian-dahn/',
  location: 'Walzbachtal',
  country: { de: 'Deutschland', en: 'Germany' },

  /** Lebenslauf liegt unter public/cv/ */
  cvPath: 'cv/Lebenslauf_Cassian_Dahn.pdf',

  /** Für das Impressum (§ 5 DDG): ladungsfähige Anschrift */
  address: {
    street: '[[PLATZHALTER: Straße und Hausnummer]]',
    zipCity: '[[PLATZHALTER: PLZ]] Walzbachtal',
  },

  /**
   * Kontaktformular: Access Key von https://web3forms.com
   * (dort die eigene E-Mail-Adresse eintragen, Key kommt per Mail).
   * Der Key ist öffentlich unbedenklich – er erlaubt nur die Zustellung an diese Adresse.
   */
  web3formsKey: '[[PLATZHALTER: WEB3FORMS_KEY]]',
} as const;

export const isFormConfigured = !profile.web3formsKey.startsWith('[[');
