module.exports = {
  clearMocks: true,
  coverageProvider: "v8",

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    "node_modules",
    "src"
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "jsx",
    "vue"
  ],

  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.js$": "babel-jest"
  },
};
