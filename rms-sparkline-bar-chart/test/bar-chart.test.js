/*
 * Copyright © Markodojo Inc., 2013 - ${YEAR}
 * All Rights Reserved. No part of this website may be reproduced without Markodojo express consent.
 */

import '@webcomponents/webcomponentsjs/webcomponents-lite';
import { BarChart } from "../src/bar-chart";

describe(`bar-chart`, () => {
    barChart = null;
    before(() => {
        let canvasEl = document.createElement('canvas');
        canvasEl.width = 64;
        canvasEl.height = 16;
        canvasEl.style.display = 'inline-block';
        canvasEl.style.verticalAlign = 'top';
        let barGap = 2;
        let chartType = 'positive';
        let barHeights = [4, 3, 7, 8, 1, 4, 3, 2, 5, 3, 5, 8];
        let minimumBarWidth = 3;
        let fillColorMinus = 'red';
        let fillColorZero = 'blue';
        let fillColorPlus = 'green';
        let barChart = new BarChart(canvasEl, chartType, barHeights, minimumBarWidth, barGap, fillColorMinus, fillColorZero, fillColorPlus);
    });
    describe(`when I initialize it`, () => {
        it(`has the canvas element it was initialized with`, () => {

        });
        it(`has the barGap value it was initialized with`, () => {

        });
        it(`has the barHeights element it was initialized with`, () => {

        });
        it(`has the chartType element it was initialized with`, () => {

        });
        it(`has the minimumBarWidth element it was initialized with`, () => {

        });
        it(`has the fillColorMinus element it was initialized with`, () => {

        });
        it(`has the fillColorPlus element it was initialized with`, () => {

        });
        it(`has the fillColorZero element it was initialized with`, () => {
        });
    });
});

