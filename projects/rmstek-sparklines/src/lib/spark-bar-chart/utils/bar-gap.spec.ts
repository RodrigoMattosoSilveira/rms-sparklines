import { TestBed } from '@angular/core/testing';

import { BarGap } from './bar-gap';

describe(`BarGap`, () => {
   var testObj: BarGap;
   var valueRaw: string;
   var value: number;
   describe(`should be`, () => {
      beforeEach(() => {
        valueRaw = `valueRaw`;
     		testObj = new BarGap(valueRaw);
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
   		testObj = new BarGap(valueRaw);
         expect(testObj.validate(`Number`)).toBe(true);
      });
      it(`invalid with non numeric`, () => {
         valueRaw = `1A`;
   		testObj = new BarGap(valueRaw);
         expect(testObj.validate(`Number`)).toBe(false);
      });
   });
});
