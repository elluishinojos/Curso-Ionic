import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3: any = Pagina3Page;
  bandas: any[] = [
    {
      nombre: "Metallica",
      genero: "Thrash Metal"
    },
    {
      nombre: "Iron Maiden",
      genero: "Heavy Metal"
    },
    {
      nombre: "AC/DC",
      genero: "Hard Rock"
    },
    {
      nombre: "Héroes del Silencio",
      genero: "Rock en español"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  irPagina3(banda: any) {
    console.log(banda);
    this.navCtrl.push(Pagina3Page, { 'banda': banda });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad");
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave");
  }
  ionViewWillUnload() {
    console.log("ionViewWillUnload");
  }

  ionViewCanEnter() {
    console.log("ionViewCanEnter");
  }

  ionViewCanLeave() {
    console.log("ionViewCanLeave");
  }

}
