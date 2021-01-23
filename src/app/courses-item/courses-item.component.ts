import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../interfaces/course';
<<<<<<< HEAD
=======
import { AuthService } from './../services/auth.service';
>>>>>>> main

@Component( {
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: [ './courses-item.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CoursesItemComponent implements OnInit {
  @Input() course: Course;
<<<<<<< HEAD
  @Output() deleteHandler = new EventEmitter<number>();

  constructor ( private router: Router ) { }
=======
  @Output() deleteHandler = new EventEmitter<string>();

  constructor ( private router: Router, private authService: AuthService ) { }
>>>>>>> main

  ngOnInit(): void {
  }

  delete( id: number ): void {
    const answer: boolean = window.confirm( `Do you really want to delete ${ this.course.name }?` );

    if ( answer ) {
      this.deleteHandler.emit( id );
    }
  }

  edit(): void {
    this.router.navigate( [ `/${ this.course.id }/edit` ] );
  }
}
