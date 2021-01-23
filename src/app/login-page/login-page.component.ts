import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginResponse } from '../interfaces/responses';
import { IUser } from '../interfaces/user';
import { AuthService } from './../services/auth.service';
import { LoadingService } from './../services/loading.service';

@Component( {
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.css' ]
} )
export class LoginPageComponent implements OnInit {

  public form: FormGroup;

  constructor (
    private authService: AuthService,
    private router: Router,
    public loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup( {
      login: new FormControl( null ),
      password: new FormControl( null ),
    } );
  }

  submit() {
    if ( this.form.invalid ) {
      return;
    }

    this.loadingService.loadingOn();

    this.authService
      .login( this.form.value )
      .subscribe( ( data: ILoginResponse ) => {
        this.authService.setToken( data.token );
        this.authService.getUserInfo().subscribe( ( user: IUser ) => {
          this.loadingService.loadingOff();
          this.router.navigate( [ '/courses' ] );
        } );
      } );
  }
}
