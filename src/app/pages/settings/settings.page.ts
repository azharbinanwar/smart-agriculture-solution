import { Component, OnInit } from '@angular/core';
import { TranslateLangService } from 'src/app/services/translate-lang.service';
import { ModalController } from '@ionic/angular';
import { LanguagePage } from './language/language.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  settingsList: any;
  constructor(
    private translateLang: TranslateLangService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.settingsList = [
      {
        name: "Language",
        icon: "globe-outline"
      }
    ]
  }
  settings(item: string) {
    if (item === "Language")
      this.languageModal();
  }
  async languageModal() {
    const modal = await this.modalController.create({
      component: LanguagePage,
      componentProps: {
        //  value: 123
      }
    });

    await modal.present();

  }
}
