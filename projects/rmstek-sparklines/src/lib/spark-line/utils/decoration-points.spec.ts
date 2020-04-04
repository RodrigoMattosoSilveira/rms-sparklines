import { TestBed } from '@angular/core/testing';

import { DecorationPoint } from './decoration-point';
import { DecorationPoints } from './decoration-points';

describe(`DecorationPoints`, () => {
   var decorationPoints: DecorationPoints;
   var decorationPointsValue: Array<DecorationPoint>;
   var decorationPointsOK: string = JSON.stringify([{index: 0, color: 'grey'}, {index: 3, color: 'blue'}, {index: 5, color: 'red'}])
   var decorationPointsNoIndex: string = JSON.stringify([{indexxx: 0, color: 'grey'}, {index: 3, color: 'blue'}, {index: 5, color: 'red'}])
   var decorationPointsNoColor: string = JSON.stringify([{index: 0, color: 'grey'}, {index: 3, colorrr: 'blue'}, {index: 5, color: 'red'}])
   var decorationPointsBadIndex: string = JSON.stringify([{index: '0a', color: 'grey'}, {index: 3, color: 'blue'}, {index: 5, color: 'red'}])
   var decorationPointsBadColor: string = JSON.stringify([{index: 0, color: 'grey'}, {index: 3, color: 'blueeee'}, {index: 5, color: 'red'}])
   describe(`should be`, () => {
      beforeEach(() => {
   		decorationPoints = new DecorationPoints(decorationPointsOK);
         decorationPoints.validate(`DecorationPoints`);
   	});
      it(`created`, () => {
         expect(decorationPoints).toBeTruthy();
      });
      it(`initialized correctly`, () => {
         expect(decorationPoints.getValueRaw()).toBeTruthy(`decorationPointsRaw`);
      });
      it(`it is  valid`, () => {
         expect(decorationPoints.validate(`DecorationPoints`)).toBe(true);
      });
      it(`have the correct elements`, () => {
         decorationPointsValue = decorationPoints.getValue();
         expect(decorationPointsValue.length).toBe(3);
         expect(decorationPointsValue[0].geIndex()).toBe(0);
         expect(decorationPointsValue[0].getColor()).toBe('grey');
         expect(decorationPointsValue[1].geIndex()).toBe(3);
         expect(decorationPointsValue[1].getColor()).toBe('blue');
         expect(decorationPointsValue[2].geIndex()).toBe(5);
         expect(decorationPointsValue[2].getColor()).toBe('red');
      });
   });
   describe(`should be`, () => {
      beforeEach(() => {
   	});
      it(`valid with decorationPointsOK`, () => {
   		decorationPoints = new DecorationPoints(decorationPointsOK);
         expect(decorationPoints.validate(`DecorationPoints`)).toBe(true);
      });
      it(`invalid with decorationPointsNoIndex`, () => {
   		decorationPoints = new DecorationPoints(decorationPointsNoIndex);
         expect(decorationPoints.validate(`DecorationPoints`)).toBe(false);
      });
      it(`invalid with decorationPointsBadIndex`, () => {
   		decorationPoints = new DecorationPoints(decorationPointsBadIndex);
         expect(decorationPoints.validate(`DecorationPoints`)).toBe(false);
      });
      it(`invalid with decorationPointsNoColor`, () => {
   		decorationPoints = new DecorationPoints(decorationPointsNoColor);
         expect(decorationPoints.validate(`DecorationPoints`)).toBe(false);
      });
      it(`invalid with decorationPointsBadColor`, () => {
   		decorationPoints = new DecorationPoints(decorationPointsBadColor);
         expect(decorationPoints.validate(`DecorationPoints`)).toBe(false);
      });
   });
});
