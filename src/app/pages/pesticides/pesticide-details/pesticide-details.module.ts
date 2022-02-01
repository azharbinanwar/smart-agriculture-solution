import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesticideDetailsPageRoutingModule } from './pesticide-details-routing.module';

import { PesticideDetailsPage } from './pesticide-details.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesticideDetailsPageRoutingModule,
    TranslateModule,
  ],
  declarations: [PesticideDetailsPage]
})
export class PesticideDetailsPageModule {}
