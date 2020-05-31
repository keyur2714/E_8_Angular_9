import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicStyle } from './directives/basic-styles';
import { ColorDirective } from './directive/color.directive';
import { MyIfDirective } from './my-if.directive';
import { MyLoopDirective } from './my-loop.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicStyle,
    ColorDirective,
    MyIfDirective,
    MyLoopDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
