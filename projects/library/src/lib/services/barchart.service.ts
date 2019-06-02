/**
 * Introduction
 * Bar chart sparlines are a collection of rectangles, a.k.a. bars, drawn
 * alongside the canvas x-axis, with a small gap between them.
 *
 * Bar chart sparlines are charactized by their types: positive, negative,
 * dual, and tri. Positive charts' bars with positve heights are drawn
 * northward; bars with negative heights are cropped out. Negative charts'
 * bars with negative heights are drawn southward; bars with positive heights
 * are cropped out. Dual charts' bars heights are negative, zero, or positive,
 * with a positive height bars drawn northward and negative ones southward.
 * Tri charts have equal height bars, with positive drawn northward, zero
 * straddling the x-axis, and negative southward.
 * Bars are characterized by origin, height, width, gap, and fill color. The
 * origin is always (0,0). The height is provided, and scaled to fit within the
 * canvas. The width is calculated and its proportional number of bars and the
 * the canvas width. The gap is provided. The fill color is provided and used to
 * draw the bars' backgrounds.
 *
 * Calculation parameters
 * The parameters required to draw a bar char sparkline fall within two
 * categories: attributes, calculated. See below for their definitions and
 * descriptions.
 *
 * Bar width calculation
 * The bar width, barWidth, is the ratio between the canvas width and the
 * number of bars to draw, rounded down. The barWidth calculation is an
 * iteration seeking the number o bars to draw, barHeights.length, that yields
 * a barWidth equal or higher than the minimum bar width, minimumBarWidth. If
 * the initial barWidth, Math.floor(canvas.width / heights.length), yields a
 * barWidth that is less than minimumBarWidth, we drop the leftmost barHeights
 * element and recalculate the barWidth using the new heights.length; we
 * iterate until the barWidth is greater or equal to minBarWidth.
 *
 * Bar gap insertion
 * The bar gaps, barGap, inserted between the bars might cause rightmost bars to
 * be cropped. The barGap insertion is an iteration seeking for a
 * barHeights.length enabling barGaps to be inserted without cropping any
 * rightmost bars. It has two phases: reducing the barWidth and pruning
 * barHeights leftmost elements.
 *
 * If the initial width required, widthRequired, to insert the
 * bars and their gaps,
 * barWidth*barHeights.length + barGap*(barHeights.length - 1), is greater than
 * the canvas.width and the barWidth is greater than the minimumBarWidth,
 * decrement the barWidth by one pixel and recalculate
 * the widthRequired using the new barWidth; we iterate until the
 * widthRequired is less or equal to canvas.width.
 *
 * If the initial width required, widthRequired, to insert the
 * bars and their gaps,
 * barWidth*barHeights.length + barGap*(barHeights.length - 1), is greater than
 * the canvas.width and the barWidth is not greater than the minimumBarWidth, we
 * drop the leftmost barHeights element and recalculate the widthRequired using
 * the new heights.length; we iterate until the widthRequired is less or equal to
 * canvas.width.
 *
 * Bar chart type drawing
 * The bar chart origin, direction, and scale calculations depend on the bar
 * chart type. We use the canvas setTransform and translate functions to aid in
 * setting them. We start by establishing the canvas default state and then
 * describe the operations to transform it to suit the bar char we are drawing
 *
 * In the canvas original state, its origin is top-let, positive drawing
 * southward, and negative northward. The canvas translate method is used to
 * move the origin; the canvas scale method is used to flip the canvas drawing
 * and to move the origin when inserting gaps.
 *
 * Wehn drawing a positive chart:
 * - the canvas origin is translated to the bottom-left
 * - the drawing is scaled to
 *   - flip the drawing direction
 *   - fit the barHeights into the canvas height.
 *
 * Wehn drawing a negative chart:
 *  - the canvas origin remains at top-right
 * - the drawing is scaled to
 *   - flip the drawing direction
 *   - fit the barHeights into the canvas height.
 *
 * Wehn drawing a dual chart:
 *  - the canvas origin is translated to the middle-left
 * - the drawing is scaled to
 *   - flip the drawing direction
 *   - fit the barHeights into half of the canvas height.
 *
 * Wehn drawing a tri chart:
 *  - the canvas origin is translated to the middle-left
 * - the drawing is scaled to
 *   - flip the drawing direction
 *   - fit the barHeights into half of the canvas height.
 *   - All bars are drawn with height = canvas.height / 2
 *   - zero heights are drawn half northward, and hald southward
 *
 *   TODO: Add validation for color names ... ValidColors.ts
 */
