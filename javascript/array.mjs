function visualizeArray(arr, getValue, rmFn, replaceFn) {
  let root = document.querySelector("#root");
  if (root === null) {
    root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
  }
  const reconcile = () => {
    while (root.firstChild) root.removeChild(root.firstChild);
    arr.forEach((_, i) => {
      const value = getValue(i);
      const elDiv = document.createElement("div");
      elDiv.className = `item ${typeof value}`;
      const content = document.createElement("span");
      content.className = "content";
      content.innerHTML = JSON.stringify(value) || "";
      elDiv.appendChild(content);
      if (rmFn) {
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Löschen";
        deleteButton.onclick = () => {
          rmFn(value);
          reconcile();
        };
        elDiv.appendChild(deleteButton);
      }
      if (replaceFn) {
        const replaceButton = document.createElement("button");
        replaceButton.innerText = "Ersetzen";
        replaceButton.onclick = () => {
          let newValue = prompt("Was soll der neuer Eintrag sein?");
          let asNumber = !isNaN(parseInt(newValue));
          let asBool =
            newValue.trim() === "true" || newValue.trim() === "false";
          if (asBool) replaceFn(value, Boolean(newValue));
          else if (asNumber) replaceFn(value, parseInt(newValue));
          else replaceFn(value, newValue);
          reconcile();
        };
        elDiv.appendChild(replaceButton);
      }
      const indexSpan = document.createElement("span");
      indexSpan.className = "index";
      indexSpan.innerText = i;
      elDiv.appendChild(indexSpan);
      root.appendChild(elDiv);
    });
  };
  reconcile();
}

export { visualizeArray }