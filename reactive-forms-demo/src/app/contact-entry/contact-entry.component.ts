import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Contact } from './contact.mode';

@Component({
  selector: 'app-contact-entry',
  templateUrl: './contact-entry.component.html',
  styleUrls: ['./contact-entry.component.css']
})
export class ContactEntryComponent implements OnInit {

  contactForm : FormGroup;

  contact : Contact = new Contact();
  isSubmitted : boolean = false;

  constructor() { }

  ngOnInit() {
    this.createContactForm();
  }

  createContactForm() : void {
    this.contactForm = new FormGroup({
      firstName : new FormControl('',Validators.required),
      lastName : new FormControl(''),
      mobileNo : new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]+$")]),
      emails : new FormArray([new FormControl('')]),
      gender : new FormControl('F')
    })
  }

  save() : void {
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
      this.contact = this.contactForm.value;
      if(this.contact.gender == 'M'){
        this.contact.gender = 'Male';
      }else if(this.contact.gender == 'F'){
        this.contact.gender = 'Female';
      }
      this.isSubmitted = true;
    }    
  }

  addEmail() : void {
    let emailControl = new FormControl();
    (<FormArray>this.contactForm.controls['emails']).push(emailControl);
  }
}
