import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import FriendModel from '../../models/friendModel';

@Component({
  selector: 'page-friends-posts',
  templateUrl: 'friends-posts.html',
})
export class FriendsPostsPage {
    selectedFriend: FriendModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.selectedFriend = this.navParams.get('item');
  }

  ionViewDidLoad() {
      console.log(this.selectedFriend);
  }

}
