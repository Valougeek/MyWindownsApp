import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Photo } from '../../models/photo';
import { ListPhotos } from '../../tools/listPhotos';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  public listPhotos: Array<Photo> = new Array<Photo>();

  constructor(public navCtrl: NavController, public list:ListPhotos) {
    this.listPhotos = list.listPhotos;
    console.log(this.listPhotos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }



}
