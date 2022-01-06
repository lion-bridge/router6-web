const path = require("path");
module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
};
