
// Copyright2018 Rodrigo Silveira
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

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
 0        1         2         3         4         5         6         7         8
 12345678901234567890123456789012345678901234567890123456789012345678901234567890
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
 */
import { Bar } from './bar';

export class BarChart {

    // Attributes
    canvasEl: HTMLCanvasElement;    // the canvas element to draw the chart on
    chartType: string;              // Positive, negative, dual, tri
    barHeights: number[];           // the bar heights world coordinates
    minimumBarWidth: number;        // the minimum width for a bar
    barGap: number;                 // the width of the gap between two bars, likely to be always 1
    fillColorMinus: string;          // the color to fill up the negative bars
    fillColorZero: string;          // the color to fill up the zero bars
    fillColorPlus: string;         // the color to fill up the positive bars
    
    // Calculated
    ctx: CanvasRenderingContext2D;  // canvas context
    canvasWidth: number;            // the canvas width
    canvasHeight: number;           // the canvas height
    barWidth: number;               // the bars' width
    bars: Bar[];                    // bar bars to be drawn
    
    VALID_TYPES: string[] = ['positive', 'negative', 'dual', 'tri'];
    POSITIVE = 0;
    NEGATIVE = 1;
    DUAL = 2;
    TRI = 3;

    // from here: https://gist.github.com/olmokramer/82ccce673f86db7cda5e
    CSS_VALID_COLOR: any = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/i;

    // Attributes setters and Getters
    setCanvasEl(value: HTMLCanvasElement) { this.canvasEl = value; }
    getCanvasEl(): HTMLCanvasElement { return this.canvasEl; }

    setChartType(value: string) { this.chartType = value; }
    getChartType(): string { return this.chartType; }

    setBarHeights(value: number[]) { this.barHeights = value.slice(0); }
    getBarHeights(): number[] { return this.barHeights.slice(0); }

    setMinimumBarWidth(value: number) { this.minimumBarWidth = value; }
    getMinimumBarWidth(): number { return this.minimumBarWidth; }

    setBarGap(value: number) { this.barGap = value; }
    getBarGap(): number { return this.barGap; }

    setFillColorMinus(value: string) { this.fillColorMinus = value; }
    getFillColorMinus(): string { return this.fillColorMinus; }

    setFillColorZero(value: string) { this.fillColorZero = value; }
    getFillColorZero(): string { return this.fillColorZero; }

    setFillColorPlus(value: string) { this.fillColorPlus = value; }
    getFillColorPlus(): string { return this.fillColorPlus; }

    // Parameters setters and getters
    setCtx(value: CanvasRenderingContext2D) { this.ctx = value; }
    getCtx(): CanvasRenderingContext2D { return this.ctx; }

    setCanvasWidth(value: number) { this.canvasWidth = value; }
    getCanvasWidth(): number { return this.canvasWidth; }

    setCanvasHeight(value: number) { this.canvasHeight = value; }
    getCanvasHeight(): number { return this.canvasHeight; }

    setBarWidth(value: number) { this.barWidth = value; }
    getBarWidth(): number { return this.barWidth; }

    setBars(value: Bar[]) { this.bars = value.slice(0); }
    getBars(): Bar[] { return this.bars; }

    constructor(canvasEl: HTMLCanvasElement,
                chartType: string,
                barHeights: number[],
                minimumBarWidth: number,
                barGap: number,
                fillColorMinus: string,
                fillColorZero: string,
                fillColorPlus: string) {

        // Must have 8 arguments
        if (arguments.length !== 8) { throw new Error('barChart::constructor: invalid number of arguments: ' + arguments.length); }

        // canvasEl must be provided
        if (canvasEl === null) { throw new Error('barChar::constructor: canvasEl is null'); }
        if (canvasEl.tagName !== `CANVAS`) { throw new Error('barChar::constructor: canvasEl is is not CANVAS: ' + canvasEl.tagName); }
        this.setCanvasEl(canvasEl);
    
        if (canvasEl.width === 0) { throw new Error('barChar::constructor: canvas width  is zero'); }
        if (canvasEl.height === 0) { throw new Error('barChar::constructor: canvas height  is zero'); }
        
        // chartType must be valid
        if (this.VALID_TYPES.findIndex(checkCartType) === -1) { throw new Error('barChart::constructor: Invalid chart type:  ' + chartType); }
        function checkCartType(_chartType: string): boolean {
            return _chartType === chartType;
        }
        this.setChartType(chartType);

        if (!barHeights) { throw new Error('barChart::constructor: barHeights is null'); }
        if (barHeights.length === 0) { throw new Error('barChart::constructor: barHeights is empty'); }
        this.setBarHeights(barHeights.slice(0));

        // Minimum barWidth must be equal or higher than 3
        if (minimumBarWidth < 3) { throw new Error('barChart::constructor: minimumBarWidth less than 3: ' + minimumBarWidth); }
        this.setMinimumBarWidth(minimumBarWidth);

        // Bar gap must be equal or higher than 1
        if (barGap < 1) { throw new Error('barChart::constructor: barGap less than 1: ' + barGap); }
        this.setBarGap(barGap);

        // fillColorPlus must be a valid CSS color
        if (!this.CSS_VALID_COLOR.test(fillColorMinus)) { throw new Error('barChart::constructor: Invalid fillColorMinus: ' + fillColorMinus); }
        this.setFillColorMinus(fillColorMinus);

        // fillColorZero must be a valid CSS color
        if (!this.CSS_VALID_COLOR.test(fillColorZero)) { throw new Error('barChart::constructor: Invalid fillColorZero: ' + fillColorZero); }
        this.setFillColorZero(fillColorZero);

        // fillColorPlus must be a valid CSS color
        if (!this.CSS_VALID_COLOR.test(fillColorPlus)) { throw new Error('barChart::constructor: Invalid fillColorPlus: ' + fillColorPlus); }
        this.setFillColorPlus(fillColorPlus);
    }

