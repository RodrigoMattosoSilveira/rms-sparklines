import { Constants } from './constants';

export class HelperMethods {
   constructor() { }
   static computeOrientation(canvasEl: HTMLCanvasElement): string {
      var orientation: string;
      orientation = canvasEl.width > canvasEl.height ? Constants.HORIZONTAL : Constants.VERTICAL;
      return orientation;
   }
}
