// var ManifestPlugin = require("webpack-manifest-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
    configureWebpack: {
      plugins: [
        new WebpackManifestPlugin()
      ]
    }
  }