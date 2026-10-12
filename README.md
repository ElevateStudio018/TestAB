# Aqnova AB – webbplats

Statisk informationswebbplats för Aqnova AB (org.nr 559214-7648). Färger, typsnitt (Figtree) och
formspråk är hämtade från Stenvallers webbplats.

## Filer

| Fil | Innehåll |
| --- | --- |
| `index.html` | All text och alla sektioner |
| `assets/css/styles.css` | Utseende. Färgerna ligger som variabler överst i filen (`:root`). |
| `assets/js/main.js` | Mobilmenyn |
| `assets/img/logo.png` | Logotypen (i sidhuvudet och sidfoten) |
| `assets/img/favicon-32.png`, `favicon-180.png` | Ikon i webbläsarfliken och för hemskärmen |
| `assets/img/hero-kod-*` | Hero-bakgrunden: 1000 och 2000 px samt en stående mobilversion, som WebP och JPEG |

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

## Bilder

Hero-bakgrunden visar programkod på en datorskärm, som en stämningsbild för datakonsultverksamhet.
Den är dekorativ och säger inget om vilka tekniker företaget arbetar med.

- Foto: Nemuel Sereti, [Pexels](https://www.pexels.com/photo/programming-code-on-screen-6424584/).
  Pexels licens tillåter fri användning utan krav på namnangivelse.
- Byt bild: ersätt filerna `hero-kod-*` (eller ändra sökvägarna i `<picture class="hero__media">` i
  `index.html`). Mobilversionen är ett stående utsnitt av samma bild.
