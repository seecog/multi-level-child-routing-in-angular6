import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {

  private edu:any;
  constructor(private userService:UserService,private routerParam:ActivatedRoute) { 

    this.routerParam.parent.params.subscribe(data=>{
     this.userService.getUser(data.id).subscribe((data) => 
      { 
        console.log('datawwwwwww', data['education']);
        this.edu = data['education'];
      })
      
    });

    console.log(this.edu);
  }

  ngOnInit() {

    console.log('as',this.routerParam.parent)  
  }

}
