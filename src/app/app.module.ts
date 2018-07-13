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
import { BatteryStatus } from '@ionic-native/battery-status';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page1Page,
    Page2Page,
    TabsPage,
    PhotosPhotographerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page1Page,
    Page2Page,
    TabsPage,
    PhotosPhotographerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListPhotographers,
    ListPhotos,
    BatteryStatus
  ]
})
export class AppModule {}
