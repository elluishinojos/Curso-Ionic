import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  constructor(public navCtrl: NavController,
    private socialSharing: SocialSharing, public navParams: NavParams, private menuCtrl: MenuController) { }

    mostrarMenu() {
      this.menuCtrl.toggle();
    }

  compartirMensaje() {
    this.socialSharing.share("Hinojos es mi pastor y con el nada me faltará").then(() => {
    })
      .catch(() => {
      });
  }

}
