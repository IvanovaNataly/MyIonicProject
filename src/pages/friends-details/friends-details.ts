import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import FriendModel from '../../models/friendModel';

@Component({
    selector: 'page-friends-details',
    templateUrl: 'friends-details.html',
})
export class FriendsDetailsPage {
    selectedFriend: FriendModel;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.selectedFriend = this.navParams.get('item');
    }
}
