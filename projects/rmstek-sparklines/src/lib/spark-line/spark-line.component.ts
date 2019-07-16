import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SparkLine } from './utils/spark-line';

@Component({
  selector: 'rmstek-spark-line',
  templateUrl: './spark-line.component.html',
  styleUrls: ['./spark-line.component.css']
})
export class SparkLineComponent implements AfterViewInit {
   measurementsArray: number[];
   coordinatesWorld: number[];
   coordinatesViewport: number[];
   coordinatesCanvas: number[];
   ctx: CanvasRenderingContext2D;
   coordinateTips: any[];

   // Decoration points objects
   @Input() decorationPoints = JSON.stringify([]);

   // A number giving the size of the dots used to mark important values.
   @Input() dotRadius = 1;

   // A number giving the height of the sparkline box in pixels. By default, uses the height of the Canvas element.
   @Input() height = 32;

   // A string giving the color of the sparkline. Any valid CSS color.
   @Input() lineColor = `black`;

   // The sparkline data source
   @Input() linePoints = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9]);

   // A number giving the stroke of the line in pixels.
   @Input() lineWidth = 1;

   // A string giving the color of the dot marking the highest value. Any valid CSS color.
   @Input() shadeColor = ``;

   // A number giving the width of the sparkline box in pixels.
   @Input() width = 128;
   @ViewChild('sparklineCanvas') sparklineCanvas: ElementRef;
   canvasEl:HTMLCanvasElement;

   constructor() { }

   ngAfterViewInit() {
      var drawingObj: SparkLine;
      this.canvasEl = this.sparklineCanvas.nativeElement;
      this.canvasEl.height = this.height;
      this.canvasEl.width = this.width;

      drawingObj = new SparkLine(this.decorationPoints,
         this.dotRadius.toString(),
         this.height.toString(),
         this.lineColor,
         this.linePoints,
         this.lineWidth.toString(),
         this.shadeColor,
         this.width.toString());

      if(!drawingObj.validate()) {
         console.log(`SparkLineComponent:ngAfterViewInit - Invalid arguments`)
      }
      else {
         drawingObj.prepare();
         drawingObj.scale(this.canvasEl);
         drawingObj.draw(this.canvasEl);
         drawingObj.showToolTips(this.canvasEl);
      }
   }
}
