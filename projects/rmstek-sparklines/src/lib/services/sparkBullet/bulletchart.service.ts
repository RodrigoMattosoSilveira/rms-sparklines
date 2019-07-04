import { ElementRef,  Injectable } from '@angular/core';

import { Constants } from './constants';
import { CssColorString } from '../valid-colors';
import { ComparativeMeasure } from './comparativeMeasure';
import { CoordinateTip } from '../coordinate-tip';
import { FeatureMeasure } from './featureMeasure';
import { QualitativeRange } from './qualitativeRange';
import { Rectangle } from '../rectangle';


@Injectable({
  providedIn: 'root'
})
export class BulletChartService {
   cssColorString:CssColorString;

   constructor() { }
   validate(qualitativeRanges:any[], sparklineCanvas: ElementRef): boolean {

      let valid = true;

      valid = valid && this.validateCanvas(sparklineCanvas);
      valid = valid && this.validateQualitativeRanges(qualitativeRanges);
      return valid;
   }
   validateCanvas(sparklineCanvas: ElementRef): boolean {

      let valid = true;
      // canvasEl must be provided
      if (sparklineCanvas === null) {
          console.log(`BulletChartService:validateCanvas - sparklineCanvas is null`);
          valid = false;
      }
      if (sparklineCanvas.nativeElement.tagName !== `CANVAS`) {
          console.log(`BulletChartService:validateCanvas - sparklineCanvas tag is not CANVAS`);
          valid = false;
      }
      return valid;
   }
   validateQualitativeRanges(qualitativeRanges: Array<any>): boolean {

      let valid = true;
      this.cssColorString = new CssColorString();

      if (qualitativeRanges.length == 0) {
          console.log(`BulletChartService:validateQualitativeRanges - qualitativeRanges array is empty`);
          valid = false;
      }

      if (qualitativeRanges.length > 3) {
          console.log(`BulletChartService:validateQualitativeRanges - qualitativeRanges array has more than 3 qualitativeRanges`);
          valid = false;
      }

      for (var i = 0; i < qualitativeRanges.length; i++) {
         if(Object.keys(qualitativeRanges[i]).length != 2) {
            console.log(`BulletChartService:validateQualitativeRanges - qualitativeRange has more than 2 keys: ` + JSON.stringify(qualitativeRanges[i]));
            valid = false;
         }
         if(!qualitativeRanges[i].hasOwnProperty("value")) {
            console.log(`BulletChartService:validateQualitativeRanges - qualitativeRange does not have the value property: ` + JSON.stringify(qualitativeRanges[i]));
            valid = false;
         }
         else {
            let number = Number(qualitativeRanges[i].value);
            if(isNaN(number)) {
               console.log(`BulletChartService:validateQualitativeRanges - qualitativeRange value is not a number: ` + JSON.stringify(qualitativeRanges[i]));
               valid = false;
            }
            else {
               qualitativeRanges[i].value = number; // force it into a number if it is a valid numeric string
            }

         }
         if(!qualitativeRanges[i].hasOwnProperty("color")) {
            console.log(`BulletChartService:validateQualitativeRanges - qualitativeRange does not have the color property: ` + JSON.stringify(qualitativeRanges[i]));
            valid = false;
         }
         else {
            if (!this.cssColorString.isValid(qualitativeRanges[i].color)) {
                console.log(`BulletChartService:validateQualitativeRanges - qualitativeRange color is invalid: ` +  + JSON.stringify(qualitativeRanges[i]));
                valid = false;
            }
         }
      }

      return valid;
   }
   validateFeatureMeasure(featureMeasure: any): boolean {
      let valid = true;
      this.cssColorString = new CssColorString();

      if(Object.keys(featureMeasure).length != 2) {
         console.log(`BulletChartService:validateFeatureMeasure - featureMeasure has more than 2 keys: ` + JSON.stringify(featureMeasure));
         valid = false;
      }
      if(!featureMeasure.hasOwnProperty("value")) {
         console.log(`BulletChartService:validateFeatureMeasure - featureMeasure does not have the value property: ` + JSON.stringify(featureMeasure));
         valid = false;
      }
      else {
         let number = Number(featureMeasure.value);
         if(isNaN(number)) {
            console.log(`BulletChartService:validateFeatureMeasure - featureMeasure value is not a number: ` + JSON.stringify(featureMeasure));
            valid = false;
         }
         else {
            featureMeasure.value = number;  // force it into a number if it is a valid numeric string
         }
      }
      if(!featureMeasure.hasOwnProperty("color")) {
         console.log(`BulletChartService:validateFeatureMeasure - featureMeasure does not have the color property: ` + JSON.stringify(featureMeasure));
         valid = false;
      }
      else {
         if (!this.cssColorString.isValid(featureMeasure.color)) {
             console.log(`BulletChartService:validateFeatureMeasure - featureMeasure color is invalid: ` +  + JSON.stringify(featureMeasure));
             valid = false;
         }
      }

      return valid;
   }
   validateComparativeMeasure(comparativeMeasure: any): boolean {
      let valid = true;
      this.cssColorString = new CssColorString();

      if(Object.keys(comparativeMeasure).length != 3) {
         console.log(`BulletChartService:validateFeatureMeasure - comparativeMeasure has more than 2 keys: ` + JSON.stringify(comparativeMeasure));
         valid = false;
      }
      if(!comparativeMeasure.hasOwnProperty("value")) {
         console.log(`BulletChartService:validateComparativeMeasure - comparativeMeasure does not have the value property: ` + JSON.stringify(comparativeMeasure));
         valid = false;
      }
      else {
         let number = Number(comparativeMeasure.value);
         if(isNaN(number)) {
            console.log(`BulletChartService:validateComparativeMeasure - comparativeMeasure value is not a number: ` + JSON.stringify(comparativeMeasure));
            valid = false;
         }
         else {
            comparativeMeasure.value = number;  // force it into a number if it is a valid numeric string
         }
      }
      if(!comparativeMeasure.hasOwnProperty("color")) {
         console.log(`BulletChartService:validateComparativeMeasure - comparativeMeasure does not have the color property: ` + JSON.stringify(comparativeMeasure));
         valid = false;
      }
      else {
         if (!this.cssColorString.isValid(comparativeMeasure.color)) {
             console.log(`BulletChartService:validateComparativeMeasure - comparativeMeasure color is invalid: ` + JSON.stringify(comparativeMeasure));
             valid = false;
         }
      }
      if(!comparativeMeasure.hasOwnProperty("lineWidth")) {
         console.log(`BulletChartService:validateComparativeMeasure - comparativeMeasure does not have the lineWidth property: ` + JSON.stringify(comparativeMeasure));
         valid = false;
      }
      else {
         let number = Number(comparativeMeasure.lineWidth);
         if(isNaN(number)) {
            console.log(`BulletChartService:validateComparativeMeasure - comparativeMeasure lineWidth is not a number: ` + JSON.stringify(comparativeMeasure));
            valid = false;
         }
         else {
             comparativeMeasure.lineWidth = number;  // force it into a number if it is a valid numeric string
         }
      }
      return valid;
   }
   setupCanvasEl(sparklineCanvas: ElementRef, width: number, height: number, className: string ): HTMLCanvasElement {

     const canvasEl = sparklineCanvas.nativeElement;
     canvasEl.width = width;
     canvasEl.height = height;
     canvasEl.style.display = 'inline-block';
     canvasEl.style.verticalAlign = 'top';
     if (className && className !== ``) { canvasEl.classList.add(className); }
     return canvasEl;
  }
   getOrientation(canvasEl: HTMLCanvasElement): string {
      return canvasEl.width > canvasEl.height ? Constants.HORIZONTAL : Constants.VERTICAL;
   }
   getQualityRanges(qualitativeRangesString: string): QualitativeRange[] {
      var qualitativeRanges: QualitativeRange[] = [];
      var qrs: Array<QualitativeRange> = JSON.parse(qualitativeRangesString);
      for (var i = 0; i < qrs.length; i++) {
         let valid = true;
         if (!qrs[i].hasOwnProperty('value')) {
            console.log(`Invalid quality range, missing value property: ` + JSON.stringify(qrs[i]));
            valid = false;
         }
         if (!qrs[i].hasOwnProperty('color')) {
            console.log(`Invalid quality range, missing color property: ` + JSON.stringify(qrs[i]));
            valid = false;
         }
         else {

         }
         if (!qrs[i].hasOwnProperty('color')) {
            console.log(`Invalid quality range, missing color property: ` + JSON.stringify(qrs[i]));
            valid = false;
         }
      var value = qrs[i]['value'];
         var color = qrs[i]['color']
         var qualitativeRange = new QualitativeRange(value, color);
         qualitativeRanges.push(qualitativeRange);
      }
      return qualitativeRanges;
   }
   sortQualitativeRangeHighLow(qrs: Array<QualitativeRange>): Array<QualitativeRange> {
      // used to draw from the highest range to the lowest range
      var sortedQrs: Array<QualitativeRange>;

      sortedQrs = qrs.sort(function (a: QualitativeRange, b: QualitativeRange) { return a.value<b.value ? 1 : a.value==b.value ? 0 : -1;});

      return sortedQrs;
   }
   sortQualitativeRangeLowHigh(qrs: Array<QualitativeRange>): Array<QualitativeRange> {
      // used to show tooltips, we want to show the lowest range if the mouse is
      // between the left margin and its frontier with the second range that is
      // higher than the lower range
      var sortedQrs: Array<QualitativeRange>;

      sortedQrs = qrs.sort(function (a: QualitativeRange, b: QualitativeRange) { return a.value<b.value ? -1 : a.value==b.value ? 0 : 1;});

      return sortedQrs;
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
   getComparativeMeasure(comparativeMeasureString: string) {
      var comparativeMeasure: ComparativeMeasure;
      var cm = JSON.parse(comparativeMeasureString);

      comparativeMeasure = new ComparativeMeasure(cm.value, cm.color, cm.lineWidth);

      return comparativeMeasure;
   }
   scaleToCanvas(canvasEl: HTMLCanvasElement, qualitativeRanges: QualitativeRange[]): void {
      const orientaton = this.getOrientation(canvasEl);
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
      }
   }
   scaleFeatureMeasureToCanvas(canvasEl: HTMLCanvasElement, featureMeasure: FeatureMeasure, qualitativeRanges: QualitativeRange[]): void {
      const orientation = this.getOrientation(canvasEl);
      const topValue = this.getTopValue(qualitativeRanges)

      // feature measure
      var value = featureMeasure.getValue();
      switch (orientation) {
         case Constants.HORIZONTAL:
            featureMeasure.setFromX(0);
            featureMeasure.setFromY(canvasEl.height/3);
            featureMeasure.setWidth(value/topValue * canvasEl.width);
            featureMeasure.setHeight(canvasEl.height/3);
            break;
         case Constants.VERTICAL:
            featureMeasure.setFromX(canvasEl.width/3);
            featureMeasure.setFromY(0);
            featureMeasure.setWidth(canvasEl.width/3);
            featureMeasure.setHeight(value/topValue * canvasEl.height);
            break;
         default:
            break;
      }
   }
   scaleComparativeMeasureToCanvas(canvasEl: HTMLCanvasElement, comparativeMeasure: ComparativeMeasure, qualitativeRanges: QualitativeRange[]): void {
         const orientation = this.getOrientation(canvasEl);
         const topValue = this.getTopValue(qualitativeRanges)
         const value = comparativeMeasure.getValue();
         switch (orientation) {
            case Constants.HORIZONTAL:
               comparativeMeasure.setFromX(value/topValue * canvasEl.width);
               comparativeMeasure.setFromY(canvasEl.height/3);
               comparativeMeasure.setToX(value/topValue * canvasEl.width);
               comparativeMeasure.setToY(2*canvasEl.height/3);
               break;
            case Constants.VERTICAL:
               comparativeMeasure.setFromX(canvasEl.width/3);
               comparativeMeasure.setFromY(value/topValue * canvasEl.height);
               comparativeMeasure.setToX(2*canvasEl.width/3);
               comparativeMeasure.setToY(value/topValue * canvasEl.height);
               break;
               default:
            break;
         }
   }
   buildCoordinateTips(cm: ComparativeMeasure, fm: FeatureMeasure, qr: QualitativeRange[]): CoordinateTip[] {
      var coordinateTips: CoordinateTip[] = [];
      var rect: Rectangle;
      var color: string;
      var tip: string;

      // Feature Measure. We will build a rectangle around the line.
      color = 'red',
      tip = fm.getValue.toString();

      return coordinateTips;
   }
}
