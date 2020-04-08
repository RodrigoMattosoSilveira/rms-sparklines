import { NgModule } from '@angular/core';
import { SparkBarchartComponent } from './spark-barchart/spark-barchart.component';
import { SparkBoxplotComponent } from './spark-boxplot/spark-boxplot.component';
import { SparkLineComponent } from './spark-line/spark-line.component';
import { SparkBulletComponent } from './spark-bullet/spark-bullet.component';
import { SparkBarChartComponentOop } from './spark-bar-chart/spark-bar-chart.component';

@NgModule({
  declarations: [
     SparkBarchartComponent,
     SparkBoxplotComponent,
     SparkLineComponent,
     SparkBulletComponent,
     SparkBarChartComponentOop
  ],
  imports: [
  ],
  exports: [
     SparkBarchartComponent,
     SparkBoxplotComponent,
     SparkLineComponent,
     SparkBulletComponent,
     SparkBarChartComponentOop
  ]
})
export class RmstekSparklinesModule { }
