import { TestBed } from '@angular/core/testing';
import { FeatureMeasure } from './feature-measure';

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
