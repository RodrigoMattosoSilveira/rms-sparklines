import {  AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LineService } from '../services/line.service';

@Component({
  selector: 'rms-spark-line',
  templateUrl: './spark-line.component.html',
  styleUrls: ['./spark-line.component.css']
})
export class SparkLineComponent implements AfterViewInit {
  @Input() lineColor: string;

  // see https://blog.angular-university.io/angular-viewchild/
  // for a in-depth discussion on @ViewChild
  @ViewChild('sparklineCanvas') sparklineCanvas: ElementRef;

  constructor(private lineService: LineService) { }

  // see https://blog.angular-university.io/angular-viewchild/
  // for recommendation to use ngAfterViewInit instead of ngOnInit
  ngAfterViewInit() {
      this.lineService.draw(this.sparklineCanvas, this.lineColor);
  }
}
