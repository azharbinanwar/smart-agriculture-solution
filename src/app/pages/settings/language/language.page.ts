import { Component, OnInit } from '@angular/core';
import { TranslateLangService } from 'src/app/services/translate-lang.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  constructor(
    public translateLang: TranslateLangService,
    private modalController: ModalController

  ) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss();
  }
  setLanguage(code: string){
    this.translateLang.setLanguage(code);
    this.dismiss();
  }

}
