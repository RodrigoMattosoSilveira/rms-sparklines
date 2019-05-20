import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';
import { InlineComponent } from './inline/inline.component';
import { BarchartComponent } from './barchart/barchart.component';
import { BoxplotComponent } from './boxplot/boxplot.component';

@NgModule({
  declarations: [
    LibraryComponent,
    InlineComponent,
    BarchartComponent,
    BoxplotComponent
  ],
  imports: [
  ],
  exports: [
    LibraryComponent,
    InlineComponent
  ]
})
export class LibraryModule { }
