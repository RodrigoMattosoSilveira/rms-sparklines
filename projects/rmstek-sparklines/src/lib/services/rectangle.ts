export class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.setX(x);
        this.setY(y);
        this.setWidth(width);
        this.setHeight(height);
    }

    getX(): number {
        return this.x;
    }
    setX(value: number): void {
        this.x = value;
    }

    getY(): number {
        return this.y;
    }
    setY(value: number): void {
    this.y = value;
    }

    getWidth(): number {
        return this.width;
    }
    setWidth(value: number): void {
        this.width = value;
    }

    getHeight(): number {
        return this.height;
    }
    setHeight(value: number): void {
        this.height = value;
    }
}
