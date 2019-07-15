import { SparklineInterface} from '../../utils/sparkline-interface'
import { DecorationPoints } from './decoration-points';

export class SparkLine implements SparklineInterface {
   // rqw attribures
   private decorationPointsRaw: string;
   getDecorationPointsRaw(): string { return this.decorationPointsRaw; }
   setDecorationPointsRaw(value: string): void { this.decorationPointsRaw = value; }
   private dotRadiusRaw: string;
   getDotRadiusRaw(): string { return this.dotRadiusRaw; }
   setDotRadiusRaw(value: string): void { this.dotRadiusRaw = value; }
   private heightRaw: string;
   getHeightRaw(): string { return this.heightRaw; }
   setHeightRaw(value: string): void { this.heightRaw = value; }
   private lineColorRaw: string;
   getLineColorRaw(): string { return this.lineColorRaw; }
   setLineColorRaw(value: string): void { this.lineColorRaw = value; }
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

   // validated attributes
   private decorationPoints: DecorationPoints;
   getDecorationPoints(): DecorationPoints { return this.decorationPoints; }
   setDecorationPoints(value: DecorationPoints): void { this.decorationPoints = value; }
   private dotRadius: number;
   getDotRadius(): number { return this.dotRadius; }
   setDotRadius(value: number): void { this.dotRadius = value; }
   private height: number;
   getHeight(): number { return this.height; }
   setHeight(value: number): void { this.height = value; }
   private lineColor: string;
   getLineColor(): string { return this.lineColor; }
   setLineColor(value: string): void { this.lineColor = value; }
   private linePoints: Array<number>;
   getLinePoints(): Array<number> { return this.linePoints; }
   setLinePoints(value: Array<number>): void { this.linePoints = value; }
   private lineWidth: number;
   getLineWidth(): number { return this.lineWidth; }
   setLineWidth(value: number): void { this.lineWidth = value; }
   private shadeColor: string;
   getShadeColor(): string { return this.shadeColor; }
   setShadeColor(value: string): void { this.shadeColor = value; }
   private valid: boolean;
   getValid(): boolean { return this.valid; }
   setValid(value: boolean): void { this.valid = value; }
   private width: number;
   getWidth(): number { return this.width; }
   setWidth(value: number): void { this.width = value; }

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

   validate(): void {
      var valid: boolean = true;
      
      var decorationPoints = new DecorationPoints(this.getDecorationPointsRaw());
      valid = valid && decorationPoints.validate(`DecorationPoints`);

      this.setValid(valid);
   }
   prepare(canvasEl?: HTMLCanvasElement): void {}
   scale(canvasEl: HTMLCanvasElement): void {}
   draw(canvasEl: HTMLCanvasElement): void {}
   showToolTips(canvasEl: HTMLCanvasElement): void {}
}
