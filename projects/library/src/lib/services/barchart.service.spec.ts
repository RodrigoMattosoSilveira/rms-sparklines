import { TestBed } from '@angular/core/testing';

import { BarchartService } from './barchart.service';
import './arrayExtensions'

// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

describe('BarchartService', () => {
   let canvasEl: HTMLCanvasElement;
   let canvasHeight = 16;
   let canvasWidth = 64;
   let barChart: BarchartService = null;
   let barGap: number;
   let chartType: string;
   let barHeights: number[];
   let minimumBarWidth: number;
   let fillColorMinus: string;
   let fillColorZero: string;
   let fillColorPlus: string;
   let barWidth: number;
   let bars = null;
   let bar_3d = null;
   let sToCanvasHeightMatrix;
   let dMoveCanvasMatrix;
   let maxBarHeight;
   let canvasRatio;
   let ll;
   let ur;


   beforeEach(() => TestBed.configureTestingModule({}));


   beforeEach (() => {
      barChart = TestBed.get(BarchartService);

      canvasEl = document.createElement('canvas');
      canvasEl.width = canvasWidth;
      canvasEl.height = canvasHeight;
      canvasEl.style.display = 'inline-block';
      canvasEl.style.verticalAlign = 'top';

      barGap = 2;
      barChart.barGap = barGap;

      chartType = 'positive';
      barChart.chartType = chartType;

      barHeights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      barChart.barHeights = barHeights;

      minimumBarWidth = 3;
      barChart.minimumBarWidth = minimumBarWidth;

      fillColorMinus = 'rgb(255,0,0)';
      barChart.fillColorMinus = fillColorMinus;

      fillColorZero = 'rgb(0,255,0)';
      barChart.fillColorZero = fillColorZero;

      fillColorPlus = 'rgb(0,0,255)';
      barChart.fillColorPlus = fillColorPlus;
   })

   describe(`when I compute the barWith`, () => {
      it('should be created', () => {
         expect(barChart).toBeTruthy();
      });
      describe(`with enough canvas width and barWidth`, () => {
         it(`the  barHeights is unchanged`, () => {
            expect(barChart.barHeights.equals(barHeights));
         });
         it(`the barWidth is 5`, () => {
            let expectedBarWidth = 5
            expect(barChart.computeBarWidth(canvasEl.width, barHeights)).toEqual(expectedBarWidth);
         });
      });
      describe(`without enough canvas width and barWidth`, () => {
         it(`the barHeights is changed`, () => {
            let _barHeights: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
            let _expectedBarHeights: number[] = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
            let __barHeights: number[] = barChart.calculateBarWidth(canvasEl.width, _barHeights, minimumBarWidth);

            expect(_barHeights.equals(__barHeights)).toBeFalsy
            expect(__barHeights.equals(_expectedBarHeights)).toEqual(true);
         });
         it(`the barWidth is 3`, () => {
            let _barHeights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
            let __barHeights = barChart.calculateBarWidth(canvasEl.width, _barHeights, minimumBarWidth);
            let expectedBarWidth = 3;
            expect(barChart.computeBarWidth(canvasEl.width, __barHeights)).toEqual(expectedBarWidth);
         });
      });
   });
   describe(`when I attempt to insert gaps`, () => {
      describe(`with the bar width large enough to be decremented and be greater of equal to the minimum bar width`, () => {
         beforeEach(() => {
            barHeights = [1, 2, 3, 4, 5, 6, 7, 8];
            barChart.barHeights = barHeights.slice(0);
            barWidth = 8;
         });
         it(`the barHeights is unchanged`, () => {
            barChart.insertGapsUsingBarWidth(canvasEl.width, barHeights, barGap, minimumBarWidth);
            expect(barChart.barHeights.equals(barHeights)).toEqual(true);
         });
         it(`the barWidth is reduced by 2, now it is 6`, () => {
            let expectedBarWidth = 6;
            let _barWidth = barChart.insertGapsUsingBarWidth(canvasEl.width, barHeights, barGap, minimumBarWidth);
            expect(_barWidth).toEqual(expectedBarWidth)
         });
      });
      describe(`with the bar width not big enough to be decremented and be greater of equal to the minimum bar width`, () => {
         describe(`I start by attempting to inject the gaps by decrementing the barWidth`, () => {
            beforeEach(() => {
               barHeights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
               barChart.barHeights = barHeights.slice(0);
            });
            it(`the barHeights is unchanged`, () => {
               barChart.insertGapsUsingBarWidth(canvasEl.width, barHeights, barGap, minimumBarWidth);
               expect(barChart.barHeights.equals(barHeights)).toEqual(true);
            });
            it(`the barWidth is reduced to the minimum bar width`, () => {
               let expectedBarWidth = 3;
               let _barWidth = barChart.insertGapsUsingBarWidth(canvasEl.width, barHeights, barGap, minimumBarWidth);
            expect(_barWidth).toEqual(expectedBarWidth)
            });
            it(`and barHeight pruned to 13 elements to make room for the gaps`, () => {
               let _barWidth = 3;
               let expectedBarHeightLength = 13;
               let _exprectedBarHeights = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
               let _barHeight = barChart.insertGapsUsingBarHeights(canvasEl.width, barHeights, _barWidth, barGap);
               expect(_barHeight.length).toEqual(expectedBarHeightLength);
               expect(_barHeight.equals(_exprectedBarHeights)).toEqual(true);
            });
         });
      });
   });
});
