import { runWhenPointerMoves } from "../../javascript/document.mjs"

const mouseControlledRectangle = document.createElement("div");
mouseControlledRectangle.className = "mouse-controlled-rectangle";
document.body.appendChild(mouseControlledRectangle);

function moveRectangle(x, y, mousePressed) {
  // @TODO
  // 0. Was ist x, y und mousePressed?
  // 1. x und y auf den Entwicklerkonsole ausgeben (console.log)
  // 2. mouseControlledRectangle per style.transform verschieben
  // 3. mouseControlledRectangle einfärben, wenn Maus gedrückt ist
  // 4. CSS Klasse "changed-shape" togglen, wenn Maus gedrückt ist 
  //    → Vorher styles.scss anpassen:
  //      um festzulegen, wie das Quadrat aussieht, wenn die Maus gedrückt ist
}

runWhenPointerMoves(moveRectangle);