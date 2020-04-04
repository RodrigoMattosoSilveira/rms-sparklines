import { TestBed } from '@angular/core/testing';

import { LineColor } from './line-color';

describe(`DotRadius`, () => {
   var testObj: LineColor;
   var valueRaw: string;
   var value: number;
   describe(`should be`, () => {
      beforeEach(() => {
         valueRaw = `valueRaw`;
   		testObj = new LineColor(valueRaw);
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
   		testObj = new LineColor(valueRaw);
         expect(testObj.validate(`LineColor`)).toBe(true);
      });
      it(`invalid with non numeric`, () => {
         valueRaw = 'DARKGRAYY';
   		testObj = new LineColor(valueRaw);
         expect(testObj.validate(`LineColor`)).toBe(false);
      });
   });
});
