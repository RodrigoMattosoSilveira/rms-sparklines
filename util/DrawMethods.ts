import {Point} from './Point';
import { CanvasMath } from './CanvasMath';
import { Decoration } from './Decoration';

export class DrawMethods {
    /**
     * Draws a circle in a canvas
     * https://www.w3schools.com/jsref/canvas_arc.asp
     * @param {CanvasRenderingContext2D} ctx
     * @param {Point} point
     * @param {number} dotradius
     * @param {number} startAngle
     * @param {number} endAngle
     * @param {string} color
     */
    static circle(ctx: CanvasRenderingContext2D, point: Point, dotradius: number, startAngle: number, endAngle: number, color: string): void {
        ctx.beginPath();
        ctx.arc(point.getX(), point.getY(), dotradius, startAngle, endAngle);
        ctx.fillStyle = color;
        ctx.fill();
    }

    // /**
    //  * Draws  a line in a canvas. If shade is true draws a draping backlog. If dotradius is greater than zero highlights the start, end, min, and max points
    //  * @param {CanvasRenderingContext2D} ctx
    //  * @param {number[]} linePoints
    //  * @param {number} width
    //  * @param {number} linewidth
    //  * @param {string} linecolor
    //  * @param {number} height
    //  * @param {boolean} shade
    //  * @param {string} shadecolor
    //  * @param {number} dotradius
    //  * @param {string} startcolor
    //  * @param {string} endcolor
    //  * @param {string} maxcolor
    //  * @param {string} mincolor
    //  */
    // static line(ctx: CanvasRenderingContext2D,
    //             linePoints: number[],
    //             width: number,
    //             linewidth: number,
    //             linecolor: string,
    //             height: number,
    //             shade: boolean,
    //             shadecolor:string,
    //             dotradius: number,
    //             startcolor: string,
    //             endcolor: string,
    //             maxcolor: string,
    //             mincolor: string): void {
    //
    //     // Clear the rectangle
    //     ctx.clearRect(0, 0, width, height);
    //
    //     // Calculate the x-axis and y-axis steps
    //     let xStep = CanvasMath.xStep(width, linePoints, dotradius);
    //     // // console.log('CanvasMath:xStep = ' + this.xStep);
    //
    //     let yStep = CanvasMath.yStep(height, linePoints, dotradius);
    //     //// console.log('CanvasMath:yStep = ' + this.yStep);
    //
    //     // Build the drawPoints and shadePoints arrays
    //     let drawPoints: Point[] = [];
    //     drawPoints.push(new Point(0,0)); // used to build the shade area, it will be dropped
    //     for (let i: number = 0; i < linePoints.length; i++) {
    //         drawPoints.push(new Point(xStep*i, linePoints[i]*yStep));
    //     }
    //     drawPoints.push(new Point(drawPoints[drawPoints.length-1].getX(),0)); // used to build the shade area, it will be dropped
    //     // this.logMessage = 'drawPoints:\n';
    //     // for (let drawPoint of this.drawPoints) {
    //     //   this.logMessage += ' Drawpoint x: ' + drawPoint.getX() + '   Drawpoint y: ' + drawPoint.getY() + '\n';
    //     // }
    //     // // console.log(this.logMessage);
    //
    //     // Translate drawPoints into canvasPoints
    //     let canvasPoints: Point[] = [];
    //     for (let drawPoint of drawPoints) {
    //         canvasPoints.push(CanvasMath.translateToCanvas(height, drawPoint, dotradius));
    //     }
    //
    //     // Fill the area underneath the sparkline, if shade is true
    //     // // console.log(`shade me: ` + shaderadius ? `Do it` : `Don't do it`);
    //     if (shade) {
    //
    //         // Fill up the area
    //         ctx.beginPath();
    //         ctx.fillStyle = shadecolor;
    //         for (let i: number = 0; i <canvasPoints.length; i++) {
    //             if (i === 0) {
    //                 ctx.moveTo(canvasPoints[0].getX(), canvasPoints[0].getY())
    //             }
    //             else {
    //                 ctx.lineTo(canvasPoints[i].getX(), canvasPoints[i].getY())
    //             }
    //         }
    //         ctx.fill();
    //     }
    //
    //     // Drop first and last points, they were used to build the shade area
    //     canvasPoints.splice(0,1);
    //     canvasPoints.splice(canvasPoints.length-1, 1);
    //
    //     // Draw the path, on top of the shade area
    //     // https://www.w3schools.com/graphics/canvas_coordinates.asp
    //     ctx.beginPath();
    //     ctx.lineWidth = linewidth;
    //     ctx.strokeStyle = linecolor;
    //     for (let i: number = 0; i <canvasPoints.length; i++) {
    //         if (i === 0) {
    //             ctx.moveTo(canvasPoints[0].getX(), canvasPoints[0].getY())
    //         }
    //         else {
    //             ctx.lineTo(canvasPoints[i].getX(), canvasPoints[i].getY())
    //         }
    //     }
    //     ctx.stroke();
    //
    //     /**
    //      * Draw points only if a dotRadius is supplied and it is greater than zero
    //      */
    //     if (dotradius > 0) {
    //         // Draw start point ... an arc using the first point in canvasPoints
    //         DrawMethods.circle(ctx, canvasPoints[0], dotradius, 0, Math.PI * 2, startcolor);
    //
    //         // Draw end point ... an arc using the last point in canvasPoints
    //         DrawMethods.circle(ctx, canvasPoints[canvasPoints.length-1], dotradius, 0, Math.PI * 2, endcolor);
    //
    //         // Draw max point
    //         let  maxPointIndex = CanvasMath.maxPointIndex(linePoints);
    //         DrawMethods.circle(ctx, canvasPoints[maxPointIndex], dotradius, 0, Math.PI * 2, maxcolor);
    //
    //         // Draw min point
    //         let minPointIndex = CanvasMath.mixPointIndex(linePoints);
    //         DrawMethods.circle(ctx, canvasPoints[minPointIndex], dotradius, 0, Math.PI * 2, mincolor);
    //     }
    // }
    
    
    static line_1(ctx: CanvasRenderingContext2D,
        linePoints: number[],
        width: number,
        linewidth: number,
        linecolor: string,
        height: number,
        shade: boolean,
        shadecolor:string,
        dotradius: number,
        decorationPoints: string): void {
        
        // Clear the rectangle
        ctx.clearRect(0, 0, width, height);
        
        // Calculate the x-axis and y-axis steps
        let xStep = CanvasMath.xStep(width, linePoints, dotradius);
        // // console.log('CanvasMath:xStep = ' + this.xStep);
        
        let yStep = CanvasMath.yStep(height, linePoints, dotradius);
        //// console.log('CanvasMath:yStep = ' + this.yStep);
        
        // Build the drawPoints and shadePoints arrays
        let drawPoints: Point[] = [];
        drawPoints.push(new Point(0,0)); // used to build the shade area, it will be dropped
        for (let i: number = 0; i < linePoints.length; i++) {
            drawPoints.push(new Point(xStep*i, linePoints[i]*yStep));
        }
        drawPoints.push(new Point(drawPoints[drawPoints.length-1].getX(),0)); // used to build the shade area, it will be dropped
        // this.logMessage = 'drawPoints:\n';
        // for (let drawPoint of this.drawPoints) {
        //   this.logMessage += ' Drawpoint x: ' + drawPoint.getX() + '   Drawpoint y: ' + drawPoint.getY() + '\n';
        // }
        // // console.log(this.logMessage);
        
        // Translate drawPoints into canvasPoints
        let canvasPoints: Point[] = [];
        for (let drawPoint of drawPoints) {
            canvasPoints.push(CanvasMath.translateToCanvas(height, drawPoint, dotradius));
        }
        
        // Fill the area underneath the sparkline, if shade is true
        // // console.log(`shade me: ` + shaderadius ? `Do it` : `Don't do it`);
        if (shade) {
            
            // Fill up the area
            ctx.beginPath();
            ctx.fillStyle = shadecolor;
            for (let i: number = 0; i <canvasPoints.length; i++) {
                if (i === 0) {
                    ctx.moveTo(canvasPoints[0].getX(), canvasPoints[0].getY())
                }
                else {
                    ctx.lineTo(canvasPoints[i].getX(), canvasPoints[i].getY())
                }
            }
            ctx.fill();
        }
        
        // Drop first and last points, they were used to build the shade area
        canvasPoints.splice(0,1);
        canvasPoints.splice(canvasPoints.length-1, 1);
        
        // Draw the path, on top of the shade area
        // https://www.w3schools.com/graphics/canvas_coordinates.asp
        ctx.beginPath();
        ctx.lineWidth = linewidth;
        ctx.strokeStyle = linecolor;
        for (let i: number = 0; i <canvasPoints.length; i++) {
            if (i === 0) {
                ctx.moveTo(canvasPoints[0].getX(), canvasPoints[0].getY())
            }
            else {
                ctx.lineTo(canvasPoints[i].getX(), canvasPoints[i].getY())
            }
        }
        ctx.stroke();
        
        /**
         * Draw decoration points only if a dotRadius is supplied and it is greater than zero
         */
        if (dotradius > 0) {
            const dp: Decoration[] = JSON.parse(decorationPoints);
            
            for (let i = 0; i < dp.length; i++) {
                DrawMethods.circle(ctx, canvasPoints[dp[i].index], dotradius, 0, Math.PI * 2, dp[i].color);
            }
        }
    }
}