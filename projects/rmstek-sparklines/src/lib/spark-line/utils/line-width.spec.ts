import { TestBed } from '@angular/core/testing';

import { LineWidth } from './line-width';

describe(`DotRadius`, () => {
   var testObj: LineWidth;
   var valueRaw: string;
   var value: number;
   describe(`should be`, () => {
      beforeEach(() => {
         valueRaw = `valueRaw`;
   		testObj = new LineWidth(valueRaw);
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
         valueRaw = '1';
   		testObj = new LineWidth(valueRaw);
         expect(testObj.validate(`LineWidth`)).toBe(true);
      });
      it(`invalid with non numeric`, () => {
         valueRaw = `1A`;
   		testObj = new LineWidth(valueRaw);
         expect(testObj.validate(`LineWidth`)).toBe(false);
      });
   });
});
