import { ElementRef,  Injectable } from '@angular/core';

import { Constants } from './constants';
import { CssColorString } from '../valid-colors';
import { FeatureMeasure } from './featureMeasure';
import { QualitativeRange } from './qualitativeRange'


@Injectable({
  providedIn: 'root'
})
export class BulletChartService {
   cssColorString:CssColorString;

   constructor() { }

   validate(qualitativeRanges:any[], sparklineCanvas: ElementRef): boolean {

      let valid = true;
      this.cssColorString = new CssColorString();

      // canvasEl must be provided
      if (sparklineCanvas === null) {
          console.log(`BulletChartService:validate - sparklineCanvas is null`);
          valid = false;
      }
      if (sparklineCanvas.nativeElement.tagName !== `CANVAS`) {
          console.log(`BulletChartService:validate - sparklineCanvas tag is not CANVAS`);
          valid = false;
      }

      if (qualitativeRanges.length == 0) {
          console.log(`BulletChartService:validate - qualitativeRanges array is empty`);
          valid = false;
      }

      if (qualitativeRanges.length > 3) {
          console.log(`BulletChartService:validate - qualitativeRanges array has more than 3 qualitativeRanges`);
          valid = false;
      }

      for (var i = 0; i < qualitativeRanges.length; i++) {
         if(!qualitativeRanges[i].hasOwnProperty("value")) {
            console.log(`BulletChartService:validate - qualitativeRange does not have the value property: ` + JSON.stringify(qualitativeRanges[i]));
            valid = false;
         }
         if(!qualitativeRanges[i].hasOwnProperty("color")) {
            console.log(`BulletChartService:validate - qualitativeRange does not have the color property: ` + JSON.stringify(qualitativeRanges[i]));
            valid = false;
         }
         if (!this.cssColorString.isValid(qualitativeRanges[i].color)) {
             console.log(`BulletChartService:validate - qualitativeRange color is invalid: ` +  + JSON.stringify(qualitativeRanges[i]));
             valid = false;
         }
      }

      return valid;
   }

   setupCanvasEl(sparklineCanvas: ElementRef,
        width: number,
        height: number,
        className: string,
     ): HTMLCanvasElement {

     const canvasEl = sparklineCanvas.nativeElement;
     canvasEl.width = width;
     canvasEl.height = height;
     canvasEl.style.display = 'inline-block';
     canvasEl.style.verticalAlign = 'top';
     if (className && className !== ``) { canvasEl.classList.add(className); }
     return canvasEl;
  }

   setOrientation(canvasEl: HTMLCanvasElement): string {
      return canvasEl.width > canvasEl.height ? Constants.HORIZONTAL : Constants.VERTICAL;
   }

   getQualityRanges(qualitativeRangesString: string): QualitativeRange[] {
      var qualitativeRanges: QualitativeRange[] = [];
      var qrs = JSON.parse(qualitativeRangesString);
      for (var i = 0; i < qrs.length; i++) {
         var value = qrs[i]['value'];
         var color = qrs[i]['color']
         var qualitativeRange = new QualitativeRange(value, color);
         qualitativeRanges.push(qualitativeRange);
      }
      return qualitativeRanges;
   }

   getTopValue(qualitativeRanges: QualitativeRange[]): number {
      let topValue = -1;
      for (var i = 0; i < qualitativeRanges.length; i++) {
         topValue =  qualitativeRanges[i].getValue() > topValue ? qualitativeRanges[i].getValue() : topValue;
      }
      return topValue;
   }

   getFeatureMeasure(featureMeasureString: string): FeatureMeasure {
      var fm = JSON.parse(featureMeasureString);
      return new FeatureMeasure(fm.value, fm.color);
   }

   scaleToCanvas(canvasEl: HTMLCanvasElement, qualitativeRanges: QualitativeRange[]): void {
      const orientaton = this.setOrientation(canvasEl);
      const topValue = this.getTopValue(qualitativeRanges)

      // qualitative ranges
      for (var i = 0; i < qualitativeRanges.length; i++) {
         var value = qualitativeRanges[i].getValue();
         switch (orientaton) {
            case Constants.HORIZONTAL:
               qualitativeRanges[i].setWidth(value/topValue * canvasEl.width);
               qualitativeRanges[i].setHeight(canvasEl.height);
               break;
            case Constants.VERTICAL:
               qualitativeRanges[i].setWidth(canvasEl.width);
               qualitativeRanges[i].setHeight(value/topValue * canvasEl.height);
               break;
            default:
               break;
         }

         // feature measure
         switch (orientaton) {
            case Constants.HORIZONTAL:
               qualitativeRanges[i].setWidth(value/topValue * canvasEl.width);
               qualitativeRanges[i].setHeight(canvasEl.height);
               break;
            case Constants.VERTICAL:
               qualitativeRanges[i].setWidth(canvasEl.width);
               qualitativeRanges[i].setHeight(value/topValue * canvasEl.height);
               break;
               default:
            break;
         }

      }
   }

   scaleFeatureMeasureToCanvas(canvasEl: HTMLCanvasElement,
      featureMeasure: FeatureMeasure,
      qualitativeRanges: QualitativeRange[]): void {
      const orientaton = this.setOrientation(canvasEl);
      const topValue = this.getTopValue(qualitativeRanges)

      // feature measure
      var value = featureMeasure.getValue();
      switch (orientaton) {
         case Constants.HORIZONTAL:
            featureMeasure.setWidth(value/topValue * canvasEl.width);
            featureMeasure.setHeight(canvasEl.height/3);
            break;
         case Constants.VERTICAL:
            featureMeasure.setWidth(canvasEl.width/3);
            featureMeasure.setHeight(value/topValue * canvasEl.height);
            break;
            default:
         break;
      }
   }
}
