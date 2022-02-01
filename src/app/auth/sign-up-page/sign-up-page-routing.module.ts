import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPagePage } from './sign-up-page.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPagePageRoutingModule {}
