import { CoursesItemComponent } from './courses-item.component';
import {Course} from '../interfaces/course';


describe( 'CoursesItemComponent', () => {

  let coursesItemComponent: CoursesItemComponent;

  beforeEach( () => {
    coursesItemComponent = new CoursesItemComponent();
  } );

  it( 'should emit delete by id', () => {
    const currentId: string = '1';
    let resultId: string;

    coursesItemComponent.deleteHandler.subscribe( id => resultId = id );
    coursesItemComponent.delete( currentId );

    expect( coursesItemComponent.delete ).toBeDefined();
    expect( resultId ).toEqual( currentId );
  } );

  it( 'should course contain equal object', () => {
    const course: Course = new Course( '1', 'Angular Course', new Date(), 60, 'Angular Course' );

    coursesItemComponent.course = course;

    expect( coursesItemComponent.course ).toBeInstanceOf( Course );
    expect( coursesItemComponent.course ).toEqual( course );
  } );
} );
