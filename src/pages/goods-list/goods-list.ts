import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-goods-list',
    templateUrl: 'goods-list.html',
})
export class GoodsListPage {
    items: string[];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.items = ['Nice Carpet', 'Cozy Pillow', 'Lamp', 'Towel', 'Set of cups'];
    }

    handleCrossOut(item) {
        console.log(item);
    }
}
