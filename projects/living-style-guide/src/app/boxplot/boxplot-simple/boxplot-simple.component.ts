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

    branchUrlLib = ``;
    branchUrlLsg = ``;

    constructor(private livingStyleGuideService: LivingStyleGuideService) { }

    ngOnInit() {
      let branchName = 'master';
      let projectName = 'living-style-guide'
      let projectType = 'app'
      let componentName = 'boxplot/boxplot-simple'
      this.branchUrlLsg = this.livingStyleGuideService.targetURL(branchName, projectName, projectType, componentName);

      branchName = 'master';
      projectName = 'rmstek-sparklines'
      projectType = 'lib'
      componentName = 'spark-boxplot'
      this.branchUrlLib = this.livingStyleGuideService.targetURL(branchName, projectName, projectType, componentName);
    }
}
