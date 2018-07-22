import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  public users:any[] = [];

    constructor(private userService: UserService) 
    { 

    }

  ngOnInit() 
  {
    this.users = this.userService.getAllUsers();
  }

}
