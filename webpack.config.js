const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./index.js",

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },

  mode: "development",
  devtool: "eval",
  devServer: {
    port: 4444,
  },

  resolve: {
    alias: {
      framework: path.join(__dirname, "src/framework"),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
