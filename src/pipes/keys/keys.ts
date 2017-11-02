import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'keys'
})

export class KeysPipe implements PipeTransform {
    transform(value, args:string[]) : any {
        let keys = [];
        for (let key in value) {
            if (key !== "status")
            {
                if (key !== "snoozed_until")
                    keys.push({key: key, value: value[key]});
            }
        }

        let newKeys = this.sortKeys(keys);
        console.log(newKeys);
        return newKeys;
    }

    sortKeys(keys) {
        return keys.sort( (a,b) => {
            if (a.key < b.key) {
                return 1;
            }
            if (a.key > b.key) {
                return -1;
            }
            return 0;
        });
    }

}
