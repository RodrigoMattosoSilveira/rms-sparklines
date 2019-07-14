import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { SparkBullet } from './utils/spark-bullet';

@Component({
   selector: 'rmstek-spark-bullet',
   templateUrl: './spark-bullet.component.html',
   styleUrls: ['./spark-bullet.component.css']
})
export class SparkBulletComponent implements AfterViewInit {

   @Input() comparativeMeasure = JSON.stringify({'value': 57, 'color': 'black', 'lineWidth': 3});
   @Input() featureMeasure = JSON.stringify({'value': 35, 'color': 'black'});
   @Input() height = 32;
   @Input() qualitativeRanges  = JSON.stringify([{'value': 60, 'color': '#FF7F50'}, {'value': 50, 'color': '#FF6347'}, {'value': 35, 'color': '#FF4500'}]);
   @Input() width = 128;

   // see https://blog.angular-university.io/angular-viewchild/
   // for a in-depth discussion on @ViewChild
   @ViewChild('sparklBulletChart') sparklineCanvas: ElementRef;
   canvasEl:HTMLCanvasElement;

   constructor() { }

   ngAfterViewInit() {
      var sparkBullet: SparkBullet;
      this.canvasEl = this.sparklineCanvas.nativeElement;
      sparkBullet = new SparkBullet(this.comparativeMeasure,
         this.featureMeasure,
         this.height.toString(),
         this.qualitativeRanges,
         this.width.toString())
      if (!sparkBullet.validate()){
         console.log(`SparkBulletComponent:ngAfterViewInit - Invalid arguments`)
      }
      else {
         sparkBullet.prepare();
         sparkBullet.scale(this.canvasEl);
         sparkBullet.draw(this.canvasEl);
         sparkBullet.buildToolTips(this.canvasEl);
         sparkBullet.showToolTips(this.canvasEl);
      }
   }
}
