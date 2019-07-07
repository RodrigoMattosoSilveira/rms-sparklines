import { TestBed } from '@angular/core/testing';
import { QualitativeRanges } from './qualitative-ranges';

describe(`QualitativeRanges`, () => {
   var qualitativeRangesRaw: string;
   var qualitativeRanges: QualitativeRanges;
   beforeEach(() => {
      qualitativeRangesRaw = JSON.stringify([{'value': 60, 'color': '#FF7F50'}, {'value': 50, 'color': '#FF6347'}, {'value': 35, 'color': '#FF4500'}]);
   });
   it(`should be created`, () => {
      qualitativeRanges = new QualitativeRanges(qualitativeRangesRaw);
      expect(qualitativeRanges).toBeTruthy();
   });
   describe(`when validating`, () => {
		describe(`a valid`, () => {
			describe(`qualitativeRanges`, () => {
				describe(`it is valid`, () => {
               beforeEach(() => {
                  qualitativeRanges = new QualitativeRanges(qualitativeRangesRaw);               ;
               });
               it('an invalid quality range', () => {
   	            expect(qualitativeRanges.validate()).toBe(true);
   	         });
				});
			});
      });
      describe(`an invalid`, () => {
			describe(`qualitativeRanges it catches`, () => {
				it('an invalid quality range', () => {
               // note the colorss key on the second qualitative range 
               qualitativeRangesRaw = JSON.stringify([{'value': 60, 'color': '#FF7F50'}, {'value': 50, 'colorss': '#FF6347'}, {'value': 35, 'color': '#FF4500'}]);
					qualitativeRanges = new QualitativeRanges(qualitativeRangesRaw);
	            expect(qualitativeRanges.validate()).toBe(false);
	         });
			});
		});
   });
});
