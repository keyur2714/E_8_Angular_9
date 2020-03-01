import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  person : Person = new Person();
  // firstName : string = 'Keyur';
  // lastName : string = 'Thakor';
  // dateOfBirth : Date = new Date("1986-12-27");
  // mobileNo : string = '';
  // email : string = '';
  // age : number = 0;

  constructor() { }

  ngOnInit() {
    // this.mobileNo = '7387029671';
    // this.email = 'keyurjava27@gmail.com';
    // this.age = 33;
    this.person.firstName = 'Keyur';
    this.person.lastName = 'Thakor';
    this.person.dateOfBirth = new Date('1986-12-27');
    this.person.mobileNo = '7387029671';
    this.person.email = 'keyurjava27@gmail.com';
    this.person.age = 33;
  }

}
