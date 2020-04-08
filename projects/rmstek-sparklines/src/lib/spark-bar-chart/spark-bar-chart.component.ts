import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild  } from '@angular/core';
import { SparkBarchart } from './utils/spark-bar-chart';

@Component({
  selector: 'rmstek-spark-bar-chart',
  templateUrl: './spark-bar-chart.component.html',
  styleUrls: ['./spark-bar-chart.component.css']
})
export class SparkBarChartComponentOop implements AfterViewInit, OnDestroy {
  drawingObj: SparkBarchart;
  canvasEl: HTMLCanvasElement;

  @Input() barChartType = `positive`;
  @Input() barGap = 6;
  @Input() barHeights = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  @Input() canvasHeight = 32;
  @Input() canvasWidth = 128;
  @Input() className = `rmstek-spark-barchart`;
  @Input() fillColorMinus = `red`;
  @Input() fillColorPlus = `blue`;
  @Input() fillColorZero = `green`;
  @Input() minimumBarWidth = 3;

  @ViewChild('sparklineCanvas', {static: false}) sparklineCanvas: ElementRef;
  ctx: CanvasRenderingContext2D;

  constructor() { }

  ngAfterViewInit() {
    this.canvasEl = this.sparklineCanvas.nativeElement;
    this.canvasEl.height = this.canvasHeight;
    this.canvasEl.width = this.canvasWidth;

    this.drawingObj = new SparkBarchart (
      this.barChartType ,
      this.barGap.toString(),
      this.barHeights,
      this.canvasHeight.toString(),
      this.canvasWidth.toString(),
      this.className,
      this.fillColorMinus,
      this.fillColorPlus,
      this.fillColorZero ,
      this.minimumBarWidth.toString()
    )

  }
  ngOnDestroy() {
  }
}
