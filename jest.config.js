const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');
const setupFilesAfterEnv = jestConfig.setupFilesAfterEnv || [];
const lwc = require('@lwc/rollup-plugin');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

setupFilesAfterEnv.push('<rootDir>/jest-sa11y-setup.js');
setupFilesAfterEnv.push('<rootDir>/jest-crypto-setup.js');

const transform = process.env.LWS
    ? {
          ...jestConfig.transform,
          '^.+\\.(js|html|css)$': '<rootDir>/rollup.config.js'
      }
    : jestConfig.transform;

const testMatch = [
    '**/__tests__/**/*.[jt]s?(x)',
    'force-app/main/default/lwc/**/*.[jt]s?(x)'
];

module.exports = {
    ...jestConfig,

    // A map from regular expressions to module names or to arrays of module names
    // that allow to stub out resources
    moduleNameMapper: {
        '^@salesforce/apex$': '<rootDir>/force-app/test/jest-mocks/apex',
        '^@salesforce/schema$': '<rootDir>/force-app/test/jest-mocks/schema',
        '^lightning/navigation$':
            '<rootDir>/force-app/test/jest-mocks/lightning/navigation',
        '^lightning/platformShowToastEvent$':
            '<rootDir>/force-app/test/jest-mocks/lightning/platformShowToastEvent',
        '^lightning/uiRecordApi$':
            '<rootDir>/force-app/test/jest-mocks/lightning/uiRecordApi',
        '^lightning/messageService$':
            '<rootDir>/force-app/test/jest-mocks/lightning/messageService',
        '^lightning/actions$':
            '<rootDir>/force-app/test/jest-mocks/lightning/actions'
    },

    // A list of paths to modules that run some code to configure or set up the testing env.
    setupFiles: ['jest-canvas-mock'],

    // A list of paths to modules that run some code to configure or set up the testing
    // framework before each test file in that suite is executed
    setupFilesAfterEnv,

    // Default timeout of a test in milliseconds
    testTimeout: 10000,

    // The glob pattern Jest uses to detect test files
    testMatch,

    // A map from regular expressions to paths to transformers.
    transform
};
