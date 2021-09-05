import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  username:string="";
  theuser: any;

  constructor(private activatedroute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
   this.activatedroute.snapshot.paramMap.get('name');
     alert(this.username); 
  }
  OnRedirect(){
    this,this.route.navigate(["user-login", this.theuser.username]);
  
    //this.route.navigate('admin-login');
  //}
  }

}