import { ElementRef, Injectable } from '@angular/core';
import { Bar } from './bar';
import { Bar3d} from './bar-3d';
import { CssColorString } from './valid-colors';
import * as  mathjs from 'mathjs';
import { Matrix } from 'mathjs';
import { ChartTypeEnum } from './chart-type-enum';
import {Rectangle} from './rectangle';


@Injectable({
    providedIn: 'root'
})
export class BarchartService {

    // Attributes
    canvasEl: HTMLCanvasElement;    // the canvas element to draw the chart on
    chartType: string;              // Positive, negative, dual, tri
    barHeights: number[];           // the bar heights world coordinates
    minimumBarWidth: number;        // the minimum width for a bar
    barGap: number;                 // the width of the gap between two bars, likely to be always 1
    fillColorMinus: string;         // the color to fill up the negative bars
    fillColorZero: string;          // the color to fill up the zero bars
    fillColorPlus: string;          // the color to fill up the positive bars

    // Calculated
    ctx: CanvasRenderingContext2D;  // canvas context
    canvasWidth: number;            // the canvas width
    canvasHeight: number;           // the canvas height
    barWidth: number;               // the bars' width
    bars: Bar[];                    // bar bars to be drawn
    bars_3d: Bar3d[];               // bar bars to be drawn
    coordinatesTips: any = [];

    VALID_TYPES: string[] = ['positive', 'negative', 'dual', 'tri'];
    POSITIVE = 0;
    NEGATIVE = 1;
    DUAL = 2;
    TRI = 3;


    tooltipId = 'rms-sparkline-barchart-tooltip';

    private cssColorString: CssColorString = null;

    constructor() { }

    draw(sparklineCanvas: ElementRef, lineColor: string) {
        const ctx: CanvasRenderingContext2D = sparklineCanvas.nativeElement.getContext('2d');

        // Draw
        ctx.fillStyle = lineColor;
        ctx.fillRect(20, 20, 150, 100);
    }

