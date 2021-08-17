import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrReverce',
})
export class ArrRevercePipe implements PipeTransform {
  transform(a: string[]): string[] {
    return a.reverse();
  }
}
