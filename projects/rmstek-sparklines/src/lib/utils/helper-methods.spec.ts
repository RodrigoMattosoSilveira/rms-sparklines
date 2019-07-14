import { Constants } from './constants';
import { HelperMethods } from './helper-methods';

describe(`QualitativeRange`, () => {
   describe(`computeOrientation`, () => {
      var canvasEl: HTMLCanvasElement;
      var topValue: number;
      beforeEach(() => {
         canvasEl = document.createElement('canvas');
      });
      it('works for width > height', () => {
         canvasEl.width = 128;
         canvasEl.height = 32;
         expect(HelperMethods.computeOrientation(canvasEl)).toEqual(Constants.HORIZONTAL);
      });
      it('works for width < height', () => {
         canvasEl.width = 32;
         canvasEl.height = 128;
         expect(HelperMethods.computeOrientation(canvasEl)).toEqual(Constants.VERTICAL);
      });
      it('works for width === height', () => {
         canvasEl.width = 128;
         canvasEl.height = 128;
         expect(HelperMethods.computeOrientation(canvasEl)).toEqual(Constants.VERTICAL);
      });
   });
});
