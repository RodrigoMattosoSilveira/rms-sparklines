import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RmstekSparklinesModule } from '@rmstek/sparklines';

import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import { BoxplotComponent } from './boxplot/boxplot.component';
import { InlineComponent } from './inline/inline.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { LivingStyleGuideService } from './utils/services/living-style-guide.service';
import { AngularMaterialModuleModule } from './utils/angular-material-module/angular-material-module.module';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { SparkLineSimpleComponent } from './inline/spark-line-simple/spark-line-simple.component';
import { SparkLineShadeComponent } from './inline/spark-line-shade/spark-line-shade.component';
import { SparkLineDecorationComponent } from './inline/spark-line-decoration/spark-line-decoration.component';
import { BoxplotSimpleComponent } from './boxplot/boxplot-simple/boxplot-simple.component';
import { BarchartPositiveComponent } from './barchart/barchart-positive/barchart-positive.component';
import { BarchartNegativeComponent } from './barchart/barchart-negative/barchart-negative.component';
import { BarchartDualComponent } from './barchart/barchart-dual/barchart-dual.component';
import { BarchartTriComponent } from './barchart/barchart-tri/barchart-tri.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    BoxplotComponent,
    BoxplotSimpleComponent,
    InlineComponent,
    LandingPageComponent,
    SparkLineSimpleComponent,
    SparkLineShadeComponent,
    SparkLineDecorationComponent,
    BarchartPositiveComponent,
    BarchartNegativeComponent,
    BarchartDualComponent,
    BarchartTriComponent,
  ],
  imports: [
    AngularMaterialModuleModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RmstekSparklinesModule,
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
  providers: [
      LivingStyleGuideService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
