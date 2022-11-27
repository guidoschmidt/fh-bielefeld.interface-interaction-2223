import { runWhenDocumentIsLoaded } from "../../javascript/document.mjs";
// @TODO #1
// visualizeObject aus "object.mjs" Datei importieren
import { visualizeObject } from "../../javascript/object.mjs";


runWhenDocumentIsLoaded(() => {
  // @TODO #2 Object "person" befüllen
  let person = {
    name: "Guido",
    age: 33,
    eyeColor: "green"
  };
  
  // @TODO #3
  // Objekt mit weiteren Einträgen befüllen
  // z.b. Alter, Größe, etc.
  person["age"] = 34;
  person.heightInMeters = 1.87;
  person.name = "Tom";


  function getObjectItemWithKey(key) {
    // @TODO #3
    // Wert für den gegebenen "key" aus dem Objekt abfragen
    // und statt "undefined" zurück geben.
    return person[key];
  }


  function removeObjectItemAtKey(key) {
    // @TODO #4
    // Eintrag für den gegebenen key aus dem Objekt löschen.
    delete person[key];
  }
 

  function replaceObjectItemAtKey(key, newValue) {
      // @TODO #5
      // Eintrag für den gegebenen key im Objekt
      // durch den neuen Wert "newValue" ersetzen.

      // 1. console.log(person, key, newValue)
      // 2. Ersetzen-Button klicken, was passiert?
      // 3. Objekt person abändern mit dem key und auf "newValue" setzen
      person[key] = newValue;
  }

  visualizeObject(
    person,
    getObjectItemWithKey,
    removeObjectItemAtKey,
    replaceObjectItemAtKey
  );
});
