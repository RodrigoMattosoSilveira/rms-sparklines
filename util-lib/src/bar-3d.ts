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

import {Coordinates3DEnum} from './coordinates-3D-enum';

export class Bar3d {
    lowerLeft: number[];
    upperRight: number[];
    width: number;
    height: number;
    fillColor: string;
    
    constructor(lowerLeft: number[], upperRight: number[], fillColor: string) {
        this.lowerLeft = lowerLeft.slice(0);
        this.upperRight = upperRight.slice(0);
        this.width = this.upperRight[Coordinates3DEnum.X]  - this.lowerLeft[Coordinates3DEnum.X];
        this.height = this.lowerLeft[Coordinates3DEnum.Y]  - this.upperRight[Coordinates3DEnum.Y];
        this.fillColor = fillColor;
    }
    
    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.fillColor;
        ctx.fillRect(this.lowerLeft[Coordinates3DEnum.X], this.lowerLeft[Coordinates3DEnum.Y], this.width, this.height);
    }
}
