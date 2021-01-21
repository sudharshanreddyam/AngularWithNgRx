import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginResponse } from './../interfaces/responses';
import { IUser, User } from './../interfaces/user';

@Injectable( { providedIn: 'root' } )
export class AuthService {
  private serverUrl: string = 'http://localhost:3004';

  constructor ( private http: HttpClient ) { };

  login( userData: User ): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>( `${ this.serverUrl }/auth/login`, {
      login: userData.login,
      password: userData.password
    } );
  }

  logout(): void {
    this.setToken( null );
  }

  isAuthenticated(): boolean {
    return !!this.token;
  };

  getUserInfo(): Observable<IUser> {
    return this.http.post<IUser>( `${ this.serverUrl }/auth/userinfo`, { token: this.token } );
  }

  get token(): string | null {
    const token = localStorage.getItem( 'token' );

    if ( token ) {
      return token;
    } else {
      this.logout();
      return null;
    }
  }

  setToken( value: string | null ): void {
    if ( value ) {
      localStorage.setItem( 'token', value );
    } else {
      localStorage.clear();
    }
  }

}
