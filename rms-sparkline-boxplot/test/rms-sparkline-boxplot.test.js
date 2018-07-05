/*
 * Copyright 2018 Rodrigo Silveira
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// TODO: Move test file to TypeScript.
// import 'mocha';
// import { expect } from 'chai';
// import 'karma-fixture';
import '@webcomponents/webcomponentsjs/webcomponents-lite';

import { RmsSparklineBoxplot } from '../src/rms-sparkline-boxplot';

describe('<rms-sparkline-boxplot>', () => {
	let component;
	let fixturePath = 'rms-sparkline-boxplot.fixture.html';
	const FIXTURES = {
		DEFAULT: 0,
		ATTRIBUTES: 1,
	};
	const DEFAULTS = {
		BOOLEAN: true,
		NUMBER: 42,
		STRING: 'Pickle',
		OBJECT: {
			foo: 'bar',
		},
	};

	before(() => {
		fixture.setBase('test/fixture')
	});

	afterEach(() => {
		fixture.cleanup()
	});

	describe('when configured', () => {
		describe('without attributes', () => {
			beforeEach(() => {
				component = fixture.load(fixturePath)[FIXTURES.DEFAULT];
			});
			describe('children', () => {

				it(' has correct tag name ', () => {
					expect(component.tagName).to.equal('RMS-SPARKLINE-BOXPLOT');
				});

				it(' has 0 children', () => {
					expect(component.shadowRoot.children.length).equal(0);
				});
			});

		});
		describe('with attributes', () => {
			beforeEach(() => {
				component = fixture.load(fixturePath)[FIXTURES.ATTRIBUTES];
			});

			describe('has 2 children', () => {
				it(' are 2', () => {
					expect(component.shadowRoot.children.length).equal(2);
				});

				it(' first is style', () => {
					expect(component.shadowRoot.children[0].tagName).equal('STYLE');
				});

				it(' second is canvas', () => {
					expect(component.shadowRoot.children[1].tagName).equal('CANVAS');
				});

				it(' canvas width is 64', () => {
					expect(component.shadowRoot.children[1].width).equal(64);
				});

				it(' canvas height is 16', () => {
					expect(component.shadowRoot.children[1].height).equal(16);
				});
			});
		});
	});
});
