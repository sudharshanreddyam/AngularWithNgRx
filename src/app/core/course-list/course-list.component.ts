import { Component, OnInit } from '@angular/core';
import { CourseService } from '../model/course-service';
import { ICourseItem } from '../model/i-course-item';
import { LoggerService } from '../model/logger-service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseList: ICourseItem[];

  constructor(private courseService: CourseService, private logger: LoggerService) {}

  public deleteCourseItem(id: number): void {
    this.logger.log(`List component - deleteCourseItem - with id = ${id}`);
  }

  public editCourseItem(id: number): void {
    this.logger.log(`List component - editCourseItem with id = ${id}`);
  }

  public loadMoreCourseItems(): void {
    this.logger.log(`List component - loadMoreCourseItems`);
  }

  ngOnInit() {
    this.courseList = this.courseService.getCourseList();
  }
}
