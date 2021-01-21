import { Course } from './course';
import { CourseService } from './course.service';


describe( 'CourseService', () => {

  let courseService: CourseService;

  beforeEach( () => {
    courseService = new CourseService();
  } );

  it( 'should return array of all courses', () => {
    let currentCourses: Course[] = [];
    const minLengthCourseArray: number = 0;

    courseService.getAll().subscribe( courses => currentCourses = courses );

    expect( courseService.getAll ).toBeDefined();
    expect( currentCourses.length ).toBeGreaterThanOrEqual( minLengthCourseArray );
  } );

  it( 'should return element type of <Course> by course id', () => {
    let currentCourse: Course;
    const idCourse: string = '1';

    courseService.getById( idCourse ).subscribe( course => currentCourse = course );

    expect( courseService.getById ).toBeDefined();
    expect( currentCourse ).toBeInstanceOf( Course );
    expect( currentCourse.id ).toBe( idCourse );
  } );

  it( 'should add new element type of <Course>', () => {
    let currentCourse: Course;
    const newCourse: Course = new Course( '9', 'JS Course', new Date(), 60, 'JS Course' );

    courseService.add( newCourse ).subscribe( course => currentCourse = course );

    expect( courseService.add ).toBeDefined();
    expect( currentCourse ).toBeInstanceOf( Course );
    expect( currentCourse ).toBe( newCourse );
  } );

  it( 'should update old element on the new element', () => {
    let currentCourse: Course;
    const newCourse: Course = new Course( '1', 'JS Course', new Date(), 60, 'JS Course' );

    courseService.update( newCourse ).subscribe( course => currentCourse = course );

    expect( courseService.update ).toBeDefined();
    expect( currentCourse ).toBeInstanceOf( Course );
    expect( currentCourse ).toBe( newCourse );
  } );

  it( 'should call delete element by id', () => {
    let courseBeforeDelete: Course;
    let courseAfterDelete: Course;
    const idCourse: string = '1';

    courseService.getById( idCourse ).subscribe( course => courseBeforeDelete = course );
    courseService.delete( idCourse );
    courseService.getById( idCourse ).subscribe( course => courseAfterDelete = course );

    expect( courseService.delete ).toBeDefined();
    expect( courseBeforeDelete ).not.toBeNull();
    expect( courseAfterDelete ).toBeUndefined();
  } );
} );
