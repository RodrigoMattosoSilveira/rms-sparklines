import { CssColorString } from '../../utils/valid-colors';
import { Constants } from '../../utils/constants';
import { Rectangle } from '../../utils/rectangle';
import { Tooltip } from '../../utils/tooltip';

export class QualitativeRange {
   color: string;
   getColor(): string { return this.color; }
   setColor(value: string) { this.color = value; }
   height: number;
   getHeight(): number { return this.height; }
   setHeight(value: number): void { this.height = value; }
   qualitativeRangeRaw: string;
   getQualitativeRangeRaw(): string { return this.qualitativeRangeRaw; }
   setQualitativeRangeRaw(value: string): void { this.qualitativeRangeRaw = value; }
   value: number;
   getValue(): number { return this.value; }
   setValue(value: number) { this.value = value; }
   valid: boolean;
   getValid(): boolean { return this.valid; }
   setValid(value: boolean) { this.valid = value; }
   width: number;
   getWidth(): number { return this.width; }
   setWidth(value: number): void { this.width = value; }

   constructor(qualitativeRangeRaw: string) {
      this.setQualitativeRangeRaw (qualitativeRangeRaw);
   }
   validate(): boolean {
      let cssColorString = new CssColorString();
      var qualitativeRangeAny: any;
      let qualitativeRangeRaw: string;

      this.setValid(true);
      qualitativeRangeRaw = this.getQualitativeRangeRaw();
      if (qualitativeRangeRaw === null) {
         console.log(`QualitativeRange:validate - qualitative range is null: ` + qualitativeRangeRaw);
         this.setValid(false);
      }
      else {
         qualitativeRangeAny = JSON.parse(qualitativeRangeRaw);
         if (typeof qualitativeRangeAny !== 'object') {
            console.log(`QualitativeRange:validate - qualitativeRange is not an object: ` + qualitativeRangeRaw);
            this.setValid(false);
         }
         else {
            // if (qualitativeRangeAny.length == 0) {
            //     console.log(`QualitativeRange:validate - qualitativeRanges has no keys`);
            //     this.setValid(false);
            // }
            //
            // if (qualitativeRangeAny.length > 3) {
            //     console.log(`QualitativeRange:validate - qualitativeRanges array has more than 3 qualitativeRanges`);
            //     this.setValid(false);
            // }
            //
            if(Object.keys(qualitativeRangeAny).length != 2) {
               console.log(`QualitativeRange:validate - qualitativeRange has more than 2 keys: ` + JSON.stringify(qualitativeRangeAny));
               this.setValid(false);
            }
            if(!qualitativeRangeAny.hasOwnProperty("value")) {
               console.log(`QualitativeRange:validate - qualitativeRange does not have the value property: ` + JSON.stringify(qualitativeRangeAny));
               this.setValid(false);
            }
            else {
               let number = Number(qualitativeRangeAny.value);
               if(isNaN(number)) {
                  console.log(`QualitativeRange:validate - qualitativeRange value is not a number: ` + JSON.stringify(qualitativeRangeAny));
                  this.setValid(false);
               }
               else {
                  this.setValue(number); // force it into a number if it is a valid numeric string
               }

            }
            if(!qualitativeRangeAny.hasOwnProperty("color")) {
               console.log(`QualitativeRange:validate - qualitativeRange does not have the color property: ` + JSON.stringify(qualitativeRangeAny));
               this.setValid(false);
            }
            else {
               if (!cssColorString.isValid(qualitativeRangeAny.color)) {
                   console.log(`QualitativeRange:validate - qualitativeRange color is invalid: ` +  + JSON.stringify(qualitativeRangeAny));
                   this.setValid(false);
               }
               else {
                  this.setColor(qualitativeRangeAny.color);
               }
            }
         }
      }
      return this.getValid();
   }
   scaleToCanvas(canvasEl: HTMLCanvasElement, orientaton: string, topValue: number): void {
      var value = this.getValue();
      switch (orientaton) {
         case Constants.HORIZONTAL:
            this.setWidth(value/topValue * canvasEl.width);
            this.setHeight(canvasEl.height);
            break;
         case Constants.VERTICAL:
            this.setWidth(canvasEl.width);
            this.setHeight(value/topValue * canvasEl.height);
            break;
         default:
            break;
      }
   }
   buildCoordinateTip(): Tooltip {
      var tooltip: Tooltip;
      var rect: Rectangle;
      var color: string = 'red'
      var tip: string = this.getValue().toString();

      rect = new Rectangle(0, 0, this.width, this.height);
      tooltip = new Tooltip(rect, color, tip);
      return tooltip;
   }
   draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, this.width, this.height);
   }
}
