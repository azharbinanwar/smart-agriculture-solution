import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, Config } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { ReactiveFormsModule } from '@angular/forms';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { firebaseConfig } from './model/firebase/credentials';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicStorageModule } from '@ionic/storage';

export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
// const Configfirebase: {
//   apiKey: "AIzaSyDGq_zWPguuNmpOJulpBKWGlIqHNxO4lWo",
//   authDomain: "smart-agriculture-soluti-8da50.firebaseapp.com",
//   databaseURL: "https://smart-agriculture-soluti-8da50.firebaseio.com",
//   projectId: "smart-agriculture-soluti-8da50",
//   storageBucket: "smart-agriculture-soluti-8da50.appspot.com",
//   messagingSenderId: "965665224723",
//   appId: "1:965665224723:web:cbcff1bd11c389f5e0e7e6",
//   measurementId: "G-9BTZWV6ZWK"
// };
@NgModule({

  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    // 3. Initialize
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    SMS,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
