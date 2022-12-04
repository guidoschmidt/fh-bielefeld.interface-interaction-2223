function playSound(name) {
  // @TODO
  // - button per document.querySelector ändern,
  //   damit klar wird, dass der jeweilige Sound gerade abgespielt wird.
  // - sound.onended verwenden, um auf dem Button anzuzeigen, dass
  //   er nicht mehr spielt
  const sound = new Audio(`./sounds/${name}.wav`);
  sound.play();
}

// Unterschied zwischen mjs und js:
// window.playSound ist eine "globale"
// Variable, damit das Browserfenster
// die Funktion playSound kennt
window.playSound = playSound;



// Event Listener auf "window", um
// auf Keyboard events zu reagieren,
// so dass die Tasten 1, 2 und 3
// jeweils einen anderen Sound abspielen
// window.addEventListener(,);

// eventListenerFunction ist die Funktion
// die das Event verarbeitet
function eventListenerFunction(event) {
  console.log("Key was pressed", event.key);
  if(event.key === "1") {
    playSound("Kick");
  }
  if(event.key === "2") {
    playSound("Clap");
  }
  if(event.key === "3") {
    playSound("Snare");
  }
}

// Name des Events, das verarbeitet werden soll
const eventName = "keyup";

// 'Subjekt' (window) was auf Events reagieren soll
// Dafür registrieren wir auf dem Subjekt die eventListenerFunction
// für das gegegeben event (eventName, in diesem Fall "keyup")
// window.addEventListener
window.addEventListener(eventName, eventListenerFunction);

// 'setInterval' verwenden, um ein Drum Pattern aus einer
// - HTML: button mit "Start"
// - Event listener auf dem Button mit "click" -> start ausführen
function playRandomSound() {
  // Liste aller "verfügbaren" Sounds, aus der wir zufällig einen
  // auswählen wollen.
  const availableSounds = ["Clap", "Kick", "Snare"];

  // Math.random produziert Werte zwischen 0 und 1 (erreicht 1 nie ganz!)
  // Math.random produziert außerdem Kommazahlen
  // wir benötigen aber eine ganze Zahl als index für die Liste! (also 0, 1, 2)
  const randomValue = Math.round(Math.random() * (availableSounds.length - 1));
  console.log(randomValue);
  const selectedSound = availableSounds[randomValue];
  playSound(selectedSound);
}

function playEveryX() {
  playRandomSound();
}

// isRunning speichert die ID des Intervals
// wenn kein Intervall läuft, ist isRunning undefined
let isRunning = undefined;

function start() {
  console.log("Start the machine!");
  const everyMilliseconds = 1000;
  // Fallunterscheidung, wenn "Start" button geklickt wird:
  // wenn isRunning defined ist (also eine Zahl)
  // "löschen" wir das Interall

  // - document.querySelector für den Start Button
  // - Text des StartButtons mit .innerText ändern, je nach Fall
  let startButton = document.querySelector(".start"); 
  console.log(startButton)
  if(isRunning) {
    startButton.innerText = "Start";
    clearInterval(isRunning);
    isRunning = undefined;
  } else {
    // Andernfall starten wir das Interval
    startButton.innerText = "Stop";
    isRunning = setInterval(playEveryX, everyMilliseconds);
  }
}
window.start = start;
