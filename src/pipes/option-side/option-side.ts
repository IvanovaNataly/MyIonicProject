import { Pipe, PipeTransform } from '@angular/core';
import ItemOptionModel from '../../models/itemOptionModel';

@Pipe({
    name: 'optionSide',
})
export class OptionSidePipe implements PipeTransform {

    transform(itemOptions: ItemOptionModel[], value: string) {
        return itemOptions.filter( option => {
            return option.slideSide === value;
        })
    }
}
