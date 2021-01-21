import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Course } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course.service';
import { IAppState } from 'src/app/store/app/app.reducer';
import { IAuthor } from './../../interfaces/course';
import { LoadingOff } from './../../store/app/app.actions';
import { AddCourse, UpdateCourse } from './../../store/courses/courses.actions';


@Component( {
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: [ './course-form.component.css' ]
} )
export class CourseFormComponent implements OnInit {

  public authors: IAuthor[];
  public form = this.fb.group( {
    name: [ null, [ Validators.maxLength( 50 ) ] ],
    description: [ null, [ Validators.maxLength( 500 ) ] ],
    length: [ null, [ Validators.required, Validators.min( 0 ), Validators.max( 1000 ) ] ],
    date: [ null ],
    authors: [ null ],
  } );
  private id: number;
  private currentCourse: Course;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private datePipe: DatePipe,
    private store: Store<{ app: IAppState; }>,
    private fb: FormBuilder
  ) {
    this.courseService.getAuthors().subscribe( authors => this.authors = authors );
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.id = params.id );

    if ( this.id ) {
      this.courseService.getById( this.id ).subscribe( course => {
        this.currentCourse = course;

        this.form = this.fb.group( {
          name: [ this.currentCourse.name, [ Validators.maxLength( 50 ) ] ],
          description: [ this.currentCourse.description, [ Validators.maxLength( 500 ) ] ],
          length: [ this.currentCourse.length, [ Validators.required, Validators.min( 0 ), Validators.max( 1000 ) ] ],
          date: [ this.datePipe.transform( new Date( this.currentCourse.date ), 'yyyy-MM-dd' ) ],
          authors: [ this.currentCourse.authors.name ],
        } );
      } );
    }
  }

  submit(): void {
    if ( this.form.invalid ) {
      return;
    }


    const course: Course = {
      ...this.form.value,
      authors: {
        name: this.form.value.authors.split( ' ' )
      }
    };

    if ( this.id ) {
      course.id = this.id;
      this.store.dispatch( UpdateCourse( { course } ) );
    } else {
      this.store.dispatch( AddCourse( { course } ) );
    }

    this.store.dispatch( LoadingOff() );
    this.router.navigate( [ '/courses' ] );
  }

  cancel(): void {
    this.form.reset();
    this.router.navigate( [ '/courses' ] );
  }

}
