import { TestBed } from '@angular/core/testing';

import { DotRadius } from './dot-radius';

describe(`DotRadius`, () => {
   var testObj: DotRadius;
   var valueRaw: string;
   var value: number;
   describe(`should be`, () => {
      beforeEach(() => {
         valueRaw = `valueRaw`;
   		testObj = new DotRadius(valueRaw);
   	});
      it(`created`, () => {
         expect(testObj).toBeTruthy();
      });
      it(`initialized correctly`, () => {
         expect(testObj.getValueRaw()).toBe(`valueRaw`);
      });
   });
   describe(`should be`, () => {
      beforeEach(() => {
   	});
      it(`valid with all numbers`, () => {
         valueRaw = '1';
   		testObj = new DotRadius(valueRaw);
         expect(testObj.validate(`DotRadius`)).toBe(true);
      });
      it(`invalid with non numeric`, () => {
         valueRaw = `1A`;
   		testObj = new DotRadius(valueRaw);
         expect(testObj.validate(`DotRadius`)).toBe(false);
      });
   });
});
