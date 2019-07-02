import { Component, OnInit, Input } from '@angular/core';
import { LivingStyleGuideService } from '../../utils/services/living-style-guide.service';

@Component({
    selector: 'app-barchart-tri',
    templateUrl: './barchart-tri.component.html',
    styleUrls: ['./barchart-tri.component.css']
})
export class BarchartTriComponent implements OnInit {
    app_color: string = 'red';

    barGap = 6;
    barHeights: string =  JSON.stringify([-4, 3, 0, -8, -1, 1, 3, 0, -5, 0, -5, 8]);
    chartType = 'tri';
    className = '';
    fillColorMinus = 'rgb(255,0,0)';
    fillColorPlus = 'rgb(0,0,255)';
    fillColorZero = 'rgb(0,255,0)';
    height = 32;
    minimumBarWidth = 3;
    width = 128;

    constructor(private livingStyleGuideService: LivingStyleGuideService) { }

    branchUrlLib = ``;
    branchUrlLsg = ``;

    ngOnInit() {
      let branchName = 'master';
      let projectName = 'living-style-guide'
      let projectType = 'app'
      let componentName = 'barchart/barchart-tri'
      this.branchUrlLsg = this.livingStyleGuideService.targetURL(branchName, projectName, projectType, componentName);

      branchName = 'master';
      projectName = 'rmstek-sparklines'
      projectType = 'lib'
      componentName = 'spark-barchart'
      this.branchUrlLib = this.livingStyleGuideService.targetURL(branchName, projectName, projectType, componentName);
    }
}
