import {  ElementRef, Injectable } from '@angular/core';
import { Rectangle } from './rectangle';

@Injectable({
  providedIn: 'root'
})
export class BoxplotService {

    // Attributes
    canvasEl: HTMLCanvasElement;

    axisColor: string;
    axisLineWidth: number;
    chartType: string;
    className: string;
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
    quartileThree: number;
    median: number;
    quartileOne: number;
    minimum: number;
    xAxisCanvasGap: number;   // canvas.width / 16
    xAxisTranslation: number;   // canvas.width / 16
    whiskerHeight: number;      // (canvas.height / 5)
    medianHeight: number;       // = 2 *  (canvas.height / 3)
    coordinatesTips: any = [];
    tootipBoxMargin = 2;

    tooltipId = 'rms-sparkline-BoxplotService-tooltip';


    /** Compute the amount of white space between the canvas vertical boundaries */
    static calculatexAxisCanvasGap(width: number): number {

        return width / 16;
    }

    /** Computer the whisker height */
    static calculateWhiskerHeight(height: number): number {
        return height / 5;
    }


    /** Computer the median height */
    static calculateMedianHeight(height: number): number {
        return (height / 3) * 2;
    }

    /** Compute the distance to move the x-axis */
    static calculatexAxisTranslation(height: number): number {
        return (height / 2);
    }

    static helloWorld(): string { return `hello world`; }

    /** Sort an array  */
    static sortArray(array: number[]): number[] {
        const sortedArray: number[] = array.slice(0);
        sortedArray.sort(function(a, b) { return a - b; });
        return sortedArray;
    }

