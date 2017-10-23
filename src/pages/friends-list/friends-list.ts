import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FriendsDetailsPage } from '../friends-details/friends-details';
import FriendModel from '../../models/friendModel';
// import { FriendsPostsPage } from '../friends-posts/friends-posts';
// import { HelloIonicPage } from '../hello-ionic/hello-ionic';


@Component({
    selector: 'page-friends-list',
    templateUrl: 'friends-list.html',
})
export class FriendsListPage {
    items:FriendModel[];
    // tab1: any;
    // tab2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.items = [
          new FriendModel('Best friend', './assets/imgs/avatar_green.jpg', "November 5, 1955"),
          new FriendModel('Some friend', './assets/imgs/avatar_green.jpg', "May 12, 1984"),
          new FriendModel('Some friend', './assets/imgs/avatar_green.jpg', "May 12, 1984"),
          new FriendModel('Some friend', './assets/imgs/avatar_green.jpg', "May 12, 1984"),
          new FriendModel('Some friend', './assets/imgs/avatar_green.jpg', "May 12, 1984"),
          new FriendModel('Someone I don\'t really know who', './assets/imgs/avatar_green.jpg', "June 28, 1990")
          // { name: 'Best friend',
          //   avatar: './assets/imgs/avatar_green.jpg'},
          // { name: 'Some friend',
          //     avatar: './assets/imgs/avatar_green.jpg'},
          // { name: 'Someone I don\'t really know who',
          //     avatar: './assets/imgs/avatar_green.jpg'}
      ]
      // this.tab1 = FriendsPostsPage;
      // this.tab2 = HelloIonicPage;
  }

  friendTapped(event, item) {
      this.navCtrl.push(FriendsDetailsPage, {
          item: item
      });
  }
}