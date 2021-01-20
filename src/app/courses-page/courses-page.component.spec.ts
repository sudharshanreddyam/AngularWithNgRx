import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesPageComponent } from './courses-page.component';


describe( 'CoursesPageComponent', () => {

  let coursesPageComponent: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ CoursesPageComponent ]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( CoursesPageComponent );
    coursesPageComponent = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create courses-page component', () => {
    expect( coursesPageComponent ).toBeTruthy();
  } );

  it( 'should defined function "load more courses"', () => {
    coursesPageComponent.loadMore();
    expect( coursesPageComponent.loadMore ).toBeDefined();
  } );
} );
