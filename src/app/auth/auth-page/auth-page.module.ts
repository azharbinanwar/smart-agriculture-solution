import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPagePageRoutingModule } from './auth-page-routing.module';

import { AuthPagePage } from './auth-page.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    AuthPagePageRoutingModule,
    TranslateModule,
  ],
  declarations: [AuthPagePage]
})
export class AuthPagePageModule {}
