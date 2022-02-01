import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FertilizerDetailsPage } from './fertilizer-details.page';

const routes: Routes = [
  {
    path: '',
    component: FertilizerDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FertilizerDetailsPageRoutingModule {}
