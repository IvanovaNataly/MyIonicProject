import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-option',
  templateUrl: 'item-options.html'
})
export class ItemOptionsComponent {

    @Input()
    option: {text: string, color: string, callback: string};

    constructor() {
      console.log('ItemOptionsComponent', this.option);
    }

    printName(item) {
        console.log(item.text);
    }

}
