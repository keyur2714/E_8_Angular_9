import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-operation',
  templateUrl: './string-operation.component.html',
  styleUrls: ['./string-operation.component.css']
})
export class StringOperationComponent implements OnInit {

  str : string = 'krishna';
  result : string = '';
  msg : string = '';

  constructor() { }

  ngOnInit() {
  }

  convertToUpper() : void {
    //alert("Hello.."+this.str);
    this.result = '';
    if(this.str === ''){
      this.msg = 'Please Enter Any String first.';
    }else{
      this.msg = '';
      this.result = this.str.toUpperCase();
      this.str = '';
    }   
  }

  convertToLower() : void {
    this.result = '';
    if(this.str === ''){
      this.msg = 'Please Enter Any String first.';
    }else{
      this.msg = '';
      this.result = this.str.toLowerCase();
      this.str = '';
    }    
  }

  convertToReverse() : void {
    this.result = '';
    if(this.str === ''){
      this.msg = 'Please Enter Any String first.';
    }else{
      this.msg = '';
      this.result = this.str.split('').reverse().join('');
      this.str = '';
    }
  }
}
