import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  introList: any;
  constructor(
    private menuController: MenuController,
    private fireAuth: AngularFireAuth,
    private router: Router,
  ) { }


  ngOnInit() {
    this.menuController.enable(false);
    this.introList = [
      {
        image: 'assets/intro/weather_icon.png',
        heading: 'Weather and Forcasting',
        sub_heading: 'Review Weather and  daily and  hourly forcasting'
      },
      {
        image: 'assets/intro/fertilizer_icon.png',
        heading: 'Review Fertilizer',
        sub_heading: 'Review fertilizer search experts and ask questions or suggest to others'
      },
      {
        image: 'assets/intro/chat_icon.png',
        heading: 'Contact to Experts',
        sub_heading: 'Search experts and call, message & contact through whatsapp and mail'
      },
      {
        image: 'assets/intro/news_icon.png',
        heading: 'Get News',
        sub_heading: 'Receive news about agriculture and weather'
      },
    ];
    console.log(this.introList);

  }
  goToNext() {
    this.fireAuth.authState.subscribe(auth => {
      console.log(auth);
      if (auth != null) {
        console.log("Home");
        this.router.navigate(["home-page"])
      }
      if (auth == null) {
        console.log("auth-page");
        this.router.navigate(["auth-page"])
      }
    })
  }

}
