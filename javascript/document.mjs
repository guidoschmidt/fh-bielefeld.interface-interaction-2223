export function runWhenDocumentIsLoaded(callback) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      callback();
    }
  });
}

export function runWhenPointerMoves(calback) {
  const state = {
    x: 0,
    y: 0,
    mousePressed: false
  }
  const onChange = () => calback(state.x, state.y, state.mousePressed);
  window.onpointerdown = (ev) => { 
    state.mousePressed = true; 
    onChange();
  };
  window.onpointerup = (ev) => { 
    state.mousePressed = false; 
    onChange();
  };
  window.onpointermove = (ev) => {
    const { clientX, clientY } = ev;
    state.x = clientX - window.innerWidth * 0.5;
    state.y = clientY - window.innerHeight * 0.5;
    onChange();
  };
}
