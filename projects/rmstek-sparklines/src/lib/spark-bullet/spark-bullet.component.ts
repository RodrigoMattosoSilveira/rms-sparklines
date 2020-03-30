import { AfterViewInit, OnDestroy, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { SparkBullet } from './utils/spark-bullet';

@Component({
   selector: 'rmstek-spark-bullet',
   templateUrl: './spark-bullet.component.html',
   styleUrls: ['./spark-bullet.component.css']
})
export class SparkBulletComponent implements AfterViewInit, OnDestroy {
    sparkBullet: SparkBullet;

   @Input() comparativeMeasure = JSON.stringify({value: 57, color: 'black', lineWidth: 3});
   @Input() featureMeasure = JSON.stringify({value: 35, color: 'black'});
   @Input() height = 32;
   @Input() qualitativeRanges  = JSON.stringify([{value: 60, color: '#FF7F50'}, {value: 50, color: '#FF6347'}, {value: 35, color: '#FF4500'}]);
   @Input() width = 128;

   // see https://blog.angular-university.io/angular-viewchild/
   // for a in-depth discussion on @ViewChild
   @ViewChild('sparklBulletChart') sparklineCanvas: ElementRef;
   canvasEl: HTMLCanvasElement;

   constructor() { }

   ngAfterViewInit() {
      this.canvasEl = this.sparklineCanvas.nativeElement;
      this.canvasEl.height = this.height;
      this.canvasEl.width = this.width;
      this.sparkBullet = new SparkBullet(this.comparativeMeasure,
         this.featureMeasure,
         this.height.toString(),
         this.qualitativeRanges,
         this.width.toString());
      if (!this.sparkBullet.validate()) {
         console.log(`SparkBulletComponent:ngAfterViewInit - Invalid arguments`);
      } else {
         this.sparkBullet.prepare();
         this.sparkBullet.scale(this.canvasEl);
         this.sparkBullet.draw(this.canvasEl);
         this.sparkBullet.buildToolTips(this.canvasEl);
         this.sparkBullet.showToolTips(this.canvasEl);
      }
   }
   ngOnDestroy() {
       this.sparkBullet.removeToolTips(this.sparklineCanvas.nativeElement);
   }
}
