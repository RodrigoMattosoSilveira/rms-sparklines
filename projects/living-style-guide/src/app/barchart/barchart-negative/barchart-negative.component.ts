import { Component, OnInit } from '@angular/core';
import { LivingStyleGuideService } from '../../utils/services/living-style-guide.service';

@Component({
  selector: 'app-barchart-negative',
  templateUrl: './barchart-negative.component.html',
  styleUrls: ['./barchart-negative.component.css']
})
export class BarchartNegativeComponent implements OnInit {
    app_color: string = 'red';

    barGap = 6;
    barHeights: string =  JSON.stringify([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12]);
    chartType = 'negative';
    className = '';
    fillColorMinus = 'rgb(255,0,0)';
    fillColorPlus = 'rgb(0,0,255)';
    fillColorZero = 'rgb(0,255,0)';
    height = 32;
    minimumBarWidth = 3;
    width = 128;

    constructor(private livingStyleGuideService: LivingStyleGuideService) { }

    leafLib = 'projects/library/src/lib/spark-barchart';
    leafLsg = 'projects/living-style-guide/src/app/barchart/barchart-negative';
    branchUrlLib = ``;
    branchUrlLsg = ``;


    ngOnInit() {
        this.branchUrlLib = this.livingStyleGuideService.branchURL(this.leafLib);
        this.branchUrlLsg = this.livingStyleGuideService.branchURL(this.leafLsg);
    }
}
