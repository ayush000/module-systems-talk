function getModuleName() {
  if (global.SOME_VAR_IS_DEFINED) {
    return "./logger";
  } else {
    return "./log";
  }
}

const m = require(getModuleName());
m() // or m.log()?