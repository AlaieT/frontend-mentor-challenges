/**@type {import("jest").Config} */
module.exports = {
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  collectCoverage: true,
  passWithNoTests: true,
  testEnvironment: "jsdom",
  rootDir: "../../",
  testMatch: ["**/__tests__/**/*.(spec|test).ts?(x)"],
  transform: {
    "^.+\\.tsx?$": "@swc/jest"
  },
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    "\\.svg$": "<rootDir>/src/__mocks__/svg.ts"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  collectCoverageFrom: [
    "**/**/*.{ts,tsx}",
    "!**/**/*.test.{ts,tsx}",
    "!**/src/types.ts",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/__tests__/**",
    "!**/server/**",
    "!**/pages/**",
    "!**/api/**"
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/src/challenges/*",
    "<rootDir>/src/utils/*",
    "<rootDir>/src/types.ts",
    "<rootDir>/src/renderer",
    "<rootDir>/src/pages",
    "<rootDir>/scripts/vite/vite.config.ts"
  ]
};
