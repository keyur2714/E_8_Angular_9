import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl : string = 'http://localhost:3000/users';

  isLoggedIn : boolean = false;
  successUrl : string = 'home';
  loggedInUserRole : string = ''; 

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]> {    
    return this.http.get<User[]>(this.apiUrl);
  }

  authenticate(username : String,password :  String) : Observable<User>{
    return this.getUsers().pipe(
        map(uList=>{
           for(let user of uList){
             if(user.username === username && user.password === password){
              this.isLoggedIn = true;
              this.loggedInUserRole = user.role;
              return user;
             }
              
           }            
        }        
      )
    );
  } 
}
