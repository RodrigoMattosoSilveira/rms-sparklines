import { AfterViewInit, OnDestroy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SparkLine } from './utils/spark-line';

@Component({
  selector: 'rmstek-spark-line',
  templateUrl: './spark-line.component.html',
  styleUrls: ['./spark-line.component.css']
})
export class SparkLineComponent implements AfterViewInit, OnDestroy {
   drawingObj: SparkLine;
   canvasEl: HTMLCanvasElement;

   // A number giving the height of the sparkline box in pixels. By default, uses the height of the Canvas element.
   @Input() canvasHeight = 32;

   // A number giving the width of the sparkline box in pixels.
   @Input() canvasWidth = 128;

   // Decoration points objects
   @Input() decorationPoints = JSON.stringify([]);

   // A number giving the size of the dots used to mark important values.
   @Input() dotRadius = 1;

   // A string giving the color of the sparkline. Any valid CSS color.
   @Input() lineColor = `black`;

   // The sparkline data source
   @Input() linePoints = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9]);

   // A number giving the stroke of the line in pixels.
   @Input() lineWidth = 1;

   // A string giving the color of the dot marking the highest value. Any valid CSS color.
   @Input() shadeColor = ``;

   @ViewChild('sparklineCanvas', {static: false}) sparklineCanvas: ElementRef;

   constructor() { }

   ngAfterViewInit() {
      this.canvasEl = this.sparklineCanvas.nativeElement;
      this.canvasEl.height = this.canvasHeight;
      this.canvasEl.width = this.canvasWidth;

      this.drawingObj = new SparkLine(this.canvasHeight.toString(),
         this.canvasWidth.toString(),
         this.decorationPoints,
         this.dotRadius.toString(),
         this.lineColor,
         this.linePoints,
         this.lineWidth.toString(),
         this.shadeColor);

      if (!this.drawingObj.validate()) {
         // console.log(`SparkLineComponent:ngAfterViewInit - Invalid arguments`);
      } else {
         this.drawingObj.prepare();
         this.drawingObj.scale(this.canvasEl);
         this.drawingObj.draw(this.canvasEl);
         this.drawingObj.showToolTips(this.canvasEl);
      }
   }
   ngOnDestroy() {
     // console.log('SparkLineComponent:OnDestroy');
     this.drawingObj.removeToolTips(this.canvasEl);
   }
}
