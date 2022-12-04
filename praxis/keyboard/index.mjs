import { runWhenKeyPressed } from "../../javascript/document.mjs";

function reactOnKey(key) {

  // querySelector sucht auf der HTML Seite nach einem Element
  // mit der Klasse "cursor"
  const cursor = document.querySelector(".cursor");

  switch (key) {
    case "Enter":
      console.log(key, typeof key);
      // 1. <br> Element erzeugen
      // 2. Neue br element dem document hinzufügen
      const brElement = document.createElement("br");
      brElement.className = "text";
      document.body.insertBefore(brElement, cursor);
      break;


    case "Backspace":
      // Letzes Element auf der Seite löschen
      // Was ist das letze element?
      const textElementList = document.querySelectorAll(".text");
      console.log(typeof textElementList);
      console.log(textElementList);
      const lastElement = textElementList[textElementList.length - 1];
      console.log(lastElement);
      if (lastElement !== undefined) {
        lastElement.remove()
      }
      break;


    default:
      // Erzeugt ein <span> Element
      const element = document.createElement("span");
      // Fügt den Wert aus "key" als Text dem <span> hinzu
      element.className = "text";
      element.innerText = key;
      document.body.insertBefore(element, cursor);
      break;
  }
}

runWhenKeyPressed(reactOnKey);
