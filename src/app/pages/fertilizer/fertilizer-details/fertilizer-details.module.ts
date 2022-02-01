import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FertilizerDetailsPageRoutingModule } from './fertilizer-details-routing.module';

import { FertilizerDetailsPage } from './fertilizer-details.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FertilizerDetailsPageRoutingModule,
    TranslateModule,
  ],
  declarations: [FertilizerDetailsPage]
})
export class FertilizerDetailsPageModule {}
