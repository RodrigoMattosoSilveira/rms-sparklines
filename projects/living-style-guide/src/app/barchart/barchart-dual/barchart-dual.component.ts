import { Component, OnInit } from '@angular/core';
import { LivingStyleGuideService } from '../../utils/services/living-style-guide.service';

@Component({
  selector: 'app-barchart-dual',
  templateUrl: './barchart-dual.component.html',
  styleUrls: ['./barchart-dual.component.css']
})
export class BarchartDualComponent implements OnInit {
    app_color: string = 'red';

    constructor(private livingStyleGuideService: LivingStyleGuideService) { }

    leafLib = 'projects/library/src/lib/spark-barchart';
    leafLsg = 'projects/living-style-guide/src/app/barchart/barchart-dual';
    branchUrlLib = ``;
    branchUrlLsg = ``;


    ngOnInit() {
        this.branchUrlLib = this.livingStyleGuideService.branchURL(this.leafLib);
        this.branchUrlLsg = this.livingStyleGuideService.branchURL(this.leafLsg);
    }
}
