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
  @ViewChild('sparklineCanvas') sparklineCanvas: ElementRef;

  constructor(private lineService: LineService) { }

  // see https://blog.angular-university.io/angular-viewchild/
  // for recommendation to use ngAfterViewInit instead of ngOnInit
  ngAfterViewInit() {
      const decorationPointsArray = JSON.parse(this.decorationPoints);
      const linePointsArray = JSON.parse(this.linePoints);
      // this.lineService.draw(this.sparklineCanvas, this.lineColor);

      console.log('SparkLineComponent.ngAfterViewInit: about to call the line drawing');
      this.lineService.draw1(
          this.className,
          decorationPointsArray,
          this.dotRadius,
          this.height,
          this.lineColor,
          linePointsArray,
          this.lineWidth,
          this.shadeColor,
          this.sparklineCanvas,
          this.width
      );
  }
}
