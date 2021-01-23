import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { concatMap, delay, map } from 'rxjs/operators';
import { CourseService } from './../../services/course.service';
import * as coursesActions from './courses.actions';
import { AddCourseSuccess, DeleteCourseSuccess, LoadCourses, SaveCourses, SaveCoursesSuccess, SearchSuccess, UpdateCourseSuccess, UploadCountCourses } from './courses.actions';
import { ICoursesState } from './courses.reducer';

@Injectable()
export class CoursesEffect {

  private countCourses: number;

  constructor (
    private actions$: Actions,
    private courseService: CourseService,
    private store: Store<{ courses: ICoursesState; }>
  ) {
    this.store.select( 'courses' ).subscribe( courses => this.countCourses = courses.currentCountCourses );
  }

  @Effect()
  loadingCourses$ = this.actions$.pipe(
    ofType( coursesActions.LoadCourses ),
    map( () => of( this.courseService.getAll()
      .subscribe( courses => this.store.dispatch( SaveCourses( { courses } ) ) ) )
    ),
    concatMap( () => of( SaveCoursesSuccess() ) )
  );

  @Effect()
  search$ = this.actions$.pipe(
    ofType( coursesActions.Search ),
    map( action => {
      if ( action.search.length > 3 ) {
        delay( 1000 );
        of( this.courseService.getAll( 3, action.search ).subscribe( courses => this.store.dispatch( SaveCourses( { courses } ) ) ) );
      } else {
        of( this.store.dispatch( LoadCourses() ) );
      }
    } ),
    concatMap( () => of( SearchSuccess() ) )
  );

  @Effect()
  deleteCourse$ = this.actions$.pipe(
    ofType( coursesActions.DeleteCourse ),
    map( action => of( this.courseService.delete( action.id )
      .subscribe( () => of( this.store.dispatch( LoadCourses() ) ) )
    ) ),
    concatMap( () => of( DeleteCourseSuccess() ) )
  );

  @Effect()
  loadMore$ = this.actions$.pipe(
    ofType( coursesActions.LoadMore ),
    map( () => of( this.courseService.getAll( 10, null, null, this.countCourses )
      .subscribe( courses => this.store.dispatch( SaveCourses( { courses } ) ) )
    ) ),
    concatMap( () => of( UploadCountCourses() ) )
  );

  @Effect()
  addCourse$ = this.actions$.pipe(
    ofType( coursesActions.AddCourse ),
    map( action => of( this.courseService.add( action.course ).subscribe() ) ),
    concatMap( () => of( this.store.dispatch( LoadCourses() ) ) ),
    concatMap( () => of( AddCourseSuccess() ) )
  );

  @Effect()
  updateCourse$ = this.actions$.pipe(
    ofType( coursesActions.UpdateCourse ),
    map( action => of( this.courseService.update( action.course ).subscribe() ) ),
    concatMap( () => of( this.store.dispatch( LoadCourses() ) ) ),
    concatMap( () => of( UpdateCourseSuccess() ) )
  );
}
