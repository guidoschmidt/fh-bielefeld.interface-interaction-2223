import { runWhenDocumentIsLoaded } from "../../javascript/document.mjs";
// @TODO #1
// Die "visualizeArray" Funktion aus der Datei "array.mjs" importieren
// in Zeile 1 wird schon ein anderer import verwendet, daran kannst man
// sich orientieren.
import { visualizeArray } from "../../javascript/array.mjs";

runWhenDocumentIsLoaded(() => {
  // Hier wird unser Array mit dem Variablennamen
  // "listOfThings" erstellt.
  let listOfThings = new Array();

  // @TODO #2
  // Befülle "listOfThings", indem du die Funktion push()
  // verwendest. Hilestellung findest du z.b. auf einem der Links 
  // (oder per Internetsuche natürlich):
  //
  // https://www.w3schools.com/jsref/jsref_push.asp
  // https://wiki.selfhtml.org/wiki/JavaScript/Objekte/Array/push

  // HIER KOMMT DEIN CODE ZUM BEFÜLLEN HIN



  function getArraItemAtIndex(index) {
    // @TODO #3
    // Diese Funktion soll gemäß ihres Names ("getArrayItemAtIndex")
    // das Element an einer bestimmten Stelle (index) zurückgeben. 
    // Momentan gibt sie aber mit "return" nur undefined, also 
    // nichts zurück. Verwende den Array-Zugriff per [index], um den 
    // korrekten Wert an der Stelle im Array zurück zu geben.

    // HIER MUSST DU undefined ERSETZEN
    return undefined;
  }
  
  function deleteArrayItem(element) {
    // @TODO #4
    // Diese Funktion soll ein Element aus dem Array löschen.
    // Dafür musst zuerst die Stelle (index) des gegebenen "elements"
    // im Array gefunden werden.
    // Mit dem index kannst du die "splice" Funktion von "listOfThings"
    // verwenden, um das gegebene Element aus dem Array zu löschen.

    // HIER KOMMT DEIN CODE HIN, DER ELEMENTE AUS listOfThings LÖSCHT
  }
  
  function replaceArrayItem(element, newValue) {
    // @TODO #5
    // Diese Funktion soll Werte im Array "listOfThings" durch
    // neue Werte ersetzen. Der neue Wert kann eingegeben werden, 
    // wenn der Button "ERSETZEN" an einem Element geklickt wurde.
    //
    // Zuerst must du den index des Elements finden (indexOf), um
    // dann per [index] Zugriff den Wert des Arrays an dieser Stelle
    // zu verändern.

    // HIER KOMMT DEIN CODE HIN, DER ELEMENTE IM ARRAY DURCH
    // newValue ERSETZT
  }


  visualizeArray(
    listOfThings,
    getArraItemAtIndex,
    deleteArrayItem,
    replaceArrayItem
  );
});
