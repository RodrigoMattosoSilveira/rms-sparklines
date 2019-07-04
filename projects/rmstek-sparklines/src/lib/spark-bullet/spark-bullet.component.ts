import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { BulletChartService } from '../services/sparkBullet/bulletchart.service';
import { ComparativeMeasure } from '../services/sparkBullet/comparativeMeasure';
import { CoordinateTip } from '../services/coordinate-tip';
import { FeatureMeasure } from '../services/sparkBullet/featureMeasure';
import { QualitativeRange } from '../services/sparkBullet/qualitativeRange'

@Component({
   selector: 'rmstek-spark-bullet',
   templateUrl: './spark-bullet.component.html',
   styleUrls: ['./spark-bullet.component.css']
})
export class SparkBulletComponent implements AfterViewInit {

   @Input() className = '';
   @Input() comparativeMeasure = JSON.stringify({'value': 57, 'color': 'black', 'lineWidth': 3});
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
   coordinateTips: CoordinateTip[];
   coordinateTipId = `rms-spark-bulletchart-tooltip`;

   constructor(private bulletChartService: BulletChartService) { }

   ngAfterViewInit() {
      var valid = true;
      var qrs: QualitativeRange[];
      var fm: FeatureMeasure;
      var cm: ComparativeMeasure;
      const thisThis = this;

      valid = this.bulletChartService.validateCanvas(this.sparklineCanvas);
      valid = valid && this.bulletChartService.validateQualitativeRanges(JSON.parse(this.qualitativeRanges));
      valid = valid && this.bulletChartService.validateFeatureMeasure(JSON.parse(this.featureMeasure));
      valid = valid && this.bulletChartService.validateComparativeMeasure(JSON.parse(this.comparativeMeasure));
      if (!valid) {
         console.log(`SparkBulletComponent:ngAfterViewInit - Invalid arguments`)
      }
      else {
         qrs = this.bulletChartService.getQualityRanges(this.qualitativeRanges);
         fm = this.bulletChartService.getFeatureMeasure(this.featureMeasure);
         cm = this.bulletChartService.getComparativeMeasure(this.comparativeMeasure);

         this.canvasEl = this.bulletChartService.setupCanvasEl(this.sparklineCanvas,
         this.width,
         this.height,
         this.className);
         this.ctx = this.canvasEl.getContext('2d');

         // Get Orientation
         this.orientation = this.bulletChartService.getOrientation(this.canvasEl);

         // scale to fit the canvas
         this.bulletChartService.scaleQualityRangesToCanvas(this.canvasEl, qrs);
         this.bulletChartService.scaleFeatureMeasureToCanvas(this.canvasEl, fm, qrs)
         this.bulletChartService.scaleComparativeMeasureToCanvas(this.canvasEl, cm, qrs,)

         // draw bullet chart
         let sortedQrs = this.bulletChartService.sortQualitativeRangeHighLow(qrs);
         for (var i = 0; i < sortedQrs.length; i++) {
            sortedQrs[i].draw(this.ctx);
         }
         fm.draw(this.ctx);
         cm.draw(this.ctx);

         sortedQrs = this.bulletChartService.sortQualitativeRangeLowHigh(qrs);
         this.coordinateTips = this.bulletChartService.buildCoordinateTips(this.canvasEl, cm, fm, sortedQrs)
         this.sparklineCanvas.nativeElement.addEventListener('mousemove', function(event: any) {
         // console.log(`RmsSparklineInlineNew::addEventListener`);

         // Note that when this function is called, this points to the target element!
         // console.log(`SparkLineComponent:ngAfterViewInit - handling mousemove`);
            thisThis.bulletChartService.handleMouseMove(event,
               thisThis.canvasEl,
               thisThis.coordinateTips,
               thisThis.coordinateTipId);
         });

         this.sparklineCanvas.nativeElement.addEventListener('mouseout', function() {
         // console.log(`RmsSparklineInlineNew::addEventListener`);
            thisThis.bulletChartService.handleMouseOut(thisThis.coordinateTipId);
         });
      }
   }
}
