module.exports = {
  setupFiles: ["./__tests__/setup.ts"],
  setupFilesAfterEnv: ["<rootDir>/src/setupAfterEnv.ts"],
  clearMocks: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  preset: "react-native",
  resetMocks: true,
  restoreMocks: true,
  moduleNameMapper: {
    "^support/(.*)": "<rootDir>/__tests__/support/$1",
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    "/e2e/",
    "__tests__/support",
    "__tests__/setup.ts",
    "__tests__/testHelpers/",
  ],
  transformIgnorePatterns: [`/node_modules/(?!${["react-native"].join("|")})`],
  transform: {
    "^.+\\.(js|ts)$":
      "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
};
