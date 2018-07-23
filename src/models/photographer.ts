import { Injectable } from '@angular/core';

@Injectable()
export class Photographer{

    public avatar: string;
    public urlPicture: string;
    public namePhotographer: string;
    public descriptionPhotographer: string;
    public urlFb: string;
    public urlInsta: string;
    public urlTwit: string;
    

    
    constructor( public av: string ="", public url:string = "", public name:string = "", public description:string = "", public fb: string ="", public insta:string = "", public twit: string = ""){
        this.avatar = av;
        this.urlPicture = url;
        this.namePhotographer = name;
        this.descriptionPhotographer = description;
        this.urlFb = fb;
        this.urlInsta = insta;
        this.urlTwit = twit;
    }
}