// Copyright2018 Rodrigo Silveira
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

import {Point} from "./Point";

export class CanvasMath {

	/**
	 * Drawing notes:
	 *
	 *  Inline sparkline
	 *    When drawing a simple sparkline, including start, min, max, and end dots
	 *    we must leave a margin between the line and the canvas' edges to avoid
	 *    clipping these dots when their points are a these edges. This is done by
	 *    drawing the sparkline inside a rectangle contained in the canvas'
	 *    drawing area with a distance of half of the dotradius between these
	 *    rectangles' edges.
	 */

	/**
	 * Returns the number of pixels between two consecutive values in the x-axis
	 */
	static xStep(width: number, linePoints: number[], dotradius: number): number {
		return (width - dotradius*2) / linePoints.length;
	}

	/**
	 * Returns the number of pixels between two consecutive values in the y-axis
	 */
	static yStep(height: number, linePoints:number[], dotradius: number): number {
		let max = 0;
		for (let entry of linePoints) {
			if (entry > max) max = entry;
		}

		return ((height - dotradius*2) / max);
	}

	/**
	 * Translate from bottom left to top left coordinates
	 */
	static translateToCanvas(height: number, point: Point, dotradius: number): Point {
		return new Point(point.getX() + dotradius*2, height - (point.getY() + dotradius));
	}

	/**
	 * Return the index of the first max point
	 */
	static maxPointIndex(points: number[]): number {
		let max: number = points[0];
		let index: number = 0;
		for (let i: number = 1; i < points.length; i++) {
			if (points[i] > max) {
				max = points[i];
				index = i;
			}
		}
		return index;
	}

	/**
	 * Return the index of the first min point
	 */
	static mixPointIndex(points: number[]): number {
		let min: number = points[0];
		let index: number = 0;
		for (let i: number = 1; i < points.length; i++) {
			if (points[i] < min) {
				min = points[i];
				index = i;
			}
		}
		return index;
	}
}