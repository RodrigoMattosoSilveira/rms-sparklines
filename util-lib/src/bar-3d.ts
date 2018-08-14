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

import * as  mathjs from 'mathjs';
import { Matrix } from 'mathjs';
import {Coordinates3DEnum} from './coordinates-3D-enum';

export class Bar3d {
    lowerLeft: Matrix;
    upperRight: Matrix;
    fillColor: string;
    
    constructor(lowerLeft: Matrix, upperRight: Matrix, fillColor: string) {
        this.lowerLeft = lowerLeft;
        this.upperRight = upperRight;
        this.fillColor = fillColor;
    }

    getWidth(): number {
        const ll: any = this.lowerLeft.toArray();
        const ur: any = this.upperRight.toArray();
        let width: any;

        width = ur[Coordinates3DEnum.X] - ll[Coordinates3DEnum.X];
        return width;
    }

    getHeight(): number {
        const ll: any = this.lowerLeft.toArray();
        const ur: any = this.upperRight.toArray();
        let height: any;

        height = ur[Coordinates3DEnum.Y] - ll[Coordinates3DEnum.Y];
        return height;
    }

    draw(ctx: CanvasRenderingContext2D) {
        const ll: any = this.lowerLeft.toArray();
        const width: any = this.getWidth();
        const height: any = this.getHeight();

        ctx.fillStyle = this.fillColor;
        ctx.fillRect(ll[Coordinates3DEnum.X], ll[Coordinates3DEnum.Y], width, height);
    }
}
