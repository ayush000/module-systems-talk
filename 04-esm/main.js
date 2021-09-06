import log from "./log.js";

log();

function handleClick() {
  import("./loadAsync.js").then((module) => {
    const str = module.default;
    console.log(str);
  });
}

document.querySelector("#btn").addEventListener("click", handleClick);
