const path = require("path");
const webpackBar = require("webpackbar");
const bundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    ...new SpeedMeasurePlugin().wrap({
      plugins: [
        new webpackBar(),
        new bundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 8888,
          openAnalyzer: false,
        }),
      ],
    }),
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
