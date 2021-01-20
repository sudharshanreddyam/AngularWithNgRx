import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../interfaces/course';

@Injectable( { providedIn: 'root' } )
export class CourseService {

  private mockCourses: Course[] = [
    new Course( '1', 'Video course 1', new Date( '10-30-2020' ), 120, 'These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page apps for enterprises. Tutorials and guides include downloadable examples to accelerate your projects.', [ 'Max' ], true ),
    new Course( '2', 'Video course 2', new Date( '12-10-2020' ), 80, 'These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page apps for enterprises. Tutorials and guides include downloadable examples to accelerate your projects.', [ 'Victory' ] ),
    new Course( '3', 'Video course 3', new Date( '11-13-2020' ), 30, 'These Angular docs help you learn and use the Angular framework and development platform, from your first application to optimizing complex single-page apps for enterprises. Tutorials and guides include downloadable examples to accelerate your projects.', [ 'Frank' ] )
  ];

  getAll(): Observable<Course[]> {
    return of( this.mockCourses );
  }

  getById( id: string ): Observable<Course> {
    return of( this.mockCourses.find( course => course.id === id ) );
  }

  add( course: Course ): Observable<Course> {
    course.id = Math.round( Math.random() * 1000 ).toString();
    this.mockCourses.push( course );
    return of( course );
  }

  update( course: Course ): Observable<Course> {
    this.mockCourses = this.mockCourses.map( mockCourse => mockCourse.id === course.id ? course : mockCourse );
    return of( course );
  }

  delete( id: string ): void {
    this.mockCourses = this.mockCourses.filter( course => course.id !== id );
  }
}
