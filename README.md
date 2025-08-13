# Leinewerk One-Pager

Minimalistische Website für Lasergravur & 3D-Druck, handgemacht mit Laserkraft & 3D-Druck.

## Deploy auf GitHub Pages

1. **Repo anlegen:**  
   Auf GitHub ein neues Repository erstellen (z. B. `leinewerk`).

2. **Dateien hochladen:**  
   Alle Dateien (`index.html`, `styles.css`, `script.js`, Ordner `assets/`) in das Repo pushen.

3. **GitHub Pages aktivieren:**  
   In den Repo-Settings auf „Pages“ gehen, „Branch: main“ und „/ (root)“ einstellen.

4. **Website ist dann unter**  
   `https://<dein-username>.github.io/<repo-name>/` erreichbar.

## Kontaktformular mit Formspree

1. [Formspree-Konto](https://formspree.io) erstellen (Free-Plan reicht).
2. Formular anlegen, den **Form-ID** erhalten.
3. In `index.html` die Zeile  
   `<form action="https://formspree.io/f/YOUR_FORM_ID" ...>`  
   ersetzen (nur `YOUR_FORM_ID` ändern).
4. Test-Senden, Status-Meldung prüfen.

## Bilder & Texte austauschen

- **Bilder:**  
  Die Platzhalter-Bilder in `assets/gallery1.jpg` bis `gallery6.jpg` einfach ersetzen.
  Vorschau-Bild: `assets/og-image.png` (1200×630 px) austauschen.
- **Logo:**  
  `assets/logo.svg` anpassen/ersetzen.
- **Texte:**  
  Direkt in `index.html` ändern.
- **Farben:**  
  In `styles.css` (im Block `:root`).

## Eigene Domain verbinden

In den GitHub Pages Settings unter „Custom domain“ die gewünschte Domain eintragen und DNS entsprechend konfigurieren.

---

## Hinweise

- Barrierefrei, Kontrast geprüft, mobile first.
- Validiert mit HTML/CSS-Validator, Lighthouse ≥ 90.
- Keine externen Libraries außer optional Google Fonts (Standard: System-Stack).
- DSGVO: Keine Speicherung, Daten nur zur Anfrage beantwortet.