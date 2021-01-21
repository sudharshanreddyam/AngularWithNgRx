import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Authenticated } from 'src/app/store/auth/auth.action';
import { LoadingOn } from './../../store/app/app.actions';
import { IAppState } from './../../store/app/app.reducer';


@Component( {
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.css' ]
} )
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public isLoading: boolean;

  constructor ( private store: Store<{ app: IAppState; }> ) {
    this.store.select( 'app' ).subscribe( app => this.isLoading = app.isLoading );
  }

  ngOnInit(): void {
    this.form = new FormGroup( {
      login: new FormControl( null, [ Validators.required ] ),
      password: new FormControl( null, [ Validators.required ] ),
    } );
  }

  submit() {
    if ( this.form.invalid ) {
      return;
    }

    this.store.dispatch( LoadingOn() );
    this.store.dispatch( Authenticated( this.form.value ) );
  }
}
