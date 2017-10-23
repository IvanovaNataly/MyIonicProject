import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import FriendModel from '../../models/friendModel';
import { FriendsPostsPage } from '../friends-posts/friends-posts';

@Component({
    selector: 'page-friends-details',
    templateUrl: 'friends-details.html',
})
export class FriendsDetailsPage {
    selectedFriend: FriendModel;
    tab1: any;
    // tab2: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.selectedFriend = this.navParams.get('item');
        this.tab1 = FriendsPostsPage;
        // this.tab2 = Tab2;
    }

    // ionViewDidLoad() {
    // console.log(this.selectedFriend);
    // }

}
