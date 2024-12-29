module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/__tests__/**/*.test.ts", "**/?(*.)+(test).ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
