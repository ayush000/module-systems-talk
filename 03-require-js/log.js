define("log", [], function () {
  function _privateHelperFn(str) {
    console.log("Hello", str);
  }

  function publicFn(str) {
    _privateHelperFn(str);
  }

  return publicFn;
});
