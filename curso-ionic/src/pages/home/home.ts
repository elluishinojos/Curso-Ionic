import { Component } from '@angular/core';
import { NavController, MenuController, ModalController } from 'ionic-angular';
import { Pagina2Page, ModalPage } from "../index.paginas";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pagina2: any = Pagina2Page;

  constructor(public navCtrl: NavController,
    private menuCtrl: MenuController,
    private modalCtrl: ModalController) { }

  navegarPagina() {
    this.navCtrl.push(Pagina2Page);
  }

  mostrarMenu() {
    this.menuCtrl.toggle();
  }

  abrirModal(){
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
}
