import { Component } from '@angular/core';

import { FriendsPostsPage } from '../friends-posts/friends-posts';


@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = 'CatalogPage';
    tab2Root: any = 'FriendsListPage';
    tab3Root: any = FriendsPostsPage;

    constructor() {

    }
}
