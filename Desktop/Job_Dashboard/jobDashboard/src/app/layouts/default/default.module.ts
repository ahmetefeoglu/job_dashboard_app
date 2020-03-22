import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent} from './default.component';
import { DashboardComponent} from 'src/app/modules/dashboard/dashboard.component';
import { DetailsComponent} from 'src/app/modules/details/details.component';
import {RouterModule} from '@angular/router';
import { SharedModule} from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
  	DefaultComponent,
  	DashboardComponent,
    DetailsComponent
  	
  ],

  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }
