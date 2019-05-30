import { Component, OnInit } from '@angular/core';
import { LivingStyleGuideService } from '../../utils/services/living-style-guide.service';

@Component({
    selector: 'app-boxplot-simple',
    templateUrl: './boxplot-simple.component.html',
    styleUrls: ['./boxplot-simple.component.css']
})
export class BoxplotSimpleComponent implements OnInit {
    app_color: string = 'blue';

    leaf_lib: string = 'projects/library/src/lib/spark-boxplot'
    leaf_lsg: string = 'projects/living-style-guide/src/app/boxplot/boxplot-simple'
    branchURL_lib: string = "";
    branchURL_lsg: string = "";

    constructor(private livingStyleGuideService: LivingStyleGuideService) { }

    ngOnInit() {
        this.branchURL_lib = this.livingStyleGuideService.branchURL(this.leaf_lib);
        this.branchURL_lsg = this.livingStyleGuideService.branchURL(this.leaf_lsg);
    }
}
