import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { ChatPage } from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-loby',
  templateUrl: 'loby.html',
})
export class LobyPage {
  nickname = '';

  constructor(public navCtrl: NavController, private socket: Socket, private menuCtrl: MenuController) { }

  mostrarMenu() {
    this.menuCtrl.toggle();
  }
  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.navCtrl.push(ChatPage, { nickname: this.nickname });
  }
}