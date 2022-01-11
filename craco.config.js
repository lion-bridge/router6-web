const path = require("path");
const webpackBar = require("webpackbar");
const bundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      config: path.resolve(__dirname, "config/"),
    },
    plugins: {
      add: [
        new SpeedMeasurePlugin().wrap({
          plugins: [
            new webpackBar(),
            new bundleAnalyzerPlugin({
              analyzerMode: "server",
              analyzerPort: 8888,
              openAnalyzer: false,
            }),
          ],
        }).plugins,
      ],
      remove: []
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          loader: ["style-loader", "css-loader", "less-loader"],
        },
      ],
    },
  },
};
