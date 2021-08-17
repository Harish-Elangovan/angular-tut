// command to create pipe - ng g p pipename
// to generate pipe in a folder - ng g p pipeFoldername/pipeName
// Definition -Pipes are simple functions to use in template expressions to accept an input value and return a transformed value
import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'pipeExample',
})
export class PipeExamplePipe implements PipeTransform {
  transform(num: any) {
    return Math.sqrt(num);
  }
}
