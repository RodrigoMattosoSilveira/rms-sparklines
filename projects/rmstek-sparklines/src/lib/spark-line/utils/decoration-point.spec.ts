import { TestBed } from '@angular/core/testing';

import { DecorationPoint } from './decoration-point';
import '../../utils/arrayExtensions'

// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

describe(`DecorationPoint`, () => {
   var decorationPoint: DecorationPoint;
   var decorationPointValue: any;
   var decorationPointOK: string = JSON.stringify({index: 0, color: 'grey'});
   var decorationPointNoIndex: string = JSON.stringify({indexxx: 0, color: 'grey'});
   var decorationPointNoColor: string = JSON.stringify({index: 0, colorrrr: 'grey'});
   var decorationPointBadIndex: string = JSON.stringify({index: '0a', color: 'grey'});
   var decorationPointBadColor: string = JSON.stringify({index: 0, color: 'greyyyy'});
   describe(`should be`, () => {
      beforeEach(() => {
   		decorationPoint = new DecorationPoint(decorationPointOK);
         decorationPoint.validate(`DecorationPoint`);
   	});
      it(`created`, () => {
         expect(decorationPoint).toBeTruthy();
      });
      it(`initialized correctly`, () => {
         expect(decorationPoint.getValueRaw()).toBe(decorationPointOK);
      });
      it(`it is  valid`, () => {
         expect(decorationPoint.validate(`DecorationPoint`)).toBe(true);
      });
      it(`have the correct elements`, () => {
         decorationPointValue = decorationPoint.getValue();
         expect(Object.keys(decorationPointValue).length).toBe(2);
         expect(decorationPointValue.hasOwnProperty('index')).toBeTruthy();
         expect(decorationPointValue.hasOwnProperty('color')).toBeTruthy();
         expect(decorationPointValue.index).toBe(0);
         expect(decorationPointValue.color).toBe('grey');
      });
   });
   describe(`should be`, () => {
      beforeEach(() => {
   	});
      it(`valid with decorationPointOK`, () => {
   		decorationPoint = new DecorationPoint(decorationPointOK);
         expect(decorationPoint.validate(`DecorationPoint`)).toBe(true);
      });
      it(`invalid with decorationPointNoIndex`, () => {
   		decorationPoint = new DecorationPoint(decorationPointNoIndex);
         expect(decorationPoint.validate(`DecorationPoint`)).toBe(false);
      });
      it(`invalid with decorationPointBadIndex`, () => {
   		decorationPoint = new DecorationPoint(decorationPointBadIndex);
         expect(decorationPoint.validate(`DecorationPoint`)).toBe(false);
      });
      it(`invalid with decorationPointNoColor`, () => {
   		decorationPoint = new DecorationPoint(decorationPointNoColor);
         expect(decorationPoint.validate(`DecorationPoint`)).toBe(false);
      });
      it(`invalid with decorationPointBadColor`, () => {
   		decorationPoint = new DecorationPoint(decorationPointBadColor);
         expect(decorationPoint.validate(`DecorationPoint`)).toBe(false);
      });
   });
});
