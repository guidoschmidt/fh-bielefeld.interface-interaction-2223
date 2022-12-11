export function createUI(brush) {
  // UI erstellen
  let container = document.createElement("div");
  container.className = "ui";
  document.body.appendChild(container);

  // Slider für brush size
  let brushSizeElement = document.createElement("input");
  brushSizeElement.type = "range";
  brushSizeElement.value = brush.brushSize;
  brushSizeElement.min = 2;
  brushSizeElement.max = 300;
  brushSizeElement.oninput = function (event) {
    // event.target ist das Element
    // was das Event ausgelöst hat!
    console.log(event.target.value);
    brush.brushSize = event.target.value;
  };
  container.appendChild(brushSizeElement);

  // Farb-UI für die brush color
  let colorPickerElement = document.createElement("input");
  colorPickerElement.type = "color";
  colorPickerElement.value = brush.brushColor;
  colorPickerElement.oninput = function (event) {
    // event.target ist das Element
    // was das Event ausgelöst hat!
    console.log(event.target.value);
    brush.brushColor = event.target.value;
  };
  container.appendChild(colorPickerElement);

  // Slider für Strichstärke
  let strokeWidthElement = document.createElement("input");
  strokeWidthElement.type = "range";
  strokeWidthElement.value = brush.strokeWidth;
  strokeWidthElement.min = 1;
  strokeWidthElement.max = 10;
  strokeWidthElement.oninput = function (event) {
    // event.target ist das Element
    // was das Event ausgelöst hat!
    console.log(event.target.value);
    brush.strokeWidth = event.target.value;
  };
  container.appendChild(strokeWidthElement);

  // Farb-UI für die Umrandung
  let strokeColorElement = document.createElement("input");
  strokeColorElement.type = "color";
  strokeColorElement.value = brush.strokeColor;
  strokeColorElement.oninput = function (event) {
    // event.target ist das Element
    // was das Event ausgelöst hat!
    console.log(event.target.value);
    brush.strokeColor = event.target.value;
  };
  container.appendChild(strokeColorElement);
}
