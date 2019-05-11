import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage, TogglePage, ListPage, LobyPage, SharePage, SegmentPage, LoginPage } from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  home = HomePage;
  toggle = TogglePage;
  list = ListPage;
  loby = LobyPage;
  share = SharePage;
  segment = SegmentPage;

  rootPage: any = HomePage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController) { }

  mostrarMenu() {
    this.menuCtrl.toggle();
  }

  abrirPagina(pagina: any) {
    this.rootPage = pagina;
    this.menuCtrl.close();
  }

  cerrarSesion() {
    (<any>window).AccountKitPlugin.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}
