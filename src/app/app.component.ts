import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage = HelloIonicPage;
    // pages: Array<{title: string, component: any}>;
    pages: {};
    objectKeys = Object.keys;

    constructor(
        public platform: Platform,
        public menu: MenuController,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen
        ) {
            this.initializeApp();

        // set our app's pages
            this.pages = {
                Tabs: [
                    { title: 'Home', component: TabsPage}
                ],

                Catalog: [
                    { title: 'Carpets & Rugs', component: HelloIonicPage },
                    { title: 'Decorative Accessories', component: ListPage },
                    { title: 'Lighting', component: 'FriendsListPage'},
                    { title: 'Pillows', component: HelloIonicPage }
                ],

                Social: [
                    { title: 'Friends List', component: 'FriendsListPage'},
                ]
            };

    }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    console.log(page);
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
