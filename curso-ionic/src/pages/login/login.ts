import { MenuPage } from './../index.paginas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionStorageProvider } from '../../providers/session-storage/session-storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _sessionCtrl: SessionStorageProvider
  ) {
  }

  login() {
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
      defaultCountryCode: "MX",
      facebookNotificationsEnabled: true
    }, () => {
      (<any>window).AccountKitPlugin.getAccount((res) => {
        this.omitirLogIn();
        this.navCtrl.setRoot(MenuPage);
      });
    }, (err) => {
      alert(err);
    })
  }

  omitirLogIn() {
    this._sessionCtrl.sesion.mostrar_login = false;
    this._sessionCtrl.guardar_storage();
  }

}
