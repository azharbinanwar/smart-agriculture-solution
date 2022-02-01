import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInPagePage } from './sign-in-page.page';

const routes: Routes = [
  {
    path: '',
    component: SignInPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInPagePageRoutingModule {}
