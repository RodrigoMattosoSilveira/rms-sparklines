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

   draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.moveTo(this.fromX, this.fromY);
      ctx.lineTo(this.toX, this.toY);
      ctx.stroke();
   }
}
