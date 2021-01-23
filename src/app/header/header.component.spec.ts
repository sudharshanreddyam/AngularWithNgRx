import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';


describe( 'HeaderComponent', () => {

  let headerComponent: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ HeaderComponent ]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( HeaderComponent );
    headerComponent = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create header component', () => {
    expect( headerComponent ).toBeTruthy();
  } );

  it( 'should render user login in the span', () => {
    const userLogin: string = 'Maxim';
    const userLoginSelector: string = 'button.btn-link span';

    headerComponent.userLogin = userLogin;
    fixture.detectChanges();
    const spanElement: HTMLElement = fixture.debugElement.query( By.css( userLoginSelector ) ).nativeElement;

    expect( spanElement.innerText ).toContain( userLogin );
  } );
} );
