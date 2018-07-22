import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
private user:any;
  constructor(private routerParam:ActivatedRoute,private userService:UserService) {
this.routerParam.params.subscribe((data)=>
{
  console.log(data.id)
  
  this.userService.getUser(data.id).subscribe(data => { this.user =  data;});
  console.log(this.user)
},
(err)=>
{
  console.log(err);
})   

}

  ngOnInit() {
  }

}
