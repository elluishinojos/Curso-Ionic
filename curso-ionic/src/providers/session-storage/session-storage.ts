import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SessionStorageProvider {

  sesion = {
    mostrar_login: true
  }

  constructor(private storage: Storage) {
    console.log('Hello SessionStorageProvider Provider');
  }

  cargar_storage() {
    let promesa = new Promise((resolve, reject) => {
      this.storage.ready().then(() => {
        this.storage.get("sesion").then(sesion => {
          if (sesion) {
            this.sesion = sesion;
          }
          resolve();
        });
      })
    });
    return promesa;
  }

  guardar_storage() {
    this.storage.ready().then(() => {
      this.storage.set("sesion", this.sesion);
    })
  }

}
