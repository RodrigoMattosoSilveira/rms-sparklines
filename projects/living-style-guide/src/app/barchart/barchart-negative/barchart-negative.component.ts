import { Component, OnInit } from '@angular/core';
import { LivingStyleGuideService } from '../../utils/services/living-style-guide.service';

@Component({
  selector: 'app-barchart-negative',
  templateUrl: './barchart-negative.component.html',
  styleUrls: ['./barchart-negative.component.css']
})
export class BarchartNegativeComponent implements OnInit {
        app_color: string = 'red';

constructor(private livingStyleGuideService: LivingStyleGuideService) { }

leafLib = 'projects/library/src/lib/spark-barchart';
leafLsg = 'projects/living-style-guide/src/app/boxplot/barchart-negative';
    branchUrlLib = ``;
    branchUrlLsg = ``;


    ngOnInit() {
        this.branchUrlLib = this.livingStyleGuideService.branchURL(this.leafLib);
        this.branchUrlLsg = this.livingStyleGuideService.branchURL(this.leafLsg);
    }
}
