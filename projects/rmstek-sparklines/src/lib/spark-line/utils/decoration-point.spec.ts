import { TestBed } from '@angular/core/testing';

import { DecorationPoint } from './decoration-point';
import { DecorationPoints } from './decoration-points';
import '../utils/arrayExtensions'

// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

describe(`DecorationPoints`, () => {
   var testObj: DecorationPoints;
   var valueRaw: string;
   var valueParsed: Array<number>;
   describe(`should be`, () => {
      beforeEach(() => {
         valueRaw = `DecorationPointsRaw`;
   		testObj = new DecorationPoints(valueRaw);
   	});
      it(`created`, () => {
         expect(testObj).toBeTruthy();
      });
      it(`initialized correctly`, () => {
         expect(testObj.getValueRaw()).toBeTruthy(valueRaw);
      });
   });
   describe(`should be`, () => {
      beforeEach(() => {
         valueParsed = [1, 3, 5, 7];
   	});
      it(`valid with all numbers`, () => {
         valueRaw = JSON.stringify(valueParsed);
   		testObj = new DecorationPoints(valueRaw);
         expect(testObj.validate(`RmstekNumberArray`)).toBe(true);
         expect(testObj.getValue().equals(valueParsed)).toBeTruthy;
      });
      it(`invalid with non numeric`, () => {
         valueRaw = JSON.stringify([1, '3A', 5, 7]);
   		testObj = new DecorationPoints(valueRaw);
         expect(testObj.validate(`DecorationPoints`)).toBe(false);
      });
   });
});
