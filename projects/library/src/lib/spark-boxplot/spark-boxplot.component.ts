import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BoxplotService } from '../services/boxplot.service'

@Component({
  selector: 'rms-spark-boxplot',
  templateUrl: './spark-boxplot.component.html',
  styleUrls: ['./spark-boxplot.component.css']
})
export class SparkBoxplotComponent implements AfterViewInit {
  @Input('spark_color') lineColor: string;

  // see https://blog.angular-university.io/angular-viewchild/
  // for a in-depth discussion on @ViewChild
  @ViewChild('sparklineCanvas') sparklineCanvas: ElementRef;

  constructor(private boxplotService: BoxplotService) { }

  // see https://blog.angular-university.io/angular-viewchild/
  // for recommendation to use ngAfterViewInit instead of ngOnInit
  ngAfterViewInit() {
      this.boxplotService.draw(this.sparklineCanvas, this.lineColor);
  }
}
