function handleClick() {
  let fileToImport;
  if (window.someVarExists) {
    fileToImport = "./async1.js";
  } else {
    fileToImport = "./async2.js";
  }

  import(fileToImport).then((module) => {
    const str = module.default;
    console.log(str);
  });
}

document.querySelector("#btn").addEventListener("click", handleClick);
