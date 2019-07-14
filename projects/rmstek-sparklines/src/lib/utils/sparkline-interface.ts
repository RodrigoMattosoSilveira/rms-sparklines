
export interface SparklineInterface {
   // Data is collected via the constructor \
   validate(): void;
   prepare(canvasEl?: HTMLCanvasElement): void;
   scale(canvasEl: HTMLCanvasElement): void;
   draw(canvasEl: HTMLCanvasElement): void;
   setToolTips(canvasEl: HTMLCanvasElement): void;
}
