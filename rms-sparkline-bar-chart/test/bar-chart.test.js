/*
 * Copyright © Markodojo Inc., 2013 - ${YEAR}
 * All Rights Reserved. No part of this website may be reproduced without Markodojo express consent.
 */

import '@webcomponents/webcomponentsjs/webcomponents-lite';
import { BarChart } from "../src/bar-chart";

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
    let barChart = null;
    let barGap;
    let chartType;
    let barHeights;
    let minimumBarWidth;
    let fillColorMinus;
    let fillColorZero;
    let fillColorPlus;

    before(() => {
        canvasEl = document.createElement('canvas');
        canvasEl.width = 64;
        canvasEl.height = 16;
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
        it(`with enough canvas width`, () => {
            expect(barChart.calculateBarWidth(canvasEl.width, barHeights, minimumBarWidth).length).to.equal(12);
            expect(barChart.getBarHeights().equals(barHeights)).to.equal(true);
            expect(barChart.computeBarWidth(canvasEl.width, barHeights)).to.equal(5);
        });

        it(`without enough canvas width`, () => {
            let _barHeights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
            let __barHeights = barChart.calculateBarWidth(canvasEl.width, _barHeights, minimumBarWidth);

            // drop the 3 leftmost elements
            expect(__barHeights.equals([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24])).to.equal(true);
            expect(__barHeights.length).to.equal(21);

            // Got the barWidth over the required bar
            expect(barChart.computeBarWidth(canvasEl.width, __barHeights)).to.equal(3);
        });
    });
    describe(`when I compute the bar width `, () => {
        before(() => {
            barHeights = [1, 2, 3, 4, 5, 6, 7, 8];
            barChart.setBarHeights(barHeights.slice(0))
        });
        describe(`with enough canvas width and barWidth`, () => {
            it(`with enough canvas width and barWidth`, () => {
                // get the barWidth; there is enough canvas width for a barWidth equal to 8
                let expectedBarWidth = 8;
                let _barHeights = barChart.calculateBarWidth(canvasEl.width, barHeights, minimumBarWidth);
                expect(barChart.getBarHeights().equals(barHeights)).to.equal(true);
                expect(barChart.computeBarWidth(canvasEl.width, barHeights)).to.equal(expectedBarWidth);

                // Insert the bar gaps. There isn't enough canvas width to insert them, the can be inserted with a narrower barWidth
                let barWidth = 8;
                expectedBarWidth = 6;
                expect(barChart.insertGapsUsingBarWidth(canvasEl.width, _barHeights, barWidth, barGap, minimumBarWidth)).to.equal(expectedBarWidth);
                expect(barChart.getBarHeights().equals(_barHeights)).to.equal(true);
            });
            it(`with enough canvas width and barWidth`, () => {
                // get the barWidth; there is enough canvas width for a barWidth equal to 8
                let expectedBarWidth = 8;
                let _barHeights = barChart.calculateBarWidth(canvasEl.width, barHeights, minimumBarWidth);
                expect(barChart.getBarHeights().equals(barHeights)).to.equal(true);
                expect(barChart.computeBarWidth(canvasEl.width, barHeights)).to.equal(expectedBarWidth);

                // Insert the bar gaps. There isn't enough canvas width to insert them, the can be inserted with a narrower barWidth
                let barWidth = 8;
                expectedBarWidth = 6;
                expect(barChart.insertGapsUsingBarWidth(canvasEl.width, _barHeights, barWidth, barGap, minimumBarWidth)).to.equal(expectedBarWidth);
                expect(barChart.getBarHeights().equals(_barHeights)).to.equal(true);
            });
        });
    });
});