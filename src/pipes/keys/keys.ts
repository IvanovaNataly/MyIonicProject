import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'keys'
})

export class KeysPipe implements PipeTransform {
    transform(value, args:string[]) : any {
        let keys = [];
        for (let key in value) {
            keys.push({key: key, value: value[key]});
        }
        console.log(keys);
        const newKeys = keys.sort( (a,b) => {
            if (a.key < b.name) {
                return 1;
            }
            if (a.key > b.name) {
                return -1;
            }

        });
        console.log("newKeys", newKeys);
        return keys;
    }


}
