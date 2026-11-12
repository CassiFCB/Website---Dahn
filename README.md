# Portfolio-Website – Cassian Dahn

Zweisprachige (DE/EN) Portfolio-Website, gebaut mit [Astro](https://astro.build) und gehostet auf GitHub Pages.

**Live (nach dem ersten Deploy):** https://cassifcb.github.io/Website---Dahn/

## Lokal starten

```bash
npm install
npm run dev      # Entwicklungsserver: http://localhost:4321/Website---Dahn/
npm run build    # statische Seite nach dist/ bauen
npm run check    # Typ- und Template-Prüfung
```

## Vor dem Livegang erledigen

Alle offenen Stellen sind mit `[[PLATZHALTER: …]]` markiert (`grep -r PLATZHALTER src`):

1. **Impressum-Adresse** – in `src/data/profile.ts` unter `address` Straße, Hausnummer und PLZ eintragen.
   Tipp: Wer die Privatadresse nicht veröffentlichen möchte, kann einen Impressum-/Adress-Service nutzen.
2. **Kontaktformular aktivieren** – auf [web3forms.com](https://web3forms.com) die eigene E-Mail-Adresse
   eintragen, den Access Key aus der Bestätigungsmail in `src/data/profile.ts` bei `web3formsKey` einsetzen.
   Danach einmal selbst eine Testnachricht senden.
3. **Datenschutzerklärung prüfen** – Abschnitt „Kontaktformular (Web3Forms)“ mit den aktuellen Angaben auf
   web3forms.com/privacy abgleichen (Anbieter, Serverstandort). Bei Unsicherheit rechtlich prüfen lassen.
4. **GitHub Pages einschalten** – im Repository unter *Settings → Pages → Source* „GitHub Actions“ wählen.
   Jeder Push auf `main` veröffentlicht die Seite automatisch (`.github/workflows/deploy.yml`).

## Inhalte ändern

| Was | Wo |
| --- | --- |
| Name, E-Mail, LinkedIn, Adresse, Formular-Key | `src/data/profile.ts` |
| Texte der Startseite (Hero, Profil, Skills, Kontakt …) | `src/i18n/ui.ts` (DE und EN) |
| Berufsstationen | `src/content/experience/{de,en}/*.md` |
| Case Studies | `src/content/projects/{de,en}/*.md` |
| Ausbildung | `src/content/education/{de,en}/*.md` |
| Impressum / Datenschutz | `src/pages/de/impressum.astro`, `src/pages/de/datenschutz.astro` (+ EN-Versionen) |
| Farben & Schriften | Variablen oben in `src/styles/global.css` |

Neue Station oder neues Projekt: vorhandene `.md`-Datei kopieren (in **beiden** Sprachordnern, gleicher Dateiname),
Inhalte anpassen, mit `order` die Reihenfolge festlegen.

## Foto und Lebenslauf austauschen

- **Foto:** `src/assets/portrait.jpg` ersetzen (Hochformat ca. 4:5). Das aktuelle Bild stammt aus dem CV-PDF
  (381×476 px) – ein höher aufgelöstes Original sorgt auf Retina-Displays für ein schärferes Bild.
- **Lebenslauf:** `public/cv/Lebenslauf_Cassian_Dahn.pdf` ersetzen (gleicher Dateiname), oder den Pfad in
  `src/data/profile.ts` (`cvPath`) anpassen.

## Erweitern (z. B. UGC-Creator-Bereich)

1. Neue Seiten anlegen, z. B. `src/pages/de/ugc.astro` und `src/pages/en/ugc.astro`
   (Vorlage: `src/pages/de/impressum.astro` mit `SimplePage` oder eigenes Layout mit `BaseLayout`).
2. Route in `src/i18n/routes.ts` unter `routes` ergänzen und einen Eintrag in `nav` mit `href` hinzufügen –
   der Menüpunkt erscheint dann automatisch.
3. Für Videos die Komponente `src/components/VideoEmbed.astro` nutzen: Sie lädt YouTube/TikTok/Vimeo erst
   nach Klick (DSGVO-freundlich). Den Abschnitt „Externe Medien“ dann in der Datenschutzerklärung ergänzen.
4. Optional eine Content Collection `ugc` in `src/content.config.ts` anlegen (Muster wie `projects`).

## Eigene Domain

In `astro.config.mjs` `site` auf die Domain setzen und `base` auf `'/'` (oder die Umgebungsvariablen
`SITE_URL` / `BASE_PATH` verwenden), dann in den GitHub-Pages-Einstellungen die Domain hinterlegen.

## Datenschutz-Prinzipien

Keine Cookies, kein Tracking, Schriften lokal eingebunden (über `@fontsource`), keine externen Einbettungen
ohne Klick. Die Telefonnummer steht bewusst nicht auf der Website.
