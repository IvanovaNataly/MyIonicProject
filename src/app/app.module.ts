import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { FriendsListPage } from '../pages/friends-list/friends-list';
import { FriendsDetailsPage } from '../pages/friends-details/friends-details';
import { FriendsPostsPage } from '../pages/friends-posts/friends-posts';
import { TabsPage } from '../pages/tabs/tabs';
// import { HomeCatalogPage } from '../pages/home-catalog/home-catalog';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        HelloIonicPage,
        ItemDetailsPage,
        ListPage,
        FriendsListPage,
        FriendsDetailsPage,
        FriendsPostsPage,
        TabsPage
        // ,
        // HomeCatalogPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HelloIonicPage,
        ItemDetailsPage,
        ListPage,
        FriendsListPage,
        FriendsDetailsPage,
        FriendsPostsPage,
        TabsPage
        // ,
        // HomeCatalogPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
