import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-goods-list',
    templateUrl: 'goods-list.html',
})
export class GoodsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad GoodsListPage');
  }

}
