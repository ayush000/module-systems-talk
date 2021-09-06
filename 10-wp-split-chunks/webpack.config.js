const path = require("path");

module.exports = {
  mode: "development",
  entry: "./10-wp-split-chunks/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: false,

  optimization: {
    splitChunks: {
      // main -> import(module1) -> modulex
      // main -> import(module2) -> modulex
      // main -> import(module3) -> modulex
      // main -> import(module4) -> modulex
      chunks: "async",
      minSize: 0,
    },
  },
};
