import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BarchartService } from '../services/barchart.service';

@Component({
  selector: 'rms-spark-barchart',
  templateUrl: './spark-barchart.component.html',
  styleUrls: ['./spark-barchart.component.css']
})
export class SparkBarchartComponent implements AfterViewInit {
  @Input('spark_color') lineColor: string;

  // see https://blog.angular-university.io/angular-viewchild/
  // for a in-depth discussion on @ViewChild
  @ViewChild('sparklineCanvas') sparklineCanvas: ElementRef;

  constructor(private barchartService:BarchartService) { }

  // see https://blog.angular-university.io/angular-viewchild/
  // for recommendation to use ngAfterViewInit instead of ngOnInit
  ngAfterViewInit() {
      this.barchartService.draw(this.sparklineCanvas, this.lineColor);
  }
}
