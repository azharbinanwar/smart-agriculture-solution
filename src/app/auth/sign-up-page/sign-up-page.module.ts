import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPagePageRoutingModule } from './sign-up-page-routing.module';

import { SignUpPagePage } from './sign-up-page.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPagePageRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [SignUpPagePage]
})
export class SignUpPagePageModule {}
