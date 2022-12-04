export function buildUserInterface(pen) {
  const ui = document.createElement("div");
  ui.className = "ui";
  document.body.appendChild(ui);

  const nameLabel = document.createElement("label");
  nameLabel.innerText = "Name";
  ui.appendChild(nameLabel);
  const nameInput = document.createElement("input");
  nameInput.id = "name";
  nameInput.placeholder = "Noname";
  [];
  nameInput.oninput = (event) => {
    if (pen !== undefined) {
      pen.name = event.target.value;
    }
  };
  ui.appendChild(nameInput);

  const sliderLabel = document.createElement("label");
  sliderLabel.textContent = "Strichdicke";
  ui.appendChild(sliderLabel);

  const slider = document.createElement("input");
  slider.type = "range";
  slider.value = pen.thickness;
  slider.min = 1;
  slider.max = 20;
  slider.onchange = (e) => (pen.thickness = e.target.value);
  ui.appendChild(slider);

  const colorLabel = document.createElement("label");
  colorLabel.textContent = "Farbe";
  ui.appendChild(colorLabel);

  const colorSelector = document.createElement("input");
  colorSelector.type = "color";
  colorSelector.onchange = (e) => (pen.color = e.target.value);
  ui.appendChild(colorSelector);
}