import { runWhenDocumentIsLoaded } from "../../javascript/document.mjs";
// @TODO #1
// visualizeObject aus "object.mjs" Datei importieren

runWhenDocumentIsLoaded(() => {
  // @TODO #2 Object "person" befüllen
  let person = new Object();

  // @TODO #3
  // Objekt mit weiteren Einträgen befüllen
  // z.b. Alter, Größe, etc.

  function getObjectItemWithKey(key) {
    // @TODO #3
    // Wert für den gegebenen "key" aus dem Objekt abfragen
    // und statt "undefined" zurück geben.
    return undefined;
  }


  function removeObjectItemAtKey(key) {
    // @TODO #4
    // Eintrag für den gegebenen key aus dem Objekt löschen.
  }
  
  function replaceObjectItemAtKey(key, newValue) {
      // @TODO #5
      // Eintrag für den gegebenen key im Objekt
      // durch den neuen Wert "newValue" ersetzen.
  }

  visualizeObject(
    person,
    getObjectItemWithKey,
    removeObjectItemAtKey,
    replaceObjectItemAtKey
  );
});
