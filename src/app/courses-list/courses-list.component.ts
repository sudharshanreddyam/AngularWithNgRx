import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { ICourse } from './../interfaces/course';
import { CourseService } from './../services/course.service';

@Component( {
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: [ './courses-list.component.css' ]
} )
export class CoursesListComponent implements OnInit {

  public allCourses: ICourse[] = [];
  public currentCountCourses: number = 0;
  public searchParam: string;
  public coursesNotFoundMessage: string = 'no data. feel free to add new courses';

  constructor (
    private courseService: CourseService,
    private router: Router,
    public loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.loadingService.loadingOn();
    this.courseService.getAll().subscribe( courses => {
      this.allCourses = courses;
      this.loadingService.loadingOff();
    } );
  }

  search( event: Event ): void {
    this.searchParam = ( <HTMLInputElement> event.target ).value;

    if ( this.searchParam.length > 3 ) {
      this.loadingService.loadingOn();
      setTimeout( () => {
        this.loadCourses();
        this.courseService.getAll( 3, this.searchParam ).subscribe( courses => this.allCourses = courses );
        this.loadingService.loadingOff();
      }, 1000 );
    }
  }

  delete( id: number ): void {
    this.courseService.delete( id ).subscribe( () => this.loadCourses() );
  }

  loadMore(): void {
    this.loadingService.loadingOn();
    this.courseService.getAll( 10, null, null, this.currentCountCourses ).subscribe( courses => {
      this.allCourses = courses;
      this.currentCountCourses += 10;
      this.loadingService.loadingOff();
    } );
  }

  add(): void {
    this.router.navigate( [ '/add' ] );
  }
}
