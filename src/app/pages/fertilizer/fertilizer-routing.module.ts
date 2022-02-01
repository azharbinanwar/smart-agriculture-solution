import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FertilizerPage } from './fertilizer.page';

const routes: Routes = [
  {
    path: '',
    component: FertilizerPage
  },
  {
    path: 'fertilizer-details',
    loadChildren: () => import('./fertilizer-details/fertilizer-details.module').then( m => m.FertilizerDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FertilizerPageRoutingModule {}
