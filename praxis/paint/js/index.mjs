import { createUI } from "./user-interface.mjs";

// Zeichenprogram/Zeichen-Chat
let brush = {
  brushSize: 20,
  brushColor: "#FFFFFF",
  strokeWidth: 2,
  strokeColor: "#000000",
};

window.setup = function() {
  // Wird einmal zu Beginn ausgeführt
  createCanvas(600, 600);
  background(255, 255, 255);
  createUI(brush);
};

window.draw = function() {
  // Wird jedes Frame ausgeführt
  if (mouseIsPressed) {
    strokeWeight(brush.strokeWidth);
    stroke(brush.strokeColor);
    fill(brush.brushColor);
    circle(mouseX, mouseY, brush.brushSize);
  }
};