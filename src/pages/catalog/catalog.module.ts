import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatalogPage } from './catalog';
import { HeroComponentModule } from '../../components/hero/hero.module';

@NgModule({
    declarations: [
        CatalogPage
    ],
    imports: [
        HeroComponentModule,
        IonicPageModule.forChild(CatalogPage)
    ],
})
export class CatalogPageModule {}
