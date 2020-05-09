import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input("message") msg : string = 'Hello Radhe Krishna...!';

  @Output("getCapsMessage") capsMessage = new EventEmitter<string>();
  constructor() { 
    console.log("Message Component Object Created...!");
  }

  ngOnInit() {
    console.log("1");
    this.capsMessage.emit(this.msg.toUpperCase());
  }

}
