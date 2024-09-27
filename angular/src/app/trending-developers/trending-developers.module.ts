import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingDevelopersRoutingModule } from './trending-developers-routing.module';
import { TrendingDevelopersComponent } from './trending-developers.component';


@NgModule({
  declarations: [
    TrendingDevelopersComponent
  ],
  imports: [
    CommonModule,
    TrendingDevelopersRoutingModule
  ]
})
export class TrendingDevelopersModule { }
