import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { identifierModuleUrl } from '@angular/compiler';
import { MenuController, ModalController } from '@ionic/angular';
import { strict } from 'assert';
import { CommentsPage } from '../news/comments/comments.page';
import { CommonConst } from 'src/app/model/firebase/common-const';
import { SMS } from '@ionic-native/sms/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  apiWhatsApp = "https://api.whatsapp.com/send?phone=+";
  public weatherData: any;
  public temp: string = "00";
  public city: string = "N/A";
  public weatherCondition: string = "N/A";
  public windSpeed: string = "00";
  public humidity: string = "00";
  public timezone: string = "00";
  public visibility: string = "00";
  public clouds: string = "00";


  public data: any = null;
  public title: any;
  public currentTitle: any;
  // public newHeading: string = "How Are you I hope you'll be file How Are you I hope you'll be file";
  // public desNews: string = "How Are you I hope you'll be file How Are you I hope you'll be fileHow Are you I hope you'll be file How Are you I hope you'll be fileHow Are you I hope you'll be file How Are you I hope you'll be fileHow Are you I hope you'll be file How Are you I hope you'll be fileHow Are you I hope you'll be file How Are you I hope you'll be fileHow Are you I hope you'll be file How Are you I hope you'll be file"
  public epxertsData: any;
  mailTo = "mailto:";
  constructor(
    private sharedService: SharedService,
    private menuController: MenuController,
    private modalController: ModalController,
    private callNumber: CallNumber,
    private sms: SMS,
    private router: Router,
  ) { }

  ngOnInit() {
    this.menuController.enable(true);
    this.sharedService.getWeather().subscribe(
      (data: any) => {
        console.log("weather", data);
        var temp = data.main.temp;
        this.temp = temp.toString().slice(0, 2);
        this.city = data.name;
        this.weatherCondition = data.weather[0].main;
        console.log(this.temp);

        this.windSpeed = data.wind.speed;
        this.humidity = data.main.humidity;
        this.timezone = data.timezone;
        this.visibility = data.visibility;
        this.clouds = data.clouds.all;



        this.sharedService.getSingleNews("q6WBeQW5MDcg4NyPxuqc").subscribe
          ((newsData: any) => {
            this.data = newsData;
            console.log("new Data", this.data);
          });
      }
    );
    this.sharedService.getExperts().subscribe((data: any) => {
      this.epxertsData = data;
      console.log(this.epxertsData);
      console.log(this.epxertsData.whatsapp_no);

      // this.apiWhatsApp = this.apiWhatsApp.concat("+92").concat(this.epxertsData.whatsapp_no);
      console.log(this.apiWhatsApp);


    })


  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CommentsPage,
      componentProps: { newId: 123 }
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


  sliceTitle(title: string, id) {
    console.log(title, id);

    return title.slice(0, 45)
  }
  sliceDes(des: string) {
    return des.slice(0, 100);
  }
  onGoToNewsSinglePage(newsID: string) {
    console.log(newsID);
    newsID = "q6WBeQW5MDcg4NyPxuqc";
    this.router.navigate(['/news-details', newsID]);
  }

}
