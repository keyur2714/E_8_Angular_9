import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactEntryComponent } from './contact-entry/contact-entry.component';
import { ItemEntryComponent } from './item-entry/item-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactEntryComponent,
    ItemEntryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
