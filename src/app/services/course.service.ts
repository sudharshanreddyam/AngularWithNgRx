import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course';

@Injectable( { providedIn: 'root' } )
export class CourseService {

  private serverUrl: string = 'http://localhost:3004';

  constructor ( private http: HttpClient ) { }

  getAll( count: number = 3, filter: string = '', orderBy: string = 'date', start: number = 0 ): Observable<Course[]> {
    return this.http.get<Course[]>( `${ this.serverUrl }/courses?start=${ start }&count=${ count }&textFragment=${ filter }&sort=${ orderBy }` );
  }

  getById( id: number ): Observable<Course> {
    return this.http.get<Course>( `${ this.serverUrl }/courses/${ id }` );
  }

  add( course: Course ): Observable<Course> {
    course.id = Math.round( Math.random() * 1000 );
    return this.http.post<Course>( `${ this.serverUrl }/courses`, course );
  }

  update( course: Course ): Observable<Course> {
    return this.http.patch<Course>( `${ this.serverUrl }/courses/${ course.id }`, course );
  }

  delete( id: number ): Observable<void> {
    return this.http.delete<void>( `${ this.serverUrl }/courses/${ id }` );
  }
}
