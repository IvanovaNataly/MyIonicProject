import { Component, Input } from '@angular/core';
import ItemOptionModel from '../../models/itemOptionModel';

@Component({
  selector: 'item-option',
  templateUrl: 'item-options.html'
})
export class ItemOptionsComponent {

    @Input()
    option: ItemOptionModel;

    constructor() {
      console.log('ItemOptionsComponent');
    }

    printName(item) {
        console.log(item.text);
    }
}