    drawNew(barGap: number,
            barHeights: number[],
            chartType: string,
            className: string,
            fillColorMinus: string,
            fillColorPlus: string,
            fillColorZero: string,
            height: number,
            minimumBarWidth: number,
            sparklineCanvas: ElementRef,
            width: number
        ): void {
        this.cssColorString = new CssColorString();

        // Must have 8 arguments
        if (arguments.length !== 11) {
            console.log(`BarchartService:drawNew - Invalid number of arguments: ` + arguments.length);
            throw new Error('barChart::constructor: invalid number of arguments: ' + arguments.length);
        }

        // canvasEl must be provided
        if (sparklineCanvas === null) {
            console.log(`BarchartService:drawNew - sparklineCanvas is null`);
            throw new Error('barChar::constructor: canvasEl is null');
        }
        if (sparklineCanvas.nativeElement.tagName !== `CANVAS`) {
            console.log(`BarchartService:drawNew - sparklineCanvas tag is not CANVAS`);
            throw new Error('barChar::constructor: canvasEl is is not CANVAS: ' + sparklineCanvas.nativeElement.tagName);
        }

        this.canvasEl = sparklineCanvas.nativeElement;
        this.ctx = sparklineCanvas.nativeElement.getContext('2d');
        this.canvasEl.height = height;
        this.canvasHeight = height;
        this.canvasEl.width = width;
        this.canvasWidth = width;
        if (className.length > 0) {
            this.canvasEl.classList.add(className);
        }

        // chartType must be valid
        if (this.VALID_TYPES.findIndex(checkCartType) === -1) {
            console.log(`BarchartService:drawNew - checkCartType is invalid: ` + checkCartType);
            throw new Error('barChart::constructor: Invalid chart type:  ' + chartType);
        }
        function checkCartType(chartTypeX: string): boolean {
            return chartTypeX === chartType;
        }
        this.chartType = chartType

        if (barHeights.length === 0) {
            console.log(`BarchartService:drawNew - barHeights is invalid: ` + barHeights);
            throw new Error('barChart::constructor: barHeights is empty');
        }
        this.barHeights = barHeights.slice(0);

        // Minimum barWidth must be equal or higher than 3
        if (minimumBarWidth < 3) { throw new Error('barChart::constructor: minimumBarWidth less than 3: ' + minimumBarWidth); }
        this.minimumBarWidth = minimumBarWidth;

        // Bar gap must be equal or higher than 1
        if (barGap < 1) { throw new Error('barChart::constructor: barGap less than 1: ' + barGap); }
        this.barGap = barGap;

        // fillColorMinus must be a valid CSS color
        if (!this.cssColorString.isValid(fillColorMinus)) {
            console.log(`BarchartService:drawNew - fillColorMinus is invalid: ` + fillColorMinus);
            throw new Error('barChart::constructor: Invalid fillColorMinus: ' + fillColorMinus);
        }
        this.fillColorMinus = fillColorMinus;
        // this.setFillColorMinus(fillColorMinus);

                // fillColorPlus must be a valid CSS color
        if (!this.cssColorString.isValid(fillColorPlus)) {
            console.log(`BarchartService:drawNew - fillColorPlus is invalid: ` + fillColorPlus);
            throw new Error('barChart::constructor: Invalid fillColorPlus: ' + fillColorPlus);
        }
        this.fillColorPlus = fillColorPlus;

        // fillColorZero must be a valid CSS color
        if (!this.cssColorString.isValid(fillColorZero)) {
            console.log(`BarchartService:drawNew - fillColorZero is invalid: ` + fillColorZero);
            throw new Error('barChart::constructor: Invalid fillColorZero: ' + fillColorZero);
        }
        this.fillColorZero = fillColorZero;

        // Debug
        // this.ctx.fillStyle = fillColorMinus;
        // this.ctx.fillRect(20, 20, 150, 100);
        // return;


        // Calculate parameters
        // this.setCtx(this.getCanvasEl().getContext('2d'));
        // this.setCanvasWidth(this.getCanvasEl().width);
        // this.setCanvasHeight(this.getCanvasEl().height);

        // Insert the bars
        let _barHeights: number[] = this.calculateBarWidth(width, barHeights, minimumBarWidth).slice(0);
        // console.log('BarChart::draw - calculateBarWidth: ' + JSON.stringify(this.getBarHeights()));

        // Save the bar width
        this.barWidth = this.computeBarWidth(width, _barHeights);
        if (_barHeights.length === 0) { throw new Error('barChart::calculateBarWidth: barHeights was trimmed to be empty'); }
        // console.log('BarChart::draw - computeBarWidth: ' + this.getBarWidth());

        // Insert the gaps by reducing barWidth to be no lower than minimumBarWidth, if necessary
        this.barWidth = this.insertGapsUsingBarWidth( width, _barHeights, this.barGap, this.minimumBarWidth);
        // console.log('BarChart::draw - insertGapsUsingBarWidth: ' + this.getBarWidth());

        // Insert the gaps by trimming barHeights, if necessary
        _barHeights = this.insertGapsUsingBarHeights(width, _barHeights, minimumBarWidth, this.barGap);
        if (_barHeights.length === 0) { throw new Error('barChart::insertGapsUsingBarHeights: barHeights was trimmed to be empty'); }
        // console.log('BarChart::draw - insertGapsUsingBarHeights: ' + JSON.stringify(this.getBarHeights()));

        // Set the bars to be drawn
        this.bars_3d = this.buildBars_1(this.barGap, _barHeights, this.barWidth, chartType, fillColorMinus, fillColorZero, fillColorPlus);
        // console.log('BarChart::draw - buildBars: ' +  JSON.stringify(this.getBars()));

        this.coordinatesTips = this.buildCoordinateTips(this.bars_3d);

        // Draw the sparkline
        this._draw_1(this.ctx, this.bars_3d);
    }

    /**
     * The bar width, barWidth, is the ratio between the canvas width and the
     * number of bars to draw, rounded down. The barWidth calculation is an
     * iteration seeking the number o bars to draw, barHeights.length, that yields
     * a barWidth equal or higher than the minimum bar width, minimumBarWidth. If
     * the initial barWidth, Math.floor(canvas.width / heights.length), yields a
     * barWidth that is less than minimumBarWidth, we drop the leftmost barHeights
     * element and recalculate the barWidth using the new heights.length; we iterate
     * until the barWidth is greater or equal to minBarWidth.
     *
     * Ideally, all bars will fit in the canvas.width, when drawn with the
     * minBarWidth. Therefore, if maximum number of bars that can be drawn in the
     * canvas is equal of larger than the number of bars to be drawn, we are done.
     * Otherwise, if barHeights has more bars than can be draw and must be pruned
     * to the maximum number of bars that can be drawn in the canvas.
     *
     * maxNumberOfBarsThatCanBeDrawnOnCanvas = Math.floor(canvasWidth / minBarWidth)
     *
     * Inpute
     *   {number} canvasWidth
     *   {number[]} barHeights
     *    {number} minBarWidth
     * Output
     *    {number[]}
     */
    calculateBarWidth(canvasWidth: number, barHeights: number[], minBarWidth: number): number[] {
        let _barHeights = barHeights.slice(0);

        const maxBars = Math.floor(canvasWidth / minBarWidth);
        if (maxBars < _barHeights.length) {
            _barHeights =  _barHeights.slice(-1 * maxBars);
        }

        return _barHeights;
    }
    computeBarWidth(canvasWidth: number, barHeights: number[]) {
        return Math.floor(canvasWidth / barHeights.length);
    }

