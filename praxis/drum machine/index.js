function playSound(name) {
  // @TODO
  // - button per document.querySelector ändern,
  //   damit klar wird, dass der jeweilige Sound gerade abgespielt wird.
  // - sound.onended verwenden, um auf dem Button anzuzeigen, dass
  //   er nicht mehr spielt
  const sound = new Audio(`./sounds/${name}.wav`);
  sound.play();
}

// @TODO
// Unterschied zwischen mjs und js:
//window.playSound = playSound;

// @TODO 
// Event Listener auf "window", um
// auf Keyboard events zu reagieren,
// so dass die Tasten 1, 2 und 3
// jeweils einen anderen Sound abspielen
// window.addEventListener(,);

// @TODO
// 'setInterval' verwenden, um ein Drum Pattern aus einer
// List automatisch abzuspielen
// - Wie könnten Listeneinträge für die "drumPtternList" aussehen?
// - Wie verwenden wir "currentDrumPatternIndex"?
// - Was passiert beim Ende der Liste "drumPatternList"?
function start() {
  const drumPatternList = [];
  let currentDrumPatternIndex = 0;
}
