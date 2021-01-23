import { Component, OnInit } from '@angular/core';
import { LoadingService } from './../services/loading.service';

@Component( {
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: [ './add-page.component.css' ]
} )
export class AddPageComponent implements OnInit {

  constructor ( public loadingService: LoadingService ) { }

  ngOnInit(): void { }
}
