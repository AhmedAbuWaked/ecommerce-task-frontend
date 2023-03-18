const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@/components(.*)$": "<rootDir>/src/components$1",
        "^@/pages(.*)$": "<rootDir>/src/pages$1",
        "^@/utils(.*)$": "<rootDir>/src/utils$1",
        "^@/assets(.*)$": "<rootDir>/src/assets$1",
        "^@/styles(.*)$": "<rootDir>/src/styles$1",
        "^@/hooks(.*)$": "<rootDir>/src/hooks$1",
        "^@/constants(.*)$": "<rootDir>/src/constants$1",
      },
    },
  },
};
