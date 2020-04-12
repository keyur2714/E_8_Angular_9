import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input("message") msg : string = 'Hello Radhe Krishna...!';
  @Input() msgType : string = 'info';
  constructor() { 
    console.log("Message Component Object Created....");
  }

  ngOnInit() {
  }

}
