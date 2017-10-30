import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FriendsDetailsPage } from '../friends-details/friends-details';
import FriendModel from '../../models/friendModel';
// import { FriendsPostsPage } from '../friends-posts/friends-posts';
// import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@IonicPage()
@Component({
    selector: 'page-friends-list',
    templateUrl: 'friends-list.html',
})
export class FriendsListPage {
    items:FriendModel[];

    itemOptions: Array<{text: string, color: string, callback: string}>;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.items = [
            new FriendModel('Best friend', './assets/imgs/avatar_green.jpg', "November 5, 1955"),
            new FriendModel('Some friend', './assets/imgs/avatar_green.jpg', "May 12, 1984"),
            new FriendModel('Some friend', './assets/imgs/avatar_green.jpg', "May 12, 1984"),
            new FriendModel('Some friend', './assets/imgs/avatar_green.jpg', "May 12, 1984"),
            new FriendModel('Some friend', './assets/imgs/avatar_green.jpg', "May 12, 1984"),
            new FriendModel('Someone I don\'t really know who', './assets/imgs/avatar_green.jpg', "June 28, 1990")
        ]

        this.itemOptions = [
            {
                text: "Up",
                color: "default",
                callback: "printName(item)"
            },
            {
                text: "Down",
                color: "danger",
                callback: "(click)='printName(item)'"
            }
        ]
    }

    friendTapped(event, item) {
        this.navCtrl.push(FriendsDetailsPage, {
            item: item
        });
    }

    handleOverslide(item) {
        console.log(item);
    }

}
