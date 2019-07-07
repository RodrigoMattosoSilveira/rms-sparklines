import { TestBed } from '@angular/core/testing';
import { ComparativeMeasure } from './comparative-measure';

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
					it(`horizontally`, () => {
			         expect(false).toEqual(true);
					});
					it(`vertically`, () => {
			         expect(false).toEqual(true);
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
