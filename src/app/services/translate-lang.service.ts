import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { CommonConst } from '../model/firebase/common-const';

@Injectable({
  providedIn: 'root'
})
export class TranslateLangService {

  langList = [
    {
      icon: "assets/flages/english.svg",
      name: "English",
      code: CommonConst.LANG_EN,
    },
    {
      icon: "assets/flages/urdu.svg",
      name: "Urdu",
      code: CommonConst.LANG_UR,
    }
  ]

  constructor(
    private translate: TranslateService,
    private storage: Storage,
  ) { }


  setLanguage(langCode) {
    console.log(langCode);
    this.translate.use(langCode);
    this.storage.set(CommonConst.LANGUAEG_CODE, langCode);
  }
  getLanguage() {
    this.storage.get(CommonConst.LANGUAEG_CODE).then(code => {
      if (code) {
        this.setLanguage(code)
      } else {
        this.setLanguage(this.translate.getBrowserLang())
      }
    })
  }
}
