import { CssColorString } from '../../utils/valid-colors';
import { Constants } from '../../utils/constants';
import { Rectangle } from '../../utils/rectangle';
import { Tooltip } from '../../utils/tooltip';

export class FeatureMeasure {
   color: string;
   getColor(): string { return this.color; }
   setColor(value: string) { this.color = value; }
   featureMeasureRaw: string;
   getFeatureMeasureRaw(): string { return this.featureMeasureRaw; }
   setFeatureMeasureRaw(value: string): void { this.featureMeasureRaw = value; }
   fromX: number;
   getFromX(): number { return this.fromX; }
   setFromX(value: number): void { this.fromX = value; }
   fromY: number;
   getFromY(): number { return this.fromY; }
   setFromY(value: number): void { this.fromY = value; }
   height: number;
   getHeight(): number { return this.height; }
   setHeight(value: number): void { this.height = value; }
   value: number;
   getValue(): number { return this.value; }
   setValue(value: number) { this.value = value; }
   valid: boolean;
   getValid(): boolean { return this.valid; }
   setValid(value: boolean) { this.valid = value; }
   width: number;
   getWidth(): number { return this.width; }
   setWidth(value: number): void { this.width = value; }

   constructor(featureMeasureRaw: string) {
      this.setFeatureMeasureRaw (featureMeasureRaw);
   }
   validate(): boolean {
      let cssColorString = new CssColorString();
      var featureMeasureAny: any;
      let featureMeasureRaw: string;

      this.setValid(true);
      featureMeasureRaw = this.getFeatureMeasureRaw();
      if (featureMeasureRaw === null) {
         console.log(`FeatureMeasure:validate - featureMeasureRaw is null: ` + JSON.stringify(featureMeasureRaw));
         this.setValid(false);
      }
      else {
         var featureMeasureAny: any = JSON.parse(featureMeasureRaw);
         if (typeof featureMeasureAny !== 'object') {
            console.log(`FeatureMeasure:validate - featureMeasureRaw is not an object: ` + JSON.stringify(featureMeasureRaw));
            this.setValid(false);
         }
         else {
            if(Object.keys(featureMeasureAny).length != 2) {
               console.log(`FeatureMeasure:validate - featureMeasure has more than 2 keys: ` + JSON.stringify(featureMeasureAny));
               this.setValid(false);
            }
            if(!featureMeasureAny.hasOwnProperty("value")) {
               console.log(`FeatureMeasure:validate - featureMeasure does not have the value property: ` + JSON.stringify(featureMeasureAny));
               this.setValid(false);
            }
            else {
               let number = Number(featureMeasureAny.value);
               if(isNaN(number)) {
                  console.log(`FeatureMeasure:validate - featureMeasure value is not a number: ` + JSON.stringify(featureMeasureAny));
                  this.setValid(false);
               }
               else {
                  this.setValue(number);  // force it into a number if it is a valid numeric string
               }
            }
            if(!featureMeasureAny.hasOwnProperty("color")) {
               console.log(`FeatureMeasure:validate - featureMeasure does not have the color property: ` + JSON.stringify(featureMeasureAny));
               this.setValid(false);
            }
            else {
               if (!cssColorString.isValid(featureMeasureAny.color)) {
                   console.log(`FeatureMeasure:validate - featureMeasure color is invalid: ` +  + JSON.stringify(featureMeasureAny));
                   this.setValid(false);
               }
               else {
                  this.setColor(featureMeasureAny.color);
               }
            }
         }
      }
      return this.getValid();
   }
   scaleToCanvas(canvasEl: HTMLCanvasElement, orientation: string, topValue: number) {
      // feature measure
      var value = this.getValue();
      switch (orientation) {
         case Constants.HORIZONTAL:
            this.setFromX(0);
            this.setFromY(canvasEl.height/3);
            this.setWidth(value/topValue * canvasEl.width);
            this.setHeight(canvasEl.height/3);
            break;
         case Constants.VERTICAL:
            this.setFromX(canvasEl.width/3);
            this.setFromY(0);
            this.setWidth(canvasEl.width/3);
            this.setHeight(value/topValue * canvasEl.height);
            break;
         default:
            break;
      }
   }
   buildtooltips(): Tooltip {
      var tooltip: Tooltip;
      var rect: Rectangle;
      var color: string = 'red'
      var tip: string = this.getValue().toString();

      rect = new Rectangle(this.fromX, this.fromY, this.width, this.height);
      tooltip = new Tooltip(rect, color, tip);
      return tooltip;
   }

   draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.fromX, this.fromY, this.width, this.height);
   }
}
