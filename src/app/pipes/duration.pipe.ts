import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(min: number): string {
    return `${min / 60 > 1 ? Math.floor(min / 60) + 'h' : ''} ${min % 60} min`;
  }

}
