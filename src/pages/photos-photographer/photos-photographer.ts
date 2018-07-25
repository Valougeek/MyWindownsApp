// Page qui affiche uniquement les photos du photographe cliqué en homepage

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPhotos } from '../../tools/listPhotos';
import { Photo } from '../../models/photo';
import { Photographer } from '../../models/photographer';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-photos-photographer',
  templateUrl: 'photos-photographer.html',
})

export class PhotosPhotographerPage {

  public listPhotosPhotographers: Array<Photo> = new Array<Photo>();
  public listPhotos: Array<Photo> = new Array<Photo>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public list: ListPhotos) {

    this.listPhotos = list.listPhotos;
    //console.log(this.listPhotos);
  }

  ionViewDidLoad() {
    this.photosPhotographer();
  }

  photosPhotographer() {
    // récupération du photographe cliqué en homepage
    let s: Photographer = this.navParams.get('photographer');
    //console.log(s.name);

    /* on parcours la liste de toutes les photos, 
    si elles ont pour photographe le photographe cliqué, on les stoque dans notre liste */
    for (let Photo of this.listPhotos) {
      // console.log(Photo);
      if (s.name == Photo.photographer) {
        this.listPhotosPhotographers.push(Photo);
      }
    }
    console.log(this.listPhotosPhotographers);
  }

  goToHomePage() {
    this.navCtrl.push(HomePage);
  }
  
}
