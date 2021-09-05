const Logger = (function () {
  function _privateHelperFn(str) {
    console.log("Hello", str);
  }

  function publicFn(str) {
    _privateHelperFn(str);
  }

  return {
    log: publicFn,
  };
})();
