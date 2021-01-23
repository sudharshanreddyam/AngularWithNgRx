import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../interfaces/course';
import { CourseService } from './../services/course.service';
import { LoadingService } from './../services/loading.service';

@Component( {
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: [ './course-form.component.css' ]
} )
export class CourseFormComponent implements OnInit {

  public form: FormGroup = new FormGroup( {
    name: new FormControl( null ),
    description: new FormControl( null ),
    length: new FormControl( null ),
    date: new FormControl( null ),
    authors: new FormControl( null ),
  } );;
  private id: number;
  private currentCourse: Course;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private datePipe: DatePipe,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.id = params.id );

    if ( this.id ) {
      this.courseService.getById( this.id ).subscribe( course => {
        this.currentCourse = course;

        this.form = new FormGroup( {
          name: new FormControl( this.currentCourse.name ),
          description: new FormControl( this.currentCourse.description ),
          length: new FormControl( this.currentCourse.length ),
          date: new FormControl( this.datePipe.transform( new Date( this.currentCourse.date ), 'yyyy-MM-dd' ) ),
          authors: new FormControl( this.currentCourse.authors.name ),
        } );
      } );
    }
  }

  submit(): void {
    if ( this.form.invalid ) {
      return;
    }

    this.loadingService.loadingOn();

    const course: Course = {
      ...this.form.value,
      authors: {
        name: this.form.value.authors.split( ' ' )
      }
    };

    if ( this.id ) {
      course.id = this.id;
      this.courseService.update( course ).subscribe();
    } else {
      this.courseService.add( course ).subscribe();
    }

    this.loadingService.loadingOff();
    this.router.navigate( [ '/courses' ] );
  }

  cancel(): void {
    this.form.reset();
    this.router.navigate( [ '/courses' ] );
  }

}
