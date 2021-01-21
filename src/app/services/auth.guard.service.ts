import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { IAuthState } from '../store/auth/auth.reducer';

@Injectable( { providedIn: 'root' } )
export class AuthGuardService implements CanActivate {

  private isAuth: boolean;

  constructor ( private router: Router, private store: Store<{ auth: IAuthState; }> ) {
    this.store.select( 'auth' ).subscribe( auth => this.isAuth = auth.isAuth );
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> {
    if ( this.isAuth ) {
      return of( true );
    } else {
      this.router.navigate( [ '/login' ] );
      return of( false );
    }
  }
}
