import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SignInPagePage } from '../sign-in-page/sign-in-page.page';
import { SignUpPagePage } from '../sign-up-page/sign-up-page.page';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.page.html',
  styleUrls: ['./auth-page.page.scss'],
})
export class AuthPagePage implements OnInit {
  loginPage = SignInPagePage;
  signinPage = SignUpPagePage;

  
  constructor(
    private menuController: MenuController
  ) { }

  ngOnInit() {
    this.menuController.enable(false);
  }

}
