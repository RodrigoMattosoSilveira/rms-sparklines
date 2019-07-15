import { SparklineInterface} from '../../utils/sparkline-interface'

export class SparkLine implements SparklineInterface{
   constructor() {}

   validate(): void {}
   prepare(canvasEl?: HTMLCanvasElement): void {}
   scale(canvasEl: HTMLCanvasElement): void {}
   draw(canvasEl: HTMLCanvasElement): void {}
   showToolTips(canvasEl: HTMLCanvasElement): void {}
}
