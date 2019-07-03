import { TestBed } from '@angular/core/testing';

import { QualitativeRange } from './qualitativeRange';

import { BulletChartService } from './bulletchart.service';

describe('BulletChartService', () => {
   var bulletChartService: BulletChartService = null;
   var qualitativeRangeSourceGood: Array<any>;
   var qualitativeRangeGood: Array<QualitativeRange>;
   var qualitativeRangeSourceBad: Array<any>;
   var qualitativeRangeBad: Array<QualitativeRange>;
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

   describe(`When handling Quality Ranges`, () => {
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
   describe(`When handling the Comparative Measure`, () => {
      describe(`Valid objects`, () => {
         it('Recognizes them as such', () => {
            expect(false).toBe(true);
         });
         it('Scales them correctly', () => {
            expect(false).toBe(true);
         });
      });
      describe(`Valid objects`, () => {
         it('Recognizes them as such', () => {
            expect(false).toBe(true);
         });
      });
   });
   describe(`When handling the Feature Measure`, () => {
      describe(`Valid objects`, () => {
         it('Recognizes them as such', () => {
            expect(false).toBe(true);
         });
         it('Scales them correctly', () => {
            expect(false).toBe(true);
         });
      });
      describe(`Valid objects`, () => {
         it('Recognizes them as such', () => {
            expect(false).toBe(true);
         });
      });
   });
});
