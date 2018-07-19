import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Photo } from '../../models/photo';
import { ListPhotos } from '../../tools/listPhotos';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  public listPhotos: Array<Photo> = new Array<Photo>();
  publicsearchQuery: string = '';
  public items: Array<string> = new Array<string>();

  constructor(public navCtrl: NavController, public list:ListPhotos) {
    this.listPhotos = list.listPhotos;
    console.log(this.listPhotos);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad Page1Page');
    this.initializeItems();
  }

  popView() {
    this.navCtrl.pop();
  }

  initializeItems() {
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


}
