import { TestBed } from '@angular/core/testing';

import {LinePoints } from './line-points';

describe(`DecorationPoints`, () => {
   var testaObj: LinePoints;
   var valueRaw: string;
   describe(`should be`, () => {
      beforeEach(() => {
         valueRaw = `decorationPointsRaw`;
   		testaObj = new LinePoints(valueRaw);
   	});
      it(`created`, () => {
         expect(testaObj).toBeTruthy();
      });
      it(`initialized correctly`, () => {
         expect(testaObj.getValueRaw()).toBeTruthy(`decorationPointsRaw`);
      });
   });
   describe(`should be`, () => {
      beforeEach(() => {
   	});
      it(`valid with all numbers`, () => {
         valueRaw = JSON.stringify([1, 3, 5, 7]);
   		testaObj = new LinePoints(valueRaw);
         expect(testaObj.validate(`LinePoints`)).toBe(true);
      });
      it(`invalid with non numeric`, () => {
         valueRaw = JSON.stringify([1, '3A', 5, 7]);
   		testaObj = new LinePoints(valueRaw);
         expect(testaObj.validate(`LinePoints`)).toBe(false);
      });
   });
});
