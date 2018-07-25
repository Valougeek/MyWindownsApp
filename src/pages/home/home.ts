import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Photographer } from '../../models/photographer';
import { ListPhotographers } from '../../tools/listPhotographers';
import { PhotosPhotographerPage } from '../photos-photographer/photos-photographer';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public listPhotographers: Array<Photographer> = new Array<Photographer>();

  constructor(public navCtrl: NavController, public list: ListPhotographers, private statusBar: StatusBar) {
    this.listPhotographers = list.listPhotographers;
    // console.log(this.listPhotographers);
  }

  ionViewDidLoad() {
    // API Natuve pour avoir une barre de status en haut de l'écran
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('rgba(252, 252, 252, 0.959)');
  }

  // Quand on clique sur l'un des photographes on se rend vers la page photos-photographer
  // dont le contenu change selon le photographe, on stoque donc un item 
  //que l'on va récupérer sur la page page1 pour définir son apparence selon le photographe
  goToPhotosPhotographer(item) {
    this.navCtrl.push(PhotosPhotographerPage, {
      photographer: item
    });
  }



}