import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyCO9aoljEYldLEODvBgILK5K_TwOd2cpH8",
  authDomain: "hwk3-a1e4d.firebaseapp.com",
  databaseURL: "https://hwk3-a1e4d.firebaseio.com",
  projectId: "hwk3-a1e4d",
  storageBucket: "hwk3-a1e4d.appspot.com",
  messagingSenderId: "628328703317"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
