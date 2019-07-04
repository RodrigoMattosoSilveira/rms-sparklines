import { Constants } from './constants';
import { CoordinateTip } from '../coordinate-tip';
import { Rectangle } from '../rectangle';

export class QualitativeRange {
   value: number;
   color: string;
   width: number;
   height: number;

   constructor(value: number, color: string) {
      this.setValue (value);
      this.setColor (color);
   }
   getValue(): number { return this.value; }
   setValue(value: number) { this.value = value; }
   getColor(): string { return this.color; }
   setColor(value: string) { this.color = value; }
   getWidth(): number { return this.width; }
   setWidth(value: number): void { this.width = value; }
   getHeight(): number { return this.height; }
   setHeight(value: number): void { this.height = value; }
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
   buildCoordinateTip(): CoordinateTip {
      var coordinateTip: CoordinateTip;
      var rect: Rectangle;
      var color: string = 'red'
      var tip: string = this.getValue().toString();

      rect = new Rectangle(0, 0, this.width, this.height);
      coordinateTip = new CoordinateTip(rect, color, tip);
      return coordinateTip;
   }
   draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, this.width, this.height);
   }
}
