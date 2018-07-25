import { Component } from '@angular/core';
import { IonicPage, NavController,  } from 'ionic-angular';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  stat;
// Page pour avoir recours à une API Native pour prnedre des photos

  constructor(public navCtrl: NavController) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

}
