
export interface SparklineInterface {
   // Data is collected via the constructor \
   validate(): boolean;
   prepare(canvasEl?: HTMLCanvasElement): void;
   scale(canvasEl: HTMLCanvasElement): void;
   draw(canvasEl: HTMLCanvasElement): void;
   showToolTips(canvasEl: HTMLCanvasElement): void;
}
