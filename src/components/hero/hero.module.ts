import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeroComponent } from './hero';

@NgModule({
    declarations: [HeroComponent],
    imports: [
        IonicModule
    ],
    exports: [HeroComponent]
})
export class HeroComponentModule { }
