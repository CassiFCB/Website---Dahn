// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages (Projektseite): https://cassifcb.github.io/Website---Dahn/
// Bei eigener Domain: SITE_URL=https://www.deine-domain.de und BASE_PATH=/ setzen
// (oder die Standardwerte unten ändern).
const site = process.env.SITE_URL ?? 'https://cassifcb.github.io';
const base = process.env.BASE_PATH ?? '/Website---Dahn';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de-DE', en: 'en-US' },
      },
    }),
  ],
});
