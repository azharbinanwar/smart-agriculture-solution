import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsDetailsPageRoutingModule } from './news-details-routing.module';

import { NewsDetailsPage } from './news-details.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsDetailsPageRoutingModule,
    TranslateModule,
  ],
  declarations: [NewsDetailsPage]
})
export class NewsDetailsPageModule {}
