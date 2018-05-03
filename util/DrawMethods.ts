import {Point} from './Point';

export class DrawMethods {
    // https://www.w3schools.com/jsref/canvas_arc.asp
    static circle(ctx: CanvasRenderingContext2D, point: Point, dotradius: number, startAngle: number, endAngle: number, color: string) {
        ctx.beginPath();
        ctx.arc(point.getX(), point.getY(), dotradius, startAngle, endAngle);
        ctx.fillStyle = color;
        ctx.fill();
    }
}