import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';
import { LoggerService } from '../model/logger-service';
import { DurationTime } from '../model/duration-time';
import { Course } from '../model/course';
import { DatePipe } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('#CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent],
      providers: [LoggerService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    let course = Course.GetCourse(
      new DatePipe('en'),
      'Video course 1. Name Tag',
      'Learn about where you can find course description.',
      new Date(2019, 10, 27),
      new DurationTime(541),
      1
    );
    component.courseItem = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should react on deleteItem click', () => {
    let spy = spyOn(component, 'deleteItem');
    let el = fixture.debugElement.query(By.css('#delete-course-button'));
    el.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should react on editItem click', () => {
    let spy = spyOn(component, 'editItem');
    let el = fixture.debugElement.query(By.css('#edit-course-button'));
    el.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
