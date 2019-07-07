import { TestBed } from '@angular/core/testing';
import { ComparativeMeasure } from './comparative-measure';
import { Constants } from '../utils/constants'

describe(`ComparativeMeasure`, () => {
   var comparativeMeasureRaw: string;
   var comparativeMeasure: ComparativeMeasure;
   beforeEach(() => {
      comparativeMeasureRaw = JSON.stringify({'value': 57, 'color': 'black', 'lineWidth': 3});;
   });
   it(`should be created`, () => {
      comparativeMeasure = new ComparativeMeasure(``);
      expect(comparativeMeasure).toBeTruthy();
   });
   describe(`when validating`, () => {
		describe(`a valid`, () => {
			describe(`comparativeMeasure`, () => {
				describe(`scales it correctly`, () => {
               var canvasEl: HTMLCanvasElement;
               var topValue: number;
               beforeEach(() => {
                  canvasEl = document.createElement('canvas');
                  topValue = 60;
                  comparativeMeasure = new ComparativeMeasure(comparativeMeasureRaw);
                  comparativeMeasure.validate();
               });
               it('is valid ', () => {
                  expect(comparativeMeasure.getValid()).toBe(true);
               });
               it('horizontally', () => {
                  canvasEl.width = 128;
                  canvasEl.height = 32;
                  comparativeMeasure.scaleToCanvas(canvasEl, Constants.HORIZONTAL, topValue);
                  expect(comparativeMeasure.getFromX()).toBe(comparativeMeasure.getValue()/topValue * canvasEl.width);
                  expect(comparativeMeasure.getFromY()).toBe(canvasEl.height/3);
                  expect(comparativeMeasure.getToX()).toBe(comparativeMeasure.getValue()/topValue * canvasEl.width);
                  expect(comparativeMeasure.getToY()).toBe(2*canvasEl.height/3);
               });
               it('vertically', () => {
                  canvasEl.width = 32;
                  canvasEl.height = 128;
                  comparativeMeasure.scaleToCanvas(canvasEl, Constants.VERTICAL, topValue);
                  expect(comparativeMeasure.getFromX()).toBe(canvasEl.width/3);
                  expect(comparativeMeasure.getFromY()).toBe(comparativeMeasure.getValue()/topValue * canvasEl.height);
                  expect(comparativeMeasure.getToX()).toBe(2*canvasEl.width/3);
                  expect(comparativeMeasure.getToY()).toBe(comparativeMeasure.getValue()/topValue * canvasEl.height);
               });
				});
			});
      });
      describe(`an invalid`, () => {
			describe(`comparativeMeasureRaw it catches`, () => {
				it('a missing an attribute', () => {
					comparativeMeasureRaw = JSON.stringify({'value': 57, 'color': 'black'});
					comparativeMeasure = new ComparativeMeasure(comparativeMeasureRaw);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
	         it('an extra an attribute', () => {
					comparativeMeasureRaw = JSON.stringify({'value': 57, 'color': 'black', 'lineWidth': 3, 'extraAttribute': 3});
					comparativeMeasure = new ComparativeMeasure(comparativeMeasureRaw);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
	         it('an invalid attribute key', () => {
					comparativeMeasureRaw = JSON.stringify({'value': 57, 'color': 'black', 'lineWidthhh': 3});
					comparativeMeasure = new ComparativeMeasure(comparativeMeasureRaw);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
	         it('a non non numeric value', () => {
					comparativeMeasureRaw = JSON.stringify({'value': '5A', 'color': 'black', 'lineWidth': 3});
					comparativeMeasure = new ComparativeMeasure(comparativeMeasureRaw);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
	         it('an invalid color', () => {
					comparativeMeasureRaw = JSON.stringify({'value': 57, 'color': '#80808G', 'lineWidth': 3});
					comparativeMeasure = new ComparativeMeasure(comparativeMeasureRaw);
	            expect(comparativeMeasure.validate()).toBe(false);
	         });
			});
		});
   });
});
