import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list.component';
import { FormsModule } from '@angular/forms';
import { SearchSectionComponent } from '../search-section/search-section.component';
import { CourseItemComponent } from '../course-item/course-item.component';
import { CourseService } from '../model/course-service';
import { DatePipe } from '@angular/common';
import { LoggerService } from '../model/logger-service';
import { By } from '@angular/platform-browser';
import { Course } from '../model/course';
import { DurationTime } from '../model/duration-time';

describe('#CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  const pipe = new DatePipe('en');

  let courseService: CourseService;
  const courseServiceStub: Partial<CourseService> = {
    getCourseList: () => [
      Course.GetCourse(
        pipe,
        'Name',
        'Description',
        new Date(2019, 10, 27),
        new DurationTime(541),
        1
      )
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent, SearchSectionComponent, CourseItemComponent],
      imports: [FormsModule],
      providers: [DatePipe, LoggerService, { provide: CourseService, useValue: courseServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    courseService = TestBed.get(CourseService);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should react on loadMoreCourseItems click', () => {
    const spy = spyOn(component, 'loadMoreCourseItems');
    const el = fixture.debugElement.query(By.css('#load-more-button'));
    el.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should get deleteCourse event from child ', () => {
    const methodSpy = spyOn(component, 'deleteCourseItem');
    const child = fixture.debugElement.query(By.directive(CourseItemComponent));
    child.triggerEventHandler('deleteCourseItemEvent', 1);
    fixture.detectChanges();
    expect(methodSpy).toHaveBeenCalled();
  });

  it('should get editCourseItem event from child ', () => {
    const methodSpy = spyOn(component, 'editCourseItem');
    const child = fixture.debugElement.query(By.directive(CourseItemComponent));
    child.triggerEventHandler('editCourseItemEvent', 1);
    fixture.detectChanges();
    expect(methodSpy).toHaveBeenCalled();
  });

  it('should call courseService', () => {
    const getDataSpy = spyOn(courseService, 'getCourseList');
    component.ngOnInit();
    expect(getDataSpy).toHaveBeenCalled();
    expect(component.courseList).toEqual(courseService.getCourseList());
  });

  it('should have courseList initialised ', () => {
    component.ngOnInit();
    expect(component.courseList).toEqual(courseService.getCourseList());
  });
});
