import { Component, OnInit } from '@angular/core';
import { LivingStyleGuideService } from '../../utils/services/living-style-guide.service';

@Component({
    selector: 'app-boxplot-simple',
    templateUrl: './boxplot-simple.component.html',
    styleUrls: ['./boxplot-simple.component.css']
})
export class BoxplotSimpleComponent implements OnInit {
    appColor = 'blue';

    axisColor = 'black';
    axisLineWidth = 1;
    chartType = 'simple';
    className = '';
    height = '32';
    highWhiskerColor  = 'black';
    highWhiskerLineWidth = 1;
    interQuartileRangeLineColor = 'black';
    interQuartileRangeLineWidth = 1;
    interQuartileRangeFillColor = 'lightBlue';
    lowWhiskerColor = 'black';
    lowWhiskerLineWidth = 1;
    medianColor = 'red';
    medianLineWidth = 2;
    population = JSON.stringify([7,
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
    width = 128;

    leafLib = 'projects/library/src/lib/spark-boxplot';
    leafLsg = 'projects/living-style-guide/src/app/boxplot/boxplot-simple';
    branchUrlLib = ``;
    branchUrlLsg = ``;

    constructor(private livingStyleGuideService: LivingStyleGuideService) { }

    ngOnInit() {
        this.branchUrlLib = this.livingStyleGuideService.branchURL(this.leafLib);
        this.branchUrlLsg = this.livingStyleGuideService.branchURL(this.leafLsg);
    }
}
