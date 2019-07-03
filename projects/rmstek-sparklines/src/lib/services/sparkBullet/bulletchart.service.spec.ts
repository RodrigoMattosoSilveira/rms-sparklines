import { TestBed } from '@angular/core/testing';

import { QualitativeRange } from './qualitativeRange';

import { BulletChartService } from './bulletchart.service';

describe('BulletChartService', () => {
   var bulletChartService: BulletChartService = null;
   var qualitativeRangeSourceGood: Array<any>;
   var qualitativeRangeGood: Array<QualitativeRange>;
   var qualitativeRangeSourceBad: Array<QualitativeRange>;
   var qualitativeRangeBad: Array<QualitativeRange>;

   beforeEach(() => {
      TestBed.configureTestingModule({ providers: [BulletChartService]})
      bulletChartService = TestBed.get(BulletChartService);
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
         it('Sorts them correctly in ascending order', () => {
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
         it('Sorts them correctly in descending order', () => {
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
