function _privateHelperFn(str) {
  console.log("Hello", str);
}

function publicFn(str) {
  _privateHelperFn(str);
}

// export multiple things
exports.log = publicFn;
// same as module.exports = {log}