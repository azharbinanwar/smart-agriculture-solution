import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreatmentDetailsPage } from './treatment-details.page';

const routes: Routes = [
  {
    path: '',
    component: TreatmentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreatmentDetailsPageRoutingModule {}
