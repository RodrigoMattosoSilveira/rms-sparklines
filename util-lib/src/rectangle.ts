export class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    
    constructor(_x: number, _y: number, _width: number, _height:number) {
        this.setX(_x);
        this.setY(_y);
        this.setWidth(_width);
        this.setHeight(_height);
    }
    
    getX():number {
        return this.x;
    }
    setX (value:number): void {
        this.x = value;
    }
    
    getY():number {
        return this.y;
    }
    setY (value:number): void {
    this.y = value;
    }
    
    getWidth():number {
        return this.width;
    }
    setWidth (value:number): void {
        this.width = value;
    }
    
    getHeight():number {
        return this.height;
    }
    setHeight (value:number): void {
        this.height = value;
    }
}
