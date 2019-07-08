
export interface SparklineInterface {
   // Data is collected via the constructor \
   validate(): void;
   prepare(): void;
   scale(canvasEl: HTMLCanvasElement): void;
   draw(canvasEl: HTMLCanvasElement): void;
   buildToolTips(canvasEl: HTMLCanvasElement): void;
   setToolTips(): void;
}
