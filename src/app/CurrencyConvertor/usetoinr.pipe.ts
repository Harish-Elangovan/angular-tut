import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usetoinr',
})
export class UsetoinrPipe implements PipeTransform {
  transform(cur: any, b: number) {
    return cur * b;
  }
}
