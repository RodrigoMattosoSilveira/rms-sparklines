// Copyright 2018 Rodrigo Silveira
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

import { Rectangle } from './rectangle';

export class BoxPlot {
    
    // Attributes
    canvasEl: HTMLCanvasElement;
    
    axisColor: string;
    axisLineWidth: number;
    chartType: string;
    className: string;
    drawingMethod: string;
    lowWhiskerColor: string;
    lowWhiskerLineWidth: number;
    height: number;
    interQuartileRangeLineColor: string;
    interQuartileRangeFillColor: string;
    interQuartileRangeLineWidth: number;
    highWhiskerColor: string;
    highWhiskerLineWidth: number;
    medianColor: string;
    medianLineWidth: number;
    population: number[];
    width: number;
    
    // Calculated Attributes
    maximum: number;
    quartile_3: number;
    median: number;
    quartile_1: number;
    minimum: number;
    x_axis_canvas_gap: number;   // canvas.width / 16
    x_axis_translation: number;   // canvas.width / 16
    whiskerHeight: number;      // (canvas.height / 5)
    medianHeight: number;       // = 2 *  (canvas.height / 3)
    coordinatesTips: any = [];
    tootipBoxMargin = 2;
    
    tooltipId = 'rms-sparkline-boxplot-tooltip';
    
    constructor(
        axisColor: string,
        axisLineWidth: number,
        chartType: string,
        className: string,
        drawingMethod: string,
        height: number,
        highWhiskerColor: string,
        highWhiskerLineWidth: number,
        interQuartileRangeLineColor: string,
        interQuartileRangeFillColor: string,
        interQuartileRangeLineWidth: number,
        lowWhiskerColor: string,
        lowWhiskerLineWidth: number,
        medianColor: string,
        medianLineWidth: number,
        population: number[],
        width: number) {
    
        // Save the attributes
        this.axisColor = axisColor;
        this.axisLineWidth = axisLineWidth;
        this.chartType = chartType;
        this.className = className;
        this.drawingMethod = drawingMethod;
        this.height = height;
        this.highWhiskerLineWidth = highWhiskerLineWidth;
        this.highWhiskerColor = highWhiskerColor;
        this.interQuartileRangeLineColor = interQuartileRangeLineColor;
        this.interQuartileRangeFillColor = interQuartileRangeFillColor;
        this.interQuartileRangeLineWidth = interQuartileRangeLineWidth;
        this.lowWhiskerColor = lowWhiskerColor;
        this.lowWhiskerLineWidth = lowWhiskerLineWidth;
        this.medianColor = medianColor;
        this.medianLineWidth = medianLineWidth;
        this.population = population;
        this.width = width;
    }
    
    /**
     * Compute the amount of white space between the canvas vertical boundaries
     *
     * @param {number} width
     * @returns {number}
     */
    static calculateX_axis_canvas_gap(width: number): number {
        
        return width / 16;
    }
    
    /**
     * Computer the whisker height
     *
     * @param {number} height
     * @returns {number}
     */
    static calculateWhiskerHeight(height: number): number {
        return height / 5;
    }
    
    
    /**
     * Computer the median height
     *
     * @param {number} height
     * @returns {number}
     */
    static calculateMedianHeight(height: number): number {
        return (height / 3) * 2;
    }
    
    /**
     * Compute the distance to move the x-axis
     *
     * @param {number} height
     * @returns {number}
     */
    static calculateX_axis_translation(height: number): number {
        return (height / 2);
    }
    
    static helloWorld(): string { return `hello world`; }
    
    /**
     * Sort an array
     *
     * @param {number[]} array
     * @returns {number[]}
     */
    static sortArray (array: number[]): number[] {
        const sortedArray: number[] = array.slice(0);
        sortedArray.sort(function(a, b) { return a - b; });
        return sortedArray;
    }
    
    /**
     * Calculate the median of a sorted array
     * @param {number[]} population
     * @returns {number}
     */
    static calculateMedian(population: number[]): number {
        const sortedPopulation = BoxPlot.sortArray(population);
        let median = 0;
        const numsLen: number = sortedPopulation.length;
        
        // console.log(`::calculateMedian - population: ` + JSON.stringify(sortedPopulation));
        if (numsLen % 2 === 0 /* is even */) {
            // average of two middle numbers
            median = (sortedPopulation[numsLen / 2 - 1] + sortedPopulation[numsLen / 2]) / 2;
        } else { /* is odd */
            // middle number only
            median = sortedPopulation[Math.floor(numsLen / 2)];
        }
        
        return median;
    }
    
