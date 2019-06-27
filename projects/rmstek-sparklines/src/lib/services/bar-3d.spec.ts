/*
 * Copyright2018 Rodrigo Silveira
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
import { Coordinates3DEnum } from './coordinates-3D-enum';
import { Bar3d } from "./bar-3d";

import * as  mathjs from 'mathjs';
import { Matrix } from 'mathjs';

import './arrayExtensions'

// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

describe(`bar-3d`, () => {
	let lowerLeft: Matrix;
	let lowerLeft_x: number;
	let lowerLeft_y: number;
	let lowerLeft_z: number;
	let upperRight: Matrix;
	let upperRight_x: number;
	let upperRight_y: number;
	let upperRight_z: number;
	let barFillColor: string;
	let width: number;
	let height: number;
	let bar_3d: Bar3d;

	beforeEach(() => {
		width = 5;
		height = 8;

		lowerLeft_x = 0;
		lowerLeft_y = 0;
		lowerLeft_z = 1;
		lowerLeft = mathjs.matrix([lowerLeft_x, lowerLeft_y, lowerLeft_z, ]);

		upperRight_x = width;
		upperRight_y = height;
		upperRight_z = 1;
		upperRight = mathjs.matrix([upperRight_x, upperRight_y, upperRight_z, ]);

		barFillColor = `black`;
		bar_3d = new Bar3d(lowerLeft, upperRight, barFillColor, height);
	});
	describe(`is initialized`, () => {
		it(`with a valid bar_3d object`, () => {
			expect(bar_3d).toBeTruthy;
		});
		it(`with a valid fillColor`, () => {
			expect(bar_3d.fillColor).toEqual(barFillColor);
		});
		it(`with a valid bar_3d width`, () => {
			expect(bar_3d.getWidth()).toEqual(width);
		});
		it(`with a valid bar_3d height`, () => {
			expect(bar_3d.getHeight()).toEqual(height);
		});
		describe(`with a valid lower left`, () => {
			it(`x coordinate`, () => {
				const ll: any = bar_3d.lowerLeft.toArray();
				expect(ll[Coordinates3DEnum.X]).toEqual(lowerLeft_x);
			});
			it(`y coordinate`, () => {
				const ll: any = bar_3d.lowerLeft.toArray();
				expect(ll[Coordinates3DEnum.Y]).toEqual(lowerLeft_y);
			});
			it(`z coordinate`, () => {
				const ll: any = bar_3d.lowerLeft.toArray();
				expect(ll[Coordinates3DEnum.Z]).toEqual(lowerLeft_z);
			});
		});
		describe(`with a valid upper right`, () => {
			it(`x coordinate`, () => {
				const ur: any = bar_3d.upperRight.toArray();
				expect(ur[Coordinates3DEnum.X]).toEqual(upperRight_x);
			});
			it(`y coordinate`, () => {
				const ur: any = bar_3d.upperRight.toArray();
				expect(ur[Coordinates3DEnum.Y]).toEqual(upperRight_y);
			});
			it(`z coordinate`, () => {
				const ur: any = bar_3d.upperRight.toArray();
				expect(ur[Coordinates3DEnum.Z]).toEqual(upperRight_z);
			});
		});
	});
});
