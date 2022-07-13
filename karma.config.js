// Karma configuration
// Generated on Wed Jul 06 2022 12:41:01 GMT-0400 (Eastern Daylight Time)
const path = require('path');
const lwc = require('@lwc/rollup-plugin');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replaceRollupPlugin = require('@rollup/plugin-replace');

const basePath = __dirname;

const bundleIgnore =
    '/node_modules/(?!(.*@salesforce/sfdx-lwc-jest/src/lightning-stubs)/)';

const bundleReplacements = {
    'c/apexImperativeMethod': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexImperativeMethod/apexImperativeMethod'
    ),
    'c/apexImperativeMethodWithComplexParams': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexImperativeMethodWithComplexParams/apexImperativeMethodWithComplexParams'
    ),
    'c/apexWireMethodToFunction': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexWireMethodToFunction/apexWireMethodToFunction'
    ),
    'c/apexImperativeMethodWithParams': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexImperativeMethodWithParams/apexImperativeMethodWithParams'
    ),
    'c/apexWireMethodWithParams': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexWireMethodWithParams/apexWireMethodWithParams'
    ),
    'c/apexWireMethodWithParams': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexWireMethodWithParams/apexWireMethodWithParams'
    ),
    'c/apexStaticSchema': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexStaticSchema/apexStaticSchema'
    ),
    'c/apexWireMethodWithComplexParams': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexWireMethodWithComplexParams/apexWireMethodWithComplexParams'
    ),
    'c/apiProperty': path.resolve(
        basePath,
        './force-app/main/default/lwc/apiProperty/apiProperty'
    ),
    'c/apexWireMethodToProperty': path.resolve(
        basePath,
        './force-app/main/default/lwc/apexWireMethodToProperty/apexWireMethodToProperty'
    ),
    'c/apiMethod': path.resolve(
        basePath,
        './force-app/main/default/lwc/apiMethod/apiMethod'
    ),
    'c/clock': path.resolve(
        basePath,
        './force-app/main/default/lwc/clock/clock'
    ),
    'c/categoryFilter': path.resolve(
        basePath,
        './force-app/main/default/lwc/categoryFilter/categoryFilter'
    ),
    'c/apiSetterGetter': path.resolve(
        basePath,
        './force-app/main/default/lwc/apiSetterGetter/apiSetterGetter'
    ),
    'c/compositionBasics': path.resolve(
        basePath,
        './force-app/main/default/lwc/compositionBasics/compositionBasics'
    ),
    'c/chartBar': path.resolve(
        basePath,
        './force-app/main/default/lwc/chartBar/chartBar'
    ),
    'c/compositionIteration': path.resolve(
        basePath,
        './force-app/main/default/lwc/compositionIteration/compositionIteration'
    ),
    'c/compositionContactSearch': path.resolve(
        basePath,
        './force-app/main/default/lwc/compositionContactSearch/compositionContactSearch'
    ),
    'c/compositionWithAppBuilder': path.resolve(
        basePath,
        './force-app/main/default/lwc/compositionWithAppBuilder/compositionWithAppBuilder'
    ),
    'c/contactInfo': path.resolve(
        basePath,
        './force-app/main/default/lwc/contactInfo/contactInfo'
    ),
    'c/contactListItem': path.resolve(
        basePath,
        './force-app/main/default/lwc/contactListItem/contactListItem'
    ),
    'c/contactList': path.resolve(
        basePath,
        './force-app/main/default/lwc/contactList/contactList'
    ),
    'c/contactListItemBubbling': path.resolve(
        basePath,
        './force-app/main/default/lwc/contactListItemBubbling/contactListItemBubbling'
    ),
    'c/contactTile': path.resolve(
        basePath,
        './force-app/main/default/lwc/contactTile/contactTile'
    ),
    'c/contactSelector': path.resolve(
        basePath,
        './force-app/main/default/lwc/contactSelector/contactSelector'
    ),
    'c/datatableCustomDataType': path.resolve(
        basePath,
        './force-app/main/default/lwc/datatableCustomDataType/datatableCustomDataType'
    ),
    'c/datatableInlineEditWithApex': path.resolve(
        basePath,
        './force-app/main/default/lwc/datatableInlineEditWithApex/datatableInlineEditWithApex'
    ),
    'c/eventBubbling': path.resolve(
        basePath,
        './force-app/main/default/lwc/eventBubbling/eventBubbling'
    ),
    'c/datatableInlineEditWithUiApi': path.resolve(
        basePath,
        './force-app/main/default/lwc/datatableInlineEditWithUiApi/datatableInlineEditWithUiApi'
    ),
    'c/errorPanel': path.resolve(
        basePath,
        './force-app/main/default/lwc/errorPanel/errorPanel'
    ),
    'c/hello': path.resolve(
        basePath,
        './force-app/main/default/lwc/hello/hello'
    ),
    'c/helloConditionalRendering': path.resolve(
        basePath,
        './force-app/main/default/lwc/helloConditionalRendering/helloConditionalRendering'
    ),
    'c/eventWithData': path.resolve(
        basePath,
        './force-app/main/default/lwc/eventWithData/eventWithData'
    ),
    'c/helloBinding': path.resolve(
        basePath,
        './force-app/main/default/lwc/helloBinding/helloBinding'
    ),
    'c/helloForEach': path.resolve(
        basePath,
        './force-app/main/default/lwc/helloForEach/helloForEach'
    ),
    'c/helloExpressions': path.resolve(
        basePath,
        './force-app/main/default/lwc/helloExpressions/helloExpressions'
    ),
    'c/miscDomQuery': path.resolve(
        basePath,
        './force-app/main/default/lwc/miscDomQuery/miscDomQuery'
    ),
    'c/libsD3': path.resolve(
        basePath,
        './force-app/main/default/lwc/libsD3/libsD3'
    ),
    'c/lmsSubscriberWebComponent': path.resolve(
        basePath,
        './force-app/main/default/lwc/lmsSubscriberWebComponent/lmsSubscriberWebComponent'
    ),
    'c/lmsPublisherWebComponent': path.resolve(
        basePath,
        './force-app/main/default/lwc/lmsPublisherWebComponent/lmsPublisherWebComponent'
    ),
    'c/libsFullCalendar': path.resolve(
        basePath,
        './force-app/main/default/lwc/libsFullCalendar/libsFullCalendar'
    ),
    'c/miscContentAsset': path.resolve(
        basePath,
        './force-app/main/default/lwc/miscContentAsset/miscContentAsset'
    ),
    'c/miscGetUserId': path.resolve(
        basePath,
        './force-app/main/default/lwc/miscGetUserId/miscGetUserId'
    ),
    'c/miscModal': path.resolve(
        basePath,
        './force-app/main/default/lwc/miscModal/miscModal'
    ),
    'c/miscMultipleTemplates': path.resolve(
        basePath,
        './force-app/main/default/lwc/miscMultipleTemplates/miscMultipleTemplates'
    ),
    'c/miscNotification': path.resolve(
        basePath,
        './force-app/main/default/lwc/miscNotification/miscNotification'
    ),
    'c/miscSharedJavaScript': path.resolve(
        basePath,
        './force-app/main/default/lwc/miscSharedJavaScript/miscSharedJavaScript'
    ),
    'c/mortgage': path.resolve(
        basePath,
        './force-app/main/default/lwc/mortgage/mortgage'
    ),
    'c/miscRestApiCall': path.resolve(
        basePath,
        './force-app/main/default/lwc/miscRestApiCall/miscRestApiCall'
    ),
    'c/mortgage': path.resolve(
        basePath,
        './force-app/main/default/lwc/mortgage/mortgage'
    ),
    'c/miscStaticResource': path.resolve(
        basePath,
        './force-app/main/default/lwc/miscStaticResource/miscStaticResource'
    ),
    'c/modal': path.resolve(
        basePath,
        './force-app/main/default/lwc/modal/modal'
    ),
    'c/navToFilesHome': path.resolve(
        basePath,
        './force-app/main/default/lwc/navToFilesHome/navToFilesHome'
    ),
    'c/navToHelloTab': path.resolve(
        basePath,
        './force-app/main/default/lwc/navToHelloTab/navToHelloTab'
    ),
    'c/navToChatterHome': path.resolve(
        basePath,
        './force-app/main/default/lwc/navToChatterHome/navToChatterHome'
    ),
    'c/navToRecord': path.resolve(
        basePath,
        './force-app/main/default/lwc/navToRecord/navToRecord'
    ),
    'c/navToListView': path.resolve(
        basePath,
        './force-app/main/default/lwc/navToListView/navToListView'
    ),
    'c/navToNewRecord': path.resolve(
        basePath,
        './force-app/main/default/lwc/navToNewRecord/navToNewRecord'
    ),
    'c/navToHome': path.resolve(
        basePath,
        './force-app/main/default/lwc/navToHome/navToHome'
    ),
    'c/navToNewRecordWithDefaults': path.resolve(
        basePath,
        './force-app/main/default/lwc/navToNewRecordWithDefaults/navToNewRecordWithDefaults'
    ),
    'c/navToRelatedList': path.resolve(
        basePath,
        './force-app/main/default/lwc/navToRelatedList/navToRelatedList'
    ),
    'c/recordEditFormDynamicContact': path.resolve(
        basePath,
        './force-app/main/default/lwc/recordEditFormDynamicContact/recordEditFormDynamicContact'
    ),
    'c/paginator': path.resolve(
        basePath,
        './force-app/main/default/lwc/paginator/paginator'
    ),
    'c/recordViewFormDynamicContact': path.resolve(
        basePath,
        './force-app/main/default/lwc/recordViewFormDynamicContact/recordViewFormDynamicContact'
    ),
    'c/recordEditFormStaticContact': path.resolve(
        basePath,
        './force-app/main/default/lwc/recordEditFormStaticContact/recordEditFormStaticContact'
    ),
    'c/recordViewFormStaticContact': path.resolve(
        basePath,
        './force-app/main/default/lwc/recordViewFormStaticContact/recordViewFormStaticContact'
    ),
    'c/recordFormStaticContact': path.resolve(
        basePath,
        './force-app/main/default/lwc/recordFormStaticContact/recordFormStaticContact'
    ),
    'c/recordFormDynamicContact': path.resolve(
        basePath,
        './force-app/main/default/lwc/recordFormDynamicContact/recordFormDynamicContact'
    ),
    'c/viewSource': path.resolve(
        basePath,
        './force-app/main/default/lwc/viewSource/viewSource'
    ),
    'c/wireGetObjectInfo': path.resolve(
        basePath,
        './force-app/main/default/lwc/wireGetObjectInfo/wireGetObjectInfo'
    ),
    'c/wireCurrentPageReference': path.resolve(
        basePath,
        './force-app/main/default/lwc/wireCurrentPageReference/wireCurrentPageReference'
    ),
    'c/todoList': path.resolve(
        basePath,
        './force-app/main/default/lwc/todoList/todoList'
    ),
    'c/wireGetRecordDynamicContact': path.resolve(
        basePath,
        './force-app/main/default/lwc/wireGetRecordDynamicContact/wireGetRecordDynamicContact'
    ),
    'c/wireGetPicklistValues': path.resolve(
        basePath,
        './force-app/main/default/lwc/wireGetPicklistValues/wireGetPicklistValues'
    ),
    'c/wireGetRecordStaticContact': path.resolve(
        basePath,
        './force-app/main/default/lwc/wireGetRecordStaticContact/wireGetRecordStaticContact'
    ),
    'c/wireGetPicklistValuesByRecordType': path.resolve(
        basePath,
        './force-app/main/default/lwc/wireGetPicklistValuesByRecordType/wireGetPicklistValuesByRecordType'
    ),
    'c/wireListView': path.resolve(
        basePath,
        './force-app/main/default/lwc/wireListView/wireListView'
    ),
    'c/wireGetRecordUser': path.resolve(
        basePath,
        './force-app/main/default/lwc/wireGetRecordUser/wireGetRecordUser'
    ),
    'c/eventSimple': path.resolve(
        basePath,
        './force-app/main/default/lwc/eventSimple/eventSimple'
    ),
    'c/ldsDeleteRecord': path.resolve(
        basePath,
        './force-app/main/default/lwc/ldsDeleteRecord/ldsDeleteRecord'
    ),
    'c/helloIterator': path.resolve(
        basePath,
        './force-app/main/default/lwc/helloIterator/helloIterator'
    ),
    'c/lds': path.resolve(basePath, './force-app/main/default/lwc/lds/lds'),
    'c/ldsGenerateRecordInputForCreate': path.resolve(
        basePath,
        './force-app/main/default/lwc/ldsGenerateRecordInputForCreate/ldsGenerateRecordInputForCreate'
    ),
    'c/ldsCreateRecord': path.resolve(
        basePath,
        './force-app/main/default/lwc/ldsCreateRecord/ldsCreateRecord'
    ),
    'c/ldsUtils': path.resolve(
        basePath,
        './force-app/main/default/lwc/ldsUtils/ldsUtils'
    ),
    'c/libsChartjs': path.resolve(
        basePath,
        './force-app/main/default/lwc/libsChartjs/libsChartjs'
    ),

    // TODO: All of the original ones that are in jest.config.js
    '@salesforce/apex': path.resolve(
        basePath,
        './force-app/test/jest-mocks/apex'
    ),
    '@salesforce/schema': path.resolve(
        basePath,
        './force-app/test/jest-mocks/schema'
    ),
    'lightning/navigation': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/navigation'
    ),
    'lightning/platformShowToastEvent': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/platformShowToastEvent'
    ),
    'lightning/uiRecordApi': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/uiRecordApi'
    ),
    'lightning/messageService': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/messageService'
    ),
    'lightning/actions': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/actions'
    ),

    // All these ones I added the original file
    'lightning/platformResourceLoader': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/platformResourceLoader'
    ),
    'lightning/pageReferenceUtils': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/pageReferenceUtils'
    ),
    'lightning/uiObjectInfoApi': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/uiObjectInfoApi'
    ),
    'lightning/uiListApi': path.resolve(
        basePath,
        './force-app/test/jest-mocks/lightning/uiListApi'
    ),

    // Added more of these but took them straight from node_modules instead of copy the file over
    'lightning/button': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/button/button'
    ),
    'lightning/input': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/input/input'
    ),
    'lightning/formattedEmail': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/formattedEmail/formattedEmail'
    ),
    'lightning/card': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/card/card'
    ),
    'lightning/layoutItem': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/layoutItem/layoutItem'
    ),
    'lightning/formattedDateTime': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/formattedDateTime/formattedDateTime'
    ),
    'lightning/formattedPhone': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/formattedPhone/formattedPhone'
    ),
    'lightning/combobox': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/combobox/combobox'
    ),
    'lightning/messages': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/messages/messages'
    ),
    'lightning/recordForm': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/recordForm/recordForm'
    ),
    'lightning/outputField': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/outputField/outputField'
    ),
    'lightning/tree': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/tree/tree'
    ),
    'lightning/layout': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/layout/layout'
    ),
    'lightning/datatable': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/datatable/datatable'
    ),
    'lightning/formattedNumber': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/formattedNumber/formattedNumber'
    ),
    'lightning/buttonIcon': path.resolve(
        basePath,
        './node_modules/@salesforce/sfdx-lwc-jest/src/lightning-stubs/buttonIcon/buttonIcon'
    ),
    objectGuards: true,
    preventAssignment: true
};

