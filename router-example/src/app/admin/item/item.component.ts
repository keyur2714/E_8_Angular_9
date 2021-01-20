import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemList : Item[] = [];

  constructor() { }

  ngOnInit() {
    let item1 = new Item(11,'Tea','Mashala Tea',10);
    let item2 = new Item(12,'Coffee','Hot Coffee',20);
    let item3 = new Item(13,'Hot Milk','Mashala Dudh',20);
    this.itemList.push(item1);
    this.itemList.push(item2);
    this.itemList.push(item3);
  }

}
