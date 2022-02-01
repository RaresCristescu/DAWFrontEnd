import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerCase'
})
export class LowerCasePipe implements PipeTransform {

  transform(value: string) {
    console.log(value.toString().toLowerCase());
    return value.toLowerCase();
  }

}
