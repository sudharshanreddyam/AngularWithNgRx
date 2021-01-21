import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AuthService } from '../../services/auth.service';
import { LoginPageComponent } from './login-page.component';


describe( 'LoginPageComponent', () => {
  let component: LoginPageComponent;
  let authService: AuthService;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule( {
      declarations: [ LoginPageComponent ],
      providers: [ AuthService ],
      imports: [ BrowserDynamicTestingModule ]
    } )
      .compileComponents();
  } );

  beforeEach( () => {
    fixture = TestBed.createComponent( LoginPageComponent );
    component = fixture.componentInstance;
    authService = TestBed.get( AuthService );
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );

  it( 'should init function ngOnInit', () => {
    const spyOnInit = spyOn( component, 'ngOnInit' );
    component.ngOnInit();

    expect( spyOnInit ).toHaveBeenCalled();
  } );

  it( 'should init form', () => {
    component.ngOnInit();

    expect( component.form ).toBeDefined();
    expect( component.form ).toBeInstanceOf( FormGroup );
  } );

  it( 'should call authService, function login', () => {
    const spyLogin = spyOn( authService, 'login' );

    component.ngOnInit();
    fixture.detectChanges();

    component.submit();

    expect( spyLogin ).toHaveBeenCalled();
  } );
} );
