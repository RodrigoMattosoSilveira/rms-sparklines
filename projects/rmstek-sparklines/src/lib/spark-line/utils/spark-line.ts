import { SparklineInterface} from '../../utils/sparkline-interface';
import { CanvasHeight } from '../../utils/canvas-height';
import { CanvasWidth } from '../../utils/canvas-width';
import { DecorationPoint } from './decoration-point';
import { DecorationPoints } from './decoration-points';
import { DotRadius } from './dot-radius';
import { LineColor } from './line-color';
import { LinePoints } from './line-points';
import { LineWidth } from './line-width';
import { Rectangle } from '../../utils/rectangle';
import { ShadeColor } from './shade-color';
import { Tooltip } from '../../utils/tooltip';
import { TooltipService } from '../../utils/tooltip-service';

import * as  mathjs from 'mathjs';

export class SparkLine implements SparklineInterface {
    // validated attributes
    private decorationPoints: DecorationPoints;
    private canvasHeight: CanvasHeight;
    private canvasWidth: CanvasWidth;
    private dotRadius: DotRadius;
    private lineColor: LineColor;
    private linePoints: LinePoints;
    private lineWidth: LineWidth;
    private shadeColor: ShadeColor;

    // Working attributesShadeColor
    private coordinatesCanvas: Array<any>;
    private coordinatesViewport: Array<number>;
    private coordinatesWorld: Array<number>;
    private measurementsArray: Array<number>;
    private tooltipId = `rms-spark-line-tooltip`;
    private tooltips: Array<Tooltip>;
    private valid: boolean;

    // decorationPoints
    getDecorationPoints(): DecorationPoints { return this.decorationPoints; }
    setDecorationPoints(value: DecorationPoints): void { this.decorationPoints = value; }
    // canvasHeight
    getCanvasHeight(): CanvasHeight { return this.canvasHeight; }
    setCanvasHeight(value: CanvasHeight): void { this.canvasHeight = value; }
    // canvasWidth
    getCanvasWidth(): CanvasWidth { return this.canvasWidth; }
    setCanvasWidth(value: CanvasWidth): void { this.canvasWidth = value; }
    // dotRadius
    getDotRadius(): DotRadius { return this.dotRadius; }
    setDotRadius(value: DotRadius): void { this.dotRadius = value; }
    // lineColor
    getLineColor(): LineColor { return this.lineColor; }
    setLineColor(value: LineColor): void { this.lineColor = value; }
    // linePoints
    getLinePoints(): LinePoints { return this.linePoints; }
    setLinePoints(value: LinePoints): void { this.linePoints = value; }
    // lineWidth

    getLineWidth(): LineWidth { return this.lineWidth; }
    setLineWidth(value: LineWidth): void { this.lineWidth = value; }
    // shadeColor
    getShadeColor(): ShadeColor { return this.shadeColor; }
    setShadeColor(value: ShadeColor): void { this.shadeColor = value; }

   // working attributes
   // coordinatesCanvas
   getCoordinatesCanvas(): Array<number> { return this.coordinatesCanvas; }
   setCoordinatesCanvas(value: Array<number>) { this.coordinatesCanvas = value; }
   // pcoordinatesViewport
   getCoordinatesViewport(): Array<number> { return this.coordinatesViewport; }
   setCoordinatesViewport(value: Array<number>) { this.coordinatesViewport = value; }
   // coordinatesWorld
   getCoordinatesWorld(): Array<number> { return this.coordinatesWorld; }
   setCoordinatesWorld(value: Array<number>) { this.coordinatesWorld = value; }
   // measurementsArray
   getMeasurementsArray(): Array<number> { return this.measurementsArray; }
   setMeasurementsArray(value: Array<number>) { this.measurementsArray = value; }
   // tooltips: Array<Tooltip>;
   getTooltips(): Array<Tooltip> { return this.tooltips; }
   setTooltips(value: Array<Tooltip>): void { this.tooltips = value; }
   // private valid: boolean;
   getValid(): boolean { return this.valid; }
   setValid(value: boolean): void { this.valid = value; }

