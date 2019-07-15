import { TestBed } from '@angular/core/testing';

import { RmstekNumber } from './rmstek-number';

describe(`Number`, () => {
   var rmstekNumber: RmstekNumber;
   var valueRaw: string;
   var value: number;
   describe(`should be`, () => {
      beforeEach(() => {
         valueRaw = `valueRaw`;
   		rmstekNumber = new RmstekNumber(valueRaw);
   	});
      it(`created`, () => {
         expect(rmstekNumber).toBeTruthy();
      });
      it(`initialized correctly`, () => {
         expect(rmstekNumber.getValueRaw()).toBeTruthy(`valueRaw`);
      });
   });
   describe(`should be`, () => {
      beforeEach(() => {
   	});
      it(`valid with all numbers`, () => {
         valueRaw = '1';
   		rmstekNumber = new RmstekNumber(valueRaw);
         expect(rmstekNumber.validate(`Number`)).toBe(true);
      });
      it(`invalid with non numeric`, () => {
         valueRaw = `1A`;
   		rmstekNumber = new RmstekNumber(valueRaw);
         expect(rmstekNumber.validate(`Number`)).toBe(false);
      });
   });
});
