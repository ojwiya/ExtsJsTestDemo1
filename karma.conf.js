module.exports = function(config) {
    config.set({
        // basePath is used to resolve all patterns of files
        //basePath: '/Users/user/Documents/demos/karma_jasmine_2_extjs4',
        // frameworks to select which unit testing framework you will be using
        frameworks: ["jasmine"],
        // for extjs this is tricky as you will need the following files
        // 1 extjs framework
        // 2 extjs ready/karma launch
        // 3 extjs loader.setPath file
        // 4 files to be tests
        // 5 files which need to be served for ajax calls, etc.
        // 6 unit test files        
        files: [
            //"http://localhost/ext-4.2.2-ent/ext-4.2.2.1144/ext-all.js", // 1
            "extjs/ext-all.js", // 1
            "karma_app_test.js", // 2
            "karma_extjs_appconfig.js", // 3
            "app/model/User.js",
            "app/view/user/Edit.js",
            "app/view/user/List.js",
            { pattern: 'data/users.json', watched: false, included: false, served: true }, // this file will be served when our ajax calls requires it
            "app/store/Users.js",
            "app/controller/Users.js",
            "app-tests/example.js" // you can add as many test files as required.
        ],
        // reporters are different ways to display your reports and/or types of reports
        reporters: ["dots", "progress", "coverage", "html", "junit"],
        // Karma's default port is 9876
        port: 9876,
        // your coverage reporter, needs a type and a location to be displayed.
        coverageReporter: {
            type: 'cobertura',
            dir: 'coverage/',
            file: 'coverage.xml'
        },

        // you can associate various types of services and reports to file.
        // in our case, we are associating coverage with files for analysing the amount of function coverage each file is getting from the tests.
        preprocessors: {
            'app/store/Users.js': 'coverage',
            'app/controller/Users.js': 'coverage'
        },
        // setting up the output directory of html Reporter which will reporter the Jasmine unit tests info (what passes and fails)
        htmlReporter: {
            outputDir: 'test_results/html'
        },
        junitReporter: {
            outputDir: 'test_results/xml', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'extjs_test_jasmine_js.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true, // add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {}, // key value pair of properties to add to the <properties> section of the report
            xmlVersion: '1' // use '1' if reporting to be per SonarQube 6.2 XML format
        },
        colors: true,
        // when files are served, this proxy will be used to resolved paths, for example in our store's proxy
        proxies: {
            "data/": "http://localhost:8081/data"
        },
        // log level allows you to view output of karma's execution
        // possible values are: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,
        // enable or disable watching files when they change
        autoWatch: true,
        // which browsers to use
        // browsers: ["Chrome"],
        browsers: ["PhantomJS"],
        // if true, karma captures browsers, runs the tests and then exits
        // if debugging, use a browser like Chrome, Firefox, etc. and set singleRun: false
        singleRun: true,
        // this might be a bug in Karma, because base/ is supposed to be set by default, but somehow, it seems to be required here
        // for Karma to properly find the files.  You can read about this online on various sites.
        urlRoot: '/base/',
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-html-reporter'
        ]
    });
};
