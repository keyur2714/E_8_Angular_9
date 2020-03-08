import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-book',
  templateUrl: './friends-book.component.html',
  styleUrls: ['./friends-book.component.css']
})
export class FriendsBookComponent implements OnInit {

  name : string = '';
  friendNames : string[] = ["keyur","denish","vinit"];
  msg : string = '';
  updateIdx : number = -1;

  constructor() { }

  ngOnInit() {
  }

  addFriend():void {
    if(this.name === ''){
      this.msg = "Please Enter Name";
    }else{
      this.msg = '';
      let idx = this.friendNames.indexOf(this.name);
      if(idx === -1)        
        this.friendNames.push(this.name);
      else
        this.msg = this.name+ ' Already Exists.';  
    }    
  }

  updateFriend():void {
    if(this.name === ''){
      this.msg = "Please Enter Name";
    }else{
      this.msg = '';
      this.friendNames[this.updateIdx] = this.name;
      this.updateIdx = -1;
    }    
  }

  edit(idx : number) : void {
    //alert(idx);
    this.name = this.friendNames[idx]; 
    this.updateIdx = idx;
  }

  delete(idx : number) : void{
    let confirmMsg = confirm("Are you sure want to delete "+this.friendNames[idx]+"?");
    //alert(confirmMsg);
    if(confirmMsg){
      this.friendNames.splice(idx,1);
    }
  }
}
