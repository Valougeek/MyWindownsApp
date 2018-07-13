import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Photo} from '../../models/photo';

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

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    // let p= new Photo ("Steve" , "assests/imgs/bar.jpg");
    // console.log(p);
  }

  ionViewDidLoad() {
    let s:string = this.navParams.get('photographer');
    console.log(s);

    let p:Photo;
    console.log(p);
    
    //photosPhotographer(s);
  
  }
}
