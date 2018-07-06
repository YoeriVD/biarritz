import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: true //false to see result of add
})
export class SearchPipe implements PipeTransform {

  transform(values: any[], searchValue: string): any[] {
    if (!searchValue) return values;
    // filter the list based on a condition
    return values.filter(item => {
      //get all properties
      return Object.keys(item)
        //map to values of item
        .map(key => item[key])
        //ignore null values (2 times '!' = true)
        .filter(value => !!value)
        // check if value.toString() contains searchvalue
        .filter(value =>
          value.toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        )
        // check if there is at least one match
        .length > 0;
    });
  }
}