    /**
     * If the initial width required, widthRequired, to insert the
     * bars and their gaps,
     * barWidth*barHeights.length + barGap*(barHeights.length - 1), is greater than
     * the canvas.width and the barWidth is greater than the minimumBarWidth,
     * decrement the barWidth by one pixel and recalculate
     * the widthRequired using the new barWidth; we iterate until the
     * widthRequired is less or equal to canvas.width.
     *
     *
     * In essence, The iteration seeks to find the barWidth that solves the
     * following equation:
     * canvas.width <= barWidth * barHeights.length + barGap * (barHeights.length - 1)
     *
     * Resolving for barWidth.length, we get:
     * barWidth = Math.max(minimumBarWidth, Math.floor(canvas.width + barGap - barGap * barHeights.length) /barHeights.length))
     *
     * barWidth = Math.max(minimumBarWidth, Math.floor( (canvasWidth - (barGap * (barHeights.length - 1))) / barHeights.length));
     *
     * Input
     *   {number} canvasWidth
     *    {number[]} barHeights
     *    {number} barGap
     *    {number} minimumBarWidth
     * Output
     *    {number}
     */
    insertGapsUsingBarWidth(canvasWidth: number, barHeights: number[], barGap: number, minimumBarWidth: number): number {
    // console.log(`bar-chart::insertGapsUsingBarWidth - canvasWidth: ` + canvasWidth);
    // console.log(`bar-chart::insertGapsUsingBarWidth - barHeights.length: ` + barHeights.length);
    // console.log(`bar-chart::insertGapsUsingBarWidth - barGap: ` + barGap);
    // console.log(`bar-chart::insertGapsUsingBarWidth - minimumBarWidth: ` + minimumBarWidth);

    // console.log(`bar-chart::insertGapsUsingBarWidth - requiredBarWidth: ` + Math.floor( (canvasWidth - (barGap * (barHeights.length - 1))) / barHeights.length));
        return  Math.max(minimumBarWidth, Math.floor( (canvasWidth - (barGap * (barHeights.length - 1))) / barHeights.length));
    }

    /**
     * If the initial width required, widthRequired, to insert the
     * bars and their gaps,
     * barWidth*barHeights.length + barGap*(barHeights.length - 1), is greater than
     * the canvas.width and the barWidth is not greater than the minimumBarWidth, we
     * drop the leftmost barHeights element and recalculate the widthRequired using
     * the new heights.length; we iterate until the widthRequired is less or equal to
     * canvas.width.
     *
     * In essence, The iteration seeks to find the barHeights.length that solves the
     * following equation:
     * canvas.width <= barHeights.length * barWidth + (barHeights.length - 1) * barGap
     *
     * Resolving for barHeights.length, we get:
     * barHeights.length = Math.floor((canvas.width + barGap) / (barWidth + barGap))
     *
     * Given the desired barHeights.length, we prune barHeights to have the desired
     * length
     *
     * Input
     *   {number} canvasWidth
     *    {number[]} barHeights
     *    {number} barWidth
     *   {number} barGap
     * Output
     *    {number[]}
     */
    insertGapsUsingBarHeights(canvasWidth: number, barHeights: number[], barWidth: number, barGap: number): number[] {
        const desiredLength = Math.floor((canvasWidth + barGap) / (barWidth + barGap));

        return barHeights.slice(-desiredLength);
    }