    /**
     * Calculate the first quartile of a sorted array
     * @param {number[]} population
     * @returns {number}
     */
    static calculateQuartile_1 (population: number[]): number {
        const sortedPopulation = BoxPlot.sortArray(population);
        const length = sortedPopulation.length;
        let quartile: number[] = null;
        
        switch (length % 2) {
            case 0:
                quartile = sortedPopulation.slice(0, (length / 2) + 1);
                // console.log(`::calculateQuartile_1 - quartile - even: ` + JSON.stringify(quartile));
                break;
            case 1:
                quartile = sortedPopulation.slice(0, Math.floor(length / 2));
                // console.log(`::calculateQuartile_1 - quartile - odd: ` + JSON.stringify(quartile));
                break;
        }
        
        return BoxPlot.calculateMedian(quartile);
    }
    
    /**
     * Calculate the third quartile of a sorted array
     * @param {number[]} population
     * @returns {number}
     */
    static calculateQuartile_3 (population: number[]): number {
        const sortedPopulation = BoxPlot.sortArray(population);
        // console.log(`::calculateQuartile_3 - quartile - sortedPopulation: ` + JSON.stringify(sortedPopulation));
        const length = sortedPopulation.length;
        let quartile: number[] = null;
        
        switch (length % 2) {
            case 0:
                quartile = sortedPopulation.slice((length / 2));
                // console.log(`::calculateQuartile_3 - quartile - even: ` + JSON.stringify(quartile));
                break;
            case 1:
                quartile = sortedPopulation.slice(Math.ceil(length / 2));
                // console.log(`::calculateQuartile_3 - quartile - odd: ` + JSON.stringify(quartile));
                break;
        }
        return BoxPlot.calculateMedian(quartile);
    }
    
