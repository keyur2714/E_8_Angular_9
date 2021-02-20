import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : String = '';
  password : String = '';
  isLoggedIn : boolean = false;
  loggedInUser : User;

  constructor(private router : Router,private authService : AuthenticationService) { }

  ngOnInit() {
  }

  login() : void {
    if(this.username === '' || this.password === ''){
      alert("Please Enter Uername and Password.");
    }else{
      this.authService.authenticate(this.username,this.password).subscribe(
        (user)=>{
          this.loggedInUser = user;
          if(this.loggedInUser === undefined){
            alert("Invalid Username or Password.");
          }else{
            this.isLoggedIn = true;
            this.router.navigate([this.authService.successUrl,{msg: 'Welcome'}]);
          }
        }
      )      
    }

  }

}
