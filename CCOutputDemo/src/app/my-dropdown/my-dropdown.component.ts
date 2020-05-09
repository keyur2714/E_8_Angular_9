import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input() dataList : any[] = [];
  @Input() selectedItem : any = {};

  @Output() getSelectedItem = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    
  }

  setSelectedItem():void{
    this.getSelectedItem.emit(this.selectedItem);
  }

}
