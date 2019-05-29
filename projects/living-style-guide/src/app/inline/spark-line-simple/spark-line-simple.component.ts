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

	// A number giving the height of the sparkline box in pixels. By default, uses the height of the Canvas element.
	height = 32;

	// A string giving the color of the sparkline. Any valid CSS color.
	lineColor = 'DarkGrey';

	// The sparkline data source
	linePoints = JSON.stringify([4, 3, 7, 8, 1, 4, 9, 2, 5, 3, 5, 9]);

	// A number giving the stroke of the line in pixels.
	lineWidth = 1.5;

	// A string giving the color of the dot marking the highest value. Any valid CSS color.
	shadeColor = ``;

	// A number giving the width of the sparkline box in pixels.
	width = 128;

    leaf_lib: string = 'projects/library/src/lib/spark-line'
    leaf_lsg: string = 'projects/living-style-guide/src/app/inline/spark-line-simple'
    branchURL_lib: string = "";
    branchURL_lsg: string = "";

    constructor(private livingStyleGuideService: LivingStyleGuideService) { }

    ngOnInit() {
        this.branchURL_lib = this.livingStyleGuideService.branchURL(this.leaf_lib);
        this.branchURL_lsg = this.livingStyleGuideService.branchURL(this.leaf_lsg);
    }
}
