import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './../course';

@Pipe( {
  name: 'filter'
} )
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], part: string): Course[] {
    return courses.filter(course => course.title.includes(part) );
  }

}
