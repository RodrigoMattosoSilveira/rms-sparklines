import { ElementRef } from '@angular/core';

export class CanvasElement {
  private canvasEl: HTMLCanvasElement;

  getCanvasEl (): HTMLCanvasElement{ return this.canvasEl; }
  setCanvasEl (value: HTMLCanvasElement): void { this.canvasEl = value; }

  constructor(private sparklineCanvas: ElementRef) {
  }

  validate(failMessage: string): boolean {
    let valid = true;
    let canvasElWork: HTMLElement;

    if (this.sparklineCanvas == null) {
      console.log(failMessage + ` is null`);
      valid = false;
    } else {
      if (valid && !this.sparklineCanvas.hasOwnProperty('nativeElement')) {
        console.log(failMessage + ` does not have nativeElement key`);
        valid = false;
      } else {
        canvasElWork = this.sparklineCanvas.nativeElement;
        if (valid && canvasElWork.tagName !== `CANVAS`) {
          console.log(failMessage + ` tagName is not CANVAS`);
          valid = false;
        }
      }
    }
    
    if (valid) {
      this.setCanvasEl(this.sparklineCanvas.nativeElement);
    }

    return valid;
  }
}
