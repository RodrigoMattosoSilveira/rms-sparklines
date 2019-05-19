import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';
import { InlineComponent } from './inline/inline.component';

@NgModule({
  declarations: [
    LibraryComponent,
    InlineComponent
  ],
  imports: [
  ],
  exports: [LibraryComponent]
})
export class LibraryModule { }