    draw() {
        // Calculate parameters
        this.setCtx(this.getCanvasEl().getContext('2d'));
        this.setCanvasWidth(this.getCanvasEl().width);
        this.setCanvasHeight(this.getCanvasEl().height);

        // Insert the bars
        let _barHeights: number[] =
            this.calculateBarWidth(
                this.getCanvasWidth(),
                this.getBarHeights(),
                this.getMinimumBarWidth()).slice(0);

        // Save the bar width
        this.setBarWidth(this.computeBarWidth(this.getCanvasWidth(), _barHeights));
        if (_barHeights.length === 0) { throw new Error('barChart::calculateBarWidth: barHeights was trimmed to be empty'); }

        // Insert the gaps by reducing barWidth to be no lower than minimumBarWidth, if necessary
        this.setBarWidth(
            this.insertGapsUsingBarWidth(
                this.getCanvasWidth(),
                _barHeights,
                this.getBarGap(),
                this.getMinimumBarWidth())
        );

        // Insert the gaps by trimming barHeights, if necessary
        _barHeights = this.insertGapsUsingBarHeights(
            this.getCanvasWidth(),
            _barHeights,
            this.getMinimumBarWidth(),
            this.getBarGap());
        if (_barHeights.length === 0) { throw new Error('barChart::insertGapsUsingBarHeights: barHeights was trimmed to be empty'); }

        // Set the bars to be drawn
        this.setBars(this.buildBars(
            this.getCanvasWidth(),
            _barHeights,
            this.getBarWidth(),
            this.getChartType(),
            this.getFillColorMinus(),
            this.getFillColorZero(),
            this.getFillColorPlus()).slice(0));

        // Transform the canvas
        this.transformCanvas(
            this.getCtx(),
            this.getChartType(),
            this.getCanvasHeight(),
            this.getBarHeights());

        // Draw the sparkline
        this._draw(this.getCtx(), this.getBars(), this.getCanvasHeight());
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
     * @param {number} canvasWidth
     * @param {number[]} barHeights
     * @param {number} minBarWidth
     * @returns {number[]}
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
     *
     * @param {number} canvasWidth
     * @param {number[]} barHeights
     * @param {number} barWidth
     * @param {number} barGap
     * @param {number} minimumBarWidth
     * @returns {number}
     */
    insertGapsUsingBarWidth(canvasWidth: number, barHeights: number[], barGap: number, minimumBarWidth: number): number {
        // console.log(`bar-chart::insertGapsUsingBarWidth - canvasWidth: ` + canvasWidth);
        // console.log(`bar-chart::insertGapsUsingBarWidth - barHeights.length: ` + barHeights.length);
        // console.log(`bar-chart::insertGapsUsingBarWidth - barGap: ` + barGap);
        // console.log(`bar-chart::insertGapsUsingBarWidth - minimumBarWidth: ` + minimumBarWidth);

        console.log(`bar-chart::insertGapsUsingBarWidth - requiredBarWidth: ` + Math.floor( (canvasWidth - (barGap * (barHeights.length - 1))) / barHeights.length));
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
     * @param {number} canvasWidth
     * @param {number[]} barHeights
     * @param {number} barWidth
     * @param {number} barGap
     * @returns {number[]}
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
                    yOrigin = -canvasHeight / 4;
                    height = barHeight === 0 ? canvasHeight : canvasHeight / 4;
                    fillColor = barHeight < 0 ? fillColorMinus : barHeight === 0 ? fillColorZero : fillColorPlus;
                    break;
                default:
                    break;
            }
            const bar: Bar = new Bar(xOrigin, yOrigin, barWidth, height, fillColor);
            bars.push(bar);
        }
        return bars;
    }

    //
    transformCanvas(
        ctx: CanvasRenderingContext2D,
        chartType: string,
        canvasHeight: number,
        barHeights: number[]) {

        let hScaling = 1;
        const hSkewing = 0;
        const vSkewing = 0;
        let vScaling = 1;
        let hMoving = 0;
        let vMoving = 0;
        switch (chartType) {
            case this.VALID_TYPES[this.POSITIVE]:
                hScaling = 1;
                vScaling = -1 * canvasHeight / Math.max(...barHeights);
                hMoving  = 0;
                vMoving  = canvasHeight;
                break;
            case this.VALID_TYPES[this.NEGATIVE]:
                hScaling = 1;
                vScaling = -1 * canvasHeight / Math.abs(Math.min(...barHeights));
                hMoving  = 0;
                vMoving  = 0;
                break;
            case this.VALID_TYPES[this.DUAL]:
                hScaling = 1;
                vScaling = -1 * canvasHeight / (Math.max(Math.abs(Math.min(...barHeights)), Math.max(...barHeights)) / 2);
                hMoving  = 0;
                vMoving  = canvasHeight / 2;
                break;
            case this.VALID_TYPES[this.TRI]:
                hScaling = 1;
                vScaling = -1;
                hMoving  = 0;
                vMoving  = canvasHeight / 2;
                break;
            default:
                break;
        }
        ctx.setTransform(hScaling, hSkewing, vSkewing, vScaling, hMoving, vMoving);
    }

    // Draw the bars!
    _draw(ctx: CanvasRenderingContext2D, bars: Bar[], barGap: number): void {
        for (const bar of bars) {
            // set the bar fill color
            ctx.fillStyle = bar.getFillColor();

            // draw the bar
            ctx.fillRect(bar.getX(), bar.getY(), bar.getWidth(), bar.getHeight());

            // Inser barGap by translating x-orign
            ctx.translate(barGap, 0);
        }
    }
}


