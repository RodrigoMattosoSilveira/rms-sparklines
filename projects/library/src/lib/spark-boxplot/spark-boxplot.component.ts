import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BoxplotService } from '../services/boxplot.service';

@Component({
    selector: 'rms-spark-boxplot',
    templateUrl: './spark-boxplot.component.html',
    styleUrls: ['./spark-boxplot.component.css']
})
export class SparkBoxplotComponent implements AfterViewInit {
    // @Input('spark_color') lineColor: string;

    @Input() axisColor = `black`;
    @Input() axisLineWidth = 1;
    @Input() chartType = `black`;
    @Input() className = `black`;
    @Input() height = 1;
    @Input() highWhiskerColor = `black`;
    @Input() highWhiskerLineWidth = 1;
    @Input() interQuartileRangeLineColor  = `black`;
    @Input() interQuartileRangeFillColor = `black`;
    @Input() interQuartileRangeLineWidth = 1;
    @Input() lowWhiskerColor = `black`;
    @Input() lowWhiskerLineWidth = 1;
    @Input() medianColor = `black`;
    @Input() medianLineWidth = 1;
    @Input() population = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    @Input() width = 1;

    // see https://blog.angular-university.io/angular-viewchild/
    // for a in-depth discussion on @ViewChild
    @ViewChild('sparklBoxplot') sparklineCanvas: ElementRef;

    constructor(private boxplotService: BoxplotService) { }

    // see https://blog.angular-university.io/angular-viewchild/
    // for recommendation to use ngAfterViewInit instead of ngOnInit
    ngAfterViewInit() {
      // this.boxplotService.draw(this.sparklineCanvas, this.lineColor);
      const populationArray: number[] = JSON.parse(this.population);
      const thisThis = this;


      // Compute drawing parameters
      console.log(`SparkBoxplotComponent:ngAfterViewInit - About to draw the boxplot`);
      const maximum = Math.floor(Math.max(...populationArray));
      const minimum = Math.floor(Math.min(...populationArray));
      const median = Math.floor(BoxplotService.calculateMedian(populationArray));
      const quartileOne = Math.floor(BoxplotService.calculatequartileOne(populationArray));
      const quartileThree = Math.floor(BoxplotService.calculatequartileThree(populationArray));
      const xAxisCanvasGap = Math.floor(BoxplotService.calculatexAxisCanvasGap(this.width));
      const whiskerHeight = Math.floor(BoxplotService.calculateWhiskerHeight(this.height));
      const medianHeight = Math.floor(BoxplotService.calculateMedianHeight(this.height));

      // draw
      const canvasEl: HTMLCanvasElement = this.boxplotService.setupCanvasEl(this.sparklineCanvas,
         this.width,
         this.height,
         this.className);

      const ctx = this.boxplotService.setupCtx(canvasEl);
      this.boxplotService.drawXAxis(ctx,
         this.axisLineWidth,
         this.axisColor,
         xAxisCanvasGap,
         this.height,
         this.width);
      this.boxplotService.drawFilledRectangle(ctx,
         // Draw filled rectangle
         this.width,
         xAxisCanvasGap,
         quartileOne,
         maximum,
         this.height,
         medianHeight,
         this.interQuartileRangeFillColor,
         this.interQuartileRangeLineColor,
         this.interQuartileRangeLineWidth,
         quartileThree);
      this.boxplotService.drawRectangleBorder(ctx,
         this.width,
         xAxisCanvasGap,
         quartileOne,
         maximum,
         this.height,
         medianHeight,
         quartileThree,
         this.interQuartileRangeLineColor,
         this.interQuartileRangeLineWidth);
      this.boxplotService.drawMedian(ctx,
         this.width,
         xAxisCanvasGap,
         this.medianLineWidth,
         median,
         maximum,
         this.medianColor,
         this.height,
         medianHeight);
      this.boxplotService.drawWesternWhisker(ctx,
         // Draw western (low) whisker
         this.lowWhiskerColor,
         this.lowWhiskerLineWidth,
         xAxisCanvasGap,
         this.height,
         whiskerHeight);
      this.boxplotService.drawEaternWhisker(ctx,
         this.highWhiskerLineWidth,
         this.highWhiskerColor,
         this.width,
         xAxisCanvasGap,
         this.height,
         whiskerHeight);

      // Draw tooltips
      const coordinatesTips = this.boxplotService.buildTooltipCoordinates(this.width,
         xAxisCanvasGap,
         quartileOne,
         maximum,
         this.height,
         medianHeight,
         quartileThree,
         whiskerHeight,
         minimum,
         median
      );
      this.sparklineCanvas.nativeElement.addEventListener('mousemove', function(event: any) {
      // console.log(`RmsSparklineInlineNew::addEventListener`);

      // Note that when this function is called, this points to the target element!
      // console.log(`SparkLineComponent:ngAfterViewInit - handling mousemove`);
         thisThis.boxplotService.handleMouseMove(event,
            canvasEl,
            coordinatesTips);
      });

      this.sparklineCanvas.nativeElement.addEventListener('mouseout', function() {
      // console.log(`RmsSparklineInlineNew::addEventListener`);
         thisThis.boxplotService.handleMouseOut();
      });
   }
}
