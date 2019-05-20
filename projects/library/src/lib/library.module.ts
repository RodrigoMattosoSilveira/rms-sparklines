import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';
import { InlineComponent } from './inline/inline.component';
import { BarchartComponent } from './barchart/barchart.component';
import { BoxplotComponent } from './boxplot/boxplot.component';

@NgModule({
  declarations: [
    BarchartComponent,
    BoxplotComponent,
    InlineComponent,
    LibraryComponent,
  ],
  imports: [
  ],
  exports: [
    BarchartComponent,
    BoxplotComponent,
    InlineComponent,
    LibraryComponent,
  ]
})
export class LibraryModule { }
