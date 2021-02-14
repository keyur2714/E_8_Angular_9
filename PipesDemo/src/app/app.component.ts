import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PipesDemo';

  msg : string = 'Hello Radhe Krishna...!';

  birthDate : Date = new Date("1987-02-14 17:27:21");

  salary : number = 100000;

  pinCode : string = '411027';

  accountNumber : string = '98980121213';

  mobileNumber : string = '7387029671';

  person = {
    name : "keyur",
    city : "surat",
    mobileNo : "7387029671"
  };

  //newNo : number = 0;
  numbers : Observable<number> = interval(1000);

  ngOnInit() : void {
    // this.numbers.subscribe(
    //   (data)=>{
    //     this.newNo = data;
    //   }
    // )
  }
}
