import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn : boolean = false;

  constructor() { }

  authenticate(username : String,password :  String) : boolean{
    if(username == 'keyur' && password == 'denish'){
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  } 
}
