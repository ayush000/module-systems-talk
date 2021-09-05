function handleClick() {
  let importedModule;
  if (window.someVarExists) {
    importedModule = import("./async1.js");
  } else {
    importedModule = import("./async2.js");
  }

  importedModule.then((module) => {
    const str = module.default;
    console.log(str);
  });
}

document.querySelector("#btn").addEventListener("click", handleClick);
