import { CourseService } from './course-service';
import { DatePipe } from '@angular/common';

describe('CourseService', () => {
  it('should create an instance', () => {
    let pipe = new DatePipe('en');
    expect(new CourseService(pipe)).toBeTruthy();
  });
});
