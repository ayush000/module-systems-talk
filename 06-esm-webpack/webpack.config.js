const path = require("path");

module.exports = {
  mode: "development",
  entry: "./06-esm-webpack/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: false
};
