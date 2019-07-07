import { TestBed } from '@angular/core/testing';
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
				describe(`scales it correctly`, () => {
               it(`calculates top value correctly`, () => {
   		         expect(false).toEqual(true);
   				});
   				describe(`short them correctly `, () => {
   					it(`ascendently`, () => {
   			         expect(false).toEqual(true);
   					});
   					it(`descendently`, () => {
   			         expect(false).toEqual(true);
   					});
   				});
   				describe(`scaler them correctly `, () => {
   					it(`horizontally`, () => {
   			         expect(false).toEqual(true);
   					});
   					it(`vertically`, () => {
   			         expect(false).toEqual(true);
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
