'use strict';
const loadBaseConfig = require('./base');

module.exports = (config) => {
    loadBaseConfig(config);

    config.set({
        reporters: [...config.reporters, 'progress'],

        browsers: ['Chrome'],

        plugins: [...config.plugins, 'karma-chrome-launcher']
    });
};
