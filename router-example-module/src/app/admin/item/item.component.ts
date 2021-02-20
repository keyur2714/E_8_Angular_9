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

  delete(itemId : number) : void {
    let confirmMsg = confirm("Are you sure want to delete Item with id : "+itemId + "?");
    if(confirmMsg){
      this.itemService.deleteItemById(itemId).subscribe(
        ()=>{
          alert("Item Deleted with Id : "+itemId);
          this.getItemList();
        }
      )
    }
  }

}
