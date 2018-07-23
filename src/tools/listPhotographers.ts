import { Photographer } from '../models/photographer';
import { Injectable } from '@angular/core';

@Injectable()
export class ListPhotographers {

    listPhotographers:Photographer [] = [
        new Photographer("assets/imgs/Yann-Arthus_Bertrand.jpg", 
        "assets/imgs/tourbillon.jpg", "Yann-Arthus Bertrand", 
        "Itaque tum Scaevola cum in eam ipsam mentionem incidisset, exposuit nobis sermonem Laeli de amicitia habitum ab illo secum et cum altero genero. ",
        "https://fr-fr.facebook.com/Y.A.Bertrand/",
        "https://www.instagram.com/yannarthusbertrand/?hl=fr",
        "https://twitter.com/yann_a_b?lang=fr"
    ),
        new Photographer("assets/imgs/Steve_Mc_Cury.jpg", 
        "assets/imgs/Hindou.jpg", "Steve Mc Cury", 
        "Itaque tum Scaevola cum in eam ipsam mentionem incidisset, exposuit nobis sermonem Laeli de amicitia habitum ab illo secum et cum altero genero.",
        "https://www.facebook.com/stevemccurrystudios/",
        "https://www.instagram.com/stevemccurryofficial/?hl=fr",
        "https://twitter.com/mccurrystudios?lang=fr"

    ),
        new Photographer("assets/imgs/Philip-Lorca_DiCorcia.jpg", 
        "assets/imgs/Enfant.jpg", "Philip-Lorca DiCorcia", 
        "Itaque tum Scaevola cum in eam ipsam mentionem incidisset, exposuit nobis sermonem Laeli de amicitia habitum ab illo secum et cum altero genero. ",
        "https://fr-fr.facebook.com/pages/Philip-Lorca-Dicorcia/374361040837",
        "https://www.instagram.com/explore/tags/philiplorcadicorcia/?hl=fr ",
        "https://twitter.com/dicorcia_art?lang=fr"
    )
    ];
}

