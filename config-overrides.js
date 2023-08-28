const { override, addWebpackPlugin } = require('customize-cra');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require('path');
// const webpack = require('webpack')

module.exports = override(
  // @uncomment to show inline CSS
  // addWebpackPlugin(new HTMLInlineCSSWebpackPlugin())
);
