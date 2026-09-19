/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  /* collectCoverage: true,

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 85,
      statements: 85,
    },
  }, */

  // Points Jest to your setup file(jest.setup.ts)
  //setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.ts"],
  // This line ensures Jest catches your tsconfig configurations
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
