import {  AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LineService } from '../services/line.service';

@Component({
  selector: 'rms-spark-line',
  templateUrl: './spark-line.component.html',
  styleUrls: ['./spark-line.component.css']
})
export class SparkLineComponent implements AfterViewInit {
   // Class(es) to be added to the canvas element.
   @Input() className = ``;

   // Decoration points objects
   @Input() decorationPoints = JSON.stringify([]);

   // A number giving the size of the dots used to mark important values.
   @Input() dotRadius = 1;

   // A number giving the height of the sparkline box in pixels. By default, uses the height of the Canvas element.
   @Input() height = 32;

   // A string giving the color of the sparkline. Any valid CSS color.
   @Input() lineColor = `black`;

   // The sparkline data source
   @Input() linePoints = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]);

   // A number giving the stroke of the line in pixels.
   @Input() lineWidth = 1;

   // A string giving the color of the dot marking the highest value. Any valid CSS color.
   @Input() shadeColor = ``;

   // A number giving the width of the sparkline box in pixels.
   @Input() width = 128;

   // see https://blog.angular-university.io/angular-viewchild/
   // for a in-depth discussion on @ViewChild
   @ViewChild('#sparklineCanvas') sparklineCanvas: ElementRef;

   constructor(private lineService: LineService) { }

   measurementsArray: number[];
   coordinatesWorld: number[];
   coordinatesViewport: number[];
   coordinatesCanvas: number[];
   ctx: CanvasRenderingContext2D;
   coordinateTips: any[];


  // see https://blog.angular-university.io/angular-viewchild/
  // for recommendation to use ngAfterViewInit instead of ngOnInit
  ngAfterViewInit() {
      const decorationPointsArray = JSON.parse(this.decorationPoints);
      const linePointsArray: number[] = JSON.parse(this.linePoints);
      const thisThis = this;
      // this.lineService.draw(this.sparklineCanvas, this.lineColor);

      console.log('SparkLineComponent.ngAfterViewInit: about to call the line drawing');
      // this.lineService.draw1(
      //     this.className,
      //     decorationPointsArray,
      //     this.dotRadius,
      //     this.height,
      //     this.lineColor,
      //     linePointsArray,
      //     this.lineWidth,
      //     this.shadeColor,
      //     this.sparklineCanvas,
      //     this.width
      // );

      this.measurementsArray = this.lineService.buildMeasurementsArray(linePointsArray);
      this.coordinatesWorld = this.lineService.buildCoordinatesWorld(this.measurementsArray);
      this.coordinatesViewport = this.lineService.buildCoordinatesViewPort(this.width,
         this.height,
         this.dotRadius,
         this.measurementsArray,
         this.coordinatesWorld);
      this.coordinatesCanvas = this.lineService.buildCoordinatesCanvas(this.dotRadius,
         this.height,
         this.measurementsArray,
         this.coordinatesViewport);

      this.ctx = this.lineService.getCanvasContext(this.sparklineCanvas);
      console.log(`SparkLineComponent:ngAfterViewInit - ctx: ` + JSON.stringify(this.ctx));
      this.lineService.drawShade(this.ctx,
            this.lineWidth,
            this.height,
            this.shadeColor,
            this.coordinatesCanvas,
            this.measurementsArray.length);
      this.lineService.drawLine(this.ctx,
         this.lineWidth,
         this.lineColor,
         this.coordinatesCanvas,
         this.measurementsArray.length);
      this.lineService.drawDecorations(decorationPointsArray,
         this.dotRadius,
         this.measurementsArray,
         this.sparklineCanvas.nativeElement.getContext('2d'),
         this.coordinatesCanvas);
      this.coordinateTips = this.lineService.buildToolTipsCoordinates(this.measurementsArray,
         this.coordinatesCanvas);
      this.sparklineCanvas.nativeElement.addEventlistner('mousemove', function (event: any) {
            thisThis.lineService.handleMouseMove(event,
              this.sparklineCanvas.nativeElement,
              this.measurementsArray,
              this.coordinatesTips);
      })
      this.sparklineCanvas.nativeElement.addEventlistner('mouseout', function () {
           thisThis.lineService.handleMouseOut();
      })
   }
}