     buildBars(
         canvasHeight: number,
         barHeights: number[],
         barWidth: number,
         chartType: string,
         fillColorMinus: string,
         fillColorZero: string,
         fillColorPlus: string): Bar[] {

         const bars: Bar[] = [];
         let fillColor: string;
         let xOrigin: number;
         let yOrigin: number;
         let height: number;

         for (const barHeight of barHeights) {
             switch (chartType) {
                 case this.VALID_TYPES[this.POSITIVE]:
                     xOrigin = 0;
                     yOrigin = 0;
                     height = barHeight;
                     fillColor = fillColorPlus;
                     break;
                 case this.VALID_TYPES[this.NEGATIVE]:
                     xOrigin = 0;
                     yOrigin = 0;
                     height = barHeight;
                     fillColor = fillColorMinus;
                     break;
                 case this.VALID_TYPES[this.DUAL]:
                     xOrigin = 0;
                     yOrigin = 0;
                     height = barHeight;
                     fillColor = barHeight > 0 ? fillColorPlus : fillColorMinus;
                     break;
                 case this.VALID_TYPES[this.TRI]:
                     xOrigin = 0;
                     height = barHeight < 0 ? -canvasHeight / 2 : barHeight === 0 ? canvasHeight / 4 : canvasHeight / 2;
                     yOrigin = barHeight === 0 ? -height / 2 : 0;
                     fillColor = barHeight < 0 ? fillColorMinus : barHeight === 0 ? fillColorZero : fillColorPlus;
                     // console.log(`::buildBars - tri /  barHeight: ` + barHeight + `    height: ` + height);
                     break;
                 default:
                     break;
             }
             const bar: Bar = new Bar(xOrigin, yOrigin, barWidth, height, fillColor);
             bars.push(bar);
         }
         return bars;
     }

     buildBars_1(
         /* canvasHeight: number, */
         barGap: number,
         barHeights: number[],
         barWidth: number,
         chartType: string,
         fillColorMinus: string,
         fillColorZero: string,
         fillColorPlus: string): Bar3d[] {

         let bar_3d: Bar3d[];
         let sToCanvasHeightMatrix: Matrix;
         let sFlipCanvasMatrix: Matrix;
         let dMoveCanvasMatrix: Matrix;
         let tMatrix: Matrix;

         // create a collection of bars based on world (lower left) coordinates.
         bar_3d = this.buildWorldCoordinateBars(barGap, barHeights.slice(0), barWidth, chartType, fillColorMinus, fillColorPlus, fillColorZero);

         // Scale coordinates to fit the canvas height
         sToCanvasHeightMatrix =  this.scaleToCanvasHeight(barHeights, chartType, this.canvasHeight);

         // Scale the coordinates to swtch from world to canvas coordinates
         sFlipCanvasMatrix = this.scaleToCanvasCoordinates();

         // Move the bars to fit the new coordinate system’s aesthetics
         dMoveCanvasMatrix = this.moveWithinCanvas(this.canvasHeight, chartType);

         // compute the full transformation matrix
         tMatrix =  mathjs.matrix(mathjs.multiply(mathjs.multiply(sFlipCanvasMatrix, sToCanvasHeightMatrix), dMoveCanvasMatrix));

         for (const bar of bar_3d) {
             bar.lowerLeft =  mathjs.matrix(mathjs.multiply( bar.lowerLeft, tMatrix));
             bar.upperRight =  mathjs.matrix(mathjs.multiply( bar.upperRight, tMatrix));
         }
         return bar_3d;
     }

