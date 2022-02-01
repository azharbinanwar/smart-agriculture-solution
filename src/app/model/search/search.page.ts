import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { CommonConst } from '../firebase/common-const';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @Input() value: any;
  searchQuery: string = '';
  experts: string;
  pesticides: string;
  treatment: string;
  epxertsData: any;
  apiWhatsApp = "https://api.whatsapp.com/send?phone=+";
  data: any = null;

  constructor(
    private modalController: ModalController,
    private callNumber: CallNumber,
    private sms: SMS,
    private sharedService: SharedService,
    private loadingController: LoadingController,
    private router: Router
    
  ) { }

  ngOnInit() {
    this.experts = CommonConst.EPXPERTS;
    this.pesticides = CommonConst.PESTICIDES;
    this.treatment = CommonConst.CROP_DISEASE;
   

  }
  search(e: Event) {
    if (this.searchQuery.length != null) {
      var searchQueryTags = this.searchQuery.toLowerCase().split(" ");
      searchQueryTags.push(this.searchQuery);
      console.log(searchQueryTags);
      
      this.sharedService.searchByQuery(searchQueryTags, this.value)
      .subscribe((data: any) => {
        console.log("Search Results", data);
        this.data = data;
      })
    
    }
  }

  dismiss() {
    this.modalController.dismiss();
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
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "searching for " + this.value,
      spinner: 'bubbles'
    });
    await loading.present();
  }


  pesticideDetail(id) {
    this.router.navigate(['/pesticide-details', id]);
  }
  treatmentDetail(id) {
    this.router.navigate(['/treatment-details', id]);
  }

}
