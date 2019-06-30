export class FeatureMeasure {
   range: number;
   color: string;

   constructor(range: number, color: string) {
      this.setRange (range);
      this.setColor (color);
   }

   getRange(): number { return this.range; }
   setRange(value: number) { this.range = value; }

   getColor(): string { return this.color; }
   setColor(value: string) { this.color = value; }

   /**
   * The feature measure is drawn from the north/west to the south/east:
   * - It's height is one third of the canvas height;
   * - Tt's width is its range attribute, proportional to the canvas width;
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
