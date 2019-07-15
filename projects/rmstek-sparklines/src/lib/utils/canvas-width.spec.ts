import { TestBed } from '@angular/core/testing';

import { CanvasWidth } from './canvas-width';

describe(`DotRadius`, () => {
   var testObj: CanvasWidth;
   var valueRaw: string;
   var value: number;
   describe(`should be`, () => {
      beforeEach(() => {
         valueRaw = `valueRaw`;
   		testObj = new CanvasWidth(valueRaw);
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
   		testObj = new CanvasWidth(valueRaw);
         expect(testObj.validate(`Number`)).toBe(true);
      });
      it(`invalid with non numeric`, () => {
         valueRaw = `1A`;
   		testObj = new CanvasWidth(valueRaw);
         expect(testObj.validate(`Number`)).toBe(false);
      });
   });
});
