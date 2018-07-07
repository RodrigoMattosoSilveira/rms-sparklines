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
import { BoxPlot } from "../src/box-plot";
import {CssColorString} from "../src/valid-colors";

describe('box-plot', () => {
	let boxPlot = null;
	let population = null;

	before(() => {
		boxPlot = new BoxPlot();
	});
	it(`is here`, () => {
		expect(BoxPlot.helloWorld()).to.equal(`hello world`);
	});

	describe('calculates the median', () => {
		before(() => {
			population = []
		});
		it(`for an even number of population members`, () => {
			let population = [15, 10, 1, 4, 11, 12, 3, 14, 8, 4, 9, 13];
			expect(BoxPlot.calculateMedian(population)).to.equal(9.5);
		});
		it(`for an odd number of population members`, () => {
			let population = [15, 10, 1, 4, 11, 12, 3, 14, 8, 4, 9, 13, 2];
			expect(BoxPlot.calculateMedian(population)).to.equal(9);
		});
	});

	describe('calculates the first quartile', () => {
		before(() => {
			population = []
		});
		it(`for an even number of population members`, () => {
			let population = [15, 10, 1, 4, 11, 12, 3, 14, 8, 4, 9, 13, 2, 17];
			expect(BoxPlot.calculateQuartile_1(population)).to.equal(4);
		});
		it(`for an odd number of population members`, () => {
			let population = [15, 10, 1, 4, 11, 12, 3, 14, 8, 4, 9, 13, 2, 17, 16];
			expect(BoxPlot.calculateQuartile_1(population)).to.equal(4);
		});

		describe('calculates the third quartile', () => {
			before(() => {
				population = []
			});
			it(`for an even number of population members`, () => {
				let population = [15, 10, 1, 4, 11, 12, 3, 14, 8, 4, 9, 13, 2, 17];
				expect(BoxPlot.calculateQuartile_3(population)).to.equal(13);
			});
			it(`for an odd number of population members`, () => {
				let population = [15, 10, 1, 4, 11, 12, 3, 14, 8, 4, 9, 13, 2, 17, 16];
				expect(BoxPlot.calculateQuartile_3(population)).to.equal(14);
			});
		});
	});
});