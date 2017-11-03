/* global module */

module.exports = {
    collectCoverage: true,
    coverageDirectory: "<rootDir>/tests/unit/coverage",
    moduleFileExtensions: [
        "tsx",
        "ts",
        "js"
    ],
    modulePaths: [
        "<rootDir>/src"
    ],
    roots: [
        "<rootDir>/src/",
        "<rootDir>/tests/unit/specs"
    ],
    transform: {
        ".*\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
        ".*\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    testRegex: ".*\\.(spec|test)\\.(tsx|ts|js)$",
    verbose: true
};
