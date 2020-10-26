import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  fullName = new User('1', 'Sudharshan', 'Reddyam').getFullName();

  ngOnInit(): void {
  }

}