     /**
      * Builds a collection of Bar3D bars, one for each barHeight
      *
      * Input
      *    barGap
      *    barHeights
      *    barWidth
      *    chartType
      *    fillColorMinus
      *    fillColorPlus
      *     fillColorZero
      */
     buildWorldCoordinateBars(
         barGap: number,
         barHeights: number[],
         barWidth: number,
         chartType: string,
         fillColorMinus: string,
         fillColorPlus: string,
         fillColorZero: string): Bar3d[] {

         const bar_3d: Bar3d[] = [];
         let lowerLeft: Matrix;
         let upperRight: Matrix;
         let fillColor: string;

         // create a collection of bars based on world (lower left) coordinates.
         switch (chartType.toUpperCase()) {

             case ChartTypeEnum.POSITIVE:
                  // https://palantir.github.io/tslint/rules/no-switch-case-fall-through/
                 /* falls through */
             case ChartTypeEnum.NEGATIVE:
                 /* falls through */
             case ChartTypeEnum.DUAL:
                 for (let i = 0; i < barHeights.length; i++) {
                     const barHeight = barHeights[i];
                     fillColor = barHeight < 0 ? fillColorMinus : barHeight === 0 ? fillColorZero : fillColorPlus;
                     lowerLeft = mathjs.matrix([i * (barWidth + barGap), 0, 1]);
                     upperRight = mathjs.matrix([i * (barWidth + barGap) + barWidth, barHeight, 1]);
                     bar_3d.push(new Bar3d(lowerLeft, upperRight, fillColor, barHeight));
                 }
                 break;
             case ChartTypeEnum.TRI:
                 const negativeHeight = -8;
                 const zeroHeight = 4;
                 const positiveHeight = 8;
                 barHeights = barHeights.map(function(height: number) { return height < 0 ? negativeHeight : height === 0 ? zeroHeight : positiveHeight; });
                 // console.log(`barHeights TRI: ` + JSON.stringify(barHeights));
                 for (let i = 0; i < barHeights.length; i++) {
                     const barHeight = barHeights[i];
                     fillColor = barHeight === negativeHeight ? fillColorMinus : barHeight === zeroHeight ? fillColorZero : fillColorPlus;

                     if (barHeight === negativeHeight || barHeight === positiveHeight) {
                         lowerLeft = mathjs.matrix([i * (barWidth + barGap), 0, 1]);
                         upperRight = mathjs.matrix([i * (barWidth + barGap) + barWidth, barHeight, 1]);
                         // console.log(`barHeights TRI - lowerLeft: ` + JSON.stringify(lowerLeft) + `, upperRight: ` + JSON.stringify(upperRight.toArray()));
                     } else {
                         lowerLeft = mathjs.matrix([i * (barWidth + barGap), -barHeight / 2, 1]);
                         upperRight = mathjs.matrix([i * (barWidth + barGap) + barWidth, barHeight / 2, 1]);
                         // console.log(`barHeights TRI - lowerLeft: ` + JSON.stringify(lowerLeft) + `, upperRight: ` + JSON.stringify(upperRight.toArray()));
                     }

                     bar_3d.push(new Bar3d(lowerLeft, upperRight, fillColor, barHeight < 0 ? -1 : barHeight === 0 ? 0 : 1));
                 }
                 break;
             default:
                 break;
         }
         return bar_3d;
     }

     /**
      * Scale the Y coordinates; note that the X coordinates were scaled during the calculations to establish the width and gap.
      * TODO: examine the possibility to switch all calculation to be done AFTER all transformations are done.
      *
      * Input
      *    barHeights
      *    chartType
      *    canvasHeight
      */
     scaleToCanvasHeight(barHeights: number[], chartType: string, canvasHeight: number): Matrix {
         let sToCanvasHeightMatrix: number[][];

         const sX = 1;
         let sY: number;

         switch (chartType.toUpperCase()) {
             case ChartTypeEnum.POSITIVE:
                 sY = canvasHeight / Math.abs(Math.max(...barHeights));
                 break;
             case ChartTypeEnum.NEGATIVE:
                 sY = canvasHeight / Math.abs(Math.min(...barHeights));
                 break;
             case ChartTypeEnum.DUAL:
                 sY = (canvasHeight / 2 ) / Math.max(Math.abs(Math.max(...barHeights)), Math.abs(Math.min(...barHeights))) ;
                 break;
             case ChartTypeEnum.TRI:
                 sY = (canvasHeight / 2 ) / Math.max(Math.abs(Math.max(...barHeights)), Math.abs(Math.min(...barHeights))) ;
                 break;
             default:
                 break;
         }
         sToCanvasHeightMatrix =  [ [sX, 0, 0], [0, sY, 0], [0, 0, 1] ];

         return mathjs.matrix(sToCanvasHeightMatrix);
     }

     /**
      * Calculate sFlipCanvasMatrix, to switch from world coordinates to canvas coordinates
      */
     scaleToCanvasCoordinates(): Matrix {
         let sFlipCanvasMatrix: number[][];

         sFlipCanvasMatrix = [ [1, 0, 0], [0, -1, 0], [0, 0, 1] ];

         return mathjs.matrix(sFlipCanvasMatrix);
     }

     moveWithinCanvas(canvasHeight: number, chartType: string): Matrix {
         let dMoveCanvasMatrix: number[][];

         const dX = 0;
         let dY: number;

         switch (chartType.toUpperCase()) {
             case ChartTypeEnum.POSITIVE:
                 dY = canvasHeight;
                 break;
             case ChartTypeEnum.NEGATIVE:
                 dY = 0;
                 break;
             case ChartTypeEnum.DUAL:
                 dY = canvasHeight / 2;
                 break;
             case ChartTypeEnum.TRI:
                 dY = canvasHeight / 2;
                 break;
             default:
                 break;
         }
         dMoveCanvasMatrix = [ [1, 0, 0], [0, 1, 0], [dX, dY, 1] ];

         return  mathjs.matrix(dMoveCanvasMatrix);
     }

