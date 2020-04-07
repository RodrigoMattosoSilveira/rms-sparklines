import { TestBed } from '@angular/core/testing';

import { FillColorMinus } from './fill-color-minus';

describe(`DotRadius`, () => {
   var testObj: FillColorMinus;
   var valueRaw: string;
   var value: number;
   describe(`should be`, () => {
      beforeEach(() => {
         valueRaw = `valueRaw`;
   		testObj = new FillColorMinus(valueRaw);
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
   		testObj = new FillColorMinus(valueRaw);
         expect(testObj.validate(`ShadeColor`)).toBe(true);
      });
      it(`invalid with non numeric`, () => {
         valueRaw = 'DARKGRAYY';
   		testObj = new FillColorMinus(valueRaw);
         expect(testObj.validate(`ShadeColor`)).toBe(false);
      });
   });
});
