import { Pipe, PipeTransform } from '@angular/core';
import { IAuthor } from './../interfaces/course';

@Pipe( {
  name: 'filter'
} )
export class FilterPipe implements PipeTransform {

  transform( authors: IAuthor[], part: string ): IAuthor[] {
    if ( part ) {
      return authors.filter( author => author.name.includes( part ) );
    }
    return authors;
  }

}
