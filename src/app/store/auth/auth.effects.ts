import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { AuthService } from './../../services/auth.service';
import { LoadingOff } from './../app/app.actions';
import { IAppState } from './../app/app.reducer';
import * as actions from './auth.action';
import { AuthenticatedSuccess, LogoutSuccess, SetUserInfo } from './auth.action';
import { IAuthState } from './auth.reducer';

@Injectable()
export class AuthEffects {
  constructor (
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private store: Store<{ app: IAppState; auth: IAuthState; }>
  ) { }

  @Effect()
  login$ = this.actions$.pipe(
    ofType( actions.Authenticated ),
    map( action => of( this.authService.login( action )
      .subscribe( data => {
        this.authService.setToken( data.token );
        this.authService.getUserInfo()
          .subscribe( user => this.store.dispatch( SetUserInfo( user ) ) );
        this.store.dispatch( LoadingOff() );
        this.router.navigate( [ '/courses' ] );
      } ) ) ),
    concatMap( () => of( AuthenticatedSuccess() ) )
  );



  @Effect()
  logout$ = this.actions$.pipe(
    ofType( actions.Logout ),
    map( () => of( this.authService.logout() ) ),
    map( () => of( this.router.navigate( [ '/login' ] ) ) ),
    concatMap( () => of( LogoutSuccess() ) )
  );
}
