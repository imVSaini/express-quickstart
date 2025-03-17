/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
export default {
  testEnvironment: "node",
  clearMocks: true,
  rootDir: "./",
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.js",
    "!<rootDir>/src/**/constant.js",
    "!<rootDir>/src/**/index.js",
    "!<rootDir>/src/**/types.js"
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  coverageReporters: ["json", "html"],
  testMatch: [
    "<rootDir>/__tests__/**/*.test.js",
    "<rootDir>/?(*.)+(spec|test).js"
  ]
}
