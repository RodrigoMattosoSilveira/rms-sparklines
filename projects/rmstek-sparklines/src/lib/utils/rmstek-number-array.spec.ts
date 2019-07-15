import { TestBed } from '@angular/core/testing';

import { RmstekNumberArray } from './rmstek-number-array';

describe(`DecorationPoints`, () => {
   var testObj: RmstekNumberArray;
   var valueRaw: string;
   describe(`should be`, () => {
      beforeEach(() => {
         valueRaw = `decorationPointsRaw`;
   		testObj = new RmstekNumberArray(valueRaw);
   	});
      it(`created`, () => {
         expect(testObj).toBeTruthy();
      });
      it(`initialized correctly`, () => {
         expect(testObj.getValueRaw()).toBeTruthy(`decorationPointsRaw`);
      });
   });
   describe(`should be`, () => {
      beforeEach(() => {
   	});
      it(`valid with all numbers`, () => {
         valueRaw = JSON.stringify([1, 3, 5, 7]);
   		testObj = new RmstekNumberArray(valueRaw);
         expect(testObj.validate(`DecorationPoints`)).toBe(true);
      });
      it(`invalid with non numeric`, () => {
         valueRaw = JSON.stringify([1, '3A', 5, 7]);
   		testObj = new RmstekNumberArray(valueRaw);
         expect(testObj.validate(`DecorationPoints`)).toBe(false);
      });
   });
});
