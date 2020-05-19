import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleCalcComponent } from './simple-calc/simple-calc.component';
import { NumberUtilComponent } from './util/number-util.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCalcComponent,
    NumberUtilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
