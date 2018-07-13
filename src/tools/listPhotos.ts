import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { dateDataSortValue } from '../../node_modules/ionic-angular/umd/util/datetime-util';
import { PhotosPhotographerPage } from '../pages/photos-photographer/photos-photographer';
import { Photographer } from '../models/photographer';



@Injectable()
export class ListPhotos {

    listPhotos:Photo [] = [
        new Photo("assets/imgs/cascade.jpg", "Yann Arthus-Bertrand"),
        new Photo("assets/imgs/enfant.jpg", "Philip-Lorca DiCorcia" ),
        new Photo("assets/imgs/envers.jpg", "Philip-Lorca DiCorcia"),
        new Photo("assets/imgs/tourbillon.jpg", "Yann Arthus-Bertrand"),        
        new Photo("assets/imgs/regard.jpg", "Steve Mc Cury"),
        new Photo("assets/imgs/portrait.jpg", "Steve Mc Cury"),
        new Photo("assets/imgs/homme.jpg", "Philip-Lorca DiCorcia"),
        new Photo("assets/imgs/yab.jpg", "Yann Arthus-Bertrand"),
        new Photo("assets/imgs/bar.jpg", "Philip-Lorca DiCorcia"),
        new Photo("assets/imgs/corail.jpg", "Yann Arthus-Bertrand"),
        new Photo("assets/imgs/ext.jpg", "Philip-Lorca DiCorcia"),
        new Photo("assets/imgs/femme_africaine.jpg", "Steve Mc Cury"),
        new Photo("assets/imgs/indou.jpg", "Steve Mc Cury"),
        new Photo("assets/imgs/mer.jpg", "Yann Arthus-Bertrand"),
        
        
    ];

   
}
