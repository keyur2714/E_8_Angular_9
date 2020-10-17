import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']  
})
export class UsersComponent implements OnInit {

  allUsers : User[] = [];
  user : User = new User();
  isUpdate : boolean = false;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getAllUsers();
    this.user.role = 'user';
  }

  getAllUsers() : void {
    this.userService.listAllUsers().subscribe(
      (users : User[]) =>{
        this.allUsers = users;
      }
    )
  }

  save(frm:NgForm) : void {
    if(frm.valid){
     let newUser : User = frm.value;
     newUser.token = this.user.username+this.user.password;
      this.userService.save(newUser).subscribe(
        (data)=>{
          alert("User Created Successfully...!");
          this.getAllUsers();
        }
      )
    }
  }

  update(frm:NgForm) : void {
    if(frm.valid){
     let newUser : User = frm.value;
     newUser.token = this.user.username+this.user.password;
      this.userService.update(newUser).subscribe(
        (data)=>{
          alert("User Updated Successfully...!");
          this.getAllUsers();
          this.isUpdate = false;
          this.user = new User()
          this.user.role = "user";
        }
      )
    }
  }

  edit(id:number) : void{
    this.userService.getUserById(id).subscribe(
      (data:User)=>{
        this.user = data;
        this.isUpdate = true;
      }
    )
  }

  delete(id:number) : void {
    let confirmMsg = confirm("Are you Sure want to Delete User with id : "+id);
    //alert(confirmMsg);
    if(confirmMsg){
      this.userService.delete(id).subscribe(
        ()=>{
          alert("User Deleted Successfully.")
          this.getAllUsers();
        }
      ) 
    }    
  }
}