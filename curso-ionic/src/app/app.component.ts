import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuPage, LoginPage } from '../pages/index.paginas';
import { SessionStorageProvider } from '../providers/session-storage/session-storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _sessionCtrl: SessionStorageProvider
  ) {
    platform.ready().then(() => {
      this._sessionCtrl.cargar_storage().then(() => {
        if (this._sessionCtrl.sesion.mostrar_login) {
          this.rootPage = LoginPage;
        } else {
          this.rootPage = MenuPage;
        }
        statusBar.styleDefault();
        splashScreen.hide();
      })
    });
  }
}