import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor ( private authService: AuthService, private router: Router
  ) { }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    if ( this.authService.isAuthenticated() ) {
      req = req.clone( {
        setParams: {
          token: this.authService.token
        }
      } );
    }

    return next
      .handle( req ).pipe( catchError( this.handleError.bind( this ) ) );
  }

  private handleError( error: HttpErrorResponse ): void {
    if ( error.status === 401 ) {
      this.authService.logout();
      this.router.navigate( [ '/login' ] );
    }
  }
}
