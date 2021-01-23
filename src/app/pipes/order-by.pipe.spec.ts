import { Course } from './../course';
import { OrderByPipe } from './order-by.pipe';

describe( 'OrderByPipe', () => {

  let courses: Course[];

  beforeEach( () => {
    courses = [
      new Course( '1', 'Angular', new Date( '03.10.1995' ), 120, 'Angular', true ),
      new Course( '2', 'Vue', new Date( '10.10.1970' ), 120, 'Vue', true ),
      new Course( '3', 'React', new Date( '10.07.1994' ), 120, 'React', true ) ];
  } );

  it( 'create an instance', () => {
    const pipe = new OrderByPipe();
    expect( pipe ).toBeTruthy();
  } );

  it( 'should return ordered courses by creationDate', () => {
    const pipe = new OrderByPipe();
    const coursesAfterOrder: Course[] = pipe.transform( courses, 'creationDate' );
    const resultCourses = [
      new Course( '2', 'Vue', new Date( '10.10.1970' ), 120, 'Vue', true ),
      new Course( '3', 'React', new Date( '10.07.1994' ), 120, 'React', true ),
      new Course( '1', 'Angular', new Date( '03.10.1995' ), 120, 'Angular', true ) ];

    expect( JSON.stringify( coursesAfterOrder ) ).toEqual( JSON.stringify( resultCourses ) );
  } );
} );
