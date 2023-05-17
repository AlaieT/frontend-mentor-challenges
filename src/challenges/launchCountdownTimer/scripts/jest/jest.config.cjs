/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  rootDir: "../../",
  coverageProvider: "v8",
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/src/*.config.js",
    "!<rootDir>/src/coverage/**"
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    "\\.svg$": "<rootDir>/src/__mocks__/svg.ts"
  },
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest"
  },
  testPathIgnorePatterns: ["/node_modules/"],
  transformIgnorePatterns: ["/node_modules/"],

  modulePathIgnorePatterns: [
    "<rootDir>/scripts/vite/vite.config.ts",
    "<rootDir>/src/app.ts",
    "<rootDir>/src/main.ts",
    "<rootDir>/src/types.ts"
  ]
};
