import { runWhenDocumentIsLoaded } from "../../javascript/document.mjs";

function greet() {
  // @TODO
  // 1. alert verwenden
  // 2. Wann wird alert gezeigt? Probleme?
  // 3. alert in Modul
  // 4. document.mjs verwenden
  // 5. prompt verwenden für personalisiertes Begrüßen
  // alert durch prompt zu Ersetzen
  let name = prompt("Wie heißt du?");
  let numberAsText = "100";
  let numberOnly = 100;
  alert(`${name}, Willkommen ${name}`);
  let age = parseInt(prompt("Wie alt bist du?"));
  console.log(age);
  alert(`${name}, Nächstes Jahr bist du ${age + 1} Jahre alt`);
}

runWhenDocumentIsLoaded(greet);