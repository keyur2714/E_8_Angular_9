import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {

  item : Item = new Item();
  isSubmitted : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  save(frm:NgForm) : void {
    console.log(frm);
    if(frm.valid){
      this.isSubmitted = true;
      console.log(frm.value);
      console.log(frm.controls["itemName"].value);
      this.item = frm.value;
    }    
  }

}
