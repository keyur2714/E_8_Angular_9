import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Communication OutputDemo';

  messages : string [] = ["Hi","Hello","Good Morning","Good Afternoon","Good Evening"];

  capitalMessage : string = '';

  getCapitalMsg(msg) : void{
    console.log("2");
    //alert(msg);
    this.capitalMessage = msg;
  }
}
