import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./trending-repositories/trending-repositories.module')
      .then(m => m.TrendingRepositoriesModule) 
  },
  { 
    path: 'developers', 
    loadChildren: () => import('./trending-developers/trending-developers.module')
      .then(m => m.TrendingDevelopersModule) 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
