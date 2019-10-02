import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
  ) {
    this.initializeApp();
    platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#1d80bb');
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (!navigator.onLine) {
        this.router.navigateByUrl('/nonconnection');
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
}
