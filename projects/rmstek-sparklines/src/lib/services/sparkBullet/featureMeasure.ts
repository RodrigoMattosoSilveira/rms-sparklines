import { CoordinateTip } from '../coordinate-tip';
import { Rectangle } from '../rectangle';

export class FeatureMeasure {
   value: number;
   color: string;
   fromX: number;
   fromY: number;
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

   getFromX(): number { return this.fromX; }
   setFromX(value: number): void { this.fromX = value; }

   getFromY(): number { return this.fromY; }
   setFromY(value: number): void { this.fromY = value; }

   buildCoordinateTip(): CoordinateTip {
      var coordinateTip: CoordinateTip;
      var rect: Rectangle;
      var color: string = 'red'
      var tip: string = this.getValue().toString();

      rect = new Rectangle(this.fromX, this.fromY, this.width, this.height);
      coordinateTip = new CoordinateTip(rect, color, tip);
      return coordinateTip;
   }

   draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.fromX, this.fromY, this.width, this.height);
   }
}
