import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs;

  constructor() { }

  ngOnInit(): void {
    this.breadcrumbs = 'Courses';
  }

}
