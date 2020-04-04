import { TestBed } from '@angular/core/testing';

import { ShadeColor } from './shade-color';

describe(`DotRadius`, () => {
   var testObj: ShadeColor;
   var valueRaw: string;
   var value: number;
   describe(`should be`, () => {
      beforeEach(() => {
         valueRaw = `valueRaw`;
   		testObj = new ShadeColor(valueRaw);
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
   		testObj = new ShadeColor(valueRaw);
         expect(testObj.validate(`ShadeColor`)).toBe(true);
      });
      it(`invalid with non numeric`, () => {
         valueRaw = 'DARKGRAYY';
   		testObj = new ShadeColor(valueRaw);
         expect(testObj.validate(`ShadeColor`)).toBe(false);
      });
   });
});
