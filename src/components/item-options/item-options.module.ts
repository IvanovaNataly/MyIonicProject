import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ItemOptionsComponent } from '../item-options/item-options';

@NgModule({
    declarations: [ItemOptionsComponent],
    imports: [
        IonicModule
    ],
    exports: [ItemOptionsComponent]
})
export class ItemOptionsModule { }