console.log(basePath);
console.log(__dirname);
console.log(bundleReplacements);
// process.exit();

const pattern = 'force-app/main/default/lwc/**/__tests__/*.test.js';

module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath,

        // frameworks to use
        // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [{ pattern, type: 'module', watched: true }],

        // list of files / patterns to exclude
        // TODO: We had this excluded, but why?
        exclude: [
            // path.resolve(
            //     basePath,
            //     './force-app/main/default/lwc/editRecordScreenAction/__tests__/editRecordScreenAction.test.js'
            // )
        ],

        // custom preprocessor
        rollupPreprocessor: {
            preserveEntrySignatures: 'exports-only',
            treeshake: false,

            // TODO: Pretty sure we don't need this
            // testPathIgnorePatterns: ['./node_modules/', './test/specs/'],

            plugins: [
                replaceRollupPlugin(bundleReplacements),
                // replaceRollupPlugin({
                //   include: bundleReplacements,
                //   exclude: bundleIgnore,
                //   preventAssignment: true,
                // }),
                nodeResolve({
                    preferBuiltins: true
                }),
                lwc()
            ],
            output: {
                format: 'es',
                sourcemap: 'inline'
            }
        },

        // TODO: The jest.config.js has this included in it to avoid transforming lightning/*
        // I think we might want something similar somewhere
        // replaceRollupPlugin has an "exclude" option

        //   transformIgnorePatterns: [
        //     '/node_modules/(?!(.*@salesforce/sfdx-lwc-jest/src/lightning-stubs)/)',
        //   ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
        preprocessors: {
            [pattern]: ['rollup']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser instances should be started simultaneously
        concurrency: Infinity

        // proxies: {
        //   '^@salesforce/apex$': '<rootDir>/force-app/test/jest-mocks/apex',
        //   '^@salesforce/schema$': '<rootDir>/force-app/test/jest-mocks/schema',
        //   '^lightning/navigation$':
        //       '<rootDir>/force-app/test/jest-mocks/lightning/navigation',
        //   '^lightning/platformShowToastEvent$':
        //       '<rootDir>/force-app/test/jest-mocks/lightning/platformShowToastEvent',
        //   '^lightning/uiRecordApi$':
        //       '<rootDir>/force-app/test/jest-mocks/lightning/uiRecordApi',
        //   '^lightning/messageService$':
        //       '<rootDir>/force-app/test/jest-mocks/lightning/messageService',
        //   '^lightning/actions$':
        //       '<rootDir>/force-app/test/jest-mocks/lightning/actions'
        // }
    });
};
