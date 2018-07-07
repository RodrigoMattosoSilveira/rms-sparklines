/*
 * Copyright © Markodojo Inc., 2013 - ${YEAR}
 * All Rights Reserved. No part of this website may be reproduced without Markodojo express consent.
 */

export class Bar {
    x: number;
    y: number;
    width: number;
    height: number;
    fillColor: string;

    constructor(x:number, y:number, width: number, height: number, fillColor: string) {
        this.setX (x);
        this.setY (y);
        this.setWidth (width);
        this.setHeight(height);
        this.setFillColor(fillColor);
    }

    getX(): number { return this.x;}
    setX(value: number) { this.x = value; }

    getY(): number { return this.y; }
    setY(value: number) { this.y = value; }

    getWidth(): number { return this.width; }
    setWidth(value: number) { this.width = value; }

    getHeight(): number { return this.height; }
    setHeight(value: number) { this.height = value; }

    getFillColor(): string { return this.fillColor; }
    setFillColor(value: string) { this.fillColor = value; }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.fillColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}