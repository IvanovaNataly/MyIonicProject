import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsListPage } from './friends-list';
import { ItemOptionsModule } from '../../components/item-options/item-options.module';
import { DirectivesModule } from '../../directives/directives.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    declarations: [
        FriendsListPage
    ],
    imports: [
        ItemOptionsModule,
        DirectivesModule,
        PipesModule,
        IonicPageModule.forChild(FriendsListPage)
    ],
})
export class FriendsListPageModule {}
