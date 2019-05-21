// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['mocha'],
    // reporter options
    mochaReporter: {
      colors: {
        success: 'blue',
        info: 'green',
        warning: 'cyan',
        error: 'red'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      }
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['TravisCI_ChromeHeadless'],
    customLaunchers: {
      TravisCI_ChromeHeadless: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',  // Added to fix an issue where of Failed to connect to chrome browser
        ],
      }
    },
    concurrency: Infinity
  });
};
