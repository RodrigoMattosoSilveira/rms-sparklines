import { TestBed } from '@angular/core/testing';
import { Constants } from '../utils/constants';
import { QualitativeRange } from './qualitative-range';

describe(`QualitativeRange`, () => {
   var qualitativeRangeRaw: string;
   var qualitativeRange: QualitativeRange;
   beforeEach(() => {
      qualitativeRangeRaw = JSON.stringify({'value': 57, 'color': 'black'});;
   });
   it(`should be created`, () => {
      qualitativeRange = new QualitativeRange(``);
      expect(qualitativeRange).toBeTruthy();
   });
   describe(`when validating`, () => {
		describe(`a valid`, () => {
			describe(`qualitativeRange`, () => {
            describe(`scales them correctly `, () => {
               var canvasEl: HTMLCanvasElement;
               var topValue: number;
               beforeEach(() => {
                  canvasEl = document.createElement('canvas');
                  topValue = 60;
                  qualitativeRange = new QualitativeRange(qualitativeRangeRaw);
                  qualitativeRange.validate();
               });
               it('is valid ', () => {
                  expect(qualitativeRange.getValid()).toBe(true);
               });
               it('horizontally', () => {
                  canvasEl.width = 128;
                  canvasEl.height = 32;
                  qualitativeRange.scaleToCanvas(canvasEl, Constants.HORIZONTAL, topValue);
                  expect(qualitativeRange.getWidth()).toEqual(qualitativeRange.getValue()/topValue * canvasEl.width);
                  expect(qualitativeRange.getHeight()).toEqual(canvasEl.height);
               });
               it('vertically', () => {
                  canvasEl.width = 32;
                  canvasEl.height = 128;
                  qualitativeRange.scaleToCanvas(canvasEl, Constants.VERTICAL, topValue);
                  expect(qualitativeRange.getWidth()).toEqual(canvasEl.width);
                  expect(qualitativeRange.getHeight()).toEqual(qualitativeRange.getValue()/topValue * canvasEl.height);
               });
            });
         });
      });
      describe(`an invalid`, () => {
			describe(`featureMeasureRaw it catches`, () => {
				it('a missing an attribute', () => {
					qualitativeRangeRaw = JSON.stringify({'value': 57});
					qualitativeRange = new QualitativeRange(qualitativeRangeRaw);
	            expect(qualitativeRange.validate()).toBe(false);
	         });
	         it('an extra an attribute', () => {
					qualitativeRangeRaw = JSON.stringify({'value': 57, 'color': 'black', 'extraAttribute': 3});
					qualitativeRange = new QualitativeRange(qualitativeRangeRaw);
	            expect(qualitativeRange.validate()).toBe(false);
	         });
	         it('an invalid attribute key', () => {
					qualitativeRangeRaw = JSON.stringify({'value': 57, 'colorrrr': 'black'});
					qualitativeRange = new QualitativeRange(qualitativeRangeRaw);
	            expect(qualitativeRange.validate()).toBe(false);
	         });
	         it('a non non numeric value', () => {
					qualitativeRangeRaw = JSON.stringify({'value': '5A', 'color': 'black'});
					qualitativeRange = new QualitativeRange(qualitativeRangeRaw);
	            expect(qualitativeRange.validate()).toBe(false);
	         });
	         it('an invalid color', () => {
					qualitativeRangeRaw = JSON.stringify({'value': 57, 'color': '#80808G'});
					qualitativeRange = new QualitativeRange(qualitativeRangeRaw);
	            expect(qualitativeRange.validate()).toBe(false);
	         });
			});
		});
   });
});
