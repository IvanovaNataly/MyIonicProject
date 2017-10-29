import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsListPage } from './friends-list';
import { ItemOptionsModule } from '../../components/item-options/item-options.module';

@NgModule({
    declarations: [
        FriendsListPage
    ],
    imports: [
        ItemOptionsModule,
        IonicPageModule.forChild(FriendsListPage)
    ],
})
export class FriendsListPageModule {}
