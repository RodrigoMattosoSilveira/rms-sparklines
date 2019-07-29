import { TestBed } from '@angular/core/testing';

import { DecorationPoint } from './decoration-point';

describe(`DecorationPoints`, () => {
   var decorationPoint: DecorationPoint;
   var value: string;
   describe(`should be`, () => {
      beforeEach(() => {
         value = '5'
   		decorationPoint = new DecorationPoint(value);
   	});
      it(`created`, () => {
         expect(decorationPoint).toBeTruthy();
      });
   });
});
