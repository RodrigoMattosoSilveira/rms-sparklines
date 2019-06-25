import { NgModule } from '@angular/core';
import { SparklinesComponent } from './sparklines.component';
import { SparkBarchartComponent } from './spark-barchart/spark-barchart.component';
import { SparkBoxplotComponent } from './spark-boxplot/spark-boxplot.component';
import { SparkLineComponent } from './spark-line/spark-line.component';

@NgModule({
  declarations: [
     SparklinesComponent,
     SparkBarchartComponent,
     SparkBoxplotComponent,
     SparkLineComponent,
  ],
  imports: [
  ],
  exports: [
     SparklinesComponent,
     SparkBarchartComponent,
     SparkBoxplotComponent,
     SparkLineComponent,
  ]
})
export class SparklinesModule { }
