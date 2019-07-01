import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { BulletChartService } from '../services/sparkBullet/bulletchart.service';
import { ComparativeMeasure } from '../services/sparkBullet/comparativeMeasure';
import { FeatureMeasure } from '../services/sparkBullet/featureMeasure';
import { QualitativeRange } from '../services/sparkBullet/qualitativeRange'

@Component({
   selector: 'rmstek-spark-bullet',
   templateUrl: './spark-bullet.component.html',
   styleUrls: ['./spark-bullet.component.css']
})
export class SparkBulletComponent implements AfterViewInit {

   @Input() className = '';
   @Input() comparativeMeasure = JSON.stringify({'value': 57, 'color': 'black', 'width': 3});
   @Input() featureMeasure = JSON.stringify({'value': 35, 'color': 'black'});
   @Input() height = 32;
   @Input() qualitativeRanges  = JSON.stringify([{'value': 60, 'color': '#FF7F50'}, {'value': 50, 'color': '#FF6347'}, {'value': 35, 'color': '#FF4500'}])
   @Input() width = 128;

   // see https://blog.angular-university.io/angular-viewchild/
   // for a in-depth discussion on @ViewChild
   @ViewChild('sparklBulletChart') sparklineCanvas: ElementRef;
   canvasEl:HTMLCanvasElement;
   ctx: CanvasRenderingContext2D;
   orientation: string;

   constructor(private bulletChartService: BulletChartService) { }

   ngAfterViewInit() {
      var qrs: QualitativeRange[] = this.bulletChartService.getQualityRanges(this.qualitativeRanges);
      var fm: FeatureMeasure = this.bulletChartService.getFeatureMeasure(this.featureMeasure);
      var cm: ComparativeMeasure = this.bulletChartService.getComparativeMeasure(this.comparativeMeasure);
      if (this.bulletChartService.validate(qrs, this.sparklineCanvas) != true) {
         console.log(`SparkBulletComponent:ngAfterViewInit - Invalid arguments`)
      }
      else {
         this.canvasEl = this.bulletChartService.setupCanvasEl(this.sparklineCanvas,
         this.width,
         this.height,
         this.className);
         this.ctx = this.canvasEl.getContext('2d');

         // set the setOrientation
         this.orientation = this.bulletChartService.setOrientation(this.canvasEl);

         // scale to fit the canvas
         this.bulletChartService.scaleToCanvas(this.canvasEl, qrs);
         this.bulletChartService.scaleFeatureMeasureToCanvas(this.canvasEl, fm, qrs)
         this.bulletChartService.scaleComparativeMeasureToCanvas(this.canvasEl, cm, qrs,)

         // draw bullet chart
         for (var i = 0; i < qrs.length; i++) {
            qrs[i].draw(this.ctx);
         }
         fm.draw(this.ctx);
         cm.draw(this.ctx);
         }
   }
}