    draw() {
        let drawingHtml: HTMLElement;
        this.maximum = Math.floor(Math.max(...this.population));
        this.minimum = Math.floor(Math.min(...this.population));
        this.median = Math.floor(BoxPlot.calculateMedian(this.population));
        this.quartile_1 = Math.floor(BoxPlot.calculateQuartile_1(this.population));
        this.quartile_3 = Math.floor(BoxPlot.calculateQuartile_3(this.population));
        this.x_axis_canvas_gap = Math.floor(BoxPlot.calculateX_axis_canvas_gap(this.width));
        this.whiskerHeight = Math.floor(BoxPlot.calculateWhiskerHeight(this.height));
        this.medianHeight = Math.floor(BoxPlot.calculateMedianHeight(this.height));
        this.x_axis_translation = Math.floor(BoxPlot.calculateX_axis_translation(this.height));
    
        /**
         * Build tooltips
         * There are four tooltips: minimum, q1 - q3 quartile, medium, maximum
         * - Imagine a rectangle around the minimum whisker; if the mouse moves
         *   within it, its tooltip is shown
         * - Imagine a rectangle around the IQR rectangle whisker; if the mouse
         *   moves within it, its tooltip is shown
         * - Imagine a rectangle around the medium line; if the mouse moves
         *   within it, its tooltip is shown; it has priority over the IQR
         *   rectangle
         * - Imagine a rectangle around the maxmum whisker; if the mouse moves
         *   within it, its tooltip is shown
         */
        this.coordinatesTips = [];
        const canvasPixels = this.width - 2 * this.x_axis_canvas_gap;
        const canvasX = this.x_axis_canvas_gap + this.quartile_1 * canvasPixels / this.maximum - this.tootipBoxMargin;
        const canvasY = this.height / 2 - this.medianHeight / 2 - this.tootipBoxMargin;
        const canvasW = ((this.quartile_3 - this.quartile_1) * canvasPixels) / this.maximum + 2 * this.tootipBoxMargin;
        const canvasH = this.medianHeight + 2 * this.tootipBoxMargin;
        const canvasAdjustment = this.axisLineWidth % 2 === 0 ? 0 : 0.5;
        this.coordinatesTips.push({
            rect: new Rectangle(
                this.x_axis_canvas_gap,
                this.height / 2 - this.whiskerHeight / 2 - this.tootipBoxMargin,
                2 * this.tootipBoxMargin,
                this.whiskerHeight + 2 * this.tootipBoxMargin
            ),
            color: 'red',
            tip: 'Min: ' + this.minimum
        });
        this.coordinatesTips.push({
            rect: new Rectangle(
                Math.floor(this.x_axis_canvas_gap + this.median * canvasPixels / this.maximum - this.tootipBoxMargin),
                this.height / 2 - this.medianHeight / 2 - this.tootipBoxMargin,
                2 * this.tootipBoxMargin,
                this.medianHeight + 2 * this.tootipBoxMargin
            ),
            color: 'red',
            tip: 'Median: ' + this.median
        });
        this.coordinatesTips.push({
            rect: new Rectangle(
                canvasX,
                canvasY,
                canvasW,
                canvasH
            ),
            color: 'red',
            tip: 'Q1 : Q3: ' + this.quartile_1 + ` : ` + this.quartile_3
        });
        this.coordinatesTips.push({
            rect: new Rectangle(
                Math.floor(this.width  - this.x_axis_canvas_gap) - this.tootipBoxMargin,
                this.height / 2 - this.whiskerHeight / 2 - this.tootipBoxMargin,
                2 * this.tootipBoxMargin,
                this.whiskerHeight + 2 * this.tootipBoxMargin
            ),
            color: 'red',
            tip: 'Max: ' + this.maximum
        });
    
        // Dispatch the drawing
        switch (this.drawingMethod) {
            case 'canvas':
                drawingHtml = this._draw_canvas();
                break;
            case 'svg':
                drawingHtml = this._draw_svg();
                break;
            default:
                drawingHtml = this._draw_invalid();
                break;
        }
        return drawingHtml;
    }
   _draw_canvas(): HTMLElement {
        // console.log(`Boxchart::_draw_canvas`)
    
        const canvasEl: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement;
        const ctx = canvasEl.getContext('2d');
        
        // See https://stackoverflow.com/questions/7530593/html5-canvas-and-line-width/7531540#7531540
        // for rationale
        let canvasAdjustment;
        
        canvasEl.width = this.width;
        canvasEl.height = this.height;
        canvasEl.style.display = 'inline-block';
        canvasEl.style.verticalAlign = 'top';
        if (this.className && this.className !== ``) { canvasEl.classList.add(this.className); }
        
        // the canonical drawing to demonstrate the pipeline is working
        // ctx.beginPath();
        // ctx.moveTo(0,0);
        // ctx.lineTo(canvasEl.width, canvasEl.height);
        // ctx.stroke();
        
        // Draw x-axis
        canvasAdjustment = this.axisLineWidth % 2 === 0 ? 0 : 0.5;
        ctx.beginPath();
        ctx.strokeStyle = this.axisColor;
        ctx.lineWidth = this.axisLineWidth;
        ctx.moveTo(this.x_axis_canvas_gap, Math.floor(this.height / 2) + canvasAdjustment);
        ctx.lineTo(this.width - this.x_axis_canvas_gap, Math.floor(this.height / 2) + canvasAdjustment);
        ctx.stroke();
        
        // Draw western (low) whisker
       canvasAdjustment = this.lowWhiskerLineWidth % 2 === 0 ? 0 : 0.5;
        ctx.beginPath();
        ctx.strokeStyle = this.lowWhiskerColor;
        ctx.lineWidth = this.lowWhiskerLineWidth;
        ctx.moveTo(this.x_axis_canvas_gap  + canvasAdjustment, this.height / 2 - this.whiskerHeight / 2);
        ctx.lineTo(this.x_axis_canvas_gap + canvasAdjustment, this.height / 2 + this.whiskerHeight / 2);
        ctx.stroke();
        
        // Draw IQR range
        const canvasPixels = this.width - 2 * this.x_axis_canvas_gap;
        let canvasX = this.x_axis_canvas_gap + this.quartile_1 * canvasPixels / this.maximum;
        const canvasY = this.height / 2 - this.medianHeight / 2;
        const canvasW = ((this.quartile_3 - this.quartile_1) * canvasPixels) / this.maximum;
        const canvasH = this.medianHeight;
       // Draw filled rectangle
        ctx.fillStyle = this.interQuartileRangeFillColor;
        ctx.fillRect(canvasX, canvasY, canvasW, canvasH);
        // Draw rectangle's border
        ctx.strokeStyle = this.interQuartileRangeLineColor;
        ctx.lineWidth = this.interQuartileRangeLineWidth;
        ctx.strokeRect(canvasX, canvasY, canvasW, canvasH);
        
        // Draw Median
        canvasAdjustment = this.medianLineWidth % 2 === 0 ? 0 : 0.5;
        canvasX = Math.floor(this.x_axis_canvas_gap + this.median * canvasPixels / this.maximum);
        ctx.beginPath();
        ctx.strokeStyle = this.medianColor;
        ctx.lineWidth = this.medianLineWidth;
        ctx.moveTo( canvasX + canvasAdjustment, this.height / 2 - this.medianHeight / 2);
        ctx.lineTo( canvasX + canvasAdjustment, this.height / 2 + this.medianHeight / 2);
        ctx.stroke();
    
        // Draw eastern (high) whisker
        canvasAdjustment = this.highWhiskerLineWidth % 2 === 0 ? 0 : 0.5;
        ctx.beginPath();
        ctx.strokeStyle = this.highWhiskerColor;
        ctx.lineWidth = this.highWhiskerLineWidth;
        ctx.moveTo(Math.floor(this.width - this.x_axis_canvas_gap) + canvasAdjustment, this.height / 2 - this.whiskerHeight / 2);
        ctx.lineTo(Math.floor(this.width - this.x_axis_canvas_gap) + canvasAdjustment, this.height / 2 + this.whiskerHeight / 2);
        ctx.stroke();
    
       return this.getDivContainer(canvasEl);
    }
    _draw_svg(): HTMLElement {
        // console.log(`Boxchart::_draw_svg`)
        let canvasPixels;
        let canvasX;

        const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    
        svgEl.setAttributeNS(null, 'width', String(this.width));
        svgEl.setAttributeNS(null, 'height', String(this.height));
        if (this.className && this.className !== ``) { svgEl.classList.add(this.className); }
    
        // the canonical drawing to demonstrate the pipeline is working
        // const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        // line.setAttributeNS(null, 'x1', String(0));
        // line.setAttributeNS(null, 'y1', String(0));
        // line.setAttributeNS(null, 'x2', String(this.width - 1));
        // line.setAttributeNS(null, 'y2', String(this.height - 1));
        // line.style.stroke = 'rgb(255,0,0)';
        // line.style.strokeWidth = '1px';
        // svgEl.appendChild(line);
    
        // Draw x-axis
        const xAxisLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        xAxisLine.setAttributeNS(null, 'x1', String(this.x_axis_canvas_gap));
        xAxisLine.setAttributeNS(null, 'y1', String(this.height / 2));
        xAxisLine.setAttributeNS(null, 'x2', String(this.width - this.x_axis_canvas_gap));
        xAxisLine.setAttributeNS(null, 'y2', String(this.height / 2));
        xAxisLine.style.stroke = this.axisColor;
        xAxisLine.style.strokeWidth = this.axisLineWidth + 'px';
        svgEl.appendChild(xAxisLine);
    
        // Draw western (low) whisker
        const lowWhisker = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        lowWhisker.setAttributeNS(null, 'x1', String(this.x_axis_canvas_gap));
        lowWhisker.setAttributeNS(null, 'y1', String(this.height / 2 - this.whiskerHeight / 2));
        lowWhisker.setAttributeNS(null, 'x2', String(this.x_axis_canvas_gap));
        lowWhisker.setAttributeNS(null, 'y2', String(this.height / 2 + this.whiskerHeight / 2));
        lowWhisker.style.stroke = this.lowWhiskerColor;
        lowWhisker.style.strokeWidth = this.lowWhiskerLineWidth + 'px';
        svgEl.appendChild(lowWhisker);
    
        // Draw IQR range
        canvasPixels = this.width - 2 * this.x_axis_canvas_gap;
        canvasX = this.x_axis_canvas_gap + this.quartile_1 * canvasPixels / this.maximum;
        const canvasY = this.height / 2 - this.medianHeight / 2;
        const canvasW = ((this.quartile_3 - this.quartile_1) * canvasPixels) / this.maximum;
        const canvasH = this.medianHeight;
        const iqrRange = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        iqrRange.setAttributeNS(null, 'x', String(canvasX));
        iqrRange.setAttributeNS(null, 'y', String(canvasY));
        iqrRange.setAttributeNS(null, 'width', String(canvasW));
        iqrRange.setAttributeNS(null, 'height', String(canvasH));
        iqrRange.style.fill = this.interQuartileRangeFillColor;
        iqrRange.style.strokeWidth = this.interQuartileRangeLineWidth + 'px';
        iqrRange.style.stroke = this.interQuartileRangeLineColor;
        svgEl.appendChild(iqrRange);

        // Draw Median
        canvasX = this.x_axis_canvas_gap + this.median * canvasPixels / this.maximum;
        const median = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        median.setAttributeNS(null, 'x1', String(canvasX));
        median.setAttributeNS(null, 'y1', String(this.height / 2 - this.medianHeight / 2));
        median.setAttributeNS(null, 'x2', String(canvasX));
        median.setAttributeNS(null, 'y2', String(this.height / 2 + this.medianHeight / 2));
        median.style.stroke = this.medianColor;
        median.style.strokeWidth = this.medianLineWidth + 'px';
        svgEl.appendChild(median);
    
        // Draw eastern (high) whisker
        const highWhisker = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        highWhisker.setAttributeNS(null, 'x1', String(this.width - this.x_axis_canvas_gap));
        highWhisker.setAttributeNS(null, 'y1', String(this.height / 2 - this.whiskerHeight / 2));
        highWhisker.setAttributeNS(null, 'x2', String(this.width - this.x_axis_canvas_gap));
        highWhisker.setAttributeNS(null, 'y2', String(this.height / 2 + this.whiskerHeight / 2));
        highWhisker.style.stroke = this.highWhiskerColor;
        highWhisker.style.strokeWidth = this.highWhiskerColor + 'px';
        svgEl.appendChild(highWhisker);
        
        return this.getDivContainer(svgEl);
    }
    _draw_invalid(): HTMLElement {
        const invalidHtml = document.createElement('p');
        invalidHtml.innerText = `Invalid drawing method`;
        
        return this.getDivContainer(invalidHtml);
    }
    getDivContainer(insertMe: any): HTMLElement {
        const divContainer = document.createElement('div');
        divContainer.classList.add('content');
        if (this.className && this.className !== ``) { divContainer.classList.add(this.className); }
        
        divContainer.appendChild(insertMe);
        const slotEl = document.createElement('slot');
        divContainer.appendChild(slotEl);
        
        return divContainer;
    }
    
