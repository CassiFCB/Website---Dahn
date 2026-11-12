export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

/** Pfade je Seite und Sprache (ohne Base-Pfad). Neue Seite = neuer Eintrag. */
export const routes = {
  home: { de: 'de/', en: 'en/' },
  legal: { de: 'de/impressum/', en: 'en/legal-notice/' },
  privacy: { de: 'de/datenschutz/', en: 'en/privacy/' },
  thanks: { de: 'de/danke/', en: 'en/thank-you/' },
  projects: { de: 'de/projekte/', en: 'en/projects/' },
} as const;
export type RouteKey = keyof typeof routes;

/** Hängt den Base-Pfad (z. B. /Website---Dahn/) vor einen relativen Pfad. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + path.replace(/^\//, '');
}

export function routeUrl(key: RouteKey, lang: Lang, hash = ''): string {
  return url(routes[key][lang]) + hash;
}

export function projectUrl(lang: Lang, slug: string): string {
  return url(`${routes.projects[lang]}${slug}/`);
}

/**
 * Navigation der Startseite. Für einen neuen Bereich (z. B. UGC) einfach
 * einen Eintrag ergänzen – mit `href` statt `anchor` für eigene Seiten.
 */
export const nav: { anchor?: string; href?: Record<Lang, string>; label: Record<Lang, string> }[] = [
  { anchor: 'profil', label: { de: 'Profil', en: 'Profile' } },
  { anchor: 'kompetenzen', label: { de: 'Kompetenzen', en: 'Skills' } },
  { anchor: 'erfahrung', label: { de: 'Erfahrung', en: 'Experience' } },
  { anchor: 'projekte', label: { de: 'Projekte', en: 'Projects' } },
  { anchor: 'ausbildung', label: { de: 'Ausbildung', en: 'Education' } },
  { anchor: 'kontakt', label: { de: 'Kontakt', en: 'Contact' } },
];
