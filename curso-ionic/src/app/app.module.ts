import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Providers
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicStorageModule } from '@ionic/storage'

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
//const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };
const config: SocketIoConfig = { url: 'http://10.2.60.28:3001', options: {} };

import { MyApp } from './app.component';
import {
  ChatPage,
  HomePage,
  ListPage,
  LobyPage,
  MenuPage,
  ModalPage,
  Pagina2Page,
  Pagina3Page,
  SegmentPage,
  SharePage,
  TogglePage,
  LoginPage
} from '../pages/index.paginas';
import { SessionStorageProvider } from '../providers/session-storage/session-storage';

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    HomePage,
    ListPage,
    LobyPage,
    MenuPage,
    ModalPage,
    Pagina2Page,
    Pagina3Page,
    SegmentPage,
    SharePage,
    TogglePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    HomePage,
    ListPage,
    LobyPage,
    MenuPage,
    ModalPage,
    Pagina2Page,
    Pagina3Page,
    SegmentPage,
    SharePage,
    TogglePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SessionStorageProvider
  ]
})
export class AppModule { }
