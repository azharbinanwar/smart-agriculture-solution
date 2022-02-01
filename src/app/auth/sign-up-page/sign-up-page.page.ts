import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, Form } from '@angular/forms'
import { PasswordValidator } from 'src/app/model/password.validator';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonConst } from 'src/app/model/firebase/common-const';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.page.html',
  styleUrls: ['./sign-up-page.page.scss'],
})
export class SignUpPagePage implements OnInit {
  public signUpForm: FormGroup;
  public matchingPasswordsGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("Signup");
    this.matchingPasswordsGroup = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      cPassword: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    }); // PASSWORD MATCH FORM

    // ALL FIELD FORM VALIDATION
    this.signUpForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      matching_passwords: this.matchingPasswordsGroup,
      phoneNumber: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]{12}'),
      ])),
      address: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required
      ])),
      // userBaseLocation: new FormControl('', Validators.required),
      terms: new FormControl(true, Validators.pattern('true'))
    });
  }
  validation_messages = {
    'name': [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username must be at least 3 characters long.' },
      { type: 'pattern', message: 'User name must contain only English letters.' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'phoneNumber': [
      { type: 'required', message: 'Phone number must contain 11 digits.' },
      { type: 'pattern', message: 'Invalid phone numbber.' }
      // { type: 'minlength', message: 'Phone Number must contain 11 letter.' },
      // { type: 'maxlength', message: 'Phone Number must contain 11 letter.' },
    ],
    'cPassword': [
      { type: 'required', message: 'Confirm password is required.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number and 8 to 25 letters o' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Password mismatch.' }
    ],
    'address': [
      { type: 'required', message: 'User Base Location required is required.' },
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  };
  attemptSignUp(formData){
    this.presentLoading();
    console.log(formData.email, formData.password, formData);
    const profileImage: string = '';
    const name = formData.name;
    const email = formData.email;
    const phoneNumber = formData.phoneNumber;
    const joinedDate = new Date();
    const chats: any[] = [];
    const address = formData.address;

    
    this.fireAuth.createUserWithEmailAndPassword(formData.email, formData.matching_passwords.password)
    .then((data: any)=>{
      console.log("UID", data.user.uid);
      
      this.fireStore.doc(`${CommonConst.USERS}/${data.user.uid}`).set({
        userUID: data.user.uid,
        profileImage,
        name,
        email,
        phoneNumber,
        joinedDate,
        chats,
        address,
      })
      console.log("Data", data);
      this.dismissLoadingModel();
      this.router.navigate(["home-page"])
    })
    .catch((error)=>{
     this.dismissLoadingModel(); 
     this.presentToast(error.message);
     console.log("Data", error.message);
    })
    // console.log("Failure");
  }



  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Signing up...',
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
