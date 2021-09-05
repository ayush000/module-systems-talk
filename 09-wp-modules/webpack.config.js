const path = require("path");

module.exports = {
  mode: "development",
  entry: "./09-wp-modules/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: false
};
