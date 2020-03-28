import { NgModule } from '@angular/core';
import { RmstekSparklinesComponent } from './rmstek-sparklines.component';
import { SparkBarchartComponent } from './spark-barchart/spark-barchart.component';
import { SparkBoxplotComponent } from './spark-boxplot/spark-boxplot.component';
import { SparkLineComponent } from './spark-line/spark-line.component';
import { SparkBulletComponent } from './spark-bullet/spark-bullet.component';

@NgModule({
  declarations: [
     RmstekSparklinesComponent,
     SparkBarchartComponent,
     SparkBoxplotComponent,
     SparkLineComponent,
     SparkBulletComponent
  ],
  imports: [
  ],
  exports: [
     RmstekSparklinesComponent,
     SparkBarchartComponent,
     SparkBoxplotComponent,
     SparkLineComponent,
     SparkBulletComponent,
  ]
})
export class RmstekSparklinesModule { }
