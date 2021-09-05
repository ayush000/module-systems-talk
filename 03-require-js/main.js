require(["log"], function (log) {
  log("from require");
});

function handleClick() {
  require(["loadAsync"], function (str) {
    console.log(str);
  });
}