   // raw attribures
   // private canvasHeightRaw: string;
   getCanvasHeightRaw(): string { return this.canvasHeightRaw; }
   setCanvasHeightRaw(value: string): void { this.canvasHeightRaw = value; }
   // private canvasWidthRaw: string;
   getCanvasWidthRaw(): string { return this.canvasWidthRaw; }
   setCanvasWidthRaw(value: string): void { this.canvasWidthRaw = value; }
   // private decorationPointsRaw: string;
   getDecorationPointsRaw(): string { return this.decorationPointsRaw; }
   setDecorationPointsRaw(value: string): void { this.decorationPointsRaw = value; }
   // private dotRadiusRaw: string;
   getDotRadiusRaw(): string { return this.dotRadiusRaw; }
   setDotRadiusRaw(value: string): void { this.dotRadiusRaw = value; }
   // private lineColorRaw: string;
   getLineColorRaw(): string { return this.lineColorRaw; }
   setLineColorRaw(value: string): void { this.lineColorRaw = value; }
   // private linePointsRaw: string;
   getLinePointsRaw(): string { return this.linePointsRaw; }
   setLinePointsRaw(value: string): void { this.linePointsRaw = value; }
   // private lineWidthRaw: string;
   getLineWidthRaw(): string { return this.lineWidthRaw; }
   setLineWidthRaw(value: string): void { this.lineWidthRaw = value; }
   // private shadeColorRaw: string;
   getShadeColorRaw(): string { return this.shadeColorRaw; }
   setShadeColorRaw(value: string): void { this.shadeColorRaw = value; }



    constructor(
        private canvasHeightRaw: string,
        private canvasWidthRaw: string,
        private decorationPointsRaw: string,
        private dotRadiusRaw: string,
        private lineColorRaw: string,
        private linePointsRaw: string,
        private lineWidthRaw: string,
        private shadeColorRaw: string
    ) {}

