import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicStyle } from './directives/basic-styles';
import { ColorDirective } from './directive/color.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicStyle,
    ColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
