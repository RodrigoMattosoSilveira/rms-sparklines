import { TestBed } from '@angular/core/testing';

import { BulletChartService } from './bulletchart.service';

describe('BulletChartService', () => {
   let bulletChartService: BulletChartService = null;

   beforeEach(() => {
      TestBed.configureTestingModule({ providers: [BulletChartService]})
      bulletChartService = TestBed.get(BulletChartService);
   });

   it('should be created', () => {
      expect(bulletChartService).toBeTruthy();
   });

   describe(`When handling Quality Ranges`, () => {
      describe(`Valid objects`, () => {
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
