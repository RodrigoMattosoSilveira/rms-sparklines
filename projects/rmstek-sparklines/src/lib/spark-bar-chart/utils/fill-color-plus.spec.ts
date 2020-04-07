import { TestBed } from '@angular/core/testing';

import { FillColorPlus } from './fill-color-plus';

describe(`DotRadius`, () => {
   var testObj: FillColorPlus;
   var valueRaw: string;
   var value: number;
   describe(`should be`, () => {
      beforeEach(() => {
         valueRaw = `valueRaw`;
   		testObj = new FillColorPlus(valueRaw);
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
   		testObj = new FillColorPlus(valueRaw);
         expect(testObj.validate(`ShadeColor`)).toBe(true);
      });
      it(`invalid with non numeric`, () => {
         valueRaw = 'DARKGRAYY';
   		testObj = new FillColorPlus(valueRaw);
         expect(testObj.validate(`ShadeColor`)).toBe(false);
      });
   });
});
