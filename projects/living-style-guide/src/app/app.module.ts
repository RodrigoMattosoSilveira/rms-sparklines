import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryModule } from 'library';
import { BarchartComponent } from './barchart/barchart.component';
import { BoxplotComponent } from './boxplot/boxplot.component';
import { InlineComponent } from './inline/inline.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { AngularMaterialModuleModule } from './utils/angular-material-module/angular-material-module.module';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { SparkLineSimpleComponent } from './inline/spark-line-simple/spark-line-simple.component';
import { SparkLineShadeComponent } from './inline/spark-line-shade/spark-line-shade.component';
import { SparkLineDecorationComponent } from './inline/spark-line-decoration/spark-line-decoration.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    BoxplotComponent,
    InlineComponent,
    LandingPageComponent,
    SparkLineSimpleComponent,
    SparkLineShadeComponent,
    SparkLineDecorationComponent
  ],
  imports: [
    AngularMaterialModuleModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LibraryModule,
	HttpModule,
	HttpClientModule,
    MarkdownModule.forRoot({
		loader: HttpClient, // optional, only if you use [src] attribute
		markedOptions: {
			provide: MarkedOptions,
			useValue: {
				gfm: true,
				tables: true,
				breaks: false,
				pedantic: false,
				sanitize: false,
				smartLists: true,
				smartypants: false,
			},
		},
	}),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
