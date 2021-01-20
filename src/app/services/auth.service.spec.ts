import { TestBed } from '@angular/core/testing';
import { User } from '../interfaces/user';
import { AuthService } from './auth.service';


describe( 'AuthService', () => {
  let service: AuthService;

  beforeEach( () => {
    TestBed.configureTestingModule( {} );
    service = TestBed.inject( AuthService );
    localStorage.clear();
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );

  it( 'should save trust user in localStorage', () => {
    const realUser: User = new User( '3', 'Max', 'Lov', 'max@gmail.com', '123' );
    const user: User = { email: 'max@gmail.com', password: '123' };

    service.login( user );

    expect( localStorage.getItem( 'userInfo' ) ).toEqual( JSON.stringify( realUser ) );
  } );

  it( 'should call setToken', () => {
    const spyClear = spyOn( localStorage, 'clear' );
    service.logout();

    expect( spyClear ).toHaveBeenCalled();
  } );

  it( 'should return true when called isAuthenticated', () => {
    service.setToken( 'SECRET_TOKEN' );
    const result = service.isAuthenticated();

    expect( result ).toBeTruthy();
  } );

  it( 'should return false when called isAuthenticated', () => {
    service.setToken( null );
    const result = service.isAuthenticated();

    expect( result ).toBeFalsy();
  } );

  it( 'should set data in localStorage', () => {
    const token: string = 'SECRET_TOKEN';
    service.setToken( token );

    expect( localStorage.getItem( 'token' ) ).toContain( token );
  } );

  it( 'should clear localStorage', () => {
    const spyClear = spyOn( localStorage, 'clear' );
    service.setToken( null );

    expect( spyClear ).toHaveBeenCalled();
  } );

  it( 'should get data from localStorage', () => {
    const token: string = 'SECRET_TOKEN';
    service.setToken( token );

    expect( service.token ).toEqual( token );
  } );

  it( 'should return userInfo', () => {
    const realUser: User = new User( '3', 'Max', 'Lov', 'max@gmail.com', '123' );

    service.login( realUser );
    const userInfo: string = service.getUserInfo();

    expect( userInfo ).toEqual( `${ realUser.firstName } ${ realUser.lastName }` );
  } );

  it( 'should call logout when call getUserInfo', () => {
    const spyLogout = spyOn( service, 'logout' );

    service.getUserInfo();

    expect( spyLogout ).toHaveBeenCalled();
  } );
} );
