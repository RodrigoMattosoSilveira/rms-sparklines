import {  ElementRef, Injectable } from '@angular/core';
import { Rectangle } from './rectangle';

@Injectable({
  providedIn: 'root'
})
export class BoxplotService {

    // Attributes
    canvasEl: HTMLCanvasElement;

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
    /**
     * Begin code isolation
     */
    setupCanvasEl(sparklineCanvas: ElementRef,
      width: number,
      height: number,
      className: string,
   ): HTMLCanvasElement {

      const canvasEl = sparklineCanvas.nativeElement;
      const ctx: CanvasRenderingContext2D = sparklineCanvas.nativeElement.getContext('2d');

      // See https://stackoverflow.com/questions/7530593/html5-canvas-and-line-width/7531540#7531540
      // for rationale
      let canvasAdjustment: number;

      canvasEl.width = width;
      canvasEl.height = height;
      canvasEl.style.display = 'inline-block';
      canvasEl.style.verticalAlign = 'top';
      if (className && className !== ``) { canvasEl.classList.add(className); }

      return canvasEl;
   }

   setupCtx(canvasEl: HTMLCanvasElement): CanvasRenderingContext2D {
      const ctx: CanvasRenderingContext2D = canvasEl.getContext('2d');
      return ctx;
   }

   drawXAxis(ctx: CanvasRenderingContext2D,
      axisLineWidth: number,
      axisColor: string,
      xAxisCanvasGap: number,
      height: number,
      width: number): void {

        // Draw x-axis
        const canvasAdjustment: number = axisLineWidth % 2 === 0 ? 0 : 0.5;
        ctx.beginPath();
        ctx.strokeStyle = axisColor;
        ctx.lineWidth = axisLineWidth;
        ctx.moveTo(xAxisCanvasGap, Math.floor(height / 2) + canvasAdjustment);
        ctx.lineTo(width - xAxisCanvasGap, Math.floor(height / 2) + canvasAdjustment);
        ctx.stroke();
   }
   drawFilledRectangle(ctx: CanvasRenderingContext2D,
      // Draw filled rectangle
      width: number,
      xAxisCanvasGap: number,
      quartileOne: number,
      maximum: number,
      height: number,
      medianHeight: number,
      interQuartileRangeFillColor: string,
      interQuartileRangeLineColor: string,
      interQuartileRangeLineWidth: number,
      quartileThree: number
      ): void {

      const canvasPixels = width - 2 * xAxisCanvasGap;
      const canvasX = xAxisCanvasGap + quartileOne * canvasPixels / maximum;
      const canvasY = height / 2 - medianHeight / 2;
      const canvasW = ((quartileThree - quartileOne) * canvasPixels) / maximum;
      const canvasH = medianHeight;

      ctx.fillStyle = interQuartileRangeFillColor;
      ctx.fillRect(canvasX, canvasY, canvasW, canvasH);
      // Draw rectangle's border
      ctx.strokeStyle = interQuartileRangeLineColor;
      ctx.lineWidth = interQuartileRangeLineWidth;
      ctx.strokeRect(canvasX, canvasY, canvasW, canvasH);
   }
   drawRectangleBorder(ctx: CanvasRenderingContext2D,
      // Draw rectangle's border
      width: number,
      xAxisCanvasGap: number,
      quartileOne: number,
      maximum: number,
      height: number,
      medianHeight: number,
      quartileThree: number,
      interQuartileRangeLineColor: string,
      interQuartileRangeLineWidth: number
      ): void {

      const canvasPixels = width - 2 * xAxisCanvasGap;
      const canvasX = xAxisCanvasGap + quartileOne * canvasPixels / maximum;
      const canvasY = height / 2 - medianHeight / 2;
      const canvasW = ((quartileThree - quartileOne) * canvasPixels) / maximum;
      const canvasH = medianHeight;

      ctx.strokeStyle = interQuartileRangeLineColor;
      ctx.lineWidth = interQuartileRangeLineWidth;
      ctx.strokeRect(canvasX, canvasY, canvasW, canvasH);
   }

   drawMedian(ctx: CanvasRenderingContext2D,
      // Draw Median
      width: number,
      xAxisCanvasGap: number,
      medianLineWidth: number,
      median: number,
      maximum: number,
      medianColor: string,
      height: number,
      medianHeight: number,
      ): void {

      const canvasPixels = width - 2 * xAxisCanvasGap;
      const canvasAdjustment = medianLineWidth % 2 === 0 ? 0 : 0.5;
      const canvasX = Math.floor(xAxisCanvasGap + median * canvasPixels / maximum);
      ctx.beginPath();
      ctx.strokeStyle = medianColor;
      ctx.lineWidth = medianLineWidth;
      ctx.moveTo( canvasX + canvasAdjustment, height / 2 - medianHeight / 2);
      ctx.lineTo( canvasX + canvasAdjustment, height / 2 +medianHeight / 2);
      ctx.stroke();
   }

