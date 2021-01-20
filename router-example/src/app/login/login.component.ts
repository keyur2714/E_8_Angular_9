import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : String = '';
  password : String = '';
  isLoggedIn : boolean = false;

  constructor(private router : Router,private authService : AuthenticationService) { }

  ngOnInit() {
  }

  login() : void {
    if(this.username === '' || this.password === ''){
      alert("Please Enter Uername and Password.");
    }else{
      if(this.authService.authenticate(this.username,this.password)){
        this.isLoggedIn = true;
        this.router.navigate(['home']);
      }else{
        alert("Invalid Username or Password.");
      }
    }

  }

}
