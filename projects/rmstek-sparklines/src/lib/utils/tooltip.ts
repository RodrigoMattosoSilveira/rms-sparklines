import { Rectangle } from './rectangle';

export class Tooltip {
   rect: Rectangle;
   color: string;
   tip: string;

   constructor(rect: Rectangle, color: string, tip: string) {
      this.rect = rect;
      this.color = color;
      this.tip = tip;
   }
   getRect(): Rectangle { return this.rect; }
   setRect(value: Rectangle): void { this.rect = value; }

   getColor(): string { return this.color; }
   setColor(value: string): void { this.color = value; }

   getTip(): string { return this.tip; }
   setTip(value: string): void { this.tip = value; }

   draw(ctx: CanvasRenderingContext2D) {}
}
