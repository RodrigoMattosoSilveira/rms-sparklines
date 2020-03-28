import { Component, OnInit } from '@angular/core';
import { LivingStyleGuideService } from '../../utils/services/living-style-guide.service';

@Component({
    selector: 'app-spark-line-simple',
    templateUrl: './spark-line-simple.component.html',
    styleUrls: ['./spark-line-simple.component.css']
})
export class SparkLineSimpleComponent implements OnInit {
    // Class(es) to be added to the canvas element.
	className = '';

	// Decoration points objects
	decorationPoints = JSON.stringify([]);

	// A number giving the size of the dots used to mark important values.
	dotRadius = 1.5;

	// A string giving the color of the sparkline. Any valid CSS color.
	lineColor = 'DarkGrey';

	// The sparkline data source
	linePoints = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9]);

	// A number giving the stroke of the line in pixels.
	lineWidth = 1.5;

	// A string giving the color of the dot marking the highest value. Any valid CSS color.
	shadeColor = ``;

    constructor(private livingStyleGuideService: LivingStyleGuideService) { }

    branchUrlLsg: string = "";
    branchUrlLib: string = "";
    ngOnInit() {
      let branchName = 'master';
      let projectName = 'living-style-guide'
      let projectType = 'app'
      let componentName = 'inline/spark-line-simple'
      this.branchUrlLsg = this.livingStyleGuideService.targetURL(branchName, projectName, projectType, componentName);

      branchName = 'master';
      projectName = 'rmstek-sparklines'
      projectType = 'lib'
      componentName = 'spark-line'
      this.branchUrlLib = this.livingStyleGuideService.targetURL(branchName, projectName, projectType, componentName);
    }
}
