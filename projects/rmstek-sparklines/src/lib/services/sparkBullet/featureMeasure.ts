export class FeatureMeasure {
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

   draw(ctx: CanvasRenderingContext2D, canvasEl: HTMLCanvasElement) {
      ctx.fillStyle = this.color;
      ctx.fillRect(0, canvasEl.height/3, this.width, this.height);
   }
}
