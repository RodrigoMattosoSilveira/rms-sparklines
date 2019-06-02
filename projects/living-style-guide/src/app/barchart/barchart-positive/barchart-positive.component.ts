import { Component, OnInit } from '@angular/core';
import { LivingStyleGuideService } from '../../utils/services/living-style-guide.service';

@Component({
    selector: 'app-barchart-positive',
    templateUrl: './barchart-positive.component.html',
    styleUrls: ['./barchart-positive.component.css']
})
export class BarchartPositiveComponent implements OnInit {
    app_color: string = 'red';

    barGap = 6;
    barHeights: string =  JSON.stringify([4, 3, 7, 8, 1, 4, 3, 2, 5, 3, 5, 8]);
    chartType = 'positive';
    className = '';
    fillColorMinus = 'rgb(255,0,0)';
    fillColorPlus = 'rgb(0,0,255)';
    fillColorZero = 'rgb(0,255,0)';
    height = 32;
    minimumBarWidth = 3;
    width = 128;

    constructor(private livingStyleGuideService: LivingStyleGuideService) { }

    leafLib = 'projects/library/src/lib/spark-barchart';
    leafLsg = 'projects/living-style-guide/src/app/barchart/barchart-positive';
    branchUrlLib = ``;
    branchUrlLsg = ``;


    ngOnInit() {
        this.branchUrlLib = this.livingStyleGuideService.branchURL(this.leafLib);
        this.branchUrlLsg = this.livingStyleGuideService.branchURL(this.leafLsg);
    }
}
