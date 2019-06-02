import { Component, OnInit } from '@angular/core';
import { LivingStyleGuideService } from '../../utils/services/living-style-guide.service';

@Component({
    selector: 'app-barchart-positive',
    templateUrl: './barchart-positive.component.html',
    styleUrls: ['./barchart-positive.component.css']
})
export class BarchartPositiveComponent implements OnInit {
    app_color: string = 'red';

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
