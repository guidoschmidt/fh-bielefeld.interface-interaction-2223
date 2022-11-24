function visualizeObject(obj, getValue, rmFn, replaceFn) {
  let root = document.querySelector("#root");
  if (root === null) {
    root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
  }

  const rerender = () => {
    while (root.firstChild) root.removeChild(root.firstChild);
    Object.keys(obj).forEach((key) => {
      const value = getValue(key);
      const keyValueDiv = document.createElement("div");
      keyValueDiv.className = "key-value";

      const keyDiv = document.createElement("div");
      keyDiv.innerText = `"${key}"`;
      keyDiv.className = "key";
      keyValueDiv.appendChild(keyDiv);

      const valueDiv = document.createElement("div");
      valueDiv.className = `item ${typeof value}`;
      const content = document.createElement("span");
      content.className = "content";
      content.innerHTML = JSON.stringify(value) || "";
      valueDiv.appendChild(content);
      keyValueDiv.appendChild(valueDiv);

      if (rmFn) {
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Löschen";
        deleteButton.onclick = () => {
          rmFn(key);
          rerender();
        };
        keyValueDiv.appendChild(deleteButton);
      }

      if (replaceFn) {
        const replaceButton = document.createElement("button");
        replaceButton.innerText = "Ersetzen";
        replaceButton.onclick = () => {
          let newValue = prompt("Was soll der neuer Eintrag sein?");
          let asNumber = !isNaN(parseInt(newValue));
          let asBool =
            newValue.trim() === "true" || newValue.trim() === "false";
          if (asBool) replaceFn(key, Boolean(newValue));
          else if (asNumber) replaceFn(key, parseInt(newValue));
          else replaceFn(key, newValue);
          rerender();
        };
        keyValueDiv.appendChild(replaceButton);
      }

      root.appendChild(keyValueDiv);
    });
  };
  rerender();
}

export { visualizeObject };
