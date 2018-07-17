// Copyright 2018 Rodrigo Silveira
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = undefined;

module.exports = function(config) {
	config.set({
		frameworks: ['mocha', 'chai', 'fixture'],
		browsers: ['ChromeHeadless'],
		files: [
			{
				pattern: 'test/*.test.js',
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

