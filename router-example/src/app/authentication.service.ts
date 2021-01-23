import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn : boolean = false;
  successUrl : string = 'home';
  loggedInUserRole : string = ''; 

  constructor() { }

  getUsers() : User[] {
    let user1 = new User("keyur","denish","basicuser");
    let user2 = new User("admin","password","admin");    
    return [user1,user2];
  }

  authenticate(username : String,password :  String) : boolean{
    let allUsers = this.getUsers();
    for(let user of allUsers){
      if(username == user.username && password == user.password){
        this.isLoggedIn = true;
        this.loggedInUserRole = user.role;
      }
    }    
    return this.isLoggedIn;
  } 
}
