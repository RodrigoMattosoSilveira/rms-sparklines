export class QualitativeRange {
   range: number;
   color: string;
   width: number;
   height: number;

   constructor(range: number, color: string) {
      this.setRange (range);
      this.setColor (color);
   }

   getRange(): number { return this.range; }
   setRange(value: number) { this.range = value; }

   getColor(): string { return this.color; }
   setColor(value: string) { this.color = value; }

   getWidth(): number { return this.width; }
   setWidth(value: number): void { this.width = value; }

   getHeight(): number { return this.height; }
   setHeight(value: number): void { this.height = value; }

   draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, this.width, this.height);
   }
}
