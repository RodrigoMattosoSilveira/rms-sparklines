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

import { SparklineLineInterface } from './sparkline-line-interface';
import * as  mathjs from 'mathjs';

export class SparklineLine {
    attributes: SparklineLineInterface;
    
    // Local attributes
    measurementsArray: number[];
    coordinatesWorld: any [];
    coordinatesViewport: any = [];
    coordinatesCanvas: any = [];
    coordinatesTips: any = [];
    canvasScreenOffsetX: number;
    canvasScreenOffsetY: number;
    decorationPointsArray: any = [];
    canvasTip: any;
    
    // static offset(el: HTMLElement) {
    //     const rect: any = el.getBoundingClientRect(),
    //         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    //         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    // }
    
    constructor() {}
    
    static handleMouseOut() {
        const tooltip = document.getElementById('rms-sparkline-inline-tooltip');
        if (tooltip) {
            // console.log(`SparklineLine::handleMouseMove deleting tooltip`);
            tooltip.parentElement.removeChild(tooltip);
        }
    }
    
    
    draw(attributes: SparklineLineInterface) {
        
        // Save attributes
        // console.log(`SparklineLine::draw ctx: ` + attributes.ctx);
        // console.log(`SparklineLine::draw className: ` + attributes.className);
        // console.log(`SparklineLine::draw decorationPoints: ` + JSON.stringify(attributes.decorationPoints));
        // console.log(`SparklineLine::draw dotRadius: ` + attributes.dotRadius);
        // console.log(`SparklineLine::draw height: ` + attributes.height);
        // console.log(`SparklineLine::draw lineColor: ` + attributes.lineColor);
        // console.log(`SparklineLine::draw linePoints: ` + JSON.stringify(attributes.linePoints));
        // console.log(`SparklineLine::draw lineWidth: ` + attributes.lineWidth);
        // console.log(`SparklineLine::draw shadeColor: ` + attributes.shadeColor);
        // console.log(`SparklineLine::draw toolTip: ` + attributes.toolTip);
        // console.log(`SparklineLine::draw width: ` + attributes.width);
        this.attributes = attributes;
        
        const ctx: CanvasRenderingContext2D = this.attributes.ctx;
        
        /**
         * Build coordinatesWorld
         *
         * Note thatwe add the 0 point the start, and the zero point at the end.
         * This is required for the proper drawing of the shade if necessary. These point
         * are removed before the actual line is drawn
         */
        this.measurementsArray = this.attributes.linePoints.slice(0);
        this.coordinatesWorld = [];
        for (let i = 0;  i < this.measurementsArray.length; i++) {
            this.coordinatesWorld.push([i, this.measurementsArray[i], 1]);
            // console.log(`coordinatesWorld(` + i +`): ` + JSON.stringify(this.coordinatesWorld[i]));
        }
        // console.log(`coordinatesWorld: ` + JSON.stringify(this.coordinatesWorld));
        
        /**
         * Build coordinatesViewPort
         * The sparkline is drawn on the canvas viewport, a subset of the canvas
         * drawing area, with padding between the two to make room for drawing
         * decoration shapes, when necessary.
         */
        this.coordinatesViewport = [];
        const sX = (this.attributes.width - this.attributes.dotRadius * 2) / this.measurementsArray.length;
        const sY = (this.attributes.height - this.attributes.dotRadius * 2 ) / Math.max(...this.measurementsArray);
        const worldToViewport = [ [sX, 0, 0], [0, sY, 0], [0, 0, 1]] ;
        for (let i = 0;  i < this.measurementsArray.length; i++) {
            // From world to viewport
            const temp1 = mathjs.multiply(this.coordinatesWorld[i], worldToViewport);
            // console.log(`coordinatesViewport temp1(` + i +`): ` + JSON.stringify(temp1));
            this.coordinatesViewport.push(temp1);
        }
        // console.log(`coordinatesViewport: ` + JSON.stringify(this.coordinatesViewport));
        
        /**
         * Build coordinatesCanvas
         * The world coordinates origin is at the bottom left, whereas the canvas and
         * canvasViewport coordinates origin is at the top left, requiring the
         * translation from bottom left to top left origin.
         *
         * Since canvas drawing always uses the canvas coordinates and the
         * canvasViewport amounts to a padding around the canvas, a translation is
         * required to move the canvasViewport coordinates:
         */
        this.coordinatesCanvas = [];
        const dX = this.attributes.dotRadius;
        const myHeight = this.attributes.height - this.attributes.dotRadius;
        const bottomLeftToTopLeft = [ [1, 0, 0], [0, 1, 0], [dX, 0, 1] ];
        for (let i = 0;  i < this.measurementsArray.length; i++) {
            // Tricky calculation ... we want the delta to move the current coordinate
            // const dY = myHeight - 2 * this.coordinatesViewport[i][1];
            // console.log(`coordinatesCanvas dY(` + i +`): ` + myHeight - 2 * this.coordinatesViewport[i][1]);
            bottomLeftToTopLeft[2][1] = myHeight - 2 * this.coordinatesViewport[i][1];
            // console.log(`coordinatesCanvas bottomLeftToTopLeft(` + i +`): ` + JSON.stringify(bottomLeftToTopLeft));
            this.coordinatesCanvas.push(mathjs.multiply(this.coordinatesViewport[i], bottomLeftToTopLeft));
        }
        // console.log(`coordinatesViewport: ` + JSON.stringify(this.coordinatesViewport));
        
        /**
         * Now we draw the sparkline, in the following order
         * - Shaded ared
         * - line
         * - decorations
         */
        ctx.clearRect(0, 0, this.attributes.width, this.attributes.height);
        // console.log(`shadeColor: ` + this.attributes.shadeColor);
        if (this.attributes.shadeColor) {
            // Fill up the area
            ctx.beginPath();
            ctx.fillStyle = this.attributes.shadeColor;
            ctx.moveTo(this.coordinatesCanvas[0][0], this.attributes.height);
            for (let i = 0; i < this.measurementsArray.length; i++) {
                ctx.lineTo(this.coordinatesCanvas[i][0], this.coordinatesCanvas[i][1]);
                // console.log(`drawing(` + i +`): ` + JSON.stringify(this.coordinatesCanvas[i]));
            }
            ctx.lineTo(this.coordinatesCanvas[this.measurementsArray.length - 1][0], this.attributes.height);
            ctx.fill();
        }
        
        // Draw the path, on top of the shade area
        // https://www.w3schools.com/graphics/canvas_coordinates.asp
        ctx.beginPath();
        ctx.lineWidth = this.attributes.lineWidth;
        ctx.strokeStyle = this.attributes.lineColor;
        ctx.moveTo(this.coordinatesCanvas[0][0], this.coordinatesCanvas[0][1]);
        for (let i = 1; i < this.measurementsArray.length; i++) {
            ctx.lineTo(this.coordinatesCanvas[i][0], this.coordinatesCanvas[i][1]);
            // console.log(`drawing(` + i +`): ` + JSON.stringify(this.coordinatesCanvas[i]));
        }
        ctx.stroke();
        
        /**
         * Draw decorations
         */
        this.decorationPointsArray = this.attributes.decorationPoints.slice(0);
        if (this.attributes.dotRadius > 0 && this.decorationPointsArray.length > 0) {
            // console.log('decorationPoints = ' + JSON.stringify(this.attributes.decorationPoints));
            for (let i = 0; i < this.decorationPointsArray.length; i++) {
                // todo: a hack to solve a problem when running inside vaadin-grid
                if (this.decorationPointsArray[i]['index'] > this.measurementsArray.length - 1) {
                    // do nothing
                } else {
                    ctx.beginPath();
                    const index = this.decorationPointsArray[i]['index'];
                    ctx.arc(this.coordinatesCanvas[index][0], this.coordinatesCanvas[index][1], this.attributes.dotRadius, 0, Math.PI * 2);
                    ctx.fillStyle = this.decorationPointsArray[i]['color'];
                    ctx.fill();
                    
                }
            }
        }
        
        /**
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
        this.coordinatesTips = [];
        for (let i = 0; i < this.measurementsArray.length; i++) {
            this.coordinatesTips.push({
                x: this.coordinatesCanvas[i][0],
                y: this.coordinatesCanvas[i][1],
                r: 5,
                rXr: 25,
                color: 'red',
                tip: this.measurementsArray[i]
            });
            // console.log(`coordinatesTips(` + i +`): ` + JSON.stringify(this.coordinatesTips[i]));
        }
    }
    
    /**
     *
     * @param $event
     * @param canvasEl
     */
    handleMouseMove($event: MouseEvent, canvasEl: HTMLElement) {
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

        console.log(`\n`);
    
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
        
        for (let i = 0; i < this.measurementsArray.length; i++) {
            const dot = this.coordinatesTips[i];
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
                mySpan.innerHTML = '' + this.measurementsArray[i];
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
                this.canvasTip = document.createElement('CANVAS');
                this.canvasTip.id = 'rms-sparkline-inline-tooltip';
                this.canvasTip.width = width;
                this.canvasTip.height = height;
                this.canvasTip.style.position = 'absolute';
                this.canvasTip.style.left = ($event.clientX + 5) + 'px';
                this.canvasTip.style.top = ($event.clientY + 7) + 'px';
                this.canvasTip.style.border = '1px solid';
                this.canvasTip.style.border = '1px solid';
                this.canvasTip.style.zIndex = '20';
                this.canvasTip.style.textAlign = 'center';
                const ctx = (this.canvasTip as HTMLCanvasElement).getContext('2d');
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, width, height);
                ctx.fill();
                ctx.fillStyle = 'red';
                ctx.font = fontDefinition;
                ctx.fillText('' + this.measurementsArray[i], 1, height - 2);
                
                body = document.getElementsByTagName('body')[0];
                body.appendChild(this.canvasTip);
                
                break; // the first match gets the tooltip
            }
        }
    }
}

