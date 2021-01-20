import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../interfaces/course';
import { CourseService } from './../services/course.service';

@Component( {
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: [ './course-form.component.css' ]
} )
export class CourseFormComponent implements OnInit {

  public form: FormGroup;
  private id: string;
  private currentCourse: Course;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.id = params.id );

    if ( this.id ) {
      this.courseService.getById( this.id ).subscribe( course => this.currentCourse = course );

      this.form = new FormGroup( {
        title: new FormControl( this.currentCourse.title ),
        description: new FormControl( this.currentCourse.description ),
        duration: new FormControl( this.currentCourse.duration ),
        creationDate: new FormControl( this.currentCourse.creationDate ),
        authors: new FormControl( this.currentCourse.authors.join( ' ' ) ),
      } );
    } else {
      this.form = new FormGroup( {
        title: new FormControl( null ),
        description: new FormControl( null ),
        duration: new FormControl( null ),
        creationDate: new FormControl( null ),
        authors: new FormControl( null ),
      } );
    }
  }

  submit(): void {
    if ( this.form.invalid ) {
      return;
    }

    const course: Course = {
      ...this.form.value,
      authors: this.form.value.authors.split( ' ' )
    };

    if ( this.id ) {
      course.id = this.id;
      this.courseService.update( course );
    } else {
      this.courseService.add( course );
    }

    this.router.navigate( [ '/courses' ] );
  }

  cancel(): void {
    this.form.reset();
    this.router.navigate( [ '/courses' ] );
  }

}
