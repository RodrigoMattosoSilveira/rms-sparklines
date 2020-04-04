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

import { CssColorString } from './valid-colors';

describe(`valid-color`, () => {
	let cssColorString = null;
	let allValid = null;
	let allInvalid = null;
	let validColorNames = [
		'CLEAR', 'TRANSPARENT', 'aliceBlue', 'antiqueWhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black',
		'blanchedAlmond', 'blue', 'blueViolet', 'brown', 'burlyWood', 'cadetBlue', 'chartreuse', 'chocolate', 'coral',
		'cornflowerBlue', 'cornsilk', 'crimson', 'cyan', 'darkBlue', 'darkCyan', 'darkGoldenRod', 'darkGray', 'darkGrey',
		'darkGreen', 'darkKhaki', 'darkMagenta', 'darkOliveGreen', 'darkOrange', 'darkOrchid', 'darkRed', 'darkSalmon',
		'darkSeaGreen', 'darkSlateBlue', 'darkSlateGray',
		'darkSlateGrey',
		'darkTurquoise',
		'darkViolet',
		'deepPink',
		'deepSkyBlue',
		'dimGray',
		'dimGrey',
		'dodgerBlue',
		'fireBrick',
		'floralWhite',
		'forestGreen',
		'fuchsia',
		'gainsboro',
		'ghostWhite',
		'gold',
		'goldenRod',
		'gray',
		'grey',
		'green',
		'greenYellow',
		'honeyDew',
		'hotPink',
		'indianRed',
		'indigo',
		'ivory',
		'khaki',
		'lavender',
		'lavenderBlush',
		'lawnGreen',
		'lemonChiffon',
		'lightBlue',
		'lightCoral',
		'lightCyan',
		'lightGoldenRodYellow',
		'lightGray',
		'lightGrey',
		'lightGreen',
		'lightPink',
		'lightSalmon',
		'lightSeaGreen',
		'lightSkyBlue',
		'lightSlateGray',
		'lightSlateGrey',
		'lightSteelBlue',
		'lightYellow',
		'lime',
		'limeGreen',
		'linen',
		'magenta',
		'maroon',
		'mediumAquaMarine',
		'mediumBlue',
		'mediumOrchid',
		'mediumPurple',
		'mediumSeaGreen',
		'mediumSlateBlue',
		'mediumSpringGreen',
		'mediumTurquoise',
		'mediumVioletRed',
		'midnightBlue',
		'mintCream',
		'mistyRose',
		'moccasin',
		'navajoWhite',
		'navy',
		'oldLace',
		'olive',
		'oliveDrab',
		'orange',
		'orangeRed',
		'orchid',
		'paleGoldenRod',
		'paleGreen',
		'paleTurquoise',
		'paleVioletRed',
		'papayaWhip',
		'peachPuff',
		'peru',
		'pink',
		'plum',
		'powderBlue',
		'purple',
		'rebeccaPurple',
		'red',
		'rosyBrown',
		'royalBlue',
		'saddleBrown',
		'salmon',
		'sandyBrown',
		'seaGreen',
		'seaShell',
		'sienna',
		'silver',
		'skyBlue',
		'slateBlue',
		'slateGray',
		'slateGrey',
		'snow',
		'springGreen',
		'steelBlue',
		'tan',
		'teal',
		'thistle',
		'tomato',
		'turquoise',
		'violet',
		'wheat',
		'white',
		'whiteSmoke',
		'yellow',
		'yellowGreen',
	];
	let invalidColorNames = [
		'aliceBlue XX',
		'antiqueWhite XX',
		'aqua XX',
		'aquamarine XX',
		'azure XX',
		'beige XX',
		'bisque XX',
		'black XX',
		'blanchedAlmond XX',
		'blue XX',
		'blueViolet XX',
		'brown XX',
		'burlyWood XX',
		'cadetBlue XX',
		'chartreuse XX',
		'chocolate XX',
		'coral XX',
		'cornflowerBlue XX',
		'cornsilk XX',
		'crimson XX',
		'cyan XX',
		'darkBlue XX',
		'darkCyan XX',
		'darkGoldenRod XX',
		'darkGray XX',
		'darkGrey XX',
		'darkGreen XX',
		'darkKhaki XX',
		'darkMagenta XX',
		'darkOliveGreen XX',
		'darkOrange XX',
		'darkOrchid XX',
		'darkRed XX',
		'darkSalmon XX',
		'darkSeaGreen XX',
		'darkSlateBlue XX',
		'darkSlateGray XX',
		'darkSlateGrey XX',
		'darkTurquoise XX',
		'darkViolet XX',
		'deepPink XX',
		'deepSkyBlue XX',
		'dimGray XX',
		'dimGrey XX',
		'dodgerBlue XX',
		'fireBrick XX',
		'floralWhite XX',
		'forestGreen XX',
		'fuchsia XX',
		'gainsboro XX',
		'ghostWhite XX',
		'gold XX',
		'goldenRod XX',
		'gray XX',
		'grey XX',
		'green XX',
		'greenYellow XX',
		'honeyDew XX',
		'hotPink XX',
		'indianRed  XX',
		'indigo  XX',
		'ivory XX',
		'khaki XX',
		'lavender XX',
		'lavenderBlush XX',
		'lawnGreen XX',
		'lemonChiffon XX',
		'lightBlue XX',
		'lightCoral XX',
		'lightCyan XX',
		'lightGoldenRodYellow XX',
		'lightGray XX',
		'lightGrey XX',
		'lightGreen XX',
		'lightPink XX',
		'lightSalmon XX',
		'lightSeaGreen XX',
		'lightSkyBlue XX',
		'lightSlateGray XX',
		'lightSlateGrey XX',
		'lightSteelBlue XX',
		'lightYellow XX',
		'lime XX',
		'limeGreen XX',
		'linen XX',
		'magenta XX',
		'maroon XX',
		'mediumAquaMarine XX',
		'mediumBlue XX',
		'mediumOrchid XX',
		'mediumPurple XX',
		'mediumSeaGreen XX',
		'mediumSlateBlue XX',
		'mediumSpringGreen XX',
		'mediumTurquoise XX',
		'mediumVioletRed XX',
		'midnightBlue XX',
		'mintCream XX',
		'mistyRose XX',
		'moccasin XX',
		'navajoWhite XX',
		'navy XX',
		'oldLace XX',
		'olive XX',
		'oliveDrab XX',
		'orange XX',
		'orangeRed XX',
		'orchid XX',
		'paleGoldenRod XX',
		'paleGreen XX',
		'paleTurquoise XX',
		'paleVioletRed XX',
		'papayaWhip XX',
		'peachPuff XX',
		'peru XX',
		'pink XX',
		'plum XX',
		'powderBlue XX',
		'purple XX',
		'rebeccaPurple XX',
		'red XX',
		'rosyBrown XX',
		'royalBlue XX',
		'saddleBrown XX',
		'salmon XX',
		'sandyBrown XX',
		'seaGreen XX',
		'seaShell XX',
		'sienna XX',
		'silver XX',
		'skyBlue XX',
		'slateBlue XX',
		'slateGray XX',
		'slateGrey XX',
		'snow XX',
		'springGreen XX',
		'steelBlue XX',
		'tan XX',
		'teal XX',
		'thistle XX',
		'tomato XX',
		'turquoise XX',
		'violet XX',
		'wheat XX',
		'white XX',
		'whiteSmoke XX',
		'yellow XX',
		'yellowGreen XX',
	];
	let validHexColorExpressions = [ /* https://www.w3schools.com/cssref/css_colors_legal.asp */
		/* Hexadecimal Colors */
		'#ff0000',   /* red */
		'#00ff00',   /* green */
		'#0000ff',   /* blue */

		'#f00',   /* red */
		'#0f0',   /* green */
		'#00f',   /* blue */
	];
	let invalidHexColorExpressions = [ /* https://www.w3schools.com/cssref/css_colors_legal.asp */
		/* Hexadecimal Colors */
		'123456',   /* must start with a “#” symbol */
		'#afafah',  /* h” is not allow, valid letter from “a” to “f” */
		'#123abce', /* either 6 length or 3 length */
		'aFaE3f',   /* must start with a “#” symbol, either 6 length or 3 length */
		'F00',      /*must start with a “#” symbol */
		'#afaf',    /*either 6 length or 3 length */
		'#F0h',     /* “h” is not allow, valid letter from “a” to “f” */
	];
	let validRgbColorExpressions = [ /* https://www.w3schools.com/cssref/css_colors_legal.asp */
		/* RGB Colors */
		'rgb(255, 0, 0)',   /* red */
		'rgb(0, 255, 0)',   /* green */
		'rgb(0, 0, 255)',   /* blue */
	];
	let invalidRgbColorExpressions = [ /* https://www.w3schools.com/cssref/css_colors_legal.asp */
		/* RGB Colors */
		'rgb(255, 0, 0, 0.3)',  /* only 3 numbers allowed */
		'rgb(0, 255, 700)',     /* numbers must be <256 */
		'rgb(0, 0, #AAA)',      /* only numerals allowed */
	];
	let validRgbaColorExpressions = [ /* https://www.w3schools.com/cssref/css_colors_legal.asp */
		/* RGBA Colors */
		'rgba(255, 0, 0, 0.3)',   /* red with opacity */
		'rgba(0, 255, 0, 0.6)',   /* green with opacity */
		'rgba(0, 0, 255, 0.9)',   /* blue with opacity */
	];
	let invalidRgbaColorExpressions = [ /* https://www.w3schools.com/cssref/css_colors_legal.asp */
		/* RGBA Colors */
		'rgba(255, 0, 0, 3)',   /* red with opacity */
		'rgba(0, 255, 0)',   /* green with opacity */
		'rgba(0, 0, 255, 1.5)',   /* blue with opacity */
	];
	let validHslColorExpressions = [ /* https://www.w3schools.com/cssref/css_colors_legal.asp */
		/* HSL Colors */
		'hsl(120, 100%, 50%)',   /* green */
		'hsl(120, 100%, 75%)',   /* light green */
		'hsl(120, 100%, 70%)',   /* dark green */
		'hsl(120,  60%, 70%)',   /* pastel green */

		/* HSLA Colors */
		// 'hsla(120, 100%, 50%, 0.2)',   /* green with opacity */
		// 'hsla(120, 100%, 75%, 0.4)',   /* light green with opacity */
		// 'hsla(120, 100%, 70%, 0.6)',   /* dark green with opacity*/
		// 'hsla(120,  60%, 70%, 0.8)',   /* pastel green with opacity  */
	];
	let invalidHslColorExpressions = [ /* https://www.w3schools.com/cssref/css_colors_legal.asp */
		/* HSLA Colors */
		'hsl(120, 100%, 50%, 0.2)',   /* green with opacity */
		'hsla(120, 100%, 75%, 40)',   /* light green with opacity */
		'hsl(120, 100%, 70%, 0.6)',   /* dark green with opacity*/
		'hslv(120,  60%, 70%, 2)',   /* pastel green with opacity  */
	];
	let validHslaColorExpressions = [ /* https://www.w3schools.com/cssref/css_colors_legal.asp */
		/* HSLA Colors */
		'hsla(120, 100%, 50%, 0.1)',   /* green with opacity */
		'hsla(120, 100%, 75%, 0.4)',   /* light green with opacity */
		'hsla(120, 100%, 70%, 0.6)',   /* dark green with opacity*/
		'hsla(120,  60%, 70%, 1)',   /* pastel green with opacity  */
	];
	let invalidHslaColorExpressions = [ /* https://www.w3schools.com/cssref/css_colors_legal.asp */
		/* HSLA Colors */
		'hsl(120, 100%, 50%, 0.2)',   /* green with opacity */
		'hsla(120, 100%, 75%, 40)',   /* light green with opacity */
		'hsla(120, 100, 70%, 0.6)',   /* dark green with opacity*/
		'hslv(120,  60%, 70%, 2)',   /* pastel green with opacity  */
	];

	beforeEach(() => {
		cssColorString = new CssColorString();
	});
	it(`has a valid object`, () => {
		expect(cssColorString).toBeTruthy;
	});
	describe(`color names`, () => {
		it(`validates valid color names`, () => {
			for (let validColorName of validColorNames) {
				// console.log(`::isValidColorName: ` + validColorName);
				expect(cssColorString.isValidColorName(validColorName)).toEqual(true);
			}
		});

		it(`validates invalid color names`, () => {
			for (let validColorName of invalidColorNames) {
				// console.log(`::isValidColorName: ` + validColorName);
				expect(cssColorString.isValidColorName(validColorName)).toEqual(false);
			}
		});
	});
	describe(`color expressions`, () => {
		describe(`hexadecimal`, () => {

			it(`validates valid Hexadecimal Color expressions`, () => {
				for (let coloExpression of validHexColorExpressions) {
					// console.log(`::validHexColorExpressions: ` + coloExpression);
					if (cssColorString.isValidColorExpressionHex(coloExpression) === false) {
						// console.log(`::validHexColorExpressions will fail: ` + coloExpression);
					}
					expect(cssColorString.isValidColorExpressionHex(coloExpression)).toEqual(true);
				}
			});

			it(`validates invalid Hexadecimal Color expressions`, () => {
				for (let coloExpression of invalidHexColorExpressions) {
					// console.log(`::invalidHexColorExpressions: ` + coloExpression);
					if (cssColorString.isValidColorExpressionHex(coloExpression) === true) {
						// console.log(`::validHexColorExpressions will fail: ` + coloExpression);
					}
					expect(cssColorString.isValidColorExpressionHex(coloExpression)).toEqual(false);
				}
			});
		});
		describe(`rgb`, () => {

			it(`validates valid RGB Color expressions`, () => {
				for (let coloExpression of validRgbColorExpressions) {
					// console.log(`::validRgbColorExpressions: ` + coloExpression);
					if (cssColorString.isValidRgbColorExpression(coloExpression) === false) {
						// console.log(`::validRgbColorExpressions will fail: ` + coloExpression);
					}
					expect(cssColorString.isValidRgbColorExpression(coloExpression)).toEqual(true);
				}
			});

			it(`validates invalid RGB Color expressions`, () => {
				for (let coloExpression of invalidRgbColorExpressions) {
					// console.log(`::invalidRgbColorExpressions: ` + coloExpression);
					if (cssColorString.isValidRgbColorExpression(coloExpression) === true) {
						// console.log(`::invalidRgbColorExpressions will fail: ` + coloExpression);
					}
					expect(cssColorString.isValidRgbColorExpression(coloExpression)).toEqual(false);
				}
			});
		});
		describe(`rgba`, () => {

			it(`validates valid RGBA Color expressions`, () => {
				for (let coloExpression of validRgbaColorExpressions) {
					// console.log(`::validRgbaColorExpressions: ` + coloExpression);
					if (cssColorString.isValidRgbaColorExpression(coloExpression) === false) {
						// console.log(`::validRgbaColorExpressions will fail: ` + coloExpression);
					}
					expect(cssColorString.isValidRgbaColorExpression(coloExpression)).toEqual(true);
				}
			});

			it(`validates invalid RGBA Color expressions`, () => {
				for (let coloExpression of invalidRgbaColorExpressions) {
					// console.log(`::invalidRgbColorExpressions: ` + coloExpression);
					if (cssColorString.isValidRgbaColorExpression(coloExpression) === true) {
						// console.log(`::validRgbaColorExpressions will fail: ` + coloExpression);
					}
					expect(cssColorString.isValidRgbaColorExpression(coloExpression)).toEqual(false);
				}
			});
		});
		describe(`hsl`, () => {

			it(`validates valid HSL Color expressions`, () => {
				for (let coloExpression of validHslColorExpressions) {
					// console.log(`::validHslColorExpressions: ` + coloExpression);
					if (cssColorString.isValidHslColorExpression(coloExpression) === false) {
						// console.log(`::validHslColorExpressions will fail: ` + coloExpression);
					}
					expect(cssColorString.isValidHslColorExpression(coloExpression)).toEqual(true);
				}
			});

			it(`validates invalid HSL Color expressions`, () => {
				for (let coloExpression of invalidHslColorExpressions) {
					// console.log(`::invalidHslColorExpressions: ` + coloExpression);
					if (cssColorString.isValidHslColorExpression(coloExpression) === true) {
						// console.log(`::invalidHslColorExpressions will fail: ` + coloExpression);
					}
					expect(cssColorString.isValidHslColorExpression(coloExpression)).toEqual(false);
				}
			});
		});
		describe(`hsla`, () => {

			it(`validates valid HSLA Color expressions`, () => {
				for (let coloExpression of validHslaColorExpressions) {
					// console.log(`::validHslaColorExpressions: ` + coloExpression);
					if (cssColorString.isValidHslaColorExpression(coloExpression) === false) {
						// console.log(`::validHslaColorExpressions will fail: ` + coloExpression);
					}
					expect(cssColorString.isValidHslaColorExpression(coloExpression)).toEqual(true);
				}
			});

			it(`validates invalid HSLA Color expressions`, () => {
				for (let coloExpression of invalidHslaColorExpressions) {
					// console.log(`::invalidHslaColorExpressions: ` + coloExpression);
					if (cssColorString.isValidHslaColorExpression(coloExpression) === true) {
						// console.log(`::invalidHslaColorExpressions will fail: ` + coloExpression);
					}
					expect(cssColorString.isValidHslaColorExpression(coloExpression)).toEqual(false);
				}
			});
		});
	});
	describe(`combined`, () => {
		beforeEach(() => {
			allValid = validColorNames.slice(0);
			allValid = allValid.concat(validHexColorExpressions);
			allValid = allValid.concat(validRgbColorExpressions);
			allValid = allValid.concat(validRgbaColorExpressions);
			allValid = allValid.concat(validHslColorExpressions);
			allValid = allValid.concat(validHslaColorExpressions);

			allInvalid = invalidColorNames.slice(0);
			allInvalid = allInvalid.concat(invalidHexColorExpressions);
			allInvalid = allInvalid.concat(invalidRgbColorExpressions);
			allInvalid = allInvalid.concat(invalidHslColorExpressions);
			allInvalid = allInvalid.concat(invalidHslaColorExpressions);
		});

		it(`validates valid all Color`, () => {
			for (let coloString of allValid) {
				// console.log(`::allValid: ` + coloString);
				if (cssColorString.isValid(coloString) === false) {
					// console.log(`::allValid will fail: ` + coloString);
				}
				expect(cssColorString.isValid(coloString)).toEqual(true);
			}
		});

		it(`validates invalid Hexadecimal Color expressions`, () => {
			for (let coloString of allInvalid) {
				// console.log(`::allInvalid: ` + coloString);
				if (cssColorString.isValid(coloString) === true) {
					// console.log(`::allInvalid will fail: ` + coloString);
				}
				expect(cssColorString.isValid(coloString)).toEqual(false);
			}
		});
	});

});
