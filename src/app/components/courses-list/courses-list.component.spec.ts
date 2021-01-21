import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CoursesListComponent } from './courses-list.component';
import {Course} from '../../interfaces/course';
import {CourseService} from '../../services/course.service';


describe( 'CoursesListComponent', () => {

  let fixture: ComponentFixture<CoursesListComponent>;
  let coursesListComponent: CoursesListComponent;
  let courseService: CourseService;
  let mockedCourses: Course[];

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ CoursesListComponent ],
      providers: [ CourseService ]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( CoursesListComponent );
    coursesListComponent = fixture.componentInstance;
    courseService = TestBed.get( CourseService );
    fixture.detectChanges();
    mockedCourses = [
      new Course( '1', 'Angular Course', new Date(), 60, 'Angular Course' ),
      new Course( '2', 'Vue Course', new Date(), 120, 'Vue Course' ),
      new Course( '3', 'React Course', new Date(), 60, 'React Course' )
    ];
  } );

  it( 'should create courses-list component', () => {
    expect( coursesListComponent ).toBeTruthy();
  } );

  it( 'should call function "load courses" on the init', () => {
    const spyGetAll = spyOn( courseService, 'getAll' ).and.returnValue( of( mockedCourses ) );

    coursesListComponent.ngOnInit();

    expect( coursesListComponent.ngOnInit ).toBeDefined();
    expect( spyGetAll ).toHaveBeenCalled();
  } );

  it( 'should defined function "load courses"', () => {
    const spyGetAll = spyOn( courseService, 'getAll' ).and.returnValue( of( mockedCourses ) );
    coursesListComponent.loadCourses();

    expect( coursesListComponent.loadCourses ).toBeDefined();
    expect( spyGetAll ).toHaveBeenCalled();
    expect( coursesListComponent.allCourses ).toEqual( mockedCourses );
  } );

  it( 'should defined function "search"', () => {
    coursesListComponent.search();
    expect( coursesListComponent.search ).toBeDefined();
  } );

  it( 'should defined function "delete"', () => {
    const idCourse: string = '1';
    const spyDelete = spyOn( courseService, 'delete' );
    const spyGetAll = spyOn( courseService, 'getAll' ).and.returnValue( of( mockedCourses ) );

    coursesListComponent.delete( idCourse );

    expect( coursesListComponent.delete ).toBeDefined();
    expect( spyDelete ).toHaveBeenCalledWith( idCourse );
    expect( spyGetAll ).toHaveBeenCalled();
  } );
} );
