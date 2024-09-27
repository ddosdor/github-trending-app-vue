import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingRepositoriesRoutingModule } from './trending-repositories-routing.module';
import { TrendingRepositoriesComponent } from './trending-repositories.component';


@NgModule({
  declarations: [
    TrendingRepositoriesComponent
  ],
  imports: [
    CommonModule,
    TrendingRepositoriesRoutingModule
  ]
})
export class TrendingRepositoriesModule { }
