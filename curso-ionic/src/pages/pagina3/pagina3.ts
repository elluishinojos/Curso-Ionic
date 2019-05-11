import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  banda: any = {};

  constructor(private navParams: NavParams,
    private navCtrl: NavController) {

    console.log(navParams);

    this.banda = this.navParams.get("banda");

  }


  irAtras() {
    this.navCtrl.pop();
  }

  irRoot() {
    this.navCtrl.popToRoot();
  }


}
