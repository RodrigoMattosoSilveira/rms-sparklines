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
        it(`has the canvas element it was initialized `, () => {
            expect(barChart.getCanvasEl().tagName).to.equal(canvasEl.tagName);
        });
        it(`has the barGap value it was initialized with`, () => {
            expect(barChart.getBarGap()).to.equal(barGap);
        });
        it(`has the barHeights element it was initialized with`, () => {
            expect(barChart.getBarHeights().equals(barHeights)).to.equal(true);
        });
        it(`has the chartType element it was initialized with`, () => {
            expect(barChart.getChartType()).to.equal(chartType);
        });
        it(`has the minimumBarWidth element it was initialized `, () => {
            expect(barChart.getMinimumBarWidth()).to.equal(minimumBarWidth);
        });
        it(`has the fillColorMinus element it was initialized with`, () => {
            expect(barChart.getFillColorMinus()).to.equal(fillColorMinus);
        });
        it(`has the fillColorPlus element it was initialized with`, () => {
            expect(barChart.getFillColorZero()).to.equal(fillColorZero);
        });
        it(`has the fillColorZero element it was initialized with`, () => {
            expect(barChart.getFillColorPlus()).to.equal(fillColorPlus);
        });
    });
});