   drawWesternWhisker(ctx: CanvasRenderingContext2D,
      // Draw western (low) whisker
      lowWhiskerColor: string,
      lowWhiskerLineWidth: number,
      xAxisCanvasGap: number,
      height: number,
      whiskerHeight:number
      ): void {

      const canvasAdjustment = lowWhiskerLineWidth % 2 === 0 ? 0 : 0.5;
      ctx.beginPath();
      ctx.strokeStyle = lowWhiskerColor;
      ctx.lineWidth = lowWhiskerLineWidth;
      ctx.moveTo(xAxisCanvasGap  + canvasAdjustment, height / 2 - whiskerHeight / 2);
      ctx.lineTo(xAxisCanvasGap + canvasAdjustment, height / 2 + whiskerHeight / 2);
      ctx.stroke();
   }
   drawEaternWhisker(ctx: CanvasRenderingContext2D,
      // Draw eastern (high) whisker
      highWhiskerLineWidth: number,
      highWhiskerColor: string,
      width: number,
      xAxisCanvasGap: number,
      height: number,
      whiskerHeight: number,
      ): void {

      const canvasAdjustment = highWhiskerLineWidth % 2 === 0 ? 0 : 0.5;
      ctx.beginPath();
      ctx.strokeStyle = highWhiskerColor;
      ctx.lineWidth = highWhiskerLineWidth;
      ctx.moveTo(Math.floor(width - xAxisCanvasGap) + canvasAdjustment, height / 2 - whiskerHeight / 2);
      ctx.lineTo(Math.floor(width - xAxisCanvasGap) + canvasAdjustment, height / 2 + whiskerHeight / 2);
      ctx.stroke();
   }

   buildTooltipCoordinates(width: number,
      xAxisCanvasGap: number,
      quartileOne: number,
      maximum: number,
      height: number,
      medianHeight: number,
      quartileThree: number,
      whiskerHeight: number,
      minimum: number,
      median: number,
      ): any[] {
     let coordinatesTips: any[] = [];
     const tootipBoxMargin = 2;
     const canvasPixels = width - 2 * xAxisCanvasGap;
     const canvasX = xAxisCanvasGap + quartileOne * canvasPixels / maximum - tootipBoxMargin;
     const canvasY = height / 2 - medianHeight / 2 - tootipBoxMargin;
     const canvasW = ((quartileThree - quartileOne) * canvasPixels) / maximum + 2 * tootipBoxMargin;
     const canvasH = medianHeight + 2 * tootipBoxMargin;

     coordinatesTips.push({
          rect: new Rectangle(
              xAxisCanvasGap,
              height / 2 - whiskerHeight / 2 - tootipBoxMargin,
              2 * tootipBoxMargin,
              whiskerHeight + 2 * tootipBoxMargin
          ),
          color: 'red',
          tip: 'Min: ' + minimum
     });
     coordinatesTips.push({
          rect: new Rectangle(
              Math.floor(xAxisCanvasGap + median * canvasPixels / maximum - tootipBoxMargin),
              height / 2 - medianHeight / 2 - tootipBoxMargin,
              2 * tootipBoxMargin,
              medianHeight + 2 * tootipBoxMargin
          ),
          color: 'red',
          tip: 'Median: ' + median
     });
     coordinatesTips.push({
          rect: new Rectangle(
              canvasX,
              canvasY,
              canvasW,
              canvasH
          ),
          color: 'red',
          tip: 'Q1 : Q3: ' + quartileOne + ` : ` + quartileThree
     });
     coordinatesTips.push({
          rect: new Rectangle(
              Math.floor(width  - xAxisCanvasGap) - tootipBoxMargin,
              height / 2 - whiskerHeight / 2 - tootipBoxMargin,
              2 * tootipBoxMargin,
              whiskerHeight + 2 * tootipBoxMargin
          ),
          color: 'red',
          tip: 'Max: ' + maximum
     });
     return coordinatesTips;
  }

   /** Sparkline BoxplotService Mouse Move Handler  */
   handleMouseMove($event: MouseEvent,
      canvasEl: HTMLElement,
      coordinatesTips: any[],
      ) {

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

      for (let i = 0; i < coordinatesTips.length; i++) {
           const tipX = coordinatesTips[i].rect.getX();
           const tipWidth = coordinatesTips[i].rect.getWidth();
           const tipHeight = coordinatesTips[i].rect.getHeight();
           const tipY = coordinatesTips[i].rect.getY();

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
               mySpan.innerHTML = '' +  coordinatesTips[i].tip;
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
               ctx.fillText('' + coordinatesTips[i].tip, 1, height - 2);

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
