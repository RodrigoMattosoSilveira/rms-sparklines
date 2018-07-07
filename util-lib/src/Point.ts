export class Point {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.setX(x);
		this.setY(y);
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
}