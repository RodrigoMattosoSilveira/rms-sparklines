import { TestBed } from '@angular/core/testing';

import { RmstekNumberArray } from './rmstek-number-array';
import './arrayExtensions'

// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

describe(`RmstekNumberArray`, () => {
   var testObj: RmstekNumberArray;
   var valueRaw: string;
   var valueParsed: Array<number>;
   describe(`should be`, () => {
      beforeEach(() => {
         valueRaw = `RmstekNumberArrayRaw`;
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
         valueParsed = [1, 3, 5, 7];
   	});
      it(`valid with all numbers`, () => {
         valueRaw = JSON.stringify(valueParsed);
   		testObj = new RmstekNumberArray(valueRaw);
         expect(testObj.validate(`RmstekNumberArray`)).toBe(true);
         expect(testObj.getValue().equals(valueParsed)).toBeTruthy;
      });
      it(`invalid with non numeric`, () => {
         valueRaw = JSON.stringify([1, '3A', 5, 7]);
   		testObj = new RmstekNumberArray(valueRaw);
         expect(testObj.validate(`DecorationPoints`)).toBe(false);
      });
   });
});
