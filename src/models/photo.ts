//équivaut à une classe java

import { Injectable } from '@angular/core';

@Injectable()
export class Photo {

    public urlPhoto: string;
    public nomPhoto: string;
    public photographer: string;

    constructor(public urlphoto: string = "", public photo: string = "", public photograph: string = "") {
    this.urlPhoto = urlphoto;
    this.nomPhoto = photo;
    this.photographer = photograph;

    }
    
}
