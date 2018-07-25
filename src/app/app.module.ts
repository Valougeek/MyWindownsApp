import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPhotographers} from '../tools/listPhotographers';
import { ListPhotos} from '../tools/listPhotos';
import { PhotosPhotographerPage } from '../pages/photos-photographer/photos-photographer';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { SearchBarPage } from '../pages/search-bar/search-bar';


@NgModule({

  // importer les pages
  declarations: [
    MyApp,
    HomePage,
    Page1Page,
    Page2Page,
    TabsPage,
    PhotosPhotographerPage,
    SearchBarPage
  ],

  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Back',
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'md'
     }),
     IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  // importer ici les Pages
  entryComponents: [
    MyApp,
    HomePage,
    Page1Page,
    Page2Page,
    TabsPage,
    PhotosPhotographerPage,
    SearchBarPage
  ],
  // importer ici les API Native
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListPhotographers,
    ListPhotos,
  ]
})
export class AppModule {}
