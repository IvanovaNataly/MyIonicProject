import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodsListPage } from './goods-list';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
    declarations: [
        GoodsListPage
    ],
    imports: [
        DirectivesModule,
        IonicPageModule.forChild(GoodsListPage)
    ],
})
export class GoodsListPageModule {}
