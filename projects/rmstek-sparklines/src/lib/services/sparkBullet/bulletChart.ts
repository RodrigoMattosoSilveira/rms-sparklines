import { Constants } from './constants';

export class BulletChart {
   width: number;
	height: number;
	color: string;
	orientation: string; // computed value

   constructor(width: number, height: number, color: string) {
      this.setWidth (width);
      this.setHeight (height);
      this.setColor (color);
   }

   getWidth(): number { return this.width; }
   setWidth(value: number) { this.width = value; this.calculateOrientation(); }

   getHeight(): number { return this.height; }
   setHeight(value: number) { this.height = value; this.calculateOrientation(); }

   getColor(): string { return this.color; }
   setColor(value: string) { this.color = value; }

   calculateOrientation(): void {
      this.orientation = this.width > this.height ? Constants.HORIZONTAL : Constants.VERTICAL;
   }

   /**
   * The bullet chart is a rectangle.
   */
   draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, this.width, this.height);
   }
}
