import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app/app.reducer';
import { Logout } from 'src/app/store/auth/auth.action';
import { IAuthState } from 'src/app/store/auth/auth.reducer';
import { IUser } from './../../interfaces/user';


@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
} )
export class HeaderComponent implements OnInit {

  public userInfo: IUser;
  public isAuth: boolean;

  constructor ( public store: Store<{ app: IAppState; auth: IAuthState; }> ) {
    this.store.select( 'auth' ).subscribe( auth => {
      this.isAuth = auth.isAuth;
      this.userInfo = auth.userInfo;
    } );
  }

  ngOnInit(): void { }


  logout(): void {
    this.store.dispatch( Logout() );
  }
}
