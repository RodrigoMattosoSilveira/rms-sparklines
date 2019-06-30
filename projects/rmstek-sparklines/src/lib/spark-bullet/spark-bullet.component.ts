import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
   selector: 'rmstek-spark-bullet',
   templateUrl: './spark-bullet.component.html',
   styleUrls: ['./spark-bullet.component.css']
})
export class SparkBulletComponent implements AfterViewInit {

   // see https://blog.angular-university.io/angular-viewchild/
   // for a in-depth discussion on @ViewChild
   @ViewChild('sparklBoxplot') sparklineCanvas: ElementRef;
   ctx: CanvasRenderingContext2D;

   constructor() { }

   ngAfterViewInit() {
   }

}
