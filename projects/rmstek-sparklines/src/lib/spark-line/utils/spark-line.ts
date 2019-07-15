import { SparklineInterface} from '../../utils/sparkline-interface'

export class SparkLine implements SparklineInterface{
   private decorationPointsRaw: string;
   getDecorationPointsRaw(): string { return this.decorationPointsRaw; }
   setDecorationPointsRaw(value: string): void { this.decorationPointsRaw = value; }
   private dotRadiusRaw: string;
   getDotRadiusRaw(): string { return this.dotRadiusRaw; }
   setDotRadiusRaw(value: string): void { this.dotRadiusRaw = value; }
   private heightRaw: string;
   getHeightRaw(): string { return this.heightRaw; }
   setHeightRaw(value: string): void { this.heightRaw = value; }
   private lineColorsRaw: string;
   getLineColorRaw(): string { return this.lineColorsRaw; }
   setLineColorRaw(value: string): void { this.lineColorsRaw = value; }
   private linePointsRaw: string;
   getLinePointsRaw(): string { return this.linePointsRaw; }
   setLinePointsRaw(value: string): void { this.linePointsRaw = value; }
   private lineWidthRaw: string;
   getLineWidthRaw(): string { return this.lineWidthRaw; }
   setLineWidthRaw(value: string): void { this.lineWidthRaw = value; }
   private shadeColorRaw: string;
   getShadeColorRaw(): string { return this.shadeColorRaw; }
   setShadeColorRaw(value: string): void { this.shadeColorRaw = value; }
   private widthRaw: string;
   getWidthRaw(): string { return this.widthRaw; }
   setWidthRaw(value: string): void { this.widthRaw = value; }

   constructor(decorationPointsRaw: string,
      dotRadiusRaw: string,
      heightRaw: string,
      lineColorRaw: string,
      linePointsRaw: string,
      lineWidthRaw: string,
      shadeColorRaw: string,
      widthRaw: string
   ) {
      this.setDecorationPointsRaw(decorationPointsRaw);
      this.setDotRadiusRaw(dotRadiusRaw);
      this.setHeightRaw(heightRaw);
      this.setLineColorRaw(lineColorRaw);
      this.setLinePointsRaw(linePointsRaw);
      this.setLineWidthRaw(lineWidthRaw);
      this.setShadeColorRaw(shadeColorRaw);
      this.setWidthRaw(widthRaw);
   }

   validate(): void {}
   prepare(canvasEl?: HTMLCanvasElement): void {}
   scale(canvasEl: HTMLCanvasElement): void {}
   draw(canvasEl: HTMLCanvasElement): void {}
   showToolTips(canvasEl: HTMLCanvasElement): void {}
}