     buildCoordinateTips(bard3D: Bar3d[]): Rectangle[] {
         const coordinateTips: any = [];

         for (const bar of bard3D) {
             coordinateTips.push({
                 'rect': new Rectangle(bar.getLowerLeftX(), bar.getLowerLeftY(), bar.getWidth(),  bar.getHeight()),
                 'color': 'red',
                 'tip': bar.originalHeight
             });
         }

         return coordinateTips;
     }

     //
     // transformCanvas(
     //     ctx: CanvasRenderingContext2D,
     //     chartType: string,
     //     canvasHeight: number,
     //     barHeights: number[]) {
     //
     //     let hScaling = 1;
     //     const hSkewing = 0;
     //     const vSkewing = 0;
     //     let vScaling = 1;
     //     let hMoving = 0;
     //     let vMoving = 0;
     //     switch (chartType) {
     //         case this.VALID_TYPES[this.POSITIVE]:
     //             hScaling = 1;
     //             vScaling = -1 * canvasHeight / Math.max(...barHeights);
     //             hMoving  = 0;
     //             vMoving  = canvasHeight;
     //             break;
     //         case this.VALID_TYPES[this.NEGATIVE]:
     //             hScaling = 1;
     //             vScaling = -1 * canvasHeight / Math.abs(Math.min(...barHeights));
     //             hMoving  = 0;
     //             vMoving  = 0;
     //             break;
     //         case this.VALID_TYPES[this.DUAL]:
     //             hScaling = 1;
     //                 // console.log(`::transformCanvas - DUAL /  vScaling / Math.min(...barHeights: ` + Math.min(...barHeights));
     //                 // console.log(`::transformCanvas - DUAL /  vScaling / Math.max(...barHeights: ` + Math.max(...barHeights));
     //             vScaling = -1 * canvasHeight / (Math.max(Math.abs(Math.min(...barHeights)), Math.max(...barHeights)) * 2);
     //             hMoving  = 0;
     //             vMoving  = canvasHeight / 2;
     //                 // console.log(`::transformCanvas - DUAL /  vScaling / vMoving: ` + vMoving);
     //             break;
     //         case this.VALID_TYPES[this.TRI]:
     //             hScaling = 1;
     //                 // console.log(`::transformCanvas - TRI /  vScaling / Math.min(...barHeights: ` + Math.min(...barHeights));
     //                 // console.log(`::transformCanvas - TRI /  vScaling / Math.max(...barHeights: ` + Math.max(...barHeights));
     //             // vScaling = -1 * canvasHeight / (Math.max(Math.abs(Math.min(...barHeights)), Math.max(...barHeights)) * 2);
     //             vScaling = -1;
     //             hMoving  = 0;
     //             vMoving  = canvasHeight / 2;
     //                 // console.log(`::transformCanvas - TRI /  vScaling / vMoving: ` + vMoving);
     //             break;
     //         default:
     //             break;
     //     }
     //     ctx.setTransform(hScaling, hSkewing, vSkewing, vScaling, hMoving, vMoving);
     // }

     // Draw the bars!
     // _draw(ctx: CanvasRenderingContext2D, bars: Bar[], barGap: number): void {
     //     for (const bar of bars) {
     //         // set the bar fill color
     //         ctx.fillStyle = bar.getFillColor();
     //
     //         // draw the bar
     //         ctx.fillRect(bar.getX(), bar.getY(), bar.getWidth(), bar.getHeight());
     //
     //         // Insert barGap by translating x-orign
     //         ctx.translate(barGap, 0);
     //     }
     // }

     // Draw the bars!
     _draw_1(ctx: CanvasRenderingContext2D, bars: Bar3d[]): void {
         console.log('drawing');
         for (const bar of bars) {
             bar.draw(ctx);
         }
     }

