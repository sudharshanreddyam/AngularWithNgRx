import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ICourse } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course.service';
import { DeleteCourse, LoadCourses, LoadMore, Search } from 'src/app/store/courses/courses.actions';
import { ICoursesState } from 'src/app/store/courses/courses.reducer';
import { LoadingOff, LoadingOn } from './../../store/app/app.actions';
import { IAppState } from './../../store/app/app.reducer';


@Component( {
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: [ './courses-list.component.css' ]
} )
export class CoursesListComponent implements OnInit {

  public allCourses: ICourse[];
  public currentCountCourses: number = 0;
  public coursesNotFoundMessage: string = 'no data. feel free to add new courses';
  public isLoading: boolean;

  constructor (
    private courseService: CourseService,
    private router: Router,
    private store: Store<{ app: IAppState; courses: ICoursesState; }>
  ) {
    this.store.select( 'app' ).subscribe( app => this.isLoading = app.isLoading );
    this.store.select( 'courses' ).subscribe( ( { courses } ) => this.allCourses = courses );
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.store.dispatch( LoadingOn() );
    this.store.dispatch( LoadCourses() );
    this.store.dispatch( LoadingOff() );
  }

  search( event: Event ): void {
    this.store.dispatch( LoadingOn() );
    this.store.dispatch( Search( { search: ( <HTMLInputElement> event.target ).value } ) );
    this.store.dispatch( LoadingOff() );
  }

  delete( id: number ): void {
    this.store.dispatch( DeleteCourse( { id } ) );
  }

  loadMore(): void {
    this.store.dispatch( LoadingOn() );
    this.store.dispatch( LoadMore() );
    this.store.dispatch( LoadingOff() );
  }

  add(): void {
    this.router.navigate( [ '/add' ] );
  }
}
