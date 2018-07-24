import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPhotos } from '../../tools/listPhotos';
import { Photo } from '../../models/photo';
import { Photographer } from '../../models/photographer';
import { HomePage } from '../home/home';

/**
 * Generated class for the PhotosPhotographerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    let s: Photographer = this.navParams.get('photographer');
    //console.log(s.name);

    for (let Photo of this.listPhotos) {
      // console.log(Photo);
      if (s.name == Photo.photographer) {
        this.listPhotosPhotographers.push(Photo);
      }
    }
    console.log(this.listPhotosPhotographers);
  }

  popView() {
    this.navCtrl.pop();
  }

  goToHomePage() {
    this.navCtrl.push(HomePage);
  }
}
