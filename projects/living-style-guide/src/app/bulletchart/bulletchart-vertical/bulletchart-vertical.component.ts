import { Component, OnInit } from '@angular/core';
import { LivingStyleGuideService } from '../../utils/services/living-style-guide.service';

@Component({
  selector: 'app-bulletchart-vertical',
  templateUrl: './bulletchart-vertical.component.html',
  styleUrls: ['./bulletchart-vertical.component.css']
})
export class BulletchartVerticalComponent implements OnInit {
   className = '';
   comparativeMeasure = JSON.stringify({'value': 42, 'color': '#FF0000 ', 'width': 4});
   featureMeasure = JSON.stringify({'value': 55, 'color': 'black'});
   height = 128;
   qualitativeRanges = JSON.stringify([{'value': 60, 'color': '#E0E0E0'}, {'value': 50, 'color': '#A8A8A8'}, {'value': 35, 'color': '#808080'}])
   width = 32;

   constructor(private livingStyleGuideService: LivingStyleGuideService) { }

   leafLib = 'projects/library/src/lib/spark-bulletchart';
   leafLsg = 'projects/living-style-guide/src/app/barchart/bulletchart-horizontal';
   branchUrlLib = ``;
   branchUrlLsg = ``;


   ngOnInit() {
     this.branchUrlLib = this.livingStyleGuideService.branchURL(this.leafLib);
     this.branchUrlLsg = this.livingStyleGuideService.branchURL(this.leafLsg);
   }
}
