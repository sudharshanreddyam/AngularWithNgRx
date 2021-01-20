import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from './../services/course.service';

@Component( {
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: [ './courses-list.component.css' ]
} )
export class CoursesListComponent implements OnInit {

  public allCourses = [];
  public currentCountCourses = 0;
  public searchParam;
  public coursesNotFoundMessage = 'no data. feel free to add new courses';

  constructor (
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getAll().subscribe( courses => this.allCourses = courses );
  }

  search(): void {
    this.loadCourses();
    this.courseService.getAll( 3, this.searchParam ).subscribe( courses => this.allCourses = courses );
  }

  delete( id: number ): void {
    this.courseService.delete( id ).subscribe( () => this.loadCourses() );
  }

  loadMore(): void {
    this.courseService.getAll( 10, null, null, this.currentCountCourses ).subscribe( courses => {
      this.allCourses = courses;
      this.currentCountCourses += 10;
    } );
  }

  add(): void {
    this.router.navigate( [ '/add' ] );
  }
}
