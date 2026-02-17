# Miky Nailstudio — Website Preview (Kundenansicht)

> Vorschau & Code-Übersicht für den Kunden.  
> Fokus: Premium Look, klare Struktur, schnelle Ladezeit, saubere UX.

**Stand:** 2026-02-17 • **Version:** v0.9 (Preview)

---

## 👀 So können Sie die Vorschau ansehen
- **Online (optional):** über GitHub Pages (Link unten)  
- **Offline:** Datei `index.html` öffnen oder mit „Live Server“ starten (Empfehlung)

---

## ✅ Live-Vorschau (optional)
Wenn GitHub Pages aktiviert ist:

- **Preview-Link:** https://<username>.github.io/<repo>/

> Hinweis: GitHub Pages ist grundsätzlich öffentlich.  
> Für eine nicht-öffentliche Demo empfehle ich Netlify/Vercel mit Passwortschutz.

---

## 📸 Preview Screenshots
**Startseite (Hero)**  
![Hero](preview/hero.png)

**Leistungen / Services**  
![Services](preview/services.png)

**Werte + CTA**  
![Values](preview/values.png)

**Mobile**  
![Mobile](preview/mobile.png)

---

## 🎯 Ziel & Umfang
Diese Version ist eine **produktionsnahe Vorschau** mit Fokus auf:

- Premium UI/UX (saubere Typografie, klare Hierarchie, „Luxury“-Anmutung)
- Strukturierte Inhalte (Leistungen → Werte → CTA logisch aufgebaut)
- Performance (optimierte Bilder, stabile Layouts, weniger CLS)
- Accessibility Basics (semantische Struktur, sinnvolle Navigation)

---

## ✅ Was wurde verbessert (Kurz)
- Services als Premium-Karten mit Bildbereich (klarer, hochwertiger)
- Werte als sichtbare Cards (besser lesbar, mehr Vertrauen)
- CTA als Panel (mehr Fokus, bessere Conversion)
- Bild-Loading optimiert (`lazy`, `async`, feste Größen)

---

## 🧩 Seiten / Inhalte
- `index.html` — Startseite
- `leistungen.html` — Leistungen / Anker-Sektionen
- `kurse.html` — Schulungen
- `kontakt.html` — Kontakt / Anfrage

---

## 🛠️ Technische Umsetzung
- **Static HTML/CSS/JS** (ohne Framework)
- CSS Tokens / Variablen: `:root` (Farben, Abstände, Shadows, Fonts)
- Bilder: `loading="lazy"`, `decoding="async"`, feste `width/height` gegen CLS
- SEO Basics: Title/Description, sinnvolle Überschriftenstruktur (1× H1)

> Optional (Preview): `robots.txt` + `<meta name="robots" content="noindex, nofollow">`  
> damit die Vorschau nicht in Suchmaschinen erscheint.

---

## 📂 Projektstruktur
```text
.
├─ preview/               # Screenshots für den Kunden
├─ images/                # Website Bilder (WebP empfohlen)
├─ index.html
├─ leistungen.html
├─ kurse.html
├─ kontakt.html
├─ styles.css
├─ script.js
└─ robots.txt             # optional (noindex)
