// Page contenant toutes les photos de tous les photographes = librairie
// Comprend un lien vers la page search-bar qui permet de cherhcer une photo par son titre

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SearchBarPage } from '../search-bar/search-bar';
import { ListPhotos } from '../../tools/listPhotos';
import { Photo } from '../../models/photo';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  public listPhotos: Array<Photo> = new Array<Photo>();

  constructor(public navCtrl: NavController, public list:ListPhotos) {
    this.listPhotos = list.listPhotos;
  }

  
  goToSearchBarPage() {
    this.navCtrl.push(SearchBarPage);
  }

}

/* Pour créer un LIEN ENTRE DEUX PAGES:
-dans le .ts
    -importer NavController et le placer dans le contructeur de la page
    -écrire une fonction de type d: 
      goToPage() {
       this.navCtrl.Page);
       }
-dnas le .html:
créer un bouton conmprenant avec (click)="goToPage()" */