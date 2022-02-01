import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsPagePage } from './news-page.page';

const routes: Routes = [
  {
    path: '',
    component: NewsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPagePageRoutingModule {}
