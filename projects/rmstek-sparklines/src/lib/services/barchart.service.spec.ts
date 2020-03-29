import { TestBed } from '@angular/core/testing';

import { BarchartService } from './barchart.service';
import './arrayExtensions';
import { ChartTypeEnum } from './chart-type-enum';
import { Coordinates3DEnum } from './coordinates-3D-enum';
import { TranformationMatrixEnum } from './traformation-matrix-enum';

// Hide method from for-in loops
Object.defineProperty(Array.prototype, 'equals', {enumerable: false});

describe('BarchartService', () => {
    let canvasEl: HTMLCanvasElement;
    let canvasHeight = 16;
    const canvasWidth = 64;
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
    let barThreeDee = null;
    let sToCanvasHeightMatrix: any;
    let dMoveCanvasMatrix: any;
    let maxBarHeight: any;
    let canvasRatio: any;
    // let ll: any;
    // let ur: any;

    beforeEach (() => {
        TestBed.configureTestingModule({
            providers: [BarchartService]
        });
        barChart = TestBed.get(BarchartService);

        canvasEl = document.createElement('canvas');
        canvasEl.width = canvasWidth;
        canvasEl.height = canvasHeight;
        canvasEl.style.display = 'inline-block';
        canvasEl.style.verticalAlign = 'top';

        barGap = 2;
        barChart.barGap = barGap;

        barChart.canvasHeight = canvasHeight;

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
    });
    describe(`when I compute the barWith`, () => {
        it('should be created', () => {
            expect(barChart).toBeTruthy();
        });
        describe(`with enough canvas width and barWidth`, () => {
            it(`the  barHeights is unchanged`, () => {
                expect(barChart.barHeights.equals(barHeights));
            });
            it(`the barWidth is 5`, () => {
                const expectedBarWidth = 5;
                expect(barChart.computeBarWidth(canvasEl.width, barHeights)).toEqual(expectedBarWidth);
            });
        });
        describe(`without enough canvas width and barWidth`, () => {
            it(`the barHeights is changed`, () => {
                const barHeightsBase: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                const barHeightsExpected: number[] = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                const barHeightsComputed: number[] = barChart.calculateBarWidth(canvasEl.width, barHeightsBase, minimumBarWidth);

                expect(barHeightsComputed.equals(barHeightsBase)).toBeFalsy();
                expect(barHeightsComputed.equals(barHeightsExpected)).toEqual(true);
            });
            it(`the barWidth is 3`, () => {
                const barHeightsBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                const barHeightsComputed = barChart.calculateBarWidth(canvasEl.width, barHeightsBase, minimumBarWidth);
                const expectedBarWidth = 3;
                expect(barChart.computeBarWidth(canvasEl.width, barHeightsComputed)).toEqual(expectedBarWidth);
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
                const barWidthExpected = 6;
                const barWidthComputed = barChart.insertGapsUsingBarWidth(canvasEl.width, barHeights, barGap, minimumBarWidth);
                expect(barWidthComputed).toEqual(barWidthExpected);
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
                    const barWidthExpected = 3;
                    const barWidthComputed = barChart.insertGapsUsingBarWidth(canvasEl.width, barHeights, barGap, minimumBarWidth);
                    expect(barWidthComputed).toEqual(barWidthExpected);
                });
                it(`and barHeight pruned to 13 elements to make room for the gaps`, () => {
                    const barWidthExpected = 3;
                    const barHeightLengthExpected = 13;
                    const barHeightsExpected = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                    const barHeightComputed = barChart.insertGapsUsingBarHeights(canvasEl.width, barHeights, barWidthExpected, barGap);
                    expect(barHeightComputed.length).toEqual(barHeightLengthExpected);
                    expect(barHeightComputed.equals(barHeightsExpected)).toEqual(true);
                });
            });
        });
    });
    describe(`when I attempt to builds the bars array`, () => {
        describe(`for a positive chart type`, () => {
            beforeEach(() => {
                canvasHeight = canvasEl.height;
                barHeights = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                barWidth = 3;
                chartType = 'positive';
                bars = barChart.buildBars(canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus);
            });
            // canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus
            it(`it builds an array of bars, 13 elements long`, () => {
                const expectedBarsLength = 13;
                expect(bars.length).toEqual(expectedBarsLength);
            });
            it(`with properly formatted bars`, () => {
                for (let i = 0; i < bars.length;  i++) {
                    const bar = bars[i];
                    expect(bar.getX()).toEqual(0);
                    expect(bars[i].getY()).toEqual(0);
                    expect(bars[i].getWidth()).toEqual(barWidth);
                    expect(bars[i].getHeight()).toEqual(barHeights[i]);
                    expect(bars[i].getFillColor()).toEqual(fillColorPlus);
                }
            });
        });
        describe(`for a negative chart type`, () => {
            beforeEach(() => {
                barHeights = [-12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24];
                chartType = 'negative';
                bars = barChart.buildBars(canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus);
            });
            // canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus
            it(`it builds an array of bars, 13 elements long`, () => {
                const expectedBarsLength = 13;
                expect(bars.length).toEqual(expectedBarsLength);
            });
            it(`with properly formatted bars`, () => {
                for (let i = 0; i < bars.length;  i++) {
                    const bar = bars[i];
                    expect(bar.getX()).toEqual(0);
                    expect(bars[i].getY()).toEqual(0);
                    expect(bars[i].getWidth()).toEqual(barWidth);
                    expect(bars[i].getHeight()).toEqual(barHeights[i]);
                    expect(bars[i].getFillColor()).toEqual(fillColorMinus);
                }
            });
        });
        describe(`for a dual chart type`, () => {
            beforeEach(() => {
                barHeights = [-12, 13, -14, -15, 16, 17, -18, 19, 20, -21, -22, 23, -24];
                chartType = 'dual';
                bars = barChart.buildBars(canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus);
            });
            // canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus
            it(`it builds an array of bars, 13 elements long`, () => {
                const expectedBarsLength = 13;
                expect(bars.length).toEqual(expectedBarsLength);
            });
            it(`with properly formatted bars`, () => {
                for (let i = 0; i < bars.length;  i++) {
                    const bar = bars[i];
                    expect(bar.getX()).toEqual(0);
                    expect(bars[i].getY()).toEqual(0);
                    expect(bars[i].getWidth()).toEqual(barWidth);
                    expect(bars[i].getHeight()).toEqual(barHeights[i]);
                    if (barHeights[i] < 0) {
                        expect(bars[i].getFillColor()).toEqual(fillColorMinus);
                    } else {
                        expect(bars[i].getFillColor()).toEqual(fillColorPlus);
                    }
                }
            });
        });
        describe(`for a tri chart type`, () => {
            beforeEach(() => {
                barHeights = [-12, 0, -14, 0, 16, 17, 0, 19, 20, -21, 0, 0, -24];
                chartType = 'tri';
                bars = barChart.buildBars(canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus);
            });
            // canvasHeight, barHeights, barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus
            it(`it builds an array of bars, 13 elements long`, () => {
                const expectedBarsLength = 13;
                expect(bars.length).toEqual(expectedBarsLength);
            });
            it(`with properly formatted bars`, () => {
                for (let i = 0; i < bars.length;  i++) {
                    const bar = bars[i];
                    expect(bar.getX()).toEqual(0);
                    if (barHeights[i] === 0) {
                        expect(bars[i].getY()).toEqual(-bar.getHeight() / 2);
                    } else {
                        expect(bars[i].getY()).toEqual(0);
                    }
                    // expect(bars[i].getY()).toEqual(0);
                    expect(bars[i].getWidth()).toEqual(barWidth);
                    // expect(bars[i].getHeight()).toEqual(barHeights[i]);
                    // console.log(`::with properly formatted bars - barHeight: ` + bar.getHeight() + `   canvasHeight: ` + barChart.canvasHeight);
                    if (barHeights[i] < 0) {
                        expect(bar.getHeight()).toEqual(-barChart.canvasHeight / 2);
                    } else {
                    if (barHeights[i] === 0) {
                            expect(bar.getHeight()).toEqual(barChart.canvasHeight / 4);
                        } else {
                            expect(bar.getHeight()).toEqual(barChart.canvasHeight / 2);
                        }
                    }

                    if (barHeights[i] < 0) {
                        expect(bars[i].getFillColor()).toEqual(fillColorMinus);
                    } else {
                        if (barHeights[i] === 0) {
                            expect(bars[i].getFillColor()).toEqual(fillColorZero);
                        } else {
                            expect(bars[i].getFillColor()).toEqual(fillColorPlus);
                        }
                    }
                }
            });
        });
        describe(`build world coordinate bar`, () => {
      describe(`for chart type POSITIVE`, () => {
        let bar: any;
        beforeEach(() => {
           barGap = 2;
           barHeights = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
           barWidth = 4;
           chartType = ChartTypeEnum.POSITIVE;
           fillColorMinus = 'red';
           fillColorPlus = 'blue';
           fillColorZero = 'green';
           barThreeDee = barChart.buildWorldCoordinateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
          });

        it(`with a valid  barThreeDee object`, () => {
              expect(barThreeDee).toBeTruthy();
        });
        describe(`with a valid first bar`, () => {
           beforeEach(() => {
               bar = barThreeDee[0];
           });
           describe(`lower left`, () => {
               it(`x coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.X]).toEqual(0);
               });
               it(`y coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Y]).toEqual(0);
               });
               it(`z coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(` upper right`, () => {
               it(`x coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.X]).toEqual(4);
               });
               it(`y coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Y]).toEqual(12);
               });
               it(`z coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`color`, () => {
               it(`is fillColorPlus`, () => {
                  expect(bar.fillColor).toEqual(fillColorPlus);
               });
           });
        });
        describe(`with a valid last bar `, () => {
           beforeEach(() => {
               bar = barThreeDee[12];
           });
           describe(`lower left`, () => {
               it(`x coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.X]).toEqual(72);
               });
               it(`y coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Y]).toEqual(0);
               });
               it(`z coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`upper right`, () => {
               it(`x coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.X]).toEqual(76);
               });
               it(`y coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Y]).toEqual(24);
               });
               it(`z coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`color`, () => {
               it(`is fillColorPlus`, () => {
                  expect(bar.fillColor).toEqual(fillColorPlus);
               });
           });
        });
      });
      describe(`for chart type NEGATIVE`, () => {
        let bar: any;
        beforeEach(() => {
           barGap = 2;
           barHeights = [-12, -13, -14, -15, -16, -17, -18, -19, -20, -21, -22, -23, -24];
           barWidth = 4;
           chartType = ChartTypeEnum.NEGATIVE;
           fillColorMinus = 'red';
           fillColorPlus = 'blue';
           fillColorZero = 'green';
           barThreeDee = barChart.buildWorldCoordinateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
        });

        it(`with a valid  barThreeDee object`, () => {
           expect(barThreeDee).toBeTruthy();
        });
        describe(`with a valid first bar`, () => {
           beforeEach(() => {
               bar = barThreeDee[0];
           });
           describe(`lower left`, () => {
               it(`x coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.X]).toEqual(0);
               });
               it(`y coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Y]).toEqual(0);
               });
               it(`z coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`upper right`, () => {
               it(`x coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.X]).toEqual(4);
               });
               it(`y coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Y]).toEqual(-12);
               });
               it(`z coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`color`, () => {
               it(`is fillColorMinus`, () => {
                  expect(bar.fillColor).toEqual(fillColorMinus);
               });
           });

        });
        describe(`with a valid last bar `, () => {
           beforeEach(() => {
               bar = barThreeDee[12];
           });
           describe(`lower left`, () => {
               it(`x coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.X]).toEqual(72);
               });
               it(`y coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Y]).toEqual(0);
               });
               it(`z coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(` upper right`, () => {
               it(`x coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.X]).toEqual(76);
               });
               it(`y coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Y]).toEqual(-24);
               });
               it(`z coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`color`, () => {
               it(`is fillColorMinus`, () => {
                  expect(bar.fillColor).toEqual(fillColorMinus);
               });
           });
        });
      });
      describe(`for chart type DUAL`, () => {
        let bar: any;
        beforeEach(() => {
           barGap = 2;
           barHeights = [12, 0, -14, 0, 16, 17, 0, 19, 20, -21, 0, 0, -24];
           barWidth = 4;
           chartType = ChartTypeEnum.DUAL;
           fillColorMinus = 'red';
           fillColorPlus = 'blue';
           fillColorZero = 'green';
           barThreeDee = barChart.buildWorldCoordinateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
        });
        it(`with a valid  barThreeDee object`, () => {
           expect(barThreeDee).toBeTruthy();
        });
        describe(`with a valid first bar`, () => {
           beforeEach(() => {
               bar = barThreeDee[0];
           });
           describe(`lower left`, () => {
               it(`x coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.X]).toEqual(0);
               });
               it(`y coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Y]).toEqual(0);
               });
               it(`z coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`upper right`, () => {
               it(`x coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.X]).toEqual(4);
               });
               it(`y coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Y]).toEqual(12);
               });
               it(`z coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`color`, () => {
               it(`is fillColorPlus`, () => {
                  expect(bar.fillColor).toEqual(fillColorPlus);
               });
           });
        });
        describe(`with a valid last bar`, () => {
           beforeEach(() => {
               bar = barThreeDee[12];
           });
           describe(`lower left`, () => {
               it(`x coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.X]).toEqual(72);
               });
               it(`y coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Y]).toEqual(0);
               });
               it(`z coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`upper right`, () => {
               it(`x coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.X]).toEqual(76);
               });
               it(`y coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Y]).toEqual(-24);
               });
               it(`z coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`color`, () => {
               it(`is fillColorMinus`, () => {
                  expect(bar.fillColor).toEqual(fillColorMinus);
               });
           });
        });
      });
      describe(`for chart type TRI`, () => {
        let bar: any;
        beforeEach(() => {
           barGap = 2;
           barHeights = [12, 0, -14, 0, 16, 17, 0, 19, 20, -21, 0, 0, -24];
           barWidth = 4;
           chartType = ChartTypeEnum.TRI;
           fillColorMinus = 'red';
           fillColorPlus = 'blue';
           fillColorZero = 'green';
           barThreeDee = barChart.buildWorldCoordinateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
        });
        it(`with a valid  barThreeDee object`, () => {
           expect(barThreeDee).toBeTruthy();
        });
        describe(`with a valid first bar`, () => {
           beforeEach(() => {
               bar = barThreeDee[0];
           });
           describe(`lower left`, () => {
               it(`x coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.X]).toEqual(0);
               });
               it(`y coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Y]).toEqual(0);
               });
               it(`z coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`upper right`, () => {
               it(`x coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.X]).toEqual(4);
               });
               it(`y coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Y]).toEqual(8);
               });
               it(`z coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`color`, () => {
               it(`is fillColorPlus`, () => {
                  expect(bar.fillColor).toEqual(fillColorPlus);
               });
           });
        });
        describe(`with a valid second bar`, () => {
           beforeEach(() => {
               bar = barThreeDee[1];
           });
           describe(`lower left`, () => {
               it(`x coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.X]).toEqual(6);
               });
               it(`y coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Y]).toEqual(-2);
               });
               it(`z coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`upper right`, () => {
               it(`x coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.X]).toEqual(10);
               });
               it(`y coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Y]).toEqual(2);
               });
               it(`z coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`color`, () => {
               it(`is fillColorZero`, () => {
                  expect(bar.fillColor).toEqual(fillColorZero);
               });
           });
        });
        describe(`with a valid last bar`, () => {
           beforeEach(() => {
               bar = barThreeDee[12];
           });
           describe(`lower left`, () => {
               it(`x coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.X]).toEqual(72);
               });
               it(`y coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Y]).toEqual(0);
               });
               it(`z coordinate`, () => {
                  expect(bar.lowerLeft.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`upper right`, () => {
               it(`x coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.X]).toEqual(76);
               });
               it(`y coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Y]).toEqual(-8);
               });
               it(`z coordinate`, () => {
                  expect(bar.upperRight.toArray()[Coordinates3DEnum.Z]).toEqual(1);
               });
           });
           describe(`color`, () => {
               it(`is fillColorMinus`, () => {
                  expect(bar.fillColor).toEqual(fillColorMinus);
               });
           });
        });
      });

   });
        describe(`build sToCanvasHeightMatrix`, () => {
      describe(`for a POSITIVE bar chart`, () => {
        beforeEach(() => {
           barGap = 2;
           barHeights = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
           maxBarHeight = Math.abs(Math.max(...barHeights));
           canvasRatio = canvasHeight / maxBarHeight;
           barWidth = 4;
           chartType = ChartTypeEnum.POSITIVE;
           fillColorMinus = 'red';
           fillColorPlus = 'blue';
           fillColorZero = 'green';
           barThreeDee = barChart.buildWorldCoordinateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
           sToCanvasHeightMatrix = barChart.scaleToCanvasHeight(barHeights, chartType, canvasHeight);
        });
        it(`with 3 sub arrays`, () => {
           expect(sToCanvasHeightMatrix.toArray().length).toEqual(3);
        });
        it(`with first array SX equal to 1`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.X]).toEqual(1);
        });
        it(`with first other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Y]).toEqual(0);
        });
        it(`with first other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Z]).toEqual(0);
        });
        it(`with second array other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.X]).toEqual(0);
        });
        it(`with second SY equal to canvasRatio`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Y]).toEqual(canvasRatio);
        });
        it(`with second array other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Z]).toEqual(0);
        });
        it(`with third array first element equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.X]).toEqual(0);
        });
        it(`with third array second element equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Y]).toEqual(0);
        });
        it(`with third array third elements equal to 1`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Z]).toEqual(1);
        });
      });
      describe(`for a NEGATIVE bar chart`, () => {
        beforeEach(() => {
           barGap = 2;
           barHeights = [-12, -13, -14, -15, -16, -17, -18, -19, -20, -12, -13, -14, -15];
           maxBarHeight = Math.abs(Math.min(...barHeights));
           canvasRatio = canvasHeight / maxBarHeight;
           // console.log(`NEGATIVE bar chart maxBarHeight: ` + maxBarHeight + `, canvasHeight: ` + canvasHeight + ` canvasHeight / maxBarHeight: ` + canvasRatio);
           barWidth = 4;
           chartType = ChartTypeEnum.NEGATIVE;
           fillColorMinus = 'red';
           fillColorPlus = 'blue';
           fillColorZero = 'green';
           barThreeDee = barChart.buildWorldCoordinateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
           sToCanvasHeightMatrix = barChart.scaleToCanvasHeight(barHeights, chartType, canvasHeight);
        });
        it(`with 3 sub arrays`, () => {
           expect(sToCanvasHeightMatrix.toArray().length).toEqual(3);
        });
        it(`with first array SX equal to 1`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.X]).toEqual(1);
        });
        it(`with first other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Y]).toEqual(0);
        });
        it(`with first other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Z]).toEqual(0);
        });
        it(`with second array other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.X]).toEqual(0);
        });
        it(`with second SY equal to canvasRatio`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Y]).toEqual(canvasRatio);
        });
        it(`with second array other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Z]).toEqual(0);
        });
        it(`with third array first element equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.X]).toEqual(0);
        });
        it(`with third array second element equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Y]).toEqual(0);
        });
        it(`with third array third elements equal to 1`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Z]).toEqual(1);
        });

      });
      describe(`for a DUAL bar chart`, () => {
        beforeEach(() => {
           barGap = 2;
           barHeights = [12, -13, -14, 15, -16, -17, -21, -19, -20, -12, 20, -14, -15];
           maxBarHeight = Math.max(Math.abs(Math.min(...barHeights)), Math.abs(Math.max(...barHeights)));
           canvasRatio = (canvasHeight / 2) / maxBarHeight;
           // console.log(`DUAL bar chart maxBarHeight: ` + maxBarHeight + `, canvasHeight: ` + canvasHeight + ` canvasHeight / maxBarHeight: ` + canvasRatio);
           barWidth = 4;
           chartType = ChartTypeEnum.DUAL;
           fillColorMinus = 'red';
           fillColorPlus = 'blue';
           fillColorZero = 'green';
           barThreeDee = barChart.buildWorldCoordinateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
           sToCanvasHeightMatrix = barChart.scaleToCanvasHeight(barHeights, chartType, canvasHeight);
        });
        it(`with 3 sub arrays`, () => {
           expect(sToCanvasHeightMatrix.toArray().length).toEqual(3);
        });
        it(`with first array SX equal to 1`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.X]).toEqual(1);
        });
        it(`with first other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Y]).toEqual(0);
        });
        it(`with first other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Z]).toEqual(0);
        });
        it(`with second array other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.X]).toEqual(0);
        });
        it(`with second SY equal to canvasRatio`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Y]).toEqual(canvasRatio);
        });
        it(`with second array other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Z]).toEqual(0);
        });
        it(`with third array first element equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.X]).toEqual(0);
        });
        it(`with third array second element equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Y]).toEqual(0);
        });
        it(`with third array third elements equal to 1`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Z]).toEqual(1);
        });
      });
      describe(`for a TRI bar chart`, () => {
        beforeEach(() => {
           barGap = 2;
           // barHeights = [12, -13, -14, 15, -16, -17, 21, -19, -20, -12, 20, -14, -15].map(function (x) {return x < 0 ? -2 : x === 0 ? 1 : 2});
           barHeights = [12, -13, -14, 15, -16, -17, 21, -19, -20, -12, 20, -14, -15].map( (x) => x < 0 ? -2 : x === 0 ? 1 : 2);
           maxBarHeight = Math.max(Math.abs(Math.min(...barHeights)), Math.abs(Math.max(...barHeights)));
           canvasRatio = (canvasHeight / 2) / maxBarHeight;
           // console.log(`TRI bar chart maxBarHeight: ` + maxBarHeight + `, canvasHeight: ` + canvasHeight + ` canvasHeight / maxBarHeight: ` + canvasRatio);
           barWidth = 4;
           chartType = ChartTypeEnum.TRI;
           fillColorMinus = 'red';
           fillColorPlus = 'blue';
           fillColorZero = 'green';
           barThreeDee = barChart.buildWorldCoordinateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
           sToCanvasHeightMatrix = barChart.scaleToCanvasHeight(barHeights, chartType, canvasHeight);
        });
        it(`with 3 sub arrays`, () => {
           expect(sToCanvasHeightMatrix.toArray().length).toEqual(3);
        });
        it(`with first array SX equal to 1`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.X]).toEqual(1);
        });
        it(`with first other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Y]).toEqual(0);
        });
        it(`with first other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Z]).toEqual(0);
        });
        it(`with second array other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.X]).toEqual(0);
        });
        it(`with second SY equal to canvasRatio`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Y]).toEqual(canvasRatio);
        });
        it(`with second array other elements equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Z]).toEqual(0);
        });
        it(`with third array first element equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.X]).toEqual(0);
        });
        it(`with third array second element equal to 0`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Y]).toEqual(0);
        });
        it(`with third array third elements equal to 1`, () => {
           expect(sToCanvasHeightMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Z]).toEqual(1);
        });
      });
   });
        describe(`build dMoveCanvasMatrix`, () => {
        describe(`for a POSITIVE bar chart`, () => {
           beforeEach(() => {
                barGap = 2;
                barHeights = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                maxBarHeight = Math.abs(Math.max(...barHeights));
                canvasRatio = canvasHeight / maxBarHeight;
                barWidth = 4;
                chartType = ChartTypeEnum.POSITIVE;
                fillColorMinus = 'red';
                fillColorPlus = 'blue';
                fillColorZero = 'green';
                barThreeDee = barChart.buildWorldCoordinateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
                dMoveCanvasMatrix = barChart.moveWithinCanvas(canvasHeight, chartType);
           });
           it(`with 3 sub arrays`, () => {
                expect(sToCanvasHeightMatrix.toArray().length).toEqual(3);
           });
           it(`with first array SX equal to 1`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.X]).toEqual(1);
           });
           it(`with first other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Y]).toEqual(0);
           });
           it(`with first other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Z]).toEqual(0);
           });
           it(`with second array other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.X]).toEqual(0);
           });
           it(`with second SY equal to 1`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Y]).toEqual(1);
           });
           it(`with second array other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Z]).toEqual(0);
           });
           it(`with third array first element equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.X]).toEqual(0);
           });
           it(`with third array second element equal to canvasHeight`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Y]).toEqual(canvasHeight);
           });
           it(`with third array third elements equal to 1`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Z]).toEqual(1);
           });
        });
        describe(`for a NEGATIVE bar chart`, () => {
           beforeEach(() => {
                barGap = 2;
                barHeights = [-12, -13, -14, -15, -16, -17, -18, -19, -20, -12, -13, -14, -15];
                maxBarHeight = Math.abs(Math.max(...barHeights));
                canvasRatio = canvasHeight / maxBarHeight;
                barWidth = 4;
                chartType = ChartTypeEnum.NEGATIVE;
                fillColorMinus = 'red';
                fillColorPlus = 'blue';
                fillColorZero = 'green';
                barThreeDee = barChart.buildWorldCoordinateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
                dMoveCanvasMatrix = barChart.moveWithinCanvas(canvasHeight, chartType);
           });
           it(`with 3 sub arrays`, () => {
                expect(sToCanvasHeightMatrix.toArray().length).toEqual(3);
           });
           it(`with first array SX equal to 1`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.X]).toEqual(1);
           });
           it(`with first other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Y]).toEqual(0);
           });
           it(`with first other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Z]).toEqual(0);
           });
           it(`with second array other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.X]).toEqual(0);
           });
           it(`with second SY equal to 1`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Y]).toEqual(1);
           });
           it(`with second array other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Z]).toEqual(0);
           });
           it(`with third array first element equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.X]).toEqual(0);
           });
           it(`with third array second element equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Y]).toEqual(0);
           });
           it(`with third array third elements equal to 1`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Z]).toEqual(1);
           });
        });
        describe(`for a DUAL bar chart`, () => {
           beforeEach(() => {
                barGap = 2;
                barHeights = [12, -13, -14, 15, -16, -17, -21, -19, -20, -12, 20, -14, -15];
                maxBarHeight = Math.abs(Math.max(...barHeights));
                canvasRatio = canvasHeight / maxBarHeight;
                barWidth = 4;
                chartType = ChartTypeEnum.DUAL;
                fillColorMinus = 'red';
                fillColorPlus = 'blue';
                fillColorZero = 'green';
                barThreeDee = barChart.buildWorldCoordinateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
                dMoveCanvasMatrix = barChart.moveWithinCanvas(canvasHeight, chartType);
           });
           it(`with 3 sub arrays`, () => {
                expect(sToCanvasHeightMatrix.toArray().length).toEqual(3);
           });
           it(`with first array SX equal to 1`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.X]).toEqual(1);
           });
           it(`with first other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Y]).toEqual(0);
           });
           it(`with first other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Z]).toEqual(0);
           });
           it(`with second array other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.X]).toEqual(0);
           });
           it(`with second SY equal to 1`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Y]).toEqual(1);
           });
           it(`with second array other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Z]).toEqual(0);
           });
           it(`with third array first element equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.X]).toEqual(0);
           });
           it(`with third array second element equal to canvasHeight / 2`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Y]).toEqual(canvasHeight / 2);
           });
           it(`with third array third elements equal to 1`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Z]).toEqual(1);
           });
        });
        describe(`for a TRI bar chart`, () => {
           beforeEach(() => {
                barGap = 2;
                barHeights = [12, -13, -14, 15, 0, -17, -21, -19, -20, 0, 20, 0, -15];
                maxBarHeight = Math.abs(Math.max(...barHeights));
                canvasRatio = canvasHeight / maxBarHeight;
                barWidth = 4;
                chartType = ChartTypeEnum.TRI;
                fillColorMinus = 'red';
                fillColorPlus = 'blue';
                fillColorZero = 'green';
                barThreeDee = barChart.buildWorldCoordinateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);
                dMoveCanvasMatrix = barChart.moveWithinCanvas(canvasHeight, chartType);
           });
           it(`with 3 sub arrays`, () => {
                expect(sToCanvasHeightMatrix.toArray().length).toEqual(3);
           });
           it(`with first array SX equal to 1`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.X]).toEqual(1);
           });
           it(`with first other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Y]).toEqual(0);
           });
           it(`with first other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_X][Coordinates3DEnum.Z]).toEqual(0);
           });
           it(`with second array other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.X]).toEqual(0);
           });
           it(`with second SY equal to 1`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Y]).toEqual(1);
           });
           it(`with second array other elements equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Y][Coordinates3DEnum.Z]).toEqual(0);
           });
           it(`with third array first element equal to 0`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.X]).toEqual(0);
           });
           it(`with third array second element equal to canvasHeight / 2`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Y]).toEqual(canvasHeight / 2);
           });
           it(`with third array third elements equal to 1`, () => {
                expect(dMoveCanvasMatrix.toArray()[TranformationMatrixEnum.SCALE_Z][Coordinates3DEnum.Z]).toEqual(1);
           });
        });
   });
});

});
