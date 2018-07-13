import { Injectable } from '@angular/core';

@Injectable()
export class Photographer{

    constructor( public urlPicture:string = "", public name:string = "", public description:string = "" ){

    }
}