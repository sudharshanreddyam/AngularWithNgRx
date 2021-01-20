import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Course } from '../interfaces/course';

@Directive( {
  selector: '[appCourseDate]'
} )
export class CourseDateDirective implements OnInit {
  @Input() course: Course;
  private currentDate: Date = new Date();

  constructor ( private element: ElementRef, private renderer: Renderer2 ) { }

  ngOnInit(): void {
    if ( this.isFreshDate() ) {
      this.renderer.addClass( this.element.nativeElement.firstChild, 'fresh-card' );
    } else if ( this.course.creationDate > this.currentDate ) {
      this.renderer.addClass( this.element.nativeElement.firstChild, 'upcoming-card' );
    }
  }

  private getCalculatedDate(): Date {
    const dayAfterSub: number = this.currentDate.getDay() - 14;
    return new Date( this.currentDate.setDate( dayAfterSub ) );
  }

  isFreshDate(): boolean {
    return this.course.creationDate < this.currentDate
      && this.course.creationDate >= this.getCalculatedDate();
  }
}
