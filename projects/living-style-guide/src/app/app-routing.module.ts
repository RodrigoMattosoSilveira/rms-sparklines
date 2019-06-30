import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarchartComponent } from './barchart/barchart.component';
import { BoxplotComponent } from './boxplot/boxplot.component';
import { BulletChartComponent } from './bullet-chart/bullet-chart.component';
import { InlineComponent } from './inline/inline.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
	{ path: 'home',        component: LandingPageComponent },

	{ path: 'barchart',    component: BarchartComponent },
	{ path: 'boxplot',     component: BoxplotComponent },
	{ path: 'bulletchart', component: BulletChartComponent },
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
