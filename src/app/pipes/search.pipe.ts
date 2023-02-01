import { Pipe, PipeTransform } from '@angular/core';
import { Imovie } from '../models/Imovie';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: Imovie[], search: string): Imovie[] {
    return value.filter((item) => {
      return item.title
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    });
  }
}
