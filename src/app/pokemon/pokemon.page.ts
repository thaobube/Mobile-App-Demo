import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PokeResult } from '../_models/poke-results';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  result: PokeResult;


  constructor(
    private http: HttpClient,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.load('https://pokeapi.co/api/v2/pokemon');
  }

  next() {
    this.load(this.result.next);
  }
  previous() {
    this.load(this.result.previous);
  }

  async openDetails(url: string) {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: {
        url: url
      }
    });
    modal.present();
  }

  private load(url: string) {
    this.http.get<PokeResult>(url)
    .subscribe(data => {
      this.result = data;
    })
  }

}
