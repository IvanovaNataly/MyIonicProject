import { Component } from '@angular/core';

@Component({
    selector: 'hero',
    templateUrl: 'hero.html'
})
export class HeroComponent {

    text: string;

    constructor() {
        console.log('Hello HeroComponent Component');
        this.text = 'This is a Hero Component';
    }



}
