import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Photographer } from '../../models/photographer';
import { ListPhotographers } from '../../tools/listPhotographers';
import { PhotosPhotographerPage } from '../photos-photographer/photos-photographer';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listPhotographers: Array<Photographer> = new Array<Photographer>();

  constructor(public navCtrl: NavController, public list: ListPhotographers) {
    this.listPhotographers = list.listPhotographers;
    console.log(this.listPhotographers);
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad HomePage');
  // }

  // Quand on clique sur l'un des photographes pour avoir accès à sa page
  // on stoque un item que l'on va récupérer plus tard sur la page page1 qui changera
  // d'apparence/contenu selon le photographe sélectionné.
  goToPhotosPhotographer(item) {
    this.navCtrl.push(PhotosPhotographerPage, {
      photographer: item
    });
  }

 

  
}