# TODO 04.11.
### Responsive Design/Responsive CSS

- Neuer Ordnerin `praxis/responsive/`

- Neue **index.html** Seite in `praxis/responsive/`
- Link (<a></a>) auf der Hauptseite 
  (**index.html** im **skizzenbuch** Ordner) nicht vergessen
- **index.html**:
  - <!DOCTYPE HTML> etc. füllen (**VS Code !-Enter**)
  - <body> soll ein <main></main> Element enthalten
  - <main></main> soll enthalten:
    - 4 verschiedene <h1></h1>:
      - 1 x mit Klasse "responsive-font" und Text "Responsive Schriftgröße"
      - 1 x mit Klasse "mobile-only" und Text "Phones"
      - 1 x mit Klasse "tablet-only" und Text "Tablets"
      - 1 x mit Klasse "desktop-only" und Text "Desktops"

- Neue **styles.css** Datei in `praxis/responsive/`
- **styles.css**:
  - `@import` von `reset.css`
  - Breakpoints als Variablen speichern 
    mobile: < 480px
    tablet: < 1024px
    desktop: > 1024px
  - Media queries verwenden, um die drei <h1> unterschiedlich einzufärben
  - Media queries verwenden, um jeweils nur die entsprechende <h1> anzuzeigen
    (andere <h1> auf `display: none` stellen)