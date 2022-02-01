import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesticidesPage } from './pesticides.page';

const routes: Routes = [
  {
    path: '',
    component: PesticidesPage
  },
  {
    path: 'pesticide-details',
    loadChildren: () => import('./pesticide-details/pesticide-details.module').then( m => m.PesticideDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesticidesPageRoutingModule {}
