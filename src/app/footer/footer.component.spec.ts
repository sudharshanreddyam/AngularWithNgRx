import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';


describe( 'FooterComponent', () => {

  let footerComponent: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ FooterComponent ]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( FooterComponent );
    footerComponent = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create footer component', () => {
    expect( footerComponent ).toBeTruthy();
  } );
} );
