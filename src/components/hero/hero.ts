import { Component } from '@angular/core';

/**
 * Generated class for the HeroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hero',
  templateUrl: 'hero.html'
})
export class HeroComponent {

  text: string;

  constructor() {
    console.log('Hello HeroComponent Component');
    this.text = 'Hello World';
  }

}