     /**
      * Sparkline Barchart Mouse Move Handler
      *
      * Input
      *    event
      *    canvasEl
      */
     handleMouseMove($event: MouseEvent, canvasEl: HTMLElement) {
         let tooltip;
         let mySpan: HTMLSpanElement;
         const fontDefinition = '12px FUTURA';
         let body: any;
         let width: number;
         let height: number;
         let rect: any;
         let scrollLeft: number;
         let scrollTop: number;

         // Get the position of the canvas element relative to the document
         // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
         rect = canvasEl.getBoundingClientRect();
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         rect = { left: rect.left + scrollLeft, top: rect.top + scrollTop  };

         const mouseX = $event.clientX - rect.left + window.pageXOffset || document.documentElement.scrollLeft;
         const mouseY = $event.clientY - rect.top + window.pageYOffset || document.documentElement.scrollTop;
         // console.log(`BarChart::handleMouseMove mouseX: ` + mouseX + `, mouseY: ` + mouseY);

         for (let i = 0; i < this.coordinatesTips.length; i++) {
             const tipX = this.coordinatesTips[i].rect.getX();
             const tipWidth = this.coordinatesTips[i].rect.getWidth();
             let tipHeight = this.coordinatesTips[i].rect.getHeight();
             let tipY = this.coordinatesTips[i].rect.getY();
             if (tipHeight < 0) {
                 tipY += tipHeight;
                 tipHeight *= -1;
             }

             // console.log(`mouseX: ` + mouseX + `, mouseY: ` + mouseY);
             // console.log(`tipX: ` + tipX + `, tipY: ` + tipY + `, tipWidth: ` + tipWidth + `, tipHeight: ` + tipHeight);

             if (tipX <=  mouseX && mouseX <= tipX + tipWidth &&
                 tipY <=  mouseY && mouseY <= tipY + tipHeight) {

                 // console.log(`We have a match`);

                 // A trick to find the width / height of the canvas to host the tooltip
                 mySpan = document.createElement('span') as HTMLSpanElement;
                 mySpan.id = 'mySpanId';
                 mySpan.style.font = fontDefinition;
                 mySpan.style.textAlign = 'center';
                 mySpan.innerHTML = '' +  this.coordinatesTips[i].tip;
                 body = document.getElementsByTagName('body')[0];
                 body.appendChild(mySpan);
                 mySpan = document.getElementById('mySpanId');
                 width = mySpan.getBoundingClientRect().width + 4;
                 height = mySpan.getBoundingClientRect().height + 2;
                 mySpan.parentElement.removeChild(mySpan);
                 // console.log(`mySpanWidth: ` + width + `, mySpanHeight: ` + height);

                 // Remove the existing tooltip, if present
                 tooltip = document.getElementById(this.tooltipId);
                 if (tooltip) {
                     // console.log(`BarChart::handleMouseMove deleting tooltip`);
                     tooltip.parentElement.removeChild(tooltip);
                 }

                 tooltip = document.createElement('CANVAS') as HTMLCanvasElement;
                 tooltip.id = this.tooltipId;
                 tooltip.width = width;
                 tooltip.height = height;
                 tooltip.style.position = 'absolute';
                 tooltip.style.left = ($event.clientX + 5) + 'px';
                 tooltip.style.top = ($event.clientY + 7) + 'px';
                 // tooltip.style.left = '' + 100 + 'px';
                 // tooltip.style.top = '' + 100 + 'px';
                 tooltip.style.border = '1px solid';
                 tooltip.style.zIndex = '20';
                 tooltip.style.textAlign = 'center';

                 const ctx = (tooltip as HTMLCanvasElement).getContext('2d');
                 ctx.fillStyle = 'white';
                 ctx.fillRect(0, 0, width, height);
                 ctx.fill();
                 ctx.fillStyle = 'red';
                 ctx.font = fontDefinition;
                 ctx.fillText('' + this.coordinatesTips[i].tip, 1, height - 2);

                 body = document.getElementsByTagName('body')[0];
                 body.appendChild(tooltip);

                 break; /// required to prevent Q1 : Q3 tooltip from showing
             }  else {
                 // console.log(`this is not a match`);

                 // Remove the existing tooltip, if present
                 tooltip = document.getElementById(this.tooltipId);
                 if (tooltip) {
                     // console.log(`BarChart::handleMouseMove deleting tooltip`);
                     tooltip.parentElement.removeChild(tooltip);
                 }
             }
         }
     }

     handleMouseOut() {
         // Remove the existing tooltip, if present
         const tooltip = document.getElementById(this.tooltipId);
         if (tooltip) {
             // console.log(`BarChart::handleMouseOut deleting tooltip`);
             tooltip.parentElement.removeChild(tooltip);
         }
     }
}
