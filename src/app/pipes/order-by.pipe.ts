import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course';

@Pipe( {
  name: 'orderBy'
} )
export class OrderByPipe implements PipeTransform {

  transform( courses: Course[], orderBy: string ): Course[] {
    return courses.sort( ( courseA, courseB ) => {
      if ( courseA[ orderBy ] > courseB[ orderBy ] ) {
        return 1;
      }
      if ( courseA[ orderBy ] < courseB[ orderBy ] ) {
        return -1;
      }
      return 0;
    } );
  }

}
