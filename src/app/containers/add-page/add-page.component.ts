import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app/app.reducer';

@Component( {
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: [ './add-page.component.css' ]
} )
export class AddPageComponent implements OnInit {

  public isLoading: boolean;

  constructor ( private store: Store<{ app: IAppState; }> ) {
    this.store.select( 'app' ).subscribe( app => this.isLoading = app.isLoading );
  }

  ngOnInit(): void { }
}
