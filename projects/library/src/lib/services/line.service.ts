import {ElementRef, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LineService {

    constructor() { }

    draw(sparklineCanvas: ElementRef, lineColor: string) {
        let ctx: CanvasRenderingContext2D = sparklineCanvas.nativeElement.getContext('2d');

        // Draw
        ctx.fillStyle = lineColor;
        ctx.fillRect(20, 20, 150, 100);
    }
}
