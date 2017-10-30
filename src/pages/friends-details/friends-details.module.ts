import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsDetailsPage } from './friends-details';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
    declarations: [
        FriendsDetailsPage
    ],
    imports: [
        DirectivesModule,
        IonicPageModule.forChild(FriendsDetailsPage)
    ],
})
export class FriendsDetailsPageModule {}