    /**  Calculate the median of a sorted array */
    static calculateMedian(population: number[]): number {
        const sortedPopulation = BoxplotService.sortArray(population);
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

    /** Calculate the first quartile of a sorted array */
    static calculatequartileOne(population: number[]): number {
        const sortedPopulation = BoxplotService.sortArray(population);
        const length = sortedPopulation.length;
        let quartile: number[] = null;

        switch (length % 2) {
            case 0:
                quartile = sortedPopulation.slice(0, (length / 2) + 1);
                // console.log(`::calculatequartileOne - quartile - even: ` + JSON.stringify(quartile));
                break;
            case 1:
                quartile = sortedPopulation.slice(0, Math.floor(length / 2));
                // console.log(`::calculatequartileOne - quartile - odd: ` + JSON.stringify(quartile));
                break;
        }

        return BoxplotService.calculateMedian(quartile);
    }

    /** Calculate the third quartile of a sorted array */
    static calculatequartileThree(population: number[]): number {
        const sortedPopulation = BoxplotService.sortArray(population);
        // console.log(`::calculatequartileThree - quartile - sortedPopulation: ` + JSON.stringify(sortedPopulation));
        const length = sortedPopulation.length;
        let quartile: number[] = null;

        switch (length % 2) {
            case 0:
                quartile = sortedPopulation.slice((length / 2));
                // console.log(`::calculatequartileThree - quartile - even: ` + JSON.stringify(quartile));
                break;
            case 1:
                quartile = sortedPopulation.slice(Math.ceil(length / 2));
                // console.log(`::calculatequartileThree - quartile - odd: ` + JSON.stringify(quartile));
                break;
        }
        return BoxplotService.calculateMedian(quartile);
    }

    constructor() { }

    drawNew(
        axisColor: string,
        axisLineWidth: number,
        chartType: string,
        className: string,
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
        sparklineCanvas: ElementRef,
        width: number) {

        // Save the attributes
        this.axisColor = axisColor;
        this.axisLineWidth = axisLineWidth;
        this.chartType = chartType;
        this.className = className;
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

        this.maximum = Math.floor(Math.max(...this.population));
        this.minimum = Math.floor(Math.min(...this.population));
        this.median = Math.floor(BoxplotService.calculateMedian(this.population));
        this.quartileOne = Math.floor(BoxplotService.calculatequartileOne(this.population));
        this.quartileThree = Math.floor(BoxplotService.calculatequartileThree(this.population));
        this.xAxisCanvasGap = Math.floor(BoxplotService.calculatexAxisCanvasGap(this.width));
        this.whiskerHeight = Math.floor(BoxplotService.calculateWhiskerHeight(this.height));
        this.medianHeight = Math.floor(BoxplotService.calculateMedianHeight(this.height));
        this.xAxisTranslation = Math.floor(BoxplotService.calculatexAxisTranslation(this.height));

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
        const canvasPixels = this.width - 2 * this.xAxisCanvasGap;
        const canvasX = this.xAxisCanvasGap + this.quartileOne * canvasPixels / this.maximum - this.tootipBoxMargin;
        const canvasY = this.height / 2 - this.medianHeight / 2 - this.tootipBoxMargin;
        const canvasW = ((this.quartileThree - this.quartileOne) * canvasPixels) / this.maximum + 2 * this.tootipBoxMargin;
        const canvasH = this.medianHeight + 2 * this.tootipBoxMargin;
        this.coordinatesTips.push({
            rect: new Rectangle(
                this.xAxisCanvasGap,
                this.height / 2 - this.whiskerHeight / 2 - this.tootipBoxMargin,
                2 * this.tootipBoxMargin,
                this.whiskerHeight + 2 * this.tootipBoxMargin
            ),
            color: 'red',
            tip: 'Min: ' + this.minimum
        });
        this.coordinatesTips.push({
            rect: new Rectangle(
                Math.floor(this.xAxisCanvasGap + this.median * canvasPixels / this.maximum - this.tootipBoxMargin),
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
            tip: 'Q1 : Q3: ' + this.quartileOne + ` : ` + this.quartileThree
        });
        this.coordinatesTips.push({
            rect: new Rectangle(
                Math.floor(this.width  - this.xAxisCanvasGap) - this.tootipBoxMargin,
                this.height / 2 - this.whiskerHeight / 2 - this.tootipBoxMargin,
                2 * this.tootipBoxMargin,
                this.whiskerHeight + 2 * this.tootipBoxMargin
            ),
            color: 'red',
            tip: 'Max: ' + this.maximum
        });

        this.drawCanvas(sparklineCanvas);
    }

    draw(sparklineCanvas: ElementRef, lineColor: string) {
        const ctx: CanvasRenderingContext2D = sparklineCanvas.nativeElement.getContext('2d');

        // Draw
        ctx.fillStyle = lineColor;
        ctx.fillRect(20, 20, 150, 100);
    }

    drawCanvas(sparklineCanvas: ElementRef) {
        // console.log(`Boxchart::_draw_canvas`)

        const canvasEl = sparklineCanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = sparklineCanvas.nativeElement.getContext('2d');

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
        ctx.moveTo(this.xAxisCanvasGap, Math.floor(this.height / 2) + canvasAdjustment);
        ctx.lineTo(this.width - this.xAxisCanvasGap, Math.floor(this.height / 2) + canvasAdjustment);
        ctx.stroke();

        // Draw western (low) whisker
        canvasAdjustment = this.lowWhiskerLineWidth % 2 === 0 ? 0 : 0.5;
        ctx.beginPath();
        ctx.strokeStyle = this.lowWhiskerColor;
        ctx.lineWidth = this.lowWhiskerLineWidth;
        ctx.moveTo(this.xAxisCanvasGap  + canvasAdjustment, this.height / 2 - this.whiskerHeight / 2);
        ctx.lineTo(this.xAxisCanvasGap + canvasAdjustment, this.height / 2 + this.whiskerHeight / 2);
        ctx.stroke();

        // Draw IQR range
        const canvasPixels = this.width - 2 * this.xAxisCanvasGap;
        let canvasX = this.xAxisCanvasGap + this.quartileOne * canvasPixels / this.maximum;
        const canvasY = this.height / 2 - this.medianHeight / 2;
        const canvasW = ((this.quartileThree - this.quartileOne) * canvasPixels) / this.maximum;
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
        canvasX = Math.floor(this.xAxisCanvasGap + this.median * canvasPixels / this.maximum);
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
        ctx.moveTo(Math.floor(this.width - this.xAxisCanvasGap) + canvasAdjustment, this.height / 2 - this.whiskerHeight / 2);
        ctx.lineTo(Math.floor(this.width - this.xAxisCanvasGap) + canvasAdjustment, this.height / 2 + this.whiskerHeight / 2);
        ctx.stroke();
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

    /** Sparkline BoxplotService Mouse Move Handler  */
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
        // console.log(`SparklineLine::handleMouseMove mouseX: ` + mouseX + `, mouseY: ` + mouseY);

        for (let i = 0; i < this.coordinatesTips.length; i++) {
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

                // Remove the existing tooltip, if present
                tooltip = document.getElementById(this.tooltipId);
                if (tooltip) {
                    // console.log(`SparklineLine::handleMouseMove deleting tooltip`);
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
                    // console.log(`SparklineLine::handleMouseMove deleting tooltip`);
                    tooltip.parentElement.removeChild(tooltip);
                }
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
