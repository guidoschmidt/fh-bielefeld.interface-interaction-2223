// --- Aufgabe: Fehlersuche ---
// Im code sind Stellen mit drei Fragezeichen ??? 
// und Kommentaren markiert. Jede ???-Markierung hat
// außerdem eine Nummerierung (z.b. ??? #1).
// Arbeite dich von #1 bis #5 durch und versuche
// die beschiebenen Fehler zu korrigieren.

// Folgende Probleme kommen dabei vor:
// - for loop falsch
// - Falsche Variablendefinition 
// - Fehlender Funktionsaufruf
// - Fehlende Argumente
// - Funktionsname falsch geschrieben
//
// Versuche zuzuordnen, welche Markierung welches
// Problem ist.


// Globale Variablen, die wir an mehreren Stellen benötigen,
// auslesen und unter Umständen verändern.
let isRunning = false;
let currentStep = 0;
const listOfSounds = ["Clap", "Kick", "Snare"];
const countOfSteps = 10;
const audioSequence = [];


function playSound(name) {
  const sound = new Audio(`./sounds/${name}.wav`);
  // ??? #4
  // Hier ist etwas faul, der Sound scheint nicht abgespielt
  // zu werden. Woran könnte das liegen?
  // - Was für ein Typ (typeof) ist sound.play?
  // - Wie muss dieser Typ richtig verwendet werden?
  //
  // Vielleicht hilft dir das Beispiel hier:
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement#examples
  sound.play;
}


function toggleStepAsActive(columnIndex, ) {
  const wasActive = audioSequence[columnIndex][soundIndex].active;
  // ??? #5
  // Hier gibt es auch ein Problem
  // - Was passiert, wenn du einen Step Button im Sequencer anklickst?
  // - Was wird dabei in der Entwicklerkonsole angezeigt?
  // - Wo kommt "soundIndex" her?
  // - Was sind Funktionsargumente und wo stehen sie?
  // - Wo kommt "columnIndex" her, verhält sich "soundIndex" vielleicht genauso?
  // - Wo wird "toggleSoundActive" aufgerufen und wieviele Parameter 
  //   werden dort an die Funktion übergeben (Anzahl der Werte in der Funktionsklammer)?
  audioSequence[columnIndex][soundIndex].active = !wasActive;
  const button = document.querySelector(`#step-${columnIndex}${soundIndex}`);
  button.classList.toggle("on");
}


function createUserInterface(sequencerList) {
  const rootElement = document.querySelector(".sequencer");
  rootElement.style.gridTemplateColumns = `repeat(${countOfSteps}, 100px)`;
  rootElement.style.gridTemplateRows = `repeat(${listOfSounds.length}, 100px)`;

  // ??? #2
  // Bei diesen beiden for-loops ist etwas falsch
  // Schau nochmal in die Vorlesungs-Folien wie for loops
  // geschrieben werden und wie Variablen definiert werden
  // müssen
  // - Mit welchen zwei Keywords können Variablen definiert werden?
  // - Was ist der Unterschied?
  // - Was passiert im for loop?
  // - Wirf evtl. auch mal einen Blick in die Entwicklerkonsole des Browsers
  for (const columnIndex = 0; columnIndex < sequencerList.length; columnIndex++) {
    
    const column = sequencerList[columnIndex];
    for (let soundIndex = 0; soundIndex < column.length; soundIndex++) {
      const soundStepInColumn = column[soundIndex];
      const soundName = listOfSounds[soundIndex];

      const soundButton = document.createElement("button");
      soundButton.onclick = () => toggleStepAsActive(columnIndex, soundIndex);
      soundButton.id = `step-${columnIndex}${soundIndex}`;
      soundButton.innerText = soundName;
      soundButton.classList.add("step");
      soundButton.classList.add(soundName);
      if (soundStepInColumn.active) {
        soundButton.classList.add("on");
      }
      if (columnIndex === currentStep) {
        soundButton.classList.add("active")
      }
      rootElement.appendChild(soundButton);
    }
  }
}

function initialize() {
  for (let index = 0; index < countOfSteps; index++) {
    audioSequence.push([]);
    for (let soundIndex = 0; soundIndex < listOfSounds.length; soundIndex++) {
      const sound = listOfSounds[soundIndex];
      audioSequence[index].push({ active: Math.random() > 0.5 });
    }
  }
}

window.start = function() {
  const playButton = document.querySelector(".play");
  if (isRunning) {
    playButton.innerText = "Start";
    isRunning = clearInterval(isRunning);
  } else {
    playButton.innerText = "Stop";
    isRunning = setInterval(() => {
      // ??? #3
      // Im folgenden for loop scheint etwas nicht zu stimmen?
      // - Wenn du Start klickst, was passiert?
      // - Welcher Teil der for-loop-Definition (Zeile 104) könnte nicht stimmen?
      // - Ein for-loop besteht aus 3 Teilen, ein Teil stimmt nicht. Welcher?
      // - Versuche (z.b. auf Papier) die einzelnen Schritt nachzuvollziehen
      //   die im for-loop passieren sollen
      // - Vergleiche die nachstehende for-loop Definition mit anderen for-loops
      //   hier im Code
      for (let columnIndex = 0; columnIndex > audioSequence.length; columnIndex++) {

        const column = audioSequence[columnIndex];
        for (let soundIndex = 0; soundIndex < column.length; soundIndex++) {
          const soundActive = column[soundIndex];
          const soundButton = document.querySelector(
            `#step-${columnIndex}${soundIndex}`
          );
          if (columnIndex === currentStep) {
            soundButton.classList.add("active");
            if (soundActive.active) {
              const whichSound = soundButton.innerText;
              playSound(whichSound);
            }
          } else {
            soundButton.classList.remove("active");
          }
        }
      }

      currentStep = (currentStep + 1) % countOfSteps;
    }, 167);
  }
}

// Sequencer initalisieren
initialize();

// Create the "User Inface" with HTML Elements
// ??? #1
// Hier scheint auch etwas faul zu sein! 
// - Was wird auf der Entwickler-Konsole angezeigt, vielleicht bekommst du dort einen Hinweis?
// - createInterface(sequence) ist ein Funktionsaufruf, wo ist diese Funktion
//   definiert?
// - Gibt es eine Funktions-Definition mit diesem Namen? Wenn nein, welche andere Funktion in
//   diesem Program könnte gemeint sein?
createInterface(audioSequence);