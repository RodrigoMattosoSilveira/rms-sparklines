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

import '@webcomponents/webcomponentsjs/webcomponents-lite';
import { BarChart } from "../src/bar-chart";
import { Bar } from "../src/bar";
import { ChartTypeEnum } from "../src/chart-type-enum";
import {Bar3d} from "../src/bar-3d";
import {Coordinates3DEnum} from "../src/coordinates-3D-enum";

// Warn if overriding existing method
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

describe(`bar-chart`, () => {
    let canvasEl;
    let canvasHeight = 16;
    let canvasWidth = 64;
    let barChart = null;
    let barGap;
    let chartType;
    let barHeights;
    let minimumBarWidth;
    let fillColorMinus;
    let fillColorZero;
    let fillColorPlus;
    let barWidth;
    let  bars = null;
	let bar_3d = null;

    before(() => {
        canvasEl = document.createElement('canvas');
        canvasEl.width = canvasWidth;
        canvasEl.height = canvasHeight;
        canvasEl.style.display = 'inline-block';
        canvasEl.style.verticalAlign = 'top';
        barGap = 2;
        chartType = 'positive';
        barHeights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        minimumBarWidth = 3;
        fillColorMinus = 'rgb(255,0,0)';
        fillColorZero = 'rgb(0,255,0)';
        fillColorPlus = 'rgb(0,0,255)';
        barChart = new BarChart(canvasEl, chartType, barHeights, minimumBarWidth, barGap, fillColorMinus, fillColorZero, fillColorPlus);
    });
    describe(`is initialized`, () => {

        it(`with a valid barChart object`, () => {
            expect(barChart).to.not.equal(null);
        });
        it(`the canvas element is initialized `, () => {
            expect(barChart.getCanvasEl().tagName).to.equal(canvasEl.tagName);
        });
	    it(`with a canvas width equal to canvasWidth`, () => {
		    expect(barChart.getCanvasWidth()).to.equal(canvasWidth);
	    });
	    it(`with a canvas height equal to canvasHeight`, () => {
		    expect(barChart.getCanvasHeight()).to.equal(canvasHeight);
	    });
	    it(`with a bar gap attribute that has the value of barGap (2)`, () => {
            expect(barChart.getBarGap()).to.equal(barGap);
        });
        it(`with a bar heights attribute that has the value of barHeights [1, 2, ... , 12]`, () => {
            expect(barChart.getBarHeights().equals(barHeights)).to.equal(true);
        });
        it(`with a chart type attribute that has the value of chartType ('positive')`, () => {
            expect(barChart.getChartType()).to.equal(chartType);
        });
        it(`with a minimum bar width attribute that has the value of minimumBarWidth (3)`, () => {
            expect(barChart.getMinimumBarWidth()).to.equal(minimumBarWidth);
        });
        it(`with a fill color for negative bars that has the value of fillColorMinus ('rgb(255,0,0)')`, () => {
            expect(barChart.getFillColorMinus()).to.equal(fillColorMinus);
        });
        it(`with a fill color for zero bars that has the value of fillColorZero ('rgb(0,255,0)')`, () => {
            expect(barChart.getFillColorZero()).to.equal(fillColorZero);
        });
        it(`with a fill color for positive bars that has the value of fillColorPlus ('rgb(0,0,255)')`, () => {
            expect(barChart.getFillColorPlus()).to.equal(fillColorPlus);
        });
    });
    describe(`when I compute the barWith`, () => {
        describe(`when I compute the bar width `, () => {
            describe(`with enough canvas width and barWidth`, () => {
                it(`the  barHeights is unchanged`, () => {
                     expect(barChart.getBarHeights().equals(barHeights)).to.equal(true);
                });
                it(`the barWidth is 5`, () => {
                    let expectedBarWidth = 5
                    expect(barChart.computeBarWidth(canvasEl.width, barHeights)).to.equal(expectedBarWidth);
                });
            });
            describe(`without enough canvas width and barWidth`, () => {
                it(`the barHeights is changed`, () => {
                    let _barHeights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                    let _expectedBarHeights = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                    let __barHeights = barChart.calculateBarWidth(canvasEl.width, _barHeights, minimumBarWidth);

                    expect(_barHeights.equals(__barHeights)).to.equal(false);
                    expect(__barHeights.equals(_expectedBarHeights)).to.equal(true);
                });
                it(`the barWidth is 3`, () => {
                    let _barHeights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                    let __barHeights = barChart.calculateBarWidth(canvasEl.width, _barHeights, minimumBarWidth);
                    let expectedBarWidth = 3;
                    expect(barChart.computeBarWidth(canvasEl.width, __barHeights)).to.equal(expectedBarWidth);
                });
            });
        });
    });
   describe(`when I attempt to insert gaps`, () => {
         describe(`with the bar width large enough to be decremented and be greater of equal to the minimum bar width`, () => {
             before(() => {
                 barHeights = [1, 2, 3, 4, 5, 6, 7, 8];
                 barChart.setBarHeights(barHeights);
                 barWidth = 8;
             });
             it(`the barHeights is unchanged`, () => {
                barChart.insertGapsUsingBarWidth(canvasEl.width, barHeights, barGap, minimumBarWidth);
                expect(barChart.getBarHeights().equals(barHeights)).to.equal(true);
            });
            it(`the barWidth is reduced by 2, now it is 6`, () => {
                let expectedBarWidth = 6;
                let _barWidth = barChart.insertGapsUsingBarWidth(canvasEl.width, barHeights, barGap, minimumBarWidth);
                expect(_barWidth).to.equal(expectedBarWidth)
            });
        });
        describe(`with the bar width not big enough to be decremented and be greater of equal to the minimum bar width`, () => {
            describe(`I start by attempting to inject the gaps by decrementing the barWidth`, () => {
                before(() => {
                    barHeights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                    barChart.setBarHeights(barHeights);
                });
                it(`the barHeights is unchanged`, () => {
                    barChart.insertGapsUsingBarWidth(canvasEl.width, barHeights, barGap, minimumBarWidth);
                    expect(barChart.getBarHeights().equals(barHeights)).to.equal(true);
                });
                it(`the barWidth is reduced to the minimum bar width`, () => {
                    let expectedBarWidth = 3;
                    let _barWidth = barChart.insertGapsUsingBarWidth(canvasEl.width, barHeights, barGap, minimumBarWidth);
                    expect(_barWidth).to.equal(expectedBarWidth)
                });
                it(`and barHeight pruned to 13 elements to make room for the gaps`, () => {
                    let _barWidth = 3;
                    let expectedBarHeightLength = 13;
                    let _exprectedBarHeights = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                    let _barHeight = barChart.insertGapsUsingBarHeights(canvasEl.width, barHeights, _barWidth, barGap);
                    expect(_barHeight.length).to.equal(expectedBarHeightLength);
                    expect(_barHeight.equals(_exprectedBarHeights)).to.equal(true);
                });
            });
        });
    });
    describe(`when I attempt to builds the bars array`, () => {
         describe(`for a positive chart type`, () => {
	         before(() => {
		         canvasHeight = canvasEl.height;
		         barHeights = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
		         barWidth = 3;
		         chartType = 'positive';
		         bars = barChart.buildBars(canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus);
	         });
	         // canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus
            it(`it builds an array of bars, 13 elements long`, () => {
                let expectedBarsLength = 13;
                expect(bars.length).to.equal(expectedBarsLength);
            });
            it(`with properly formatted bars`, () => {
                for (let i = 0; i < bars.length;  i++) {
                    const bar = bars[i];
                    expect(bar.getX()).to.equal(0);
                    expect(bars[i].getY()).to.equal(0);
                    expect(bars[i].getWidth()).to.equal(barWidth);
                    expect(bars[i].getHeight()).to.equal(barHeights[i]);
                    expect(bars[i].getFillColor()).to.equal(fillColorPlus);
                }
            });
        });
	    describe(`for a negative chart type`, () => {
		    before(() => {
			    barHeights = [-12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24];
			    chartType = 'negative';
			    bars = barChart.buildBars(canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus);
		    });
		    // canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus
		    it(`it builds an array of bars, 13 elements long`, () => {
			    let expectedBarsLength = 13;
			    expect(bars.length).to.equal(expectedBarsLength);
		    });
		    it(`with properly formatted bars`, () => {
			    for (let i = 0; i < bars.length;  i++) {
				    const bar = bars[i];
				    expect(bar.getX()).to.equal(0);
				    expect(bars[i].getY()).to.equal(0);
				    expect(bars[i].getWidth()).to.equal(barWidth);
				    expect(bars[i].getHeight()).to.equal(barHeights[i]);
				    expect(bars[i].getFillColor()).to.equal(fillColorMinus);
			    }
		    });
	    });
	    describe(`for a dual chart type`, () => {
		    before(() => {
			    barHeights = [-12, 13, -14, -15, 16, 17, -18, 19, 20, -21, -22, 23, -24];
			    chartType = 'dual';
			    bars = barChart.buildBars(canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus);
		    });
		    // canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus
		    it(`it builds an array of bars, 13 elements long`, () => {
			    let expectedBarsLength = 13;
			    expect(bars.length).to.equal(expectedBarsLength);
		    });
		    it(`with properly formatted bars`, () => {
			    for (let i = 0; i < bars.length;  i++) {
				    const bar = bars[i];
				    expect(bar.getX()).to.equal(0);
				    expect(bars[i].getY()).to.equal(0);
				    expect(bars[i].getWidth()).to.equal(barWidth);
				    expect(bars[i].getHeight()).to.equal(barHeights[i]);
				    if (barHeights[i] < 0) {
					    expect(bars[i].getFillColor()).to.equal(fillColorMinus);
				    }
				    else {
					    expect(bars[i].getFillColor()).to.equal(fillColorPlus);
				    }
			    }
		    });
	    });
	    describe(`for a tri chart type`, () => {
		    before(() => {
			    barHeights = [-12, 0, -14, 0, 16, 17, 0, 19, 20, -21, 0, 0, -24];
			    chartType = 'tri';
			    bars = barChart.buildBars(canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus);
		    });
		    // canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus
		    it(`it builds an array of bars, 13 elements long`, () => {
			    let expectedBarsLength = 13;
			    expect(bars.length).to.equal(expectedBarsLength);
		    });
		    it(`with properly formatted bars`, () => {
			    for (let i = 0; i < bars.length;  i++) {
				    const bar = bars[i];
				    expect(bar.getX()).to.equal(0);
				    if (barHeights[i] === 0) {
					    expect(bars[i].getY()).to.equal(-bar.getHeight()/2);
				    }
				    else {
					    expect(bars[i].getY()).to.equal(0);
				    }
				    // expect(bars[i].getY()).to.equal(0);
				    expect(bars[i].getWidth()).to.equal(barWidth);
				    //expect(bars[i].getHeight()).to.equal(barHeights[i]);
				    console.log(`::with properly formatted bars - barHeight: ` + bar.getHeight() + `   canvasHeight: ` + barChart.getCanvasHeight());
				    if (barHeights[i] < 0) {
					    expect(bar.getHeight()).to.equal(-barChart.getCanvasHeight() / 2);
				    }
				    else {
					    if (barHeights[i] === 0) {
						    expect(bar.getHeight()).to.equal(barChart.getCanvasHeight() / 4);
					    }
					    else {
						    expect(bar.getHeight()).to.equal(barChart.getCanvasHeight() / 2);
					    }
				    }

				    if (barHeights[i] < 0) {
					    expect(bars[i].getFillColor()).to.equal(fillColorMinus);
				    }
				    else {
					    if (barHeights[i] === 0) {
						    expect(bars[i].getFillColor()).to.equal(fillColorZero);
					    }
					    else {
						    expect(bars[i].getFillColor()).to.equal(fillColorPlus);
					    }
				    }
			    }
		    });
	    });
	    describe(`build world coordinate bar`, () => {
		    describe(`for chart type POSITIVE`, () => {
		    	let bar;
		    	before(() => {
				    barGap = 2;
				    barHeights = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
				    barWidth = 4;
				    chartType = ChartTypeEnum.POSITIVE;
				    fillColorMinus = 'red';
					fillColorPlus = 'blue';
					fillColorZero = 'green';
				    bar_3d = barChart.buildWorldCoordateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
		        });

			    it(`with a valid  bar_3d object`, () => {
				    expect(bar_3d).to.not.equal(null);
			    });
			    describe(`with a valid first bar`, () => {
				    before(() => {
					    bar = bar_3d[0]
				    });
				    describe(`lower left`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.X]).to.equal(0);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Y]).to.equal(0);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(` upper right`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.X]).to.equal(4);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Y]).to.equal(12);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`color`, () => {
					    it(`is fillColorPlus`, () => {
						    expect(bar.fillColor).to.equal(fillColorPlus);
					    });
				    });
			    });
			    describe(`with a valid last bar `, () => {
				    before(() => {
					    bar = bar_3d[12]
				    });
				    describe(`lower left`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.X]).to.equal(72);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Y]).to.equal(0);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`upper right`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.X]).to.equal(76);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Y]).to.equal(24);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`color`, () => {
					    it(`is fillColorPlus`, () => {
						    expect(bar.fillColor).to.equal(fillColorPlus);
					    });
				    });
			    });
		    });
		    describe(`for chart type NEGATIVE`, () => {
			    let bar;
			    before(() => {
				    barGap = 2;
				    barHeights = [-12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24];
				    barWidth = 4;
				    chartType = ChartTypeEnum.NEGATIVE;
				    fillColorMinus = 'red';
				    fillColorPlus = 'blue';
				    fillColorZero = 'green';
				    bar_3d = barChart.buildWorldCoordateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
			    });

			    it(`with a valid  bar_3d object`, () => {
				    expect(bar_3d).to.not.equal(null);
			    });
			    describe(`with a valid first bar`, () => {
				    before(() => {
					    bar = bar_3d[0]
				    });
				    describe(`lower left`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.X]).to.equal(0);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Y]).to.equal(0);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`upper right`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.X]).to.equal(4);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Y]).to.equal(-12);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`color`, () => {
					    it(`is fillColorMinus`, () => {
						    expect(bar.fillColor).to.equal(fillColorMinus);
					    });
				    });

			    });
			    describe(`with a valid last bar `, () => {
				    before(() => {
					    bar = bar_3d[12]
				    });
				    describe(`lower left`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.X]).to.equal(72);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Y]).to.equal(0);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(` upper right`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.X]).to.equal(76);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Y]).to.equal(-24);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`color`, () => {
					    it(`is fillColorMinus`, () => {
						    expect(bar.fillColor).to.equal(fillColorMinus);
					    });
				    });
			    });
		    });
		    describe(`for chart type DUAL`, () => {
			    let bar;
			    before(() => {
				    barGap = 2;
				    barHeights = [12, 0, -14, 0, 16, 17, 0, 19, 20, -21, 0, 0, -24];
				    barWidth = 4;
				    chartType = ChartTypeEnum.DUAL;
				    fillColorMinus = 'red';
				    fillColorPlus = 'blue';
				    fillColorZero = 'green';
				    bar_3d = barChart.buildWorldCoordateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
			    });
			    it(`with a valid  bar_3d object`, () => {
				    expect(bar_3d).to.not.equal(null);
			    });
			    describe(`with a valid first bar`, () => {
				    before(() => {
					    bar = bar_3d[0]
				    });
				    describe(`lower left`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.X]).to.equal(0);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Y]).to.equal(0);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`upper right`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.X]).to.equal(4);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Y]).to.equal(12);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`color`, () => {
					    it(`is fillColorPlus`, () => {
						    expect(bar.fillColor).to.equal(fillColorPlus);
					    });
				    });
			    });
			    describe(`with a valid last bar`, () => {
				    before(() => {
					    bar = bar_3d[12]
				    });
				    describe(`lower left`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.X]).to.equal(72);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Y]).to.equal(0);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`upper right`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.X]).to.equal(76);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Y]).to.equal(-24);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`color`, () => {
					    it(`is fillColorMinus`, () => {
						    expect(bar.fillColor).to.equal(fillColorMinus);
					    });
				    });
			    });
		    });
		    describe(`for chart type TRI`, () => {
			    let bar;
			    before(() => {
				    barGap = 2;
				    barHeights = [12, 0, -14, 0, 16, 17, 0, 19, 20, -21, 0, 0, -24];
				    barWidth = 4;
				    chartType = ChartTypeEnum.TRI;
				    fillColorMinus = 'red';
				    fillColorPlus = 'blue';
				    fillColorZero = 'green';
				    bar_3d = barChart.buildWorldCoordateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
			    });
			    it(`with a valid  bar_3d object`, () => {
				    expect(bar_3d).to.not.equal(null);
			    });
			    describe(`with a valid first bar`, () => {
				    before(() => {
					    bar = bar_3d[0]
				    });
				    describe(`lower left`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.X]).to.equal(0);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Y]).to.equal(0);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`upper right`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.X]).to.equal(4);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Y]).to.equal(2);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`color`, () => {
					    it(`is fillColorPlus`, () => {
						    expect(bar.fillColor).to.equal(fillColorPlus);
					    });
				    });
			    });
			    describe(`with a valid second bar`, () => {
				    before(() => {
					    bar = bar_3d[1]
				    });
				    describe(`lower left`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.X]).to.equal(6);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Y]).to.equal(-1/2);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`upper right`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.X]).to.equal(10);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Y]).to.equal(1/2);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`color`, () => {
					    it(`is fillColorZero`, () => {
						    expect(bar.fillColor).to.equal(fillColorZero);
					    });
				    });
			    });
			    describe(`with a valid last bar`, () => {
				    before(() => {
					    bar = bar_3d[12]
				    });
				    describe(`lower left`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.X]).to.equal(72);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Y]).to.equal(0);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.lowerLeft[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`upper right`, () => {
					    it(`x coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.X]).to.equal(76);
					    });
					    it(`y coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Y]).to.equal(-2);
					    });
					    it(`z coordinate`, () => {
						    expect(bar.upperRight[Coordinates3DEnum.Z]).to.equal(1);
					    });
				    });
				    describe(`color`, () => {
					    it(`is fillColorMinus`, () => {
						    expect(bar.fillColor).to.equal(fillColorMinus);
					    });
				    });
			    });
		    });

	    });
    });
});
