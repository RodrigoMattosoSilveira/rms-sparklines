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

export class BoxPlot {
    
    
    // Attributes
    canvasEl: HTMLCanvasElement;
    chartType: string;
    population: number[];
    axisLineWidth: number;
    axisColor: string;
    lowWhiskerLineWidth: number;
    lowWhiskerColor: string;
    highWhiskerLineWidth: number;
    highWhiskerColor: string;
    interQuartileRangeLineWidth: number;
    interQuartileRangeColor: string;
    medianLineWidth: number;
    medianColor: string;
    
    // Calculated Attributes
    maximum: number;
    quartile_3: number;
    median: number;
    quartile_1: number;
    minimum: number;
    x_axis_canvas_gap: number;   // canvas.width / 16
    whiskerHeight: number;      // (canvas.height / 5)
    medianHeight: number;       // = 2 *  (canvas.height / 3)
    
    // Attributes setters and Getters
    setCanvasEl(value: HTMLCanvasElement) { this.canvasEl = value; }
    getCanvasEl(): HTMLCanvasElement { return this.canvasEl; }
    
    setChartType(value: string) { this.chartType = value; }
    getChartType(): string { return this.chartType; }
    
    setPopulation(value: number[]) { this.population = value; }
    getPopulation(): number[] { return this.population; }
    
    setAxisLineWidth(value: number) { this.axisLineWidth = value; }
    getAxisLineWidth(): number { return this.axisLineWidth; }
    
    setAxisColor(value: string) { this.axisColor = value; }
    getAxisColor(): string { return this.axisColor; }
    
    setLowWhiskerLineWidth(value: number) { this.lowWhiskerLineWidth = value; }
    getLowWhiskerLineWidth(): number { return this.lowWhiskerLineWidth; }
    
    setLowWhiskerColor(value: string) { this.lowWhiskerColor = value; }
    getLowWhiskerColor(): string { return this.lowWhiskerColor; }
    
    setHighWhiskerLineWidth(value: number) { this.highWhiskerLineWidth = value; }
    getHighWhiskerLineWidth(): number { return this.highWhiskerLineWidth; }
    
    setHighWhiskerColor(value: string) { this.highWhiskerColor = value; }
    hetHighWhiskerColor(): string { return this.highWhiskerColor; }
    
    setInterQuartileRangeLineWidth(value: number) { this.interQuartileRangeLineWidth = value; }
    getInterQuartileRangeLineWidth(): number { return this.interQuartileRangeLineWidth; }
    
    setInterQuartileRangeColor(value: string) { this.interQuartileRangeColor = value; }
    hetInterQuartileRangeColor(): string { return this.interQuartileRangeColor; }
    
    setMedianLineWidth(value: number) { this.medianLineWidth = value; }
    getMedianLineWidth(): number { return this.medianLineWidth; }
    
    setMedianColor(value: string) { this.medianColor = value; }
    getMedianColor(): string { return this.medianColor; }
    
    // Calculated attributes getters and setters
    setMaximum(value: number) { this.maximum = value; }
    getMaximum(): number { return this.maximum; }
    
    setMedian(value: number) { this.median = value; }
    getMedian(): number { return this.median; }
    
    setMedianHeight(value: number) { this.medianHeight = value; }
    getMedianHeight(): number { return this.medianHeight; }
    
    setMinimum(value: number) { this.minimum = value; }
    getMinimum(): number { return this.minimum; }
    
    setQuartile_1(value: number) { this.quartile_1 = value; }
    getQuartile_1(): number { return this.quartile_1; }
    
    setQuartile_3(value: number) { this.quartile_3 = value; }
    getQuartile_3(): number { return this.quartile_3; }
    
    setX_axis_canvas_gap(value: number) { this.x_axis_canvas_gap = value; }
    getX_axis_canvas_gap(): number { return this.x_axis_canvas_gap; }
    
    setWhiskerHeight(value: number) { this.whiskerHeight = value; }
    getWhiskerHeight(): number { return this.whiskerHeight; }
    
    
    
    constructor(canvasEl: HTMLCanvasElement,
                chartType: string,
                population: number[],
                axisLineWidth: number,
                axisColor: string,
                lowWhiskerLineWidth: number,
                lowWhiskerColor: string,
                highWhiskerLineWidth: number,
                highWhiskerColor: string,
                interQuartileRangeLineWidth: number,
                interQuartileRangeColor: string,
                medianLineWidth: number,
                medianColor: string) {
    
        // Save the attributes
        this.setCanvasEl(canvasEl);
        this.setChartType(chartType);
        this.setPopulation(population);
        this.setAxisLineWidth(axisLineWidth);
        this.setAxisColor(axisColor);
        this.setLowWhiskerLineWidth(lowWhiskerLineWidth);
        this.setLowWhiskerColor(lowWhiskerColor);
        this.setHighWhiskerLineWidth(highWhiskerLineWidth);
        this.setHighWhiskerColor(highWhiskerColor);
        this.setInterQuartileRangeLineWidth(interQuartileRangeLineWidth);
        this.setInterQuartileRangeColor(interQuartileRangeColor);
        this.setMedianLineWidth(medianLineWidth);
        this.setMedianColor(medianColor);
    }
    
    draw() {
        this.setMaximum(Math.max(...this.getPopulation()));
        this.setMinimum(Math.min(...this.getPopulation()));
        this.setMedian(this.calculateMedian(this.getPopulation()));
        this.setQuartile_1(this.calculateQuartile_1(this.getPopulation()));
        this.setQuartile_3(this.calculateQuartile_3(this.getPopulation()));
    }
    
    helloWorld(): string { return `hello world`; }
    
    /**
     * Sort an array
     * @param {number[]} population
     * @returns {number[]}
     */
    sortArray (array: number[]): number[] {
        const sortedArray: number[] = array.slice(0);
        sortedArray.sort(function(a, b) { return a - b; });
        return sortedArray;
    }
    
    /**
     * Calculate the median of a sorted array
     * @param {number[]} population
     * @returns {number}
     */
    calculateMedian(population: number[]): number {
        const sortedPopulation = this.sortArray(population);
        let median = 0;
        const numsLen: number = sortedPopulation.length;
    
        console.log(`::calculateMedian - population: ` + JSON.stringify(sortedPopulation));
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
    calculateQuartile_1 (population: number[]): number {
        const sortedPopulation = this.sortArray(population);
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
        
        return this.calculateMedian(quartile);
    }
    
    /**
     * Calculate the third quartile of a sorted array
     * @param {number[]} population
     * @returns {number}
     */
    calculateQuartile_3 (population: number[]): number {
        const sortedPopulation = this.sortArray(population);
        console.log(`::calculateQuartile_3 - quartile - sortedPopulation: ` + JSON.stringify(sortedPopulation));
        const length = sortedPopulation.length;
        let quartile: number[] = null;
    
        switch (length % 2) {
            case 0:
                quartile = sortedPopulation.slice((length / 2));
                console.log(`::calculateQuartile_3 - quartile - even: ` + JSON.stringify(quartile));
                break;
            case 1:
                quartile = sortedPopulation.slice(Math.ceil(length / 2));
                console.log(`::calculateQuartile_3 - quartile - odd: ` + JSON.stringify(quartile));
                break;
        }
        return this.calculateMedian(quartile);
    }
}
