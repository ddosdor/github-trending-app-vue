import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingRepositoriesComponent } from './trending-repositories.component';

const routes: Routes = [{ path: '', component: TrendingRepositoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingRepositoriesRoutingModule { }
