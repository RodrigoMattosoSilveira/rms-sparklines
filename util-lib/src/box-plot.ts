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
    interQuartileRangeColor: string;
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
    
    constructor(
        axisColor: string,
        axisLineWidth: number,
        chartType: string,
        className: string,
        drawingMethod: string,
        height: number,
        highWhiskerColor: string,
        highWhiskerLineWidth: number,
        interQuartileRangeColor: string,
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
        this.interQuartileRangeColor = interQuartileRangeColor;
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
        return (height / 3) * 3;
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
        this.maximum = Math.max(...this.population);
        this.minimum = Math.min(...this.population);
        this.median = BoxPlot.calculateMedian(this.population);
        this.quartile_1 = BoxPlot.calculateQuartile_1(this.population);
        this.quartile_3 = BoxPlot.calculateQuartile_3(this.population);
        this.x_axis_canvas_gap = BoxPlot.calculateX_axis_canvas_gap(this.width);
        this.whiskerHeight = BoxPlot.calculateWhiskerHeight(this.height);
        this.medianHeight = BoxPlot.calculateMedianHeight(this.height);
        this.x_axis_translation = BoxPlot.calculateX_axis_translation(this.height);
        switch (this.drawingMethod) {
            case 'canvas':
                drawingHtml = this._draw_canvas();
                break;
            case 'svg':
                drawingHtml = this._draw_svg();
                break;
            default:
                drawingHtml = null;
                break;
        }
        return drawingHtml;
    }
   _draw_canvas(): HTMLCanvasElement {
        // console.log(`Boxchart::_draw_canvas`)
    
        const canvasEl = document.createElement('canvas');
        const ctx = canvasEl.getContext('2d');
        
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
        ctx.beginPath();
        ctx.strokeStyle = this.axisColor;
        ctx.lineWidth = this.axisLineWidth;
        ctx.moveTo(this.x_axis_canvas_gap, this.height / 2);
        ctx.lineTo(this.width - this.x_axis_canvas_gap, this.height / 2);
        ctx.stroke();
        
        // Draw western (low) whisker
        ctx.beginPath();
        ctx.strokeStyle = this.lowWhiskerColor;
        ctx.lineWidth = this.lowWhiskerLineWidth;
        ctx.moveTo(this.x_axis_canvas_gap, this.height / 2 - this.whiskerHeight / 2);
        ctx.lineTo(this.x_axis_canvas_gap, this.height / 2 + this.whiskerHeight / 2);
        ctx.stroke();
        
        // Draw IQR range
        const canvasPixels = this.width - 2 * this.x_axis_canvas_gap;
        let canvasX = this.x_axis_canvas_gap + this.quartile_1 * canvasPixels / this.maximum;
        const canvasY = this.height / 2 - this.medianHeight / 2;
        const canvasW = ((this.quartile_3 - this.quartile_1) * canvasPixels) / this.maximum;
        const canvasH = this.medianHeight * 2;
        // console.log(`BoxPlot::_draw::IQR canvasPixels: ` + canvasPixels);
        // console.log(`BoxPlot::_draw::IQR Q1: ` + this.getQuartile_1());
        // console.log(`BoxPlot::_draw::IQR Q3: ` + this.getQuartile_3());
        // console.log(`BoxPlot::_draw::IQR canvasX: ` + canvasX);
        // console.log(`BoxPlot::_draw::IQR canvasY: ` + canvasY);
        // console.log(`BoxPlot::_draw::IQR canvasW: ` + canvasW);
        // console.log(`BoxPlot::_draw::IQR canvasH: ` + canvasH);
        ctx.fillStyle = this.interQuartileRangeFillColor;
        ctx.fillRect(canvasX, canvasY, canvasW, canvasH);
        
        // Draw Median
        canvasX = this.x_axis_canvas_gap + this.median * canvasPixels / this.maximum;
        ctx.beginPath();
        ctx.strokeStyle = this.medianColor;
        ctx.lineWidth = this.medianLineWidth;
        ctx.moveTo( canvasX, this.height / 2 - this.medianHeight / 2);
        ctx.lineTo( canvasX, this.height / 2 + this.medianHeight / 2);
        ctx.stroke();
    
        // Draw eastern (high) whisker
        ctx.beginPath();
        ctx.strokeStyle = this.lowWhiskerColor;
        ctx.lineWidth = this.lowWhiskerLineWidth;
        ctx.moveTo(this.width - this.x_axis_canvas_gap, this.height / 2 - this.whiskerHeight / 2);
        ctx.lineTo(this.width - this.x_axis_canvas_gap, this.height / 2 + this.whiskerHeight / 2);
        ctx.stroke();
        
        return canvasEl;
    }
    _draw_svg(): HTMLElement {
        // console.log(`Boxchart::_draw_svg`)
        const divContainer = document.createElement('div');
        divContainer.classList.add('content');
        if (this.className && this.className !== ``) { divContainer.classList.add(this.className); }
        
        const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    
        svgEl.setAttributeNS(null, 'width', String(this.width));
        svgEl.setAttributeNS(null, 'height', String(this.height));
        if (this.className && this.className !== ``) { svgEl.classList.add(this.className); }
    
        // the canonical drawing to demonstrate the pipeline is working
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttributeNS(null, 'x1', String(0));
        line.setAttributeNS(null, 'y1', String(0));
        line.setAttributeNS(null, 'x2', String(this.width - 1));
        line.setAttributeNS(null, 'y2', String(this.height - 1));
        line.style.stroke = 'rgb(255,0,0)';
        line.style.strokeWidth = '1px';
        svgEl.appendChild(line);
        
        divContainer.appendChild(svgEl);
        const slotEl = document.createElement('slot');
        divContainer.appendChild(slotEl);
    
        return divContainer;
    }
}
