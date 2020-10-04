import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string = 'http://localhost:3000';

  constructor(private httpClient : HttpClient) { }

  test() : void {
    console.log("Test");
  }

  listAllUsers() : Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl+"/users")    
  }

  save(user : User) : Observable<User> {
    return this.httpClient.post(this.baseUrl+"/users",user);
  }
}