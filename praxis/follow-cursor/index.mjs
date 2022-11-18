import { runWhenPointerMoves } from "../../javascript/document.mjs";

const mouseControlledRectangle = document.createElement("div");
mouseControlledRectangle.className = "mouse-controlled-rectangle";
document.body.appendChild(mouseControlledRectangle);

function moveRectangle(x, y, mousePressed) {
  // @TODO
  console.log(x, y);
  console.log(typeof x, typeof y);
  console.log(mousePressed);
  console.log(typeof mousePressed);
  // 0. Was ist x, y und mousePressed?
  // 1. x und y auf den Entwicklerkonsole ausgeben (console.log)
  // 2. mouseControlledRectangle per style.transform verschieben
  mouseControlledRectangle.style.transform = `translate(${x}px, ${y}px)`;
  // if(Bedingung) benötigt einen Wahrheitswert ====> Boolean
  // 3. mouseControlledRectangle einfärben, wenn Maus gedrückt ist
  // 4. CSS Klasse "changed-shape" togglen, wenn Maus gedrückt ist
  //    → Vorher styles.scss anpassen:
  //      um festzulegen, wie das Quadrat aussieht, wenn die Maus gedrückt ist
  if (mousePressed) {
    // Weg A
    const randomHue = Math.random() * 360;
    mouseControlledRectangle.style.backgroundColor = `hsl(${randomHue}, 100%, 70%)`;
    mouseControlledRectangle.classList.add("changed-shape");
  } else {
    // Weg B
    mouseControlledRectangle.style.backgroundColor = "white";
    mouseControlledRectangle.classList.remove("changed-shape");
  }
}

runWhenPointerMoves(moveRectangle);
