import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
