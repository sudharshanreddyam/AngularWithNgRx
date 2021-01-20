import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component( {
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.css' ]
} )
export class LoginPageComponent implements OnInit {

  public form: FormGroup;

  constructor ( private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
    this.form = new FormGroup( {
      email: new FormControl( null ),
      password: new FormControl( null ),
    } );
  }

  submit() {
    if ( this.form.invalid ) {
      return;
    }

    if ( this.authService.login( this.form.value ) ) {
      this.router.navigate( [ '/courses' ] );
    }
  }
}
