import { Component, OnInit } from '@angular/core';
import { IUser } from '../model/i-user';
import { UserService } from '../model/user-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser : IUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.getUserInfo();
  }

}
