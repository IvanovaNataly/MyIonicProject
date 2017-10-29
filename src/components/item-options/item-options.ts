import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-options',
  templateUrl: 'item-options.html'
})
export class ItemOptionsComponent {

    @Input()
    itemOptions: Array<{text: string, color: string, callback: string}>;

  constructor() {
    console.log('Hello ItemOptionsComponent Component');
  }

}
