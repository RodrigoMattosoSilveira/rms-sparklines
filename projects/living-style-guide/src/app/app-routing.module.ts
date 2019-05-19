import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarchartComponent } from './barchart/barchart.component';
import { BoxplotComponent } from './boxplot/boxplot.component';
import { InlineComponent } from './inline/linline.component';
import { LandingPage } from './landing-page/landing-page.component';

const appRoutes: Routes = [
	{ path: 'home',        component: LandingPage },

	{ path: 'barcharts',   component: BarchartComponent },
	{ path: 'boxplot',     component: BoxplotComponent },
  { path: 'inline',      component: InlineComponent },

	{ path: '',   redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: 'home', pathMatch: 'full'  }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: false } // <-- debugging purposes only
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
