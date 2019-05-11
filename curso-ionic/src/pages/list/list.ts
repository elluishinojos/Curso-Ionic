import { Pokemon } from './../../interfaces/pokemon.interface';
import { POKEMONES } from './../../data/data.pokemon';
import { Component } from '@angular/core';
import { IonicPage, Refresher, reorderArray, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  pokemones: Pokemon[] = [];
  audio = new Audio();
  audioTiempo: any;
  ordenando: boolean = false;

  constructor(private menuCtrl: MenuController) {
    this.pokemones = POKEMONES.slice(0);
  }

  mostrarMenu() {
    this.menuCtrl.toggle();
  }

  reproducir(pokemon: Pokemon) {
    this.pausar_audio(pokemon);
    if (pokemon.reproduciendo) {
      pokemon.reproduciendo = false;
      return;
    }
    console.log(pokemon);
    this.audio.src = pokemon.audio;
    this.audio.load();
    this.audio.play();
    pokemon.reproduciendo = true;
    this.audioTiempo = setTimeout(() => pokemon.reproduciendo = false, pokemon.duracion * 1000);
  }

  private pausar_audio(pokemonSel: Pokemon) {
    clearTimeout(this.audioTiempo);
    this.audio.pause();
    this.audio.currentTime = 0;
    for (let pokemon of this.pokemones) {
      if (pokemon.nombre != pokemonSel.nombre) {
        pokemon.reproduciendo = false;
      }
    }
  }

  borrar_pokemon(idx: number) {
    this.pokemones.splice(idx, 1);
  }

  recargar_pokemones(refresher: Refresher) {
    console.log("Inicio del refresh");
    setTimeout(() => {
      console.log("Termino el refresh");
      this.pokemones = POKEMONES.slice(0);
      refresher.complete();
    }, 1500)
  }

  reordenar_pokemones(indices: any) {
    console.log(indices);
    this.pokemones = reorderArray(this.pokemones, indices);

  }

}
