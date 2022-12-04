// Zeichenprogram/Zeichen-Chat
//
// @TODO #1: Brainstorming
// - Was benötigen wir für ein Mal-Program?
//
// @TODO #2: Program-aufbau
// setup, update und draw Funktionen
//
// @TODO #3: p5.js
// createCanvas 
// circle, fill, stroke, strokeWeight, line
//
// @TODO #4: Pen
// Objekt um den Zeichenstift zu speichern
//
// @TODO #5: UI
// document.createElement um eine UI für die 
// Stifteinstellung zu erzeugen
// HTLM input-Elemente, Event Listener
//
// @TODO #6: Websockets
// Websocket API
// connect Funktion
// sendPen Funktion
// onmessage Event Listener
// -> Liste von anderen Pen Objekten
// -> for in draw, um Liste abzuarbeiten
//    und andere Pen Objekte darzustellen

window.setup = function () {
};

window.update = function () {
}

window.draw = function () {
  update();
  if (mouseIsPressed) {
    fill(0);
    stroke(pen.color);
    strokeWeight(pen.thickness);
    circle(pen.x, pen.y, pen.thickness);
  }
};