import { Injectable } from '@angular/core';
import { ListPhotos } from '../tools/listPhotos';

@Injectable()
export class Photo {

    listPhotosPhotographers: Array<Photo> = new Array<Photo>();

    constructor(public urlPhoto: string = "", public photographer: string = "") {
    }
    
    photosPhotographer = function (nomPhotographer: string): void {
        for (var i = 0; i < ListPhotos.length; i++) {
            if (nomPhotographer == ListPhotos[i].photographer) {
                this.listPhotosPhotographers.push(ListPhotos[i]);
            }
            console.log(this.listPhotosPhotographers);
        }
}
}
