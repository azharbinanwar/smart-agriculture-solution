import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreatmentPageRoutingModule } from './treatment-routing.module';

import { TreatmentPage } from './treatment.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreatmentPageRoutingModule,
    TranslateModule,
  ],
  declarations: [TreatmentPage]
})
export class TreatmentPageModule {}
