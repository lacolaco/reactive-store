const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  errorOnDeprecated: true,
  globals: {
    'ts-jest': {
      tsconfig: path.resolve(__dirname, './tsconfig.spec.json'),
    },
  },
};
