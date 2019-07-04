import { TestBed } from '@angular/core/testing';

import { ComparativeMeasure } from './comparativeMeasure';
import { FeatureMeasure } from './featureMeasure';
import { QualitativeRange } from './qualitativeRange';

import { BulletChartService } from './bulletchart.service';

describe('BulletChartService', () => {
   var bulletChartService: BulletChartService = null;
   var comparativeMeasureSourceGood: any;
   var comparativeMeasureGood: ComparativeMeasure;
   var comparativeMeasureBad: any;
   var featureMeasureSourceGood: any;
   var featureMeasureGood: FeatureMeasure;
   var featureMeasureBad: any;
   var qualitativeRangeSourceGood: Array<any>;
   var qualitativeRangeGood: Array<QualitativeRange>;
   var qualitativeRangeSourceBad: Array<any>;
   var canvasEl: HTMLCanvasElement;

   beforeEach(() => {
      TestBed.configureTestingModule({ providers: [BulletChartService]})
      bulletChartService = TestBed.get(BulletChartService);

      canvasEl = document.createElement('canvas');
      canvasEl.style.display = 'inline-block';
      canvasEl.style.verticalAlign = 'top';
   });
   it('should be created', () => {
      expect(bulletChartService).toBeTruthy();
   });
   describe(`handling Quality Ranges array`, () => {
      beforeEach(() => {
         qualitativeRangeSourceGood = [{'value': 35, 'color': '#A8A8A8'}, {'value': 50, 'color': '#808080'}, {'value': 60, 'color': '#E0E0E0'}];
      });
      describe(`Valid objects`, () => {
         it('should be created', () => {
            expect(qualitativeRangeSourceGood).toBeTruthy();
         });
         it('Recognizes them as such', () => {
            expect(bulletChartService.validateQualitativeRanges(qualitativeRangeSourceGood)).toBe(true);
         });
         it('calculates the top value correctly', () => {
            qualitativeRangeGood =  bulletChartService.getQualityRanges(JSON.stringify(qualitativeRangeSourceGood));
            let topValue = bulletChartService.getTopValue(qualitativeRangeGood)
            expect(topValue).toBe(60);
         });
         describe(`Sorts them correctly`, () => {
            it('in ascending order', () => {
               let valid = true;
               qualitativeRangeGood =  bulletChartService.getQualityRanges(JSON.stringify(qualitativeRangeSourceGood));
               let qualitativeRangeGoodSorted: Array<QualitativeRange> = bulletChartService.sortQualitativeRangeHighLow(qualitativeRangeGood);
               for(let i = 0; i < qualitativeRangeGoodSorted.length; i++) {
                  if (i < qualitativeRangeGoodSorted.length - 1) {
                     valid = valid && qualitativeRangeGoodSorted[i].value >= qualitativeRangeGoodSorted[i+1].value
                  }
               }
               expect(valid).toBe(true);
            });
            it('in descending order', () => {
               let valid = true;
               qualitativeRangeGood =  bulletChartService.getQualityRanges(JSON.stringify(qualitativeRangeSourceGood));
               let qualitativeRangeGoodSorted: Array<QualitativeRange> = bulletChartService.sortQualitativeRangeLowHigh(qualitativeRangeGood);
               for(let i = 0; i < qualitativeRangeGoodSorted.length; i++) {
                  if (i < qualitativeRangeGoodSorted.length - 1) {
                     valid = valid && qualitativeRangeGoodSorted[i].value <= qualitativeRangeGoodSorted[i+1].value
                  }
               }
               expect(valid).toBe(true);
            });
         });
         describe(`Scales them correctly`, () => {
            beforeEach(() => {
               qualitativeRangeGood =  bulletChartService.getQualityRanges(JSON.stringify(qualitativeRangeSourceGood));
            });
            it('horizontally', () => {
               canvasEl.width = 128;
               canvasEl.height = 32;
               bulletChartService.scaleToCanvas(canvasEl, qualitativeRangeGood);
               let valid = true;
               let topValue = bulletChartService.getTopValue(qualitativeRangeGood)
               for(let i = 0; i < qualitativeRangeGood.length; i++) {
                  let value = qualitativeRangeGood[i].value;
                  valid = valid && qualitativeRangeGood[i].width == value/topValue * canvasEl.width;
                  valid = valid && qualitativeRangeGood[i].height == canvasEl.height
               }
               expect(valid).toBe(true);
            });
            it('vertically', () => {
               canvasEl.width = 32;
               canvasEl.height = 128;
               bulletChartService.scaleToCanvas(canvasEl, qualitativeRangeGood);
               let valid = true;
               let topValue = bulletChartService.getTopValue(qualitativeRangeGood)
               for(let i = 0; i < qualitativeRangeGood.length; i++) {
                  let value = qualitativeRangeGood[i].value;
                  valid = valid && qualitativeRangeGood[i].width == canvasEl.width;
                  valid = valid && qualitativeRangeGood[i].height == value/topValue * canvasEl.height
               }
               expect(valid).toBe(true);
            });
         });
      });
      describe(`Invalid objects`, () => {
         it('When missing an attribute', () => {
            qualitativeRangeSourceBad = [{'value': 35}, {'value': 50, 'color': '#808080'}, {'value': 60, 'color': '#E0E0E0'}];
            expect(bulletChartService.validateQualitativeRanges(qualitativeRangeSourceBad)).toBe(false);
         });
         it('When containng an extra an attribute', () => {
            qualitativeRangeSourceBad = [{'value': 35, 'color': '#808080'}, {'value': 50, 'color': '#808080', 'badKey': 'badKey'}, {'value': 60, 'color': '#E0E0E0'}];
            expect(bulletChartService.validateQualitativeRanges(qualitativeRangeSourceBad)).toBe(false);
         });
         it('When having an invalid attribute key', () => {
            qualitativeRangeSourceBad = [{'value': 35, 'color': '#808080'}, {'value': 50, 'color': '#808080', 'badKey': 'badKey'}, {'values': 60, 'color': '#E0E0E0'}];
            expect(bulletChartService.validateQualitativeRanges(qualitativeRangeSourceBad)).toBe(false);
         });
         it('When having an non non numeric value', () => {
            qualitativeRangeSourceBad = [{'value': '35', 'color': '#808080'}, {'value': 50, 'color': '#808080', 'badKey': 'badKey'}, {'values': 60, 'color': '#E0E0E0'}];
            expect(bulletChartService.validateQualitativeRanges(qualitativeRangeSourceBad)).toBe(false);
         });
         it('When having an invalid color', () => {
            qualitativeRangeSourceBad = [{'value': '35', 'color': '#80808X'}, {'value': 50, 'color': '#808080', 'badKey': 'badKey'}, {'values': 60, 'color': '#E0E0E0'}];
            expect(bulletChartService.validateQualitativeRanges(qualitativeRangeSourceBad)).toBe(false);
         });
      });
   });
   describe(`handling Comparative Measure object`, () => {
      beforeEach(() => {
          comparativeMeasureSourceGood = {'value': 57, 'color': 'black', 'lineWidth': 3};
      });
      describe(`valid object`, () => {
         it('should be created', () => {
            expect(comparativeMeasureSourceGood).toBeTruthy();
         });
         it('Recognizes them as such', () => {
            expect(bulletChartService.validateComparativeMeasure(comparativeMeasureSourceGood)).toBe(true);
         });
         describe(`Scales them correctly`, () => {
            beforeEach(() => {
               comparativeMeasureSourceGood =  {'value': 42, 'color': '#FF0000', 'lineWidth': 4};
               comparativeMeasureGood =  bulletChartService.getComparativeMeasure(JSON.stringify(comparativeMeasureSourceGood));
               qualitativeRangeSourceGood = [{'value': 35, 'color': '#A8A8A8'}, {'value': 50, 'color': '#808080'}, {'value': 60, 'color': '#E0E0E0'}];
               qualitativeRangeGood =  bulletChartService.getQualityRanges(JSON.stringify(qualitativeRangeSourceGood));
            });
            it('horizontally', () => {
               canvasEl.width = 128;
               canvasEl.height = 32;
               bulletChartService.scaleComparativeMeasureToCanvas(canvasEl, comparativeMeasureGood, qualitativeRangeGood);
               let valid = true;
               let topValue = bulletChartService.getTopValue(qualitativeRangeGood)
               valid = valid && comparativeMeasureGood.fromX == comparativeMeasureGood.value/topValue * canvasEl.width;
               valid = valid &&  comparativeMeasureGood.fromY == canvasEl.height/3;
               valid = valid &&  comparativeMeasureGood.toX == comparativeMeasureGood.value/topValue * canvasEl.width;
               valid = valid &&  comparativeMeasureGood.toY == 2*canvasEl.height/3;
               expect(valid).toBe(true);
            });
            it('vertically', () => {
               canvasEl.width = 32;
               canvasEl.height = 128;
               bulletChartService.scaleComparativeMeasureToCanvas(canvasEl, comparativeMeasureGood, qualitativeRangeGood);
               let valid = true;
               let topValue = bulletChartService.getTopValue(qualitativeRangeGood)
               valid = valid && comparativeMeasureGood.fromX == canvasEl.width/3;
               valid = valid &&  comparativeMeasureGood.fromY == comparativeMeasureGood.value/topValue * canvasEl.height;
               valid = valid &&  comparativeMeasureGood.toX == 2*canvasEl.width/3;
               valid = valid &&  comparativeMeasureGood.toY == comparativeMeasureGood.value/topValue * canvasEl.height;
               expect(valid).toBe(true);
            });
         });
      });
      describe(`invalid object`, () => {
         it('missing an attribute', () => {
            comparativeMeasureBad = {'value': 57, 'color': 'black'};;
            expect(bulletChartService.validateComparativeMeasure(comparativeMeasureBad)).toBe(false);
         });
         it('containng an extra an attribute', () => {
            comparativeMeasureBad = {'value': 57, 'color': 'black', 'lineWidth': 3, 'extraAttribute': 3};;
            expect(bulletChartService.validateComparativeMeasure(comparativeMeasureBad)).toBe(false);
         });
         it('having an invalid attribute key', () => {
            comparativeMeasureBad = {'value': 57, 'color': 'black', 'lineWidthhh': 3};;
            expect(bulletChartService.validateComparativeMeasure(comparativeMeasureBad)).toBe(false);
         });
         it('having a non non numeric value', () => {
            comparativeMeasureBad = {'value': '5A', 'color': 'black', 'lineWidth': 3};;
            expect(bulletChartService.validateComparativeMeasure(comparativeMeasureBad)).toBe(false);
         });
         it('having an invalid color', () => {
            comparativeMeasureBad = {'value': 57, 'color': '#80808G', 'lineWidth': 3};;
            expect(bulletChartService.validateComparativeMeasure(comparativeMeasureBad)).toBe(false);
         });
      });
   });
   describe(`handling Feature Measure object`, () => {
      beforeEach(() => {
          featureMeasureSourceGood = {'value': 25, 'color': 'black'};
      });
      describe(`valid object`, () => {
         it('should be created', () => {
            expect(featureMeasureSourceGood).toBeTruthy();
         });
         it('Recognizes them as such', () => {
            expect(bulletChartService.validateFeatureMeasure(featureMeasureSourceGood)).toBe(true);
         });
         describe(`Scales them correctly`, () => {
            beforeEach(() => {
               featureMeasureSourceGood =  {'value': 25, 'color': 'black'};
               featureMeasureGood =  bulletChartService.getFeatureMeasure(JSON.stringify(featureMeasureSourceGood));
               qualitativeRangeSourceGood = [{'value': 35, 'color': '#A8A8A8'}, {'value': 50, 'color': '#808080'}, {'value': 60, 'color': '#E0E0E0'}];
               qualitativeRangeGood =  bulletChartService.getQualityRanges(JSON.stringify(qualitativeRangeSourceGood));
            });
            it('horizontally', () => {
               canvasEl.width = 128;
               canvasEl.height = 32;
               bulletChartService.scaleFeatureMeasureToCanvas(canvasEl, featureMeasureGood, qualitativeRangeGood);
               let valid = true;
               let topValue = bulletChartService.getTopValue(qualitativeRangeGood)
               valid = valid && featureMeasureGood.fromX == 0;
               valid = valid &&  featureMeasureGood.fromY == canvasEl.height/3;
               valid = valid &&  featureMeasureGood.width == featureMeasureGood.value/topValue * canvasEl.width;
               valid = valid &&  featureMeasureGood.height == canvasEl.height/3;
               expect(valid).toBe(true);
            });
            it('vertically', () => {
               canvasEl.width = 32;
               canvasEl.height = 128;
               bulletChartService.scaleFeatureMeasureToCanvas(canvasEl, featureMeasureGood, qualitativeRangeGood);
               let valid = true;
               let topValue = bulletChartService.getTopValue(qualitativeRangeGood)
               valid = valid && featureMeasureGood.fromX == canvasEl.width/3;
               valid = valid &&  featureMeasureGood.fromY == 0;
               valid = valid &&  featureMeasureGood.width == canvasEl.width/3;
               valid = valid &&  featureMeasureGood.height == featureMeasureGood.value/topValue * canvasEl.height;
               expect(valid).toBe(true);
            });
         });
      });
      describe(`invalid object`, () => {
         it('missing an attribute', () => {
            featureMeasureBad = {'value': 57};;
            expect(bulletChartService.validateFeatureMeasure(featureMeasureBad)).toBe(false);
         });
         it('containng an extra an attribute', () => {
            featureMeasureBad = {'value': 57, 'color': 'black', 'extra': 'extra'};;
            expect(bulletChartService.validateFeatureMeasure(featureMeasureBad)).toBe(false);
         });
         it('having an invalid attribute key', () => {
            featureMeasureBad = {'value': 57, 'colorrrr': 'black'};;
            expect(bulletChartService.validateFeatureMeasure(featureMeasureBad)).toBe(false);
         });
         it('having a non non numeric value', () => {
            featureMeasureBad = {'value': 'AA', 'color': 'black'};;
            expect(bulletChartService.validateFeatureMeasure(featureMeasureBad)).toBe(false);
         });
         it('having an invalid color', () => {
            featureMeasureBad = {'value': 57, 'color': '#80808G'};;
            expect(bulletChartService.validateFeatureMeasure(featureMeasureBad)).toBe(false);
         });
      });
   });
});
