import { TestBed } from '@angular/core/testing';

import { DecorationPoints } from './decoration-points';

describe(`DecorationPoints`, () => {
   var decorationPoints: DecorationPoints;
   var decorationPointsRaw: string;
   describe(`should be`, () => {
      beforeEach(() => {
         decorationPointsRaw = `decorationPointsRaw`;
   		decorationPoints = new DecorationPoints(decorationPointsRaw);
   	});
      it(`created`, () => {
         expect(decorationPoints).toBeTruthy();
      });
      it(`initialized correctly`, () => {
         expect(decorationPoints.getValueRaw()).toBeTruthy(`decorationPointsRaw`);
      });
   });
   describe(`should be`, () => {
      beforeEach(() => {
   	});
      it(`valid with all numbers`, () => {
         decorationPointsRaw = JSON.stringify([1, 3, 5, 7]);
   		decorationPoints = new DecorationPoints(decorationPointsRaw);
         expect(decorationPoints.validate(`DecorationPoints`)).toBe(true);
      });
      it(`invalid with non numeric`, () => {
         decorationPointsRaw = JSON.stringify([1, '3A', 5, 7]);
   		decorationPoints = new DecorationPoints(decorationPointsRaw);
         expect(decorationPoints.validate(`DecorationPoints`)).toBe(false);
      });
   });
});
