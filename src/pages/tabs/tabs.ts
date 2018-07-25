// Menu en bas du téléphone

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { Page2Page } from '../page2/page2';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {

  // Création de 3 icones qui renvoient vers 3 pages différentes
  rootHome: any;
  rootPage1: any;
  rootPage2: any;

  constructor(public navCtrl: NavController) {

    // on indique vers quelle page on se rend
    this.rootHome = HomePage;
    this.rootPage1 = Page1Page;
    this.rootPage2 = Page2Page;  
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad TabsPage');
  }

}
