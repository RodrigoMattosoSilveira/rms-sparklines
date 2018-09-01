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


// Warn if overriding existing method
import {BarChart} from "../src/bar-chart";
import { Coordinates3DEnum } from '../src/coordinates-3D-enum';
import { Bar3d } from "../src/bar-3d";

if(Array.prototype.equals)
	console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
	// if the other array is a falsy value, return
	if (!array)
		return false;

	// compare lengths - can save a lot of time
	if (this.length != array.length)
		return false;

	for (let i = 0, l=this.length; i < l; i++) {
		// Check if we have nested arrays
		if (this[i] instanceof Array && array[i] instanceof Array) {
			// recurse into the nested arrays
			if (!this[i].equals(array[i]))
				return false;
		}
		else if (this[i] != array[i]) {
			// Warning - two different object instances will never be equal: {x:20} != {x:20}
			return false;
		}
	}
	return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

describe(`bar-3d`, () => {
	let lowerLeft;
	let lowerLeft_x;
	let lowerLeft_y;
	let lowerLeft_z;
	let upperRight;
	let upperRight_x;
	let upperRight_y;
	let upperRight_z;
	let barFillColor;
	let z;
	let width;
	let height;
	let bar_3d;

	before(() => {
		width = 5;
		height = 8;

		lowerLeft = [];
		lowerLeft_x = 0;
		lowerLeft_y = height;
		lowerLeft_z = 1;
		lowerLeft[Coordinates3DEnum.X] = lowerLeft_x;
		lowerLeft[Coordinates3DEnum.Y] = lowerLeft_y;
		lowerLeft[Coordinates3DEnum.Z] = lowerLeft_z;

		upperRight = [];
		upperRight_x = width;
		upperRight_y = 0;
		upperRight_z = 1;
		upperRight[Coordinates3DEnum.X] = upperRight_x;
		upperRight[Coordinates3DEnum.Y] = upperRight_y;
		upperRight[Coordinates3DEnum.Z] = upperRight_z;

		barFillColor = `black`;
		bar_3d = new Bar3d(lowerLeft, upperRight, barFillColor);
	});
	describe(`is initialized`, () => {
		it(`with a valid bar_3d object`, () => {
			expect(bar_3d).to.not.equal(null);
		});
		it(`with a valid fillColor`, () => {
			expect(bar_3d.fillColor).to.equal(barFillColor);
		});
		it(`with a valid bar_3d width`, () => {
			expect(bar_3d.width).to.equal(width);
		});
		it(`with a valid bar_3d height`, () => {
			expect(bar_3d.height).to.equal(height);
		});
		describe(`with a valid lower left`, () => {
			it(`x coordinate`, () => {
				expect(bar_3d.lowerLeft[Coordinates3DEnum.X]).to.equal(lowerLeft_x);
			});
			it(`y coordinate`, () => {
				expect(bar_3d.lowerLeft[Coordinates3DEnum.Y]).to.equal(lowerLeft_y);
			});
			it(`z coordinate`, () => {
				expect(bar_3d.lowerLeft[Coordinates3DEnum.Z]).to.equal(lowerLeft_z);
			});
		});
		describe(`with a valid upper right`, () => {
			it(`x coordinate`, () => {
				expect(bar_3d.upperRight[Coordinates3DEnum.X]).to.equal(upperRight_x);
			});
			it(`y coordinate`, () => {
				expect(bar_3d.upperRight[Coordinates3DEnum.Y]).to.equal(upperRight_y);
			});
			it(`z coordinate`, () => {
				expect(bar_3d.upperRight[Coordinates3DEnum.Z]).to.equal(upperRight_z);
			});
		});
	});
});


