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
      chunks: "async",
      minSize: 0,
    },
  },
};
