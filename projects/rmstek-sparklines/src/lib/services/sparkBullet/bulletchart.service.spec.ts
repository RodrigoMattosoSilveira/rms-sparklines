import { TestBed } from '@angular/core/testing';

import { QualitativeRange } from './qualitativeRange';

import { BulletChartService } from './bulletchart.service';

describe('BulletChartService', () => {
   var bulletChartService: BulletChartService = null;
   var qualitativeRangeSourceGood: string;
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
         qualitativeRangeSourceGood = `[{'value': 60, 'color': '#E0E0E0'}, {'value': 35, 'color': '#A8A8A8'}, {'value': 50, 'color': '#808080'}]`;
      });
      describe(`Valid objects`, () => {
         it('should be created', () => {
            expect(qualitativeRangeSourceGood).toBeTruthy();
         });
         it('Recognizes them as such', () => {
            expect(true).toBe(false);
         });
         it('Sorts them correctly in ascending order', () => {
            expect(true).toBe(false);
         });
         it('Sorts them correctly in descending order', () => {
            expect(true).toBe(false);
         });
         it('Scales them correctly', () => {
            expect(true).toBe(false);
         });
      });
      describe(`Valid objects`, () => {
         it('Recognizes them as such', () => {
            expect(true).toBe(false);
         });
      });
   });
   describe(`When handling the Comparative Measure`, () => {
      describe(`Valid objects`, () => {
         it('Recognizes them as such', () => {
            expect(true).toBe(false);
         });
         it('Scales them correctly', () => {
            expect(true).toBe(false);
         });
      });
      describe(`Valid objects`, () => {
         it('Recognizes them as such', () => {
            expect(true).toBe(false);
         });
      });
   });
   describe(`When handling the Feature Measure`, () => {
      describe(`Valid objects`, () => {
         it('Recognizes them as such', () => {
            expect(true).toBe(false);
         });
         it('Scales them correctly', () => {
            expect(true).toBe(false);
         });
      });
      describe(`Valid objects`, () => {
         it('Recognizes them as such', () => {
            expect(true).toBe(false);
         });
      });
   });
});
