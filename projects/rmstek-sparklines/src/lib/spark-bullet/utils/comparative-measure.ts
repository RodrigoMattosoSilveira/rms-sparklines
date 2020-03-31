import { CssColorString } from '../../utils/valid-colors';
import { Constants } from '../../utils/constants';
import { Rectangle } from '../../utils/rectangle';
import { Tooltip } from '../../utils/tooltip';

export class ComparativeMeasure {
   color: string;
   getColor(): string { return this.color; }
   setColor(value: string) { this.color = value; }
   comparativeMeasureRaw: string;
   getComparativeMeasureRaw(): string { return this.comparativeMeasureRaw; }
   setComparativeMeasureRaw(value: string) { this.comparativeMeasureRaw = value; }
   fromX: number;
   getFromX(): number { return this.fromX; }
   setFromX(value: number): void { this.fromX = value; }
   fromY: number;
   getFromY(): number { return this.fromY; }
   setFromY(value: number): void { this.fromY = value; }
   lineWidth: number;
   getLineWidth(): number { return this.lineWidth; }
   setLineWidth(value: number): void { this.lineWidth = value; }
   toX: number;
   getToX(): number { return this.toX; }
   setToX(value: number): void { this.toX = value; }
   toY: number;
   getToY(): number { return this.toY; }
   setToY(value: number): void { this.toY = value; }
   valid: boolean;
   getValid(): boolean { return this.valid; }
   setValid(value: boolean) { this.valid = value; }
   value: number;
   getValue(): number { return this.value; }
   setValue(value: number) { this.value = value; }

   constructor(comparativeMeasureRaw: string) {
      this.setComparativeMeasureRaw (comparativeMeasureRaw);
   }
   validate(): boolean {
      var comparativeMeasureAny: any;
      let comparativeMeasureRaw: string;
      var cssColorString = new CssColorString();

      this.setValid(true);
      comparativeMeasureRaw = this.getComparativeMeasureRaw();
      if (comparativeMeasureRaw === null) {
         console.log(`ComparativeMeasure:validate - comparativeMeasure is null: ` + JSON.stringify(comparativeMeasureRaw));
         this.setValid(false);
      }
      else {
         comparativeMeasureAny = JSON.parse(this.getComparativeMeasureRaw());
         if (typeof comparativeMeasureAny !== 'object') {
            console.log(`ComparativeMeasure:validate - comparativeMeasure is not an object: ` + JSON.stringify(comparativeMeasureRaw));
            this.setValid(false);
         }
         else {
            if(Object.keys(comparativeMeasureAny).length != 3) {
               console.log(`ComparativeMeasure:validate - comparativeMeasure has more than 2 keys: ` + JSON.stringify(comparativeMeasureAny));
               this.setValid(false);
            }
            if(Object.keys(comparativeMeasureAny).length != 3) {
               console.log(`ComparativeMeasure:validate - comparativeMeasure has more than 2 keys: ` + JSON.stringify(comparativeMeasureAny));
               this.setValid(false);
            }
            if(!comparativeMeasureAny.hasOwnProperty("value")) {
               console.log(`ComparativeMeasure:validate - comparativeMeasure does not have the value property: ` + JSON.stringify(comparativeMeasureAny));
               this.setValid(false);
            }
            else {
               let number = Number(comparativeMeasureAny.value);
               if(isNaN(number)) {
                  // console.log(`ComparativeMeasure:validate - comparativeMeasure value is not a number: ` + JSON.stringify(comparativeMeasureAny));
                  this.setValid(false);
               }
               else {
                  this.setValue(number);  // force it into a number if it is a valid numeric string
               }
            }
            if(!comparativeMeasureAny.hasOwnProperty("color")) {
               console.log(`ComparativeMeasure:validate - comparativeMeasure does not have the color property: ` + JSON.stringify(comparativeMeasureAny));
               this.setValid(false);
            }
            else {
               if (!cssColorString.isValid(comparativeMeasureAny.color)) {
                   // console.log(`ComparativeMeasure:validate - comparativeMeasure color is invalid: ` + JSON.stringify(comparativeMeasureAny));
                   this.setValid(false);
               }
               else {
                  this.setColor(comparativeMeasureAny.color);
               }
            }
            if(!comparativeMeasureAny.hasOwnProperty("lineWidth")) {
               // console.log(`ComparativeMeasure:validate - comparativeMeasure does not have the lineWidth property: ` + JSON.stringify(comparativeMeasureAny));
               this.setValid(false);
            }
            else {
               let number = Number(comparativeMeasureAny.lineWidth);
               if(isNaN(number)) {
                  // console.log(`ComparativeMeasure:validate - comparativeMeasure lineWidth is not a number: ` + JSON.stringify(comparativeMeasureAny));
                  this.setValid(false);
               }
               else {
                   this.setLineWidth(number);  // force it into a number if it is a valid numeric string
               }
            }
         }
      }
      return this.getValid();
   }
   scaleToCanvas(canvasEl: HTMLCanvasElement, orientation: string, topValue: number) {
      const value = this.getValue();
      switch (orientation) {
         case Constants.HORIZONTAL:
            this.setFromX(value/topValue * canvasEl.width);
            this.setFromY(canvasEl.height/3);
            this.setToX(value/topValue * canvasEl.width);
            this.setToY(2*canvasEl.height/3);
            break;
         case Constants.VERTICAL:
            this.setFromX(canvasEl.width/3);
            this.setFromY(value/topValue * canvasEl.height);
            this.setToX(2*canvasEl.width/3);
            this.setToY(value/topValue * canvasEl.height);
            break;
            default:
         break;
      }
   }
   buildtooltips(orientaton: string): Tooltip {
      var tooltip: Tooltip;
      var rect: Rectangle;
      var color: string = 'red'
      var tip: string = this.getValue().toString();
      var x: number, y: number, width: number, height: number;

      switch (orientaton) {
         case Constants.HORIZONTAL:
            x = this.fromX - this.lineWidth/2;
            y = this.fromY;
            width = this.lineWidth;
            height = this.toY - this.fromY + 1;
            break;
         case Constants.VERTICAL:
            x = this.fromX;
            y = this.fromY - this.lineWidth/2;
            width = this.toX - this.fromX + 1;
            height = this.lineWidth;
            break;
         default:
            break;
      }

      rect = new Rectangle(x, y, width, height);
      tooltip = new Tooltip(rect, color, tip);
      return tooltip;
   }
   draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.moveTo(this.fromX, this.fromY);
      ctx.lineTo(this.toX, this.toY);
      ctx.stroke();
   }
}
