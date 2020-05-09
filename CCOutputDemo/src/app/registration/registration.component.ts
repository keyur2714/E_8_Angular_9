import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  selectedCountry : any = {};
  selectedState : any = {};
  countryList : any[] = [
    {
      "code" : "IND",
      "desc" : "India"
    },
    {
      "code" : "US",
      "desc" : "United States"
    },
    {
      "code" : "UK",
      "desc" : "United Kingdom"
    }
  ];

  stateList : any[] = [
    {
      "code" : "MH",
      "desc" : "Maharashtra"
    },
    {
      "code" : "GJ",
      "desc" : "Gujrat"
    },
    {
      "code" : "MP",
      "desc" : "Madhya Pradesh"
    }
  ];

  constructor() { }

  ngOnInit() {
    this.selectedCountry = this.countryList[0];
    this.selectedState = this.stateList[1];
  }

  getCountry(country) : void{
    this.selectedCountry = country;
  }

  getState(state) : void{
    this.selectedState = state;
  }
}
