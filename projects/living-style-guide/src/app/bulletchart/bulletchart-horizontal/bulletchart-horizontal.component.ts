import { Component, OnInit } from '@angular/core';
import { LivingStyleGuideService } from '../../utils/services/living-style-guide.service';

@Component({
  selector: 'app-bulletchart-horizontal',
  templateUrl: './bulletchart-horizontal.component.html',
  styleUrls: ['./bulletchart-horizontal.component.css']
})
export class BulletchartHorizontalComponent implements OnInit {

   className = '';
   featureMeasure = JSON.stringify({'value': 42, 'color': 'black'});
   height = 32;
   qualitativeRanges = JSON.stringify([{'value': 60, 'color': '#FF7F50'}, {'value': 50, 'color': '#FF6347'}, {'value': 35, 'color': '#FF4500'}])
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
