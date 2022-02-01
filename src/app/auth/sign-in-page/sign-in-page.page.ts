import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.page.html',
  styleUrls: ['./sign-in-page.page.scss'],
})
export class SignInPagePage implements OnInit {

  public signInForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private fireAuth: AngularFireAuth,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log("Signin");
    
    // this.fireAuth.authState.subscribe(auth=>{
    //   console.log(auth);
    //   if(auth.uid != null){
    //     console.log("Home");
    //     this.router.navigate(["home-page"])
    //         }
    // })
    this.signInForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.minLength(8),
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])),
    });
  }
  validationMessages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number and 8 to 25 letters o' }
    ],
  };
  attemptSignIn(formData){
    this.presentLoading();
    console.log(formData);
    this.fireAuth.signInWithEmailAndPassword(formData.email, formData.password )
    .then((res: any)=>{
      this.dismissLoadingModel();
      this.router.navigate(["home-page"])

    }).catch((error)=>{
      this.dismissLoadingModel();
      this.presentToast(error.message);
    });

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Signing in...',
      // duration: 2000,
      spinner: 'bubbles'
    });
    await loading.present();
  }
   async dismissLoadingModel(){
     this.loadingController.dismiss();
   }
   async presentToast(message: string) {
     const toast = await this.toastController.create({
       message: message,
       duration: 2000
     });
     toast.present();
   }
}
