import { Injectable } from '@angular/core';

@Injectable()
export class Photographer{

    public avatar: string;
    public urlPicture: string;
    public namePhotographer: string;
    public descriptionPhotographer: string;
    
    constructor( public av: string ="", public url:string = "", public name:string = "", public description:string = "" ){
        this.avatar = av;
        this.urlPicture = url;
        this.namePhotographer = name;
        this.descriptionPhotographer = description;
    }
}