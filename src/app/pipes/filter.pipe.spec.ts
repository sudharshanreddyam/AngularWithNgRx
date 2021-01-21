import { Course } from '../interfaces/course';
import { FilterPipe } from './filter.pipe';

describe( 'FilterPipe', () => {

  let courses: Course[];

  beforeEach( () => {
    courses = [
      new Course( '1', 'Angular', new Date( '03.10.1995' ), 120, 'Angular', true ),
      new Course( '2', 'Vue', new Date( '10.10.1970' ), 120, 'Vue', true ),
      new Course( '3', 'React', new Date( '10.07.1994' ), 120, 'React', true ) ];
  } );

  it( 'create an instance', () => {
    const pipe = new FilterPipe();
    expect( pipe ).toBeTruthy();
  } );

  it( 'should return array when included in title "Secret Word"', () => {
    const pipe = new FilterPipe();
    const secretWord: string = 'Angular';

    const coursesAfterFilter: Course[] = pipe.transform( courses, secretWord );
    const resultCourses = courses.filter( course => course.title.includes( secretWord ) );

    expect( JSON.stringify( coursesAfterFilter ) ).toEqual( JSON.stringify( resultCourses ) );
  } );
} );
