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
import { RmsSparklineInlines } from '../src/rms-sparkline-inline';

describe('<rms-sparkline-inline>', () => {
	let component;
	let fixturePath = 'rms-sparkline-inline.fixture.html';
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

	let canvas;

	before(() => {
		fixture.setBase('test/fixture')
	});

	afterEach(() => {
		fixture.cleanup()
	});

	/**
	 * Validate the the component internal arguments used for computation are valid
	 */
	describe('the rms-sparkline-inline', () => {
		describe(' when declared with all attributes (see fixture for values)', () => {
			beforeEach(() => {
				component = fixture.load(fixturePath)[FIXTURES.ATTRIBUTES];
				component.linePoints = [1,2,3,4,5,6,7,8,9,1,2,3];
			});
			it('tag name is correct', () => {
				expect(component.tagName).to.equal('RMS-SPARKLINE-INLINE');
			});
			it('linePoints attarray has 12 elements', () => {
				expect(component.linePoints.length).to.equal(12);
			});
			it(`classname attribute is set to "class_1 class_2 class_3`, () => {
				expect(component.classname).to.equal('class_1 class_2 class_3');
			});
			it('width attribute is set to 65', () => {
				expect(component.width).to.equal(65);
			});
			it('height attribute is set to 17', () => {
				expect(component.height).to.equal(17);
			});
			it(`linecolor attribute is set to "linecolor"`, () => {
				expect(component.linecolor).to.equal('linecolor');
			});
			it(`linewidth attribute is set to 5.7`, () => {
				expect(component.linewidth).to.equal(5.7);
			});
			it(`dotradius attribute is set to 1.7`, () => {
				expect(component.dotradius).to.equal(1.7);
			});
			it(`shadecolor attribute is set to "lightblue"`, () => {
				expect(component.shadecolor).to.equal('shadecolor');
			});
		});

	});
});
