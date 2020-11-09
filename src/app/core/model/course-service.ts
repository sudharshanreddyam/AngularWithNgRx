import { Course } from './course';
import { DatePipe } from '@angular/common';
import { DurationTime } from './duration-time';
import { Injectable } from '@angular/core';
import { ICourseItem } from './i-course-item';

@Injectable()
export class CourseService {
  constructor(private datepipe: DatePipe) {}
  getCourseList(): ICourseItem[] {
    return [
      Course.GetCourse(
        this.datepipe,
        'Video course 1. Name Tag',
        'Learn about where you can find course description.',
        new Date(2019, 10, 27),
        new DurationTime(541),
        1
      ),
      Course.GetCourse(
        this.datepipe,
        'Video course 2. Name Tag',
        'Learn about your other course description.',
        new Date(2020, 11, 28),
        new DurationTime(602),
        2
      ),
      Course.GetCourse(
        this.datepipe,
        'Video course 3. Name Tag',
        'Learn about your third course.',
        new Date(2030, 13, 29),
        new DurationTime(663),
        3
      )
    ];
  }
}
