import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NumberUtilComponent } from '../util/number-util.component';

@Component({
  selector: 'app-simple-calc',
  templateUrl: './simple-calc.component.html',
  styleUrls: ['./simple-calc.component.css']
})
export class SimpleCalcComponent implements OnInit {

  result : number = 0;

  @ViewChild("no1",{static : false})
  number1 : ElementRef;
  @ViewChild("no2",{static : false})
  number2 : ElementRef;

  @ViewChild("res",{static : false})
  res : ElementRef;


  @ViewChild(NumberUtilComponent,{static : false})
  numUtilComponent : NumberUtilComponent;

  constructor() { }

  ngOnInit() {
  }

  add() : void{
    let no1 = this.number1.nativeElement.value;
    let no2 = this.number2.nativeElement.value;
    console.log(this.number1);
    if(this.checkValidData(no1,no2)){
      //this.result = parseInt(no1) + parseInt(no2);
      this.result = this.numUtilComponent.add(parseInt(no1),parseInt(no2));
      this.changeResultStyle();
      this.clearTextBoxValue();
    }else{
      alert("Invalid Input...!");
    }    
  }

  clearTextBoxValue():void{
    this.number1.nativeElement.value = '';
    this.number2.nativeElement.value = ''; 
  }

  changeResultStyle() : void{
    this.res.nativeElement.style.color = 'black';
    this.res.nativeElement.style.background = 'yellow';
  }

  sub() : void{
    let no1 = this.number1.nativeElement.value;
    let no2 = this.number2.nativeElement.value;
    if(this.checkValidData(no1,no2)){
      //this.result = parseInt(no1) - parseInt(no2);
      this.result = this.numUtilComponent.sub(parseInt(no1),parseInt(no2));
      this.changeResultStyle();
      this.clearTextBoxValue();
    }else{
      alert("Invalid Input...!");
    }
  }

  mul() : void{
    let no1 = this.number1.nativeElement.value;
    let no2 = this.number2.nativeElement.value;
    if(this.checkValidData(no1,no2)){
      //this.result = parseInt(no1) * parseInt(no2);
      this.result = this.numUtilComponent.mul(parseInt(no1),parseInt(no2));
      this.changeResultStyle(); 
      this.clearTextBoxValue();
    }else{
      alert("Invalid Input...!");
    }    
  }

  div() : void{
    let no1 = this.number1.nativeElement.value;
    let no2 = this.number2.nativeElement.value;
    if(this.checkValidData(no1,no2)){
      //let n2 = parseInt(no2);
      //if(n2 !== 0)
      this.result = this.numUtilComponent.div(parseInt(no1),parseInt(no2));
      //  this.result = parseInt(no1) / n2;
      this.changeResultStyle();
      this.clearTextBoxValue();  
    }else{
      alert("Invalid Input...!");
    }
    
  }

  checkValidData(no1,no2) : boolean{                
    if(no1 !== '' && no2 !== ''){
      return true;
    }
  }
}
