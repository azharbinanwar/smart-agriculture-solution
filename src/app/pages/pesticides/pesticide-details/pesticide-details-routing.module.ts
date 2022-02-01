import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesticideDetailsPage } from './pesticide-details.page';

const routes: Routes = [
  {
    path: '',
    component: PesticideDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesticideDetailsPageRoutingModule {}
