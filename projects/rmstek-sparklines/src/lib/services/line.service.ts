import {ElementRef, Injectable } from '@angular/core';
import * as  mathjs from 'mathjs';

@Injectable({
    providedIn: 'root'
})
export class LineService {

    // Local attributes
    attributes: any = {};
    measurementsArray: number[];
    coordinatesWorld: any [];
    coordinatesViewport: any = [];
    coordinatesCanvas: any = [];
    coordinatesTips: any = [];
    canvasScreenOffsetX: number;
    canvasScreenOffsetY: number;
    decorationPointsArray: any = [];
    canvasTip: any;

    constructor() {}

    getCanvasContext(sparklineCanvas: ElementRef): CanvasRenderingContext2D {
         const ctx: CanvasRenderingContext2D = sparklineCanvas.nativeElement.getContext('2d');
         return ctx;
      }

      /**
       * buildMeasurementsArray
       */
      buildMeasurementsArray(linePoints: number[]): number[] {
         let measurementsArray: number[] = []
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
         let coordinatesWorld = [];
         for (let i = 0;  i < measurementsArray.length; i++) {
            coordinatesWorld.push([i,measurementsArray[i], 1]);
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
      buildCoordinatesViewPort(attributesWidth:number,
         attributesHeight: number,
         attributesDotRadius: number,
         measurementsArray: number[],
         coordinatesWorld: number[]): number[] {
         let coordinatesViewport = [];

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
      buildCoordinatesCanvas(attributesDotRadius: number,
         attributesHeight: number,
         measurementsArray: number[],
         coordinatesViewport: number[]): number[] {

         // Start function logic
         let coordinatesCanvas = [];

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

      /**
       * drawShade
       */
      drawShade(ctx: CanvasRenderingContext2D,
         attributesLineWidth: number,
         attributesHeight: number,
         attributesShadeColor: string,
         coordinatesCanvas: number[],
         measurementsArrayLength: number) {
         /**
          * Now we draw the sparkline, in the following order
          * - Shaded ared
          * - line
          * - decorations
          */
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
       *
       * Draw the path, on top of the shade area
       * https://www.w3schools.com/graphics/canvas_coordinates.asp
       */
      drawLine(ctx: CanvasRenderingContext2D,
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
       */
      drawDecorations(decorationPoints: number[],
         attributesDotRadius: number,
         measurementsArray: number[],
         ctx: CanvasRenderingContext2D,
         coordinatesCanvas): void {

         let decorationPointsArray: number[] = decorationPoints.slice(0);
         if (attributesDotRadius > 0 && decorationPointsArray.length > 0) {
         // console.log('decorationPoints = ' + JSON.stringify(this.attributes.decorationPoints));
            for (let i = 0; i < decorationPointsArray.length; i++) {
            // todo: a hack to solve a problem when running inside vaadin-grid
               if (decorationPointsArray[i]['index'] > measurementsArray.length - 1) {
               // do nothing
               } else {
                  ctx.beginPath();
                  const index = decorationPointsArray[i]['index'];
                  ctx.arc(coordinatesCanvas[index][0], coordinatesCanvas[index][1], attributesDotRadius, 0, Math.PI * 2);
                  ctx.fillStyle = decorationPointsArray[i]['color'];
                  ctx.fill();
               }
            }
         }
      }

     /**
      * buildToolTipsCoordinates
      * Add tooltip support.
      * Build coordinateScreen
      */
     // const rect: any = this.attributes.canvasEl.getBoundingClientRect();
     // console.log(`SparklineLine::canvasEl rect.left: ` + rect.left + `, rect.top: ` + rect.top);
     //
     // this.canvasScreenOffsetX = rect.left + window.pageXOffset || document.documentElement.scrollLeft;
     // this.canvasScreenOffsetY = rect.top + window.pageYOffset || document.documentElement.scrollTop;
     // console.log(`canvasScreenOffsetX: ` + this.canvasScreenOffsetX);
     // console.log(`canvasScreenOffsetY: ` + this.canvasScreenOffsetY);
      buildToolTipsCoordinates(measurementsArray: number[],
         coordinatesCanvas: number[]): any[] {
         let coordinatesTips = [];
         for (let i = 0; i < measurementsArray.length; i++) {
            coordinatesTips.push({
               x: coordinatesCanvas[i][0],
               y: coordinatesCanvas[i][1],
               r: 5,
               rXr: 25,
               color: 'red',
               tip: measurementsArray[i]
            });
            // console.log(`coordinatesTips(` + i +`): ` + JSON.stringify(this.coordinatesTips[i]));
         }
         return coordinatesTips;
      }

    /**
     * handleMouseMove
     * Sparkline Inline Mouse Move Handler
     */
    handleMouseMove($event: MouseEvent,
      canvasEl: HTMLElement,
      measurementsArray: number[],
      coordinatesTips: any[]) {
        let body: any;
        let mySpan: any;
        const fontDefinition = '12px FUTURA';
        let width: number;
        let height: number;
        let scrollLeft;
        let scrollTop;
        let rect;
        let  mouseX: number;
        let mouseY: number;
        let tooltip;
        let canvasTip: any;


        // console.log(`\n`);

        // Get the position of the canvas element relative to the document
        // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
        rect = canvasEl.getBoundingClientRect();
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        rect = { left: rect.left + scrollLeft, top: rect.top + scrollTop  };

        // Get the mouse coordinates relative to the canvas
        mouseX = $event.clientX - rect.left;
        mouseY = $event.clientY - rect.top;

        // Debug code
        // let msg: string;
        // msg = '';
        // msg += `rect.left: ` + rect.left.toFixed(2);
        // msg += `, rect.top: ` + rect.top.toFixed(2);
        // msg += `, rect.width: ` + rect.width.toFixed(2);
        // msg += `, rect.height: ` + rect.height.toFixed(2);
        // console.log(msg);

        // msg = '';
        // msg += `$event.clientX: ` + $event.clientX.toFixed(2);
        // msg += `, $event.clientY: ` + $event.clientY.toFixed(2);
        // console.log(msg);
        // msg = '';
        // msg += `dot.x: ` + this.coordinatesTips[0].x.toFixed(2);
        // msg += `, dot.y: ` + this.coordinatesTips[0].y.toFixed(2);
        // console.log(msg);
        // msg = '';
        // msg += `mouseX: ` + mouseX.toFixed(2);
        // msg += `, mouseY: ` + mouseY.toFixed(2);
        // console.log(msg);

        for (let i = 0; i < measurementsArray.length; i++) {
            const dot = coordinatesTips[i];
            const dx = mouseX - dot.x;
            const dy = mouseY - dot.y;
            // console.log(`SparklineLine::handleMouseMove dx: ` + Math.floor(dx) + `, dy: ` + Math.floor(dy) + `, dot.rXr: ` + dot.rXr);
            if (dx * dx + dy * dy < dot.rXr) {
                // console.log(`SparklineLine::handleMouseMove found a match`);

                // A trick to find the width of the canvas to host the tooltip
                mySpan = document.createElement('span');
                mySpan.id = 'mySpanId';
                mySpan.style.font = fontDefinition;
                mySpan.style.textAlign = 'center';
                mySpan.innerHTML = '' + measurementsArray[i];
                body = document.getElementsByTagName('body')[0];
                body.appendChild(mySpan);
                mySpan = document.getElementById('mySpanId');
                width = mySpan.getBoundingClientRect().width + 2;
                height = mySpan.getBoundingClientRect().height + 2;
                mySpan.parentElement.removeChild(mySpan);
                // console.log(`mySpan: ` + width);

                // Remove tooltip if already there
                tooltip = document.getElementById('rms-sparkline-inline-tooltip');
                if (tooltip) {
                    // console.log(`SparklineLine::handleMouseMove deleting tooltip`);
                    tooltip.parentElement.removeChild(tooltip);
                }

                // Add a new tooltip
                canvasTip = document.createElement('CANVAS');
                canvasTip.id = 'rms-sparkline-inline-tooltip';
                canvasTip.width = width;
                canvasTip.height = height;
                canvasTip.style.position = 'absolute';
                canvasTip.style.left = ($event.clientX + 5) + 'px';
                canvasTip.style.top = ($event.clientY + 7) + 'px';
                canvasTip.style.border = '1px solid';
                canvasTip.style.border = '1px solid';
                canvasTip.style.zIndex = '20';
                canvasTip.style.textAlign = 'center';
                const ctx = (canvasTip as HTMLCanvasElement).getContext('2d');
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, width, height);
                ctx.fill();
                ctx.fillStyle = 'red';
                ctx.font = fontDefinition;
                ctx.fillText('' + measurementsArray[i], 1, height - 2);

                body = document.getElementsByTagName('body')[0];
                body.appendChild(canvasTip);

                break; // the first match gets the tooltip
            } else {

                // Remove tooltip if still there
                tooltip = document.getElementById('rms-sparkline-inline-tooltip');
                if (tooltip) {
                    // console.log(`SparklineLine::handleMouseMove deleting tooltip`);
                    tooltip.parentElement.removeChild(tooltip);
                }

            }
        }
    }

   handleMouseOut() {
      const tooltip = document.getElementById('rms-sparkline-inline-tooltip');
      if (tooltip) {
          // console.log(`SparklineLine::handleMouseMove deleting tooltip`);
          tooltip.parentElement.removeChild(tooltip);
      }
   }
}
