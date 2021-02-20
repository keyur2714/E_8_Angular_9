import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuardService } from '../auth-guard.service';
import { ItemComponent } from './item/item.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';

const routes : Routes = [
     {
        path : '' , component : AdminComponent,canActivate : [AuthGuardService],canActivateChild : [AuthGuardService],
        children : [
          {
            path : 'item' , component : ItemComponent
          },
          {
            path : 'item-entry' , component : ItemEntryComponent        
          },
          {
            path : 'item-update/:id' , component : ItemEntryComponent        
          }
        ]
     }
];

@NgModule({

    imports : [RouterModule.forChild(routes)],
    exports:  [RouterModule]

})
export class AdminRoutingModule{
    constructor(){
        console.log("Admin Routing Module Object Created...!");
    }
}