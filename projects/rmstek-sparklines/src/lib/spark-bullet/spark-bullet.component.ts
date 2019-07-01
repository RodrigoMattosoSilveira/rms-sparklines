import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { BulletChartService } from '../services/sparkBullet/bulletchart.service';
import { QualitativeRange } from '../services/sparkBullet/qualitativeRange'

@Component({
   selector: 'rmstek-spark-bullet',
   templateUrl: './spark-bullet.component.html',
   styleUrls: ['./spark-bullet.component.css']
})
export class SparkBulletComponent implements AfterViewInit {

   @Input() className = '';
   @Input() height = 32;
   @Input() qualitativeRanges: QualitativeRange[] = JSON.parse(`[{'value': 60, 'color': '#FF7F50'}, {'value': 50, 'color': '#FF6347'}, {'value': 35, 'color': '#FF4500 '}]`)
   @Input() width = 128;

   // see https://blog.angular-university.io/angular-viewchild/
   // for a in-depth discussion on @ViewChild
   @ViewChild('sparklBoxplot') sparklineCanvas: ElementRef;
   canvasEl:HTMLCanvasElement;
   ctx: CanvasRenderingContext2D;
   orientation: string;

   constructor(private bulletChartService: BulletChartService) { }

   ngAfterViewInit() {
      if (this.bulletChartService.validate(this.qualitativeRanges, this.sparklineCanvas) != true) {
         console.log(`SparkBulletComponent:ngAfterViewInit - Invalid arguments`)
      }
      else {
         this.canvasEl = this.bulletChartService.setupCanvasEl(this.sparklineCanvas,
         this.width,
         this.height,
         this.className);
         this.ctx = this.canvasEl.getContext('2d');
      }

      // set the setOrientation
      this.orientation = this.bulletChartService.setOrientation(this.canvasEl);

      // scale to fit the canvas
      this.bulletChartService.scaleToCanvas(this.canvasEl, this.qualitativeRanges);

      // draw bullet chart
      for (var i = 0; i < this.qualitativeRanges.length; i++) {
         this.qualitativeRanges[i].draw(this.ctx);
      }
   }
}