import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable( { providedIn: 'root' } )
export class AuthGuardService implements CanActivate {

  constructor ( private router: Router, private authService: AuthService ) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> {
    if ( this.authService.isAuthenticated() ) {
      return of( true );
    } else {
      this.router.navigate( [ 'login' ] );
      return of( false );
    }
  }
}
