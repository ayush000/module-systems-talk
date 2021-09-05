const path = require("path");

module.exports = {
  mode: "development",
  entry: "./13-all/index.js",
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

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            configFile: "./13-all/babel.config.js",
          },
        },
      },
    ],
  },
};
