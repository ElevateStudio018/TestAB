# Aqnova AB – webbplats

Statisk informationswebbplats för Aqnova AB (org.nr 559214-7648). Färger, typsnitt (Figtree) och
formspråk är hämtade från Stenvallers webbplats.

## Filer

| Fil | Innehåll |
| --- | --- |
| `index.html` | All text och alla sektioner |
| `assets/css/styles.css` | Utseende. Färgerna ligger som variabler överst i filen (`:root`). |
| `assets/js/main.js` | Mobilmenyn |
| `assets/img/favicon.svg` | Ikon i webbläsarfliken |

Öppna `index.html` direkt i en webbläsare, eller publicera mappen på valfritt webbhotell
(t.ex. GitHub Pages, Netlify). Inget byggsteg behövs.

## Sektioner

| Sektion | id |
| --- | --- |
| Startsida / introduktion + översikt | `#start` |
| Om Aqnova AB | `#om` |
| Verksamhetsområde | `#verksamhet` |
| Tjänster | `#tjanster` |
| Arbetssätt / uppdragsform | `#arbetssatt` |
| Kompetens och verksamhetsområden | `#kompetens` |
| Projekt och referenser | `#projekt` |
| Företagsinformation | `#foretagsinformation` |
| Frågor och svar | `#faq` |
| Kontakt | `#kontakt` |

## Så fyller du på innehåll

Längst ned i `index.html` finns mallar i `<template>`-element. De visas aldrig för besökare.

- **Tjänst:** kopiera `<article>` ur `mall-tjanst` till `#tjanstelista` och ta bort `hidden` på listan.
- **Kompetensområde:** `mall-kompetens` till `#kompetenslista`, ta bort `hidden`.
- **Projekt:** `mall-projekt` till `#projektlista`, ta bort `hidden`.
- **E-post och telefon:** avkommentera exemplet i `#kontaktuppgifter` och fyll i verifierade uppgifter.
  Uppdatera även FAQ-svaret "Hur kontaktar man Aqnova AB?".
- **Kontaktformulär:** `mall-kontaktformular`; formuläret behöver en riktig mottagare (`action`).

## Innehållsregler

- Publicera bara uppgifter som är bekräftade: inga påhittade tjänster, kunder, citat,
  certifieringar eller kontaktuppgifter.
- Ekonomiska uppgifter och styrelseuppgifter visas inte på sidan.
- Webbplatsen på domänen aqnova.co hör inte till Aqnova AB enligt underlaget. Använd inget innehåll,
  ingen logotyp och inga kontaktuppgifter därifrån.
