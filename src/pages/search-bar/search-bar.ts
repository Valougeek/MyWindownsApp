// Page qui permet de chercher une photo par son nom depuis la librairie

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ListPhotos } from '../../tools/listPhotos';
import { Photo } from '../../models/photo';
import { ViewController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';

@IonicPage()
@Component({
  selector: 'page-search-bar',
  templateUrl: 'search-bar.html',
})

export class SearchBarPage {

  public listPhotos: Array<Photo> = new Array<Photo>();
  public items: Array<string> = new Array<string>();

  constructor(public navCtrl: NavController, public list: ListPhotos, public viewCtrl: ViewController) {
    this.listPhotos = list.listPhotos;
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Back');
  }

  // création de la liste de noms de photos de la barre de recherche
  initializeItems() {
    this.items = [];
    for (let Photo of this.listPhotos) {
      this.items.push(Photo.nomPhoto);
    }
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goToPage1() {
    this.navCtrl.push(Page1Page);
  }

}
