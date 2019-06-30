export class ComparativeMeasure {
   range: number;
   width: number;
   color: string;

   constructor(range: number, width: number, color: string) {
      this.setRange (range);
      this.setWidth (width);
      this.setColor (color);
   }

   getRange(): number { return this.range; }
   setRange(value: number) { this.range = value; }

   getWidth(): number { return this.width; }
   setWidth(value: number) { this.width = value; }

   getColor(): string { return this.color; }
   setColor(value: string) { this.color = value; }

   /**
   * The comparative measure, target marker for comparative measure, it is a
   * rectangle drawn north/south:
   * - It's height is two thirds of the canvas height;
   * - Tt's width is configured;
   * - It color is its color attribute;
   * - Half of its height is above the center of the canvas height, and half
   *   below thereof;
   */
   draw(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
      let featureRangeWidth = this.range/canvasWidth*100;
      let featureRangeHeight = canvasWidth/3;
      ctx.fillStyle = this.color;
      ctx.fillRect(0, (canvasHeight/2 - featureRangeHeight/2), featureRangeWidth, featureRangeHeight);
   }
}
