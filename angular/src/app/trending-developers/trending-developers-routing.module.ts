import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingDevelopersComponent } from './trending-developers.component';

const routes: Routes = [{ path: '', component: TrendingDevelopersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingDevelopersRoutingModule { }
