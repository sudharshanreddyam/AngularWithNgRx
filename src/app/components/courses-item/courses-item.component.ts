import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/interfaces/course';


@Component( {
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: [ './courses-item.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CoursesItemComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteHandler = new EventEmitter<number>();

  constructor ( private router: Router ) { }

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
