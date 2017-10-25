import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPage } from './category';
import { HeroComponent } from '../../components/hero/hero';

@NgModule({
    declarations: [
        CategoryPage
    ],
    imports: [
        IonicPageModule.forChild(CategoryPage)
    ]
    // ,
    // exports: [
    //     CategoryPage
    // ]
})
export class CategoryPageModule {}
