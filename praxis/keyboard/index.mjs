import { runWhenKeyPressed } from "../../javascript/document.mjs";

function reactOnKey(key) {
  const element = document.createElement("span");
  element.innerText = key;
  document.body.insertBefore(element, document.querySelector(".cursor"));
  // @TODO
  // - console.log(key) verwenden um herauszufinden, was in "key" steht
  // - switch cas verwenden um auf unterschiedliche Tasten zu reagieren
}

runWhenKeyPressed(reactOnKey);
