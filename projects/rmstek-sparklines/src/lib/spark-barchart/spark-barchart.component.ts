import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { BarchartService } from '../services/barchart.service';
import { Bar3d } from '../services/bar-3d';

@Component({
  selector: 'rmstek-spark-barchart',
  templateUrl: './spark-barchart.component.html',
  styleUrls: ['./spark-barchart.component.css']
})
export class SparkBarchartComponent implements AfterViewInit, OnDestroy {
    // @Input('spark_color') lineColor: string;

    @Input() barGap = 6;
    @Input() barHeights = JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    @Input() chartType = `positive`;
    @Input() className = `rmstek-spark-barchart`;
    @Input() fillColorMinus = `red`;
    @Input() fillColorPlus = `blue`;
    @Input() fillColorZero = `green`;
    @Input() height = 32;
    @Input() minimumBarWidth = 3;
    @Input() width = 128;

    // see https://blog.angular-university.io/angular-viewchild/
    // for a in-depth discussion on @ViewChild
    @ViewChild('sparklineCanvas') sparklineCanvas: ElementRef;
    ctx: CanvasRenderingContext2D;

    constructor(private barchartService: BarchartService) { }

    // see https://blog.angular-university.io/angular-viewchild/
    // for recommendation to use ngAfterViewInit instead of ngOnInit
    ngAfterViewInit() {
        // this.barchartService.draw(this.sparklineCanvas, this.lineColor);
        const barHeightsArray: number[] = JSON.parse(this.barHeights);
        const tooltipId: string = `rmstek-spark-barchart` +(new Date).getTime();
        const thisThis = this;

        let canvasEl: HTMLCanvasElement;
        // let ctx: CanvasRenderingContext2D;
        let _barHeights: number[];
        let barWidth: number;
        let bars_3d: Bar3d[];
        let coordinatesTips: any[];


        if (this.barchartService.validate(this.barGap,
              barHeightsArray,
              this.chartType,
              this.fillColorMinus,
              this.fillColorPlus,
              this.fillColorZero,
              this.minimumBarWidth,
              this.sparklineCanvas) != true) {
           // console.log(`SparkBarchartComponent:ngAfterViewInit - Invalid arguments`)
        }
        else {
           canvasEl = this.barchartService.setupCanvasEl(this.sparklineCanvas,
                this.width,
                this.height,
                this.className);
          this.ctx = this.barchartService.setupCtx(canvasEl);
          this.ctx.clearRect(0, 0,this.width, this.height);

          // Debug
         // this.ctx.fillStyle = fillColorMinus;
         // this.ctx.fillRect(20, 20, 150, 100);
         // return;


         // Calculate parameters
         // this.setCtx(this.getCanvasEl().getContext('2d'));
         // this.setCanvasWidth(this.getCanvasEl().width);
         // this.setCanvasHeight(this.getCanvasEl().height);

         // Insert the bars
         _barHeights = this.barchartService.calculateBarWidth(this.width, barHeightsArray, this.minimumBarWidth).slice(0);
         if (_barHeights.length === 0) { throw new Error('barChart::calculateBarWidth: barHeights was trimmed to be empty'); }
         // console.log('BarChart::draw - calculateBarWidth: ' + JSON.stringify(_barHeights));

         // Save the bar width
         barWidth = this.barchartService.computeBarWidth(this.width, _barHeights);
         // console.log('BarChart::draw - computeBarWidth: ' + JSON.stringify(barWidth));

         // Insert the gaps by reducing barWidth to be no lower than minimumBarWidth, if necessary
         barWidth = this.barchartService.insertGapsUsingBarWidth( this.width, _barHeights, this.barGap, this.minimumBarWidth);
         // console.log('BarChart::draw - computeBarWidth: ' + JSON.stringify(barWidth));

         // Insert the gaps by trimming barHeights, if necessary
         _barHeights = this.barchartService.insertGapsUsingBarHeights(this.width, _barHeights, this.minimumBarWidth, this.barGap);
         if (_barHeights.length === 0) { throw new Error('barChart::insertGapsUsingBarHeights: barHeights was trimmed to be empty'); }
         // console.log('BarChart::draw - insertGapsUsingBarHeights: ' + JSON.stringify(_barHeights));

         // Set the bars to be drawn
         bars_3d = this.barchartService.buildBars_1(
            this.barGap,
            _barHeights,
            barWidth,
            this.chartType,
            this.fillColorMinus,
            this.fillColorZero,
            this.fillColorPlus,
            this.height);
         // console.log('BarChart::draw - buildBars: ' +  JSON.stringify(this.getBars()));
          this.barchartService._draw_1(this.ctx, bars_3d);

         coordinatesTips = this.barchartService.buildCoordinateTips(bars_3d);
         this.sparklineCanvas.nativeElement.addEventListener('mousemove', function(event: any) {
         // console.log(`RmsSparklineInlineNew::addEventListener`);

         // Note that when this function is called, this points to the target element!
         // console.log(`SparkLineComponent:ngAfterViewInit - handling mousemove`);
            thisThis.barchartService.handleMouseMove(event,
               canvasEl,
               coordinatesTips,
               tooltipId);
         });

         this.sparklineCanvas.nativeElement.addEventListener('mouseout', function() {
         // console.log(`RmsSparklineInlineNew::addEventListener`);
            thisThis.barchartService.handleMouseOut(tooltipId);
         });

      }
    }
    // TODO add this when we migrate Barchar to OO
    ngOnDestroy() {
    }
}
