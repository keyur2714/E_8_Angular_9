import { Component } from '@angular/core';

@Component({
    selector : 'app-test',
    templateUrl : './test.component.html',
    styleUrls : ['./test.component.css']
})
export class TestComponent{

    firstName : string ='keyur';
    lastName : string ='thakor';

    constructor(){
        console.log("Test Component Object Created...!");
    }
}