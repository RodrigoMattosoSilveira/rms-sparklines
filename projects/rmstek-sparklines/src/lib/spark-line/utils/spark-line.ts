import { SparklineInterface} from '../../utils/sparkline-interface';
import { CanvasHeight } from '../../utils/canvas-height';
import { CanvasWidth } from '../../utils/canvas-width';
import { DecorationPoints } from './decoration-points';
import { DotRadius } from './dot-radius';
import { LineColor } from './line-color';
import { LinePoints } from './line-points';
import { LineWidth } from './line-width';
import { ShadeColor } from './shade-color';

export class SparkLine implements SparklineInterface {
   // rqw attribures
   private decorationPointsRaw: string;
   getDecorationPointsRaw(): string { return this.decorationPointsRaw; }
   setDecorationPointsRaw(value: string): void { this.decorationPointsRaw = value; }
   private canvasHeightRaw: string;
   getCanvasHeightRaw(): string { return this.canvasHeightRaw; }
   setCanvasHeightRaw(value: string): void { this.canvasHeightRaw = value; }
   private canvasWidthRaw: string;
   getCanvasWidthRaw(): string { return this.canvasWidthRaw; }
   setCanvasWidthRaw(value: string): void { this.canvasWidthRaw = value; }
   private dotRadiusRaw: string;
   getDotRadiusRaw(): string { return this.dotRadiusRaw; }
   setDotRadiusRaw(value: string): void { this.dotRadiusRaw = value; }
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

   // validated attributes
   private decorationPoints: DecorationPoints;
   getDecorationPoints(): DecorationPoints { return this.decorationPoints; }
   setDecorationPoints(value: DecorationPoints): void { this.decorationPoints = value; }
   private canvasHeight: number;
   getCanvasHeight(): number { return this.canvasHeight; }
   setCanvasHeight(value: number): void { this.canvasHeight = value; }
   private canvasWidth: number;
   getCanvasWidth(): number { return this.canvasWidth; }
   setCanvasWidth(value: number): void { this.canvasWidth = value; }
   private dotRadius: number;
   getDotRadius(): number { return this.dotRadius; }
   setDotRadius(value: number): void { this.dotRadius = value; }
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
      this.setCanvasHeightRaw(heightRaw);
      this.setLineColorRaw(lineColorRaw);
      this.setLinePointsRaw(linePointsRaw);
      this.setLineWidthRaw(lineWidthRaw);
      this.setShadeColorRaw(shadeColorRaw);
      this.setCanvasWidthRaw(widthRaw);
   }

   validate(): boolean {
      var valid: boolean = true;

      var decorationPoints = new DecorationPoints(this.getDecorationPointsRaw());
      valid = valid && decorationPoints.validate(`DecorationPoints`);

      var canvasHeight: CanvasHeight = new CanvasHeight(this.getCanvasHeightRaw())
      valid = valid && canvasHeight.validate(`CanvasHeight`);

      var canvasWidth: CanvasWidth = new CanvasWidth(this.getCanvasWidthRaw())
      valid = valid && canvasWidth.validate(`CanvasWidth`);

      var dotRadius: DotRadius = new DotRadius(this.getDotRadiusRaw());
      valid = valid && dotRadius.validate(`DotRadius`);

      var lineColor: LineColor = new LineColor(this.getLineColorRaw());
      valid = valid && lineColor.validate(`LineColor`);

      var linePoints: LinePoints = new LinePoints(this.getLinePointsRaw());
      valid = valid && linePoints.validate(`LinePoints`);

      var lineWidth: LineWidth = new LineWidth(this.getLineColorRaw());
      valid = valid && lineWidth.validate(`LineWidth`);

      var shadeColor: ShadeColor = new ShadeColor(this.getShadeColorRaw());
      valid = valid && shadeColor.validate(`ShadeColor`);

      this.setValid(valid);
      return valid;
   }
   prepare(canvasEl?: HTMLCanvasElement): void {}
   scale(canvasEl: HTMLCanvasElement): void {}
   draw(canvasEl: HTMLCanvasElement): void {}
   showToolTips(canvasEl: HTMLCanvasElement): void {}
}
