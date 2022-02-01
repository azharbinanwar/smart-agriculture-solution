import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertsPageRoutingModule } from './experts-routing.module';

import { ExpertsPage } from './experts.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertsPageRoutingModule,
    TranslateModule,
  ],
  declarations: [ExpertsPage]
})
export class ExpertsPageModule {}