   validate(): boolean {
      let valid = true;

      const decorationPoints = new DecorationPoints(this.getDecorationPointsRaw());
      valid = valid && decorationPoints.validate(`DecorationPoints`);

      const canvasHeight: CanvasHeight = new CanvasHeight(this.getCanvasHeightRaw());
      valid = valid && canvasHeight.validate(`CanvasHeight`);

      const canvasWidth: CanvasWidth = new CanvasWidth(this.getCanvasWidthRaw());
      valid = valid && canvasWidth.validate(`CanvasWidth`);

      const dotRadius: DotRadius = new DotRadius(this.getDotRadiusRaw());
      valid = valid && dotRadius.validate(`DotRadius`);

      const lineColor: LineColor = new LineColor(this.getLineColorRaw());
      valid = valid && lineColor.validate(`LineColor`);

      const linePoints: LinePoints = new LinePoints(this.getLinePointsRaw());
      valid = valid && linePoints.validate(`LinePoints`);

      const lineWidth: LineWidth = new LineWidth(this.getLineWidthRaw());
      valid = valid && lineWidth.validate(`LineWidth`);

      const shadeColor: ShadeColor = new ShadeColor(this.getShadeColorRaw());
      valid = valid && shadeColor.validate(`ShadeColor`);

      this.setValid(valid);

      if (valid) {
         this.setDecorationPoints(decorationPoints);
         this.setCanvasHeight(canvasHeight);
         this.setCanvasWidth(canvasWidth);
         this.setDotRadius(dotRadius);
         this.setLineColor(lineColor);
         this.setLinePoints(linePoints);
         this.setLineWidth(lineWidth);
         this.setShadeColor(shadeColor);
      }

      return valid;
   }
   prepare(canvasEl?: HTMLCanvasElement): void {
      // measurements array
      const linePoints: Array<number> = this.getLinePoints().getValue();
      let coordinatesWorld: Array<number>;
      let measurementsArray: Array<number>;

      measurementsArray = this.buildMeasurementsArray(linePoints);
      this.setMeasurementsArray(measurementsArray);

      coordinatesWorld = this.buildCoordinatesWorld(measurementsArray);
      this.setCoordinatesWorld(coordinatesWorld);
   }
   scale(canvasEl: HTMLCanvasElement): void {
      let coordinatesCanvas: Array<any>;
      let coordinatesViewport: Array<number>;
      const coordinatesWorld: Array<number> = this.getCoordinatesWorld();
      const dotRadius: number = this.getDotRadius().getValue();
      const height: number = this.getCanvasHeight().getValue();
      const measurementsArray: Array<number> = this.getMeasurementsArray();
      const width: number = this.getCanvasWidth().getValue();

      coordinatesViewport = this.buildCoordinatesViewPort(width, height, dotRadius, measurementsArray, coordinatesWorld);
      this.setCoordinatesViewport(coordinatesViewport);

      coordinatesCanvas = this.buildCoordinatesCanvas(dotRadius, height, measurementsArray, coordinatesViewport);
      this.setCoordinatesCanvas(coordinatesCanvas);
   }
   draw(canvasEl: HTMLCanvasElement): void {
      const coordinatesCanvas: Array<any> = this.getCoordinatesCanvas();
      const ctx: CanvasRenderingContext2D = canvasEl.getContext('2d');
      const decorationPoints: Array<DecorationPoint> = this.getDecorationPoints().getValue();
      const dotRadius: number = this.getDotRadius().getValue();
      const height: number = this.getCanvasHeight().getValue();
      const lineColor: string = this.getLineColor().getValue();
      const measurementsArray: Array<number> = this.getMeasurementsArray();
      const measurementsArrayLength: number = measurementsArray.length;
      const shadeColor: string = this.getShadeColor().getValue();
      const width: number = this.getCanvasWidth().getValue();
      const lineWidth: number = this.getLineWidth().getValue();
      this.drawShade(ctx, width, height, shadeColor, coordinatesCanvas, measurementsArrayLength);
      this.drawLine(ctx, lineWidth, lineColor, coordinatesCanvas, measurementsArrayLength);
      this.drawDecorations(decorationPoints, dotRadius, measurementsArray, ctx, coordinatesCanvas);
   }
   showToolTips(canvasEl: HTMLCanvasElement): void {
      let tooltipService: TooltipService;

      this.buildToolTips();
      tooltipService = new TooltipService(canvasEl, this.getTooltips(), this.tooltipId);

      canvasEl.addEventListener('mousemove', (event: any) => {
         // console.log(`RmsSparklineInlineNew::addEventListener`);

         // Note that when this function is called, this points to the target element!
         // console.log(`SparkLineComponent:ngAfterViewInit - handling mousemove`);
         tooltipService.handleMouseMove(event);
     });

      canvasEl.addEventListener('mouseout', () => {
      // console.log(`RmsSparklineInlineNew::addEventListener`);
         tooltipService.handleMouseOut();
      });

   }
   // prepare methods
   /**
    * buildMeasurementsArray
    */
   buildMeasurementsArray(linePoints: number[]): number[] {
      let measurementsArray: number[] = [];
      measurementsArray = linePoints.slice(0);
      return measurementsArray;
   }
   /**
    * buildCoordinatesWorld
    *
    * Note thatwe add the 0 point the start, and the zero point at the end.
    * This is required for the proper drawing of the shade if necessary. These point
    * are removed before the actual line is drawn
    */
   buildCoordinatesWorld(measurementsArray: number[]): number[] {
      const coordinatesWorld = [];
      for (let i = 0;  i < measurementsArray.length; i++) {
         coordinatesWorld.push([i, measurementsArray[i], 1]);
         // console.log(`coordinatesWorld(` + i +`): ` + JSON.stringify(this.coordinatesWorld[i]));
      }
      return coordinatesWorld;
   }
   /**
    * buildCoordinatesViewPort
    *
    * The sparkline is drawn on the canvas viewport, a subset of the canvas
    * drawing area, with padding between the two to make room for drawing
    * decoration shapes, when necessary.
    */
   // scale methods
   buildCoordinatesViewPort(attributesWidth: number, attributesHeight: number, attributesDotRadius: number, measurementsArray: number[], coordinatesWorld: number[]): number[] {
      const coordinatesViewport = [];

      const sX = (attributesWidth - attributesDotRadius * 2) / measurementsArray.length;
      const sY = (attributesHeight - attributesDotRadius * 2 ) / Math.max(...measurementsArray);
      const worldToViewport = [ [sX, 0, 0], [0, sY, 0], [0, 0, 1]] ;
      for (let i = 0;  i < measurementsArray.length; i++) {
         // From world to viewport
         const temp1 = mathjs.multiply(coordinatesWorld[i], worldToViewport);
         // console.log(`coordinatesViewport temp1(` + i +`): ` + JSON.stringify(temp1));
         coordinatesViewport.push(temp1);
      }
      return coordinatesViewport;
   }
   /**
    * buildCoordinatesCanvas
    *
    * The world coordinates origin is at the bottom left, whereas the canvas and
    * canvasViewport coordinates origin is at the top left, requiring the
    * translation from bottom left to top left origin.
    *
    * Since canvas drawing always uses the canvas coordinates and the
    * canvasViewport amounts to a padding around the canvas, a translation is
    * required to move the canvasViewport coordinates:
    */
   buildCoordinatesCanvas(attributesDotRadius: number, attributesHeight: number, measurementsArray: number[], coordinatesViewport: number[]): number[] {

      // Start function logic
      const coordinatesCanvas = [];

      const dX = attributesDotRadius;
      const myHeight = attributesHeight - attributesDotRadius;
      const bottomLeftToTopLeft = [ [1, 0, 0], [0, 1, 0], [dX, 0, 1] ];
      for (let i = 0;  i < measurementsArray.length; i++) {
         // Tricky calculation ... we want the delta to move the current coordinate
         // const dY = myHeight - 2 * this.coordinatesViewport[i][1];
         // console.log(`coordinatesCanvas dY(` + i +`): ` + myHeight - 2 * this.coordinatesViewport[i][1]);
         bottomLeftToTopLeft[2][1] = myHeight - 2 * coordinatesViewport[i][1];
         // console.log(`coordinatesCanvas bottomLeftToTopLeft(` + i +`): ` + JSON.stringify(bottomLeftToTopLeft));
         coordinatesCanvas.push(mathjs.multiply(coordinatesViewport[i], bottomLeftToTopLeft));
      }
      // console.log(`coordinatesViewport: ` + JSON.stringify(this.coordinatesViewport));

      return coordinatesCanvas;
   }
   // drawing methods
   /**
    * drawShade
    * TODO move this method to the shade-color object
    */
   drawShade(
       ctx: CanvasRenderingContext2D,
       attributesLineWidth: number,
       attributesHeight: number,
       attributesShadeColor: string,
       coordinatesCanvas: number[],
       measurementsArrayLength: number) {
      ctx.clearRect(0, 0, attributesLineWidth, attributesHeight);
      // console.log(`shadeColor: ` + this.attributes.shadeColor);
      if (attributesShadeColor) {
          // Fill up the area
          ctx.beginPath();
          ctx.fillStyle = attributesShadeColor;
          ctx.moveTo(coordinatesCanvas[0][0], attributesHeight);
          for (let i = 0; i < measurementsArrayLength; i++) {
              ctx.lineTo(coordinatesCanvas[i][0], coordinatesCanvas[i][1]);
              // console.log(`drawing(` + i +`): ` + JSON.stringify(this.coordinatesCanvas[i]));
          }
          ctx.lineTo(coordinatesCanvas[measurementsArrayLength - 1][0], attributesHeight);
          ctx.fill();
      }
   }
   /**
    * drawLine
    * TODO move this method to the line-points object
    *
    * Draw the path, on top of the shade area
    * https://www.w3schools.com/graphics/canvas_coordinates.asp
    */
    drawLine(
        ctx: CanvasRenderingContext2D,
        attributesLineWidth: number,
        attributesLineColor: string,
        coordinatesCanvas: number[],
        measurementsArrayLength: number): void {

      ctx.beginPath();
      ctx.lineWidth = attributesLineWidth;
      ctx.strokeStyle = attributesLineColor;
      ctx.moveTo(coordinatesCanvas[0][0], coordinatesCanvas[0][1]);
      for (let i = 1; i < measurementsArrayLength; i++) {
         ctx.lineTo(coordinatesCanvas[i][0], coordinatesCanvas[i][1]);
      // console.log(`drawing(` + i +`): ` + JSON.stringify(this.coordinatesCanvas[i]));
      }
      ctx.stroke();
   }
   /**
    * drawDecorations
    * TODO move this method to the decoration-points object
    */
   drawDecorations(
       decorationPoints: Array<DecorationPoint>,
       attributesDotRadius: number,
       measurementsArray: number[],
       ctx: CanvasRenderingContext2D,
       coordinatesCanvas: Array<any>): void {

        const INDEX = 'index';
        const COLOR = 'color';
        const MEASUREMENT_ARRAY_MINUS_ONE = measurementsArray.length - 1;
        const decorationPointsArray: Array<DecorationPoint> = decorationPoints.slice(0);
        if (attributesDotRadius > 0 && decorationPointsArray.length > 0) {
        // console.log('decorationPoints = ' + JSON.stringify(this.attributes.decorationPoints));
            // for (let i = 0; i < decorationPointsArray.length; i++) {
            for (const decorationPoint of decorationPointsArray) {
            // todo: a hack to solve a problem when running inside vaadin-grid
                if (decorationPoint[INDEX] > MEASUREMENT_ARRAY_MINUS_ONE) {
                // do nothing
                } else {
                    ctx.beginPath();
                    const index = decorationPoint[INDEX];
                    ctx.arc(coordinatesCanvas[index][0], coordinatesCanvas[index][1], attributesDotRadius, 0, Math.PI * 2);
                    ctx.fillStyle = decorationPoint[COLOR];
                    ctx.fill();
                }
            }
        }
    }
   //
   // tooltip methods
   // TODO: Make the measurements array and object, and move this into it.
   //
   buildToolTips(): void {
      const measurementsArray: Array<number> = this.getMeasurementsArray();
      const coordinatesCanvas: Array<any> = this.getCoordinatesCanvas();
      let rect: Rectangle;
      let tooltip: Tooltip;
      let tipX: number;
      let tipY: number;
      const tooltips: Array<Tooltip> = [];
      for (let i = 0; i < measurementsArray.length; i++) {
          tipX = coordinatesCanvas[i][0] - 3 < 0 ? 0 : coordinatesCanvas[i][0] - 3;
          tipY = coordinatesCanvas[i][1] - 13 < 0 ? 0 : coordinatesCanvas[i][1] - 13;
          rect = new Rectangle(tipX, tipY, 6, 26);
          tooltip = new Tooltip(rect, 'red',  measurementsArray[i].toString());
          tooltips.push(tooltip);
         // console.log(`coordinatesTips(` + i +`): ` + JSON.stringify(this.coordinatesTips[i]));
      }
      this.setTooltips(tooltips);
   }
}
