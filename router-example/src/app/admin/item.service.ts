import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item/item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  appUrl : string = 'http://localhost:3000/items';

  constructor(private http:HttpClient) { }

  getItemList() : Observable<Item[]>{
    return this.http.get<Item[]>(this.appUrl);
  }

  saveItem(item:Item) : Observable<Item>{
    return this.http.post<Item>(this.appUrl,item);
  }

  getItemById(itemId : number) : Observable<Item>{
    return this.http.get<Item>(this.appUrl+"/"+itemId);
  }

  updateItem(item:Item) : Observable<Item>{
    return this.http.put<Item>(this.appUrl+"/"+item.id,item);
  }

  deleteItemById(itemId : number) : Observable<any> {
    return this.http.delete(this.appUrl+"/"+itemId);
  }
}
