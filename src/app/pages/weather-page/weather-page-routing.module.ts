import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherPagePage } from './weather-page.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherPagePageRoutingModule {}
