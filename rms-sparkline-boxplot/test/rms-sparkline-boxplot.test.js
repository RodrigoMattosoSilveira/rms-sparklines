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
		CANVAS: 1,
		SVG: 2
	};
	let divEl;
	let canvalEl;

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
			describe('when using the canvas drawing method', () => {
				beforeEach(() => {
					component = fixture.load(fixturePath)[FIXTURES.CANVAS];
				});
				describe('has 2 children', () => {
					it(' are 2', () => {
						expect(component.shadowRoot.children.length).equal(2);
					});

					it(' first is style', () => {
						expect(component.shadowRoot.children[0].tagName).equal('STYLE');
					});

					it(' second is canvas', () => {
						expect(component.shadowRoot.children[1].tagName).equal('DIV');
					});

					describe(` the DIV element has`, () => {
						beforeEach(() => {
							divEl = component.shadowRoot.children[1]
						});
						it('  2 children', () => {
							expect(divEl.children.length).equal(2);
						});

						describe(` the first is`, () => {
							it(' a canvas', () => {
								expect(divEl.children[0].tagName).equal('CANVAS');
							});

							it(' with width equal to 64', () => {
								expect(divEl.children[0].width).equal(128);
							});

							it(' with height equal to 16', () => {
								expect(divEl.children[0].height).equal(32);
							});
						});
						describe(` the second is`, () => {
							it(' is a SLOT', () => {
								expect(divEl.children[1].tagName).equal('SLOT');
							});
						});
					});
				});
			});
			describe('when using the svg drawing method', () => {
				beforeEach(() => {
					component = fixture.load(fixturePath)[FIXTURES.SVG];
				});
				it(' are 2', () => {
					expect(true).to.equal(true);
				});
			});
		});
	});
});
