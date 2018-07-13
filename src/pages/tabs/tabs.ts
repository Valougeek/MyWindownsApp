import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { Page2Page } from '../page2/page2';
import { HomePage } from '../home/home';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  rootHome: any;
  rootPage1: any;
  rootPage2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootHome = HomePage;
    this.rootPage1 = Page1Page;
    this.rootPage2 = Page2Page;  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
