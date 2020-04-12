import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCInputDemo';


  selectedPerson = {};

  personList = [
    {
    firstName : "denish",
    lastName : "patel",
    city : "Mumbai",
    mobileNo : "8700991233",
    email : "denishpatel@gmail.com"
    },
    {
      firstName : "vinit",
      lastName : "shah",
      city : "Surat",
      mobileNo : "8700994455",
      email : "vinitshah@gmail.com"
    },
    {
      firstName : "ami",
      lastName : "dave",
      city : "Bharuch",
      mobileNo : "8700712124",
      email : "daveami@gmail.com"
    }
  ];

  search(str) : void{
    let findPerson = this.personList.find(p=>p.firstName==str);
    if(findPerson == undefined){
      alert("Person Not found with name "+str);
    }else{
      this.selectedPerson = findPerson;
    }    
  }
}
