import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BatteryStatus } from '@ionic-native/battery-status';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private batteryStatus: BatteryStatus) {
  this.getSatus();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

 getSatus() {
   this.batteryStatus.onChange().subscribe( status => {
     this.stat = status;

   })
 }

}
