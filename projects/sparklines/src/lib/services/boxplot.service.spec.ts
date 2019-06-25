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
import { TestBed } from '@angular/core/testing';

import { BoxplotService } from './boxplot.service';

describe('BoxplotService', () => {
   let boxPlot: BoxplotService = null;
   let population: number[] = null;

   beforeEach(() => {
      TestBed.configureTestingModule({ providers: [BoxplotService]})
      boxPlot = TestBed.get(BoxplotService);
   });

   it('should be created', () => {
      expect(boxPlot).toBeTruthy();
   });
   it(`is here`, () => {
      expect(BoxplotService.helloWorld()).toEqual(`hello world`);
   });
   describe('calculates the median', () => {
		beforeEach(() => {
			population = []
		});
		it(`for an even number of population members`, () => {
			let population = [15, 10, 1, 4, 11, 12, 3, 14, 8, 4, 9, 13];
			expect(BoxplotService.calculateMedian(population)).toEqual(9.5);
		});
		it(`for an odd number of population members`, () => {
			let population = [15, 10, 1, 4, 11, 12, 3, 14, 8, 4, 9, 13, 2];
			expect(BoxplotService.calculateMedian(population)).toEqual(9);
		});
	});
   describe('calculates the first quartile', () => {
		beforeEach(() => {
			population = []
		});
		it(`for an even number of population members`, () => {
			let population = [15, 10, 1, 4, 11, 12, 3, 14, 8, 4, 9, 13, 2, 17];
			expect(BoxplotService.calculatequartileOne(population)).toEqual(4);
		});
		it(`for an odd number of population members`, () => {
			let population = [15, 10, 1, 4, 11, 12, 3, 14, 8, 4, 9, 13, 2, 17, 16];
			expect(BoxplotService.calculatequartileOne(population)).toEqual(4);
		});

		describe('calculates the third quartile', () => {
			beforeEach(() => {
				population = []
			});
			it(`for an even number of population members`, () => {
				let population = [15, 10, 1, 4, 11, 12, 3, 14, 8, 4, 9, 13, 2, 17];
				expect(BoxplotService.calculatequartileThree(population)).toEqual(13);
			});
			it(`for an odd number of population members`, () => {
				let population = [15, 10, 1, 4, 11, 12, 3, 14, 8, 4, 9, 13, 2, 17, 16];
				expect(BoxplotService.calculatequartileThree(population)).toEqual(14);
			});
		});
	});

});
