import { TestBed } from '@angular/core/testing';
import { Constants } from '../utils/constants';
import { QualitativeRange } from './qualitative-range';
import { HelperMethods } from '../utils/helper-methods';
import { Rectangle } from '../utils/rectangle';
import { Tooltip } from '../utils/tooltip';

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
               describe(`build coordinate tips`, () => {
                  var canvasEl: HTMLCanvasElement;
                  var tooltip: Tooltip;
                  var orientation: string;
                  var tipRect: Rectangle;
                  var topValue: number;
                  beforeEach(() => {
                     canvasEl = document.createElement('canvas');
                     qualitativeRange = new QualitativeRange(qualitativeRangeRaw);
                     qualitativeRange.validate();
                     topValue = 60;
                  });
                  it('horizontally', () => {
                     canvasEl.width = 128;
                     canvasEl.height = 32;
                     orientation = HelperMethods.computeOrientation(canvasEl)
                     qualitativeRange.scaleToCanvas(canvasEl, orientation, topValue);
                     tooltip = qualitativeRange.buildCoordinateTip()
                     tipRect = tooltip.getRect();
                     expect(tooltip.getColor()).toBe('red');
                     expect(tooltip.getTip()).toBe(qualitativeRange.getValue().toString());
                     expect(tipRect.getX()).toBe(0);
                     expect(tipRect.getY()).toBe(0);
                     expect(tipRect.getWidth()).toBe(qualitativeRange.getWidth());
                     expect(tipRect.getHeight()).toBe(qualitativeRange.getHeight());
                  });
                  it('vertically', () => {
                     canvasEl.width = 32;
                     canvasEl.height = 128;
                     orientation = HelperMethods.computeOrientation(canvasEl)
                     qualitativeRange.scaleToCanvas(canvasEl, orientation, topValue);
                     tooltip = qualitativeRange.buildCoordinateTip()
                     tipRect = tooltip.getRect();
                     expect(tooltip.getColor()).toBe('red');
                     expect(tooltip.getTip()).toBe(qualitativeRange.getValue().toString());
                     expect(tipRect.getX()).toBe(0);
                     expect(tipRect.getY()).toBe(0);
                     expect(tipRect.getWidth()).toBe(qualitativeRange.getWidth());
                     expect(tipRect.getHeight()).toBe(qualitativeRange.getHeight());
                  });
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
