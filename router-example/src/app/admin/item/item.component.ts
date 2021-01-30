import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemList : Item[] = [];

  constructor(private itemService : ItemService,private router:Router) { }

  ngOnInit() {
    this.getItemList();
  }

  getItemList() : void{
    this.itemService.getItemList().subscribe(
      (data)=>{
        this.itemList = data;
      },
      (error)=>{
        console.log("Error "+error);
      }
    )    
  }

  edit(itemId : number) : void {
   this.router.navigate(['admin/item-update',itemId]);
  }

}
