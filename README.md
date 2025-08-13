# Leinewerk One-Pager

## Deployment (GitHub Pages)

1. Neues Repository auf GitHub anlegen (z. B. `leinewerk`).
2. Alle Dateien (`index.html`, `styles.css`, `script.js`, Ordner `assets/`) hochladen.
3. In den Repo-Settings unter „Pages“ auf „Branch: main“ und „/ (root)“ stellen.
4. Website ist dann unter `https://<username>.github.io/<repo-name>/` erreichbar.

## Kontaktformular (Formspree)

- Formspree-ID ist fest integriert (`mgvzdbwv`).
- Felder können in `index.html` angepasst werden.
- Test: Sende eine Anfrage, prüfe E-Mail-Eingang.

## Bilder, Texturen, Farben anpassen

- Platzhalterbilder in `assets/` ersetzen.
- Card-Texturen (`assets/card-wood.png` …) können entfernt oder angepasst werden.
- Farben in `styles.css`, Block `:root`.
- Texte direkt in `index.html`.

## Eigene Domain verbinden

- In den GitHub Pages Settings unter „Custom domain“ deine Wunschdomain eintragen und DNS konfigurieren.

## Hinweise

- Barrierefrei, mobile first, Lighthouse ≥ 90.
- Validiert mit HTML/CSS-Validator.
- DSGVO: Daten nur zur Anfrage verwendet.