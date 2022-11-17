# TODO 11.11.2022
> Vite + CSS Animationen + SCSS

### A.) npm + Vite
- Node.js installieren
- **Terminal:** Kommando `npm` ausprobieren
- **Terminal:** `npm init` ausführen um ein Webprojekt zu initialisieren
- Datei `package.json` ansehen
- **Terminal:** Per `npm install vite` den Webbundler [vite](https://vitejs.dev/) installieren
- Datei `package.json` ansehen, was hat sich verändert?
- In der Date `package.json` den Eintrag in `scripts` ersetzen durch:
    ```json
    "scripts: {
      "start": "vite --open"
    }
    ```
- **Terminal:** Per `npm run start` den Webbundler starten. Was passiert?
- Dateien (HTML oder CSS) im Projekt verändern, was passiert?



### B.) CSS Animations
- [`text-animations.zip` Code herunterladen](https://www.notion.so/guidoschmidt/Interface-Interaction-bd9aecdc52804bd090ee06ea07fe894b#696d03283ec8419ea60380a75b2ea0c0)
- Entpacken und ins Projekt kopieren (unter `skizzenbuch/praxis/text-animations`)
- `styles.css` öffnen und anschauen
- `@keyframes` definieren, um `opacity` von 0 auf 1 zu faden, Animationsname wählen
- `strong` Selektor und mit `animation` Eigenschaft ausstatten
- `animation-fill-mode` erklären
- `:nth-child(x)` verwenden, um jede Gedichtzeile nach der anderen einzublenden
- Animation für `.broken` programmieren, die mit
    ```css
    transform: rotate(20deg)
    ```
  das Wort leicht dreht.


### C.) SCSS
- `npm install sass` um SCSS zu installieren
- `npm run start`
- CSS in SCSS Datei umbenennen: 
  ```bash
  cd praxis/text-animations
  mv styles.css styles.scss
  ```
- SCSS Mixin für Animationen mit Delay programmieren
- `@for` loop in SCSS verwenden