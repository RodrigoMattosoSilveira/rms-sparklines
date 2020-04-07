import { TestBed } from '@angular/core/testing';

import { FillColorZero } from './fill-color-zero';

describe(`DotRadius`, () => {
   var testObj: FillColorZero;
   var valueRaw: string;
   var value: number;
   describe(`should be`, () => {
      beforeEach(() => {
         valueRaw = `valueRaw`;
   		testObj = new FillColorZero(valueRaw);
   	});
      it(`created`, () => {
         expect(testObj).toBeTruthy();
      });
      it(`initialized correctly`, () => {
         expect(testObj.getValueRaw()).toBeTruthy(`valueRaw`);
      });
   });
   describe(`should be`, () => {
      beforeEach(() => {
   	});
      it(`valid with all numbers`, () => {
         valueRaw = 'DARKGRAY';
   		testObj = new FillColorZero(valueRaw);
         expect(testObj.validate(`ShadeColor`)).toBe(true);
      });
      it(`invalid with non numeric`, () => {
         valueRaw = 'DARKGRAYY';
   		testObj = new FillColorZero(valueRaw);
         expect(testObj.validate(`ShadeColor`)).toBe(false);
      });
   });
});
