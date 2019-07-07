import { TestBed } from '@angular/core/testing';
import { CoordinateTip } from '../utils/coordinate-tip';
import { Constants } from '../utils/constants';
import { FeatureMeasure } from './feature-measure';
import { HelperMethods } from '../utils/helper-methods';
import { Rectangle } from '../utils/rectangle';

describe(`FeatureMeasure`, () => {
   var featureMeasureRaw: string;
   var featureMeasure: FeatureMeasure;
   beforeEach(() => {
      featureMeasureRaw = JSON.stringify({'value': 57, 'color': 'black'});;
   });
   it(`should be created`, () => {
      featureMeasure = new FeatureMeasure(``);
      expect(featureMeasure).toBeTruthy();
   });
   describe(`when validating`, () => {
		describe(`a valid`, () => {
			describe(`featureMeasure`, () => {
				describe(`scales it correctly`, () => {
               var canvasEl: HTMLCanvasElement;
               var topValue: number;
               beforeEach(() => {
                  canvasEl = document.createElement('canvas');
                  topValue = 60;
                  featureMeasure = new FeatureMeasure(featureMeasureRaw);
                  featureMeasure.validate();
               });
               it('is valid ', () => {
                  expect(featureMeasure.getValid()).toBe(true);
               });
               it('horizontally', () => {
                  canvasEl.width = 128;
                  canvasEl.height = 32;
                  featureMeasure.scaleToCanvas(canvasEl, Constants.HORIZONTAL, topValue);
                  expect(featureMeasure.getFromX()).toBe(0);
                  expect(featureMeasure.getFromY()).toBe(canvasEl.height/3);
                  expect(featureMeasure.getWidth()).toBe(featureMeasure.value/topValue * canvasEl.width);
                  expect(featureMeasure.getHeight()).toBe(canvasEl.height/3);
               });
               it('vertically', () => {
                  canvasEl.width = 32;
                  canvasEl.height = 128;
                  featureMeasure.scaleToCanvas(canvasEl, Constants.VERTICAL, topValue);
                  expect(featureMeasure.getFromX()).toBe(canvasEl.width/3);
                  expect(featureMeasure.getFromY()).toBe(0);
                  expect(featureMeasure.getWidth()).toBe(canvasEl.width/3);
                  expect(featureMeasure.getHeight()).toBe(featureMeasure.value/topValue * canvasEl.height);
               });
				});
            describe(`build coordinate tips`, () => {
               var canvasEl: HTMLCanvasElement;
               var coordinateTip: CoordinateTip;
               var orientation: string;
               var tipRect: Rectangle;
               var topValue: number;
               beforeEach(() => {
                  canvasEl = document.createElement('canvas');
                  featureMeasure = new FeatureMeasure(featureMeasureRaw);
                  featureMeasure.validate();
                  topValue = 60;
               });
               it('horizontally', () => {
                  canvasEl.width = 128;
                  canvasEl.height = 32;
                  orientation = HelperMethods.computeOrientation(canvasEl)
                  featureMeasure.scaleToCanvas(canvasEl, orientation, topValue);
                  coordinateTip = featureMeasure.buildCoordinateTip()
                  tipRect = coordinateTip.getRect();
                  expect(coordinateTip.getColor()).toBe('red');
                  expect(coordinateTip.getTip()).toBe(featureMeasure.getValue().toString());
                  expect(tipRect.getX()).toBe(featureMeasure.getFromX());
                  expect(tipRect.getY()).toBe(featureMeasure.getFromY());
                  expect(tipRect.getWidth()).toBe(featureMeasure.getWidth());
                  expect(tipRect.getHeight()).toBe(featureMeasure.getHeight());
               });
               it('vertically', () => {
                  canvasEl.width = 32;
                  canvasEl.height = 128;
                  orientation = HelperMethods.computeOrientation(canvasEl)
                  featureMeasure.scaleToCanvas(canvasEl, orientation, topValue);
                  coordinateTip = featureMeasure.buildCoordinateTip()
                  tipRect = coordinateTip.getRect();
                  expect(coordinateTip.getColor()).toBe('red');
                  expect(coordinateTip.getTip()).toBe(featureMeasure.getValue().toString());
                  expect(tipRect.getX()).toBe(featureMeasure.getFromX());
                  expect(tipRect.getY()).toBe(featureMeasure.getFromY());
                  expect(tipRect.getWidth()).toBe(featureMeasure.getWidth());
                  expect(tipRect.getHeight()).toBe(featureMeasure.getHeight());
               });
            });
			});
      });
      describe(`an invalid`, () => {
			describe(`featureMeasureRaw it catches`, () => {
				it('a missing an attribute', () => {
					featureMeasureRaw = JSON.stringify({'value': 57});
					featureMeasure = new FeatureMeasure(featureMeasureRaw);
	            expect(featureMeasure.validate()).toBe(false);
	         });
	         it('an extra an attribute', () => {
					featureMeasureRaw = JSON.stringify({'value': 57, 'color': 'black', 'extraAttribute': 3});
					featureMeasure = new FeatureMeasure(featureMeasureRaw);
	            expect(featureMeasure.validate()).toBe(false);
	         });
	         it('an invalid attribute key', () => {
					featureMeasureRaw = JSON.stringify({'value': 57, 'colorrrr': 'black'});
					featureMeasure = new FeatureMeasure(featureMeasureRaw);
	            expect(featureMeasure.validate()).toBe(false);
	         });
	         it('a non non numeric value', () => {
					featureMeasureRaw = JSON.stringify({'value': '5A', 'color': 'black'});
					featureMeasure = new FeatureMeasure(featureMeasureRaw);
	            expect(featureMeasure.validate()).toBe(false);
	         });
	         it('an invalid color', () => {
					featureMeasureRaw = JSON.stringify({'value': 57, 'color': '#80808G'});
					featureMeasure = new FeatureMeasure(featureMeasureRaw);
	            expect(featureMeasure.validate()).toBe(false);
	         });
			});
		});
   });
});
