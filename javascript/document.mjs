export function runWhenDocumentIsLoaded(callback) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      callback();
    }
  });
}