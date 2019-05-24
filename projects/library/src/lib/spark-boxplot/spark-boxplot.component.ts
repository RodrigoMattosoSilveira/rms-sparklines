import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'rms-spark-boxplot',
  templateUrl: './spark-boxplot.component.html',
  styleUrls: ['./spark-boxplot.component.css']
})
export class SparkBoxplotComponent implements AfterViewInit {
  @Input('spark_color') color: string;

  // see https://blog.angular-university.io/angular-viewchild/
  // for a in-depth discussion on @ViewChild
  @ViewChild('sparklineCanvas') sparklineCanvas: ElementRef;

  constructor() { }

  // see https://blog.angular-university.io/angular-viewchild/
  // for recommendation to use ngAfterViewInit instead of ngOnInit
  ngAfterViewInit() {
      let ctx: CanvasRenderingContext2D = this.sparklineCanvas.nativeElement.getContext('2d');

      // Draw
      ctx.fillStyle = this.color;
      ctx.fillRect(20, 20, 150, 100);
  }
}
