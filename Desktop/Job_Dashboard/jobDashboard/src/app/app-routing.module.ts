import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';

import {DetailsComponent} from './modules/details/details.component';


const routes: Routes = [{
	path: '',
	component: DefaultComponent,
	children: [{
		path: '',
		component: DashboardComponent
	}, {
	path: 'details',
	component: DetailsComponent,

	}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
