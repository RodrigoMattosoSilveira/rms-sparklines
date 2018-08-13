var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = undefined;

module.exports = function(config) {
	config.set({
		frameworks: ['mocha', 'chai', 'fixture'],
		browsers: ['ChromeHeadless'],
		files: [
			{
				pattern: 'test/bar-chart.test.js',
				watched: false,
			},
			{
				pattern: 'test/fixture/**/*',
			},
		],
		reporters: ['mocha'],
		singleRun: true,
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		concurrency: Infinity,
		preprocessors: {
			'test/**/*.test.js': ['webpack'],
			'test/fixture/**/*.fixture.html' : ['html2js'],
		},
		webpack: webpackConfig,
		webpackMiddleware: {
			stats: 'errors-only'
		},
		mochaReporter: {
			colors: {
				success: 'green',
				info: 'bgGreen',
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
	});
};

