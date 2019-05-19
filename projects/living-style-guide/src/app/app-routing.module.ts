import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
	{ path: 'home',                   component: AppComponent },
	{ path: 'inline-sparklines',      component: InlineSparklinesComponent },
	{ path: 'barchart-sparklines',      component: BarchartSparklinesComponent },
	{ path: 'boxplot-sparklines',      component: BoxplotSparklinesComponent },
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
