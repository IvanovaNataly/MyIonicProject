import { Component } from '@angular/core';

import { FriendsPostsPage } from '../friends-posts/friends-posts';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { FriendsListPage } from '../friends-list/friends-list';


@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root: any = FriendsPostsPage;
    tab2Root: any = HelloIonicPage;
    tab3Root: any = FriendsListPage;

    constructor() {

    }
}
