import {Point} from './Point';

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
    static circle(ctx: CanvasRenderingContext2D, point: Point, dotradius: number, startAngle: number, endAngle: number, color: string) {
        ctx.beginPath();
        ctx.arc(point.getX(), point.getY(), dotradius, startAngle, endAngle);
        ctx.fillStyle = color;
        ctx.fill();
    }
}