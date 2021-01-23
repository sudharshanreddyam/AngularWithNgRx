import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterPipe } from '../pipes/filter.pipe';
import { CourseService } from './../services/course.service';

@Component( {
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: [ './courses-list.component.css' ]
} )
export class CoursesListComponent implements OnInit {

  public allCourses;
  public searchParam;
  public coursesNotFoundMessage = 'no data. feel free to add new courses';

  constructor (
    private courseService: CourseService,
    private filterPipe: FilterPipe,
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
    this.allCourses = this.filterPipe.transform( this.allCourses, this.searchParam );
  }

  delete( id: string ): void {
    this.courseService.delete( id );
    this.loadCourses();
  }

  loadMore(): void {
    console.log( 'load more courses' );
  }

  add(): void {
    this.router.navigate( [ 'courses/new' ] );
  }
}
