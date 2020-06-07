import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from './customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormsDemo';
  isSubmitted : boolean = false;
  customer : Customer = new Customer();

  save(frm : NgForm):void{
    console.log(frm);
    if(frm.invalid){
      alert("Please Enter All Require Values...!");
    }else{
      this.isSubmitted = true;
      this.customer = frm.value;
      console.log(frm.value);

    }    
  }
}
