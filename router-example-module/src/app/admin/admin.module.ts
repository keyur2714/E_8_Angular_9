import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { ItemComponent } from './item/item.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from '../auth-guard.service';
import { AdminRoutingModule } from './admin.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations :[
        AdminComponent,
        ItemComponent,
        ItemEntryComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule,
        AdminRoutingModule
    ],
    providers :[
        AuthGuardService
    ]
})
export class AdminModule {
    constructor(){
        console.log("Admin Module Object Created...!");
    }
}