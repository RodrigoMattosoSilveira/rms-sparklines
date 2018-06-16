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
 
    static line(ctx: CanvasRenderingContext2D,
        linePoints: number[],
        width: number,
        linewidth: number,
        linecolor: string,
        height: number,
        shadecolor:string,
        dotradius: number,
        decorationpoints:  Decoration[]): void {
        
        // console.log('DrawMethods::line_1 linepoints = ' + linepoints);
        // const linePoints: number[] = JSON.parse(linepoints);
        if (linePoints.length === 0) return;
        
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
        if (shadecolor) {
            
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
        if (dotradius > 0 && decorationpoints.length > 0) {
            // console.log('DrawMethods::line decorationPoint = ' + JSON.stringify(decorationpoints));
            for (let i = 0; i < decorationpoints.length; i++) {
                //todo: a hack to solve a problem when running inside vaadin-grid
                if(decorationpoints[i].index > canvasPoints.length-1) {
                    //do nothing
                } else {
                    DrawMethods.circle(ctx, canvasPoints[Number(decorationpoints[i].index)], dotradius, 0, Math.PI * 2, decorationpoints[i].color);
                }
            }
        }
    }
}