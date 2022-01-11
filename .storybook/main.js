const path = require("path")

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: (config, options) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          '@': path.resolve(__dirname, '../src')
        }
      }
    }
  }
}