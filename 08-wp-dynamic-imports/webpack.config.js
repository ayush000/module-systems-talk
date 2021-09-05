const path = require("path");

module.exports = {
  mode: "development",
  entry: "./08-wp-dynamic-imports/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: false
};
