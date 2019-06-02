import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BarchartService } from '../services/barchart.service';

@Component({
  selector: 'rms-spark-barchart',
  templateUrl: './spark-barchart.component.html',
  styleUrls: ['./spark-barchart.component.css']
})
export class SparkBarchartComponent implements AfterViewInit {
    // @Input('spark_color') lineColor: string;

    @Input() barGap = 6;
    @Input() barHeights = JSON.stringify([, 2, 3, 4, 5, 6, 7, 8, 9]);
    @Input() chartType = `positive`;
    @Input() className = `rms-spark-barchart`;
    @Input() fillColorMinus = `red`;
    @Input() fillColorPlus = `blue`;
    @Input() fillColorZero = `green`;
    @Input() height = 32;
    @Input() minimumBarWidth = 3;
    @Input() width = 128;

    // see https://blog.angular-university.io/angular-viewchild/
    // for a in-depth discussion on @ViewChild
    @ViewChild('sparklineCanvas') sparklineCanvas: ElementRef;

    constructor(private barchartService: BarchartService) { }

    // see https://blog.angular-university.io/angular-viewchild/
    // for recommendation to use ngAfterViewInit instead of ngOnInit
    ngAfterViewInit() {
        // this.barchartService.draw(this.sparklineCanvas, this.lineColor);
        const barHeightsArray: number[] = JSON.parse(this.barHeights);
        console.log(`SparkBarchartComponent:ngAfterViewInit - About to draw the boxplot`);
        this.barchartService.drawNew(
            this.barGap,
            barHeightsArray,
            this.chartType,
            this.className,
            this.fillColorMinus,
            this.fillColorPlus ,
            this.fillColorZero ,
            this.height,
            this.minimumBarWidth,
            this.sparklineCanvas,
            this.width
        );
    }
}
