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
        console.log(`SparkBoxplotComponent:ngAfterViewInit - About to draw the boxplot`);
        this.boxplotService.drawNew(
            this.axisColor,
            this.axisLineWidth,
            this.chartType,
            this.className,
            this.height,
            this.highWhiskerColor,
            this.highWhiskerLineWidth,
            this.interQuartileRangeLineColor,
            this.interQuartileRangeFillColor,
            this.interQuartileRangeLineWidth,
            this.lowWhiskerColor,
            this.lowWhiskerLineWidth,
            this.medianColor,
            this.medianLineWidth,
            populationArray,
            this.sparklineCanvas,
            this.width);
    }
}
