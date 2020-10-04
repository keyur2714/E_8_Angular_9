import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']  
})
export class UsersComponent implements OnInit {

  allUsers : User[] = [];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() : void {
    this.userService.listAllUsers().subscribe(
      (users : User[]) =>{
        this.allUsers = users;
      }
    )
  }

  save() : void {
    let newUser : User = new User(3,"vinit","Hindustan@44","user","vinit2cute");
    this.userService.save(newUser).subscribe(
      (data)=>{
        alert("User Created Successfully...!");
        this.getAllUsers();
      }
    )
  }
}
