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
| `assets/img/om-*`, `band-*`, `tjanster-*`, `kompetens-*`, `projekt-*`, `kontakt-*` | Bilder i sektionerna, som WebP och JPEG |
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

Alla bilder kommer från Pexels, vars licens tillåter fri användning utan krav på namnangivelse.
Bilderna är dekorativa stämningsbilder. De visar inte företagets lokaler, personal eller kunder och
säger inget om vilka tekniker företaget arbetar med. Ingen bild visar igenkännbara ansikten.

| Plats | Fil | Foto |
| --- | --- | --- |
| Hero | `hero-kod-*` | Nemuel Sereti, [pexels.com/photo/6424584](https://www.pexels.com/photo/programming-code-on-screen-6424584/) |
| Om Aqnova AB | `om-laptop-kod-*` | Luis Gomes, [pexels.com/photo/546819](https://www.pexels.com/photo/close-up-photo-of-programming-of-codes-546819/) |
| Bildband | `band-utvecklare-*` | [pexels.com/photo/1181675](https://www.pexels.com/photo/close-up-photo-of-person-typing-on-laptop-1181675/) |
| Tjänster | `tjanster-programmering-*` | [pexels.com/photo/574071](https://www.pexels.com/photo/person-encoding-in-laptop-574071/) |
| Kompetens | `kompetens-kod-*` | César Gaviria, [pexels.com/photo/36571389](https://www.pexels.com/photo/html-code-on-computer-screen-in-dark-mode-36571389/) |
| Projekt | `projekt-dashboard-*` | [pexels.com/photo/577210](https://www.pexels.com/photo/close-up-photo-of-gray-laptop-577210/) |
| Kontakt | `kontakt-uppsala-*` | [pexels.com/photo/17241571](https://www.pexels.com/photo/street-in-uppsala-in-sweden-17241571/) |

Byt en bild genom att ersätta filerna (samma namn) eller ändra sökvägarna i `index.html`.
Bilden i kontaktsektionen kan ersättas av ett kontaktformulär när ett sådant finns.