    handleMouseMove($event: MouseEvent, rect: any) {
        let tooltip;
        let mySpan: HTMLSpanElement;
        const fontDefinition = '12px FUTURA';
        let body: any;
        let width: number;
        let height: number;
        
        // Remove the existing tooltip, if present
        tooltip = document.getElementById(this.tooltipId);
        if (tooltip) {
            // console.log(`SparklineLine::handleMouseMove deleting tooltip`);
            tooltip.parentElement.removeChild(tooltip);
        }
    
        const mouseX = $event.clientX - rect.left + window.pageXOffset || document.documentElement.scrollLeft;
        const mouseY = $event.clientY - rect.top + window.pageYOffset || document.documentElement.scrollTop;
        // console.log(`SparklineLine::handleMouseMove mouseX: ` + mouseX + `, mouseY: ` + mouseY);
    
        for (let i = 0; i < this.coordinatesTips.length; i++) {
            const tipRect: Rectangle = this.coordinatesTips[i].rect;
            const tipX = this.coordinatesTips[i].rect.getX();
            const tipWidth = this.coordinatesTips[i].rect.getWidth();
            const tipHeight = this.coordinatesTips[i].rect.getHeight();
            const tipY = this.coordinatesTips[i].rect.getY();
    
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
                width = mySpan.getBoundingClientRect().width + 2;
                height = mySpan.getBoundingClientRect().height + 2;
                mySpan.parentElement.removeChild(mySpan);
                // console.log(`mySpanWidth: ` + width + `, mySpanHeight: ` + height);
                
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
            }
        }
    }
    
    handleMouseOut() {
        // Remove the existing tooltip, if present
        const tooltip = document.getElementById(this.tooltipId);
        if (tooltip) {
            // console.log(`SparklineLine::handleMouseOut deleting tooltip`);
            tooltip.parentElement.removeChild(tooltip);
        }
    }
}
