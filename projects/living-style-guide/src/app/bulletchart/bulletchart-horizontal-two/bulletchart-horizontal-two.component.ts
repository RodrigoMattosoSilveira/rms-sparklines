import { Component, OnInit } from '@angular/core';
import { LivingStyleGuideService } from '../../utils/services/living-style-guide.service';

@Component({
  selector: 'app-bulletchart-horizontal-two',
  templateUrl: './bulletchart-horizontal-two.component.html',
  styleUrls: ['./bulletchart-horizontal-two.component.css']
})
export class BulletchartHorizontalTwoComponent implements OnInit {
   className = '';
   comparativeMeasure = JSON.stringify({'value': 42, 'color': '#FF0000 ', 'width': 4});
   featureMeasure = JSON.stringify({'value': 55, 'color': 'black'});
   height = 32;
   qualitativeRanges = JSON.stringify([{'value': 60, 'color': '#E0E0E0'}, {'value': 50, 'color': '#A8A8A8'}, {'value': 35, 'color': '#808080'}])
   width = 128;

   constructor(private livingStyleGuideService: LivingStyleGuideService) { }

   branchUrlLib = ``;
   branchUrlLsg = ``;
   ngOnInit() {
      let branchName = 'issue-30-bullet';
      let projectName = 'living-style-guide'
      let projectType = 'app'
      let componentName = 'bulletchart/bulletchart-horizontal-two'
      this.branchUrlLsg = this.livingStyleGuideService.targetURL(branchName, projectName, projectType, componentName);

      branchName = 'issue-30-bullet';
      projectName = 'rmstek-sparklines'
      projectType = 'lib'
      componentName = 'spark-bullet'
      this.branchUrlLib = this.livingStyleGuideService.targetURL(branchName, projectName, projectType, componentName);
   }
}
