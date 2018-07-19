import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';

@Injectable()
export class ListPhotos {

    public listPhotos = [
        new Photo("assets/imgs/Bar.jpg", "Bar", "Philip-Lorca DiCorcia"),
        new Photo("assets/imgs/Cascade.jpg", "Cascade", "Yann-Arthus Bertrand"),
        new Photo("assets/imgs/Corail.jpg", "Corail", "Yann-Arthus Bertrand"),
        new Photo("assets/imgs/Enfant.jpg", "Enfant", "Philip-Lorca DiCorcia" ),
        new Photo("assets/imgs/Envers.jpg", "Envers", "Philip-Lorca DiCorcia"),
        new Photo("assets/imgs/Femme_afghane.jpg", "Femme afghane", "Steve Mc Cury"),
        new Photo("assets/imgs/Femme_africaine.jpg", "Femme africaine", "Steve Mc Cury"),
        new Photo("assets/imgs/Hindou.jpg", "Hindou", "Steve Mc Cury"),
        new Photo("assets/imgs/Homme_del_taco.jpg", "Homme del taco", "Philip-Lorca DiCorcia"),
        new Photo("assets/imgs/Palace.jpg", "Palace", "Philip-Lorca DiCorcia"),
        new Photo("assets/imgs/Pecheur.jpg", "Pecheur", "Yann-Arthus Bertrand"),
        new Photo("assets/imgs/Regard.jpg", "Regard", "Steve Mc Cury"),
        new Photo("assets/imgs/Tourbillon.jpg", "Tourbillon", "Yann-Arthus Bertrand"),        
        new Photo("assets/imgs/Yann-Arthus_Bertrand.jpg", "Yann-Arthus Bertrand")      
    ];

   
}
