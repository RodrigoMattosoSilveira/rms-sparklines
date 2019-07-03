import { Constants } from './constants';
import { CoordinateTip } from '../coordinate-tip';
import { Rectangle } from '../rectangle';

export class ComparativeMeasure {
   value: number;
   color: string;
   fromX: number;
   fromY: number;
   toX: number;
   toY: number;
   lineWidth: number;

   constructor(value: number, color: string, lineWidth: number) {
      this.setValue (value);
      this.setColor (color);
      this.setLineWidth (lineWidth);
   }

   getValue(): number { return this.value; }
   setValue(value: number) { this.value = value; }

   getColor(): string { return this.color; }
   setColor(value: string) { this.color = value; }

   getFromX(): number { return this.fromX; }
   setFromX(value: number): void { this.fromX = value; }

   getFromY(): number { return this.fromY; }
   setFromY(value: number): void { this.fromY = value; }

   getToX(): number { return this.toX; }
   setToX(value: number): void { this.toX = value; }

   getToY(): number { return this.toY; }
   setToY(value: number): void { this.toY = value; }

   getLineWidth(): number { return this.lineWidth; }
   setLineWidth(value: number): void { this.lineWidth = value; }

   buildCoordinateTip(orientaton: string): CoordinateTip {
      var coordinateTip: CoordinateTip;
      var rect: Rectangle;
      var color: string = 'red'
      var tip: string = this.getValue().toString();
      var x, y, width, height: number;

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
      coordinateTip = new CoordinateTip(rect, color, tip);
      return coordinateTip;
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
