function _privateHelperFn(str) {
  console.log("Hello", str);
}

function log(str) {
  _privateHelperFn(str);
}

export default log;
