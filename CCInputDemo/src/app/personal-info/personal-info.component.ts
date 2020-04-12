import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  @Input() header : string = 'Personal Information';
  @Input() firstName : string = 'keyur';
  @Input() lastName : string = 'thakor';
  @Input() city : string = 'surat';
  @Input("contact-no") mobileNo : string = '7387029671';
  @Input() email : string = 'keyurjava27@gmail.com';
  @Input() bgColor : string = 'warning';

  constructor() { }

  ngOnInit() {
  }

}
