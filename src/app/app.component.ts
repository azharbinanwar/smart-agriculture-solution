import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { TranslateLangService } from './services/translate-lang.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home', 
      url: '/intro',
      icon: 'home-outline'
    },
    {
      title: 'Profile',
      url: '/profile-page',
      icon: 'person-outline'
    },
    {
      title: 'Experts',
      url: '/experts',
      icon: 'people-outline'
    },
    {
      title: 'News',
      url: 'news-page',
      icon: 'newspaper-outline'
    },
    {
      title: 'Weather',
      url: '/weather-page',
      icon: 'cloud-outline'
    },
    {
      title: 'Fertilizer',
      url: '/fertilizer',
      icon: 'rose-outline'
    },
    {
      title: 'Treatment',
      url: '/treatment',
      icon: 'clipboard-outline'
    },
    {
      title: 'Pesticides',
      url: '/pesticides',
      icon: 'flask-outline'
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'people-outline'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon:'person-add-outline'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings-outline'
    },

    {
      title: 'Sign Out',
      url: '/folder/Trash',
      icon: 'log-out-outline'
    },
    // {
    //   title: 'Spam',
    //   url: '/folder/Spam',
    //   icon: 'warning'
    // }
  ];

  email: string;
  name: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fireAuth: AngularFireAuth,
    private router: Router,
    private translateLang: TranslateLangService,
    private sharedService :SharedService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
   
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.translateLang.getLanguage();
  }

  ngOnInit() {
    this.fireAuth.authState.subscribe((auth: any)=>{
      if(auth != null)
      this.sharedService.getProfile(auth.uid).subscribe((data: any)=> {
        this.name = data.name;
        // this.profileImage = data.profileImage;
        // this.address = data.address;
        // this.phoneNumber = data.phoneNumber;
        this.email = data.email;
        // this.joinedDate = data.joinedDate.seconds*1000;
        console.log(data);
      })      
    })
    // const path = window.location.pathname.split('folder/')[1];
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }
  signOut(){
    this.fireAuth.signOut();
    this.router.navigate(['auth-page'])
  }
}
