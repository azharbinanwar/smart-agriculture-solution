import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {
  public name: string;
  public profileImage: string = '';
  public email: string;
  public address: string;
  public phoneNumber: string;
  public joinedDate;
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.fireAuth.authState.subscribe((auth: any)=>{
      if(auth != null)
      this.sharedService.getProfile(auth.uid).subscribe((data: any)=> {
        this.name = data.name;
        this.profileImage = data.profileImage;
        this.address = data.address;
        this.phoneNumber = data.phoneNumber;
        this.email = data.email;
        this.joinedDate = data.joinedDate.seconds*1000;
        console.log(data);
      })      
    })
  }
  signOut () {
    this.fireAuth.signOut();
    this.router.navigate(["auth-page"])
  }


}
