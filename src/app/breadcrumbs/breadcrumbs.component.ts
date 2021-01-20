import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component( {
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: [ './breadcrumbs.component.css' ]
} )
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs;

  constructor ( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.url.subscribe( path => this.breadcrumbs = path.join( ' / ' ) );
  }

}
