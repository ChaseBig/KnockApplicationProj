module.exports = {
    collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
    transform: {
      "^.+\\.(js|jsx|mjs)$": "./jest-transformer.js"
    }
  };