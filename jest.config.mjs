/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
export default {
  testEnvironment: "node",
  rootDir: "./",
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.js",
    "!<rootDir>/src/**/constant.js",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  coverageReporters: ["json", "html"],
  testMatch: [
    "<rootDir>/__tests__/**/*.test.js",
    "<rootDir>/?(*.)+(spec|test).js"
  ],
}
