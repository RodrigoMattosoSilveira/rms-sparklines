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
    describe(`when I initialize it`, () => {
        before(() => {
            canvasEl = document.createElement('canvas');
            canvasEl.width = 64;
            canvasEl.height = 16;
            canvasEl.style.display = 'inline-block';
            canvasEl.style.verticalAlign = 'top';
            barGap = 2;
            chartType = 'positive';
            barHeights = [4, 3, 7, 8, 1, 4, 3, 2, 5, 3, 5, 8];
            minimumBarWidth = 3;
            fillColorMinus = 'rgb(255,0,0)';
            fillColorZero = 'rgb(0,255,0)';
            fillColorPlus = 'rgb(0,0,255)';
            barChart = new BarChart(canvasEl, chartType, barHeights, minimumBarWidth, barGap, fillColorMinus, fillColorZero, fillColorPlus);
        });

        it(`is defined`, () => {
            expect(barChart).to.not.equal(null);
        });
        it(`the canvas element is initialized `, () => {
            expect(barChart.getCanvasEl().tagName).to.equal(canvasEl.tagName);
        });
        it(`the barGap value is valid`, () => {
            expect(barChart.getBarGap()).to.equal(barGap);
        });
        it(`the barHeights value is valid`, () => {
            expect(barChart.getBarHeights().equals(barHeights)).to.equal(true);
        });
        it(`the chartType value is valid`, () => {
            expect(barChart.getChartType()).to.equal(chartType);
        });
        it(`the minimumBarWidth value is valid`, () => {
            expect(barChart.getMinimumBarWidth()).to.equal(minimumBarWidth);
        });
        it(`the fillColorMinus value is valid`, () => {
            expect(barChart.getFillColorMinus()).to.equal(fillColorMinus);
        });
        it(`the fillColorPlus value is valid`, () => {
            expect(barChart.getFillColorZero()).to.equal(fillColorZero);
        });
        it(`the fillColorZero value is valid`, () => {
            expect(barChart.getFillColorPlus()).to.equal(fillColorPlus);
        });
    });
    describe(`when I compute the barWith`, () => {
        before(() => {
            canvasEl = document.createElement('canvas');
            canvasEl.width = 64;
            canvasEl.height = 16;
            canvasEl.style.display = 'inline-block';
            canvasEl.style.verticalAlign = 'top';
            barGap = 2;
            chartType = 'positive';
            barHeights = [4, 3, 7, 8, 1, 4, 3, 2, 5, 3, 5, 8];
            minimumBarWidth = 3;
            fillColorMinus = 'rgb(255,0,0)';
            fillColorZero = 'rgb(0,255,0)';
            fillColorPlus = 'rgb(0,0,255)';
            barChart = new BarChart(canvasEl, chartType, barHeights, minimumBarWidth, barGap, fillColorMinus, fillColorZero, fillColorPlus);
        });

        it(`with enough canvas width`, () => {
            expect(barChart.calculateBarWidth(canvasEl.width, barHeights, minimumBarWidth).length).to.equal(12);
            expect(barChart.getBarHeights().equals(barHeights)).to.equal(true);
            expect(barChart.computeBarWidth(canvasEl.width, barHeights)).to.equal(5);
        });

        it(`without enough canvas width`, () => {
            let _barHeights = [4, 3, 7, 8, 1, 4, 3, 2, 5, 3, 5, 8, 4, 3, 7, 8, 1, 4, 3, 2, 5, 3, 5, 8];
            let __barHeights = barChart.calculateBarWidth(canvasEl.width, _barHeights, minimumBarWidth);

            // drop the 3 leftmost elements
            expect(__barHeights.equals([8, 1, 4, 3, 2, 5, 3, 5, 8, 4, 3, 7, 8, 1, 4, 3, 2, 5, 3, 5, 8])).to.equal(true);
            expect(__barHeights.length).to.equal(21);

            // Got the barWidth over the required bar
            expect(barChart.computeBarWidth(canvasEl.width, __barHeights)).to.equal(3);
        });
    });
});
