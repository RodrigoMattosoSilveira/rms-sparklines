import { TestBed } from '@angular/core/testing';
import { QualitativeRanges } from './qualitative-ranges';
import { QualitativeRange } from './qualitative-range';

describe(`QualitativeRanges`, () => {
   var qualitativeRangesRaw: string;
   var qualitativeRanges: QualitativeRanges;
   beforeEach(() => {
      qualitativeRangesRaw = JSON.stringify([{'value': 60, 'color': '#FF7F50'}, {'value': 35, 'color': '#FF4500'}, {'value': 50, 'color': '#FF6347'}]);
   });
   it(`should be created`, () => {
      qualitativeRanges = new QualitativeRanges(qualitativeRangesRaw);
      expect(qualitativeRanges).toBeTruthy();
   });
   describe(`when validating`, () => {
		describe(`a valid`, () => {
			describe(`it`, () => {
            beforeEach(() => {
               qualitativeRanges = new QualitativeRanges(qualitativeRangesRaw);
            });
            it('likes it', () => {
               expect(qualitativeRanges.validate()).toBe(true);
            });
			});
      });
      describe(`an invalid`, () => {
         describe(`it`, () => {
            beforeEach(() => {
               // note the colorss key on the second qualitative range
               qualitativeRangesRaw = JSON.stringify([{'value': 60, 'color': '#FF7F50'}, {'value': 50, 'colorss': '#FF6347'}, {'value': 35, 'color': '#FF4500'}]);
               qualitativeRanges = new QualitativeRanges(qualitativeRangesRaw);
            });
            it('likes does not like it', () => {
               expect(qualitativeRanges.validate()).toBe(false);
            });
			});
		});
   });
   describe(`computes top value`, () => {
      beforeEach(() => {
         // note the colorss key on the second qualitative range
         qualitativeRanges = new QualitativeRanges(qualitativeRangesRaw);
         qualitativeRanges.validate();             ;
      });
      it('likes it', () => {
         expect(qualitativeRanges.computeTopValue()).toBe(60);
      });
   });
   describe(`scales qualitativeRanges correctly`, () => {
      var canvasEl: HTMLCanvasElement;
      var topValue: number;
      beforeEach(() => {
         canvasEl = document.createElement('canvas');
         topValue = 60;
         qualitativeRanges = new QualitativeRanges(qualitativeRangesRaw);
         qualitativeRanges.validate();             ;
      });
      it('horizontally', () => {
         canvasEl.width = 128;
         canvasEl.height = 32;
         qualitativeRanges.scaleToCanvas(canvasEl);
         for(let i=0; i < qualitativeRanges.getQualitativeRangesArray().length; i++) {
            let qualitativeRange: QualitativeRange = qualitativeRanges.getQualitativeRangesArray()[i];
            expect(qualitativeRange.getWidth()).toEqual(qualitativeRange.getValue()/topValue * canvasEl.width);
            expect(qualitativeRange.getHeight()).toEqual(canvasEl.height);
         }
      });
      it('vertically', () => {
         canvasEl.width = 32;
         canvasEl.height = 128;
         qualitativeRanges.scaleToCanvas(canvasEl);
         for(let i=0; i < qualitativeRanges.getQualitativeRangesArray().length; i++) {
            let qualitativeRange: QualitativeRange = qualitativeRanges.getQualitativeRangesArray()[i];
            expect(qualitativeRange.getWidth()).toEqual(canvasEl.width);
            expect(qualitativeRange.getHeight()).toEqual(qualitativeRange.getValue()/topValue * canvasEl.height);
         }
      });
   });
   describe(`Sorts them correctly`, () => {
      var qualitativeRangeGoodSorted: Array<QualitativeRange>;
      beforeEach(() => {
         // note the colorss key on the second qualitative range
         qualitativeRanges = new QualitativeRanges(qualitativeRangesRaw);
         qualitativeRanges.validate();             ;
      });
      it('in ascending order', () => {
         qualitativeRangeGoodSorted = qualitativeRanges.sortQualitativeRangeHighLow();
         for(let i = 0; i < qualitativeRangeGoodSorted.length; i++) {
            if (i < qualitativeRangeGoodSorted.length - 1) {
               expect(qualitativeRangeGoodSorted[i].getValue()).toBeGreaterThanOrEqual(qualitativeRangeGoodSorted[i+1].getValue())
            }
         }
      });
      it('in descending order', () => {
         qualitativeRangeGoodSorted = qualitativeRanges.sortQualitativeRangeLowHigh();
         for(let i = 0; i < qualitativeRangeGoodSorted.length; i++) {
            if (i < qualitativeRangeGoodSorted.length - 1) {
               expect(qualitativeRangeGoodSorted[i].getValue()).toBeLessThanOrEqual(qualitativeRangeGoodSorted[i+1].getValue())
            }
         }
      });
   });

});
