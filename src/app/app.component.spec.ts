import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


describe( 'AppComponent', () => {

  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    } ).compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( AppComponent );
    appComponent = fixture.componentInstance;
  } );

  it( 'should create the app', () => {
    expect( appComponent ).toBeTruthy();
  } );

  it( `should have as title 'video-course'`, () => {
    expect( appComponent.title ).toEqual( 'video-course' );
  } );

  it( `should have three components on the body'`, () => {
    const countOfAllComponents: number = 3;
    expect( fixture.debugElement.children.length ).toBe( countOfAllComponents );
  } );

  it( `should have header'`, () => {
    const headerSelector: string = 'app-header';
    expect( fixture.debugElement.query( By.css( headerSelector ) ) ).toBeTruthy();
  } );

  it( `should have footer'`, () => {
    const footerSelector: string = 'app-footer';
    expect( fixture.debugElement.query( By.css( footerSelector ) ) ).toBeTruthy();
  } );
} );
