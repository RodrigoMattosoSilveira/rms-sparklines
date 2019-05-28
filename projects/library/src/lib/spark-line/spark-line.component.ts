import {  AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LineService } from '../services/line.service';

@Component({
  selector: 'rms-spark-line',
  templateUrl: './spark-line.component.html',
  styleUrls: ['./spark-line.component.css']
})
export class SparkLineComponent implements AfterViewInit {
    // Class(es) to be added to the canvas element.
    @Input() className: string;

    // Decoration points objects
    @Input('decorationPoints') decorationPointsString: string;

    // A number giving the size of the dots used to mark important values.
    @Input() dotRadius: number;

    // A number giving the height of the sparkline box in pixels. By default, uses the height of the Canvas element.
    @Input() height: number;

    // A string giving the color of the sparkline. Any valid CSS color.
    @Input() lineColor: string;

    // The sparkline data source
    @Input('linePoints') linePointsString: string;

    // A number giving the stroke of the line in pixels.
    @Input() lineWidth: number;

    // A string giving the color of the dot marking the highest value. Any valid CSS color.
    @Input() shadeColor: string;

    // A number giving the width of the sparkline box in pixels.
    @Input() width: number;

  // see https://blog.angular-university.io/angular-viewchild/
  // for a in-depth discussion on @ViewChild
  @ViewChild('sparklineCanvas') sparklineCanvas: ElementRef;

  constructor(private lineService: LineService) { }

  // see https://blog.angular-university.io/angular-viewchild/
  // for recommendation to use ngAfterViewInit instead of ngOnInit
  ngAfterViewInit() {
      let decorationPoints = JSON.parse(this.decorationPointsString);
      let linePoints = JSON.parse(this.linePointsString);
      // this.lineService.draw(this.sparklineCanvas, this.lineColor);

      console.log('SparkLineComponent.ngAfterViewInit: about to call the line drawing');
      this.lineService.draw1(
          this.className,
          decorationPoints,
          this.dotRadius,
          this.height,
          this.lineColor,
          linePoints,
          this.lineWidth,
          this.shadeColor,
          this.sparklineCanvas,
          this.width
      )
  }
}
