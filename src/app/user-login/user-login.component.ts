import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export class user{
  username:string="";
  password:string="";
}

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
theuser:user=new user;
 errormessage:string="";
  constructor( private route:Router) {
    this.theuser.username="";
    this.theuser.password="";
   }

  ngOnInit(): void {
  }
  OnUserLogin(){
  if(this.theuser.username=="anusha"&&this.theuser.password=="12345"){
     this.errormessage="Login success";
     this,this.route.navigate(["user-home", this.theuser.username]);
    alert("Login success");
  }
  else{
    this.errormessage=" invalid username or password";
   // alert("Login failed");
  }
  }

}
