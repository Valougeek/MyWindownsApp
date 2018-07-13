import { Photographer } from '../models/photographer';
import { Injectable } from '@angular/core';

@Injectable()
export class ListPhotographers {

    listPhotographers:Photographer [] = [
        new Photographer("assets/imgs/portrait.jpg", "Steve Mc Cury", "Steve McCurry is an American photographer, freelancer and photojournalist. His most famous photo is of the Afghan Girl, the girl with the piercing green eyes that periodically appears on the cover of National Geographic."),
        new Photographer("assets/imgs/homme.jpg", "Philip-Lorca DiCorcia", "Philip-Lorca diCorcia est un photographe américain, né en 1951 à Hartford dans le Connecticut. Il vit et travaille à New York. Ses photographies associent des éléments du style artistique documentaire avec un principe de construction maîtrisée et complexe propre à l'image de fiction."),
        new Photographer("assets/imgs/yab.jpg", "Yann Arthus-Bertrand", "Yann Arthus-Bertrand est un photographe, reporter, réalisateur et écologiste français, né le 13 mars 1946 à Paris. Il préside la fondation GoodPlanet1. Son livre La Terre vue du ciel, paru pour la première fois en 1999 et dont a été tiré un documentaire du même nom en 2004, est un best-seller mondial.")
    ];
}

