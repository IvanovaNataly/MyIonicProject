import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPage } from './category';
// This is the way to include component without a module of its own into one single page.
// Do not forger to delete a component from all other modules, delete or comment a module of it and to include it into declarations here:
// import { HeroComponent } from '../../components/hero/hero';
import { HeroComponentModule } from '../../components/hero/hero.module';

@NgModule({
    declarations: [
        CategoryPage
        // ,
        // HeroComponent
    ],
    imports: [
        HeroComponentModule,
        IonicPageModule.forChild(CategoryPage)
    ],
    exports: [
        CategoryPage
    ]
})
export class CategoryPageModule {}
