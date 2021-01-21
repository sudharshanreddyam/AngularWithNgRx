import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';


describe( 'LogoComponent', () => {

  let logoComponent: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ LogoComponent ]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( LogoComponent );
    logoComponent = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create logo component', () => {
    expect( logoComponent ).toBeTruthy();
  } );
} );
