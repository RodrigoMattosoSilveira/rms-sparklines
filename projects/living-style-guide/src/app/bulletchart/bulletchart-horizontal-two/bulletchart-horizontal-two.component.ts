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
   qualitativeRanges = JSON.stringify([{'value': 60, 'color': '#F0F0F0'}, {'value': 50, 'color': '#A8A8A8'}, {'value': 35, 'color': '#808080'}])
   width = 128;

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
