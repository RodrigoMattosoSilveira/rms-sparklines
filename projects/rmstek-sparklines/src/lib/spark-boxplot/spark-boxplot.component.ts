import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BoxplotService } from '../services/boxplot.service';

@Component({
    selector: 'rmstek-spark-boxplot',
    templateUrl: './spark-boxplot.component.html',
    styleUrls: ['./spark-boxplot.component.css']
})
export class SparkBoxplotComponent implements AfterViewInit {
    // @Input('spark_color') lineColor: string;

    @Input() axisColor = `black`;
    @Input() axisLineWidth = 1;
    @Input() chartType = `black`;
    @Input() className = `black`;
    @Input() height = 32;
    @Input() highWhiskerColor = `black`;
    @Input() highWhiskerLineWidth = 1;
    @Input() interQuartileRangeLineColor  = `black`;
    @Input() interQuartileRangeFillColor = `black`;
    @Input() interQuartileRangeLineWidth = 1;
    @Input() lowWhiskerColor = `black`;
    @Input() lowWhiskerLineWidth = 1;
    @Input() medianColor = `black`;
    @Input() medianLineWidth = 1;
    @Input() population = JSON.stringify([7,
        17,
        8,
        15,
        6,
        7,
        4,
        14,
        16,
        16,
        17,
        6,
        16,
        20,
        11,
        16,
        10,
        19,
        5,
        18]);
    @Input() width = 128;

    // see https://blog.angular-university.io/angular-viewchild/
    // for a in-depth discussion on @ViewChild
    @ViewChild('sparklBoxplot', {static: false}) sparklineCanvas: ElementRef;
    ctx: CanvasRenderingContext2D;

    constructor(private boxplotService: BoxplotService) { }

    // see https://blog.angular-university.io/angular-viewchild/
    // for recommendation to use ngAfterViewInit instead of ngOnInit
    ngAfterViewInit() {
      // this.boxplotService.draw(this.sparklineCanvas, this.lineColor);
      const populationArray: number[] = JSON.parse(this.population);
      const thisThis = this;


      // Compute drawing parameters
      // console.log(`SparkBoxplotComponent:ngAfterViewInit - About to draw the boxplot`);
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

      this.ctx = this.boxplotService.setupCtx(canvasEl);
      this.boxplotService.drawXAxis(this.ctx,
         this.axisLineWidth,
         this.axisColor,
         xAxisCanvasGap,
         this.height,
         this.width);
      this.boxplotService.drawFilledRectangle(this.ctx,
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
      this.boxplotService.drawRectangleBorder(this.ctx,
         this.width,
         xAxisCanvasGap,
         quartileOne,
         maximum,
         this.height,
         medianHeight,
         quartileThree,
         this.interQuartileRangeLineColor,
         this.interQuartileRangeLineWidth);
      this.boxplotService.drawMedian(this.ctx,
         this.width,
         xAxisCanvasGap,
         this.medianLineWidth,
         median,
         maximum,
         this.medianColor,
         this.height,
         medianHeight);
      this.boxplotService.drawWesternWhisker(this.ctx,
         // Draw western (low) whisker
         this.lowWhiskerColor,
         this.lowWhiskerLineWidth,
         xAxisCanvasGap,
         this.height,
         whiskerHeight);
      this.boxplotService.drawEaternWhisker(this.ctx,
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
