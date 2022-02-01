import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchPage } from 'src/app/model/search/search.page';
import { SharedService } from 'src/app/services/shared.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { CommonConst } from 'src/app/model/firebase/common-const';
import { toUnicode } from 'punycode';
import { SMS } from '@ionic-native/sms/ngx';
@Component({
  selector: 'app-experts',
  templateUrl: './experts.page.html',
  styleUrls: ['./experts.page.scss'],
})
export class ExpertsPage implements OnInit {
  epxertsData: any = null;
  apiWhatsApp = "https://api.whatsapp.com/send?phone=+";
  mailTo = "mailto:";


  constructor(
    private modalController: ModalController,
    private sharedService: SharedService,
    private callNumber: CallNumber,
    private sms: SMS,
  ) { }

  ngOnInit() {
    this.sharedService.getExperts().subscribe((data: any) => {
      this.epxertsData = data;
      console.log(this.epxertsData);
      console.log(this.epxertsData.whatsapp_no);
      
    // this.apiWhatsApp = this.apiWhatsApp.concat("+92").concat(this.epxertsData.whatsapp_no);
    console.log(this.apiWhatsApp);
    

    })
  }
  async search() {
    const modal = await this.modalController.create({
      component: SearchPage,
      componentProps: { value: CommonConst.EPXPERTS }
    });
    await modal.present();
  }
  contactToExpert(type: string, number) {
    console.log(type, number);
    if (type == CommonConst.PHONE) {
      this.callExpert(number);
    }
    if (type == CommonConst.WHATSAPP) { }
    if (type == CommonConst.CHAT) {
      this.SMSExpert(number);
    }
  }

  private callExpert(number): void {
    number = "+92".concat(number);
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
  private SMSExpert(number): void {
    number = "+92".concat(number);
    this.sms.send(number, "Hello")
      .then(res => console.log('Message', res))
      .catch(err => console.log('Something gone wrong', err));
  }

}
