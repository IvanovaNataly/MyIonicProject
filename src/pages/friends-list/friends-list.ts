import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FriendsDetailsPage } from '../friends-details/friends-details';
import FriendModel from '../../models/friendModel';
import ItemOptionModel from '../../models/itemOptionModel';

@IonicPage()
@Component({
    selector: 'page-friends-list',
    templateUrl: 'friends-list.html',
})
export class FriendsListPage {
    items:FriendModel[];

    itemOptions: ItemOptionModel[];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.items = [
            new FriendModel('Best friend', './assets/imgs/avatar_green.jpg', "November 5, 1955"),
            new FriendModel('Some friend', './assets/imgs/avatar_green.jpg', "May 12, 1984"),
            new FriendModel('Some friend', './assets/imgs/avatar_green.jpg', "May 12, 1984"),
            new FriendModel('Some friend', './assets/imgs/avatar_green.jpg', "May 12, 1984"),
            new FriendModel('Some friend', './assets/imgs/avatar_green.jpg', "May 12, 1984"),
            new FriendModel('Someone I don\'t really know who', './assets/imgs/avatar_green.jpg', "June 28, 1990")
        ];

        this.itemOptions= [
            new ItemOptionModel('Up', 'default', 'printName(item)'),
            new ItemOptionModel('Down', 'danger', 'printName(item)')
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
