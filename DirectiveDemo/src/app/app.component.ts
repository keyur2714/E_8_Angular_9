import { Component, ViewChild, ElementRef } from '@angular/core';
import { BasicStyle } from './directives/basic-styles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveDemo';
  feelings = 'notgood';
  tableColor : string = 'blue';

  loopCounter : number = 10;

  msg : string = '';


  @ViewChild("tit",{static : false})
  tit : ElementRef;


  @ViewChild(BasicStyle,{static : false})
  basicDirective : BasicStyle;

  changeStyle(value) : void{    
    this.basicDirective.changeStyle(this.tit,value,'75px');
  }
}
