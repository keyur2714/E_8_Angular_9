import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Item } from '../item/item.model';
import { ItemService } from '../item.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {

  item : Item = new Item();

  updateId : number = -1;

  constructor(private activatedRoute: ActivatedRoute, private location : Location,private itemService : ItemService,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param)=>{        
        if(param.id){
          this.updateId = param.id;          
          this.getItemById(this.updateId);
        }
      }
    )
  }

  getItemById(itemId : number) : void{
    this.itemService.getItemById(itemId).subscribe(
      (data : Item)=>{
        this.item = data;
      }
    )
  }

  back() : void{
    this.location.back();
  }

  save(f: NgForm) : void{
    if(f.valid){
      console.log(this.item);
      if(this.updateId === -1){
        this.itemService.saveItem(this.item).subscribe(
          (data : Item)=>{
            alert("Item Created Successfully with Id "+data.id);
            this.router.navigate(['admin/item']);
          },
          (error)=>{
  
          }
        )
      }else{
        this.itemService.updateItem(this.item).subscribe(
          (data : Item)=>{
            alert("Item Updated Successfully with Id "+data.id);
            this.router.navigate(['admin/item']);
          },
          (error)=>{
  
          }
        )
      }
      
    }
  }
}
